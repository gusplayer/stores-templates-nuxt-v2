<template>
  <div
    class="wrapper-ProductFavoritos"
    v-if="producthoko && producthoko.total > 0"
  >
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">{{ $t('home_productos_hoko') }}</p>
    </div>
    <KoSwipper :products="producthoko"></KoSwipper>
  </div>
</template>

<script>
import KoSwipper from './_productofavorito/productSlideHoko.vue'
export default {
  name: 'Ko-ProductFavoritos-1',
  created() {
    this.$store.dispatch('GET_PRODUCTSHOKO', 1)
  },
  components: {
    KoSwipper,
  },
  computed: {
    producthoko() {
      return this.$store.state.producthoko
    },
  },
}
</script>

<style scoped>
.wrapper-ProductFavoritos {
  display: flex;
  width: 100%;
  background-color: var(--background_color_2);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 40px 0px;
}
.swiper-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  padding: 10px 20px;
  z-index: 1;
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
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_subtext);
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
