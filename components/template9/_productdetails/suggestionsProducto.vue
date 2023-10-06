<template>
  <div
    v-if="category.length"
    class="wrapper-ProductFavoritos"
    :style="cardProduct"
  >
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">
        {{ $t('home_destacadosMsg') }}
      </p>
    </div>
    <KoSwiper
      :products="category"
      :card-product="cardProduct"
      :setting-general="settingGeneral"
    />
  </div>
</template>

<script>
export default {
  name: 'Ko09SuggestionsProducto',
  components: {
    KoSwiper: () => import('../_productofavorito/productSlide.vue'),
  },
  props: {
    category: {
      type: Array,
      required: true,
    },
    cardProduct: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style scoped>
.wrapper-ProductFavoritos {
  display: flex;
  width: 100%;
  /* background-color: var(--background_color_2); */
  background: var(--background_color_1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px 0;
}
.swiper-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1460px;
  /* padding: 10px; */
}
.content-title-ProductFavoritos {
  width: 100%;
  max-width: 1460px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-ProductFavoritos {
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-2);
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  /* color: var(--color_subtext); */
  color: var(--color_title);
  cursor: pointer;
}
@media (max-width: 1300px) {
  .swiper-container {
    padding: 20px 8px;
  }
  .content-title-ProductFavoritos {
    padding: 10px 10px;
  }
  .wrapper-ProductFavoritos {
    padding: 30px 10px;
  }
}
@media (max-width: 770px) {
  .swiper-container {
    padding: 20px 8px;
  }
  .content-title-ProductFavoritos {
    padding: 10px 10px;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
}
</style>
