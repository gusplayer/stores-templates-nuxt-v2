<template>
  <div
    v-if="fullProducts.length > 0"
    class="w-full flex justify-center items-center py-25 lg:py-40 px-10"
    :style="`background-color: ${listProductsHome['--background_color_1']}`"
  >
    <div
      class="w-full max-w-9/5 md:max-w-9/0 h-auto relative flex flex-col items-center justify-center overflow-hidden"
    >
      <p
        class="w-full text-center mb-25 text-25 md:text-30 lg:text-40"
        :style="`color: ${listProductsHome.color_title_1}; font-weight: ${listProductsHome.fontWeighTitle};`"
      >
        {{ listProductsHome.title }}
      </p>
      <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
        <div v-for="product in fullProducts.slice(0, 8)" :key="product.id">
          <KoProductCard
            :product="product"
            :cardProducts="cardProducts"
            :settingGeneral="settingGeneral"
            class="w-full"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko15-productListHome',
  props: {
    listProductsHome: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    cardProducts: {
      type: Object,
      required: true,
    },
    dataStore: {
      type: Object,
      required: true,
    },
    fullProducts: {
      type: Array,
      required: true,
    },
  },
  components: {
    KoProductCard: () => import('./_cardProduct/ProductCard'),
  },
}
</script>
