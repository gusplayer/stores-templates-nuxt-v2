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
    <ko-information
      id="kInformationX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.information?.visible"
    />
    <ko-banner
      id="kBannerX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="settingByTemplate14?.banner?.visible"
    />
    <ko-offers
      id="kOffersX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.offers?.visible"
    />
    <ko-listProductsHome
      id="kListProductX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.listProductsHome?.visible"
    />
    <Ko-offersProduct
      id="kOffersProductX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.offersProduct?.visible"
    />
    <Ko-listBlogHome
      id="kListBlogX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.listBlogHome?.visible"
    />
    <Ko-newsletter
      id="kNewsletterX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.newsletter?.visible"
    />
    <Ko-logos
      id="kLogosX"
      v-bind="componentsProps"
      v-if="settingByTemplate14?.logos?.visible"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template14',
  components: {
    koInformation: () =>
      import('../../components/template14/ko14-information.vue'),
    koBanner: () => import('../../components/template14/ko14-Banner.vue'),
    KoOffers: () => import('../../components/template14/ko14-offers.vue'),
    koListProductsHome: () =>
      import('../../components/template14/ko14-productListHome.vue'),
    KoOffersProduct: () =>
      import('../../components/template14/ko14-offersProduct.vue'),
    KoNewsletter: () =>
      import('../../components/template14/ko14-Newsletter.vue'),
    KoListBlogHome: () =>
      import('../../components/template14/ko14-listBlogHome.vue'),
    KoLogos: () => import('../../components/template14/ko14-logos.vue'),
  },
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
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data && e.data.component && e.data.template == 14) {
          this.$store.commit('SET_CURRENTSETTING14', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
            // console.log(this.bannerRendering)
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 14
        ) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kBannerX')
              break
            case 'header':
              this.moverseA('kBannerX')
              break
            case 'footer':
              this.moverseA('kNewsLetterX')
              break
            case 'banner':
              this.moverseA('kBannerX')
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
<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
</style>
