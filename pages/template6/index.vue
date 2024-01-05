<template>
  <main
    :style="[
      {
        '--font-style-1': settingByTemplate6?.settingGeneral?.font ?? 'Poppins',
      },
    ]"
  >
    <K06-banner id="kBannerX" v-bind="componentsProps" />
    <K06-Product-features id="kFeacturesX" v-bind="componentsProps" />
    <K06-product-overviews id="kOverviewsX" v-bind="componentsProps" />
    <K06-information id="kInformationX" v-bind="componentsProps" />
    <K06-information-logos id="kLogosX" v-bind="componentsProps" />
    <K010-button-car />
  </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoTemplate6',
  components: {
    K06Banner: () => import('@/components/template6/k06-banner.vue'),
    K06Information: () => import('@/components/template6/k06-information.vue'),
    K06ProductFeatures: () =>
      import('@/components/template6/k06-product-features.vue'),
    K06ProductOverviews: () =>
      import('@/components/template6/k06-product-overviews.vue'),
    K06InformationLogos: () =>
      import('@/components/template6/k06-information-logos.vue'),
    K010ButtonCar: () => import('@/components/template10/Ko10-buttonCar.vue'),
  },
  layout: 'default',
  computed: {
    ...mapState(['dataStore', 'settingByTemplate6']),
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingsGeneral: this.settingByTemplate6?.settingsGeneral ?? null,
        banner: this.settingByTemplate6?.banner ?? null,
        information: this.settingByTemplate6?.information ?? null,
        informationLogos: this.settingByTemplate6?.informationLogos ?? null,
        productFeatures: this.settingByTemplate6?.productFeatures ?? null,
        productOverviews: this.settingByTemplate6?.productOverviews ?? null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    async addEventListenerTemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data && e.data.component && e.data.template == 6) {
          this.$store.commit('SET_CURRENTSETTING06', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 6
        ) {
          switch (e.data.componentToEdit) {
            case 'settingsGeneral':
              this.moverseA('kBannerX')
              break
            case 'header':
              this.moverseA('kBannerX')
              break
            case 'footer':
              this.moverseA('KWrapperX')
              break
            case 'banner':
              this.moverseA('kBannerX')
              break
            case 'information':
              this.moverseA('kInformationX')
              break
            case 'productFeatures':
              this.moverseA('kFeacturesX')
              break
            case 'productOverviews':
              this.moverseA('kOverviewsX')
              break
            case 'informationLogos':
              this.moverseA('kLogosX')
              break
          }
        } else {
          if (e && e.data && e.data.returnHome) {
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
