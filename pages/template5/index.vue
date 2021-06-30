<template lang="html">
  <div
    class="home"
    :style="
      this.settingByTemplate &&
      this.settingByTemplate.settings &&
      this.settingByTemplate.settings['--background_color_1']
        ? this.settingByTemplate.settings
        : this.settingBase
    "
  >
    <div
      :style="{
        '--font-style':
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Roboto',
      }"
    >
      <kBanner v-if="this.stateBanner"></kBanner>
      <KComponent360 v-if="this.stateBanner" />
      <KProductFavoritos v-if="this.stateBanner" />
      <KProductList
        :dataStore="dataStore"
        :fullProducts="fullProducts"
      ></KProductList>
      <kBannerFooter />
      <KNewsletter :dataStore="dataStore" />
    </div>
  </div>
</template>

<script>
import kBanner from '../../components/template5/ko-Banner-1'
import kBannerFooter from '../../components/template5/ko-BannerFooter-1'
import KProductFavoritos from '../../components/template5/Ko-ProductFavoritos-1'
import KProductList from '../../components/template5/Ko-ProductList-1'
import KNewsletter from '../../components/template5/Ko-Newsletter-1'
import KComponent360 from '../../components/template5/Ko-Content360-1'
export default {
  layout: 'default',
  components: {
    kBanner,
    KProductList,
    KNewsletter,
    KProductFavoritos,
    KComponent360,
    kBannerFooter,
  },
  mounted() {},
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
  },
}
</script>
