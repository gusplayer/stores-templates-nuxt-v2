<template lang="html">
  <div class="container-home" v-loading="loading">
    <KoHeaderWp v-bind="componentsProps" />
    <component :is="indexCategory" v-bind="componentsProps" />
    <KProductFavoritos
      v-if="this.stateBanner"
      v-bind="componentsProps"
      style="margin-bottom: 10px;"
    />
    <component :is="indexList" v-bind="componentsProps" />
    <KFooterWaLogo v-bind="componentsProps" />
    <KFooterWa v-bind="componentsProps" />
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
import KFooterWa from '../../../../components/footers/footerWa/footerWa1/ko-Footer-wa'
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
  data() {
    return {
      settingBaseWapir: {
        color_icon: '',
        color_primario: 'back',
        color_secundario: 'white',
        descripcion: '',
        estilo_categorias: 1,
        estilo_productos: 1,
        logo_cuadrado: 1,
        mensaje_principal: '',
        pago_online: 1,
        tema: 1,
      },
    }
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
      return this.settingBaseWapir
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
