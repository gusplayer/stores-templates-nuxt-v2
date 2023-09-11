<template>
  <div
    v-if="settingByTemplate15"
    :style="[
      {
        '--font-style-1':
          settingByTemplate15?.settingGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <ko15-Banner
      id="kBannerX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="settingByTemplate15?.banner?.visible"
    />
    <ko15-Categories
      id="kCategoriesX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.categories?.visible"
    />
    <ko15-Content
      id="kContentX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.content?.visible"
    />
    <ko15-productListHome
      id="kListProductsHomeX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.listProductsHome?.visible"
    />
    <ko15-information
      id="kInformationX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.information?.visible"
    />
    <ko15-informationLogos
      id="kInformationLogosX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.informationLogos?.visible"
    />
    <ko15-information2
      id="kInformation2X"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.information2?.visible"
    />
    <ko15-listProductsOffers
      id="kListProductsOffersX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.listProductsOffers?.visible"
    />
    <ko15-Banner2
      id="kBanner2X"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.banner2?.visible"
    />
    <Ko15-logos
      id="kLogosX"
      v-bind="componentsProps"
      v-if="settingByTemplate15?.logos?.visible"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template15',
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  data() {
    return {
      bannerRendering: 0,
    }
  },
  computed: {
    ...mapState([
      'dataStore',
      'listArticulos',
      'settingByTemplate15',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: this.settingByTemplate15?.settingGeneral ?? null,
        banner: this.settingByTemplate15?.banner ?? null,
        categories: this.settingByTemplate15?.categories ?? null,
        content: this.settingByTemplate15?.content ?? null,
        listProductsHome: this.settingByTemplate15?.listProductsHome ?? null,
        cardProducts: this.settingByTemplate15?.cardProducts ?? null,
        information: this.settingByTemplate15?.information ?? null,
        informationLogos: this.settingByTemplate15?.informationLogos ?? null,
        information2: this.settingByTemplate15?.information2 ?? null,
        listProductsOffers:
          this.settingByTemplate15?.listProductsOffers ?? null,
        banner2: this.settingByTemplate15?.banner2 ?? null,
        logos: this.settingByTemplate15?.logos ?? null,
      }
    },
    dataHoko() {
      return this.$store.state.dataHoko
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    addEventListenerTemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data && e.data.component && e.data.template == 15) {
          console.log(e.data.component)
          this.$store.commit('SET_CURRENTSETTING15', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 15
        ) {
          switch (e.data.componentToEdit) {
            case 'banner':
              this.moverseA('kBannerX')
              break
            case 'categories':
              this.moverseA('kCategoriesX')
              break
            case 'content':
              this.moverseA('kContentX')
              break
            case 'listProductsHome':
              this.moverseA('kListProductsHomeX')
              break
            case 'information':
              this.moverseA('kInformationX')
              break
            case 'informationLogos':
              this.moverseA('kInformationLogosX')
              break
            case 'information2':
              this.moverseA('kInformation2X')
              break
            case 'listProductsOffers':
              this.moverseA('kListProductsOffersX')
              break
            case 'banner2':
              this.moverseA('kBanner2X')
              break
            case 'logos':
              this.moverseA('kLogosX')
              break
            case 'cardProducts':
              this.moverseA('kListProductsHomeX')
              break
            case 'settingsGeneral':
              this.moverseA('kInformationX')
              break
            case 'header':
              this.moverseA('kBannerX')
              break
            case 'footer':
              this.moverseA('kLogosX')
              break
            case 'newsLetter':
              this.moverseA('kLogosX')
              break
            case 'detailsProducts':
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
            case 'listBlogHome':
              this.$router.push({
                path: '/blog',
              })
              break
            case 'cardBlog':
              this.$router.push({
                path: '/blog',
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
<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
</style>
