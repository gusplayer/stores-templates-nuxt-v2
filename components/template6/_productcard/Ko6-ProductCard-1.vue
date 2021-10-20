<template>
  <div class="wrapper-card" :style="settingByTemplate">
    <div class="container-card" id="product-card">
      <div class="wrapper">
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
          <div class="image_overlay"></div>
        </router-link>
        <div class="separador-stats"></div>
        <div class="stats">
          <div class="stats-container">
            <p class="card-info-1" v-if="soldOut">
              {{ $t('home_cardAgotado') }}
            </p>
            <p class="card-info-2" v-if="getFreeShipping == false">
              {{ $t('home_cardGratis') }}
            </p>
            <div class="content-name-product">
              <p class="card-title" v-if="this.product.nombre.length >= 54">
                {{ `${this.product.nombre.slice(0, 54)}...` }}
              </p>
              <p class="card-title" v-else>
                {{ `${this.product.nombre.slice(0, 54)}` }}
              </p>
            </div>
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
            <div class="content-price-empty" v-else></div>
            <div class="wrapper-btn-icon">
              <router-link
                id="view_details_06"
                router-link
                :to="{ path: `/productos/` + product.slug }"
              >
                <p>{{ $t('home_cardvermas') }}</p>
              </router-link>
              <div class="separador-btn"></div>
              <div
                id="add_cart"
                v-on:click="addShoppingCart"
                v-if="
                  !this.estadoCart &&
                  !soldOut &&
                  !spent &&
                  (this.product.tipo_servicio == null ||
                    this.product.tipo_servicio == '0')
                "
              >
                <p style="height: 23px">
                  <cartArrowDown /> {{ $t('home_cardAgregar') }}
                </p>
              </div>
            </div>
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
        </router-link>
        <div class="content-card-items">
          <p class="card-info-1" v-if="soldOut">{{ $t('home_cardAgotado') }}</p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            {{ $t('home_cardGratis') }}
          </p>
          <router-link
            :to="{ path: `/productos/` + product.slug }"
            class="content-name-product"
          >
            <p class="card-title" v-if="this.product.nombre.length >= 25">
              {{ `${this.product.nombre.slice(0, 25)}..` }}
            </p>
            <p class="card-title" v-else>
              {{ `${this.product.nombre.slice(0, 30)}` }}
            </p>
          </router-link>
          <div class="content-text-price" v-if="this.product.precio">
            <router-link :to="{ path: `/productos/` + product.slug }">
              <div
                class="content-price"
                v-if="estadoCart && this.minPrice != this.maxPrice"
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
            </router-link>
            <div
              v-if="
                !this.estadoCart &&
                !soldOut &&
                !spent &&
                (this.product.tipo_servicio == null ||
                  this.product.tipo_servicio == '0')
              "
            >
              <cartArrowDown class="icon-cart" v-on:click="addShoppingCart" />
            </div>
          </div>
          <div class="separator-movil" v-else>
            <div
              v-if="
                !this.estadoCart &&
                !soldOut &&
                !spent &&
                (this.product.tipo_servicio == null ||
                  this.product.tipo_servicio == '0')
              "
            >
              <cartArrowDown v-on:click="addShoppingCart" />
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
  name: 'Ko6-ProductCard-1',
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
              content_ids: this.product.id,
              value: this.salesData.precio,
              num_items: 1,
              content_name: this.product.nombre,
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
.wrapper-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* background: var(--background_color_1); */
  background: white;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: rgb(226, 226, 226) 0 1px 1px;
  border: 1px solid rgba(243, 243, 243, 0.637);
}
.container-card {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
  position: relative;
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
.image_overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #6969692a;
  opacity: 0;
}
#product-card:hover .image_overlay {
  opacity: 0.7;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
.separador-stats {
  height: 90px;
  width: 100%;
}
.stats-container {
  background: #fff;
  position: absolute;
  top: 288px;
  left: 0;
  width: 100%;
  height: 120px;
  padding: 20px 12px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
#product-card:hover .stats-container {
  top: 241px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
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
  top: -44px;
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
  top: -22px;
  right: 0px;
  z-index: 2;
}
.content-name-product {
  width: 100%;
  min-height: 36px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-align: center;
}
.card-title {
  font-size: 15px;
  font-weight: 500;
  /* color: var(--color_text); */
  color: rgb(63, 63, 63);
}
.content-text-price {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
}
.content-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  min-height: 29px;
  max-height: 29px;
}
.content-price-empty {
  width: 100%;
  margin-top: 5px;
  min-height: 29px;
  max-height: 29px;
}
.text-price {
  font-size: 20px;
  font-weight: 500;
  line-height: 1.4;
  /* color: var(--color_subtext); */
  color: rgb(70, 70, 70);
  text-align: center;
}
.separator-price {
  /* color: var(--color_text); */
  color: rgb(70, 70, 70);
  margin-left: 5px;
  margin-right: 5px;
}
.wrapper-btn-icon {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
#add_cart {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 130px;
  opacity: 0;
  height: 41px;
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 2px var(--color_background_btn);
  background-color: var(--color_background_btn);
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
#add_cart:hover {
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
  cursor: pointer;
}
#product-card:hover #add_cart {
  opacity: 1;
  width: 152px;
  font-size: 15px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
#view_details_06 {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 130px;
  opacity: 0;
  height: 41px;
  color: var(--color_background_btn);
  border-radius: var(--radius_btn);
  border: solid 2px var(--color_background_btn);
  background-color: transparent;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
#view_details_06:hover {
  color: var(--btnhover);
  border: solid 2px var(--btnhover);

  cursor: pointer;
}
#product-card:hover #view_details_06 {
  opacity: 1;
  width: 152px;
  font-size: 15px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
.separador-btn {
  width: 5px;
}
.wrapper {
  display: initial;
  width: 100%;
}
.wrapper-movil {
  display: none;
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
  .content-card-items {
    width: 100%;
    height: 75px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    position: relative;
  }
  .card-title {
    font-size: 13px;
  }
  .content-text-price {
    margin-top: 2px;
  }
  .text-price {
    font-size: 15px;
  }
  .icon-cart {
    margin-left: 20px;
  }
  .card-info-1 {
    font-size: 10px;
    top: -43px;
  }
  .card-info-2 {
    font-size: 10px;
    top: -22px;
  }
}
@media (max-width: 450px) {
  .container-card {
    width: 100%;
    max-width: 200px;
  }
}
</style>
