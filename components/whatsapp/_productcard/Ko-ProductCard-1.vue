<template>
  <div class="container">
    <div class="wrapper-movil">
      <router-link :to="{ path: `/wa/` + product.slug }" class="wrapper-image">
        <img :src="idCloudinary(this.product.foto_cloudinary, 250, 250)" class="product-image" />
      </router-link>
      <div class="wrapper-text">
        <router-link :to="{ path: `/wa/` + product.slug }" class="content-name-product-movil">
          <p
            class="card-text-movil"
            v-if="this.product.nombre.length >= 55"
          >{{ `${this.product.nombre.slice(0, 55)}..` }}</p>
          <p class="card-text-movil" v-else>{{ `${this.product.nombre.slice(0, 55)}` }}</p>
        </router-link>
        <div class="content-text-price-movil-cart" v-if="this.product.precio">
          <router-link :to="{ path: `/wa/` + product.slug }" class="wrapper-price">
            <div>
              <!-- <p class="card-price-1-movil" v-if="this.product.precio > 0">
                  $ {{ this.product.precio }}
              </p>-->
              <p
                class="text-price"
                v-if="this.product.precio > 0"
              >{{ currency(this.product.precio) }}</p>
            </div>
            <!-- <p class="card-descuento">-50%</p> -->
          </router-link>
          <p class="card-info-1" v-if="soldOut">Agotado !</p>
          <p class="card-info-2" v-if="getFreeShipping == false">Envío gratis !</p>
          <div v-if="!this.estadoCart && !soldOut && !spent">
            <cartArrowDown class="card-icon-cart-movil" v-on:click="addShoppingCart" />
          </div>
        </div>
        <div class="separator-movil" v-else>
          <div v-if="!this.estadoCart && !soldOut && !spent">
            <cartArrowDown class="card-icon-cart-movil" v-on:click="addShoppingCart" />
          </div>
        </div>
      </div>
    </div>
    <div class="separator" />
  </div>
</template>

<script>
import axios from 'axios'
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductCard-1',
  props: { product: Object },
  mounted() {
    this.idSlug = this.product.id
  },
  data() {
    return {
      estadoCart: false,
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
      if (this.rangosByCiudad.envio_metodo === 'gratis') {
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
        this.estadoCart = true
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
  },
  watch: {
    productsCarts(value) {
      this.getDataProduct()
    },
  },
}
</script>

<style scoped>
.separator {
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  border: 0.8px solid #ededed8a;
}
.container {
  display: flex;
  flex: 1;
  margin-bottom: 4px;
}
.wrapper-movil {
  display: flex;
  flex: 1;
  flex-direction: row;
  padding: 12px 0px;
}
.wrapper-image {
  width: 90px;
  height: 90px;
  border-radius: 8px;
}
.product-image {
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 8px;
}
.wrapper-text {
  margin-left: 18px;
}
.card-text-movil {
  color: #4c4c4c;
  font-weight: bold;
  font-size: 15px;
}
.text-price {
  color: #6c6c6c;
  font-size: 14px;
  font-weight: 500;
}
.card-info-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 4px;
  border-radius: var(--radius_btn);
  color: white;
  font-size: 12px;
  width: fit-content;
  margin-top: 5px;
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
  width: fit-content;
}
</style>