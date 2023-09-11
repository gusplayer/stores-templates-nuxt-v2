<template>
  <div
    v-if="category.length"
    class="w-full flex flex-col justify-center items-center bg-transparent"
  >
    <p
      class="w-full pb-30 text-16 font-bold"
      :style="` color:${detailsProducts.color_subtext};`"
    >
      {{ $t('home_destacadosMsg') }}
    </p>
    <KoSwiper
      :products="category"
      :cardProducts="cardProducts"
      :settingsGeneral="settingsGeneral"
    />
  </div>
</template>

<script>
export default {
  name: 'suggestionsProducto15',
  props: {
    category: {},
    settingsGeneral: Object,
    cardProducts: Object,
    detailsProducts: Object,
  },
  components: {
    KoSwiper: () => import('../_productofavorito/productSlide.vue'),
  },
}
</script>

<style scoped>
.swiper-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}

@media (max-width: 770px) {
  .swiper-container {
    padding-top: 20px;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
}
</style>
