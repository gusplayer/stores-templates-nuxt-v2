<template>
  <div class="wrapper-ProductFavoritos" v-if="orderproduct.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">Destacados</p>
    </div>
    <div class="container-favorite">
      <div class="card-favorite" v-for="product in orderproduct">
        <router-link :to="{ path: `/wa/producto/` + product.slug }">
          <img
            :src="idCloudinary(product.foto_cloudinary, 250, 250)"
            class="product-image"
            alt="Product Img"
          />
          <p class="card-text-movil-title" v-if="product.nombre.length >= 19">
            {{ `${product.nombre.slice(0, 19)}..` }}
          </p>
          <p class="card-text-movil-title" v-else>
            {{ `${product.nombre.slice(0, 39)}` }}
          </p>
          <div>
            <div v-if="product.precio">
              <!-- <p class="card-price-1-movil" v-if="product.precio > 0">
                  $ {{ product.precio }}
              </p>-->
              <div>
                <p class="card-price-2" v-if="product.precio > 0">
                  {{ product.precio | currency }}
                </p>
              </div>
            </div>
            <div v-else class="separador-price"></div>
          </div>
          <div class="card-button">
            <p>compra</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductFavoritos-1',
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
  transition: all 200ms ease-in;
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
  transition: 0.3s;
  box-shadow: 0 2px 10px rgba(131, 130, 131, 0.276);
  font-size: 13px;
  transition: all 200ms ease-in;
}
.card-button:hover {
  color: white;
  background: #128c7e;
}
.card-favorite {
  margin: 6px;
  width: 130px;
}

.card-favorite img {
  width: 130px;
  object-fit: contain;
  border-radius: 5px;
}
.card-text-movil-title {
  text-align: center;
  font-size: 11px;
  height: 34px;
  text-decoration: none;
  color: black;
}
.card-price-2 {
  font-size: 13px;
  color: #128c7e;
  font-weight: 600;
  text-align: center;
}
.separador-price {
  height: 20px;
  width: 100%;
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
