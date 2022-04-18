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
    />
    <kBannerFooter id="KFooterX" />
    <KNewsletter :dataStore="dataStore" />
  </div>
</template>

<script>
import kBanner from '../../components/template5/ko-Banner-1'
import kBannerFooter from '../../components/template5/ko-BannerFooter-1'
import KProductFavoritos from '../../components/template5/Ko-ProductFavoritos-1'
import KProductList from '../../components/template5/Ko-ProductList-1'
import KProductListHoko from '../../components/template5/Ko-ProductFavoritosHoko.vue'
import KNewsletter from '../../components/template5/Ko-Newsletter-1'
import KComponent360 from '../../components/template5/Ko-Content360-1'
export default {
  layout: 'default',
  components: {
    kBanner,
    KProductList,
    KProductListHoko,
    KNewsletter,
    KProductFavoritos,
    KComponent360,
    kBannerFooter,
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
    template() {
      return this.$store.state.template
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    settingBase() {
      return this.$store.state.settingBase
    },
    stateBanner() {
      return this.$store.state.stateBanner
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
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
        if (e && e.data && e.data.componentToEdit) {
          this.$store.commit('SET_CURRENTSETTING5', e.data)
          switch (e.data.componentToEdit) {
            case 'header':
              this.moverseA('KHeaderX')
              break
            case 'prodcutList':
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
