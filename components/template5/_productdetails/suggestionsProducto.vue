<template>
  <div class="wrapper-ProductFavoritos" v-if="orderproduct.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">
        Productos relacionados que podrían interesarte
      </p>
    </div>
    <KoSwipper :products="orderproduct"></KoSwipper>
  </div>
</template>

<script>
import KoSwipper from '../_productofavorito/productSlide'
export default {
  name: 'suggestionsProducto',
  props: {
    category: {},
  },
  components: {
    KoSwipper,
  },
  computed: {
    orderproduct() {
      return this.category.sort(function (prev, next) {
        return next.orden - prev.orden
      })
    },
  },
}
</script>

<style scoped>
.wrapper-ProductFavoritos {
  display: flex;
  width: 100%;
  /* background-color: var(--background_color_2); */
  background: #efefef;
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
  padding: 10px 20px;
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
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
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
