<template>
  <div
    v-if="settingByTemplate12"
    :style="[
      {
        '--font-style-1': this.settingByTemplate12?.fontFamily ?? 'Poppins',
      },
    ]"
  >
    <div class="main-wrapper overflow-hidden">
      <Ko12-IHeader v-bind="componentsProps" id="KHeaderX" />
      <Ko12-IHeroImage v-bind="componentsProps" />
      <div class="main-section_container">
        <Ko12-IMainSection v-bind="componentsProps" id="KProductX" />
      </div>
      <Ko12-IFooter v-bind="componentsProps" id="KFooterX" />
      <Ko10-buttonCar />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template12',
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  computed: {
    ...mapState(['dataStore', 'settingByTemplate12']),
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingByTemplate12: this.settingByTemplate12
          ? this.settingByTemplate12
          : null,
      }
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
