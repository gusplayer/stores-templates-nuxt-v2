<template>
  <div class="content-home" v-loading="loading">
    <KoHeaderWa :dataStore="dataStore" :settingByTemplate="settingByTemplate" />
    <component
      :is="indexCategory"
      :dataStore="dataStore"
      :settingByTemplate="settingByTemplate"
    />
    <KoProductListWa
      :dataStore="dataStore"
      :fullProducts="fullProducts"
      :settingByTemplate="settingByTemplate"
    />
    <KFooterWaLogo
      :dataStore="dataStore"
      :settingByTemplate="settingByTemplate"
    />
    <KoFooterWa :dataStore="dataStore" :settingByTemplate="settingByTemplate" />
  </div>
</template>
<script>
import KoHeaderWa from '../../../../components/headers/header_wp/header_wp3/Ko-Header-wa-3'
import KCategory01 from '../../../../components/whatsapp/template1/Ko-Categories-wa'
import KCategory02 from '../../../../components/whatsapp/template2/ko-slide-categorys'
import KCategory03 from '../../../../components/whatsapp/template3/ko-slide-categorys'
import KoProductListWa from '../../../../components/whatsapp/template3/ko-productList'
import KFooterWaLogo from '../../../../components/footers/footerWa/footerWa1/ko-Footer-wa-logo'
import KoFooterWa from '../../../../components/footers/footerWa/footerWa2/ko-Footer-wa'
export default {
  name: 'indexWaTemp3',
  components: {
    KoHeaderWa,
    KCategory01,
    KCategory02,
    KCategory03,
    KoProductListWa,
    KFooterWaLogo,
    KoFooterWa,
  },
  computed: {
    indexCategory() {
      let componentTemplate = ''
      if (this.settingByTemplate) {
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
  },
}
</script>
<style scoped>
.content-home {
  width: 100%;
  max-width: 900px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
}
</style>
