<template>
  <div v-if="category.length" class="wrapper-ProductFavoritos">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">
        {{ $t('home_destacadosMsg') }}
      </p>
    </div>
    <KoSwipper
      :products="category"
      :setting-card-product="settingCardProduct"
      :setting-general="settingGeneral"
    />
  </div>
</template>

<script>
export default {
  name: 'SuggestionsProducto11',
  components: {
    KoSwipper: () => import('../_productofavorito/productSlide.vue'),
  },
  props: {
    category: {
      type: Array,
      required: true,
    },
    settingCardProduct: {
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
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 30px;
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
  padding-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-ProductFavoritos {
  font-family: var(--font-style-1) !important;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  /* color: var(--color_subtext); */
  color: #2c2930;
  cursor: pointer;
}
@media (max-width: 770px) {
  .swiper-container {
    padding-top: 20px;
  }
  .content-title-ProductFavoritos {
    @apply py-10;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
}
</style>
