<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import Ko5ProductDetailHoko from '../../components/template5/Ko-ProductDetailHoko-1.vue'
import Ko9ProductDetailhoko from '../../components/template9/Ko-ProductDetailHoko.vue'
import Ko11ProductDetailHoko from '../../components/template11/ko-ProductDetailHoko'
import KoNodisponibleHoko from '../../components/Hoko/Ko-nodisponible.vue'

export default {
  components: {
    Ko5ProductDetailHoko,
    Ko9ProductDetailhoko,
    Ko11ProductDetailHoko,
    KoNodisponibleHoko,
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
          productListComponent = 'Ko5ProductDetailHoko'
          break
        case 5:
          productListComponent = 'Ko5ProductDetailHoko'
          break
        case 6:
          productListComponent = 'KoNodisponibleHoko'
          break
        case 7:
          productListComponent = 'KoNodisponibleHoko'
          break
        case 9:
          productListComponent = 'Ko9ProductDetailhoko'
          break
        case 10:
          productListComponent = 'KoNodisponibleHoko'
          break
        case 11:
          productListComponent = 'Ko11ProductDetailHoko'
          break
      }
      return productListComponent
    },
    dataHoko() {
      return this.$store.state.dataHoko
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    settingByTemplate9() {
      return this.$store.state.settingByTemplate9
    },
    settingByTemplate10() {
      return this.$store.state.settingByTemplate10
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
          this.settingByTemplate.settings.tipo_letra
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

        settingByTemplate10: this.settingByTemplate10
          ? [
              {
                cardProduct:
                  this.settingByTemplate10 &&
                  this.settingByTemplate10.cardProduct
                    ? this.settingByTemplate10.cardProduct
                    : null,
                detailsProduct:
                  this.settingByTemplate10 &&
                  this.settingByTemplate10.detailsProduct
                    ? this.settingByTemplate10.detailsProduct
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

<style></style>
