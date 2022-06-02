<template lang="html">
  <div
    class="home"
    :style="[
      {
        '--font-style':
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Roboto',
      },
      this.settingByTemplate && this.settingByTemplate.settings
        ? this.settingByTemplate.settings
        : this.settingBase,
    ]"
  >
    <kBanner v-if="this.stateBanner" id="KHeaderX" />
    <KComponentIframe v-if="this.stateBanner" />
    <KProductFavoritos v-if="this.stateBanner" />
    <KProductListHoko
      :dataStore="dataStore"
      :fullProducts="fullProducts"
      id="KProductX"
      v-if="dataHoko && dataHoko.statehoko == 1 && this.stateBanner"
    />
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
      id="KProductX"
      v-if="this.fullProducts.length > 0"
    />
    <kBannerFooter id="KFooterX" />
    <KNewsletter :dataStore="dataStore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    kBanner: () => import('../../components/template13/ko-Banner-1.vue'),
    kBannerFooter: () =>
      import('../../components/template13/ko-BannerFooter-1'),
    KProductFavoritos: () =>
      import('../../components/template13/ko-BannerFooter-1'),
    KProductList: () => import('../../components/template13/Ko-ProductList-1'),
    KProductListHoko: () =>
      import('../../components/template13/Ko-ProductFavoritosHoko.vue'),
    KNewsletter: () => import('../../components/template13/Ko-Newsletter-1'),
    KComponentIframe: () =>
      import('../../components/template13/Ko-Content360-1'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
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
    // componentsProps() {
    //   return {
    //     dataStore: this.dataStore,
    //     fullProducts: this.fullProducts,
    //     settingGeneral:
    //       this.settingByTemplate10 && this.settingByTemplate10.settingGeneral
    //         ? this.settingByTemplate10.settingGeneral
    //         : null,
    //     banner:
    //       this.settingByTemplate10 && this.settingByTemplate10.banner
    //         ? this.settingByTemplate10.banner
    //         : null,
    //     section:
    //       this.settingByTemplate10 && this.settingByTemplate10.section
    //         ? this.settingByTemplate10.section
    //         : null,
    //     trending:
    //       this.settingByTemplate10 && this.settingByTemplate10.trending
    //         ? this.settingByTemplate10.trending
    //         : null,
    //     offers:
    //       this.settingByTemplate10 && this.settingByTemplate10.offers
    //         ? this.settingByTemplate10.offers
    //         : null,
    //     productList:
    //       this.settingByTemplate10 && this.settingByTemplate10.productList
    //         ? this.settingByTemplate10.productList
    //         : null,
    //     cardProduct:
    //       this.settingByTemplate10 && this.settingByTemplate10.cardProduct
    //         ? this.settingByTemplate10.cardProduct
    //         : null,
    //     blog:
    //       this.settingByTemplate10 && this.settingByTemplate10.blog
    //         ? this.settingByTemplate10.blog
    //         : null,
    //   }
    // },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenertemplate)
  },
  methods: {
    addEventListenertemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data && e.data.componentToEdit) {
          this.$store.commit('SET_CURRENTSETTING5', e.data)
          switch (e.data.componentToEdit) {
            case 'header':
              this.moverseA('KHeaderX')
              break
            case 'productList':
              this.moverseA('KProductX')
              break
            case 'footer':
              this.moverseA('KFooterX')
              break
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
