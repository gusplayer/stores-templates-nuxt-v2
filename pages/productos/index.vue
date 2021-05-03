<template lang="html">
  <div class="home">
    <component
      :is="indexTemplate"
      :style="
        this.settingByTemplate &&
        this.settingByTemplate.settings &&
        this.settingByTemplate.settings['--background_color_1']
          ? this.settingByTemplate.settings
          : this.settingBase
      "
      v-bind="componentsProps"
    />
  </div>
</template>

<script>
import K05ProductList from '../../components/template6/Ko6-ProductList-2'
import K07ProductList from '../../components/template7/Ko-ProductListFilter'
import K09ProductList from '../../components/template9/Ko-ProductListFilter'
import K10ProductList from '../../components/template10/Ko-ProductListFilter'
import K11ProductList from '../../components/template11/ko-ProductListFilter'

export default {
  components: {
    K05ProductList,
    K07ProductList,
    K09ProductList,
    K10ProductList,
    K11ProductList,
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
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
      }
      return productListComponent
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    settingByTemplate9() {
      return this.$store.state.settingByTemplate9
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
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
          this.$store.commit('SET_CURRENTSETTING09', e.data)
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
