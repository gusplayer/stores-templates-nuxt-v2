<template>
  <div class="wrapper-ProductFavoritos" v-if="orderproduct.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">Destacados</p>
    </div>
    <!-- <KoSwipper :products="orderproduct"></KoSwipper> -->
    <div class="container-favorite">
      <div class="card-favorite" v-for="product in orderproduct">
        <img
          v-if="!soldOut"
          :src="idCloudinary(product.foto_cloudinary, 150, 150)"
          class="product-image"
          alt="Product Img"
        />
        <img
          v-if="soldOut"
          :src="idCloudinary(product.foto_cloudinary, 150, 150)"
          class="product-image product-image-soldOut"
          alt="Product Img"
        />
        <p
          class="card-text-movil-title"
          v-if="product.nombre.length >= 17"
        >{{ `${product.nombre.slice(0, 17)}..` }}</p>
        <p class="card-text-movil-title" v-else>{{ `${product.nombre.slice(0, 34)}` }}</p>

        <div class="content-text-price-movil-cart" v-if="product.precio">
          <div class="wrapper-price">
            <div>
              <!-- <p class="card-price-1-movil" v-if="product.precio > 0">
                  $ {{ product.precio }}
              </p>-->
              <div class="content-price" v-if="estadoCart && minPrice != maxPrice">
                <p
                  class="card-price-2"
                  v-if="product.precio > 0 || product.precio"
                >{{ minPrice | currency }}</p>
                <p class="separator-price">-</p>
                <p
                  class="card-price-2"
                  v-if="product.precio > 0 || product.precio"
                >{{ maxPrice | currency }}</p>
              </div>
              <div v-else>
                <p class="card-price-2" v-if="product.precio > 0">{{ product.precio | currency }}</p>
              </div>
            </div>
            <!-- <p class="card-descuento">-50%</p> -->
          </div>
        </div>
        <div class="card-button">
          <p>compra</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoSwipper from './_productofavorito/productSlide'
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
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
    orderproduct() {
      return this.dataProductFavorite.sort(function (prev, next) {
        return next.orden - prev.orden
      })
    },
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
    },
  },
}
</script>

<style scoped>
.wrapper-ProductFavoritos {
  display: flex;
  width: 100%;
  background-color: #fafaf8;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 10px;
}
.swiper-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 780px;
  padding: 10px 20px 20px 20px;
}
.content-title-ProductFavoritos {
  width: 100%;
  max-width: 780px;
  padding: 10px 20px 5px 20px;
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
.container-favorite {
  display: flex;
  flex-direction: row;
  overflow: scroll;
  width: 100%;
  padding: 0px 5px;
  overflow-y: hidden; /* Hide vertical scrollbar */
}
.container-favorite::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.card-button {
  margin-top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  padding: 6px 0px;
  font-weight: 700;
  color: #445a64;
  box-shadow: 0 6px 10px 0 rgba(128, 98, 96, 0.16);
  font-size: 13px;
}
.card-favorite {
  margin: 6px;
  width: 125px;
}
.card-favorite img {
  width: 125px;
  object-fit: contain;
  border-radius: 5px;
}
.card-text-movil-title {
  font-size: 11px;
}
.card-price-2 {
  font-size: 13px;
  color: black;
  font-weight: 600;
}
@media (max-width: 770px) {
  .swiper-container {
    padding: 20px 8px;
  }
  .content-title-ProductFavoritos {
    padding: 10px 20px;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
}
</style>
