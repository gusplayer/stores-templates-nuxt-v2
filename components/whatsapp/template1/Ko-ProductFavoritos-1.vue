<template>
  <div v-if="dataProductFavorite.length" class="wrapper-ProductFavoritos">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">{{ $t('home_destacados') }}</p>
    </div>
    <div id="swiper-slide-favorite" class="container-favorite">
      <div
        v-for="product in dataProductFavorite"
        :key="product.id"
        class="content-products"
      >
        <KoProductCard1 :product="product" :data-store="dataStore" />
      </div>
    </div>
  </div>
</template>

<script>
import KoProductCard1 from '../template2/productCard/ko-productCard.vue'
export default {
  name: 'KoProductFavoritosWa',
  components: {
    KoProductCard1,
  },
  props: { dataStore: Object, settingByTemplate: Object },
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
  position: relative;
  display: flex;
  width: 100%;
  background-color: white;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  /* padding-top: 10px; */
  transition: all 200ms ease-in;
}
.content-title-ProductFavoritos {
  width: 100%;
  padding: 0px 20px 5px 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-ProductFavoritos {
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  font-size: 1rem;
  font-weight: 600;
  /* margin-bottom: 1rem; */
  color: #4c4c4c;
  cursor: pointer;
}
.container-favorite::-webkit-scrollbar {
  @apply w-5;
}
.container-favorite::-webkit-scrollbar-thumb {
  margin-top: 5px;
  background: #a3a3a3;
  border-radius: 4px;
}
.container-favorite::-webkit-scrollbar-thumb:active {
  margin-top: 5px;
  background-color: #777777;
}
.container-favorite::-webkit-scrollbar-thumb:hover {
  margin-top: 5px;
  background: #686868;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.401);
}
.container-favorite {
  width: 95%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  justify-content: flex-start;
  align-items: center;
}
.content-products {
  max-width: 269px;
  min-width: 269px;
  margin-right: 20px;
}
.btn-scroll {
  display: initial;
  position: absolute;
  top: 50%;
  border-radius: 25px;
  padding: 0px 10px;
  /* background: #e4e4e4; */
  cursor: pointer;
}
.icon-prev {
  left: 5px;
}
.icon-next {
  right: 5px;
}
.btn-scroll-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  bottom: 0.125em;
}

@media (max-width: 770px) {
  .content-title-ProductFavoritos {
    padding: 10px 20px;
  }
  .btn-scroll {
    display: none;
  }
  .content-products {
    max-width: 225px;
    min-width: 225px;
    margin-right: 15px;
  }
}
@media (max-width: 380px) {
  .content-products {
    max-width: 168.13px;
    min-width: 168.13px;
  }
}
</style>
