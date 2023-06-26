<template>
  <component :is="indexTemplate" v-bind="componentsProps" />
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {
    Ko5ProductDetail: () =>
      import('../../components/template5/Ko-ProductDetail-1'),
    Ko7ProductDetail: () =>
      import('../../components/template7/Ko-ProductDetail'),
    Ko9ProductDetail: () =>
      import('../../components/template9/Ko-ProductDetail'),
    Ko10ProductDetail: () =>
      import('../../components/template10/Ko-ProductDetail'),
    Ko11ProductDetail: () =>
      import('../../components/template11/ko-ProductDetail'),
    Ko13ProductDetail: () =>
      import('../../components/template13/Ko-ProductDetail-1.vue'),
    Ko14ProductDetail: () =>
      import('../../components/template14/Ko-ProductDetail-1.vue'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  data() {
    return {
      componentMapping: {
        3: 'Ko5ProductDetail',
        5: 'Ko5ProductDetail',
        6: 'Ko5ProductDetail',
        7: 'Ko7ProductDetail',
        9: 'Ko9ProductDetail',
        10: 'Ko10ProductDetail',
        11: 'Ko11ProductDetail',
        13: 'Ko13ProductDetail',
        14: 'Ko14ProductDetail',
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
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
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
        productsData: this.fullProducts,
        whatsapp: this.dataStore.tienda.whatsapp,
        envios: this.dataStore.medios_envio,
        facebookPixel: this.$store.state.analytics_tagmanager,
        settingByTemplate: this.createSettingByTemplate(
          this.settingByTemplate,
          'settings',
          'tipo_letra',
          this.settingBase
        ),
        settingByTemplate7: this.createNestedSetting(
          this.settingByTemplate7,
          ['settingGeneral', 'detailsProduct', 'card'],
          null
        ),
        settingByTemplate9: this.createNestedSetting(
          this.settingByTemplate9,
          ['cardProduct', 'detailsProduct', 'settingGeneral'],
          null
        ),
        settingByTemplate10: this.createNestedSetting(
          this.settingByTemplate10,
          ['cardProduct', 'detailsProduct', 'settingGeneral'],
          null
        ),
        settingByTemplate11: this.createNestedSetting(
          this.settingByTemplate11,
          ['detailsProduct', 'cardProduct', 'settingGeneral'],
          null
        ),
        settingByTemplate13: this.createNestedSetting(
          this.settingByTemplate13,
          ['detailsProduct', 'cardProduct', 'settingsGeneral'],
          null
        ),
        settingByTemplate14: this.createNestedSetting(
          this.settingByTemplate14,
          ['detailsProducts', 'cardProducts', 'settingsGeneral'],
          null
        ),
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    createSettingByTemplate(
      settingByTemplate,
      property1,
      property2,
      defaultValue
    ) {
      if (
        settingByTemplate &&
        settingByTemplate[property1] &&
        settingByTemplate[property1][property2]
      ) {
        return settingByTemplate[property1]
      }
      return defaultValue
    },
    createNestedSetting(setting, properties, defaultValue) {
      if (setting) {
        const nestedSetting = {}
        properties.forEach((property) => {
          nestedSetting[property] =
            setting && setting[property] ? setting[property] : null
        })
        return [nestedSetting]
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

<style></style>
