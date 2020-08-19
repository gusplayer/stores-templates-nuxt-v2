<template>
  <div class="container-card">
    <div class="wrapper-movil">
      <router-link :to="{ path: `/wa/` + product.slug }" class="wrapper-image">
        <img :src="idCloudinary(this.product.foto_cloudinary, 280, 280)" class="product-image" />
      </router-link>
      <div class="wrapper-text">
        <div class="title-container">
          <p
            class="card-text-movil"
            v-if="this.product.nombre.length >= 40"
          >{{ `${this.product.nombre.slice(0, 40)}..` }}</p>
          <p class="card-text-movil" v-else>{{ `${this.product.nombre.slice(0, 40)}` }}</p>
          <whatsapp-icon class="wp-icon" v-on:click="redirectWP(product.nombre, product.slug)" />
        </div>
        <div class="content-text-price-movil-cart" v-if="this.product.precio">
          <router-link :to="{ path: `/wa/` + product.slug }" class="wrapper-price">
            <div>
              <p
                class="text-price"
                v-if="this.product.precio > 0"
              >{{ currency(this.product.precio) }}</p>
            </div>
            <!-- <p class="card-descuento">-50%</p> -->
          </router-link>
          <div class="container-sub-price">
            <div>
              <p class="card-info-2" v-if="getFreeShipping == false">Envío gratis!</p>
              <p class="card-info-1" v-if="soldOut">Agotado 🙁</p>
            </div>

            <!-- <div class="add-cart" v-if="!this.estadoCart && !soldOut && !spent">
              <cartArrowDown class="card-icon-cart-movil" v-on:click="addShoppingCart" />
            </div>-->
            <router-link :to="{ path: `/wa/` + product.slug }" class="view-more">
              <mas-icon class="mas-icon" />
              <p>Ver</p>
            </router-link>
          </div>
        </div>
        <div class="separator-movil" v-else>
          <!-- <div class v-if="!this.estadoCart && !soldOut && !spent">
            <cartArrowDown class="card-icon-cart-movil" v-on:click="addShoppingCart" />
          </div>-->
          <!-- <router-link :to="{ path: `/wa/` + product.slug }" class="view-more">
            <mas-icon class="mas-icon" />
            <p>Ver</p>
          </router-link>-->
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
    dataStore() {
      return this.$store.state.dataStore
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
    redirectWP(name, slug) {
      console.log(name + slug)
      let baseUrl = 'https://api.whatsapp.com/send?phone='
      let whatsApp = '573123760628'
      let productName = name
      let urlProduct = `https://${this.dataStore.tienda.subdominio}.komercia.store/${slug}`
      let text =
        'text=Hola 😀, %0AEstoy en tu tienda y me interesa el producto: %3A%0A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%0A'
      window.location.replace(
        `${baseUrl}${whatsApp}&${text}- ${productName}%0A- Link de compra: ${urlProduct}%0A`
      )
    },
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
.wp-icon {
  color: #3a4a59;
  color: #128c7e;
  font-size: 19px;
  margin: 0px;
  border-radius: 30px;
  /* background-color: #25d366;
  background-color: #2ec4a1; */
}
.container-card {
  display: flex;
  flex: 1;
  margin-bottom: 4px;
  padding: 0px 5px;
  flex-direction: column;
}
.add-cart {
  color: #455a64;

  width: fit-content;
}
.view-more {
  display: flex;
  background-color: #3e4462;
  color: white;
  align-items: center;
  padding: 7px 12px;
  border-radius: 4px;
  font-size: 12px;
  height: fit-content;
}
.mas-icon {
  font-size: 18px;
  margin-top: -4px;
}
.view-more p {
  font-weight: 500;
  font-size: 12px;
  align-self: center;
  margin-left: 5px;
  font-weight: 400;
  letter-spacing: -0.24px;
  font-style: normal;
  font-weight: normal;
}
.container-sub-price {
  display: flex;
  width: 100%;
  justify-content: space-between;
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
  border-radius: 6px;
}
.product-image {
  width: 90px;
  height: 90px;
  object-fit: contain;
  border-radius: 8px;
}
.wrapper-text {
  margin-left: 24px;
  width: 100%;
}
.title-container {
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
}
.card-text-movil {
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: -0.24px;
  color: #3e4462;
}
.text-price {
  color: #6c6c6c;
  font-size: 14px;
  font-weight: 500;
  margin-top: 2px;
  margin-bottom: 4px;
}
.card-info-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e84c4f;
  font-size: 12px;
  width: fit-content;
  font-weight: 400;
}
.card-info-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #00a650;
  font-size: 12px;
  font-weight: 400;
  width: fit-content;
}
</style>
