<template>
  <div>
    <Kbanner v-bind="componentsProps" v-if="showTemplate9.showBanner" />
    <Koffers v-bind="componentsProps" v-if="showTemplate9.showOffers" />
    <Kproductlist
      v-bind="componentsProps"
      v-if="showTemplate9.showProductList"
    />
    <Kblog
      v-bind="componentsProps"
      v-show="listArticulos.length > 0 && showTemplate9.showBlog"
    />
    <KWrapper v-bind="componentsProps" v-if="showTemplate9.showWrapper" />
    <KNews v-bind="componentsProps" v-if="showTemplate9.showNews" />
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
    window.addEventListener('message', this.addEventListenertemplate)
    let domain = this.$route.fullPath
    switch (domain) {
      case '':
        this.$store.state.showTemplate9.showHeader09 = true
        this.$store.state.showTemplate9.showBody09 = true
        this.$store.state.showTemplate9.showFooter09 = true
        this.$store.state.showTemplate9.showCountry = true
        break
      case '/?component=header09':
        this.$store.state.showTemplate9.showHeader09 = true
        this.$store.state.showTemplate9.showBody09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=footer09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showBody09 = false
        this.$store.state.showTemplate9.showFooter09 = true
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=banner09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = true
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=offers09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = true
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=productList09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = true
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=blog09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = true
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=wrapper09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = true
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=newsletter09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = true
        this.$store.state.showTemplate9.showCountry = false
        break
    }
  },
  data() {
    return {
      search: '',
    }
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
      if (e.origin.includes('https://panel.komercia.co')) {
        alert('Prueba eventListener' + e)
      }
    },
  },
  // eslint-disable-next-line no-unused-vars
  $route(to, from) {
    let domain = this.$route.fullPath
    switch (domain) {
      case '':
        this.$store.state.showTemplate9.showHeader09 = true
        this.$store.state.showTemplate9.showBody09 = true
        this.$store.state.showTemplate9.showFooter09 = true
        this.$store.state.showTemplate9.showCountry = true
        break
      case '/?component=header09':
        this.$store.state.showTemplate9.showHeader09 = true
        this.$store.state.showTemplate9.showBody09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=footer09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showBody09 = false
        this.$store.state.showTemplate9.showFooter09 = true
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=banner09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = true
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=offers09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = true
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=productList09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = true
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=blog09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = true
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=wrapper09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = true
        this.$store.state.showTemplate9.showNews = false
        this.$store.state.showTemplate9.showCountry = false
        break
      case '/?component=newsletter09':
        this.$store.state.showTemplate9.showHeader09 = false
        this.$store.state.showTemplate9.showFooter09 = false
        this.$store.state.showTemplate9.showBanner = false
        this.$store.state.showTemplate9.showOffers = false
        this.$store.state.showTemplate9.showProductList = false
        this.$store.state.showTemplate9.showBlog = false
        this.$store.state.showTemplate9.showWrapper = false
        this.$store.state.showTemplate9.showNews = true
        this.$store.state.showTemplate9.showCountry = false
        break
    }
  },
}
</script>
