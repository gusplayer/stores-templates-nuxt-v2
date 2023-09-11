<template>
  <div
    v-if="settingByTemplate14"
    :style="[
      {
        '--font-style-1':
          settingByTemplate14?.settingsGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <Ko14-information
      id="kInformationX"
      v-if="settingByTemplate14?.information?.visible"
      v-bind="componentsProps"
    />
    <Ko14-Banner
      id="kBannerX"
      v-if="settingByTemplate14?.banner?.visible"
      v-bind="componentsProps"
      :key="bannerRendering"
    />
    <Ko14-offers
      id="kOffersX"
      v-if="settingByTemplate14?.offers?.visible"
      v-bind="componentsProps"
    />
    <Ko14-productListHome
      id="kListProductX"
      v-if="settingByTemplate14?.listProductsHome?.visible"
      v-bind="componentsProps"
    />
    <Ko14-offersProduct
      id="kOffersProductX"
      v-if="settingByTemplate14?.offersProduct?.visible"
      v-bind="componentsProps"
    />
    <Ko14-listBlogHome
      id="kListBlogX"
      v-if="settingByTemplate14?.listBlogHome?.visible"
      v-bind="componentsProps"
    />
    <Ko14-Newsletter
      id="kNewsletterX"
      v-if="settingByTemplate14?.newsletter?.visible"
      v-bind="componentsProps"
    />
    <Ko14-logos
      id="kLogosX"
      v-if="settingByTemplate14?.logos?.visible"
      v-bind="componentsProps"
      :key="LogosRendering"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template14',
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  data() {
    return {
      bannerRendering: 0,
      LogosRendering: 0,
    }
  },
  computed: {
    ...mapState([
      'dataStore',
      'listArticulos',
      'settingByTemplate14',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: this.settingByTemplate14?.settingsGeneral ?? null,
        information: this.settingByTemplate14?.information ?? null,
        banner: this.settingByTemplate14?.banner ?? null,
        offers: this.settingByTemplate14?.offers ?? null,
        listProductsHome: this.settingByTemplate14?.listProductsHome ?? null,
        cardProducts: this.settingByTemplate14?.cardProducts ?? null,
        offersProduct: this.settingByTemplate14?.offersProduct ?? null,
        newsletter: this.settingByTemplate14?.newsletter ?? null,
        listBlogHome: this.settingByTemplate14?.listBlogHome ?? null,
        cardBlog: this.settingByTemplate14?.cardBlog ?? null,
        logos: this.settingByTemplate14?.logos ?? null,
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
        if (e && e.data && e.data.component && e.data.template == 14) {
          this.$store.commit('SET_CURRENTSETTING14', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          } else if (e.data.component == 'logos') {
            this.LogosRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 14
        ) {
          switch (e.data.componentToEdit) {
            case 'banner':
              this.moverseA('kBannerX')
              break
            // case 'information':
            //   this.moverseA('kInformationX')
            //   break
            case 'offers':
              this.moverseA('kOffersX')
              break
            case 'listProductsHome':
              this.moverseA('kListProductX')
              break
            case 'cardProducts':
              this.moverseA('kListProductX')
              break
            case 'offersProduct':
              this.moverseA('kOffersProductX')
              break
            case 'newsletter':
              this.moverseA('kNewsletterX')
              break
            case 'newsletter':
              this.moverseA('kNewsletterX')
              break
            case 'listBlogHome':
              this.moverseA('kListBlogX')
              break
            case 'cardBlog':
              this.moverseA('kListBlogX')
              break
            case 'logos':
              this.moverseA('kLogosX')
              break
            case 'settingsGeneral':
              this.moverseA('kInformationX')
              break
            case 'header':
              this.moverseA('kInformationX')
              break
            case 'footer':
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
