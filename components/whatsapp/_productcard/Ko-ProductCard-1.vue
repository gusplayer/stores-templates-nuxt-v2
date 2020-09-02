<template>
  <div class="wrapper-card">
    <div class="container">
      <div class="wrapper-movil">
        <router-link
          :to="{ path: `/wa/` + product.slug }"
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
            class="product-image product-image-soldOut"
            alt="Product Img"
          />
          <p class="card-info-1" v-if="soldOut">Agotado !</p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            Envío gratis !
          </p>
        </router-link>
        <div class="wrapper-text">
          <router-link
            :to="{ path: `/wa/` + product.slug }"
            class="content-name-product-movil"
          >
            <p
              class="card-text-movil-title"
              v-if="this.product.nombre.length >= 33"
            >
              {{ `${this.product.nombre.slice(0, 33)}..` }}
            </p>
            <p class="card-text-movil-title" v-else>
              {{ `${this.product.nombre.slice(0, 34)}` }}
            </p>
            <p class="card-text-movil" v-if="this.product.marca">
              {{ this.product.marca }}
            </p>
            <div
              class="content-text-price-movil-cart"
              v-if="this.product.precio"
            >
              <div class="wrapper-price">
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
              </div>
            </div>
          </router-link>
          <div class="Content-btn-movil">
            <div
              class="content-soldOut"
              v-if="!this.estadoCart && !soldOut && !spent"
            >
              <div
                v-on:click="addShoppingCart"
                class="btn"
                style="margin-right: 5px;"
              >
                <cartArrowDown class="card-icon-cart" />Agregar
              </div>
              <router-link
                :to="{ path: `/productos/` + product.slug }"
                class="btn"
                >Ver más</router-link
              >
            </div>

            <router-link
              :to="{ path: `/productos/` + product.slug }"
              v-else
              class="btn"
              >Ver más</router-link
            >
          </div>
        </div>
        <div class="btn-whatsapp" v-if="dataStore.whatsapp">
          <whatsapp-icon class="wp-icon" v-on:click="redirectWP()" />
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
  props: { product: Object, dataStore: Object },
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
    redirectWP() {
      let baseUrl = 'https://api.whatsapp.com/send?phone='
      let urlProduct
      if (this.dataStore.dominio) {
        urlProduct = `${this.dataStore.dominio}wa/${this.product.slug}`
      } else {
        urlProduct = `http://${this.dataStore.subdominio}.komercia.store/wa/${this.product.slug}`
      }
      let text =
        'text=Hola 😀, %0AEstoy en tu tienda y me interesa el producto: '
      window.open(
        `${baseUrl}${this.dataStore.whatsapp}&${text} ${this.product.nombre}%0A- Link de compra: ${urlProduct}%0A`
      )
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
.wrapper-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: rgb(241, 241, 241);
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05) !important;
}
.container {
  display: flex;
  align-items: flex-start;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
}
.wrapper-movil {
  width: 100%;
  height: 160px;
  max-height: 160px;
  display: flex;
  flex-direction: row;
  position: relative;
}
.wrapper-image {
  max-width: 160px;
  max-height: 160px;
  overflow: hidden;
  border-radius: 10px 0 0 10px;
}
.product-image {
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.product-image-soldOut {
  filter: grayscale(100%);
}
.card-info-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 2px;
  border-radius: var(--radius_btn);
  color: white;
  font-size: 12px;
  z-index: 2;
  position: absolute;
  top: 110px;
  left: 0px;
}
.card-info-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35dd8d;
  padding: 1px 2px;
  border-radius: var(--radius_btn);
  color: black;
  font-size: 12px;
  font-weight: bold;
  z-index: 2;
  position: absolute;
  top: 132px;
  left: 0px;
}
.wrapper-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content-name-product-movil {
  display: flex;
  width: 100%;
  padding: 0px 10px;
  margin-top: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 30px;
}
.card-text-movil-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 1.3;
  letter-spacing: 0.2px;
  color: black;
}
.card-text-movil {
  font-size: 13px;
  font-weight: 400;
  line-height: 1.3;
  letter-spacing: 0.2px;
  color: black;
}
.content-text-price-movil-cart {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
}
.content-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
.card-price-2 {
  font-size: 18px;
  font-weight: '500';
  line-height: 1.4;
  color: rgb(107, 107, 107);
  text-align: left;
}
.separator-price {
  color: black;
  margin-left: 5px;
  margin-right: 5px;
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
.Content-btn-movil {
  /* width: 100%; */
  height: 40px;
  display: flex;
  align-self: flex-end;
  align-items: flex-start;
}
.content-soldOut {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.btn {
  color: white;
  border-radius: 5px;
  border: solid 1px black;
  background-color: black;
  padding: 2px 3px;
  font-size: 14px;
  width: 90px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
}
.btn:hover {
  background-color: grey;
  border: solid 1px grey;
}
.btn-whatsapp {
  position: absolute;
  top: 70px;
  right: 10px;
}
.wp-icon {
  font-size: 32px;
  color: #25d366;
}
@media (max-width: 330px) {
  .btn-whatsapp {
    top: 78px;
  }
}
</style>
