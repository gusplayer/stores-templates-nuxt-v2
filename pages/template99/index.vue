<template>
  <div class="w-full flex flex-col justify-center bg-slate-100 items-center">
    <div
      class="w-full max-w-[900px] shadow-md bg-white-white container-home"
      v-loading="loading"
    >
      <!-- Header Dinámico (Tema) 1 - 2 - 3 -->
      <component :is="indexTema" v-bind="componentsProps" id="KHeaderX" />
      <component
        v-if="categorias.length > 0"
        :is="indexCategory"
        v-bind="componentsProps"
        id="KHeaderX"
      />
      <KProductFavoritos
        v-if="this.stateBanner"
        v-bind="componentsProps"
        style="margin-bottom: 10px"
      />
      <component :is="indexList" v-bind="componentsProps" id="KListX" />
      <KFooterWaLogo v-bind="componentsProps" id="KfooterX" />
      <KFooterWa v-bind="componentsProps" id="KfooterX" />
      <WCountry :dataStore="dataStore" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'wa',
  name: 'templateWhatsApp',
  components: {
    KoHeaderWp1: () =>
      import('@/components/headers/header_wp/Ko-Header-wa-1.vue'),
    KoHeaderWp2: () =>
      import('@/components/headers/header_wp/Ko-Header-wa-2.vue'),
    KoHeaderWp3: () =>
      import('@/components/headers/header_wp/Ko-Header-wa-3.vue'),

    KCategory01: () =>
      import('@/components/whatsapp/template1/Ko-Categories-wa.vue'),
    KCategory02: () =>
      import('@/components/whatsapp/template2/ko-slide-categorys.vue'),
    KCategory03: () =>
      import('@/components/whatsapp/template3/ko-slide-categorys.vue'),
    KCategory04: () =>
      import('@/components/whatsapp/categorys_img/ko-categorys-img.vue'),

    KProductFavoritos: () =>
      import('@/components/whatsapp/template1/Ko-ProductFavoritos-1.vue'),

    KProductList: () =>
      import('@/components/whatsapp/template1/Ko-ProductList-wa.vue'),
    KProductList2: () =>
      import('@/components/whatsapp/template2/ko-productList.vue'),
    KProductList3: () =>
      import('@/components/whatsapp/template3/ko-productList.vue'),

    KFooterWaLogo: () =>
      import('@/components/footers/footerWa/footerWa1/ko-Footer-wa-logo'),
    KFooterWa: () =>
      import('@/components/footers/footerWa/footerWa2/ko-Footer-wa.vue'),

    WCountry: () =>
      import('@/components/footers/footer1/Ko-Footer-Country.vue'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  computed: {
    ...mapState([
      'dataStore',
      'stateBanner',
      'settingByTemplate',
      'settingBaseWapi',
    ]),
    dataStore() {
      return this.$store.state.dataStore
    },
    indexTema() {
      let componentTemplate = ''
      if (this.settingByTemplate?.tema) {
        switch (this.settingByTemplate.tema) {
          case 1:
            componentTemplate = 'KoHeaderWp1'
            break
          case 2:
            componentTemplate = 'KoHeaderWp2'
            break
          case 3:
            componentTemplate = 'KoHeaderWp3'
            break
        }
      } else {
        return (componentTemplate = 'KoHeaderWp1')
      }
      return componentTemplate
    },
    indexCategory() {
      let componentTemplate = ''
      if (this.settingByTemplate && this.settingByTemplate.estilo_categorias) {
        switch (this.settingByTemplate.estilo_categorias) {
          case 1:
            componentTemplate = 'KCategory01'
            break
          case 2:
            componentTemplate = 'KCategory02'
            break
          case 3:
            componentTemplate = 'KCategory03'
            break
          case 4:
            componentTemplate = 'KCategory04'
            break
        }
      } else {
        return (componentTemplate = 'KCategory01')
      }
      return componentTemplate
    },
    indexList() {
      let componentTemplate = ''
      if (this.settingByTemplate && this.settingByTemplate.estilo_productos) {
        switch (this.settingByTemplate.estilo_productos) {
          case 3:
            componentTemplate = 'KProductList'
            break
          case 2:
            componentTemplate = 'KProductList2'
            break
          case 1:
            componentTemplate = 'KProductList3'
            break
        }
      } else {
        return (componentTemplate = 'KProductList3')
      }
      return componentTemplate
    },
    loading() {
      if (this.dataStore.length) {
        return true
      } else {
        return false
      }
    },
    categorias() {
      return this.dataStore.categorias
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingByTemplate:
          this.settingByTemplate &&
          this.settingByTemplate.tema &&
          this.settingByTemplate.estilo_categorias
            ? this.settingByTemplate
            : this.settingBaseWapi,
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
        if (e && e.data && e.data.component) {
          this.$store.commit('SET_CURRENTSETTING99', e.data)
          switch (e.data.component) {
            case 'Banner':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'Logo':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'mensaje_principal':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'descripcion':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'tema':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'estilo_categorias':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'estilo_productos':
              this.moverseA('KListX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'pago_online':
              this.moverseA('KHeaderX')
              if (e.data.setting.pago_online == 1) {
                this.$store.commit('SET_OPEN_ORDER', true)
              } else {
                this.$store.commit('SET_OPEN_ORDER', false)
              }
              break
            case 'color_primario':
              this.moverseA('KListX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'color_secundario':
              this.moverseA('KListX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'color_icon':
              this.moverseA('KListX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
            case 'footer':
              this.moverseA('KfooterX')
              this.$store.commit('SET_OPEN_ORDER', false)
              break
          }
        }
        if (e && e.data && e.data.checkout) {
          if (e.data.setting) {
            this.$store.state.dataStore.whatsapp_checkout.configuration =
              e.data.setting
          }
          this.$store.commit('SET_OPEN_ORDER', true)
          this.$store.commit('SET_STATE_FORM_MODAL_WHATS_APP', true)
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
  font-family: 'Poppins', sans-serif !important;
}
.container-home {
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
</style>
