<template>
  <div class="wrapper_newsletter">
    <div class="contenedor">
      <div class="bar-top">
        <div class="back">
          <arrow-left-icon
            v-if="toggleArrow"
            @click="$router.go(-1)"
            class="arrow-left"
          ></arrow-left-icon>
          <p class="turn-back">Volver</p>
        </div>
        <div class="help">
          <help-circle-outline class="icon-help"></help-circle-outline>
          <p class="help-text">Ayuda</p>
        </div>
      </div>
      <div class="content-form">
        <h1 class="title-form">Seguimiento de tu compra</h1>
        <div class="form">
          <div class="content-input">
            <label for="numOrden">Número de Orden</label>
            <el-input id="numOrden" placeholder="Número de Orden" v-model="numOrden"></el-input>
          </div>
          <div class="content-input">
            <label for="numId">Número de Identificación</label>
            <el-input id="numId" placeholder="Cédula" v-model="cedula"></el-input>
          </div>
          <el-button type="primary" icon="el-icon-search" @click="GET_ORDEN()">Buscar</el-button>
        </div>
      </div>
      <div class="bar-middle">
        <h1 class="title-general">Mis ordenes</h1>
        <p class="number-order">Numero de orden: <span class="id-order" v-if="orden && orden.venta">{{orden.venta.id}}</span></p>
      </div>
      <div class="bar-body" v-if="orden && orden.venta">
        <p class="number-order-reponsive">Numero de orden: <span class="id-order" v-if="orden.venta">{{orden.venta.id}}</span></p>
        <div class="content-card">
          <div class="card" v-for="(item, index) in orden.productos" :key="index.item">
            <img class="img-product" :src="item.producto.foto_cloudinary" alt="Imagen del producto">
            <div class="info">
              <p class="name-product">{{item.producto.nombre}}</p>
              <p class="price-product">{{item.precio_producto | currency}}</p>
              <p class="quantity-product" v-if="item.unidades == 1">{{item.unidades}} unidad</p>
              <p class="quantity-product" v-if="item.unidades == 0 || item.unidades > 1">{{item.unidades}} unidades</p>
            </div>
          </div>
        </div>
        <div class="content-info-orden" v-if="orden.venta">
          <div class="info-left">
            <p class="cupon" v-if="orden.venta.cupon != 'null'">Cupón: <span class="cupon-value">{{orden.venta.cupon}}</span></p>
            <p class="cupon" v-if="orden.venta.cupon == 'null' || orden.venta.cupon == null">Cupón: <span class="cupon-value">N/A</span></p>
            <p class="shipping-price" v-if="orden.venta.costo_envio">Valor del envío: <span class="shipping-value">{{orden.venta.costo_envio | currency}}</span></p>
            <p class="order-total" v-if="orden.venta.total">Total de la orden: <span class="total-value">{{orden.venta.total | currency}}</span></p>
            <p class="payment-method" v-if="choicePayment">Método de pago: <span class="method-value">{{ choicePayment.title }}</span></p>
          </div>
          <div class="state-right">
            <div class="content-state-top">
              <p class="title-state">Estado del pedido</p>
              <p class="last-update">Ultima actualización: <span class="date-update">{{orden.venta.fecha}}</span></p>
            </div>
            <div class="content-state-bar">
              <el-steps :space="200" :active="2" align-center finish-status="success">
                <el-step description="Pedido Confirmado"></el-step>
                <el-step description="Pago aprobado"></el-step>
                <el-step description="Pedido preparado"></el-step>
                <el-step description="Enviando el pedido"></el-step>
                <el-step description="Entregar pedido"></el-step>
              </el-steps>
            </div>
            <div class="content-state-bar-responsive">
              <el-steps :space="40" :active="2" align-center finish-status="success" direction="vertical">
                <el-step description="Pedido Confirmado"></el-step>
                <el-step description="Pago aprobado"></el-step>
                <el-step description="Pedido preparado"></el-step>
                <el-step description="Enviando el pedido"></el-step>
                <el-step description="Entregar pedido"></el-step>
              </el-steps>
            </div>
            <div class="content-update">
              <p class="last-update-responsive">Ultima actualización</p>
              <span class="date-update-responsive">{{orden.venta.fecha}}</span>
            </div>
          </div>
        </div>
        <div class="content-sections">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Información del comprador" name="1">
              <div class="content-info-buyer" v-if="orden.venta.usuario">
                <p class="name">Nombre: <span class="value-data">{{ orden.venta.usuario.nombre }}</span></p>
                <p class="address">Dirección: <span class="value-data" v-if="orden.venta.usuario.user_info[0].direccion">{{ orden.venta.usuario.user_info[0].direccion }}</span></p>
                <p class="telephone" v-if="orden.venta.usuario.user_info[0].telefono != null && orden.venta.usuario.user_info[0].telefono  != 'null' && orden.venta.usuario.user_info[0].telefono  != ''">Teléfono: <span class="value-data">{{ orden.venta.usuario.user_info[0].telefono }}</span></p>
                <p class="telephone" v-if="orden.venta.usuario.user_info[0].telefono  == null || orden.venta.usuario.user_info[0].telefono  == '' || orden.venta.usuario.user_info[0].telefono  == 'null'">Teléfono: <span class="value-data">N/A</span></p>
                <p class="email-address">Correo: <span class="value-data" v-if="orden.venta.usuario.email">{{ orden.venta.usuario.email }}</span></p>
              </div>
            </el-collapse-item>
            <el-collapse-item title="Información del vendedor" name="2">
              <div class="content-info-seller">
                <p class="city">Ciudad: <span class="value-data" v-if="city && city.nombre_ciu">{{ city.nombre_ciu }}</span></p>
                <p class="address">Dirección: <span class="value-data" v-if="dataStore.geolocalizacion">{{ dataStore.geolocalizacion[0].direccion }}</span></p>
                <p class="telephone" v-if="dataStore.geolocalizacion[0].telefono != null && dataStore.geolocalizacion[0].telefono != 'null' && dataStore.geolocalizacion[0].telefono != ''">Teléfono: <span class="value-data">{{ dataStore.geolocalizacion[0].telefono }}</span></p>
                <p class="telephone" v-if="dataStore.geolocalizacion[0].telefono == null || dataStore.geolocalizacion[0].telefono == '' || dataStore.geolocalizacion[0].telefono == 'null'">Teléfono: <span class="value-data">N/A</span></p>
                <p class="owner">Nombre Tienda: <span class="value-data" v-if="dataStore.tienda.nombre">{{ dataStore.tienda.nombre }}</span></p>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Ko-Newsletter-1',
  props: {
    dataStore: Object,
    orden: Object,
  },
  mounted() {
    this.routePrev()
    this.setCity()
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
  },
  destroyed() {
    this.city = {}
  },
  data() {
    return {
      toggleArrow: false,
      numOrden: '',
      cedula: '',
      activeNames: ['1'],
      payments: [
        {
          id: '1',
          tag: 'payco',
          title: 'Tarjeta de Crédito',
          description: 'Pago realizado por ePayco',
        },
        {
          id: '2',
          tag: 'payco',
          title: 'PSE - Cuenta de ahorros y corriente',
          description: 'Paga con tu cuenta bancaria o tarjeta debito',
        },
        {
          id: '3',
          tag: 'payco',
          title: 'Pago en efectivo',
          description: 'Mas de 14.000 puntos en todo el país',
        },
        {
          id: '4',
          tag: 'consignacion',
          title: 'Consignación bancaria',
          description: 'Transferencia o consignación a nuestra cuenta bancaria',
        },
        {
          id: '5',
          tag: 'efecty',
          title: 'Giro a Efecty',
          description: 'Transferencia o consignación a nuestra cuenta',
        },
        {
          id: '6',
          tag: 'tienda',
          title: 'Pagar y recoger en la tienda',
          description:
            'Si estas cerca a nuestro negocio, acercate a realizar el pago y recoger tu producto. Escribe abajo en los comentarios cuando vendrías a nuestra tienda para tener tu compra lista.',
        },
        {
          id: '7',
          tag: 'convenir',
          title: 'Pago a convenir',
          description:
            'Al finalizar tu compra, te contactaremos o puedes comunicarte con nosostros por algunos de nuestros medios de comunicación para que organicemos la forma de pago de tu compra. ',
        },
        {
          id: '8',
          tag: 'payco',
          title: 'SafetyPay (Banca internacional)',
          description: 'Banca y efectivo internacinal',
        },
        {
          id: '9',
          tag: 'contraentrega',
          title: 'Pago Contra-Entrega',
          description: 'Pagas en el momento que recibas tu compra',
        },
        {
          id: '10',
          tag: 'mercadopago',
          title: 'Mercadopago',
          description: 'Tu cliente ha seleccionado mercadopago para pagar',
        },
        {
          id: '11',
          tag: 'payu',
          title: 'Tarjeta de Credito',
          description: 'Paga con tu tarjeta hasta en 24 cuotas',
        },
        {
          id: '12',
          tag: 'payu',
          title: 'Efectivo',
          description: 'Tu cliente ha seleccionado PayU para pagar',
        },
        {
          id: '13',
          tag: 'payu',
          title: 'PSE - Cuenta de Ahorros y corriente',
          description: 'Tu cliente ha seleccionado PayU para pagar',
        },
        {
          id: '14',
          tag: 'mercadopago',
          title: 'PSE - Cuenta de Ahorros y corriente',
          description: 'Tu cliente ha seleccionado Mercado Pago para pagar',
        },
        {
          id: '15',
          tag: 'Daviplata',
          title: 'Daviplata',
          description: 'Tu cliente ha seleccionado Daviplata para pagar',
        },
        {
          id: '16',
          tag: 'Nequi',
          title: 'Nequi',
          description: 'Tu cliente ha seleccionado Nequi para pagar',
        },
      ],
      city: {},
    }
  },
  computed: {
    choicePayment() {
      return this.payments.find(
        payment => payment.id === this.orden.venta.metodo_pago
      )
    },
    cities() {
      return this.$store.state.cities
    },
  },
  methods: {
    routePrev() {
      if (this.$route.path == '/') {
        this.toggleArrow = false
      } else {
        this.toggleArrow = true
      }
    },
    GET_ORDEN() {
      this.$router.replace({ query: {}})
      return  axios
        .get(`https://api2.komercia.co/api/orden/582/${this.numOrden}`, {
          headers: {
            'content-type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        })
        .then(response => {
          if (this.numOrden == response.data.data.venta.id && this.cedula == response.data.data.venta.usuario.identificacion) {
            this.$emit('update', response.data.data)
          } else {
            this.$emit('update', {})
            this.errorMessageTwo()
          }
        }).catch(() => {
          this.$emit('update', {})
          this.errorMessageTwo()
        })
    },
    setCity() {
      if (this.cities) {
        this.city = this.cities.find(
          city => city.id === this.dataStore.tienda.ciudad
        )
      }
    },
    errorMessage() {
      this.$swal({
        title: 'Esta orden no existe',
        text: 'El número de la orden o el usuario son incorrectos',
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
        backdrop: 'rgba(14,47,90,0.6)',
        icon: 'error',
      })
    },
    errorMessageTwo() {
      this.$swal({
        title: 'Esta orden no existe',
        text: 'El número de la orden o la cédula son incorrectos',
        showCloseButton: true,
        confirmButtonText: 'Aceptar',
        backdrop: 'rgba(14,47,90,0.6)',
        icon: 'error',
      })
    }
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
    },
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
      return 0
    },
  },
}
</script>

<style scoped>
.wrapper_newsletter {
  display: flex;
  width: 100%;
  height: calc(100vh - 470px);
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 100%;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding: 60px 20px 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.content-form {
  margin-bottom: 5px;
  padding: 30px 27px;
  width: 100%;
  background: #ffffff;
}
.form {
  display: flex;
  flex-wrap: wrap;
  grid-column-gap: 30px;
  grid-row-gap: 15px;
  flex-direction: row;
  width: 100%;
  align-items: flex-end;
  justify-content: center;
}
.form .el-input {
  width: 100%;
}
.form .el-button--primary {
  color: #FFF;
  background-color: #4a24b6;
  border-color: #4a24b6;
}
.bar-top {
  width: 100%;
  padding: 15px 54px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
}
.back {
  display: flex;
  align-items: center;
}
.help {
  display: flex;
  align-items: center;
}
.turn-back {
  margin-left: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.arrow-left {
  margin-top: 2px;
}
.material-design-icon > .material-design-icon__svg {
  height: 22px;
  width: 22px;
  color: #390dbd;
}
.icon-help {
  margin-top: -2px;
}
.help-text {
  margin-left: 10px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.bar-middle {
  width: 100%;
  padding: 28px 54px;
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 13px;
  grid-column-gap: 30px;
  border-radius: 0px 0px 30px 30px;
}
.title-general {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.24px;
  text-align: center;
  color: #373d43;
}
.number-order {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.id-order {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
  margin-left: 5px;
}
.bar-body {
  width: 100%;
  padding: 40px 54px 60px 54px;
  background-color: #ffffff;
  display: flex;
  border-radius: 30px 30px 0px 0px;
  flex-direction: column;
}
.content-card {
  width: 100%;
  flex-wrap: wrap;
  display: flex;
  grid-column-gap: 60px;
  grid-row-gap: 35px;
  align-items: center;
  margin-bottom: 63px;
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
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.price-product {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #ff1313;
}
.quantity-product {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.number-order-reponsive {
  display: none;
}
.content-info-orden {
  margin-bottom: 58px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  grid-column-gap: 60px;
  grid-row-gap: 45px;
}
.cupon {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #4a24b6;
}
.shipping-price {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #4a24b6;
}
.order-total{
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #4a24b6;
}
.payment-method {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #4a24b6;
}
.cupon-value {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.shipping-value {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.total-value {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.method-value {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.title-state {
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
}
.state-right {
  width: 68%;
}
.last-update {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #4a24b6;
}
.date-update {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
  margin-left: 2px;
}
.content-state-top {
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;
  grid-column-gap: 60px;
  grid-row-gap: 15px;
  margin-bottom: 20px;
}
.content-state-bar {
  margin-left: -9%;
  margin-right: -7%;
}
.content-info-seller {
  display: flex;
  grid-column-gap: 40px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 8px;
  grid-row-gap: 15px;
  justify-content: space-between;
}
.content-info-buyer {
  display: flex;
  grid-column-gap: 40px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 8px;
  grid-row-gap: 15px;
  justify-content: space-between;
}
.city, .telephone, .owner, .name, .email-address, .address {
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.73;
  letter-spacing: normal;
  text-align: left;
  color: #383838;
  max-width: 230px;
  width: 100%;
}
.value-data {
  font-weight: normal;
}
.content-state-bar-responsive {
  display: none;
}
.content-update {
  display: none;
}
.content-input {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
  grid-column-gap: 30px;
  flex-wrap: wrap;
  flex-direction: column;
  width: 100%;
  max-width: 300px;
}
.title-form {
  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.46;
  letter-spacing: -0.24px;
  text-align: center;
  color: #373d43;
  margin-bottom: 40px
}
.swal2-title {
  font-family: 'Poppins', sans-serif;
}
@media (max-width: 998px) { 
  .state-right {
    width: 100%;
  }
}
@media (max-width: 863px) { 
  .form {
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
}
@media (max-width: 768px) { 
  .bar-top {
    padding: 15px 27px;
  }
  .bar-middle {
    padding: 28px 27px;
  }
  .bar-body {
    padding: 27px 27px 61px 27px;
  }
  .number-order {
    display: none;
  }
  .number-order-reponsive {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: normal;
    text-align: left;
    color: #383838;
    display: initial;
    margin-bottom: 30px;
  }
  .help {
    display: none;
  }
  .contenedor {
    padding: 60px 0px 60px 0px;
  }
  .arrow-left {
    margin-left: -3px;
  }
  .content-state-bar {
    display: none;
  }
  .content-state-bar-responsive {
    display: initial;
  }
  .content-update {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }
  .last-update, .date-update {
    display: none;
  }
  .last-update-responsive {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #4a24b6;
  }
  .date-update-responsive {
    font-family: 'Poppins', sans-serif;
    font-size: 15px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.73;
    letter-spacing: normal;
    text-align: left;
    color: #383838;
    margin-left: 2px;
  }
  .content-input {
    flex-direction: column;
    align-items: flex-start;
  }
}
@media (max-width: 500px) { 
  .form .el-input {
    max-width: unset;
  }
}
</style>
