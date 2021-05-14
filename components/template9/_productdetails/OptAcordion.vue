<template>
  <div class="content-acordion">
    <button class="accordion">{{ $t('productdetail_description') }}</button>
    <div class="panel">
      <div class="editor" v-if="data.info.descripcion">
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
    <button class="accordion">{{ $t('productdetail_opcionesPago') }}</button>
    <div class="panel">
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
          <a href="https://wompi.co/" target="_blank" rel="noreferrer noopener">
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
    <button class="accordion">{{ $t('productdetail_opinionesEnvio') }}</button>
    <div class="deliverys section panel" v-if="this.envios.envio_metodo">
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
      <div v-if="this.envios.envio_metodo === 'precio'" class="wrapper-method">
        <h4>{{ $t('productdetail_precioTotalCompra') }}</h4>
        <p class="description-method">
          {{ $t('productdetail_precioTotalCompraMsg') }}
        </p>
      </div>
      <div v-if="this.envios.envio_metodo === 'gratis'" class="wrapper-method">
        <h4>{{ $t('productdetail_gratis') }}</h4>
        <p class="description-method">{{ $t('productdetail_gratisMsg') }}</p>
      </div>
    </div>
  </div>
</template>
<script>
import {
  Doc,
  Paragraph,
  Text,
  Heading,
  Bold,
  Italic,
  Underline,
  Strike,
  Code,
  CodeBlock,
  Blockquote,
  Link,
  BulletList,
  OrderedList,
  ListItem,
  TodoList,
  TodoItem,
  Iframe,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Image,
  TextAlign,
  LineHeight,
  Indent,
  HorizontalRule,
  HardBreak,
  TrailingNode,
  History,
  TextColor,
  TextHighlight,
  FormatClear,
  FontSize,
  Preview,
  Print,
  SelectAll,
} from 'element-tiptap'
export default {
  components: {},
  props: {
    dataStore: Object,
    data: {},
    envio: {},
  },
  mounted() {
    var acc = document.getElementsByClassName('accordion')
    var i

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 'px'
        }
      })
    }
  },
  data() {
    return {
      medioEnvio: '',
      envioproducto: '',
      extensions: [
        new Doc(),
        new Paragraph(),
        new Text(),
        new Heading({ level: 5, bubble: true }),
        new Bold({ bubble: true }),
        new Italic({ bubble: true }),
        new Underline({ bubble: true }),
        new Strike({ bubble: true }),
        new Code({ bubble: true }),
        new CodeBlock({ bubble: true }),
        new Blockquote({ bubble: true }),
        new Link({ bubble: true }),
        new BulletList({ bubble: true }),
        new OrderedList({ bubble: true }),
        new ListItem({ bubble: true }),
        new TodoList({ bubble: true }),
        new TodoItem({ bubble: true }),
        new Iframe({ bubble: true }),
        new Table({
          resizable: true,
          bubble: true,
        }),
        new TableHeader(),
        new TableRow(),
        new TableCell(),
        new Image({
          urlPattern: '',
          uploadRequest: '',
          bubble: true,
        }),
        new TextAlign({
          alignments: ['left', 'center', 'right', 'justify'],
          bubble: true,
        }),
        new LineHeight({
          lineHeights: ['100%', '200%', '300%'],
        }),
        new Indent({
          minIndent: 0,
          maxIndent: 7,
        }),
        new HorizontalRule({ bubble: true }),
        new HardBreak(),
        new TrailingNode(),
        new History(),
        new TextColor({
          colors: [
            '#f44336',
            '#e91e63',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#4caf50',
            '#8bc34a',
            '#cddc39',
            '#ffeb3b',
            '#ffc107',
            '#ff9800',
            '#ff5722',
            '#000000',
          ],
          bubble: true,
        }),
        new TextHighlight({
          colors: [
            '#f44336',
            '#e91e63',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#4caf50',
            '#8bc34a',
            '#cddc39',
            '#ffeb3b',
            '#ffc107',
            '#ff9800',
            '#ff5722',
            '#000000',
          ],
          bubble: true,
        }),
        new FormatClear(),
        new FontSize({
          fontSizes: [
            '8',
            '10',
            '12',
            '14',
            '16',
            '18',
            '20',
            '24',
            '30',
            '36',
            '48',
            '60',
            '72',
          ],
          bubble: true,
        }),
        new Preview(),
        new Print(),
        new SelectAll(),
      ],
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
.editor {
  width: 100%;
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
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content h2 {
  font-size: 1.5em;
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content h3 {
  font-size: 1.17em;
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content h4 {
  font-size: 1.12em;
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content h5 {
  font-size: 0.83em;
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content p {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content span {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content blockquote {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content code {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content ul {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content ol {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content li {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content pre {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content strong {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content em {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content s {
  font-family: var(--font-style-2);
}
.editor >>> .el-tiptap-editor__content .image-view__body__image {
  cursor: none;
}
.editor >>> .el-popper.el-tiptap-image-popper {
  display: none;
}
.content-acordion {
  @apply w-full flex flex-col justify-items-center items-start mt-40;
}
.accordion {
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
  background-color: #fff;
  font-size: 16px;
  letter-spacing: 1px;
  color: #000;
  cursor: pointer;
  font-weight: 800;
  /* line-height: 38px; */
  height: 62px;
  width: 100%;
  text-transform: capitalize;
  border: none;
  text-align: left;
  transition: 0.4s;
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}
.accordion:after {
  content: '\002B';
  color: #000;
  font-size: 22px;
  font-weight: 400;
  float: left;
  margin-right: 10px;
  @apply flex justify-center items-center;
}
.active:after {
  content: '\2212';
}
.panel {
  width: 100%;
  /* padding: 0 18px; */
  background-color: white;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.2s ease-out;
}
.content_product_description {
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
  color: #333333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42857143;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
h3 {
  color: #2c2930;
  font-size: 15px;
  font-weight: 600;
  text-transform: uppercase;
  align-self: flex-start;
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
}
h4 {
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
  color: #2c2930;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.42857143;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 5px;
}
li p {
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 15px;
}
.description-method {
  font-family: 'Roboto', Helvetica, Arial, sans-serif !important;
  color: #333;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  margin-bottom: 15px;
}
img {
  max-width: 320px;
  width: 50%;
  margin-top: 15px;
}
</style>
