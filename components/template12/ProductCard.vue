<template>
  <div
    v-if="product"
    class="wrapper_card product_container"
    @mouseenter="() => (isHover = true)"
    @mouseleave="() => (isHover = false)"
  >
    <div
      class="content-img-prodcut"
      :class="
        settingByTemplate12.responsiveImages ? 'img_visileRes' : 'img_normal'
      "
    >
      <img
        v-if="!soldOut"
        v-lazy="idCloudinary(product.foto_cloudinary, 150, 150)"
        role="presentation"
        class="product-image"
        alt="Product Img"
        :class="
          settingByTemplate12.roundedImages ? 'img_rounded' : 'img_normal'
        "
      />
      <img
        v-if="soldOut"
        v-lazy="product.foto_cloudinary"
        role="presentation"
        class="product-image product-image-soldOut"
        alt="Product Img soldOut"
        :class="
          settingByTemplate12.roundedImages ? 'img_rounded' : 'img_normal'
        "
      />
    </div>
    <div class="wrapper-text">
      <div class="product_header mb-1">
        <h3
          v-if="product.nombre"
          class="product_name font-semibold text-md"
          :style="`color:${settingByTemplate12.textColor};`"
        >
          {{ product.nombre }}
        </h3>
      </div>
      <div class="product_description">
        <p
          v-if="product.categoria"
          class="font-normal text-sm"
          :style="`color:${settingByTemplate12.descriptionColor};`"
        >
          {{ product.categoria }}
        </p>
        <p
          v-if="product.marca"
          class="font-normal text-xs"
          :style="`color:${settingByTemplate12.descriptionColor};`"
        >
          {{ product.marca }}
        </p>
      </div>
    </div>
    <div class="wrapper-price">
      <span
        class="font-semibold"
        :style="`color:${settingByTemplate12.priceColor};`"
      >
        {{
          product.precio
            | currency(dataStore.tienda.codigo_pais, dataStore.tienda.moneda)
        }}
      </span>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
import currency from '../../mixins/formatCurrent'

export default {
  name: 'ProductCard',
  mixins: [idCloudinary, currency],
  props: {
    product: {
      type: Object,
      required: true,
    },
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate12: {
      type: Object,
      required: true,
    },
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
      if (!this.soldOut) {
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
            this.$message({
              showClose: true,
              message: 'Se agregó el producto correctamente',
              type: 'success',
            })
            this.$store.dispatch('SEND_ADD_TO_CART', 1)
          }
        }
      } else {
        this.$message({
          showClose: true,
          message: 'Este producto esta agotado',
          type: 'warning',
        })
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
.wrapper_card {
  margin-bottom: 25px;
  width: 100%;
  /* max-width: 460px; */
  @apply relative flex items-start flex-nowrap bg-transparent cursor-pointer;
}
.wrapper_card > div:nth-child(1) {
  max-width: 100px;
}
.wrapper_card > div:nth-child(3) {
  max-width: 130px;
}
.product_container .content-img-prodcut > img,
.product_container .product_header,
.product_container .product_description,
.product_container .wrapper-price > span {
  transition: all 220ms ease-in-out;
}
.product_container:hover .content-img-prodcut > img,
.product_container:hover .product_header,
.product_container:hover .product_description,
.product_container:hover .wrapper-price > span {
  transform: translateX(0.4rem);
}
.content-img-prodcut {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.product-image {
  max-width: 80px;
  max-height: 80px;
  object-fit: cover;
  margin-right: 10px;
  object-position: center;
}
.img_rounded {
  border-radius: 100%;
}
.img_normal {
  border-radius: 2px;
}
.product-image-soldOut {
  filter: grayscale(100%);
}
.wrapper-price {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.wrapper-text {
  @apply w-full flex-col;
}
.img_visileRes {
  display: flex;
}
@media (max-width: 768px) {
  .wrapper_card {
    @apply justify-start;
  }
}
@media (max-width: 450px) {
  .wrapper-text {
    max-width: 160px;
    margin-right: 3px;
  }
  .wrapper_card {
    align-items: flex-start;
  }
  .wrapper_card > div:nth-child(1) {
    max-width: 80px;
    margin-right: 10px;
  }
  .wrapper_card > div:nth-child(3) {
    max-width: 100px;
  }
  .product-image {
    max-width: 70px;
    max-height: 70px;
  }
  .img_visileRes {
    display: none;
  }
  .img_normal {
    display: flex;
  }
}
@media (max-width: 320px) {
  .wrapper-text {
    max-width: 120px;
  }
}
</style>
