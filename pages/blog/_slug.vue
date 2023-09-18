<template>
  <component :is="indexTemplate" v-bind="componentsProps" />
</template>
<script>
import { mapState } from 'vuex'
export default {
  components: {
    K05Article: () => import('../../components/blog/Ko-articulo'),
    K07Article: () =>
      import('../../components/template7/blog_page/Ko-articulo'),
    K09Article: () =>
      import('../../components/template9/blog_page/Ko-articulo.vue'),
    K10Article: () =>
      import('../../components/template10/blog_page/Ko-articulo'),
    K11Article: () =>
      import('../../components/template11/blog_page/Ko-articulo'),
    K13Article: () =>
      import('../../components/template13/_blog/Ko-articulo.vue'),
  },
  layout: 'default',
  data() {
    return {
      componentMapping: {
        3: 'K05Article',
        5: 'K05Article',
        6: 'K05Article',
        7: 'K07Article',
        9: 'K09Article',
        10: 'K10Article',
        11: 'K11Article',
        13: 'K13Article',
        14: 'K13Article',
        15: 'K13Article',
      },
      templateMapping: {
        9: 'SET_CURRENTSETTING09',
        7: 'SET_CURRENTSETTING07',
        11: 'SET_CURRENTSETTING11',
        10: 'SET_CURRENTSETTING10',
        13: 'SET_CURRENTSETTING13',
        14: 'SET_CURRENTSETTING14',
        15: 'SET_CURRENTSETTING15',
        // 16: 'SET_CURRENTSETTING15',
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
      'template',
    ]),
    indexTemplate() {
      let productListComponent = ''
      // eslint-disable-next-line no-prototype-builtins
      if (this.componentMapping.hasOwnProperty(this.template)) {
        productListComponent = this.componentMapping[parseInt(this.template)]
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingGeneral: this.settingByTemplate7?.settingGeneral || null,
        settingK07Blog: this.settingByTemplate7?.blog1 || null,
        settingK05Blog:
          this.settingByTemplate?.settings?.tipo_letra || this.settingBase,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                cardProduct: this.settingByTemplate11?.blog || null,
                setting11General:
                  this.settingByTemplate11?.settingGeneral || null,
              },
            ]
          : null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    addEventListenerTemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data && e.data.component) {
          const template = e.data.template
          // eslint-disable-next-line no-prototype-builtins
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
