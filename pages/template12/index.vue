<template>
  <div
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate12 && this.settingByTemplate12.fontFamily
            ? this.settingByTemplate12.fontFamily
            : 'Poppins',
      },
    ]"
    v-if="settingByTemplate12"
  >
    <div class="main-wrapper overflow-hidden">
      <i-header v-bind="componentsProps" id="KHeaderX" />
      <i-hero-image v-bind="componentsProps" />
      <!-- <div class="divider mt-4 mb-14" /> -->
      <div class="main-section_container">
        <i-main-section v-bind="componentsProps" id="KProductX" />
      </div>
      <i-footer v-bind="componentsProps" id="KFooterX" />
      <i-button-car></i-button-car>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  components: {
    IHeader: () => import('../../components/template12/Header'),
    IFooter: () => import('../../components/template12/Footer'),
    IHeroImage: () => import('../../components/template12/HeroImage'),
    IMainSection: () => import('../../components/template12/MainSection'),
    IButtonCar: () => import('../../components/template10/buttonCar.vue'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
    ...mapState(['dataStore', 'settingByTemplate12']),
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingByTemplate12: this.settingByTemplate12
          ? this.settingByTemplate12
          : null,
      }
    },
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
          this.$store.commit('SET_CURRENTSETTING12', e.data)
          switch (e.data.componentToEdit) {
            case 'header':
              this.moverseA('KHeaderX')
              break
            case 'product':
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
.product_container:last-child .product_divider {
  display: none;
}
main section:last-child .section-with-title_container .border-transparent {
  display: none;
}
.h-inherit {
  height: inherit;
}
.main-section_container {
  box-shadow: 0 20px 12px 2px rgb(0 0 0 / 9%);
  /* padding-bottom: 2.2rem; */
}
</style>
