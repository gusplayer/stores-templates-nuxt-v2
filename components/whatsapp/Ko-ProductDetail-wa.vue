<template>
  <div class="wrapper-productDetail">
    <div class="container-productDetail" v-if="!loading" v-loading="loading">
      <nuxt-link
        :to="this.stateWapiME ? `/wa/${dataStore.tienda.id_tienda}/` : `/`"
        class="wrapper-back"
        :style="`color: ${
          settingByTemplate && settingByTemplate.color_primario
            ? settingByTemplate.color_primario
            : '#25D366'
        };`"
      >
        <arrow-left-icon class="icon-back" />
        <p class="back-text">{{ $t('productdetail_Back') }}</p>
      </nuxt-link>
      <div class="section">
        <div class="wrapper-left">
          <div class="photos_responsive">
            <productSlide
              :photos="data.fotos"
              :photo="data.detalle.foto_cloudinary"
              :idYoutube="idYoutube"
            ></productSlide>
          </div>
        </div>
        <div class="wrapper-right">
          <div class="content-right">
            <p class="text-name">{{ data.detalle.nombre }}</p>
            <p class="text-marca">
              <strong>{{ data.info.marca }}</strong>
            </p>

            <p
              class="text-promocion"
              v-show="
                data.info.tag_promocion == 1 &&
                data.info.promocion_valor &&
                salesData.precio
              "
            >
              {{
                (data.info.tag_promocion == 1 && data.info.promocion_valor
                  ? Math.trunc(
                      salesData.precio / (1 - data.info.promocion_valor / 100)
                    )
                  : 0)
                  | currency(
                    dataStore.tienda.codigo_pais,
                    dataStore.tienda.moneda
                  )
              }}
            </p>
            <div
              class="wrapper-price"
              :class="data.info.tag_promocion == 1 ? '' : 'wrapper-price_space'"
            >
              <p class="text-precio" v-show="salesData.precio">
                {{
                  salesData.precio
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
              </p>
              <p
                class="card-descuento"
                v-show="
                  data.info.tag_promocion == 1 &&
                  data.info.promocion_valor &&
                  salesData.precio
                "
              >
                {{ data.info.promocion_valor }}% OFF
              </p>
            </div>
            <div class="content_buy_action">
              <div v-if="envio.titulo == 'Envío gratis'">
                <p class="card-info-2">{{ $t('home_cardGratis') }}</p>
              </div>
              <div class="content_card-info">
                <p class="card-info-1" v-if="spent">
                  {{ $t('home_cardAgotado') }}
                </p>
              </div>
            </div>
            <div
              v-if="data.info.descripcion_corta"
              style="margin-top: 10px; margin-bottom: 5px"
            >
              <p class="text-marca">
                <strong>{{ data.info.descripcion_corta }}</strong>
              </p>
            </div>
            <div
              v-if="this.data.detalle.con_variante > 0"
              class="container-variants"
            >
              <div v-for="(variant, index) in data.variantes" :key="index">
                <label for="variant name" class="text-variant-type"
                  >{{ variant.nombre }}:</label
                >
                <selectGroup :index="index" :variantes="data.variantes">
                  <option
                    v-for="item in variant.valores"
                    :key="item.option"
                    :value="item.option"
                  >
                    {{ item.option }}
                  </option>
                </selectGroup>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-description">
        <div
          v-if="data.info.descripcion && data.info.descripcion.length > 7"
          class="wrapper-description"
        >
          <h3 class="text-variant">{{ $t('productdetail_description') }}</h3>
          <div class="editor content-text-desc" v-if="data.info.descripcion">
            <el-tiptap
              v-model="data.info.descripcion"
              :extensions="extensions"
              :spellcheck="false"
              :readonly="true"
              :charCounterCount="false"
              :tooltip="false"
              :showMenubar="false"
              :bubble="false"
            />
          </div>
        </div>
      </div>
      <div class="responsive-purchase">
        <div class="ko-input">
          <div
            class="quantity-resposive"
            v-if="!spent && this.salesData.estado == true"
          >
            <button class="quantity_remove" v-on:click="removeQuantity()">
              <menos-icon class="icon" />
            </button>
            <!-- <p class="quantity_value">{{ quantityValue }}</p> -->
            <input
              name="quantityValue"
              class="quantity_value"
              type="text"
              placeholder=""
              v-model="quantityValue"
              id="InputQuantityValue"
              onkeypress="return (event.charCode>47 && event.charCode<58)"
            />
            <button class="quantity_add" v-on:click="addQuantity()">
              <mas-icon class="icon" />
            </button>
            <transition name="slide-fade">
              <div
                class="container-alert"
                v-show="quantityValue == maxQuantityValue"
              >
                <span class="alert">{{ $t('cart_ultimaUnidad') }}</span>
              </div>
            </transition>
          </div>
          <button
            class="btn-responsive"
            :style="`background: ${
              settingByTemplate && settingByTemplate.color_primario
                ? settingByTemplate.color_primario
                : '#25D366'
            }; color:${
              settingByTemplate && settingByTemplate.color_secundario
                ? settingByTemplate.color_secundario
                : '#FFFFFF'
            };`"
            ref="color2"
            v-if="
              !spent && salesData.precio > 0 && this.salesData.estado == true
            "
            v-on:click="addShoppingCart"
          >
            <span>
              {{ $t('productdetail_btnComprar') }}
            </span>
          </button>
          <button
            class="btn-responsive"
            :style="`background: ${
              settingByTemplate && settingByTemplate.color_primario
                ? settingByTemplate.color_primario
                : '#25D366'
            }; color:${
              settingByTemplate && settingByTemplate.color_secundario
                ? settingByTemplate.color_secundario
                : '#FFFFFF'
            };`"
            ref="color2"
            v-else-if="salesData.precio == 0 && !spent"
            v-on:click="WPQuotation()"
          >
            <span>
              {{ $t('productdetail_cotizar') }}
            </span>
          </button>
          <button
            disabled
            class="btn-responsive"
            :style="`background: ${
              settingByTemplate && settingByTemplate.color_primario
                ? settingByTemplate.color_primario
                : '#25D366'
            }; color:${
              settingByTemplate && settingByTemplate.color_secundario
                ? settingByTemplate.color_secundario
                : '#FFFFFF'
            };`"
            v-else-if="this.salesData.estado == false"
          >
            <span>
              {{ $t('productdetail_btnANodisponible') }}
            </span>
          </button>
          <div v-else-if="spent" class="wrapper-btn">
            <p class="card-info-1-res">
              😥 {{ $t('productdetail_productoAgotado') }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div v-else class="wrapper-item-skeleton">
      <div class="w-full">
        <el-skeleton style="width: 240px">
          <template slot="template">
            <el-skeleton-item
              variant="image"
              style="width: 240px; height: 240px"
            />
            <div style="padding: 14px">
              <el-skeleton-item variant="p" style="width: 50%" />
              <div
                style="
                  display: flex;
                  align-items: center;
                  justify-items: space-between;
                "
              >
                <el-skeleton-item variant="text" style="margin-right: 16px" />
                <el-skeleton-item variant="text" style="width: 30%" />
              </div>
            </div>
          </template>
        </el-skeleton>
      </div>
      <div class="ml-10 w-full">
        <el-skeleton :rows="6" animated />
        <el-skeleton :rows="6" animated />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import axios from 'axios'
import productSlide from './_productdetails/productSlide'
import selectGroup from './_productdetails/selectGroup'
import idCloudinary from '../../mixins/idCloudinary'
import currency from '../../mixins/formatCurrent'
import extensions from '../../mixins/elemenTiptap.vue'
export default {
  mixins: [idCloudinary, currency, extensions],
  name: 'Ko-ProductDetail-wa',
  components: {
    selectGroup,
    productSlide,
  },
  mounted() {
    this.$store.state.beforeCombination = []
    if (this.dataStore.productos.length) {
      this.getDataProduct()
    } else {
      this.getDataProductPrev()
    }
    if (Object.keys(this.dataStore.medios_envio).length) {
      this.setOptionEnvio()
    }
  },
  data() {
    return {
      loading: true,
      data: {},
      selectPhotoUrl: '',
      idYoutube: '',
      existYoutube: false,
      maxQuantityValue: 1,
      quantityValue: 1,
      productIndexCart: null,
      warranty: '',
      productCart: {},
      salesData: null,
      spent: false,
      envioproducto: '',
      envio: {
        titulo: '',
        desc: '',
      },
      activeZoom: true,
    }
  },
  computed: {
    ...mapState([
      'dataStore',
      'stateWapiME',
      'productsData',
      'beforeCombination',
    ]),
    envios() {
      return this.dataStore.medios_envio
    },
    existPayments() {
      const mediospago = this.dataStore.medios_pago
      if (
        mediospago.consignacion ||
        mediospago.convenir ||
        mediospago.payco ||
        mediospago.tienda ||
        mediospago.efecty
      ) {
        return true
      }
      return false
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp
    },
    // eslint-disable-next-line vue/return-in-computed-property
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    categorys() {
      if (this.data && this.data.detalle) {
        return this.productsData.filter(
          (product) =>
            product.categoria ==
              this.data.detalle.categoria_producto.nombre_categoria_producto &&
            product.id !== this.data.detalle.id
        )
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
    searchIdForSlug() {
      let domain = this.$route.fullPath
      let result = domain.split('/')
      let result2 = result[4].split('?')
      const product = this.productsData.filter(
        (product) => product.slug === result2[0]
      )
      if (product.length) {
        return product[0].id
      }
      return this.productsData[0].id
    },
    getDataProduct() {
      const idOfSlug = this.searchIdForSlug()
      if (idOfSlug) {
        axios
          .get(`${this.$store.state.urlTemplate}/api/producto/${idOfSlug}`)
          .then((response) => {
            this.selectedPhoto(response.data.detalle.foto_cloudinary)
            this.videoYoutube(response.data.info.video)
            this.data = response.data
            this.salesData = {
              precio: this.data.detalle.precio,
              unidades: this.data.info.inventario,
              sku: this.data.info.sku,
              estado: true,
            }
            this.maxQuantityValue = this.data.info.inventario
            this.setOptionEnvio()
            for (const [
              index,
              productCart,
            ] of this.$store.state.productsCart.entries()) {
              if (this.data.detalle.id == productCart.id) {
                this.productIndexCart = index
                this.productCart = productCart
                this.maxQuantityValue =
                  this.data.info.inventario - productCart.cantidad
              }
            }
            if (this.salesData.unidades == 0 || this.maxQuantityValue <= 0) {
              this.spent = true
            }
            this.loading = false
          })
      } else {
        this.selectedPhoto(this.productsData[0].foto_cloudinary)
        this.data.detalle = {
          foto_cloudinary: this.productsData[0].foto_cloudinary,
          nombre: this.productsData[0].nombre,
          precio: this.productsData[0].precio,
        }
        this.data.info = {
          marca: '',
          descripcion: '',
        }
        this.maxQuantityValue = 0
        this.salesData = {
          precio: 29998,
          unidades: 0,
          sku: '4a00',
        }
        this.spent = true
      }
    },
    getDataProductPrev() {
      this.data.detalle = {
        foto_cloudinary:
          'https://vignette.wikia.nocookie.net/la-bitacora-del-capitan/images/6/67/Not_found.png/revision/latest?cb=20190509042801&path-prefix=es',
        nombre: 'Producto de prueda',
        precio: 29999,
      }
      this.data.info = {
        marca: 'Marca de prueba',
        descripcion: 'Descripción de prueba',
      }
      this.maxQuantityValue = 0
      this.salesData = {
        precio: 29999,
        unidades: 0,
        sku: '4a00',
      }
      this.spent = true
    },
    setOptionEnvio() {
      if (this.data.detalle) {
        if (this.data.detalle.envio_gratis == 1) {
          this.envio = {
            titulo: 'Envío gratis',
            desc: 'Disfruta de este obsequio por parte de la tienda.',
          }
        } else {
          this.data.envioproducto = JSON.parse(this.envios.valores)
          switch (this.data.envioproducto.envio_metodo) {
            case 'gratis':
              this.envio = {
                titulo: 'Envío gratis',
                desc: 'Disfruta de este obsequio por parte de la tienda.',
              }
              break
            case 'tarifa_plana':
              this.envio = {
                titulo: 'Tarifa plana',
                desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.data.envioproducto.valor}`,
              }
              break
            case 'precio':
              this.envio = {
                titulo: 'Tarifa por precio',
                desc: 'Segun la suma del costo de tus productos te cobraran el envio',
              }
              break
            case 'precio_ciudad':
              this.envio = {
                titulo: 'Tarifa por ciudad',
                desc: 'Segun la ciudad te cobraran el envio',
              }
              break
            case 'peso':
              this.envio = {
                titulo: 'Tarifa por peso',
                desc: '',
              }
              break
            default:
          }
        }
      }
    },
    quantity(productCart) {
      this.quantityValue = productCart.cantidad
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++
        this.data.cantidad = this.quantityValue
      } else {
        // Alerta de limite de sku
      }
    },
    removeQuantity() {
      if (this.data.cantidad >= 2) {
        this.quantityValue--
        this.data.cantidad = this.quantityValue
      }
    },
    setMiniPhoto(photo) {
      return photo
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo
      this.existYoutube = false
    },
    videoYoutube(url) {
      let myregexp =
        /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
      let id = ''
      if (url && url !== '' && url !== 'null') {
        this.validVideo = true
        id = url.match(myregexp)
        if (id) {
          this.idYoutube = id[1]
        }
      }
    },
    addShoppingCart() {
      if (!this.data.cantidad) {
        this.data.cantidad = this.quantityValue
      }
      const product = {
        id: this.data.detalle.id,
        precio: this.salesData.precio,
        cantidad: this.data.cantidad,
        foto_cloudinary: this.data.detalle.foto_cloudinary,
        nombre: this.data.detalle.nombre,
        combinacion: this.salesData.combinacion,
        envio_gratis: this.data.detalle.envio_gratis,
      }
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades
      } else {
        product.limitQuantity = this.data.info.inventario
      }
      if (typeof this.productIndexCart === 'number') {
        const mutableProduct =
          this.$store.state.productsCart[this.productIndexCart]
        mutableProduct.cantidad += this.data.cantidad
        this.$store.state.productsCart.splice(
          this.productIndexCart,
          1,
          mutableProduct
        )
      } else {
        this.$store.state.productsCart.push(product)
      }
      this.$store.commit('UPDATE_CONTENT_CART')
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
      this.$store.state.openOrder = true
      this.$store.state.orderComponent = true
      this.$store.dispatch('SEND_ADD_TO_CART', 1)
    },
    evalStock(mq, qv) {
      return !(mq - qv < 0)
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
      let baseUrlPc = 'https://web.whatsapp.com/send?phone='
      let urlProduct = window.location.href
      let text = `Hola 😀, %0AEstoy en tu tienda ${this.dataStore.tienda.nombre} y me interesa el producto: ${this.data.detalle.nombre}%0A%0ALink de compra: ${urlProduct}%0A`

      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1)

        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`,
            '_blank'
          )
        }
      }
    },
    WPQuotation() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?phone='
      let baseUrlPc = 'https://web.whatsapp.com/send?phone='
      let urlProduct = window.location.href
      let text = `Hola%20%F0%9F%98%80%2C%0AEstoy%20en%20tu%20tienda%20%2A${this.dataStore.tienda.nombre}%2A%20y%20quiero%20cotizar%20este%20producto%3A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0A%2A${this.data.detalle.nombre}%2A%0A%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%3D%0ALink%3A%20${urlProduct}`
      if (this.dataStore.tienda.whatsapp.charAt(0) == '+') {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp.slice(1)

        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `${baseUrlMovil}57${this.dataStore.tienda.whatsapp}&text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `${baseUrlPc}57${this.dataStore.tienda.whatsapp}&text=${text}`,
            '_blank'
          )
        }
      }
    },
  },
  watch: {
    productsData(value) {
      this.getDataProduct()
    },
    envios(value) {
      this.setOptionEnvio()
    },
    quantityValue(value) {
      this.quantityValue = parseInt(value)
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue
      } else if (value == 0) {
        this.quantityValue = 1
      } else if (value == '') {
        this.quantityValue = 1
      }
    },
    beforeCombination(value) {
      const combinationSelected = JSON.stringify(value)
      if (this.data.combinaciones) {
        if (
          this.data.combinaciones.combinaciones !== '[object Object]' &&
          this.data.detalle.con_variante > 0
        ) {
          const combinaciones = JSON.parse(
            this.data.combinaciones.combinaciones
          )
          const result = combinaciones.find(
            (combinacion) =>
              JSON.stringify(combinacion.combinacion) == combinationSelected
          )
          this.productCart = []
          this.productIndexCart = null
          for (const [
            index,
            productCart,
          ] of this.$store.state.productsCart.entries()) {
            if (
              this.data.detalle.id == productCart.id &&
              JSON.stringify(productCart.combinacion) ==
                JSON.stringify(result.combinacion)
            ) {
              this.productIndexCart = index
              this.productCart = productCart
            }
          }
          if (result) {
            this.spent = false
            this.maxQuantityValue = result.unidades
            if (result.unidades == 0) {
              this.spent = true
            }
            if (this.productCart.cantidad) {
              this.maxQuantityValue =
                parseInt(result.unidades) - this.productCart.cantidad
              if (this.maxQuantityValue <= 0) {
                this.spent = true
              }
            }
            this.salesData = result
            this.quantityValue = 1
          }
        }
      }
    },
  },
  filters: {
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase()
      }
      return ''
    },
  },
}
</script>

<style scoped>
.wrapper-item-skeleton {
  max-width: 900px;
  min-height: calc(100vh - 205px);
  padding: 30px 30px 10px;
  background-color: #fafaf8;
  @apply w-full relative justify-between items-start flex flex-row;
}
.wrapper-productDetail {
  width: 100%;
  display: flex;
  background-color: #fafaf8;
  justify-content: center;
  align-items: flex-start;
  height: 100%;
  overflow: visible;
}
.container-productDetail {
  display: flex;
  width: 100%;
  max-width: 900px;
  height: 100%;
  min-height: calc(100vh);
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 30px 10px;
  position: relative;
}
.section {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wrapper-description {
  width: 100%;
  margin-top: 20px;
}
.wrapper-left {
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-right: 15px;
  padding-bottom: 10px;
  position: relative;
}
.wrapper-back {
  width: 100%;
  padding: 10px 10px 5px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
.icon-back {
  font-weight: normal;
  font-size: 18px;
  bottom: 3px;
  cursor: pointer;
  margin-right: 5px;
}
.back-button p:hover {
  color: white;
}
.breadcrumb {
  margin-left: 5px;
}
.breadcrumb > p:nth-child(1) {
  color: #c2c8ca;
  cursor: pointer;
}
.breadcrumb > p:nth-child(2) {
  margin-left: 5px;
  color: #c2c8ca;
}
.photos_responsive {
  width: 100%;
  display: flex;
  box-sizing: border-box;
  overflow: hidden;
  margin-top: 5px;
}
.wrapper-right {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
}
.content-right {
  margin-left: 20px;
}
.text-name {
  font-weight: 600;
  font-size: 17px;
  line-height: 20px;
  color: #445a64;
  color: #0f2930;
}
.text-marca {
  font-size: 16px;
  font-stretch: semi-condensed;
  font-style: normal;
  color: rgba(21, 20, 57, 0.541);
}
.text-promocion {
  font-size: 14px;
  font-weight: bold;
  color: rgba(55, 4, 4, 0.61);
  text-decoration: line-through;
  margin-top: 5px;
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: flex-start;
}
.wrapper-price > p:nth-child(2) {
  margin-left: 5px;
}
.text-precio {
  font-size: 18px;
  font-weight: 700;
  color: #0f2930;
}
.card-descuento {
  font-size: 12px;
  color: white;
  background: #35dd8d;
  border-radius: 3px;
  padding: 0px 5px;
  margin-top: 3px;
}
.text-variant {
  font-weight: 600;
  font-size: 15px;
  color: #0f2930;
}
.content-text-desc {
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 14px;
  color: #0f2930;
}
.text-desc {
  text-decoration-color: currentcolor;
  text-decoration-style: solid;
  text-decoration-line: none;
  font-size: 14px;
  font-weight: normal;
  color: rgba(21, 20, 57, 0.541);
  line-height: 1.5;
  text-decoration: none;
}
.content_buy_action {
  display: flex;
  flex-direction: row;
}
.card-info-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35dd8d;
  padding: 1px 4px;
  border-radius: 5px;
  color: black;
  margin-right: 10px;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 15px;
}
.content_card-info {
  display: initial;
}
.card-info-1 {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 4px;
  border-radius: 5px;
  color: white;
  font-size: 12px;
  margin-bottom: 10px;
  margin-top: 15px;
}
.content-description {
  width: 100%;
  display: flex;
}
.responsive-purchase {
  position: fixed;
  bottom: 0px;
  width: 100%;
  max-width: 900px;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ko-input {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 12px 10px;
  position: relative;
  background-color: #fafaf8;
  box-shadow: 0px 2px 2px rgba(52, 58, 67, 0.1),
    0px 2px 5px rgba(52, 58, 67, 0.08), 0px 5px 15px rgba(52, 58, 67, 0.08);
}
.quantity-resposive {
  display: flex;
  flex-direction: row;
}
.text-quantity {
  font-size: 14px;
  font-weight: bold;
  color: rgba(21, 20, 57, 0.541);
  margin-right: 5px;
  align-self: center;
}
.quantity_remove {
  border: 1px black;
  border-top-left-radius: var(--radius_btn);
  border-bottom-left-radius: var(--radius_btn);
  border-style: solid none solid solid;
  background: transparent;
  height: 38px;
  width: 3em;
  cursor: pointer;
}
.quantity_value {
  font-size: 1em;
  color: #000000;
  border: 1px black;
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  background: transparent;
  height: 38px;
  width: 50px;
  /* justify-content: center;
  display: flex;
  align-items: center; */
  text-align: center;
}
.quantity_add {
  border: 1px black;
  border-top-right-radius: var(--radius_btn);
  border-bottom-right-radius: var(--radius_btn);
  border-style: solid solid solid none;
  background: transparent;
  height: 38px;
  width: 3em;
  cursor: pointer;
}
.btn-responsive {
  border-radius: var(--radius_btn);
  border: none;
  box-shadow: 0px 0px 2px rgba(52, 58, 67, 0.1),
    0px 2px 5px rgba(52, 58, 67, 0.08), 0px 5px 15px rgba(52, 58, 67, 0.08);
  padding: 6px 10px;
  width: 100%;
  height: 100%;
  font-size: 14px;
  margin-left: 15px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-responsive span {
  font-size: 16px;
  font-weight: 600;
}
.icon {
  font-size: 16px;
  color: black;
  transition: all 200ms ease-in;
}
.icon:hover {
  color: #128c7e;
}
.wrapper-btn {
  padding: 5px 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-info-1-res {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(207, 207, 207);
  padding: 6px 10px;
  border-radius: var(--radius_btn);
  color: #4c4c4c;
  font-size: 14px;
  font-weight: 600;
  width: 100%;
  height: 36px;
}
.card-icon-cart {
  font-size: 20px;
  color: white;
  margin-right: 4px;
  cursor: pointer;
}
.container-alert {
  position: absolute;
  top: -33px;
  left: 5px;
  width: 120px;
  background-color: rgb(250, 232, 75);
  border: 1px solid rgb(230, 213, 66);
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: black;
}
.alert {
  text-align: center;
  padding: 5px 5px;
  /* text-transform: capitalize; */
}
.content-btn-whatsapp {
  display: flex;
  margin-top: 10px;
}
.btn-whatsapp {
  color: white;
  border-radius: 5px;
  background-color: #445a64;
  padding: 8px 10px;
  width: 100%;
  font-weight: 400;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 0px;
}
.btn-whatsapp:hover {
  background-color: #128c7e;
}
.content-btn-whatsapp-res {
  display: none;
}
.wp-icon {
  font-size: 16px;
  bottom: 4px;
  margin-right: 4px;
  margin-bottom: -2px;
}
.swiper-container {
  border-radius: 6px;
}

.swiper-pagination-bullet-active {
  background: black;
}
.container-variants {
  margin-top: 15px;
}
.text-variant-type {
  font-size: 14px;
  color: #0f2930;
}
.editor >>> .el-tiptap-editor > .el-tiptap-editor__content {
  border: none;
  padding: 0px;
  background-color: transparent;
}
.editor >>> .el-tiptap-editor__menu-bubble {
  display: none;
}
.editor >>> .el-tiptap-editor__content h1 {
  font-size: 2em;
}
.editor >>> .el-tiptap-editor__content h2 {
  font-size: 1.5em;
}
.editor >>> .el-tiptap-editor__content h3 {
  font-size: 1.17em;
}
.editor >>> .el-tiptap-editor__content h4 {
  font-size: 1.12em;
}
.editor >>> .el-tiptap-editor__content h5 {
  font-size: 0.83em;
}
@media (max-width: 685px) {
  .container-productDetail {
    padding: 0px 0px 40px 0px;
  }
  .section {
    flex-direction: column;
    justify-content: center;
  }
  .wrapper-left {
    justify-content: center;
    padding-bottom: 0px;
    margin-right: 0px;
  }
  .wrapper-right {
    padding-bottom: 0px;
    justify-content: center;
    align-items: center;
  }
  .content-right {
    width: 100%;
    padding: 5px 15px;
    margin-left: 0px;
  }
  .text-name {
    margin-top: 10px;
    font-weight: 500;
    font-size: 18px;
    color: #445a64;
  }
  .content-description {
    padding: 0 15px;
    padding-bottom: 20px;
  }
}
@media (max-width: 500px) {
  .content-btn-whatsapp {
    display: none;
  }
  .content-btn-whatsapp-res {
    width: 100%;
    padding: 0 10px;
    display: flex;
    margin-top: 10px;
    margin-bottom: 20px;
  }
  .photos_responsive {
    margin-top: 10px;
    margin-bottom: 10px;
    padding: 0 15px;
  }
  .wrapper-item-skeleton {
    @apply w-full relative justify-between items-start flex flex-col;
  }
}
</style>
