<template>
  <div class="wrapper-ProductFavoritos" v-if="category.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">
        {{ $t('home_destacadosMsg') }}
      </p>
    </div>
    <KoSwipper :products="category"></KoSwipper>
  </div>
</template>

<script>
import KoSwipper from '../../../components/template10/_productofavorito/productSlide'
export default {
  name: 'suggestionsProducto',
  props: {
    category: {},
  },
  components: {
    KoSwipper,
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
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
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
