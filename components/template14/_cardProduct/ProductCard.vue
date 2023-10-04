<template>
  <div
    id="product-card"
    class="h-full w-full flex flex-col justify-between items-center shadow-md border rounded-5 cursor-pointer relative wrapper_container"
    :style="[settingGeneral, cardProducts]"
  >
    <div class="relative max-w-full h-full container">
      <nuxt-link :to="{ path: `/productos/` + product.slug }">
        <img
          v-lazy="idCloudinary(product.foto_cloudinary, 400, 400)"
          :class="!soldOut ? '' : 'grayscale'"
          class="w-full object-cover overflow-hidden rounded-t-5 max-w-[300px] max-h-[350px]"
          alt="Product Img"
        />
      </nuxt-link>
      <p
        v-if="soldOut"
        class="absolute bottom-54 right-10 text-12 px-2 py-1 rounded-4 bg-red-500 text-white-white"
      >
        {{ $t('home_cardAgotado') }}
      </p>
      <p
        v-if="!getFreeShipping"
        class="absolute bottom-30 right-10 text-12 px-2 py-1 rounded-4 bg-green-500 text-white-white"
      >
        {{ $t('home_cardGratis') }}
      </p>
      <div
        v-if="product.tag_promocion == 1 && product.promocion_valor"
        class="absolute top-10 left-10 py-1 px-5 text-white-white uppercase text-12 bg-red-500 right-auto rounded-4"
      >
        <p class="block">{{ product.promocion_valor }}% OFF</p>
      </div>
    </div>
    <div
      class="w-full h-full flex flex-col justify-between items-center my-6 mx-10 cursor-default relative box-border"
    >
      <nuxt-link
        :to="{ path: `/productos/` + product.slug }"
        class="w-full h-full text-center pt-10 transition-all ease-out duration-0.2 min-h-[91px] md:min-h-[64px] card-title"
      >
        {{
          product.nombre.slice(0, 54) +
          (product.nombre.length >= 54 ? '...' : '')
        }}
      </nuxt-link>
      <div class="mt-10">
        <div v-if="estadoCart && equalsPrice && minPrice">
          <p class="text-price">
            {{
              minPrice
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </p>
        </div>
        <div
          v-else-if="estadoCart && minPrice && maxPrice && !equalsPrice"
          class="content-price"
        >
          <div class="text-price">
            {{
              minPrice
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </div>
          <p class="separator-price">-</p>
          <div class="text-price">
            {{
              maxPrice
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </div>
        </div>
        <div v-else>
          <p v-if="product.precio > 0 || product.precio" class="text-price">
            {{
              product.precio
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </p>
        </div>
      </div>
      <div
        class="w-full absolute -bottom-10 opacity-0 flex flex-row justify-center items-center transition-all ease-in duration-0.3 z-10 wrapper_btn"
      >
        <nuxt-link
          :to="{ path: `/productos/` + product.slug }"
          class="px-12 py-8 shadow-lg rounded-full btn"
          :style="`background-color:${cardProducts.color_btn};color:${cardProducts.color_icon};`"
        >
          <eye-outline-icon />
        </nuxt-link>
        <button
          v-if="
            !estadoCart &&
            !soldOut &&
            !spent &&
            (product.tipo_servicio == null || product.tipo_servicio == '0')
          "
          class="ml-10 px-12 py-8 shadow-lg rounded-full btn"
          :style="`background-color:${cardProducts.color_btn};color:${cardProducts.color_icon};`"
          @click="addShoppingCart"
        >
          <cart-icon />
        </button>
      </div>
    </div>
    <nuxt-link
      :to="{ path: `/productos/` + product.slug }"
      class="absolute top-0 w-full h-full backdrop-blur-sm opacity-0 wrapper_blur"
    />
  </div>
</template>

<script>
import idCloudinary from '@/mixins/idCloudinary'
import currency from '@/mixins/formatCurrent'
export default {
  name: 'Ko15ProductCard',
  mixins: [idCloudinary, currency],
  props: {
    product: {
      type: Object,
      required: true,
    },
    cardProducts: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      hover: false,
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
      equalsPrice: false,
    }
  },

  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
                if (item.unidades) {
                  inventario += parseInt(item.unidades)
                }
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
  watch: {
    productsCarts() {
      this.getDataProduct()
    },
  },
  mounted() {
    this.idSlug = this.product.id
    this.productPrice()
    if (
      this.product.con_variante &&
      this.product.variantes[0].variantes !== '[object Object]'
    ) {
      this.estadoCart = true
    }
    if (this.product) {
      this.getDataProduct()
    }
  },
  methods: {
    getDataProduct() {
      if (this.product) {
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
      }
    },
    addShoppingCart() {
      if (this.product) {
        this.productIndexCart = null
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
            const mutableProduct =
              this.$store.state.productsCart[this.productIndexCart]
            mutableProduct.cantidad += 1
            this.$store.state.productsCart.splice(
              this.productIndexCart,
              1,
              mutableProduct
            )
          } else {
            this.$store.state.productsCart.push(product)
          }
          this.$store.commit('UPDATE_CONTENT_CART')
          // this.$router.push('/')
          this.$store.commit('SET_OPEN_ORDER', true)
          // this.$store.state.orderComponent = true
          this.$store.dispatch('SEND_ADD_TO_CART', 1)
          this.$message.success('Comentario enviado!')
        }
      }
    },
    productPrice() {
      if (
        this.product.con_variante &&
        this.product.variantes[0].variantes !== '[object Object]'
      ) {
        const arrCombinations = this.product.variantes
        if (
          arrCombinations.length &&
          arrCombinations[0].variantes !== '[object Object]'
        ) {
          this.productVariants = true
          if (
            this.product &&
            this.product.combinaciones &&
            this.product.combinaciones.length &&
            this.product.combinaciones.length > 1
          ) {
            let arrPrice = []
            this.product.combinaciones.find((products) => {
              if (products.precio && products.estado) {
                arrPrice.push(products.precio)
              }
            })
            if (arrPrice) {
              let resultPrice = arrPrice.sort(function (prev, next) {
                return prev - next
              })
              if (resultPrice[resultPrice.length - 1]) {
                this.minPrice = resultPrice[0]
                this.maxPrice = resultPrice[resultPrice.length - 1]
                if (this.minPrice === this.maxPrice) {
                  this.equalsPrice = true
                } else {
                  this.equalsPrice = false
                }
              }
            }
          }
        }
      }
    },
  },
}
</script>

<style scoped>
.wrapper_container {
  background-color: var(--background_color_1);
}
.card-title {
  color: var(--color_title);
  font-size: var(--fontSizeTitle);
  font-weight: var(--fontWeighTitle);
}
.card-title:hover {
  color: var(--hover_text);
  @apply transition-all ease-out duration-0.2;
}
.separator-price {
  font-size: var(--fontSizeTitle);
  color: var(--color_price) !important;
}
.text-price {
  color: var(--color_price) !important;
  font-weight: var(--fontWeighPrice);
  font-size: var(--fontSizeTitle);
  white-space: nowrap;
  text-align: left;
}
.text-free {
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.text-sould {
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.btn {
}
.btn:hover {
  color: var(--hover_text_btn);
  background-color: var(--hover_Bg_btn);
  @apply transition-all ease-in duration-0.2;
}
.icon-shop {
  fill: var(--color_text_btn);
  @apply mr-5 mb-5;
}
.wrapper_btn {
  /* background-color: var(--background_color_1); */
}
#product-card:hover .wrapper_btn {
  @apply transition-all ease-in duration-0.3 bottom-5 opacity-100;
}
#product-card:hover .wrapper_blur {
  @apply transition-all ease-in duration-0.3 opacity-100;
}
@screen sm {
  .overlay-top {
    @apply absolute overflow-hidden rounded-md bg-white-white shadow-md transition-all ease-in duration-300;
    top: 10%;
    right: 0;
    width: 45px;
    height: 40px;
  }
  .overlay-free {
    @apply absolute rounded;
    position: absolute;
    top: 0%;
    right: 0;
    background-color: #222;
    overflow: hidden;
    width: 110px;
    height: 10%;
    transition: 0.5s ease;
  }
  .text-free {
    font-size: 75%;
  }
  .overlay-polygon {
    position: absolute;
    top: 10%;
    right: 15px;
    background-color: transparent;
    overflow: hidden;
    width: 5%;
    height: 5%;
  }
  .overlay-sould {
    @apply flex justify-center items-center rounded-l-lg;
    position: absolute;
    top: 0%;
    left: 60%;
    right: 0;
    overflow: hidden;
    width: 35%;
    height: 20%;
    transition: 0.5s ease;
  }
  .svg-sould-out {
    width: 40px;
    height: 40px;
  }
  .content-price {
    @apply flex flex-row justify-center items-center w-full;
  }
  .separator-price {
    @apply mx-1;
  }
}
@screen md {
  .text-free {
    font-size: 100%;
  }
  .svg-sould-out {
    width: 60px;
    height: 60px;
  }
  .separator-price {
    @apply mx-4;
  }
}
@screen mlg {
  .overlay-top {
    top: 35px;
    left: 100%;
    right: 0;
    width: 0;
    height: 40px;
  }
  .container:hover .overlay-top {
    width: 40px;
    left: 85%;
  }
  .overlay-free {
    top: 0px;
    left: 100%;
    right: 0;
    width: 0;
    height: 35px;
    transition: 0.5s ease;
  }
  .container:hover .overlay-free {
    width: 32%;
    left: 68%;
    transition-delay: 700ms;
  }
  .overlay-polygon {
    top: 35px;
    left: 100%;
    right: 0;
    width: 0;
    height: 5%;
  }
  .container:hover .overlay-polygon {
    width: 5%;
    left: 90%;
    transition-delay: 950ms;
  }
  .overlay-sould {
    top: 5%;
    left: 100%;
    right: 0;
    width: 0;
    height: 20%;
    transition: 0.5s ease;
  }
  .container:hover .overlay-sould {
    width: 35%;
    left: 65%;
    transition-delay: 700ms;
  }
  .svg-sould-out {
    width: 60px;
    height: 60px;
  }
}
@screen xml {
  .overlay-top {
    top: 35px;
    left: 100%;
    right: 0;
    width: 0;
    height: 40px;
  }
  .container:hover .overlay-top {
    width: 40px;
    left: 86%;
  }
}
@screen xxl {
  .overlay-top {
    top: 35px;
    left: 100%;
    right: 0;
    width: 0;
    height: 40px;
  }
  .container:hover .overlay-top {
    width: 40px;
    left: 88%;
  }
  .overlay-sould {
    top: 5%;
    left: 100%;
    right: 0;
    width: 0;
    height: 20%;
    transition: 0.5s ease;
  }
  .container:hover .overlay-sould {
    width: 30%;
    left: 75%;
    transition-delay: 700ms;
  }
}
@media (min-width: 3000px) {
  .overlay-top {
    top: 35px;
    left: 100%;
    right: 0;
    width: 0;
    height: 40px;
  }
  .container:hover .overlay-top {
    width: 40px;
    left: 89%;
  }
}
</style>
