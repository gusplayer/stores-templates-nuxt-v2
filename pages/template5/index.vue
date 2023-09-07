<template>
  <div
    :style="[
      {
        '--font-style':
          this.settingByTemplate?.settings?.tipo_letra ?? 'Roboto',
      },
      this.settingByTemplate?.settings ?? this.settingBase,
    ]"
  >
    <Ko5-Banner id="KHeaderX" v-if="this.stateBanner" />
    <Ko5-Component360 v-if="this.stateBanner" />
    <Ko5-ProductFavoritos v-if="this.stateBanner" />
    <Ko5-ProductListHomeHoko
      id="KProductX"
      :dataStore="dataStore"
      v-if="dataHoko && dataHoko.statehoko == 1 && this.stateBanner"
    />
    <Ko5-ProductListHome
      id="KProductX"
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    />
    <Ko5-BannerFooter id="KFooterX" />
    <Ko5-Newsletter :dataStore="dataStore" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template5',
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
