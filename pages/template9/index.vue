<template>
  <div v-if="settingByTemplate9">
    <Kbanner
      id="kbannerX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.banner &&
        settingByTemplate9.banner.visible
      "
    />
    <Koffers
      id="KoffersX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.koffers &&
        settingByTemplate9.koffers.visible
      "
    />
    <Kproductlist
      id="KproductlistX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.productList &&
        settingByTemplate9.productList.visible
      "
    />
    <Kblog
      id="KblogX"
      v-bind="componentsProps"
      v-show="
        listArticulos.length > 0 &&
        settingByTemplate9 &&
        settingByTemplate9.blog &&
        settingByTemplate9.blog.visible
      "
    />
    <KWrapper
      id="KWrapperX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.wrapper &&
        settingByTemplate9.wrapper.visible
      "
    />
    <KNews
      id="KNewsX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.newsletter &&
        settingByTemplate9.newsletter.visible
      "
    />
  </div>
</template>

<script>
import Kbanner from '../../components/template9/ko-carousel'
import Koffers from '../../components/template9/ko-offers'
import Kproductlist from '../../components/template9/Ko-ProductList'
import Kblog from '../../components/template9/ko-blog'
import KWrapper from '../../components/template9/Ko-wrapper'
import KNews from '../../components/template9/Ko-Newsletter'
export default {
  layout: 'default',
  components: {
    Kbanner,
    Koffers,
    Kproductlist,
    Kblog,
    KWrapper,
    KNews,
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
    listArticulos() {
      return this.$store.state.listArticulos
    },
    settingByTemplate9() {
      return this.$store.state.settingByTemplate9
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate9 && this.settingByTemplate9.settingGeneral
            ? this.settingByTemplate9.settingGeneral
            : null,
        banner:
          this.settingByTemplate9 && this.settingByTemplate9.banner
            ? this.settingByTemplate9.banner
            : null,
        koffers:
          this.settingByTemplate9 && this.settingByTemplate9.koffers
            ? this.settingByTemplate9.koffers
            : null,
        productList:
          this.settingByTemplate9 && this.settingByTemplate9.productList
            ? this.settingByTemplate9.productList
            : null,
        productListCard:
          this.settingByTemplate9 && this.settingByTemplate9.cardProduct
            ? this.settingByTemplate9.cardProduct
            : null,
        blog:
          this.settingByTemplate9 && this.settingByTemplate9.blog
            ? this.settingByTemplate9.blog
            : null,
        newsletter:
          this.settingByTemplate9 && this.settingByTemplate9.newsletter
            ? this.settingByTemplate9.newsletter
            : null,
        wrapper:
          this.settingByTemplate9 && this.settingByTemplate9.wrapper
            ? this.settingByTemplate9.wrapper
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
        } else if (e && e.data && e.data.componentToEdit) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kbannerX')
              break
            // case 'header':
            //   this.moverseA('kbannerX')
            //   break
            case 'footer':
              this.moverseA('KNewsX')
              break
            case 'banner':
              this.moverseA('kbannerX')
              break
            case 'koffers':
              this.moverseA('KoffersX')
              break
            case 'productList':
              this.moverseA('KproductlistX')
              break
            case 'blog':
              this.moverseA('KblogX')
              break
            case 'wrapper':
              this.moverseA('KWrapperX')
              break
            case 'newsletter':
              this.moverseA('KNewsX')
              break
          }
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento
    },
  },
}
</script>
