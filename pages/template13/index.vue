<template>
  <div
    v-if="settingByTemplate13"
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate13.settingGeneral &&
          this.settingByTemplate13.settingGeneral.fount_1
            ? this.settingByTemplate13.settingGeneral.fount_1
            : 'Poppins',
      },
    ]"
  >
    <ko-Banner
      id="kBannerX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="
        settingByTemplate13 &&
        settingByTemplate13.banner &&
        settingByTemplate13.banner.visible
      "
    />

    <!-- <KProductFavoritos v-if="this.stateBanner" /> -->
    <!-- <KProductListHoko
      :dataStore="dataStore"
      :fullProducts="fullProducts"
      id="KProductX"
      v-if="dataHoko && dataHoko.statehoko == 1 && this.stateBanner"
    /> -->
    <ko-ProductList
      id="kListX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate13 &&
        settingByTemplate13.productList &&
        settingByTemplate13.productList.visible
      "
    />
    <ko-InfoText
      id="kInfoTextX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate13 &&
        settingByTemplate13.infoText &&
        settingByTemplate13.infoText.visible
      "
    />
    <ko-Information
      id="kInformationX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate13 &&
        settingByTemplate13.information &&
        settingByTemplate13.information.visible
      "
    />
    <ko-Newsletter
      id="kNewsLetterX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate13 &&
        settingByTemplate13.newsletter &&
        settingByTemplate13.newsletter.visible
      "
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    koBanner: () => import('../../components/template13/ko-Banner-1.vue'),
    // KoProductFavoritos: () =>
    //   import('../../components/template13/ko-BannerFooter-1'),
    KoProductList: () => import('../../components/template13/Ko-ProductList-1'),
    // KoProductListHoko: () =>
    //   import('../../components/template13/Ko-ProductFavoritosHoko.vue'),
    KoInformation: () =>
      import('../../components/template13/Ko-information.vue'),
    KoInfoText: () => import('../../components/template13//Ko-infoText.vue'),
    KoNewsletter: () => import('../../components/template13/Ko-Newsletter-1'),
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
      'settingByTemplate13',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate13 && this.settingByTemplate13.settingGeneral
            ? this.settingByTemplate13.settingGeneral
            : null,
        banner:
          this.settingByTemplate13 && this.settingByTemplate13.banner
            ? this.settingByTemplate13.banner
            : null,
        productList:
          this.settingByTemplate13 && this.settingByTemplate13.productList
            ? this.settingByTemplate13.productList
            : null,
        information:
          this.settingByTemplate13 && this.settingByTemplate13.information
            ? this.settingByTemplate13.information
            : null,
        infoText:
          this.settingByTemplate13 && this.settingByTemplate13.infoText
            ? this.settingByTemplate13.infoText
            : null,
        cardProduct:
          this.settingByTemplate13 && this.settingByTemplate13.cardProduct
            ? this.settingByTemplate13.cardProduct
            : null,
        newsletter:
          this.settingByTemplate13 && this.settingByTemplate13.newsletter
            ? this.settingByTemplate13.newsletter
            : null,
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
        if (e && e.data && e.data.component && e.data.template == 13) {
          this.$store.commit('SET_CURRENTSETTING13', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
            console.log(this.bannerRendering)
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 13
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
            case 'cardProduct':
              this.moverseA('kListX')
              break
            case 'newsLetter':
              this.moverseA('kNewsLetterX')
              break
            case 'information':
              this.moverseA('kInformationX')
              break
            case 'infoText':
              this.moverseA('kInfoTextX')
              break
            case 'productList':
              this.moverseA('kListX')
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
