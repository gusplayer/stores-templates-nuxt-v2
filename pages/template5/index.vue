<template>
  <div
    :style="[
      {
        '--font-style': settingByTemplate?.settings?.tipo_letra ?? 'Roboto',
      },
      settingByTemplate?.settings ?? settingBase,
    ]"
  >
    <K05-banner v-if="stateBanner" id="KHeaderX" />
    <K05-component360 v-if="stateBanner" />
    <K05-productFavoritos v-if="stateBanner" />
    <K05-productListHomeHoko
      v-if="dataHoko?.statehoko == 1 && stateBanner"
      id="KProductX"
      :data-store="dataStore"
    />
    <K05-productListHome
      id="KProductX"
      :data-store="dataStore"
      :full-products="fullProducts"
    />
    <K05-bannerFooter id="KFooterX" />
    <K05-newsletter :data-store="dataStore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoTemplate5',
  components: {
    K05Banner: () => import('@/components/template5/Ko5-Banner.vue'),
    K05Component360: () =>
      import('@/components/template5/Ko5-Component360.vue'),
    K05ProductFavoritos: () =>
      import('@/components/template5/Ko5-ProductFavoritos.vue'),
    K05ProductListHomeHoko: () =>
      import('@/components/template5/Ko5-ProductListHomeHoko.vue'),
    K05ProductListHome: () =>
      import('@/components/template5/Ko5-ProductListHome.vue'),
    K05BannerFooter: () =>
      import('@/components/template5/Ko5-BannerFooter.vue'),
    K05Newsletter: () => import('@/components/template5/Ko5-Newsletter.vue'),
  },
  layout: 'default',
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
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
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
        console.log(e.data)
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
<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
</style>
