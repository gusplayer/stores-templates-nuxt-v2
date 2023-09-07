<template>
  <div
    v-if="settingByTemplate16"
    :style="[
      {
        '--font-style-1':
          settingByTemplate16?.settingsGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <Ko16-Banner
      id="kBannerX"
      v-if="settingByTemplate16?.banner?.visible"
      :key="bannerRendering"
      v-bind="componentsProps"
    />
    <Ko16-content
      id="kContentX"
      v-if="settingByTemplate16?.content?.visible"
      v-bind="componentsProps"
    />
    <Ko16-Offers
      id="kOffersX"
      v-if="settingByTemplate16?.offers?.visible"
      v-bind="componentsProps"
    />
    <Ko16-productListHome
      id="kListProductsHomeX"
      v-if="settingByTemplate16?.listProductsHome?.visible"
      v-bind="componentsProps"
    />
    <Ko16-information
      id="kInformationX"
      v-if="settingByTemplate16?.information?.visible"
      v-bind="componentsProps"
    />
    <Ko16-listBlogHome
      id="kListBlogHomeX"
      v-if="settingByTemplate16?.listBlogHome?.visible"
      v-bind="componentsProps"
    />
    <Ko16-Logos
      id="kLogosX"
      v-if="settingByTemplate16?.logos?.visible"
      :key="logosRendering"
      v-bind="componentsProps"
    />
    <Ko16-categories
      id="kCategoriesX"
      v-if="settingByTemplate16?.categories?.visible"
      :key="categoriesRendering"
      v-bind="componentsProps"
    />
    <Ko16-informationStore
      id="kInformationStoreX"
      v-if="settingByTemplate16?.informationStore?.visible"
      v-bind="componentsProps"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template16',
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  data() {
    return {
      bannerRendering: 0,
      logosRendering: 0,
      categoriesRendering: 0,
    }
  },
  computed: {
    ...mapState([
      'dataStore',
      'listArticulos',
      'settingByTemplate16',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: this.settingByTemplate16?.settingsGeneral ?? null,
        banner: this.settingByTemplate16?.banner ?? null,
        content: this.settingByTemplate16?.content ?? null,
        offers: this.settingByTemplate16?.offers ?? null,
        listProductsHome: this.settingByTemplate16?.listProductsHome ?? null,
        cardProducts: this.settingByTemplate16?.cardProducts ?? null,
        information: this.settingByTemplate16?.information ?? null,
        logos: this.settingByTemplate16?.logos ?? null,
        listBlogHome: this.settingByTemplate16?.listBlogHome ?? null,
        cardBlog: this.settingByTemplate16?.cardBlog ?? null,
        categories: this.settingByTemplate16?.categories ?? null,
        informationStore: this.settingByTemplate16?.informationStore ?? null,
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
        if (e && e.data && e.data.component && e.data.template == 16) {
          console.log(e.data.component)
          this.$store.commit('SET_CURRENTSETTING16', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          } else if (e.data.component == 'logos') {
            this.logosRendering += 1
          } else if (e.data.component == 'categories') {
            this.categoriesRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 16
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
