<template>
  <div class="producto" :style="settingKcardProduct">
    <div class="container">
      <router-link
        :to="{ path: `/productos/` + product.slug }"
        class="wrapper-image"
      >
        <client-only>
          <img
            v-if="!soldOut"
            v-lazy="idCloudinary(this.product.foto_cloudinary, 600, 600)"
            class="product-image"
            alt="Product Img"
          />
          <img
            v-if="soldOut"
            v-lazy="idCloudinary(this.product.foto_cloudinary, 600, 600)"
            class="product-image-soldOut"
            alt="Product Img"
          />
        </client-only>
        <div class="image_overlay"></div>
      </router-link>
    </div>
    <div class="datos-producto">
      <router-link :to="{ path: `/productos/` + product.slug }">
        <div class="tittle">
          <p class="card-title" v-if="this.product.nombre.length >= 54">
            {{ `${this.product.nombre.slice(0, 54)}...` }}
          </p>
          <p class="card-title" v-else>
            {{ `${this.product.nombre.slice(0, 54)}` }}
          </p>
        </div>
      </router-link>
      <div class="content-text-price" v-if="this.product.precio">
        <div
          class="content-price"
          v-if="this.estadoCart == true && this.minPrice != this.maxPrice"
        >
          <div
            class="text-price"
            v-if="this.product.precio > 0 || this.product.precio"
          >
            {{
              this.minPrice
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </div>
          <p class="separator-price">-</p>
          <div
            class="text-price"
            v-if="this.product.precio > 0 || this.product.precio"
          >
            {{
              this.maxPrice
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </div>
        </div>
        <div v-else>
          <p
            class="text-price"
            v-if="this.product.precio > 0 || this.product.precio"
          >
            {{
              this.product.precio
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductCard',
  props: { product: Object, settingKcardProduct: Object },

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
    }
  },
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
  computed: {
    facebooPixel() {
      return this.$store.state.analytics_tagmanager
    },
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
          if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
            window.fbq('track', 'AddToCart', {
              content_type: 'product',
              content_ids: this.data.detalle.id,
              value: this.salesData.precio,
              num_items: this.data.cantidad,
              content_name: this.data.detalle.nombre,
              currency: this.dataStore.tienda.moneda,
              description: 'Agregar al carrito el producto',
            })
          }
          this.$gtm.push({ event: 'AddToCart' })
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
.product-image {
  @apply w-full object-cover overflow-hidden;
}
.product-image-soldOut {
  filter: grayscale(100%);
  @apply w-full object-cover overflow-hidden;
}
.producto {
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center cursor-pointer;
}
.datos-producto {
  @apply w-full flex flex-col justify-center items-center my-6  cursor-default;
}
.container {
  @apply relative max-w-full;
}
.image {
  @apply w-full h-auto;
}
.icon {
  @apply text-white-white;
}
.icons-hover {
  @apply text-gray-textHeader absolute text-center transition-all ease-in duration-300 grid grid-cols-1 gap-0;
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.icon-show-mobile {
  fill: white;
}
.tittle {
  @apply w-full flex justify-center items-center;
}
.card-title {
  font-size: var(--fontSizeTitle);
  @apply pt-10 transition-all ease-out duration-0.2;
}
.separator-price {
  font-size: 16px;
  color: var(--color_price);
  margin-top: 10px;
}
.text-price {
  font-size: var(--fontSizePretitle);
  @apply text-center font-semibold mt-10;
}
.text-free {
  color: white;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  @apply absolute whitespace-nowrap;
}
.icon-overlay-free {
  color: #222;
}
.text-sould {
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  white-space: nowrap;
}
.txt-free {
  font-size: 15px;
  font-weight: 600;
}
.btn-content {
  @apply w-full flex flex-row justify-center items-center;
}
.btn {
  background-color: #222;
  color: #fff;
  @apply w-auto h-40 px-20 my-20 transition-all ease-in duration-0.2;
}
.btn:hover {
  background-color: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.txt-btn {
  color: #fff;
  font-size: 12px;
  @apply uppercase;
}
.icon-shop {
  fill: #fff;
  @apply mr-5 mb-5;
}
@screen sm {
  .card-title {
    color: var(--color_title);
    font-weight: var(--fontWeighTitle);
    font-family: var(--font-style-1) !important;
    font-size: 14px;
  }
  .text-price {
    font-size: 13px;
    color: var(--color_price);
    font-weight: var(--fontWeighPretitle);
    font-family: var(--font-style-1) !important;
  }
  .content-text-price,
  .content-price {
    @apply w-full flex flex-row justify-center items-center;
  }
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
  .text-price {
    font-size: 16px;
  }
}
@screen mlg {
  .icon {
    margin-top: 0px;
  }
  .overlay-top {
    top: 35px;
    left: 100%;
    right: 0;
    width: 0;
    height: 40px;
  }
  .product-image,
  .product-image-soldOut {
    height: 360px;
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
