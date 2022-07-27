<template>
  <div
    class="wrapper-card"
    :style="[
      settingGeneral,
      cardProduct,
      {
        '--font-style-1': settingGeneral.fount_1
          ? settingGeneral.fount_1
          : 'Poppins',
      },
    ]"
  >
    <div class="container-card" id="product-card">
      <div class="wrapper">
        <nuxt-link
          :to="{ path: `/productos/` + product.slug }"
          class="wrapper-image"
        >
          <client-only>
            <img
              v-if="!soldOut"
              v-lazy="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'
                  : idCloudinary(this.product.foto_cloudinary, 600, 600)
              "
              class="product-image"
              :class="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'notproduct-image'
                  : ''
              "
              alt="Product Img"
            />
            <img
              v-if="soldOut"
              v-lazy="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'
                  : idCloudinary(this.product.foto_cloudinary, 600, 600)
              "
              class="product-image-soldOut"
              :class="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'notproduct-image'
                  : ''
              "
              alt="Product Img"
            />
          </client-only>
          <div class="image_overlay"></div>
        </nuxt-link>
        <div
          v-if="this.product.tag_promocion == 1 && this.product.promocion_valor"
        >
          <div class="overlay-top">
            <div>
              <p>{{ this.product.promocion_valor }}% OFF</p>
            </div>
          </div>
          <div class="overlay-free">
            <p class="txt-free">{{ $t('home_pdescuento') }}</p>
          </div>
          <div class="overlay-polygon">
            <svg
              class="icon-overlay-free"
              width="12px"
              height="12px"
              viewBox="0 0 255 255"
            >
              <polygon points="0,0 127.5,127.5 255,0" />
            </svg>
          </div>
        </div>
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
              <nuxt-link
                class="view_details"
                :to="{ path: `/productos/` + product.slug }"
              >
                <p>{{ $t('home_cardvermas') }}</p>
              </nuxt-link>
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
        <nuxt-link
          :to="{ path: `/productos/` + product.slug }"
          class="wrapper-image"
        >
          <client-only>
            <img
              v-if="!soldOut"
              v-lazy="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'
                  : idCloudinary(this.product.foto_cloudinary, 350, 350)
              "
              :class="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'notproduct-image-res'
                  : ''
              "
              class="product-image"
              alt="Product Img"
            />
            <img
              v-if="soldOut"
              v-lazy="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'https://res.cloudinary.com/komerciaacademico/image/upload/v1637945917/komerica/sws8xa8z0oyu252nqxzv_cgwcdb.png'
                  : idCloudinary(this.product.foto_cloudinary, 350, 350)
              "
              :class="
                this.product.foto_cloudinary == 'sin_foto.jpeg'
                  ? 'notproduct-image-res'
                  : ''
              "
              class="product-image-soldOut"
              alt="Product Img"
            />
          </client-only>
        </nuxt-link>
        <div class="content-card-items">
          <p class="card-info-1" v-if="soldOut">{{ $t('home_cardAgotado') }}</p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            {{ $t('home_cardGratis') }}
          </p>
          <nuxt-link
            :to="{ path: `/productos/` + product.slug }"
            class="content-name-product"
          >
            <p class="card-title" v-if="this.product.nombre.length >= 25">
              {{ `${this.product.nombre.slice(0, 25)}..` }}
            </p>
            <p class="card-title" v-else>
              {{ `${this.product.nombre.slice(0, 30)}` }}
            </p>
          </nuxt-link>
          <div class="content-text-price" v-if="this.product.precio">
            <nuxt-link :to="{ path: `/productos/` + product.slug }">
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
            </nuxt-link>
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
import currency from '../../../mixins/formatCurrent'

export default {
  mixins: [idCloudinary, currency],
  name: 'Ko-ProductCard-13',
  props: { product: Object, settingGeneral: Object, cardProduct: Object },
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
    facebookPixel() {
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
            precio: this.salesData.precio,
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
          this.$store.state.openOrder = true
          this.$store.state.orderComponent = true
          this.$store.dispatch('SEND_ADD_TO_CART', 1)
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
          if (this.product.combinaciones.length > 1) {
            let arrPrice = []
            this.product.combinaciones.find((products) => {
              if (products.precio && products.estado == true) {
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
  watch: {
    productsCarts() {
      this.getDataProduct()
    },
  },
}
</script>

<style scoped>
.wrapper-card {
  background: var(--background_color_1);
  border-radius: 5px;
  @apply w-full flex justify-center items-center shadow box-border;
}
.container-card {
  border-radius: 5px;
  @apply w-full flex flex-col items-center relative overflow-hidden;
}
.wrapper-image {
  min-height: 250px;
  max-height: 300px;
  @apply w-full flex items-center justify-center relative overflow-hidden;
}
.product-image {
  @apply overflow-hidden object-cover w-full;
}
.notproduct-image {
  height: 294px;
  max-height: 294px;
  width: 300px;
}
.product-image-soldOut {
  filter: grayscale(100%);
  @apply w-full object-cover overflow-hidden;
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
  height: 95px;
  width: 100%;
}
.stats-container {
  background: var(--background_color_1);
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
  font-size: var(--fontSizeTitle);
  font-weight: var(--fontWeighTitle);
  color: var(--color_title);
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
  font-weight: var(--fontWeighPrice);
  line-height: 1.4;
  color: var(--color_price);
  text-align: center;
}
.separator-price {
  color: var(--color_price);
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
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
#add_cart:hover {
  color: var(--hover_text_btn);
  border: solid 2px var(--hover_Border_btn);
  background-color: var(--hover_Bg_btn);
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
.view_details {
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
  color: var(--color_border_btn);
  border-radius: var(--radius_btn);
  border: solid 2px var(--color_border_btn);
  background-color: transparent;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;
}
.view_details:hover {
  color: var(--hover_Border_btn);
  border: solid 2px var(--hover_Border_btn);
  cursor: pointer;
}
#product-card:hover .view_details {
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
  color: var(--hover_text_btn);
}
/*Comienzo de animacion*/
.overlay-top {
  top: 43px;
  left: 100%;
  right: 0;
  width: 0;
  height: 29px;
  padding: 5px;
  font-size: 13px;
  background: white;
  color: #35dd8d;
  @apply absolute overflow-hidden rounded-md shadow-md transition-all ease-in duration-300;
}
#product-card:hover .overlay-top {
  width: 67px;
  left: 75%;
}
.overlay-free {
  position: absolute;
  background-color: #35dd8d;
  color: white;
  overflow: hidden;
  transition: 0.5s ease;
  top: 0px;
  left: 100%;
  right: 0;
  width: 0;
  height: 35px;
  text-align: center;
  @apply rounded;
}
.txt-free {
  line-height: 12px;
  font-size: 13px;
  margin-top: 5px;
}
#product-card:hover .overlay-free {
  width: 125px;
  left: 55%;
  transition-delay: 700ms;
}
.overlay-polygon {
  position: absolute;
  top: 35px;
  left: 100%;
  right: 0;
  background-color: transparent;
  overflow: hidden;
  width: 0;
  height: 5%;
  fill: #35dd8d;
}
#product-card:hover .overlay-polygon {
  width: 5%;
  left: 90%;
  transition-delay: 950ms;
}
@media (max-width: 1270px) {
  .separador-stats {
    height: 105px;
  }
}
@media (max-width: 1249px) {
  .separador-stats {
    height: 98px;
  }
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
    margin-top: 0px;
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
  .notproduct-image-res {
    height: 357px;
    max-height: 357px;
    width: 100%;
  }
}
@media (max-width: 450px) {
  .notproduct-image-res {
    height: 170px;
    max-height: 170px;
  }
  .container-card {
    width: 100%;
    max-width: 200px;
  }
  .wrapper-image {
    min-height: 170px;
  }
}
</style>
