<template>
  <div class="wrapper_micompra">
    <div class="contenedor">
      <div class="wrapper-form">
        <h1 class="title-form">{{ $t('mcompra_title') }}</h1>
        <div class="content-form">
          <ValidationObserver ref="observer" tag="form" class="form">
            <div class="content-input">
              <label for="numOrden" class="input-label">
                {{ $t('mcompra_inputtitle') }}
              </label>
              <validation-provider
                name="número de orden"
                rules="required|numeric"
                style="width: 100%"
              >
                <template slot-scope="{ errors }">
                  <input
                    id="numOrden"
                    :placeholder="$t('mcompra_inputtitleMsg')"
                    v-model="numOrden"
                    class="input-text"
                  />
                  <span class="text-error" v-show="errors[0]">
                    {{ errors[0] }}
                  </span>
                </template>
              </validation-provider>
            </div>
            <div class="content-input">
              <label for="numId" class="input-label">
                {{ $t('mcompra_inputId') }}
              </label>
              <validation-provider
                name="cédula del comprador"
                rules="required|numeric"
                style="width: 100%"
              >
                <template slot-scope="{ errors }">
                  <input
                    id="numId"
                    :placeholder="$t('mcompra_inputIdMsg')"
                    v-model="cedula"
                    class="input-text"
                  />
                  <span class="text-error" v-show="errors[0]">
                    {{ errors[0] }}
                  </span>
                </template>
              </validation-provider>
            </div>
          </ValidationObserver>
          <div class="content-btn">
            <button class="btn-submitOrden" @click="submitOrden">
              <search-icon class="icon-seach" /> {{ $t('mcompra_inputBtn') }}
            </button>
          </div>
        </div>
      </div>
      <div class="bar-body" v-if="orden && orden.venta">
        <div class="content-title">
          <p>{{ $t('mcompra_title2') }}</p>
          <p v-if="orden.venta.id">No. {{ orden.venta.id }}</p>
        </div>
        <div
          class="content-card"
          v-if="orden.productos && orden.productos.length > 0"
        >
          <client-only>
            <table class="table table-striped">
              <div class="thead">
                <ul>
                  <li></li>
                  <li>Producto</li>
                  <li>Variante</li>
                  <li>Cantidad</li>
                  <li>Valor Unidad</li>
                </ul>
              </div>
              <div class="tbody">
                <ul v-for="(item, index) in orden.productos" :key="index.item">
                  <li class="photo">
                    <img
                      class="img-product"
                      v-lazy="
                        idCloudinary(item.producto.foto_cloudinary, 400, 400)
                      "
                      alt="Imagen del producto"
                    />
                  </li>
                  <li>
                    <p class="text-table">
                      {{ item.producto.nombre }}
                    </p>
                  </li>
                  <li class="variants" v-if="item.variantes">
                    <el-tag
                      v-for="(productCombinacion, index2) in JSON.parse(
                        item.variantes
                      )"
                      :key="index2"
                    >
                      {{ productCombinacion | capitalize }}
                    </el-tag>
                  </li>
                  <li>
                    <p class="text-table">
                      {{ item.unidades }}
                    </p>
                  </li>
                  <li>
                    <p class="text-table">
                      {{ item.precio_producto | currency }}
                    </p>
                  </li>
                  <li>
                    <p class="text-table">
                      {{ (item.unidades * item.precio_producto) | currency }}
                    </p>
                  </li>
                </ul>
              </div>
            </table>
          </client-only>
          <div class="w-full flex h-1 bg-gray-900"></div>
        </div>
        <div class="content-info-orden" v-else>
          <div class="info-left">
            <p class="title-info-orden">
              Compra dropshipping (Hoko)
              <i class="el-icon-refresh" @click="getproductHoko" />
            </p>
            <div v-if="productDataHoko" class="wrapper-hoko">
              <div>
                <div
                  v-if="productDataHoko.delivery_state"
                  class="mt-4 flex flex-row items-center"
                >
                  <p
                    class="title-info-orden"
                    v-if="productDataHoko.delivery_state"
                  >
                    Estado del proceso con Hoko:
                  </p>
                  <el-tag
                    size="medium"
                    :color="
                      saleStateHoko[
                        productDataHoko.delivery_state.valueOf(str) - 1
                      ].color
                    "
                    effect="dark"
                    style="margin-left: 10px"
                  >
                    {{
                      $t(
                        saleStateHoko[
                          productDataHoko.delivery_state.valueOf(str) - 1
                        ].state
                      )
                    }}
                  </el-tag>
                </div>
                <div class="mt-4 flex flex-row items-center">
                  <p class="title-info-orden">Estado del proceso con Hoko:</p>
                  <div class="ml-2">
                    <span
                      class="value-info-orden"
                      v-if="productDataHoko.courier_id == 21"
                    >
                      Mensajería MEDELLIN RR
                    </span>
                    <span
                      class="value-info-orden"
                      v-else-if="productDataHoko.courier_id == 44"
                    >
                      Envía E-commerce CR
                    </span>
                    <span
                      class="value-info-orden"
                      v-else-if="productDataHoko.courier_id == 45"
                    >
                      Envía E-commerce CR
                    </span>
                  </div>
                </div>
              </div>
              <div class="mt-4" v-if="this.orden && this.orden.mensajes">
                <a
                  class="btn_url"
                  :href="`https://hoko.com.co/admin/resources/orders/${parseInt(
                    this.orden.mensajes[0].mensaje
                  )}`"
                  target="_blank"
                >
                  Ver detalle de la orden Hoko
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="content-info-orden" v-if="orden.venta">
          <div class="info-left">
            <p
              class="title-info-orden"
              v-if="orden.venta.cupon && orden.venta.cupon !== 'null'"
            >
              {{ $t('mcompra_cupon') }}
              <span class="value-info-orden">{{ orden.venta.cupon }}</span>
            </p>
            <p
              class="title-info-orden"
              v-if="orden.venta.descuento && orden.venta.descuento !== 'null'"
            >
              {{ $t('footer_descuento') }}
              <span class="value-info-orden">
                - {{ orden.venta.descuento | currency }}
              </span>
            </p>
            <p
              class="title-info-orden"
              v-if="orden.venta.costo_envio && !stateHoko"
            >
              {{ $t('mcompra_valorEnvio') }}
              <span class="value-info-orden">
                {{ orden.venta.costo_envio | currency }}
              </span>
            </p>
            <p class="title-info-orden" v-else>
              {{ $t('mcompra_valorEnvio') }}
              <span class="value-info-orden">
                Envío por Hoko (Pago contraentrega)
              </span>
            </p>
            <p class="title-info-orden" v-if="orden.venta.total">
              {{ $t('mcompra_totalOrden') }}
              <span class="value-info-orden">
                {{ orden.venta.total | currency }}
              </span>
            </p>
            <p class="title-info-orden" v-if="choicePayment">
              {{ $t('mcompra_metodoPago') }}
              <span class="value-info-orden">
                {{ $t(`${choicePayment.title}`) }}
              </span>
            </p>
            <p class="title-info-orden" v-if="fechaState">
              {{ $t('mcompra_fechaCompra') }}
              <span class="value-info-orden">{{ this.fechaState }}</span>
            </p>
            <p class="title-info-orden" v-if="horaState">
              {{ $t('mcompra_horaCompra') }}
              <span class="value-info-orden">{{ this.horaState }}</span>
            </p>
            <p class="title-info-orden">
              {{ $t('mcompra_pcanaldeVenta') }}
              <span
                :style="`color: ${
                  channelBuy[parseInt(orden.venta.canal) - 1].color
                };`"
              >
                {{ channelBuy[parseInt(orden.venta.canal) - 1].name }}
              </span>
            </p>
            <div
              class="mt-4 flex flex-row items-center"
              v-if="orden.venta.delivery_status_id !== null"
            >
              <p class="title-info-orden">
                {{ $t('mcompra_pcCanalEnvio') }}
              </p>
              <el-tag
                size="medium"
                effect="dark"
                :color="shippingState[orden.venta.delivery_status_id - 1].color"
                class="tag-state"
              >
                {{
                  $t(shippingState[orden.venta.delivery_status_id - 1].state)
                }}
              </el-tag>
            </div>
          </div>
          <div class="content-state-top">
            <div class="content-item-state">
              <p class="title-info-orden">
                {{ $t('mcompra_estadoCompra') }}
              </p>
              <el-tag
                :color="choiceState.color"
                effect="dark"
                style="margin-left: 10px"
              >
                {{ $t(`${choiceState.title}`) }}
              </el-tag>
            </div>
            <p class="title-info-orden">
              {{ $t('mcompra_ultimaActualizacion') }}
              <span class="value-info-orden">{{ orden.venta.fecha }}</span>
            </p>
          </div>
        </div>
        <div class="content-sections">
          <client-only>
            <el-collapse>
              <el-collapse-item :title="$t('mcompra_infoComprador')" name="1">
                <div class="content-info-buyer" v-if="orden.usuario == 30866">
                  <div
                    class="content-info-buyer"
                    v-if="tempData && tempData.state"
                  >
                    <p
                      class="name"
                      v-if="tempData && tempData.dataCustomer.nombre"
                    >
                      {{ $t('mcompra_nombre') }}
                      <span class="value-data">
                        {{ tempData.dataCustomer.nombre }}
                      </span>
                    </p>
                    <span class="value-data" v-else>N/A</span>
                    <p
                      class="name"
                      v-if="tempData && tempData.dataCustomer.phone"
                    >
                      {{ $t('footer_formIdenti') }}
                      <span class="value-data">
                        {{ tempData.dataCustomer.phone }}
                      </span>
                    </p>
                    <span class="value-data" v-else>N/A</span>
                    <p
                      class="name"
                      v-if="tempData && tempData.dataCustomer.correo"
                    >
                      {{ $t('footer_formCorreo') }}
                      <span class="value-data">
                        {{ tempData.dataCustomer.correo }}
                      </span>
                    </p>
                    <span class="value-data" v-else>N/A</span>
                    <p
                      class="name"
                      v-if="tempData && tempData.dataCustomer.identificacion"
                    >
                      {{ $t('footer_formPhone') }}
                      <span class="value-data">
                        {{ tempData.dataCustomer.identificacion }}
                      </span>
                    </p>
                    <span class="value-data" v-else>N/A</span>
                    <p
                      class="name"
                      v-if="tempData && tempData.dataCustomer.ciudad"
                    >
                      {{ $t('footer_formDepartamento') }}
                      <span class="value-data">
                        {{ tempData.dataCustomer.ciudad }}
                      </span>
                    </p>
                    <span class="value-data" v-else>N/A</span>
                    <p
                      class="name"
                      v-if="tempData && tempData.dataCustomer.barrio"
                    >
                      {{ $t('footer_formBarrio') }}
                      <span class="value-data">
                        {{ tempData.dataCustomer.barrio }}
                      </span>
                    </p>
                    <span class="value-data" v-else>N/A</span>
                    <p class="address">
                      {{ $t('mcompra_direccion') }}
                      <span
                        class="value-data"
                        v-if="tempData && tempData.dataCustomer.direccion"
                      >
                        {{ tempData.dataCustomer.direccion }}
                      </span>
                      <span class="value-data" v-else>N/A</span>
                    </p>
                  </div>
                  <div
                    v-for="(items, index) in tempData.dataCustomer"
                    v-else
                    :key="index"
                  >
                    <p class="name" v-if="items.textInput && items.value">
                      {{ items.textInput }}
                      <span class="value-data">{{ items.value }}</span>
                    </p>
                  </div>
                </div>
                <div
                  class="content-info-buyer"
                  v-else-if="orden.venta.usuario && orden.usuario != 30866"
                >
                  <p class="name">
                    {{ $t('mcompra_nombre') }}
                    <span class="value-data">
                      {{ orden.venta.usuario.nombre }}
                    </span>
                  </p>
                  <p
                    class="name"
                    v-if="this.cityComprador && this.cityComprador.departamento"
                  >
                    {{ $t('mcompra_departamento') }}
                    <span class="value-data">
                      {{ this.cityComprador.departamento.nombre_dep }}
                    </span>
                  </p>
                  <p
                    class="name"
                    v-if="this.cityComprador && this.cityComprador.nombre_ciu"
                  >
                    {{ $t('mcompra_ciudad') }}
                    <span class="value-data">
                      {{ this.cityComprador.nombre_ciu }}
                    </span>
                  </p>
                  <p
                    class="name"
                    v-if="
                      this.direccion_entrega &&
                      this.direccion_entrega.value &&
                      this.direccion_entrega.value.barrio
                    "
                  >
                    {{ $t('mcompra_barrio') }}
                    <span class="value-data">
                      {{ this.direccion_entrega.value.barrio }}
                    </span>
                  </p>
                  <p class="address">
                    {{ $t('mcompra_direccion') }}
                    <span
                      class="value-data"
                      v-if="
                        this.direccion_entrega &&
                        this.direccion_entrega.value &&
                        this.direccion_entrega.value.direccion
                      "
                    >
                      {{ this.direccion_entrega.value.direccion }}
                    </span>
                    <span
                      class="value-data"
                      v-else-if="
                        orden && orden.venta.usuario.user_info[0].direccion
                      "
                    >
                      {{ orden.venta.usuario.user_info[0].direccion }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="telephone">
                    {{ $t('mcompra_telefono') }}
                    <span
                      class="value-data"
                      v-if="
                        orden.venta.usuario.user_info[0].telefono != null &&
                        orden.venta.usuario.user_info[0].telefono != 'null' &&
                        orden.venta.usuario.user_info[0].telefono != ''
                      "
                    >
                      {{ orden.venta.usuario.user_info[0].telefono }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="email-address">
                    {{ $t('mcompra_correo') }}
                    <span class="value-data" v-if="orden.venta.usuario.email">
                      {{ orden.venta.usuario.email }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="messege">
                    {{ $t('mcompra_mensaje') }}
                    <span class="value-data" v-if="orden.mensajes.length">
                      {{ orden.mensajes[0].mensaje }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item :title="$t('mcompra_infoVendedor')" name="2">
                <div class="content-info-buyer">
                  <p
                    class="city"
                    v-if="
                      city && city.departamento && city.departamento.nombre_dep
                    "
                  >
                    {{ $t('mcompra_departamento') }}
                    <span class="value-data">
                      {{ city.departamento.nombre_dep }}
                    </span>
                  </p>
                  <p class="city">
                    {{ $t('mcompra_ciudad') }}
                    <span class="value-data" v-if="city && city.nombre_ciu">
                      {{ city.nombre_ciu }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="address">
                    {{ $t('mcompra_direccion') }}
                    <span
                      class="value-data"
                      v-if="dataStore.geolocalizacion.length"
                    >
                      {{ dataStore.geolocalizacion[0].direccion }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="telephone">
                    {{ $t('mcompra_telefono') }}
                    <span class="value-data" v-if="dataStore.tienda.telefono">
                      {{ dataStore.tienda.telefono }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="owner">
                    {{ $t('mcompra_nombreTienda') }}
                    <span class="value-data" v-if="dataStore.tienda.nombre">
                      {{ dataStore.tienda.nombre }}
                    </span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                </div>
              </el-collapse-item>
              <el-collapse-item
                :title="$t('mcompra_infoTransporter')"
                name="3"
                v-if="dataTransporter"
              >
                <div class="content-info-buyer">
                  <p
                    class="city"
                    v-if="dataTransporter && dataTransporter.name"
                  >
                    {{ $t('mcompra_nombre') }}
                    <span class="value-data">{{ dataTransporter.name }}</span>
                  </p>
                  <p
                    class="city"
                    v-if="dataTransporter && dataTransporter.guide"
                  >
                    {{ $t('mcompra_numeroGuia') }}
                    <span class="value-data">{{ dataTransporter.guide }}</span>
                  </p>
                  <p
                    class="city"
                    v-if="dataTransporter && dataTransporter.link"
                  >
                    {{ $t('mcompra_linkGuia') }}
                    <a
                      :href="dataTransporter.link"
                      target="_blank"
                      class="value-data"
                    >
                      {{ dataTransporter.link }}
                    </a>
                  </p>
                </div>
              </el-collapse-item>
            </el-collapse>
          </client-only>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import idCloudinary from '../../mixins/idCloudinary'
import currency from '../../mixins/formatCurrent'
import states from '../../mixins/states'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  mixins: [idCloudinary, currency, states],
  name: 'Ko-miCompra-G',
  props: {
    dataStore: Object,
    orden: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {
    if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
      this.$fb.setPixelId(this.facebookPixel.pixel_facebook)
      this.$fb.track('PageView')
      this.$fb.enable()
    }
    this.routePrev()
    this.setCity()
    this.clearCart()
    if (this.orden && this.orden.message) {
      this.errorMessage()
    }
    if (this.orden && this.orden.venta && this.orden.venta.usuario) {
      this.numOrden = this.orden.venta.id
      this.cedula = this.orden.venta.usuario.identificacion
      if (this.dataHoko && this.orden.productos.length == 0) {
        this.getproductHoko()
        this.stateHoko = true
      }
    } else {
      this.numOrden = ''
      this.cedula = ''
    }
    if (this.orden && this.orden.venta) {
      this.eventFacebookPixel()
      if (this.orden.venta.created_at) {
        this.shippingAddress()
        let result = this.orden.venta.created_at.split(' ')
        this.fechaState = result[0]
        this.horaState = result[1]
      }
      this.setUser()
      this.setTransportadora()
      const storeCities = JSON.parse(localStorage.getItem('storeCities'))
      if (storeCities) {
        this.$store.commit('SET_CITIES', storeCities)
      } else {
        this.$store.dispatch('GET_CITIES')
      }
    }
  },
  destroyed() {
    this.city = {}
  },
  data() {
    return {
      dataTransporter: '',
      mensajeWa: '',
      fechaState: '',
      horaState: '',
      toggleArrow: false,
      numOrden: '',
      cedula: '',
      city: {},
      cityComprador: {},
      productDataHoko: {},
      stateHoko: false,
      direccion_entrega: {},
      tempData: {
        state: false,
        dataCustomer: {},
      },
    }
  },
  computed: {
    dataHoko() {
      return this.$store.state.dataHoko
    },
    choicePayment() {
      return this.payments.find(
        (payment) => payment.id === this.orden.venta.metodo_pago
      )
    },
    choiceState() {
      return this.statusUpdate.find(
        (payment) => payment.id === this.orden.venta.estado
      )
    },
    cities() {
      return this.$store.state.cities
    },
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
  },
  methods: {
    setUser() {
      if (this.orden.usuario == 30866) {
        if (this.orden.mensajes && this.orden.mensajes.length > 0) {
          this.tempData.dataCustomer = JSON.parse(this.orden.venta.comentario)
          if (
            this.tempData.dataCustomer.nombre &&
            this.tempData.dataCustomer.phone &&
            this.tempData.dataCustomer.identificacion &&
            this.tempData.dataCustomer.direccion &&
            this.tempData.dataCustomer.barrio &&
            this.tempData.dataCustomer.ciudad
          ) {
            this.tempData.state = true
          } else {
            this.tempData.state = false
          }
        } else {
          this.tempData.dataCustomer = null
          this.tempData.state = false
        }
      }
    },
    setTransportadora() {
      if (this.orden.venta.transportadora !== null) {
        this.dataTransporter = JSON.parse(this.orden.venta.transportadora)
      }
    },
    getproductHoko() {
      let id = parseInt(this.orden.mensajes[0].mensaje)
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${this.dataHoko.token}`,
          'Access-Control-Allow-Origin': '*',
        },
      }
      let url = 'https://hoko.com.co/api/member/order/'
      axios.get(`${url}${id}`, config).then((response) => {
        this.productDataHoko = response.data
      })
    },
    shippingAddress() {
      this.direccion_entrega = JSON.parse(
        this.orden && this.orden.venta && this.orden.venta.direccion_entrega
          ? this.orden.venta.direccion_entrega
          : null
      )
      if (this.cities && this.direccion_entrega) {
        if (this.direccion_entrega.value) {
          this.cityComprador = this.cities.find((city) => {
            city.id === this.direccion_entrega.value.ciudad_id
          })
        }
      }
    },
    clearCart() {
      let domain = this.$route.fullPath
      let result = domain.split('&')
      if (result[result.length - 1] == 'clearCart=true') {
        this.$store.commit('DELETE_ALL_ITEMS_CART')
        this.$store.commit('UPDATE_CONTENT_CART')
      }
    },
    routePrev() {
      if (this.$route.path == '/') {
        this.toggleArrow = false
      } else {
        this.toggleArrow = true
      }
    },
    submitOrden() {
      this.$refs.observer
        .validate()
        .then((response) => {
          if (response) {
            this.$router.replace({ query: {} })
            return axios
              .get(
                `${this.$store.state.urlKomercia}/api/orden/${this.dataStore.tienda.id_tienda}/${this.numOrden}`,
                {
                  headers: {
                    'content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                  },
                }
              )
              .then((response) => {
                if (
                  this.numOrden == response.data.data.venta.id &&
                  this.cedula == response.data.data.venta.usuario.identificacion
                ) {
                  this.$emit('update', response.data.data)
                  this.setCity()
                  this.$emit('update', response.data.data)
                } else {
                  this.$emit('update', {})
                  this.errorMessageTwo()
                }
              })
              .catch(() => {
                this.$emit('update', {})
                this.errorMessageTwo()
              })
          }
        })
        .catch(() => {
          this.errorMessageTwo()
        })
    },
    eventFacebookPixel() {
      let array = []
      let content = []
      this.orden.productos.map((element) => {
        if (element) {
          array.push(`${element.producto.id}`)
          let temp = {
            id: `${element.producto.id}`,
            quantity: element.unidades,
          }
          content.push(temp)
        }
      })
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Purchase', {
          content_type: 'product',
          content_ids: array,
          contents: content,
          value: this.orden.venta.total,
          currency: this.dataStore.tienda.moneda,
          description: `Orden: ${this.numOrden}, Estado de la venta: ${this.choiceState.ref}`,
        })
      }
    },
    setCity() {
      if (this.cities) {
        this.city = this.cities.find(
          (city) => city.id === this.dataStore.tienda.ciudad
        )
      }
    },
    errorMessage() {
      this.$message.error({
        dangerouslyUseHTMLString: true,
        message:
          '<strong>Esta orden no existe</strong><p>El número de la orden o el usuario son incorrectos</p>',
        duration: 4000,
      })
    },
    errorMessageTwo() {
      this.$message.error({
        dangerouslyUseHTMLString: true,
        message:
          '<strong>Esta orden no existe</strong><p>El número de la orden o la cédula son incorrectos</p>',
        duration: 4000,
      })
    },
  },
  watch: {
    '$route.path'(value) {
      if (value == '/') {
        this.toggleArrow = false
      } else {
        this.toggleArrow = true
      }
    },
    cities() {
      this.setCity()
      this.shippingAddress()
    },
    orden() {
      if (this.orden.venta) {
        if (this.orden.venta.created_at) {
          this.eventFacebookPixel()
          this.shippingAddress()
          this.setTransportadora()
          this.setUser()
          let result = this.orden.venta.created_at.split(' ')
          this.fechaState = result[0]
          this.horaState = result[1]
        }
      }
    },
  },
  filters: {
    capitalize(value) {
      if (value) {
        value = value.toLowerCase()
        return value.replace(/^\w|\s\w/g, (l) => l.toUpperCase())
      }
    },
  },
}
</script>

<style scoped>
.tag-state {
  color: white;
  margin-left: 10px;
}
.table-striped {
  width: 100%;
  display: grid;
}
.table-striped .thead {
  width: 100%;
}
.table-striped .thead ul {
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 0;
  list-style: none;
}
.table-striped .tbody ul {
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: repeat(7, 1fr);
  padding: 10px 0;
  list-style: none;
}
.table-striped .tbody ul:nth-of-type(odd) {
  background-color: #f9f9f9;
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
}
.photo img {
  width: 70px;
  height: 70px;
  object-fit: cover;
}
td {
  vertical-align: middle !important;
}
td.variants {
  display: flex;
}
td.variants p ~ p {
  margin-left: 10px;
}
table {
  border-spacing: 0;
  border-collapse: collapse;
}
.thead ul li {
  color: gray;
}
.text-table {
  color: var(--purple);
  font-size: 14px;
}
.text-normal-table {
  color: black;
  font-size: 14px;
}
.text-variant {
  color: black;
  font-size: 14px;
}
.text-bold-table {
  color: black;
  font-size: 14px;
  font-weight: bold;
  text-align: end;
  padding-right: 15px;
}
.wrapper_micompra {
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 282px);
  background-color: #efefef;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.wrapper-form {
  margin-bottom: 10px;
  border-radius: 30px;
  padding: 20px 54px 10px;
  width: 100%;
  background: #ffffff;
}
.content-form {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.title-form {
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: -0.24px;
  text-align: center;
  color: black;
  margin-bottom: 25px;
}
.form {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.content-input {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-right: 30px;
  height: 90px;
}
.content-btn {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn-submitOrden {
  color: white;
  border-radius: 5px;
  border: solid 2px black;
  background-color: black;
  padding: 8px 14px;
  font-size: 16px;
  width: 100%;
  min-height: 40px;
  max-height: 40px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.btn-submitOrden:hover {
  color: white;
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}
.icon-seach {
  font-size: 18px;
  margin-right: 5px;
  bottom: 2px;
}
.input-text {
  font-size: 14px;
  color: rgba(21, 20, 57, 0.541);
  border: solid 2px #ccc9c9;
  border-radius: 5px;
  background-color: transparent;
  padding: 8px 14px;
  width: 100%;
  height: 40px;
}
.input-text::placeholder {
  color: rgba(21, 20, 57, 0.541);
  opacity: 0.7;
}
.input-text:-internal-autofill-selected {
  -webkit-appearance: menulist-button;
  background-color: transparent !important;
  background-image: none !important;
  color: -internal-light-dark-color(black, white) !important;
}
.input-text:focus,
.input-text:active {
  outline: 0;
  border: solid 2px rgba(60, 60, 63, 0.774);
}
.input-label {
  height: 25px;
}
.content-btn .el-button--primary {
  color: #fff;
  background-color: #000000;
  border-color: #000000;
  border-radius: 5px;
  width: 100%;
  height: 40px;
  max-height: 40px;
}
.content-btn .el-button--primary:hover {
  background-color: var(--btnhover);
  border-color: var(--btnhover);
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.bar-body {
  width: 100%;
  padding: 40px 54px 15px 54px;
  background-color: #ffffff;
  display: flex;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-title {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  margin-bottom: 10px;
}
.content-title > p:nth-child(1) {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.3;
  color: #383838;
}
.content-title > p:nth-child(2) {
  font-size: 14px;
  font-weight: normal;
  line-height: 1.3;
  color: #383838;
  margin-bottom: 10px;
}
.content-card {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  grid-column-gap: 60px;
  /* grid-row-gap: 35px; */
  align-items: center;
  margin-bottom: 20px;
}
.card {
  display: flex;
  align-items: center;
}
.img-product {
  width: 83px;
  height: 83px;
  vertical-align: top;
  object-fit: cover;
}
.info {
  padding-left: 15px;
}
.name-product {
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.quantity-product {
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.price-product {
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.3;
  letter-spacing: normal;
  text-align: left;
  color: black;
}
.info >>> .el-tag {
  border-color: #777780;
  background-color: #e8e8f3;
  color: black;
  display: inline-block;
  height: 28px;
  margin-left: 2px;
  padding: 0 6px;
  font-size: 13px;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  text-align: center;
  box-sizing: border-box;
  white-space: nowrap;
}
.content-info-orden {
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.info-left {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.title-info-orden {
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: black;
}
.value-info-orden {
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: black;
}
.content-state-top {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
}
.content-item-state {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.content-sections {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.content-sections >>> .el-collapse-item__header {
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: black;
}
.content-sections >>> .el-icon-arrow-right {
  color: black;
}

.content-info-buyer {
  display: flex;
  grid-column-gap: 40px;
  width: 100%;
  flex-wrap: wrap;
  grid-row-gap: 5px;
  justify-content: space-between;
}
.city,
.telephone,
.owner,
.name,
.email-address,
.address {
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: black;
}
.messege {
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: left;
  color: black;
  width: 100%;
}
.value-data {
  font-weight: normal;
}
.btn_url {
  border: 1px solid var(--purple);
  background: var(--purple);
  color: white;
  padding: 4px 10px;
  border-radius: 3px;
}
.btn_url:hover {
  border: 1px solid var(--green);
  background: var(--green);
  color: var(--purple);
}
.wrapper-hoko {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
@media (max-width: 863px) {
  .form {
    flex: 1;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .content-form {
    flex-direction: column;
  }
  .content-input {
    margin-right: 0px;
  }
}
@media (max-width: 768px) {
  .bar-top {
    padding: 15px 27px;
  }
  .bar-body {
    padding: 17px 17px 25px 17px;
  }
  .contenedor {
    padding: 60px 0px 60px 0px;
  }
  .wrapper-form {
    padding: 20px 17px 10px;
  }
}
@media (max-width: 600px) {
  .content-input {
    flex-direction: column;
    align-items: flex-start;
  }
  .content-state-top {
    flex-direction: column;
    align-items: flex-start;
  }
  .title-info-orden {
    margin-top: 10px;
  }
}
@media (max-width: 500px) {
  .form .el-input {
    max-width: unset;
  }
  .contenedor {
    padding: 8px 5px 10px 5px;
  }
}
</style>
