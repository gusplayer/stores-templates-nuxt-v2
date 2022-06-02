<template lang="html">
  <div
    v-if="settingByTemplate7"
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate7.settingGeneral &&
          this.settingByTemplate7.settingGeneral.fount_1
            ? this.settingByTemplate7.settingGeneral.fount_1
            : 'David Libre',
      },
      {
        '--font-style-2':
          this.settingByTemplate7.settingGeneral &&
          this.settingByTemplate7.settingGeneral.fount_2
            ? this.settingByTemplate7.settingGeneral.fount_2
            : 'Great Vibes',
      },
      {
        '--font-style-3':
          this.settingByTemplate7.settingGeneral &&
          this.settingByTemplate7.settingGeneral.fount_3
            ? this.settingByTemplate7.settingGeneral.fount_3
            : 'Lora',
      },
    ]"
  >
    <KCarousel
      id="kBannerX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.banner.visible"
      :key="bannerRendering"
    />
    <KPromo
      id="KOffersX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.content.visible"
    />
    <KProductList
      id="KProductListX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.productList.visible"
    />
    <KAdvertising
      id="KAdvertisingX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.advertising.visible"
    />
    <KGify
      id="KGifyX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.ProductFavorite.visible"
    />
    <KHowWork
      id="KHowWork"
      v-bind="componentsProps"
      v-if="settingByTemplate7.howWork.visible"
    />
    <KBlog
      id="KBlogX"
      v-bind="componentsProps"
      v-show="listArticulos.length > 0 && settingByTemplate7.blog.visible"
    />
    <KNews
      id="KNewsX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.newsletter.visible"
    />
    <KWrapper
      id="KWrapperX"
      v-bind="componentsProps"
      v-if="settingByTemplate7.contentImg.visible"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    KCarousel: () =>
      import('../../components/template7/_carouselBanner/ko-carousel'),
    KPromo: () => import('../../components/template7/ko-Banner-Promo'),
    KProductList: () => import('../../components/template7/Ko-ProductList'),
    KAdvertising: () => import('../../components/template7/Ko-advertising'),
    KGify: () => import('../../components/template7/Ko-gify'),
    KHowWork: () => import('../../components/template7/Ko-how-we-work'),
    KNews: () => import('../../components/template7/Ko-Newsletter'),
    KBlog: () => import('../../components/template7/Ko-blog'),
    KWrapper: () => import('../../components/template7/Ko-wrapper'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate07)
  },
  data() {
    return {
      bannerRendering: 0,
    }
  },
  computed: {
    ...mapState(['dataStore', 'listArticulos', 'settingByTemplate7']),
    fullProducts() {
      return this.$store.getters['products/filterProducts']
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
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate07)
  },
  methods: {
    addEventListenerTemplate07(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data && e.data.component && e.data.template == 7) {
          this.$store.commit('SET_CURRENTSETTING07', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 7
        ) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kBannerX')
              break
            case 'header':
              this.moverseA('kBannerX')
              break
            case 'footer':
              this.moverseA('KWrapperX')
              break
            case 'banner':
              this.moverseA('kBannerX')
              break
            case 'content':
              this.moverseA('KOffersX')
              break
            case 'productlist':
              this.moverseA('KProductListX')
              break
            case 'card':
              this.moverseA('KProductListX')
              break
            case 'advertising':
              this.moverseA('KAdvertisingX')
              break
            case 'ProductFavorite':
              this.moverseA('KGifyX')
              break
            case 'howwork':
              this.moverseA('KHowWork')
              break
            case 'blog':
              this.moverseA('KBlogX')
              break
            case 'newsletter':
              this.moverseA('KNewsX')
              break
            case 'contentImg':
              this.moverseA('KWrapperX')
              break
            case 'detailsProduct':
              if (this.fullProducts) {
                this.$router.push({
                  path: '/productos/' + this.fullProducts[0].slug,
                })
              }
              break
            case 'productListFilter':
              this.$router.push({
                path: '/productos',
              })
              break
            case 'contact':
              this.$router.push({
                path: '/contacto',
              })
              break
          }
        } else {
          if (e && e.data && e.data.returnHome == true) {
            this.$router.push({
              path: '/',
            })
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

<style></style>
