<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import Ko5ProductDetail from '../../components/template5/Ko-ProductDetail-1'
import Ko7ProductDetail from '../../components/template7/Ko-ProductDetail'
import Ko9ProductDetail from '../../components/template9/Ko-ProductDetail'
import Ko10ProductDetail from '../../components/template10/Ko-ProductDetail'
import Ko11ProductDetail from '../../components/template11/ko-ProductDetail'

export default {
  components: {
    Ko5ProductDetail,
    Ko7ProductDetail,
    Ko9ProductDetail,
    Ko10ProductDetail,
    Ko11ProductDetail,
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
    settingBase() {
      return this.$store.state.settingBase
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    template() {
      return this.$store.state.template
    },
    indexTemplate() {
      let productListComponent = ''
      switch (this.template) {
        case 3:
          productListComponent = 'Ko5ProductDetail'
          break
        case 5:
          productListComponent = 'Ko5ProductDetail'
          break
        case 6:
          productListComponent = 'Ko5ProductDetail'
          break
        case 7:
          productListComponent = 'Ko7ProductDetail'
          break
        case 9:
          productListComponent = 'Ko9ProductDetail'
          break
        case 10:
          productListComponent = 'Ko10ProductDetail'
          break
        case 11:
          productListComponent = 'Ko11ProductDetail'
          break
      }
      return productListComponent
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    settingByTemplate9() {
      return this.$store.state.settingByTemplate9
    },
    settingByTemplate11() {
      return this.$store.state.settingByTemplate11
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp
    },
    envios() {
      return this.dataStore.medios_envio
    },
    integracioneStore() {
      return this.$store.state.analytics_tagmanager
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        productsData: this.fullProducts,
        whatsapp: this.whatsapp,
        envios: this.envios,
        facebooPixel: this.integracioneStore,
        settingByTemplate:
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings['--background_color_1']
            ? this.settingByTemplate.settings
            : this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                settingGeneral:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.settingGeneral
                    ? this.settingByTemplate7.settingGeneral
                    : null,
                settingK07DetailsProduct:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.detailsProduct
                    ? this.settingByTemplate7.detailsProduct
                    : null,
                settingKProdutCard:
                  this.settingByTemplate7 && this.settingByTemplate7.card
                    ? this.settingByTemplate7.card
                    : null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                cardProduct:
                  this.settingByTemplate9 && this.settingByTemplate9.cardProduct
                    ? this.settingByTemplate9.cardProduct
                    : null,
                detailsProduct:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.detailsProduct
                    ? this.settingByTemplate9.detailsProduct
                    : null,
                setting9General:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.settingGeneral
                    ? this.settingByTemplate9.settingGeneral
                    : null,
              },
            ]
          : null,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                detailsProduct:
                  this.settingByTemplate11 &&
                  this.settingByTemplate11.detailsProduct
                    ? this.settingByTemplate11.detailsProduct
                    : null,
                cardProduct:
                  this.settingByTemplate11 &&
                  this.settingByTemplate11.cardProduct
                    ? this.settingByTemplate11.cardProduct
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
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data && e.data.component) {
          if (e.data.template == 9) {
            this.$store.commit('SET_CURRENTSETTING09', e.data)
          } else if (e.data.template == 7) {
            this.$store.commit('SET_CURRENTSETTING07', e.data)
          } else if (e.data.template == 11) {
            this.$store.commit('SET_CURRENTSETTING11', e.data)
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
