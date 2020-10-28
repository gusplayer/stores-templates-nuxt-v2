<template>
  <div class="wrapper-ProductFavoritos" v-if="dataProductFavorite.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">Destacados</p>
    </div>
    <KoSwipper :products="dataProductFavorite"></KoSwipper>
  </div>
</template>

<script>
import KoSwipper from './_productofavorito/productSlide'
export default {
  name: 'Ko-ProductFavoritos-1',
  components: {
    KoSwipper,
  },
  computed: {
    dataProductFavorite() {
      return this.$store.state.products.fullProducts.filter(
        (product) => product.favorito === 1
      )
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
  padding-top: 20px;
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
