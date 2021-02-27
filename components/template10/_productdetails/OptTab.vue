<template>
  <div class="content-opt-tab">
    <div class="head-content">
      <div
        class="tab"
        @click="selectTag1"
        :class="selecttag == 1 ? 'show-select-active' : ''"
      >
        <p class="tittle">{{ $t('productdetail_description') }}</p>
      </div>
      <div
        class="tab"
        @click="selectTag2"
        :class="selecttag == 2 ? 'show-select-active' : ''"
      >
        <p class="tittle">{{ $t('productdetail_opcionesPago') }}</p>
      </div>
      <div
        class="tab"
        @click="selectTag3"
        :class="selecttag == 3 ? 'show-select-active' : ''"
      >
        <p class="tittle">{{ $t('productdetail_opinionesEnvio') }}</p>
      </div>
    </div>

    <div class="content-tab">
      <div
        class="item-content descripcion"
        v-html="data.info.descripcion"
        v-if="focusbtn1"
        style="color: #777;"
      ></div>
      <div class="item-content opcpago" v-if="focusbtn2">
        <ul>
          <li v-if="mediospago.consignacion == 1">
            <h4>{{ $t('productdetail_consignacionBancaria') }}</h4>
            <p>{{ $t('productdetail_consignacionBancariaMsg') }}</p>
          </li>
          <li v-if="mediospago.contraentrega == 1">
            <h4>{{ $t('productdetail_PagoContra') }}</h4>
            <p>{{ $t('productdetail_PagoContraMsg') }}</p>
          </li>
          <li v-if="mediospago.convenir == 1">
            <h4>{{ $t('productdetail_pagoConvenir') }}</h4>
            <p>{{ $t('productdetail_pagoConvenirMsg') }}</p>
          </li>
          <li v-if="mediospago.credibanco == 1">
            <h4>{{ $t('productdetail_ConsignacionCredibanco') }}</h4>
            <p>
              {{ $t('productdetail_ConsignacionCredibancoMsg') }}
            </p>
            <a
              href="https://www.credibanco.com/"
              target="_blank"
              rel="noreferrer noopener"
              class="cursor_point"
            >
              <img
                class="logo-pasarela"
                src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335270/Templates%20Modos%20de%20pago/Credibanco_lprsof.png"
                alt="logo Credibanco"
              />
            </a>
          </li>
          <li v-if="mediospago.daviplata == 1">
            <h4>{{ $t('productdetail_Consignaciondaviplata') }}</h4>
            <p>
              {{ $t('productdetail_ConsignaciondaviplataMsg') }}
            </p>
            <img
              class="logo-pasarela-daviplata"
              src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333767/Templates%20Modos%20de%20pago/5c89c897e1917d9209a762af_davi_qn90y9.png"
              alt="logo daviPlata"
            />
          </li>
          <li v-if="mediospago.efecty == 1">
            <h4>{{ $t('productdetail_ConsignacionEfecty') }}</h4>
            <p>{{ $t('productdetail_ConsignacionEfectyMsg') }}</p>
            <a
              href="https://www.efecty.com.co/web/"
              target="_blank"
              rel="noreferrer noopener"
              class="cursor_point"
            >
              <img
                class="logo-pasarela-efecty"
                src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333023/Templates%20Modos%20de%20pago/Efecty-png_q3fvog.png"
                alt="logo efecty"
              />
            </a>
          </li>
          <li v-if="mediospago.mercado_pago == 1">
            <h4>{{ $t('productdetail_PasarelaMercado') }}</h4>
            <p>
              {{ $t('productdetail_PasarelaMercadoMsg') }}
            </p>
            <a
              href="https://www.mercadopago.com"
              target="_blank"
              rel="noreferrer noopener"
              class="cursor_point"
            >
              <img
                class="logo-pasarela-daviplata"
                src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606331948/Templates%20Modos%20de%20pago/mercadopago_jyalpa.png"
                alt="logo mercadopago"
              />
            </a>
          </li>
          <li v-if="mediospago.nequi == 1">
            <h4>{{ $t('productdetail_Consignacionnequi') }}</h4>
            <p>
              {{ $t('productdetail_ConsignacionnequiMsg') }}
            </p>
            <a
              href="https://www.nequi.com.co/"
              target="_blank"
              rel="noreferrer noopener"
              class="cursor_point"
            >
              <img
                class="logo-pasarela-daviplata"
                src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606333553/Templates%20Modos%20de%20pago/Nequi_by_Bancolombia_hxhkhb.png"
                alt="logo nequi"
              />
            </a>
          </li>
          <li v-if="mediospago.payco == 1">
            <h4>{{ $t('productdetail_PasarelaEpayco') }}</h4>
            <p>
              {{ $t('productdetail_PasarelaEpaycoMsg') }}
            </p>
            <img
              class="logo-pasarela-payco"
              src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1579296851/assets/pasarela-epayco.png"
              alt="Pasarela de pagos epayco"
            />
          </li>
          <li v-if="mediospago.payu == 1">
            <h4>{{ $t('productdetail_PasarelaPayu') }}</h4>
            <p>
              {{ $t('productdetail_PasarelaPayuMsg') }}
            </p>
            <a
              href="https://www.payulatam.com/co/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                class="logo-pasarela-payu"
                src="https://ecommerce.payulatam.com/logos/PayU_CO.png"
                alt="PayU"
                border="0"
              />
            </a>
          </li>
          <li v-if="mediospago.wompi == 1">
            <h4>{{ $t('productdetail_Consignacionwompi') }}</h4>
            <p>
              {{ $t('productdetail_PasarelaPayuMsg') }}
            </p>
            <a
              href="https://wompi.co/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                class="logo-pasarela-wompi"
                src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1606335739/Templates%20Modos%20de%20pago/wompi_jxuitu.png"
                alt="wompi"
                border="0"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="item-content opcenvio" v-if="focusbtn3">
        <div class="deliverys section" v-if="this.envios.envio_metodo">
          <div class="content">
            <h3 class="title-section">
              {{ $t('productdetail_opinionesEnvio') }}
            </h3>
          </div>
          <div
            v-if="this.envios.envio_metodo === 'precio_ciudad'"
            class="wrapper-method"
          >
            <h4 class="capitalize">
              • {{ this.envios.envio_metodo.replace('_', ' por ') }}
            </h4>
            <p class="description-method">
              {{ $t('productdetail_opinionesEnvioMsg1') }}
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
              {{ $t('productdetail_opinionesEnvioMsg2') }}
            </p>
            <p class="price">
              {{ $t('cart_precio') }} {{ this.envios.valor | currency }}
            </p>
          </div>
          <div
            v-if="this.envios.envio_metodo === 'precio'"
            class="wrapper-method"
          >
            <h4>{{ $t('productdetail_precioTotalCompra') }}</h4>
            <p class="description-method">
              {{ $t('productdetail_precioTotalCompraMsg') }}
            </p>
          </div>
          <div
            v-if="this.envios.envio_metodo === 'gratis'"
            class="wrapper-method"
          >
            <h4>{{ $t('productdetail_gratis') }}</h4>
            <p class="description-method">
              {{ $t('productdetail_gratisMsg') }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    dataStore: Object,
    data: {},
    envio: {},
  },
  mounted() {},
  data() {
    return {
      medioEnvio: '',
      envioproducto: '',
      selecttag: 1,
      focusbtn1: true,
      focusbtn2: false,
      focusbtn3: false,
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
  methods: {
    selectTag1() {
      this.selecttag = 1
      this.focusbtn1 = true
      this.focusbtn2 = false
      this.focusbtn3 = false
    },
    selectTag2() {
      this.selecttag = 2
      this.focusbtn1 = false
      this.focusbtn2 = true
      this.focusbtn3 = false
    },
    selectTag3() {
      this.selecttag = 3
      this.focusbtn1 = false
      this.focusbtn2 = false
      this.focusbtn3 = true
    },
  },
}
</script>
<style scoped>
.tab {
  @apply w-auto flex flex-col justify-center items-center px-4 cursor-pointer;
}

.item-content {
  @apply w-full flex flex-col justify-start items-start pb-4;
}

.content_product_description {
  color: #77777;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply w-full flex flex-col justify-center items-start;
}
h3 {
  color: #606060;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
h4 {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #606060;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.42857143;
  @apply w-full flex flex-col justify-center items-start mb-5;
}
li p {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #777;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 15px;
}
.description-method,
.price {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #777;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 15px;
}
img {
  max-width: 300px;
  width: 30%;
  margin-top: 15px;
}
@screen sm {
  .content-opt-tab {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-tab {
    @apply w-full flex flex-col justify-center items-center mt-6;
    border-bottom: 1px solid #ededed;
  }
  .head-content {
    @apply w-full grid grid-cols-1 gap-2 justify-center items-center mb-40;
  }
  .tittle {
    color: #888;
    font-size: 14px;
    background-color: #f9f9f9;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply w-full h-40 flex justify-center items-center font-semibold uppercase transition-all ease-in duration-0.2;
  }
  .show-select-active {
    background-color: #f9f9f9;
    border-bottom: 2px solid #eb7025;
  }
  .show-select-active .tittle {
    color: #eb7025;
  }
}
@media (min-width: 425px) {
  .head-content {
    @apply grid grid-cols-3 mb-40;
  }
  .tittle {
    font-size: 12px;
    background-color: #fff;
    @apply text-center;
  }
}
@screen md {
  .content-opt-tab {
    border-color: #ededed;
    @apply flex flex-row justify-start items-start border mt-0;
  }
  .head-content {
    @apply w-full flex flex-row justify-start items-start mb-0;
    border-bottom: 1px solid #ededed;
  }
  .head-content {
    @apply w-6/0 flex flex-col justify-start items-start mb-0 gap-0;
  }
  .tab {
    border-bottom: 1px solid #ededed;
    @apply w-full flex justify-start items-center;
  }
  .tittle {
    font-size: 14px;
    background-color: #fff;
    @apply w-full h-50 text-center justify-start items-center pl-20;
  }
  .content-tab {
    border-color: #ededed;
    @apply w-full flex flex-row justify-start items-start mt-0 border transition-all ease-in duration-0.2;
  }
  .show-select-active {
    background-color: #fff;
    border-color: #eb7025;
    border-bottom: 1px solid #ededed;
    @apply border-l-4 w-full;
  }
  .show-select-active .tittle {
    color: #eb7025;
  }
  .content-tab {
    @apply p-40;
  }
}
@screen lg {
  .head-content {
    width: 400px;
  }
}
</style>
