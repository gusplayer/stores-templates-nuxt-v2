<template>
  <div class="wrapper_micompra">
    <div class="contenedor">
      <div class="wrapper-form">
        <h1 class="title-form">{{ $t('mcompra_title') }}</h1>
        <div class="content-form">
          <ValidationObserver ref="observer" tag="form" class="form">
            <div class="content-input">
              <label for="numOrden" class="input-label">
                {{ $t('mcompra_inputtitle') }}</label
              >
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
                  <span class="text-error" v-show="errors[0]">{{
                    errors[0]
                  }}</span>
                </template>
              </validation-provider>
            </div>
            <div class="content-input">
              <label for="numId" class="input-label">
                {{ $t('mcompra_inputId') }}</label
              >
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
                  <span class="text-error" v-show="errors[0]">{{
                    errors[0]
                  }}</span>
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
          <p>No. {{ orden.venta.id }}</p>
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
                        idCloudinary(item.producto.foto_cloudinary, 300, 300)
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
              <span class="value-info-orden"
                >- {{ orden.venta.descuento | currency }}</span
              >
            </p>
            <p class="title-info-orden">
              {{ $t('mcompra_pcanaldeVenta') }}
              <span class="value-info-orden">WhatsApp</span>
            </p>
            <p class="title-info-orden" v-if="orden.venta.costo_envio">
              {{ $t('mcompra_valorEnvio') }}
              <span class="value-info-orden">{{
                orden.venta.costo_envio | currency
              }}</span>
            </p>
            <p class="title-info-orden" v-if="orden.venta.total">
              {{ $t('mcompra_totalOrden') }}
              <span class="value-info-orden">{{
                orden.venta.total | currency
              }}</span>
            </p>
            <p class="title-info-orden" v-if="choicePayment">
              {{ $t('mcompra_metodoPago') }}
              <span class="value-info-orden">
                {{ $t(`${choicePayment.title}`) }}</span
              >
            </p>
            <p class="title-info-orden" v-if="fechaState">
              {{ $t('mcompra_fechaCompra') }}
              <span class="value-info-orden">{{ this.fechaState }}</span>
            </p>
            <p class="title-info-orden" v-if="horaState">
              {{ $t('mcompra_horaCompra') }}
              <span class="value-info-orden">{{ this.horaState }}</span>
            </p>
            <p class="title-info-orden" v-if="orden && orden.usuario == 30866">
              {{ $t('mcompra_pcanaldeVenta') }}
              <span class="value-info-orden">Venta generada por WhatsApp</span>
            </p>
            <p class="title-info-orden" v-else>
              {{ $t('mcompra_pcanaldeVenta') }}
              <span class="value-info-orden">Venta generada por Checkout</span>
            </p>
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
                  <p class="name" v-if="mensajeWa && mensajeWa.nombre">
                    {{ $t('mcompra_nombre') }}
                    <span class="value-data">{{ mensajeWa.nombre }}</span>
                  </p>
                  <p class="name" v-if="mensajeWa && mensajeWa.ciudad">
                    {{ $t('footer_formDepartamento') }}
                    <span class="value-data">{{ mensajeWa.ciudad }}</span>
                  </p>
                  <p class="name" v-if="mensajeWa && mensajeWa.barrio">
                    {{ $t('footer_formBarrio') }}
                    <span class="value-data">{{ mensajeWa.barrio }}</span>
                  </p>
                  <p class="address">
                    {{ $t('mcompra_direccion') }}
                    <span
                      class="value-data"
                      v-if="mensajeWa && mensajeWa.direccion"
                      >{{ mensajeWa.direccion }}</span
                    >
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
                    <span class="value-data">{{
                      city.departamento.nombre_dep
                    }}</span>
                  </p>
                  <p class="city">
                    {{ $t('mcompra_ciudad') }}
                    <span class="value-data" v-if="city && city.nombre_ciu">{{
                      city.nombre_ciu
                    }}</span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="address">
                    {{ $t('mcompra_direccion') }}
                    <span
                      class="value-data"
                      v-if="dataStore.geolocalizacion.length"
                      >{{ dataStore.geolocalizacion[0].direccion }}</span
                    >
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="telephone">
                    {{ $t('mcompra_telefono') }}
                    <span class="value-data" v-if="dataStore.tienda.telefono">{{
                      dataStore.tienda.telefono
                    }}</span>
                    <span class="value-data" v-else>N/A</span>
                  </p>
                  <p class="owner">
                    {{ $t('mcompra_nombreTienda') }}
                    <span class="value-data" v-if="dataStore.tienda.nombre">{{
                      dataStore.tienda.nombre
                    }}</span>
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
                      >{{ dataTransporter.link }}</a
                    >
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
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  mixins: [idCloudinary, currency],
  name: 'Ko-miCompra-Wa',
  props: {
    dataStore: Object,
    orden: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {
    this.routePrev()
    this.setCity()
    this.clearCart()
    if (this.orden && this.orden.message) {
      this.errorMessage()
    }
    if (this.orden && this.orden.venta && this.orden.venta.usuario) {
      this.numOrden = this.orden.venta.id
      this.cedula = this.orden.venta.usuario.identificacion
    } else {
      this.numOrden = ''
      this.cedula = ''
    }
    if (this.orden && this.orden.venta) {
      if (this.orden.venta.created_at) {
        this.shippingAddress()
        let result = this.orden.venta.created_at.split(' ')
        this.fechaState = result[0]
        this.horaState = result[1]
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
      payments: [
        {
          id: '1',
          tag: 'payco',
          title: 'mcompra_pTarjetaCredito',
          description: 'Pago realizado por ePayco',
        },
        {
          id: '2',
          tag: 'payco',
          title: 'mcompra_pPase1',
          description: 'Paga con tu cuenta bancaria o tarjeta debito',
        },
        {
          id: '3',
          tag: 'payco',
          title: 'mcompra_pPagoEfectivo',
          description: 'Mas de 14.000 puntos en todo el país',
        },
        {
          id: '4',
          tag: 'consignacion',
          title: 'mcompra_pConsigancionBancaria',
          description: 'Transferencia o consignación a nuestra cuenta bancaria',
        },
        {
          id: '5',
          tag: 'efecty',
          title: 'mcompra_pGiroEfecty',
          description: 'Transferencia o consignación a nuestra cuenta',
        },
        {
          id: '6',
          tag: 'tienda',
          title: 'mcompra_pRecogerTienda',
          description:
            'Si estas cerca a nuestro negocio, acercate a realizar el pago y recoger tu producto. Escribe abajo en los comentarios cuando vendrías a nuestra tienda para tener tu compra lista.',
        },
        {
          id: '7',
          tag: 'convenir',
          title: 'mcompra_pPagoConvenir',
          description:
            'Al finalizar tu compra, te contactaremos o puedes comunicarte con nosostros por algunos de nuestros medios de comunicación para que organicemos la forma de pago de tu compra. ',
        },
        {
          id: '8',
          tag: 'payco',
          title: 'mcompra_pSafetyPat',
          description: 'Banca y efectivo internacinal',
        },
        {
          id: '9',
          tag: 'contraentrega',
          title: 'mcompra_pContraEntrega',
          description: 'Pagas en el momento que recibas tu compra',
        },
        {
          id: '10',
          tag: 'mercadopago',
          title: 'mcompra_pmercadoPago',
          description: 'Tu cliente ha seleccionado mercadopago para pagar',
        },
        {
          id: '11',
          tag: 'payu',
          title: 'mcompra_pTarjetaCreditoM',
          description: 'Paga con tu tarjeta hasta en 24 cuotas',
        },
        {
          id: '12',
          tag: 'payu',
          title: 'mcompra_pEfectivo',
          description: 'Tu cliente ha seleccionado PayU para pagar',
        },
        {
          id: '13',
          tag: 'payu',
          title: 'mcompra_pPayuCuentaAhorros',
          description: 'Tu cliente ha seleccionado PayU para pagar',
        },
        {
          id: '14',
          tag: 'mercadopago',
          title: 'mcompra_pPMercadoCuentaAhorros',
          description: 'Tu cliente ha seleccionado Mercado Pago para pagar',
        },
        {
          id: '15',
          tag: 'Daviplata',
          title: 'mcompra_pDaviplata',
          description: 'Tu cliente ha seleccionado Daviplata para pagar',
        },
        {
          id: '16',
          tag: 'Nequi',
          title: 'mcompra_pNequi',
          description: 'Tu cliente ha seleccionado Nequi para pagar',
        },
      ],
      city: {},
      cityComprador: {},
      statusUpdate: [
        {
          id: '0',
          color: '#FFA801',
          title: 'mcompra_sinPagar',
          ref: 'Sin pagar',
        },
        {
          id: '1',
          color: '#30c490',
          title: 'mcompra_pagada',
          ref: 'Pagada',
        },
        {
          id: '2',
          color: '',
          title: '',
          ref: '',
        },
        {
          id: '3',
          color: '#EB4D4B',
          title: 'mcompra_cancelada',
          ref: 'Cancelada',
        },
        {
          id: '4',
          color: '#0000FF',
          title: 'mcompra_despachada',
          ref: 'Despachada',
        },
        {
          id: '5',
          color: '',
          title: '',
          ref: '',
        },
        {
          id: '6',
          color: '#4429AE',
          title: 'mcompra_entregado',
          ref: 'Entregado',
        },
      ],
      direccion_entrega: {},
    }
  },
  computed: {
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
    shippingAddress() {
      if (this.orden && this.orden.mensajes.length > 0) {
        this.mensajeWa = JSON.parse(this.orden.mensajes[0].mensaje)
      }
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
        this.$store.commit('DELETEALLITEMSCART')
        this.$store.commit('UPDATE_CONTENTCART')
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
          if (response && this.dataStore && this.dataStore.tienda) {
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
                  this.mensajeWa = JSON.parse(
                    response.data.data.venta.comentario
                  )
                  this.$emit('update', response.data.data)
                  this.setCity()
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
        .catch((e) => {
          this.errorMessageTwo()
        })
    },
    eventFacebookPixel() {
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Purchase', {
          content_ids: this.orden.venta.id,
          description: this.choiceState.ref,
          value: this.orden.venta.total,
          currency: this.dataStore.tienda.moneda,
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
  min-height: calc(100vh - 38px);
  background-color: var(--background_color_2);
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
  background-color: var(--color_background_btn);
  border-color: var(--color_background_btn);
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
  border-radius: 50%;
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
