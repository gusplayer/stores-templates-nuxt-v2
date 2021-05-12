<template>
  <div class="description">
    <div class="left" v-if="!activeClass">
      <h3 class="text-desc">
        {{ $t('productdetail_description') }}
      </h3>
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
      <!-- <div class="wrapper-comments">
        <KoComments :dataStore="dataStore" />
      </div> -->
    </div>
    <div class="left-empty" v-else></div>
    <div class="right">
      <div class="payments section">
        <div class="content">
          <h3 class="title-section">{{ $t('productdetail_opcionesPago') }}</h3>
        </div>
        <p>
          {{ $t('productdetail_opcionesPagoMsg') }}
        </p>
        <ul style="list-style: none;">
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
      <div class="line"></div>
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
          <p class="description-method">{{ $t('productdetail_gratisMsg') }}</p>
        </div>
      </div>
      <!-- <div class="line-comments"></div> -->
    </div>
    <!-- <div class="wrapper-comments-responsive">
      <KoComments :dataStore="dataStore" />
    </div> -->
  </div>
</template>

<script>
// import KoComments from './commentsProduct'
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
  name: 'descriptionProduct',
  props: {
    dataStore: Object,
    data: {},
    envio: {},
  },
  // components: {
  //   KoComments,
  // },
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
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
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
  border-bottom: 1px solid rgba(127, 127, 139, 0.342);
}
.description div {
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
  line-height: 1.5;
}
.left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin-right: 25px; */
  padding-bottom: 10px;
  overflow: hidden;
}
.left-empty {
  flex: 2;
  width: 100%;
  display: flex;
  padding-bottom: 10px;
}
.right {
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 10px;
  /* border-left: 1px solid var(--color_border); */
  border-left: 1px solid rgba(127, 127, 139, 0.342);
}
.title-section {
  color: rgba(21, 20, 57, 0.541);
  /* color: var(--color_subtext); */
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
  color: rgba(21, 20, 57, 0.541);
  /* color: var(--color_subtext); */
  font-size: 15px;
  text-transform: uppercase;
  align-self: flex-start;
  margin-top: 20px;
}
.wrapper-comments {
  border-top: 1px solid rgba(127, 127, 139, 0.342);
  width: 100%;
}
h3 {
  color: rgba(21, 20, 57, 0.541);
  /* color: var(--color_subtext); */
  font-size: 15px;
  text-transform: uppercase;
  align-self: flex-start;
}
h4 {
  margin-top: 15px;
  font-weight: bold;
  color: rgba(21, 20, 57, 0.541);
  /* color: var(--color_subtext); */
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
  /* border-top: 1px solid var(--color_border); */
  border-top: 1px solid rgba(127, 127, 139, 0.342);
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
.logo-pasarela-daviplata {
  width: 120px !important;
}
.logo-pasarela-efecty {
  width: 100px !important;
}
.logo-pasarela-wompi {
  width: 220px !important;
}
.logo-pasarela-payu {
  width: 300px !important;
}
.logo-pasarela-payco {
  width: 280px !important;
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
.wrapper-comments-responsive {
  display: none;
}
.line-comments {
  display: none;
}
.cursor_point {
  cursor: pointer;
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
@media (max-width: 810px) {
  .left {
    margin-right: 15px;
  }
}
@media (max-width: 768px) {
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
    margin-right: 15px;
    margin-right: 0px;
    padding-bottom: 0px;
    flex: 1;
    /* height: 100%; */
  }
  .left-empty {
    flex: 0;
    width: 100%;
    display: flex;
    padding-bottom: 10px;
  }
  .right {
    border-left: 0px;
  }
  .wrapper-comments-responsive {
    display: initial;
  }
  .wrapper-comments {
    display: none;
  }
  .line-comments {
    display: initial;
    border-top: 1px solid rgba(127, 127, 139, 0.342);
    width: 100%;
  }
}
@media (max-width: 725px) {
  .editor >>> .el-tiptap-editor > .el-tiptap-editor__content {
    padding: 0px 15px;
  }
  .description {
    margin-bottom: 0px;
  }
  .left {
    padding-bottom: 10px;
    flex: 1;
  }
  .right {
    border-left: 0px;
  }
  .text-desc {
    padding-right: 15px;
    padding-left: 15px;
  }
  .payments {
    /* border-top: 1px solid var(--color_border); */
    border-top: 1px solid rgba(127, 127, 139, 0.342);
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
