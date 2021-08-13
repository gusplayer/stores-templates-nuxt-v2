<template>
  <div>
    <Kcarousel
      id="kCarouselX"
      v-bind="componentsProps"
      :key="bannerRendering"
    ></Kcarousel>
    <Ksection id="kSectionX" v-bind="componentsProps"></Ksection>
    <Ktrending id="kTredingX" v-bind="componentsProps"></Ktrending>
    <Kparallax id="kParallaxX" v-bind="componentsProps"></Kparallax>
    <Ktrending id="kTreding2X" v-bind="componentsProps"></Ktrending>
    <Kblog
      id="kBlogX"
      v-bind="componentsProps"
      v-show="listArticulos.length > 0"
    ></Kblog>
  </div>
</template>
<script>
import Kcarousel from '../../components/template11/ko-carousel'
import Ksection from '../../components/template11/ko-section'
import Ktrending from '../../components/template11/ko-trendingProduct'
import Kparallax from '../../components/template11/ko-parallax'
import Kblog from '../../components/template11/ko-blog'

export default {
  components: {
    Kcarousel,
    Ksection,
    Ktrending,
    Kparallax,
    Kblog,
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
  },
  data() {
    return {
      bannerRendering: 0,
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
    settingByTemplate11() {
      return this.$store.state.settingByTemplate11
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate11 && this.settingByTemplate11.settingGeneral
            ? this.settingByTemplate11.settingGeneral
            : null,
        settingKbanner:
          this.settingByTemplate11 && this.settingByTemplate11.banner
            ? this.settingByTemplate11.banner
            : null,
        settingKblog:
          this.settingByTemplate11 && this.settingByTemplate11.blog
            ? this.settingByTemplate11.blog
            : null,
        settingKcardProduct:
          this.settingByTemplate11 && this.settingByTemplate11.cardProduct
            ? this.settingByTemplate11.cardProduct
            : null,
        settingKcontact:
          this.settingByTemplate11 && this.settingByTemplate11.contact
            ? this.settingByTemplate11.contact
            : null,
        settingKfooter:
          this.settingByTemplate11 && this.settingByTemplate11.footer
            ? this.settingByTemplate11.footer
            : null,
        settingKheader:
          this.settingByTemplate11 && this.settingByTemplate11.header
            ? this.settingByTemplate11.header
            : null,
        settingKinformation:
          this.settingByTemplate11 && this.settingByTemplate11.information
            ? this.settingByTemplate11.information
            : null,
        settingKnewsletter:
          this.settingByTemplate11 && this.settingByTemplate11.newsletter
            ? this.settingByTemplate11.newsletter
            : null,
        settingKparallax:
          this.settingByTemplate11 && this.settingByTemplate11.parallax
            ? this.settingByTemplate11.parallax
            : null,
        settingKproductList:
          this.settingByTemplate11 && this.settingByTemplate11.productList
            ? this.settingByTemplate11.productList
            : null,
        settingKsection:
          this.settingByTemplate11 && this.settingByTemplate11.section
            ? this.settingByTemplate11.section
            : null,
        settingKtrending:
          this.settingByTemplate11 && this.settingByTemplate11.trending
            ? this.settingByTemplate11.trending
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
          this.$store.commit('SET_CURRENTSETTING11', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (e && e.data && e.data.componentToEdit) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kbannerX')
              break
            case 'header':
              this.moverseA('kbannerX')
              break
            case 'footer':
              this.moverseA('kBlogX')
              break
            case 'banner':
              this.moverseA('kCarouselX')
              break
            case 'section':
              this.moverseA('kSectionX')
              break
            case 'treding':
              this.moverseA('kTredingX')
              break
            case 'parallax':
              this.moverseA('kParallaxX')
              break
            case 'treding2':
              this.moverseA('kTreding2X')
              break
            case 'blog':
              this.moverseA('kBlogX')
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
