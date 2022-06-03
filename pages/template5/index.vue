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
    <KComponent360 v-if="this.stateBanner" />
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
    kBanner: () => import('../../components/template5/ko-Banner-1'),
    kBannerFooter: () => import('../../components/template5/ko-BannerFooter-1'),
    KProductFavoritos: () =>
      import('../../components/template5/Ko-ProductFavoritos-1'),
    KProductList: () => import('../../components/template5/Ko-ProductList-1'),
    KProductListHoko: () =>
      import('../../components/template5/Ko-ProductFavoritosHoko.vue'),
    KNewsletter: () => import('../../components/template5/Ko-Newsletter-1'),
    KComponent360: () => import('../../components/template5/Ko-Content360-1'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  computed: {
    ...mapState([
      'template',
      'dataStore',
      'settingBase',
      'stateBanner',
      'settingByTemplate',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/filterProducts']
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
