<template>
  <div>
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
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
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
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
    fullProducts() {
      return this.$store.getters['products/filterProducts']
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
        case 13:
          productListComponent = 'Ko13ProductDetail'
          break
      }
      return productListComponent
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
        settingByTemplate13: this.settingByTemplate13
          ? [
              {
                detailsProduct:
                  this.settingByTemplate13 &&
                  this.settingByTemplate13.detailsProduct
                    ? this.settingByTemplate13.detailsProduct
                    : null,
                cardProduct:
                  this.settingByTemplate13 &&
                  this.settingByTemplate13.cardProduct
                    ? this.settingByTemplate13.cardProduct
                    : null,
                setting13General:
                  this.settingByTemplate13 &&
                  this.settingByTemplate13.settingGeneral
                    ? this.settingByTemplate13.settingGeneral
                    : null,
              },
            ]
          : null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    addEventListenerTemplate(e) {
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
          } else if (e.data.template == 13) {
            this.$store.commit('SET_CURRENTSETTING13', e.data)
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
