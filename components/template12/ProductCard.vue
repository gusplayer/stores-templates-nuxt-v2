<template>
  <div
    class="wrapper_card product_container"
    @mouseenter="() => (isHover = true)"
    @mouseleave="() => (isHover = false)"
    v-show="product"
    v-on:click="addShoppingCart"
  >
    <div class="content-img-prodcut">
      <img
        v-if="!soldOut"
        :src="product.foto_cloudinary"
        role="presentation"
        class="product-image"
      />
      <img
        v-if="soldOut"
        :src="product.foto_cloudinary"
        role="presentation"
        class="product-image product-image-soldOut"
      />
    </div>

    <div class="wrapper-text">
      <div class="product_header mb-1">
        <h3 class="product_name font-semibold text-md text-gray-800">
          {{ product.nombre }}
        </h3>
      </div>
      <div class="product_description">
        <p class="font-normal text-gray-500 text-sm">
          {{ product.categoria }}
        </p>
      </div>
    </div>
    <div class="wrapper-price">
      <span class="font-semibold">
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
export default {
  name: 'ProductCard',
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
            this.$store.commit('UPDATE_CONTENTCART')
            this.$message({
              showClose: true,
              message: 'Se agregó el producto correctamente',
              type: 'success',
            })
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
    productsCarts() {
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
.wrapper_card {
  margin-bottom: 10px;
  width: 100%;
  max-width: 460px;
  @apply relative flex items-start flex-nowrap bg-transparent cursor-pointer;
}
.wrapper_card > div:nth-child(1) {
  max-width: 100px;
}
.wrapper_card > div:nth-child(3) {
  max-width: 100px;
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
  border-radius: 5px;
  object-fit: cover;
  margin-right: 10px;
  object-position: center;
}
.product-image-soldOut {
  filter: grayscale(100%);
}
.wrapper-price {
  width: 100%;
}
.wrapper-text {
  @apply w-full flex-col;
}
@media (max-width: 768px) {
  .wrapper-text {
    max-width: 190px;
  }
}
.wrapper_card {
  @apply items-center justify-center;
}
@media (max-width: 450px) {
  .wrapper-text {
    max-width: 160px;
  }
  .wrapper_card > div:nth-child(1) {
    max-width: 70px;
  }
  .wrapper_card > div:nth-child(3) {
    max-width: 80px;
  }
  .product-image {
    max-width: 70px;
    max-height: 70px;
  }
}
@media (max-width: 320px) {
  .wrapper-text {
    max-width: 120px;
  }
}
</style>
