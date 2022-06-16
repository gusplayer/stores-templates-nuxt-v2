<template lang="html">
  <div class="home">
    <component :is="indexTemplate" v-bind="componentsProps" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  components: {
    K05ProductList: () =>
      import('../../components/template6/Ko6-ProductList-2'),
    K07ProductList: () =>
      import('../../components/template7/Ko-ProductListFilter'),
    K09ProductList: () =>
      import('../../components/template9/Ko-ProductListFilter'),
    K10ProductList: () =>
      import('../../components/template10/Ko-ProductListFilter'),
    K11ProductList: () =>
      import('../../components/template11/ko-ProductListFilter'),
    K13ProductList: () =>
      import('../../components/template13/Ko-ProductListFilter'),
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
          productListComponent = 'K05ProductList'
          break
        case 5:
          productListComponent = 'K05ProductList'
          break
        case 6:
          productListComponent = 'K05ProductList'
          break
        case 7:
          productListComponent = 'K07ProductList'
          break
        case 9:
          productListComponent = 'K09ProductList'
          break
        case 10:
          productListComponent = 'K10ProductList'
          break
        case 11:
          productListComponent = 'K11ProductList'
          break
        case 13:
          productListComponent = 'K13ProductList'
          break
      }
      return productListComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
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
                settingK07ProductList:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.productListFilter
                    ? this.settingByTemplate7.productListFilter
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
                productListFilter:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.productListFilter
                    ? this.settingByTemplate9.productListFilter
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
                productListFilter:
                  this.settingByTemplate10 &&
                  this.settingByTemplate10.productListFilter
                    ? this.settingByTemplate10.productListFilter
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
                productList:
                  this.settingByTemplate11 &&
                  this.settingByTemplate11.productList
                    ? this.settingByTemplate11.productList
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
                productListFilter:
                  this.settingByTemplate13 &&
                  this.settingByTemplate13.productListFilter
                    ? this.settingByTemplate13.productListFilter
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
