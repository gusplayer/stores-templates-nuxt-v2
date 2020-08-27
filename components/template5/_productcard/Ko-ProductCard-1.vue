<template>
  <div class="wrapper-card" :style="settingByTemplate">
    <div class="container">
      <div
        class="wrapper"
        v-on:mouseenter="active = false"
        v-on:mouseleave="active = true"
      >
        <router-link
          :to="{ path: `/productos/` + product.slug }"
          class="wrapper-image"
        >
          <img
            v-if="!soldOut"
            :src="idCloudinary(this.product.foto_cloudinary, 600, 600)"
            class="product-image"
            alt="Product Img"
          />
          <img
            v-if="soldOut"
            :src="idCloudinary(this.product.foto_cloudinary, 600, 600)"
            class="product-image-soldOut"
            alt="Product Img"
          />
          <p class="card-info-1" v-if="soldOut">Agotado !</p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            Envío gratis !
          </p>
        </router-link>
        <div class="wrapper-text">
          <div class="content-name-product">
            <p class="card-text" v-if="this.product.nombre.length >= 55">
              {{ `${this.product.nombre.slice(0, 55)}...` }}
            </p>
            <p class="card-text" v-else>
              {{ `${this.product.nombre.slice(0, 55)}` }}
            </p>
          </div>
          <div v-if="active">
            <div class="content-text-price" v-if="this.product.precio">
              <div class="wrapper-price">
                <div>
                  <!-- <p class="card-price-1" v-if="this.product.precio > 0">
                    $ {{ this.product.precio }}
                  </p> -->
                  <div
                    class="content-price"
                    v-if="estadoCart && this.minPrice != this.maxPrice"
                  >
                    <p
                      class="card-price-2"
                      v-if="this.product.precio > 0 || this.product.precio"
                    >
                      {{ this.minPrice | currency }}
                    </p>

                    <p class="separator-price">-</p>
                    <p
                      class="card-price-2"
                      v-if="this.product.precio > 0 || this.product.precio"
                    >
                      {{ this.maxPrice | currency }}
                    </p>
                  </div>
                  <div v-else>
                    <p
                      class="card-price-2"
                      v-if="this.product.precio > 0 || this.product.precio"
                    >
                      {{ this.product.precio | currency }}
                    </p>
                  </div>
                </div>
                <!-- <p class="card-descuento">-50%</p> -->
              </div>
            </div>
            <div class="content-text-price2" v-else></div>
          </div>
          <div class="content-text-price2" v-if="!active">
            <div
              class="content-soldOut"
              v-if="!this.estadoCart && !soldOut && !spent"
            >
              <router-link
                :to="{ path: `/productos/` + product.slug }"
                class="btn"
                >Ver más</router-link
              >
              <div v-on:click="addShoppingCart" class="btn">
                <cartArrowDown class="card-icon-cart" />Agregar
              </div>
            </div>

            <router-link
              :to="{ path: `/productos/` + product.slug }"
              v-else
              class="btn"
              >Ver más</router-link
            >
          </div>
        </div>
      </div>
      <div class="wrapper-movil">
        <router-link
          :to="{ path: `/productos/` + product.slug }"
          class="wrapper-image"
        >
          <img
            v-if="!soldOut"
            :src="idCloudinary(this.product.foto_cloudinary, 350, 350)"
            class="product-image"
            alt="Product Img"
          />
          <img
            v-if="soldOut"
            :src="idCloudinary(this.product.foto_cloudinary, 350, 350)"
            class="product-image-soldOut"
            alt="Product Img"
          />
          <p class="card-info-1" v-if="soldOut">Agotado !</p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            Envío gratis !
          </p>
        </router-link>
        <div class="wrapper-text">
          <router-link
            :to="{ path: `/productos/` + product.slug }"
            class="content-name-product-movil"
          >
            <p class="card-text-movil" v-if="this.product.nombre.length >= 33">
              {{ `${this.product.nombre.slice(0, 33)}..` }}
            </p>
            <p class="card-text-movil" v-else>
              {{ `${this.product.nombre.slice(0, 34)}` }}
            </p>
          </router-link>

          <div class="content-text-price-movil-cart" v-if="this.product.precio">
            <router-link
              :to="{ path: `/productos/` + product.slug }"
              class="wrapper-price"
            >
              <div>
                <!-- <p class="card-price-1-movil" v-if="this.product.precio > 0">
                  $ {{ this.product.precio }}
                </p> -->
                <div
                  class="content-price"
                  v-if="estadoCart && this.minPrice != this.maxPrice"
                >
                  <p
                    class="card-price-2"
                    v-if="this.product.precio > 0 || this.product.precio"
                  >
                    {{ this.minPrice | currency }}
                  </p>

                  <p class="separator-price">-</p>
                  <p
                    class="card-price-2"
                    v-if="this.product.precio > 0 || this.product.precio"
                  >
                    {{ this.maxPrice | currency }}
                  </p>
                </div>
                <div v-else>
                  <p class="card-price-2" v-if="this.product.precio > 0">
                    {{ this.product.precio | currency }}
                  </p>
                </div>
              </div>
              <!-- <p class="card-descuento">-50%</p> -->
            </router-link>

            <div v-if="!this.estadoCart && !soldOut && !spent">
              <cartArrowDown
                class="card-icon-cart-movil"
                v-on:click="addShoppingCart"
              />
            </div>
          </div>
          <div class="separator-movil" v-else>
            <div v-if="!this.estadoCart && !soldOut && !spent">
              <cartArrowDown
                class="card-icon-cart-movil"
                v-on:click="addShoppingCart"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductCard-1',
  props: { product: Object, settingByTemplate: Object },
  mounted() {
    this.idSlug = this.product.id
    this.prodcutPrice()
    if (
      this.product.con_variante &&
      this.product.variantes[0].variantes !== '[object Object]'
    ) {
      this.estadoCart = true
    }
  },
  data() {
    return {
      estadoCart: false,
      minPrice: '',
      maxPrice: '',
      idSlug: '',
      maxQuantityValue: 0,
      productIndexCart: null,
      productCart: {},
      salesData: null,
      spent: false,
      active: true,
    }
  },
  computed: {
    productsCarts() {
      return this.$store.state.productsCart
    },
    getFreeShipping() {
      let free = true
      if (this.product.envio_gratis == 1) {
        free = false
      } else if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false
      }
      return free
    },
    rangosByCiudad() {
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores)
      return this.rangosByCiudades
    },
    soldOut() {
      if (
        this.product.con_variante &&
        this.product.variantes[0].variantes !== '[object Object]'
      ) {
        // this.estadoCart = true
        const arrCombinations = this.product.variantes
        let inventario = 0
        if (
          arrCombinations.length &&
          arrCombinations[0].variantes !== '[object Object]'
        ) {
          if (
            arrCombinations[0].combinaciones.length &&
            arrCombinations[0].combinaciones.length
          ) {
            if (
              JSON.parse(arrCombinations[0].combinaciones[0].combinaciones)
                .length
            ) {
              JSON.parse(
                arrCombinations[0].combinaciones[0].combinaciones
              ).forEach((item) => {
                inventario += parseInt(item.unidades)
              })
            }
          }
        }
        return !inventario
      } else {
        return !this.product.stock
      }
    },
  },
  methods: {
    getDataProduct() {
      this.salesData = {
        precio: this.product.precio,
        unidades: this.product.stock,
        sku: this.product.sku,
        estado: true,
      }
      this.maxQuantityValue = this.product.stock
      this.productsCarts.find((productCart, index) => {
        if (productCart.id == this.product.id) {
          this.productIndexCart = index
          this.productCart = productCart
          this.maxQuantityValue = this.product.stock - productCart.cantidad
        }
      })
      if (
        this.salesData.unidades == 0 ||
        this.maxQuantityValue <= 0 ||
        this.maxQuantityValue == 0
      ) {
        this.spent = true
      }
    },
    addShoppingCart() {
      if (this.product) {
        this.getDataProduct()
        if (this.product.id == this.idSlug) {
          let product = {
            id: this.product.id,
            precio: this.product.precio,
            cantidad: 1,
            foto_cloudinary: this.product.foto_cloudinary,
            nombre: this.product.nombre,
            combinacion: undefined,
            envio_gratis: this.product.envio_gratis,
          }
          if (this.salesData) {
            product.limitQuantity = this.product.stock
          } else {
            product.limitQuantity = this.product.stock
          }
          if (typeof this.productIndexCart === 'number') {
            const mutableProduct = this.$store.state.productsCart[
              this.productIndexCart
            ]
            mutableProduct.cantidad += 1
            this.$store.state.productsCart.splice(
              this.productIndexCart,
              1,
              mutableProduct
            )
          } else {
            this.$store.state.productsCart.push(product)
          }
          this.$store.commit('UPDATE_CONTENTCART')
          // this.$router.push('/')
          this.$store.state.openOrder = true
          this.$store.state.orderComponent = true
        }
      }
    },
    prodcutPrice() {
      if (
        this.product.con_variante &&
        this.product.variantes[0].variantes !== '[object Object]'
      ) {
        const arrCombinations = this.product.variantes
        if (
          arrCombinations.length &&
          arrCombinations[0].variantes !== '[object Object]'
        ) {
          if (this.product.combinaciones.length > 1) {
            let arrPrice = this.product.combinaciones.map((products) => {
              if (products.precio) {
                return products.precio
              }
            })
            if (arrPrice) {
              let resultPrice = arrPrice.sort(function (prev, next) {
                return prev - next
              })
              if (resultPrice[resultPrice.length - 1]) {
                this.minPrice = resultPrice[0]
                this.maxPrice = resultPrice[resultPrice.length - 1]
              }
            }
          }
        }
      }
    },
  },
  watch: {
    productsCarts(value) {
      this.getDataProduct()
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
.separador {
  margin: 30px;
}
.separador-descuento {
  margin: 20px;
}
.wrapper-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background: var(--background_color_1); */
  background: white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05) !important;
}
.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.card-info-1 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 4px;
  border-radius: var(--radius_btn);
  color: white;
  font-size: 12px;
  top: 80%;
  right: 0px;
  z-index: 2;
}
.card-info-2 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35dd8d;
  padding: 1px 4px;
  border-radius: var(--radius_btn);
  color: black;
  font-size: 12px;
  font-weight: bold;
  top: 87%;
  right: 0px;
  z-index: 2;
}
.wrapper-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-height: 300px;
}
.product-image {
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.product-image-soldOut {
  filter: grayscale(100%);
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.wrapper-text {
  display: initial;
  margin-top: 5px;
  width: 100%;
}
.content-text-price {
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
}
.content-text-price2 {
  display: flex;
  width: 100%;
  height: 47px;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
}
.content-soldOut {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.card-text {
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  text-align: center;
  /* color: var(--color_text); */
  color: black;
  font-weight: 400;
}
.content-name-product {
  display: flex;
  width: 100%;
  height: 40px;
  padding: 0px 20px;
  margin-bottom: 5px;
  margin-top: 10px;
  justify-content: center;
  align-items: center;
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 47px;
}
.content-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.separator-price {
  /* color: var(--color_text); */
  color: black;
  margin-left: 5px;
  margin-right: 5px;
}
.card-price-1 {
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: rgba(55, 4, 4, 0.61);
  text-decoration: line-through;
  text-align: center;
}
.card-descuento {
  font-size: 12px;
  color: white;
  background: #fe5858;
  border-radius: 3px;
  padding: 0px 4px;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  position: relative;
  top: -8px;
  margin-left: 5px;
}
.card-price-2 {
  font-size: 22px;
  font-weight: '500';
  line-height: 1.4;
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
  text-align: left;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 1px var(--color_background_btn);
  background-color: var(--color_background_btn);
  padding: 8px 14px;
  font-size: 14px;
  width: 120px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-self: center;
  text-align: center;
}
.btn:hover {
  background-color: var(--btnhover);
  border: solid 1px var(--btnhover);
}
.wrapper {
  display: initial;
  width: 100%;
}
.wrapper-movil {
  display: none;
}

.card-icon-cart {
  font-size: 20px;
  color: var(--color_text_btn);
  margin-right: 4px;
  cursor: pointer;
  bottom: 0.125em;
}
.card-icon-cart-movil {
  font-size: 20px;
  /* color: var(--color_text); */
  color: black;
  margin-right: 4px;
  cursor: pointer;
  bottom: 0.125em;
}
.card-icon-cart-movil:hover {
  color: var(--btnhover);
}
@media (max-width: 768px) {
  .wrapper {
    display: none;
  }
  .wrapper-movil {
    display: initial;
    width: 100%;
  }
  .content-name-product-movil {
    display: flex;
    width: 100%;
    padding: 0px 10px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
    height: 30px;
  }
  .card-text-movil {
    font-size: 13px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.3;
    letter-spacing: 0.2px;
    /* color: var(--color_text); */
    color: black;
    font-weight: 400;
    text-align: center;
  }
  .content-text-price-movil {
    display: flex;
    width: 100%;
    padding: 0px 20px;
    align-items: center;
    justify-content: center;
  }
  .content-text-price-movil-cart {
    display: flex;
    width: 100%;
    padding: 0px 20px;
    align-items: center;
    justify-content: space-around;
  }
  .card-price-1-movil {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: rgba(55, 4, 4, 0.61);
    text-decoration: line-through;
    text-align: center;
  }
  .separator-movil {
    width: 100%;
    height: 40px;
    margin-top: 5px;
    display: flex;
    justify-content: center;
    align-self: center;
  }
  .card-info-1 {
    top: 77%;
  }
  .card-info-2 {
    top: 85%;
  }
  .product-image {
    width: 100%;
    object-fit: contain;
    /* object-fit: cover; */
    overflow: hidden;
  }
}
@media (max-width: 630px) {
  .card-info-1 {
    top: 76%;
  }
  .card-info-2 {
    top: 85%;
  }
}
@media (max-width: 580px) {
  .card-info-1 {
    top: 81%;
  }
  .card-info-2 {
    top: 91%;
  }
}
@media (max-width: 450px) {
  .container {
    width: 100%;
    max-width: 200px;
  }
  .card-price-2 {
    font-size: 16px;
  }
  .card-info-1 {
    top: 70%;
    font-size: 12px;
  }
  .card-info-2 {
    top: 82%;
    font-size: 12px;
  }
}
</style>
