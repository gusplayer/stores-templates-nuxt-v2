<template>
  <component :is="indexTemplate" v-bind="componentsProps" />
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    K05Contact: () => import('@/components/template5/Ko-Contact-1'),
    K07Contact: () => import('@/components/template7/Ko-Contact'),
    K09Contact: () => import('@/components/template9/Ko-Contact'),
    K10Contact: () => import('@/components/template10/ko-Contact'),
    K11Contact: () => import('@/components/template11/ko-Contact'),
    K13Contact: () => import('@/components/template13/Ko-Contact-1'),
    K14Contact: () => import('@/components/template14/Ko-Contact-1'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  data() {
    return {
      componentMapping: {
        3: 'K05Contact',
        5: 'K05Contact',
        6: 'K05Contact',
        7: 'K07Contact',
        9: 'K09Contact',
        10: 'K10Contact',
        11: 'K11Contact',
        13: 'K13Contact',
        14: 'K14Contact',
      },
      templateMapping: {
        9: 'SET_CURRENTSETTING09',
        7: 'SET_CURRENTSETTING07',
        11: 'SET_CURRENTSETTING11',
        10: 'SET_CURRENTSETTING10',
        13: 'SET_CURRENTSETTING13',
        14: 'SET_CURRENTSETTING14',
      },
    }
  },
  computed: {
    ...mapState([
      'dataStore',
      'settingBase',
      'settingByTemplate',
      'settingByTemplate7',
      'settingByTemplate9',
      'settingByTemplate10',
      'settingByTemplate11',
      'settingByTemplate13',
      'settingByTemplate14',
      'template',
    ]),
    indexTemplate() {
      let productListComponent = ''
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)]
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingK05Contact: this.settingByTemplate?.settings ?? this.settingBase,
        settingByTemplate7: this.createSettingByTemplate(
          this.settingByTemplate7,
          'contact',
          'settingGeneral'
        ),
        settingByTemplate9: this.createSettingByTemplate(
          this.settingByTemplate9,
          'contact',
          'settingGeneral'
        ),
        settingByTemplate10: this.createSettingByTemplate(
          this.settingByTemplate10,
          'contact',
          'settingGeneral'
        ),
        settingByTemplate11: this.createSettingByTemplate(
          this.settingByTemplate11,
          'contact',
          'settingGeneral'
        ),
        settingByTemplate13: this.createSettingByTemplate(
          this.settingByTemplate13,
          'contact',
          'settingGeneral'
        ),
        settingByTemplate14: this.createSettingByTemplate(
          this.settingByTemplate14,
          'contact',
          'settingsGeneral'
        ),
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    createSettingByTemplate(settingByTemplate, contactKey, settingGeneralKey) {
      if (settingByTemplate) {
        return [
          {
            [contactKey]: settingByTemplate[contactKey] ?? null,
            [settingGeneralKey]: settingByTemplate[settingGeneralKey] ?? null,
          },
        ]
      }
      return null
    },
    addEventListenerTemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data && e.data.component) {
          const template = e.data.template
          if (this.templateMapping.hasOwnProperty(template)) {
            const commitAction = this.templateMapping[template]
            this.$store.commit(commitAction, e.data)
          }
        } else if (e && e.data && e.data.returnHome == true) {
          this.$router.push({
            path: '/',
          })
        }
      }
    },
  },
}
</script>
