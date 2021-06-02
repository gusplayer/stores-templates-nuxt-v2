<template>
  <div v-if="settingByTemplate12">
    <div class="main-wrapper bg-gray-50 overflow-hidden">
      <i-header v-bind="{ componentsProps }" />
      <i-hero-image v-bind="{ ...heroTiles, ...componentsProps }" />
      <div class="divider mt-4 mb-14" />
      <div class="main-section_container">
        <!-- <cart :data-store="dataStore"  v-bind={componentsProps}/> -->
        <i-main-section :data="dataFormatted" v-bind={componentsProps} />
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
          title: 'Meat & first Dishes',
          subtitle: 'Slow cook meals and fresh fishes',
          products: [
            {
              name: 'Steamed king crab',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-1.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-5.jpg',
            },
            {
              name: 'Salad of shaved fenne',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-2.jpg',
            },
            {
              name: 'Slow roasted white',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-6.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-3.jpg',
            },
            {
              name: 'Salad of shaved fenne',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-7.jpg',
            },
            {
              name: 'Slow roasted white',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-4.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-8.jpg',
            },
          ],
        },
        {
          id: 1,
          title: 'Seasons and burgers',
          subtitle: 'Genuine and fresh ingredients',
          products: [
            {
              name: 'Steamed king crab',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-36.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-37.jpg',
            },
            {
              name: 'Salad of shaved fenne',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-38.jpg',
            },
            {
              name: 'Slow roasted white',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-39.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-40.jpg',
            },
            {
              name: 'Salad of shaved fenne',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-41.jpg',
            },
            {
              name: 'Slow roasted white',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-42.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-43.jpg',
            },
          ],
        },
        {
          id: 2,
          title: 'Desserts & creams',
          subtitle: 'Hand made ice creams and desserts',
          products: [
            {
              name: 'Steamed king crab',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-17.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-16.jpg',
            },
            {
              name: 'Salad of shaved fenne',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-18.jpg',
            },
            {
              name: 'Slow roasted white',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-19.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-20.jpg',
            },
            {
              name: 'Salad of shaved fenne',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-22.jpg',
            },
            {
              name: 'Slow roasted white',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-21.jpg',
            },
            {
              name: 'Roast partridge',
              description:
                'Duis aute irure dolo irure dolor in reprehenderit in voluptate velito esse cillume.',
              price: 9,
              image:
                'http://templates.framework-y.com/gourmet/images/gallery/square-23.jpg',
            },
          ],
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
