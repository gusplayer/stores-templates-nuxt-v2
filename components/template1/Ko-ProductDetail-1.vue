<template>
  <div class="wrapper-productDetail">
    <div v-if="loading" v-loading="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="section">
        <div class="wrapper-left">
          <div class="photos">
            <div class="photos_selected">
              <img
                @mouseover.native="
                  selectedPhoto(data.detalle.foto_cloudinary)
                "
                class="img-list"
                :src="idCloudinary(data.detalle.foto_cloudinary, 120, 120)"
              />
              <img
                v-for="(foto, itemsfoto) in data.fotos"
                :key="itemsfoto"
                @mouseover.native="selectedPhoto(foto.foto_cloudinary)"
                class="img-list"
                :src="idCloudinary(foto.foto_cloudinary, 120, 120)"
              />
              <!-- <cld-image
                cloudName="komercia-store"
                :publicId="getIdCloudinary(data.detalle.foto_cloudinary)"
                width="100"
                crop="scale"
                v-on:mouseover.native="
                  selectedPhoto(data.detalle.foto_cloudinary)
                "
                class="img"
              >
                <cld-transformation
                  height="400"
                  width="400"
                  radius="5"
                  crop="lpad"
                  quality="auto"
                  background="auto:border"
                />
              </cld-image>
              <cld-image
                cloudName="komercia-store"
                width="100"
                crop="scale"
                v-for="(foto, itemsfoto) in data.fotos"
                :key="itemsfoto"
                v-on:mouseover.native="selectedPhoto(foto.foto_cloudinary)"
                :publicId="getIdCloudinary(foto.foto_cloudinary)"
                class="img"
              >
                <cld-transformation
                  height="400"
                  width="300"
                  radius="5"
                  crop="lpad"
                  quality="auto"
                  background="auto:border"
                />
              </cld-image>-->

              <img
                v-if="idYoutube"
                :src="`https://img.youtube.com/vi/${idYoutube}/0.jpg`"
                v-show="idYoutube"
                v-on:mouseover="existYoutube = true"
                class="video"
              />
            </div>
          </div>
          <div class="wrapper-photo_main">
            <div v-if="active" v-show="!existYoutube" class="photo_main">
              <img
                class="photo_main"
                v-on:mouseover.native="active = !active"
                :src="idCloudinary(selectPhotoUrl, 645, 430)"
              />

              <!-- <cld-image
                cloudName="komercia-store"
                v-on:mouseover.native="active = !active"
                :publicId="getIdCloudinary(selectPhotoUrl)"
                dpr="auto"
                responsive="width"
                width="645"
                height="430"
                crop="scale"
                class="photo_main"
              >
                <cld-transformation
                  width="645"
                  height="430"
                  radius="5"
                  crop="lpad"
                  quality="auto"
                  background="auto:border"
                />
              </cld-image>-->
            </div>
            <div v-if="!active" v-show="!existYoutube" class="photo_main">
              <cld-image
                cloudName="komercia-store"
                v-on:mouseleave.native="active = !active"
                :publicId="getIdCloudinary(selectPhotoUrl)"
                dpr="auto"
                responsive="width"
                width="845"
                height="400"
                gravity="face"
                crop="crop"
                class="photo_main"
              >
                <cld-transformation radius="5" quality="auto" background="auto:border" />
              </cld-image>
            </div>

            <iframe
              v-show="existYoutube"
              :src="`https://www.youtube.com/embed/${idYoutube}?rel=0&amp;controls=0&amp;showinfo=0`"
              frameborder="0"
              allowfullscreen
              class="photo_main"
            ></iframe>
          </div>
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
            <!-- <p class="text-promocion" v-show="salesData.precio">
              ${{ salesData.precio | currency }}
            </p>-->
            <div class="wrapper-price">
              <p class="text-precio" v-show="salesData.precio">${{ salesData.precio | currency }}</p>
              <!-- <p class="card-descuento">-50%</p> -->
            </div>
            <!-- <div
              class="content-text-desc"
              v-if="data.info.descripcion && data.info.descripcion.length > 12"
            >
              <p
                class="text-desc"
                v-html="`${data.info.descripcion.slice(0, 99)}`"
              ></p>
            </div>-->
            <div class="content_buy_action">
              <div v-if="envio.titulo == 'Envío gratis'">
                <p class="card-info-2">Envío gratis !</p>
              </div>
              <div class="content_card-info">
                <p class="card-info-1" v-if="spent">Agotado !</p>
              </div>
            </div>
            <div v-if="this.data.detalle.con_variante > 0">
              <div v-for="(variant, index) in data.variantes" :key="index">
                <label class="text-variant">{{ variant.nombre }}:</label>
                <selectGroup :index="index" :variantes="data.variantes">
                  <option
                    v-for="item in variant.valores"
                    :key="item.option"
                    :value="item.option"
                  >{{ item.option }}</option>
                </selectGroup>
              </div>
            </div>
            <div :class="{ disabled: !salesData.estado }">
              <div>
                <div class="quantity">
                  <p class="text-quantity">Cantidad:</p>
                  <button class="quantity_remove" v-on:click="removeQuantity()">
                    <menos-icon class="icon" />
                  </button>
                  <p class="quantity_value">{{ quantityValue }}</p>
                  <button class="quantity_add" v-on:click="addQuantity()">
                    <mas-icon class="icon" />
                  </button>

                  <div class="container-alerta" v-if="this.maxQuantityValue == this.quantityValue">
                    <span class="alerta">última Unidad!</span>
                  </div>
                </div>
                <div class="item-info-product">
                  <div v-if="data.info.garantia" class="content_buy_action">
                    <p class="text-unidades">Garantía:</p>
                    <span class="text-garantia">{{ data.info.garantia }}</span>
                  </div>
                  <!-- <div v-if="salesData.unidades" class="content_buy_action">
                    <p class="text-unidades">Unidades disponibles:</p>
                    <p class="text-garantia">{{ salesData.unidades }}</p>
                  </div>-->
                  <div class="content-button">
                    <button
                      ref="colorBtn"
                      class="btn"
                      v-if="!spent"
                      v-on:click="addShoppingCart"
                    >Comprar</button>
                    <!-- <ko-whatsapp
                      v-if="whatsapp"
                      class="whatsapp"
                      @click.native="redirectWhatsapp()"
                    />-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section">
        <div class="features">
          <ko-description :dataStore="dataStore" :data="data" :envio="envio"></ko-description>
        </div>
      </div>
      <div class="responsive-purchase">
        <div class="ko-input">
          <div class="quantity-resposive">
            <button class="quantity_remove" v-on:click="removeQuantity()">
              <menos-icon class="icon" />
            </button>
            <p class="quantity_value">{{ quantityValue }}</p>
            <button class="quantity_add" v-on:click="addQuantity()">
              <mas-icon class="icon" />
            </button>
            <transition name="slide-fade">
              <div class="container-alert" v-show="quantityValue == maxQuantityValue">
                <span class="alert">última Unidad!</span>
              </div>
            </transition>
          </div>
          <div style="width: 100%; margin-left: 10px;">
            <div class="content_buy_action-responsive" v-if="spent">
              <p class="card-info-1-res">Agotado !</p>
            </div>
            <button class="btn-responsive" ref="color2" v-if="!spent" v-on:click="addShoppingCart">
              <cartArrowDown class="card-icon-cart" />Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import productSlide from './_productdetails/productSlide.vue'
import selectGroup from './_productdetails/selectGroup'
import koWhatsapp from './_productdetails/whatsapp'
import koDescription from './_productdetails/descriptionProduct.vue'
import idCloudinary from '../../mixins/idCloudinary'


export default {
  mixins: [idCloudinary],
  name: 'koProduct1',
  components: {
    koWhatsapp,
    selectGroup,
    koDescription,
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
      id: this.$route.params.slug,
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
      active: true,
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    productsData() {
      return this.dataStore.productos
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
    modalPayment() {
      return this.$store.state.togglePayment
    },
    beforeCombination() {
      return this.$store.state.beforeCombination
    },
    envios() {
      return this.dataStore.medios_envio
    },
    precio() {
      if (this.data.detalle.precio) {
        return `$${this.data.detalle.precio
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
    },
    whatsapp() {
      return this.dataStore.tienda.whatsapp
    },
    category() {
      return this.productsData.filter(
        (product) =>
          product.categoria ==
            this.data.detalle.categoria_producto.nombre_categoria_producto &&
          product.id !== this.data.detalle.id
      )
    },
  },
  methods: {
    searchIdForSlug() {
      const product = this.productsData.filter(
        (product) => product.slug === this.id
      )
      if (product.length) {
        return product[0].id
      }

      return this.productsData[0].id
    },
    getDataProduct() {
      // const idOfSlug = "7887";
      const idOfSlug = this.searchIdForSlug()
      if (idOfSlug) {
        axios
          .get(`https://templates.komercia.co/api/producto/${idOfSlug}`)
          .then((response) => {
            this.selectedPhoto(response.data.detalle.foto_cloudinary)
            this.videoYoutube(response.data.info.video)
            this.data = response.data
            this.setOptionEnvio()
            this.salesData = {
              precio: this.data.detalle.precio,
              unidades: this.data.info.inventario,
              sku: this.data.info.sku,
              estado: true,
            }
            this.maxQuantityValue = this.data.info.inventario
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
        // this.videoYoutube(this.productsData[0].foto);
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
    togglePayment() {
      this.$store.state.togglePayment = !this.$store.state.togglePayment
    },
    setOptionEnvio() {
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
            desc: `Compra todo lo que quieras en nuestra tienda, el valor del envio siempre sera el mismo: Valor envio $${this.envios.valores.valor}`,
          }
          break
        case 'precio':
          this.envio = {
            titulo: 'Tarifa por precio',
            desc:
              'Segun la suma del costo de tus productos te cobraran el envio',
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
      let myregexp = /(?:youtu\.be\/|youtube\.com(?:\/embed\/|\/v\/|\/watch\?v=|\/user\/\S+|\/ytscreeningroom\?v=|\/sandalsResorts#\w\/\w\/.*\/))([^\/&]{10,12})/
      let id = ''
      if (url && url !== '' && url !== 'null') {
        this.validVideo = true
        let id = url.match(myregexp)
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
      }
      if (this.salesData) {
        product.limitQuantity = this.salesData.unidades
      } else {
        product.limitQuantity = this.data.info.inventario
      }
      if (typeof this.productIndexCart === 'number') {
        const mutableProduct = this.$store.state.productsCart[
          this.productIndexCart
        ]
        mutableProduct.cantidad += this.data.cantidad
        this.$store.state.productsCart.splice(
          this.productIndexCart,
          1,
          mutableProduct
        )
      } else {
        this.$store.state.productsCart.push(product)
      }
      this.$store.commit('UPDATE_CONTENTCART')
      this.$router.push('/')
      this.$store.state.openOrder = true
      this.$store.state.orderComponent = true
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
    redirectWhatsapp() {
      if (this.dataStore.tienda.whatsapp.length > 10) {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp
        if (phone_number_whatsapp.charAt(0) === '+') {
          phone_number_whatsapp = phone_number_whatsapp.slice(1)
        }
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/${phone_number_whatsapp}/?text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=${phone_number_whatsapp}&text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información%20${window.location}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/57${this.dataStore.tienda.whatsapp}/?text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=57${this.dataStore.tienda.whatsapp}&text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información%20${window.location}`,
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
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue
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
    currency(value) {
      if (value) {
        return `${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
      return 0
    },
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
div.wrapper-productDetail {
  --background_color_1: #f2f4f7;
}
.wrapper-productDetail {
  display: flex;
  width: 100%;
  background: var(--background_color_1);
  justify-content: center;
  align-items: center;
}
.container-productDetail {
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 50px 30px 30px 30px;
}
.section {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.wrapper-category {
  display: flex;
  margin-bottom: 5px;
}
.text-category {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
}
.wrapper-left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-right: 25px;
  padding-bottom: 10px;
}
.photos_responsive {
  display: none;
}
.photos {
  display: flex;
  margin-right: 30px;
}
.photos_selected {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
}
.img-list {
  cursor: pointer;
  vertical-align: top;
  height: 100px;
  width: 100px;
  object-fit: cover;
  border-radius: 6px;
  margin-bottom: 10px;
}

.video {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  margin-bottom: 10px;
  object-fit: cover;
  object-position: center;
}
.wrapper-photo_main {
  position: relative;
  max-width: 650px;
  height: 450px;
  min-height: 450px;
  width: 100%;
}
.photo_main {
  max-width: 100%;
  max-height: 430px;
  width: 645px;
  height: 430px;
  object-fit: cover;
  object-position: center;
  border-radius: 10px;
  cursor: zoom-in;
}
.wrapper-right {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
  border-left: 1px solid rgba(21, 20, 57, 0.16);
}
.content-right {
  margin-left: 20px;
}

i.close {
  color: black;
  align-self: flex-end;
  cursor: pointer;
}
.text-name {
  font-weight: bold;
  font-size: 25px;
  line-height: 24px;
  color: var(--color_text);
}
.text-marca {
  font-size: 10px;
  font-stretch: semi-condensed;
  font-style: normal;
  color: var(--color_subtext);
  /* margin-top: -6px; */
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
  font-size: 30px;
  font-weight: bold;
  color: var(--color_text);
}
.card-descuento {
  font-size: 12px;
  color: white;
  background: #35dd8d;
  border-radius: 3px;
  padding: 0px 5px;
  margin-top: 10px;
}
.content-text-desc {
  margin-top: 10px;
  margin-bottom: 10px;
}
.text-desc {
  text-decoration-color: currentcolor;
  text-decoration-style: solid;
  text-decoration-line: none;
  font-size: 14px;
  font-weight: normal;
  color: var(--color_subtext);
  line-height: 1.5;
  text-decoration: none;
}
.text-variant {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
}
.text-unidades {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
  margin-top: 5px;
}
.text-garantia {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_text);
  margin-top: 5px;
  margin-left: 5px;
}
.content_buy_action {
  display: flex;
  flex-direction: row;
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
}
.item-info-product {
  margin-top: 10px;
}
.content-button {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
}
.whatsapp {
  fill: #27d367;
  width: 30px;
  cursor: pointer;
  margin-left: 20px;
}
.btn {
  border-radius: var(--radius_btn);
  color: var(--color_text_btn);
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
  padding: 4px 14px;
  width: 120px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  color: white;
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}
.quantity {
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  position: relative;
}
.text-quantity {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_subtext);
  margin-right: 5px;
  align-self: center;
}
.quantity_remove {
  border: 2px var(--color_border);
  border-top-left-radius: var(--radius_btn);
  border-bottom-left-radius: var(--radius_btn);
  border-style: solid none solid solid;
  background: transparent;
  height: 41px;
  width: 3em;
}
.quantity_value {
  font-size: 1em;
  color: var(--color_text);
  border: 2px var(--color_border);
  padding-left: 10px;
  padding-right: 10px;
  border-style: solid none solid none;
  background: transparent;
  height: 41px;
  width: 3em;
  justify-content: center;
  display: flex;
  align-items: center;
}
.quantity_add {
  border: 2px var(--color_border);
  border-top-right-radius: var(--radius_btn);
  border-bottom-right-radius: var(--radius_btn);
  border-style: solid solid solid none;
  background: transparent;
  height: 41px;
  width: 3em;
}
.icon {
  font-size: 16px;
  color: var(--color_border);
  transition: all 200ms ease-in;
}
.icon:hover {
  color: var(--color_text);
}
.features {
  width: 100%;
  display: flex;
  border-top: 1px solid rgba(21, 20, 57, 0.16);
}
.responsive-purchase {
  display: none;
}
.container-alerta {
  position: absolute;
  bottom: -35px;
  left: 78px;
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
.alerta {
  text-align: center;
  padding: 5px 5px;
  text-transform: capitalize;
}

@media (max-width: 1250px) {
  .photo_main {
    width: 600px;
  }
}
@media (max-width: 1185px) {
  .photo_main {
    width: 500px;
  }
}
@media (max-width: 1035px) {
  .photo_main {
    width: 450px;
  }
}
@media (max-width: 960px) {
  .photo_main {
    width: 400px;
  }
}
@media (max-width: 890px) {
  .photo_main {
    width: 350px;
  }
}
@media (max-width: 810px) {
  .photos {
    margin-right: 10px;
  }
  .wrapper-left {
    margin-right: 15px;
  }
}

@media (max-width: 768px) {
  .wrapper-left {
    flex: 1;
  }
  .photos {
    margin-right: 10px;
  }
  .wrapper-left {
    margin-right: 15px;
  }
  .photos {
    display: none;
  }
  .wrapper-photo_main {
    display: none;
  }
  .photos_responsive {
    width: 100%;
    height: 375px;
    max-width: 400px;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 10px;
  }
}

@media (max-width: 725px) {
  .container-productDetail {
    padding: 0px 5px;
    align-items: center;
    justify-content: center;
  }
  .section {
    flex-direction: column;
  }
  .wrapper-left {
    margin-right: 0px;
    justify-content: center;
    align-items: center;
  }
  .wrapper-right {
    padding-bottom: 2px;
    border-left: 0px;
  }
  .product {
    position: relative;
    width: 100%;
    min-height: 97vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
  }

  i.close {
    position: absolute;
    top: 10px;
    right: 10px;
  }
  .wrapper {
    padding: 15px;
  }
  .quantity {
    display: none;
  }
  .content-button {
    display: none;
  }
  .content_card-info {
    display: none;
  }
  .responsive-purchase {
    display: initial;
    position: fixed;
    bottom: 0;
    right: 0;
    width: 100%;
    box-shadow: 0 0 30px 50px rgba(96, 125, 139, 0.096);
    background: var(--background_color_1);
    z-index: 2;
  }
  .ko-input {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 5px;
  }
  .quantity-resposive {
    display: flex;
    flex-direction: row;
  }
  .text-quantity {
    font-size: 14px;
    font-weight: bold;
    color: var(--color_subtext);
    margin-right: 5px;
    align-self: center;
  }
  .quantity_remove {
    border: 1px var(--color_border);
    border-top-left-radius: var(--radius_btn);
    border-bottom-left-radius: var(--radius_btn);
    border-style: solid none solid solid;
    background: transparent;
    height: 38px;
    width: 3em;
  }
  .quantity_value {
    font-size: 1em;
    color: var(--color_text);
    border: 1px var(--color_border);
    padding-left: 10px;
    padding-right: 10px;
    border-style: solid none solid none;
    background: transparent;
    height: 38px;
    width: 2.5em;
    justify-content: center;
    display: flex;
    align-items: center;
  }
  .quantity_add {
    border: 1px var(--color_border);
    border-top-right-radius: var(--radius_btn);
    border-bottom-right-radius: var(--radius_btn);
    border-style: solid solid solid none;
    background: transparent;
    height: 38px;
    width: 3em;
  }
  .icon {
    font-size: 16px;
  }
  .content_buy_action-responsive {
    display: flex;
    width: 100%;
  }
  .card-info-1-res {
    display: flex;
    justify-content: center;
    align-items: center;
    /* background: #e71f77; */
    background: gray;
    padding: 6px 10px;
    border-radius: var(--radius_btn);
    color: white;
    font-size: 16px;
    width: 100%;
  }
  .btn-responsive {
    border-radius: var(--radius_btn);
    color: var(--color_text_btn);
    border: solid 0px var(--color_border_btn);
    background-color: var(--color_background_btn);
    padding: 6px 10px;
    width: 100%;
    font-size: 16px;
  }
  .card-icon-cart {
    font-size: 20px;
    color: var(--color_text_btn);
    margin-right: 4px;
    cursor: pointer;
  }
  .container-alert {
    position: absolute;
    top: -55px;
    left: 45px;
    width: 80px;
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
    text-transform: capitalize;
  }
}

@media (max-width: 600px) {
  .container-productDetail {
    padding: 0px;
  }
  .wrapper-left {
    padding-bottom: 0px;
  }
  .wrapper-right {
    margin-bottom: 15px;
  }
  .content-right {
    margin-left: 15px;
    margin-right: 15px;
  }
  .text-name {
    font-weight: 500;
    font-size: 20px;
  }
}
</style>
