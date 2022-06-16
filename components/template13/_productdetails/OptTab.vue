<template>
  <div
    v-if="settingByTemplate13"
    class="content-opt-tab"
    :style="[
      settingByTemplate13[0].detailsProduct,
      settingByTemplate13[0].setting13General,
      {
        '--font-style-1':
          this.settingByTemplate13[0].setting13General &&
          this.settingByTemplate13[0].setting13General.fount_1
            ? this.settingByTemplate13[0].setting13General.fount_1
            : 'Poppins',
      },
    ]"
  >
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item :title="$t('productdetail_description')" name="1">
        <div class="editor">
          <div v-if="data.info.descripcion">
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
      </el-collapse-item>
      <el-collapse-item :title="$t('productdetail_opcionesPago')" name="2">
        <div class="item-content opcpago">
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
            <li v-if="mediospago.wepay4u == 1">
              <h4>WePay4U</h4>
              <p>
                {{ $t('text_pago_WePay4U') }}
              </p>
              <a
                href="https://wepay4u.com/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  class="logo-pasarela-wompi"
                  src="https://res.cloudinary.com/komerciaacademico/image/upload/v1639078440/wePay4u/powered_by_z7sgqp.png"
                  alt="wePay4u"
                  border="0"
                />
              </a>
            </li>
            <li v-if="mediospago.tu_compra == 1">
              <h4>Tucompra</h4>
              <p>
                {{ $t('text_pago_Tucompra') }}
              </p>
              <a
                href="https://tucompra.com.co/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  class="logo-pasarela-wompi"
                  src="https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/tucompra_ss0oys.png"
                  alt="tu_compra"
                  border="0"
                />
              </a>
            </li>
            <li v-if="mediospago.flow == 1">
              <h4>Tucompra</h4>
              <p>
                {{ $t('text_pago_flowInfo') }}
              </p>
              <a
                href="https://www.flow.cl/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <img
                  class="logo-pasarela-wompi"
                  src="https://res.cloudinary.com/komerciaacademico/image/upload/v1645131256/komerica/flow_jevnwy.png"
                  alt="flow"
                  border="0"
                />
              </a>
            </li>
          </ul>
        </div>
      </el-collapse-item>
      <el-collapse-item :title="$t('productdetail_opinionesEnvio')" name="3">
        <div class="item-content opcenvio">
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
                {{ $t('cart_precio') }}
                {{
                  this.envios.valor
                    | currency(
                      dataStore.tienda.codigo_pais,
                      dataStore.tienda.moneda
                    )
                }}
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
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
<script>
import extensions from '../../../mixins/elemenTiptap.vue'
import currency from '../../../mixins/formatCurrent'
export default {
  mixins: [currency, extensions],
  props: {
    dataStore: Object,
    data: {},
    envio: {},
    settingByTemplate13: Array,
  },
  data() {
    return {
      activeNames: ['1'],
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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      this.data.medioEnvio = JSON.parse(this.dataStore.medios_envio.valores)
      return this.data.medioEnvio
    },
  },
  methods: {
    handleChange(val) {
      // console.log(val);
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
.editor {
  width: 100%;
  color: tras;
}
.editor >>> .el-tiptap-editor > .el-tiptap-editor__content {
  border: none;
  padding: 0px 5px;
  background-color: transparent;
}
.editor >>> .el-tiptap-editor__menu-bubble {
  display: none;
}
.editor >>> .el-tiptap-editor__content h1 {
  font-size: 2em;
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content h2 {
  font-size: 1.5em;
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content h3 {
  font-size: 1.17em;
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content h4 {
  font-size: 1.12em;
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content h5 {
  font-size: 0.83em;
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content p {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content span {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content blockquote {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content code {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content ul {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content ol {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content li {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content pre {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content strong {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content em {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content s {
  font-family: var(--font-style-1);
}
.editor >>> .el-tiptap-editor__content .image-view__body__image {
  cursor: none;
  pointer-events: none;
}
.editor >>> .el-popper.el-tiptap-image-popper {
  display: none;
}

.item-content {
  @apply w-full flex flex-col justify-start items-start pb-4;
}

.content-opt-tab >>> .el-collapse {
  border-top: transparent;
  border-bottom: transparent;
  @apply w-full;
}

.content-opt-tab >>> .el-collapse-item__wrap {
  will-change: height;
  background-color: transparent;
  border-bottom: transparent;
}
.content-opt-tab >>> .el-collapse-item__header {
  font-size: 16px;
  font-family: var(--font-style-1) !important;
  color: var(--color_text);
  background-color: transparent;
  border-bottom: transparent;
  @apply font-semibold;
}
.content-opt-tab >>> .el-collapse-item__header.is-active {
  border-bottom: none;
}
.content-opt-tab >>> .el-collapse-item__arrow {
  color: var(--border);
}
.content_product_description {
  color: var(--color_subtext);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  font-family: var(--font-style-1) !important;
  @apply w-full flex flex-col justify-center items-start;
}
h3 {
  color: var(--color_text);
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
  font-family: var(--font-style-1) !important;
}
h4 {
  font-family: var(--font-style-1) !important;
  color: var(--color_text);
  font-size: 15px;
  font-weight: 600;
  line-height: 1.42857143;
  @apply w-full flex flex-col justify-center items-start mb-5;
}
li p {
  font-family: var(--font-style-1) !important;
  color: var(--color_subtext);
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 15px;
}
.description-method,
.price {
  font-family: var(--font-style-1) !important;
  color: var(--color_subtext);
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
  .tittle {
    color: var(--color_subtext);
    font-size: 14px;
    background-color: transparent;
    font-family: var(--font-style-1) !important;
    @apply w-full h-40 flex justify-center items-center font-normal uppercase transition-all ease-in duration-0.2;
  }
}
@media (min-width: 425px) {
  .head-content {
    @apply grid grid-cols-3 mb-40;
  }
  .tittle {
    font-size: 12px;
    @apply text-center;
  }
}
@screen md {
  .content-opt-tab {
    @apply flex flex-col justify-start items-start mt-0;
  }
  .tittle {
    font-size: 14px;
    @apply w-full h-50 text-center justify-center items-center;
  }
}
</style>
