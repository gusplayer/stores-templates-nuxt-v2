<template>
  <div v-if="category.length" class="wrapper-ProductFavoritos">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">
        {{ $t('home_destacadosMsg') }}
      </p>
    </div>
    <KoSwiper
      :products="category"
      :setting-general="settingGeneral"
      :settingKProductCard="settingKProductCard"
    />
  </div>
</template>

<script>
export default {
  name: 'SuggestionsProducto07',
  components: {
    KoSwiper: () => import('../_productofavorito/productSlide.vue'),
  },
  props: {
    category: {
      type: Array,
      required: true,
    },
    settingKProductCard: {
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
  background: transparent;
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
  max-width: 1300px;
  padding: 10px;
}
.content-title-ProductFavoritos {
  width: 100%;
  max-width: 1300px;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-ProductFavoritos {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_title);
  cursor: pointer;
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
