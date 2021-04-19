<template>
  <div v-if="settingByTemplate9">
    <Kbanner
      v-bind="componentsProps"
      v-if="
        showTemplate9.showBanner &&
        settingByTemplate9 &&
        settingByTemplate9.banner &&
        settingByTemplate9.banner.visible
      "
    />
    <Koffers
      v-bind="componentsProps"
      v-if="
        showTemplate9.showOffers &&
        settingByTemplate9 &&
        settingByTemplate9.koffers &&
        settingByTemplate9.koffers.visible
      "
    />
    <Kproductlist
      v-bind="componentsProps"
      v-if="
        showTemplate9.showProductList &&
        settingByTemplate9 &&
        settingByTemplate9.productList &&
        settingByTemplate9.productList.visible
      "
    />
    <Kblog
      v-bind="componentsProps"
      v-show="
        listArticulos.length > 0 &&
        showTemplate9.showBlog &&
        settingByTemplate9 &&
        settingByTemplate9.blog &&
        settingByTemplate9.blog.visible
      "
    />
    <KWrapper
      v-bind="componentsProps"
      v-if="
        showTemplate9.showWrapper &&
        settingByTemplate9 &&
        settingByTemplate9.wrapper &&
        settingByTemplate9.wrapper.visible
      "
    />
    <KNews
      v-bind="componentsProps"
      v-if="
        showTemplate9.showNews &&
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
import showComponent09 from '../../mixins/showComponent'

export default {
  layout: 'default',
  mixins: [showComponent09],
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
    let domain = this.$route.fullPath
    this.showComponent09(domain)
  },
  data() {
    return {}
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
    showTemplate9() {
      return this.$store.state.showTemplate9
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenertemplate)
  },
  methods: {
    addEventListenertemplate(e) {
      // console.log(e)
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data) {
          this.$store.commit('SET_CURRENTSETTING09', e.data)
        }
      }
    },
  },
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      let domain = this.$route.fullPath
      this.showComponent09(domain)
    },
  },
}
</script>
