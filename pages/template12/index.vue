<template>
  <div
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate12 &&
          this.settingByTemplate12.allSettings &&
          this.settingByTemplate12.allSettings.fount_1
            ? this.settingByTemplate12.allSettings.fount_1
            : 'Poppins',
      },
    ]"
  >
    <div class="main-wrapper bg-gray-50 overflow-hidden">
      <i-header v-bind="componentsProps" />
      <i-hero-image v-bind="componentsProps" />

      <div class="divider mt-4 mb-14" />
      <div class="main-section_container">
        <i-main-section v-bind="componentsProps" />
      </div>
      <i-footer v-bind="componentsProps" />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'default',
  components: {
    IHeader: () => import('../../components/template12/Header'),
    IFooter: () => import('../../components/template12/Footer'),
    IHeroImage: () => import('../../components/template12/HeroImage'),
    IMainSection: () => import('../../components/template12/MainSection'),
  },
  mounted() {},
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    settingByTemplate12() {
      return this.$store.state.settingByTemplate12
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        // settingGeneral:
        //   this.settingByTemplate12 && this.settingByTemplate12.allSettings
        //     ? this.settingByTemplate12.allSettings
        //     : null,
      }
    },
  },
  methods: {},
}
</script>

<style>
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
  padding-bottom: 2.2rem;
}
</style>
