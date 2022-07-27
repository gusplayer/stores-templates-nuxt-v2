<template>
  <div class="wrapper-card">
    <div class="container-card">
      <div class="wrapper-movil">
        <p class="card-info-1" v-if="soldOut">{{ $t('home_cardAgotado') }}</p>
        <p class="card-info-2" v-if="getFreeShipping == false">
          {{ $t('home_cardGratis') }}
        </p>
        <nuxt-link
          :to="{
            path: `/wa/${dataStore.tienda.id_tienda}/productos/` + product.slug,
          }"
          class="wrapper-image"
        >
          <img
            v-if="!soldOut"
            v-lazy="idCloudinary(this.product.foto_cloudinary, 350, 350)"
            class="product-image"
            alt="Product Img"
          />
          <img
            v-if="soldOut"
            v-lazy="idCloudinary(this.product.foto_cloudinary, 350, 350)"
            class="product-image product-image-soldOut"
            alt="Product Img"
          />
        </nuxt-link>
        <div class="wrapper-text">
          <nuxt-link
            :to="{
              path:
                `/wa/${dataStore.tienda.id_tienda}/productos/` + product.slug,
            }"
            class="content-name-product-movil"
          >
            <p
              class="card-text-movil-title"
              v-if="this.product.nombre.length >= 42"
            >
              {{ `${this.product.nombre.slice(0, 42)}..` }}
            </p>
            <p class="card-text-movil-title" v-else>
              {{ `${this.product.nombre.slice(0, 42)}` }}
            </p>
            <p class="card-text-movil" v-if="this.product.marca">
              {{ this.product.marca }}
            </p>
            <div
              class="content-text-price-movil-cart"
              v-if="this.product.precio"
            >
              <div class="wrapper-price">
                <!-- <div> -->
                <!-- <p class="card-price-1-movil" v-if="this.product.precio > 0">
                  $ {{ this.product.precio }}
                  </p>-->
                <div
                  class="content-price"
                  v-if="estadoCart && this.minPrice != this.maxPrice"
                >
                  <p
                    class="card-price-2"
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
                    class="card-price-2"
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
                <div v-else>
                  <p class="card-price-2" v-if="this.product.precio > 0">
                    {{
                      this.product.precio
                        | currency(
                          dataStore.tienda.codigo_pais,
                          dataStore.tienda.moneda
                        )
                    }}
                  </p>
                </div>
                <!-- </div> -->
                <!-- <p class="card-descuento">-50%</p> -->
              </div>
            </div>
          </nuxt-link>
          <div class="Content-btn-movil">
            <div
              class="content-soldOut"
              v-if="!this.estadoCart && !soldOut && !spent"
            >
              <div
                v-if="this.product.precio > 0"
                v-on:click="addShoppingCart"
                class="btn"
                :style="`background: ${
                  settingByTemplate && settingByTemplate.color_primario
                    ? settingByTemplate.color_primario
                    : '#25D366'
                }; color:${
                  settingByTemplate && settingByTemplate.color_secundario
                    ? settingByTemplate.color_secundario
                    : '#FFFFFF'
                };`"
                style="margin-right: 5px"
              >
                <shopWa-icon class="wp-icon" />
              </div>
              <nuxt-link
                :to="{
                  path:
                    `/wa/${dataStore.tienda.id_tienda}/productos/` +
                    product.slug,
                }"
                class="btn"
                :style="`background: ${
                  settingByTemplate && settingByTemplate.color_primario
                    ? settingByTemplate.color_primario
                    : '#25D366'
                }; color:${
                  settingByTemplate && settingByTemplate.color_secundario
                    ? settingByTemplate.color_secundario
                    : '#FFFFFF'
                };`"
              >
                {{
                  dataStore.tienda.id_tienda == 13015
                    ? $t('productdetail_btnComprar')
                    : $t('home_cardvermas')
                }}
              </nuxt-link>
            </div>
            <nuxt-link
              :to="{
                path:
                  `/wa/${dataStore.tienda.id_tienda}/productos/` + product.slug,
              }"
              v-else
              class="btn"
              :style="`background: ${
                settingByTemplate && settingByTemplate.color_primario
                  ? settingByTemplate.color_primario
                  : '#25D366'
              }; color:${
                settingByTemplate && settingByTemplate.color_secundario
                  ? settingByTemplate.color_secundario
                  : '#FFFFFF'
              };`"
            >
              {{
                dataStore.tienda.id_tienda == 13015
                  ? $t('productdetail_btnComprar')
                  : $t('home_cardvermas')
              }}
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../../../mixins/idCloudinary'
import currency from '../../../../mixins/formatCurrent'
export default {
  mixins: [idCloudinary, currency],
  name: 'Ko-ProductCard-Wa-1',
  props: { product: Object, dataStore: Object },
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
    settingByTemplate() {
      if (this.$store.state.settingByTemplate) {
        return this.$store.state.settingByTemplate
      } else {
        return this.$store.state.settingBaseWapir
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
          this.$store.commit('UPDATE_CONTENT_CART')
          // this.$router.push('/')
          this.$message({
            showClose: true,
            message: 'Se agregó el producto correctamente',
            type: 'success',
          })
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
}
</script>

<style scoped>
.wrapper-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  border-radius: 0px;
  border-bottom: 1px solid rgba(213, 213, 213, 0.473);
  transition: all 200ms ease-in;
  background-color: #f8f9fb;
  padding-bottom: 4px;
}

.container-card {
  display: flex;
  align-items: flex-start;
  width: 100%;
  overflow: hidden;
}
.wrapper-movil {
  width: 100%;
  display: flex;
  flex-direction: row;
  position: relative;
}
.wrapper-image {
  max-width: 110px;
  border-radius: 4px;
  margin-right: 5px;
  border-radius: 6px;
}
.product-image {
  width: 100%;
  /* height: 100%; */
  object-fit: cover;
  object-position: center;
  border-radius: 6px;
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
  font-size: 10px;
  z-index: 2;
  position: absolute;
  top: 74px;
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
  font-size: 10px;
  font-weight: bold;
  z-index: 2;
  position: absolute;
  top: 92px;
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
  margin-top: 1px;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  /* height: 30px; */
}
.card-text-movil-title {
  font-size: 15px;
  font-weight: 500;
  line-height: 1;
  color: #0f2930;
  color: #445a64;
}
.card-text-movil {
  font-size: 13px;
  font-weight: 300;
  color: black;
  color: #0f2930;
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
  font-size: 14px;
  font-weight: bold;
  line-height: 1;
  color: #0f2930;
  text-decoration: line-through;
  text-align: center;
}
.card-price-2 {
  margin-top: 8px;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: black;
  color: #0f2930;
  text-align: left;
}
.separator-price {
  margin-top: 8px;
  color: #4c4c4c;
  margin-left: 5px;
  margin-right: 5px;
  text-align: center;
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
.icon-shop {
  max-width: 20px;
  max-height: 20px;
}
.btn {
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  align-items: center;
  border-radius: 4px;
  padding: 6px 10px;
  font-weight: 600;
  margin-right: 4px;
  font-size: 12px;
  box-sizing: border-box;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgb(84 81 81 / 12%), 0 1px 2px rgb(82 82 82 / 24%);
  cursor: pointer;
}

.wp-icon {
  font-size: 20px;
  bottom: 3px;
}
@media (max-width: 330px) {
  .wrapper-image {
    max-width: 105px;
  }
  .card-text-movil-title {
    font-size: 15px;
  }
  .card-info-1 {
    top: 70px;
  }
  .card-info-2 {
    top: 88px;
  }
}
</style>
