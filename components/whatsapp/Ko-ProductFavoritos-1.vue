<template>
  <div class="wrapper-ProductFavoritos" v-if="orderproduct.length">
    <div class="content-title-ProductFavoritos">
      <p class="title-ProductFavoritos">Destacados</p>
    </div>
    <div class="container-favorite" id="swiper-slide-favorite">
      <div
        class="card-favorite"
        v-for="product in orderproduct"
        :key="product.id"
      >
        <router-link
          :to="{
            path: `/wa/${dataStore.tienda.id_tienda}/producto/` + product.slug,
          }"
        >
          <img
            :src="idCloudinary(product.foto_cloudinary, 250, 250)"
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

              <p class="card-price-2" v-if="product.precio > 0">
                {{
                  product.precio
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
            </div>
            <div v-else class="separador-price"></div>
          </div>
          <div class="card-button">
            <p>compra</p>
          </div>
        </router-link>
      </div>
    </div>
    <div
      class="btn-scroll icon-prev"
      @click="scrollLeft()"
      v-if="orderproduct.length > 6"
    >
      <FlechaLeft-icon class="btn-scroll-icon" />
    </div>
    <div
      class="btn-scroll icon-next"
      @click="scrollRight()"
      v-if="orderproduct.length > 6"
    >
      <FlechaRight-icon class="btn-scroll-icon" />
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductFavoritos-1',
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
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
  methods: {
    scrollLeft() {
      document.getElementById('swiper-slide-favorite').scrollLeft -= 300
    },
    scrollRight() {
      document.getElementById('swiper-slide-favorite').scrollLeft += 300
    },
  },
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
        } else if (codigo_pais == 'internacional') {
          {
            resultCurrent = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(value)
            return resultCurrent
          }
        } else {
          {
            resultCurrent = new Intl.NumberFormat(codigo_pais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(value)
            return resultCurrent
          }
        }
      } else {
        if (value) {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
        }
      }
    },
  },
}
</script>

<style scoped>
.wrapper-ProductFavoritos {
  position: relative;
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
  padding: 10px 20px 20px 20px;
}
.content-title-ProductFavoritos {
  width: 100%;
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
  padding: 0px 20px;
  overflow-y: hidden; /* Hide vertical scrollbar */
}
.container-favorite::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.btn-scroll {
  display: initial;
  position: absolute;
  top: 50%;
  border-radius: 25px;
  padding: 0px 10px;
  background: #e4e4e4;
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
.btn-scroll-icon:hover {
  color: white;
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
  color: black;
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
  .btn-scroll {
    display: none;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
  .container-favorite {
    padding: 0px 5px;
  }
}
</style>
