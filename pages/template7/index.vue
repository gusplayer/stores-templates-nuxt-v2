<template lang="html">
  <div>
    <KCarousel
      v-bind="componentsProps"
      v-if="showTemplate7.showCarousel && settingByTemplate7.banner.visible"
    />
    <KPromo
      v-bind="componentsProps"
      v-if="showTemplate7.showPromo && settingByTemplate7.content.visible"
    />
    <KProductList
      v-bind="componentsProps"
      v-if="
        showTemplate7.showProductList && settingByTemplate7.productList.visible
      "
    />
    <KAdvertising
      v-bind="componentsProps"
      v-if="
        showTemplate7.showAdvertising && settingByTemplate7.advertising.visible
      "
    />
    <KGify
      v-bind="componentsProps"
      v-if="
        showTemplate7.showGify && settingByTemplate7.ProductFavorite.visible
      "
    />
    <KHowwork
      v-bind="componentsProps"
      v-if="showTemplate7.showHowwork && settingByTemplate7.howWork.visible"
    />
    <KBlog
      v-bind="componentsProps"
      v-show="
        listArticulos.length > 0 &&
        showTemplate7.showBlog &&
        settingByTemplate7.blog.visible
      "
    />
    <KNews
      v-bind="componentsProps"
      v-if="showTemplate7.showNews && settingByTemplate7.newsletter.visible"
    />
    <KWrapper
      v-bind="componentsProps"
      v-if="showTemplate7.showWrapper && settingByTemplate7.contentImg.visible"
    />
  </div>
</template>

<script>
import KCarousel from '../../components/template7/_carouselBanner/ko-carousel'
import KPromo from '../../components/template7/ko-Banner-Promo'
import KProductList from '../../components/template7/Ko-ProductList'
import KAdvertising from '../../components/template7/Ko-advertising'
import KGify from '../../components/template7/Ko-gify'
import KHowwork from '../../components/template7/Ko-how-we-work'
import KNews from '../../components/template7/Ko-Newsletter'
import KBlog from '../../components/template7/Ko-blog'
import KWrapper from '../../components/template7/Ko-wrapper'

export default {
  layout: 'default',
  components: {
    KCarousel,
    KPromo,
    KProductList,
    KAdvertising,
    KGify,
    KHowwork,
    KNews,
    KBlog,
    KWrapper,
  },
  mounted() {
    window.addEventListener('message', this.addEventListenertemplate)
    let domain = this.$route.fullPath
    switch (domain) {
      case '':
        this.$store.state.showTemplate7.showHeader07 = true
        this.$store.state.showTemplate7.showBody07 = true
        this.$store.state.showTemplate7.showFooter07 = true
        this.$store.state.showTemplate7.showCountry = true
        break
      case '/?component=header':
        this.$store.state.showTemplate7.showHeader07 = true
        this.$store.state.showTemplate7.showBody07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=footer':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showBody07 = false
        this.$store.state.showTemplate7.showFooter07 = true
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=banner':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = true
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=promo':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = true
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=productlist':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = true
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=advertising':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = true
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=gify':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = true
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=howwork':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = true
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=blog':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = true
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=newsletter':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = true
        this.$store.state.showTemplate7.showWrapper = false
        this.$store.state.showTemplate7.showCountry = false
        break
      case '/?component=instagram':
        this.$store.state.showTemplate7.showHeader07 = false
        this.$store.state.showTemplate7.showFooter07 = false
        this.$store.state.showTemplate7.showCarousel = false
        this.$store.state.showTemplate7.showPromo = false
        this.$store.state.showTemplate7.showProductList = false
        this.$store.state.showTemplate7.showAdvertising = false
        this.$store.state.showTemplate7.showGify = false
        this.$store.state.showTemplate7.showHowwork = false
        this.$store.state.showTemplate7.showBlog = false
        this.$store.state.showTemplate7.showNews = false
        this.$store.state.showTemplate7.showWrapper = true
        this.$store.state.showTemplate7.showCountry = false
        break
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
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate7 && this.settingByTemplate7.settingGeneral
            ? this.settingByTemplate7.settingGeneral
            : null,
        settingKCarousel:
          this.settingByTemplate7 && this.settingByTemplate7.banner
            ? this.settingByTemplate7.banner
            : null,
        settingKPromo:
          this.settingByTemplate7 && this.settingByTemplate7.content
            ? this.settingByTemplate7.content
            : null,
        settingKProductList:
          this.settingByTemplate7 && this.settingByTemplate7.productList
            ? this.settingByTemplate7.productList
            : null,
        settingKProdutCard:
          this.settingByTemplate7 && this.settingByTemplate7.card
            ? this.settingByTemplate7.card
            : null,
        settingKGify:
          this.settingByTemplate7 && this.settingByTemplate7.ProductFavorite
            ? this.settingByTemplate7.ProductFavorite
            : null,
        settingKHowwork:
          this.settingByTemplate7 && this.settingByTemplate7.howWork
            ? this.settingByTemplate7.howWork
            : null,
        settingKNews:
          this.settingByTemplate7 && this.settingByTemplate7.newsletter
            ? this.settingByTemplate7.newsletter
            : null,
        settingKWrapper:
          this.settingByTemplate7 && this.settingByTemplate7.contentImg
            ? this.settingByTemplate7.contentImg
            : null,
        settingKAdvertising:
          this.settingByTemplate7 && this.settingByTemplate7.advertising
            ? this.settingByTemplate7.advertising
            : null,
        settingKBlog:
          this.settingByTemplate7 && this.settingByTemplate7.blog
            ? this.settingByTemplate7.blog
            : null,
      }
    },
    showTemplate7() {
      return this.$store.state.showTemplate7
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
  watch: {
    // eslint-disable-next-line no-unused-vars
    $route(to, from) {
      let domain = this.$route.fullPath
      switch (domain) {
        case '':
          this.$store.state.showTemplate7.showHeader07 = true
          this.$store.state.showTemplate7.showBody07 = true
          this.$store.state.showTemplate7.showFooter07 = true
          this.$store.state.showTemplate7.showCountry = true
          break
        case '/?component=header':
          this.$store.state.showTemplate7.showHeader07 = true
          this.$store.state.showTemplate7.showBody07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=footer':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showBody07 = false
          this.$store.state.showTemplate7.showFooter07 = true
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=banner':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = true
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=promo':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = true
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=productlist':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = true
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=advertising':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = true
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=gify':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = true
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=howwork':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = true
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=blog':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = true
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=newsletter':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = true
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate7.showCountry = false
          break
        case '/?component=instagram':
          this.$store.state.showTemplate7.showHeader07 = false
          this.$store.state.showTemplate7.showFooter07 = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = true
          this.$store.state.showTemplate7.showCountry = false
          break
      }
    },
  },
}
</script>

<style>
.search-movil {
  display: none;
}
input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}
input[type='search'] {
  background: transparent;
  border: solid 2px var(--color_icon);
  padding: 4px 7px;
  width: 35px;
  max-height: 36px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
#demo-1 input[type='search'] {
  background: #fff;
  border: solid 2px grey;
  padding: 6px 4px 7px 38px;
  width: 100%;
  -webkit-border-radius: var(--radius_btn);
  -moz-border-radius: var(--radius_btn);
  border-radius: var(--radius_btn);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  box-sizing: border-box;
}
#demo-1 input[type='search']:focus {
  width: 100%;
  background-color: #fff;
  border-color: var(--btnhover);
  box-sizing: border-box;
}
input[type='search']:focus {
  background-color: #fff;
  border-color: var(--color_hover_text);
}
input:-moz-placeholder {
  color: var(--color_text);
}
input::-webkit-input-placeholder {
  color: var(--color_text);
}
.space-search {
  display: none;
}
.icon-s {
  font-size: 25px;
  color: grey;
  position: absolute;
  top: 3px;
  left: 8px;
  cursor: pointer;
}
@media (max-width: 500px) {
  .space-search {
    display: flex;
    width: 100%;
    height: 40px;
  }
  .search-movil {
    width: 100%;
    display: flex;
    position: fixed;
    padding: 2px 5px 0px;
    background: var(--background_color_1);
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    transition: all 0.8s;
    top: 91px;
    z-index: 3;
  }
}
</style>
