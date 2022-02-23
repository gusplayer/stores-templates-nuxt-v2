<template lang="html">
  <div class="container-home" v-loading="loading">
    <KoHeaderWp v-bind="componentsProps" id="KHeaderX" />
    <component
      :is="indexCategory"
      v-bind="componentsProps"
      id="KHeaderX"
      v-if="categorias.length > 0"
    />
    <KProductFavoritos
      v-if="this.stateBanner"
      v-bind="componentsProps"
      style="margin-bottom: 10px"
    />
    <component :is="indexList" v-bind="componentsProps" id="KListX" />
    <KFooterWaLogo v-bind="componentsProps" id="KfooterX" />
    <KFooterWa
      v-bind="componentsProps"
      v-if="productsCart.length > 0"
      id="KfooterX"
    />
  </div>
</template>

<script>
import KoHeaderWp from '../../../../components/headers/header_wp/header_wp1/Ko-Header-wa-1'
import KCategory01 from '../../../../components/whatsapp/template1/Ko-Categories-wa'
import KCategory02 from '../../../../components/whatsapp/template2/ko-slide-categorys'
import KCategory03 from '../../../../components/whatsapp/template3/ko-slide-categorys'
import KProductFavoritos from '../../../../components/whatsapp/template1/Ko-ProductFavoritos-1'
import KProductList from '../../../../components/whatsapp/template1/Ko-ProductList-wa.vue'
import KProductList2 from '../../../../components/whatsapp/template2/ko-productList.vue'
import KProductList3 from '../../../../components/whatsapp/template3/ko-productList.vue'
import KFooterWaLogo from '../../../../components/footers/footerWa/footerWa1/ko-Footer-wa-logo'
import KFooterWa from '../../../../components/footers/footerWa/footerWa2/ko-Footer-wa.vue'

export default {
  name: 'indexWaTemp1',
  layout: 'wa',
  components: {
    KoHeaderWp,
    KCategory01,
    KCategory02,
    KCategory03,
    KProductFavoritos,
    KProductList,
    KProductList2,
    KProductList3,
    KFooterWaLogo,
    KFooterWa,
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
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
    dataStore() {
      return this.$store.state.dataStore
    },
    categorias() {
      return this.dataStore.categorias
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    stateBanner() {
      return this.$store.state.stateBanner
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    settingBaseWapi() {
      return this.$store.state.settingBaseWapir
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
    productsCart() {
      return this.$store.state.productsCart
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
        if (e && e.data && e.data.component) {
          this.$store.commit('SET_CURRENTSETTING99', e.data)
          switch (e.data.component) {
            case 'Banner':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'Logo':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'mensaje_principal':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'descripcion':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'tema':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'estilo_categorias':
              this.moverseA('KHeaderX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'estilo_productos':
              this.moverseA('KListX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'pago_online':
              this.moverseA('KHeaderX')
              if (e.data.setting.pago_online == 1) {
                this.$store.commit('SET_OPENORDER', true)
              } else {
                this.$store.commit('SET_OPENORDER', false)
              }
              break
            case 'color_primario':
              this.moverseA('KListX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'color_secundario':
              this.moverseA('KListX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'color_icon':
              this.moverseA('KListX')
              this.$store.commit('SET_OPENORDER', false)
              break
            case 'footer':
              this.moverseA('KfooterX')
              this.$store.commit('SET_OPENORDER', false)
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
.container-home {
  width: 100%;
  max-width: 900px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
</style>
