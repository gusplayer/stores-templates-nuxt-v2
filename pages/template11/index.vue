<template>
  <div>
    <Kcarousel
      id="kCarouselX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="
        settingByTemplate11 &&
        settingByTemplate11.banner &&
        settingByTemplate11.banner.visible
      "
    />
    <Ksection
      id="kSectionX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate11 &&
        settingByTemplate11.section &&
        settingByTemplate11.section.visible
      "
    />
    <KtrendingHoko
      id="kTredingX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate11 &&
        settingByTemplate11.trending &&
        settingByTemplate11.trending.visible == true &&
        dataHoko &&
        dataHoko.statehoko == 1
      "
    />
    <Ktrending
      id="kTredingX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate11 &&
        settingByTemplate11.trending &&
        settingByTemplate11.trending.visible == true &&
        this.fullProducts.length > 0
      "
    />
    <client-only>
      <Kparallax
        id="kParallaxX"
        v-bind="componentsProps"
        v-if="
          settingByTemplate11 &&
          settingByTemplate11.parallax &&
          settingByTemplate11.parallax.visible
        "
      />
    </client-only>
    <KListtrending
      v-bind="componentsProps"
      v-if="dataHoko.length == 0 || dataHoko.statehoko == 0"
    />
    <KInformacion
      id="kInformationX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate11 &&
        settingByTemplate11.information &&
        settingByTemplate11.information.visible
      "
    />
    <Kblog
      id="kBlogX"
      v-bind="componentsProps"
      v-show="listArticulos.length > 0"
      v-if="
        settingByTemplate11 &&
        settingByTemplate11.blog &&
        settingByTemplate11.blog.visible
      "
    />
  </div>
</template>
<script>
import Kcarousel from '../../components/template11/ko-carousel'
import Ksection from '../../components/template11/ko-section'
import Ktrending from '../../components/template11/ko-trendingProduct'
import KtrendingHoko from '../../components/template11/ko-trendingProduct-hoko'
import Kparallax from '../../components/template11/ko-parallax'
import KListtrending from '../../components/template11/ko-listtrending.vue'
import KInformacion from '../../components/template11/information.vue'
import Kblog from '../../components/template11/ko-blog'

export default {
  components: {
    Kcarousel,
    Ksection,
    Ktrending,
    KtrendingHoko,
    Kparallax,
    KListtrending,
    KInformacion,
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
        settingKinformation:
          this.settingByTemplate11 && this.settingByTemplate11.information
            ? this.settingByTemplate11.information
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
    dataHoko() {
      return this.$store.state.dataHoko
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
        if (e && e.data && e.data.component && e.data.template == 11) {
          console.log(e.data)
          this.$store.commit('SET_CURRENTSETTING11', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 11
        ) {
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
            case 'newsLetter':
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
            case 'card':
              this.moverseA('kTredingX')
              break
            case 'parallax':
              this.moverseA('kParallaxX')
              break
            case 'information':
              this.moverseA('kInformationX')
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
