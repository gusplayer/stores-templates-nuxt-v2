<template>
  <div class="wrapper-ProductFavoritos" v-if="dataProductFavorite.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">Favoritos</p>
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
  mounted() {},
  computed: {
    dataProductFavorite() {
      return this.$store.state.dataStore.productos.filter(
        (product) => product.favorito === 1
      )
    },
  },
}
</script>

<style scoped>
div.wrapper-ProductFavoritos {
  --background_color_1: #f2f4f7;
}
.wrapper-ProductFavoritos {
  display: flex;
  width: 100%;
  background-color: var(--background_color_1);
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
}
.content-title-ProductFavoritos {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.title-ProductFavoritos {
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -0.4px;
  color: var(--color_text);
  margin-top: 10px;
}
@media (max-width: 770px) {
  .swiper-container {
    padding: 20px 8px;
  }
  .title-ProductFavoritos {
    font-size: 28px;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
  .title-ProductFavoritos {
    font-size: 25px;
  }
}
</style>
