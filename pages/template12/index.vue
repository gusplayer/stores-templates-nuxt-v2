<template>
  <div
    v-if="settingByTemplate12"
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate9.allSettings &&
          this.settingByTemplate9.allSettings.fount_1
            ? this.settingByTemplate9.allSettings.fount_1
            : 'David Libre',
      },
      {
        '--font-style-2':
          this.settingByTemplate9.allSettings &&
          this.settingByTemplate9.allSettings.fount_2
            ? this.settingByTemplate9.allSettings.fount_2
            : 'Great Vibes',
      },
      {
        '--font-style-3':
          this.settingByTemplate9.allSettings &&
          this.settingByTemplate9.allSettings.fount_3
            ? this.settingByTemplate9.allSettings.fount_3
            : 'Lora',
      },
    ]"
  >
    <div class="main-wrapper bg-gray-50 overflow-hidden">
      <i-header v-bind="{ componentsProps }" />
      <i-hero-image v-bind="{ ...heroImageTitle, ...componentsProps }" />
      <div class="divider mt-4 mb-14" />
      <div class="main-section_container">
        <!-- <cart :data-store="dataStore"  v-bind={componentsProps}/> -->
        <i-main-section :data="dataFormatted" v-bind="{ componentsProps }" />
      </div>
      <i-footer />
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
  mounted() {
    window.addEventListener('message', this.addEventListenertemplate)
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    heroImageTitle() {
      return {
        title: this.settingByTemplate12
          ? this.settingByTemplate12.allSettings.title
          : 'menu list two',
        subtitle: this.settingByTemplate12
          ? this.settingByTemplate12.allSettings.subtitle
          : 'Menu and portfolio',
      }
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
    settingByTemplate12() {
      return this.$store.state.settingByTemplate12
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate12 && this.settingByTemplate12.allSettings
            ? this.settingByTemplate12.allSettings
            : null,
      }
    },
    dataFormatted() {
      return [
        {
          id: 0,
          title: '',
          subtitle: '',
          products: this.listArticulos.map((item) => ({
            name: item.item,
            price: item.price,
            image: item.image,
            description: item.description,
          })),
        },
      ]
    },
    heroTitles() {
      return {
        title: 'menu list two',
        subtitle: 'Menu and portfolio',
      }
    },
  },
  methods: {
    addEventListenertemplate() {},
  },
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
