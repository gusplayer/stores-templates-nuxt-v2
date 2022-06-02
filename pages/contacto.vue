<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    K05Contact: () => import('../components/template5/Ko-Contact-1'),
    K07Contact: () => import('../components/template7/Ko-Contact'),
    K09Contact: () => import('../components/template9/Ko-Contact'),
    K10Contact: () => import('../components/template10/ko-Contact'),
    K11Contact: () => import('../components/template11/ko-Contact'),
    K13Contact: () => import('../components/template13/Ko-Contact-1'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
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
      switch (this.template) {
        case 3:
          productListComponent = 'K05Contact'
          break
        case 5:
          productListComponent = 'K05Contact'
          break
        case 6:
          productListComponent = 'K05Contact'
          break
        case 7:
          productListComponent = 'K07Contact'
          break
        case 9:
          productListComponent = 'K09Contact'
          break
        case 10:
          productListComponent = 'K10Contact'
          break
        case 11:
          productListComponent = 'K11Contact'
          break
        case 13:
          productListComponent = 'K13Contact'
          break
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingK05Contact:
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings
            : this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                settingK07Contact:
                  this.settingByTemplate7 && this.settingByTemplate7.contact
                    ? this.settingByTemplate7.contact
                    : null,
                settingGeneral:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.settingGeneral
                    ? this.settingByTemplate7.settingGeneral
                    : null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                cardProduct:
                  this.settingByTemplate9 && this.settingByTemplate9.contact
                    ? this.settingByTemplate9.contact
                    : null,
                setting9General:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.settingGeneral
                    ? this.settingByTemplate9.settingGeneral
                    : null,
              },
            ]
          : null,

        settingByTemplate10: this.settingByTemplate10
          ? [
              {
                contact:
                  this.settingByTemplate10 && this.settingByTemplate10.contact
                    ? this.settingByTemplate10.contact
                    : null,
                setting10General:
                  this.settingByTemplate10 &&
                  this.settingByTemplate10.settingGeneral
                    ? this.settingByTemplate10.settingGeneral
                    : null,
              },
            ]
          : null,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                contact:
                  this.settingByTemplate11 && this.settingByTemplate11.contact
                    ? this.settingByTemplate11.contact
                    : null,
                setting11General:
                  this.settingByTemplate11 &&
                  this.settingByTemplate11.settingGeneral
                    ? this.settingByTemplate11.settingGeneral
                    : null,
              },
            ]
          : null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenertemplate)
  },
  methods: {
    addEventListenertemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data && e.data.component) {
          if (e.data.template == 9) {
            this.$store.commit('SET_CURRENTSETTING09', e.data)
          } else if (e.data.template == 7) {
            this.$store.commit('SET_CURRENTSETTING07', e.data)
          } else if (e.data.template == 11) {
            this.$store.commit('SET_CURRENTSETTING11', e.data)
          } else if (e.data.template == 10) {
            this.$store.commit('SET_CURRENTSETTING10', e.data)
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
