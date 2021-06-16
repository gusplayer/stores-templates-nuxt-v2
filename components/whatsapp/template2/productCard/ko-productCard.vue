<template>
  <div class="content-productCard">
    <div class="content-items-productCard">
      <router-link
        class="content-img-prodcut"
        :to="{
          path: `/wa/${dataStore.tienda.id_tienda}/producto/` + product.slug,
        }"
      >
        <img
          v-if="!soldOut"
          v-lazy="idCloudinary(this.product.foto_cloudinary, 350, 350)"
          class="product-image"
          alt="Product-Img-soldOut"
        />
        <img
          v-if="soldOut"
          v-lazy="idCloudinary(this.product.foto_cloudinary, 350, 350)"
          class="product-image product-image-soldOut"
          alt="Product-Img"
        />
      </router-link>
      <router-link
        class="content-description-product"
        :to="{
          path: `/wa/${dataStore.tienda.id_tienda}/producto/` + product.slug,
        }"
      >
        <p
          class="txt-name-product pb-auto"
          v-if="this.product.nombre.length >= 42"
        >
          {{ `${this.product.nombre.slice(0, 42)}..` }}
        </p>
        <p class="txt-name-product pb-auto" v-else>
          {{ `${this.product.nombre.slice(0, 42)}` }}
        </p>
        <div class="content-price-product">
          <div
            class="item-price-product"
            v-if="estadoCart && this.minPrice != this.maxPrice"
          >
            <p
              class="txt-product-price"
              v-if="this.product.precio > 0 || this.product.precio"
            >
              {{
                this.minPrice
                  | currency(
                    dataStore.tienda.codigo_pais,
                    dataStore.tienda.moneda
                  )
              }}
            </p>
            <p class="separator-price">-</p>
            <p
              class="txt-product-price"
              v-if="this.product.precio > 0 || this.product.precio"
            >
              {{
                this.maxPrice
                  | currency(
                    dataStore.tienda.codigo_pais,
                    dataStore.tienda.moneda
                  )
              }}
            </p>
          </div>
          <div class="item-price-product" v-else>
            <p class="txt-product-price" v-if="this.product.precio > 0">
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
      </router-link>
      <div
        class="content-buttons"
        v-if="!this.estadoCart && !soldOut && !spent"
      >
        <div
          class="button-left"
          v-if="this.product.precio > 0"
          v-on:click="addShoppingCart"
        >
          <svg
            class="svg-img"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <router-link
          class="button-right"
          :style="`background: ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          };`"
          :to="{
            path: `/wa/${dataStore.tienda.id_tienda}/producto/` + product.slug,
          }"
        >
          <p
            class="txt-btn-right"
            :style="`color:${settingByTemplate.color_secundario};`"
          >
            {{ $t('productdetail_btnComprar') }}
          </p>
        </router-link>
      </div>
      <router-link
        v-else
        class="button-right"
        :style="`background: ${
          settingByTemplate && settingByTemplate.color_primario
            ? settingByTemplate.color_primario
            : '#25D366'
        };`"
        :to="{
          path: `/wa/${dataStore.tienda.id_tienda}/producto/` + product.slug,
        }"
      >
        <p
          class="txt-btn-right"
          :style="`color:${settingByTemplate.color_secundario};`"
        >
          {{ $t('productdetail_btnComprar') }}
        </p>
      </router-link>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../../../mixins/idCloudinary'
export default {
  name: 'ProductCardWa',
  mixins: [idCloudinary],
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
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate
      } else {
        return this.$store.state.settingBaseWapir
      }
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
          this.$message({
            showClose: true,
            message: 'Se agregó el producto correctamente',
            type: 'success',
          })
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
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone='
      let baseUrlPc = 'https://web.whatsapp.com/send?phone=57'
      let urlProduct
      if (this.dataStore.tienda.dominio) {
        urlProduct = `${this.dataStore.tienda.dominio}wa/${this.product.slug}`
      } else {
        urlProduct = `http://${this.dataStore.tienda.subdominio}.komercia.store/wa/${this.product.slug}`
      }
      let text = `text=Hola 😀, %0AEstoy en tu tienda y me interesa el producto: ${this.product.nombre}%0A%0ALink de compra: ${urlProduct}%0A`
      if (this.dataStore.tienda.whatsapp.length > 10) {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp
        if (phone_number_whatsapp.charAt(0) === '+') {
          phone_number_whatsapp = phone_number_whatsapp.slice(1)
        }
        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}${phone_number_whatsapp}&${text}`,
            '_blank'
          )
        } else {
          window.open(`${baseUrlPc}${phone_number_whatsapp}&${text}`, '_blank')
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}${this.dataStore.tienda.whatsapp}&${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}${this.dataStore.tienda.whatsapp}&${text}`,
            '_blank'
          )
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
.content-productCard {
  @apply w-full h-full flex flex-col justify-start items-center;
}
@screen sm {
  .content-items-productCard {
    max-width: 350px;
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-img-prodcut {
    max-width: 350px;
    background-color: #f9f9f9;
    @apply w-full flex flex-col justify-center items-center rounded-9 border overflow-hidden;
  }
  .product-image {
    @apply w-full object-cover object-center;
  }
  .product-image-soldOut {
    filter: grayscale(100%);
  }
  .content-description-product {
    @apply w-full h-80 grid grid-cols-1 gap-1 justify-center items-center my-10;
  }
  .txt-name-product {
    color: #3d3d3d;
    font-size: 14px;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-start font-medium;
  }
  .content-price-product {
    @apply w-auto flex flex-col justify-center items-center;
  }
  .item-price-product {
    @apply w-full flex flex-row justify-start items-center gap-1;
  }
  .txt-product-price {
    color: #3d3d3d;
    font-size: 14px;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto flex flex-col justify-center items-start font-bold;
  }
  .content-buttons {
    @apply w-full flex flex-row justify-between items-center;
  }
  .button-left {
    max-height: 34px;
    background-color: #ececec;
    @apply w-auto flex flex-col justify-center items-center rounded-5 p-8 mr-5 cursor-pointer;
  }
  .svg-img {
    color: black;
    @apply w-21 h-auto;
  }
  .button-right {
    max-height: 34px;
    @apply w-full flex flex-col justify-center items-center rounded-7 px-12 py-8 cursor-pointer;
  }
  .txt-btn-right {
    font-size: 14px;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-center font-semibold;
  }
}
@media (min-width: 425px) {
  .content-description-product {
    @apply h-60;
  }
}
@media (min-width: 500px) {
  .content-description-product {
    @apply h-45;
  }
}
@media (min-width: 600px) {
  /* .content-description-product {
    @apply w-full h-50 flex flex-row justify-center items-center gap-2;
  } */
  /* .item-price-product {
    @apply flex flex-row justify-end items-center;
  } */
  .content-description-product {
    @apply h-70;
  }
  .item-price-product {
    @apply flex flex-row justify-start items-center;
  }
  .txt-name-product {
    font-size: 16px;
  }
  .txt-product-price {
    font-size: 16px;
    font-weight: bold;
  }
  .button-left {
    @apply p-5 mr-10;
  }
  .svg-img {
    @apply w-32 h-auto;
  }
  .button-right {
    @apply py-8;
  }
  .txt-btn-right {
    font-size: 16px;
  }
}
</style>
