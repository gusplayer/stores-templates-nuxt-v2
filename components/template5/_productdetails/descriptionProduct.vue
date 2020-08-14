<template>
  <div class="description">
    <div class="left">
      <h3 class="text-desc" v-if="!activeClass">Descripción</h3>
      <div
        class="content-text-desc"
        v-if="!activeClass"
        v-html="data.info.descripcion"
      ></div>
    </div>
    <div class="right">
      <div class="payments section">
        <div class="content">
          <h3 class="title-section">Opciones de pago</h3>
        </div>
        <p>
          Puedes elegir cualquiera de estos medios. Es rápido, seguro y no tiene
          costo adicional.
        </p>
        <ul>
          <li v-if="mediospago.payco == 1">
            <h4>Pasarela de pagos epayco</h4>
            <p>
              Paga con tu tarjeta hasta 24 cuotas o en efectivo en mas de 14.000
              puntos en todo el país
            </p>
            <img
              src="https://res.cloudinary.com/komercia-components/image/upload/v1579296851/assets/pasarela-epayco.png"
              alt
            />
          </li>
          <li v-if="mediospago.payu == 1">
            <h4>Pasarela de pagos payu</h4>
            <p>
              Miles de comercios alrededor del mundo confían en nosotros para
              recibir pagos online
            </p>
            <a href="https://www.payulatam.com/co/" target="_blank">
              <img
                src="https://ecommerce.payulatam.com/logos/PayU_CO.png"
                alt="PayU"
                border="0"
              />
            </a>
          </li>
          <li v-if="mediospago.mercado_pago == 1">
            <h4>Pasarela de pagos mercadopago</h4>
            <p>
              Difiere tu compra hasta 36 cuotas con tarjeta de crédito, más de
              90 millones de personas en Latinoamérica lo están usando.
            </p>
            <img
              class="logo-pasarela"
              src="../../../assets/img/mercadopago.png"
              alt="logo mercado pago"
            />
            <img
              class="medios-mercadopago"
              src="https://api2.komercia.co/img/mercadopagoopciones.png"
              alt="medio mercadopago"
            />
          </li>
          <li v-if="mediospago.contraentrega == 1">
            <h4>Pago contra entrega</h4>
            <p>Pagas en el momento de recibir tu compra</p>
          </li>
          <li v-if="mediospago.convenir == 1">
            <h4>Pago a convenir</h4>
            <p>Nos pondremos en contacto para organizar la forma de pago</p>
          </li>
          <li v-if="mediospago.consignacion == 1">
            <h4>Consignación Bancaria</h4>
            <p>Transferencia o consignación a nuestra cuenta</p>
          </li>
          <li v-if="mediospago.efecty == 1">
            <h4>Consignación Efecty</h4>
            <p>Compra más seguro, fácil y rápido tus productos con efecty</p>
          </li>
        </ul>
      </div>
      <div class="line"></div>
      <div class="deliverys section" v-if="this.envios.envio_metodo">
        <div class="content">
          <h3 class="title-section">Opciones de Envio</h3>
        </div>
        <div
          v-if="this.envios.envio_metodo === 'precio_ciudad'"
          class="wrapper-method"
        >
          <h4 class="capitalize">
            • {{ this.envios.envio_metodo.replace('_', ' por ') }}
          </h4>
          <p class="description-method">
            El valor del envío se calcula al momento de hacer la compra de
            acuerdo a la ciudad de entrega
          </p>
        </div>
        <div
          v-if="this.envios.envio_metodo === 'tarifa_plana'"
          class="wrapper-method"
        >
          <h4 class="capitalize">
            {{ this.envios.envio_metodo.replace('_', ' ') }}
          </h4>
          <p class="description-method">
            El costo del envío es el mismo sin importar el lugar de entrega
          </p>
          <p class="price">Precio: {{ this.envios.valor | currency }} COP</p>
        </div>
        <div
          v-if="this.envios.envio_metodo === 'precio'"
          class="wrapper-method"
        >
          <h4>Precio por Total de Compra</h4>
          <p class="description-method">
            El valor del envío se calcula de acuerdo al total de compra
          </p>
        </div>
        <div
          v-if="this.envios.envio_metodo === 'gratis'"
          class="wrapper-method"
        >
          <h4>Gratis</h4>
          <p class="description-method">El valor del envío no tiene costo</p>
        </div>
      </div>
      <!-- <div class="line"></div> -->
      <!-- <div class="deliverys section">
        <div class="content">
          <h3 class="title-section">Opciones de garantía</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'descriptionProduct',
  props: {
    dataStore: Object,
    data: {},
    envio: {},
  },
  data() {
    return {
      medioEnvio: '',
      envioproducto: '',
    }
  },
  computed: {
    mediospago() {
      return this.dataStore.medios_pago
    },
    activeClass() {
      if (
        this.data.info.descripcion == '' ||
        this.data.info.descripcion == null
      ) {
        return true
      } else {
        return false
      }
    },
    envios() {
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores)
      return this.data.medioEnvio
    },
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
    },
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
.description {
  display: flex;
  width: 100%;
}
.description div {
  color: var(--color_subtext);
  line-height: 1.5;
}
.left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  padding-bottom: 10px;
  overflow: hidden;
}
.right {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
  border-left: 1px solid var(--color_border);
}
.title-section {
  color: var(--color_subtext);
  font-size: 16px;
  text-transform: uppercase;
  align-self: flex-start;
}
.right img {
  max-width: 320px;
  width: 100%;
  margin-top: 15px;
}
.section {
  margin-left: 25px;
  box-sizing: border-box;
  margin-top: 20px;
}
.text-desc {
  color: var(--color_subtext);
  font-size: 15px;
  text-transform: uppercase;
  align-self: flex-start;
  margin-top: 20px;
}
h3 {
  color: var(--color_subtext);
  font-size: 15px;
  text-transform: uppercase;
  align-self: flex-start;
}
h4 {
  margin-top: 15px;
  font-weight: bold;
  color: var(--color_subtext);
  margin-bottom: 5px;
}
li p {
  line-height: 1.4;
  font-size: 14px;
}
.icon {
  width: 50px;
  vertical-align: middle;
  margin-bottom: 10px;
  align-self: flex-start;
}
.content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
.payments {
  margin-bottom: 20px;
}
.line {
  border-top: 1px solid var(--color_border);
  width: 100%;
}
.deliverys {
  margin-top: 20px;
  margin-bottom: 20px;
}
.stage {
  display: flex;
  border-left: 0;
  flex: 1;
}
.logo-pasarela {
  width: 160px !important;
}
.capitalize {
  text-transform: capitalize;
  font-weight: 600 !important;
}
.description-method {
  line-height: 1.4;
  font-size: 14px;
}
.price {
  margin-top: 10px;
  font-size: 14px;
}
.medios-mercadopago {
  width: 100%;
  display: block;
  border-radius: 4px;
}
@media (max-width: 810px) {
  .left {
    margin-right: 15px;
  }
}
@media (max-width: 768px) {
  .left {
    margin-right: 15px;
  }
  .content-text-desc {
    margin-right: 25px;
  }
  .description {
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-right: 0px;
    margin-left: 0px;
    margin-bottom: 20px;
  }
  .section {
    margin-left: 0px;
  }
  .left {
    margin-right: 0px;
    padding-bottom: 0px;
    flex: 1;
  }
  .right {
    border-left: 0px;
  }
}
@media (max-width: 700px) {
  .content-text-desc {
    width: 100%;
    margin-right: 0px;
    margin-bottom: 10px;
  }
  .description {
    margin-bottom: 0px;
  }
  .left {
    padding-bottom: 30px;
    flex: 1;
    padding-right: 15px;
    padding-left: 15px;
  }
  .right {
    border-left: 0px;
  }
  .payments {
    border-top: 1px solid var(--color_border);
    margin-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
  }
  .section {
    margin-left: 0px;
    margin-top: 0px;
    padding-top: 10px;
  }
  .deliverys {
    margin-top: 10px;
    margin-bottom: 10px;
    padding-right: 15px;
    padding-left: 15px;
  }
}
</style>
