<template>
  <div class="wrapper-footer" ref="background" :style="settingByTemplate">
    <div class="contenedor">
      <div class="top-footer">
        <div class="wrapper-logo">
          <div class="left-logo">
            <nuxt-link to="/" class="content-logo">
              <img
                :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
                class="logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
        </div>
        <div>
          <p class="text-top-bold">{{ $t('footer_secciones') }}</p>
          <br />
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <nuxt-link v-if="item.path" :to="item.path" class="text-top">
              {{ $t(`${item.name}`) }}
            </nuxt-link>
            <nuxt-link
              v-if="item.href && listArticulos > 0"
              :to="item.href"
              class="text-top"
            >
              {{ $t(`${item.name}`) }}
            </nuxt-link>
          </div>
        </div>
        <div>
          <p class="text-top-bold">{{ $t('footer_siguenos') }}</p>
          <br />
          <div
            v-for="(item, index) in links"
            :key="`${index}${item.nombre}`"
            class="text-icon"
          >
            <div v-if="item.link" :is="item.icon" class="icon" />
            <a
              v-if="item.link"
              :href="item.link"
              target="_blank"
              rel="noreferrer noopener"
              >{{ item.nombre }}</a
            >
          </div>
        </div>
        <div>
          <p class="text-top-bold">{{ $t('footer_suscribete') }}</p>
          <p class="text-light">
            {{ $t('footer_msg') }}
          </p>
          <br />
          <div class="input-content">
            <ValidationProvider
              ref="validate"
              name="email"
              rules="required|email"
              class="content-input-error"
            >
              <template slot-scope="{ errors }">
                <input
                  name="email"
                  class="input-text"
                  type="email"
                  :placeholder="$t('footer_email')"
                  v-model="email"
                  @keyup.enter="toSubscribe"
                  id="InputEmailOne"
                />
                <span
                  v-show="errors[0] || register"
                  class="text-error"
                  :style="register ? 'color:green' : ''"
                  >{{ errorsCheckbox || register }}</span
                >
              </template>
            </ValidationProvider>
            <button ref="colorBtn" class="btn" @click="toSubscribe">
              {{ $t('footer_enviar') }}
            </button>
          </div>
          <div class="content-checkbox">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <p class="text-checkbox">
              {{ $t('footer_checkbox') }}
            </p>
          </div>
        </div>
      </div>
      <div class="items-movil">
        <div class="item-movil-top">
          <div class="left-logo-movil">
            <img
              src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="logo"
              alt="Logo Img"
            />
            <div
              class="items-iconos"
              v-for="(item, index) in links"
              :key="`${index}${item.icon}`"
              v-if="item.link"
            >
              <a
                v-if="item.link"
                :href="item.link"
                target="_blank"
                rel="noreferrer noopener"
                ><div class="icon" :is="item.icon"
              /></a>
            </div>
          </div>
          <br />
          <div class="footer-item-secciones">
            <div
              v-for="(item, index) in secciones"
              :key="`${index}${item.name}`"
            >
              <nuxt-link v-if="item.path" :to="item.path" class="text-top">
                {{ $t(`${item.name}`) }}
              </nuxt-link>
              <nuxt-link
                v-if="item.href && listArticulos > 0"
                :to="item.href"
                class="text-top"
              >
                {{ $t(`${item.name}`) }}
              </nuxt-link>
            </div>
          </div>
          <div class="text-center">
            <p>{{ $t('footer_suscribete2') }}</p>
          </div>
          <div class="input-content">
            <ValidationProvider
              ref="validate"
              name="email"
              rules="required|email"
              class="content-input-error"
            >
              <template slot-scope="{ errors }">
                <input
                  name="email"
                  class="input-text"
                  type="email"
                  :placeholder="$t('footer_email')"
                  v-model="email"
                  @keyup.enter="toSubscribe"
                  id="InputEmailTwo"
                />
                <span
                  v-show="errors[0] || register"
                  class="text-error"
                  :style="register ? 'color:green' : ''"
                  >{{ errors[0] || register }}</span
                >
              </template>
            </ValidationProvider>
            <button class="btn" @click="toSubscribe">
              {{ $t('footer_enviar') }}
            </button>
          </div>
        </div>
        <div v-if="currentViews.length" class="item-movil-center">
          <div
            v-for="(item, index) in currentViews"
            :key="`${index}${item.name}`"
          >
            <p class="text-movil">{{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="under-footer">
      <div class="contenedor-term-con" v-if="dataStore.politicas">
        <label for="modal-toggle">{{ $t('footer_politicasyterminos') }}</label>
      </div>
      <div class="separator"></div>
      <p>{{ $t('footer_desarrollado') }}</p>
      <a href="https://komercia.co/" target="_blank" rel="noreferrer noopener">
        <img
          src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png"
          v-if="logo == true"
          class="logo2"
          alt="Logo Img"
        />
        <img
          src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png"
          v-else
          class="logo2"
          alt="Logo Img"
        />
      </a>
    </div>
    <div class="modal-container" v-if="dataStore.politicas">
      <input type="checkbox" id="modal-toggle" />
      <label class="modal-backdrop" for="modal-toggle"></label>
      <div class="modal-content">
        <div class="header-modal">
          <p class="text-top-bold">{{ $t('footer_condicionesLegales') }}</p>
          <label class="modal-close-btn" for="modal-toggle">
            <close-icon class="close-icon-modal" />
          </label>
        </div>
        <div class="tabs">
          <div class="tab" v-if="this.dataStore.politicas.cambio">
            <input id="tab-one" type="checkbox" name="tabs" />
            <label for="tab-one">{{ $t('footer_politicaCambio') }}</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.cambio"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.datos">
            <input id="tab-two" type="checkbox" name="tabs" />
            <label for="tab-two">{{ $t('footer_politicaTratamientos') }}</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.datos"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.devolucion">
            <input id="tab-three" type="checkbox" name="tabs" />
            <label for="tab-three">{{
              $t('footer_politicaDevoluciones')
            }}</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.devolucion"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.garantia">
            <input id="tab-four" type="checkbox" name="tabs" />
            <label for="tab-four">{{ $t('footer_politicaGarantia') }}</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.garantia"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.envios">
            <input id="tab-five" type="checkbox" name="tabs" />
            <label for="tab-five">{{ $t('footer_politicaEnvios') }}</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.envios"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.pagos">
            <input id="tab-six" type="checkbox" name="tabs" />
            <label for="tab-six">{{ $t('footer_politicaPagos') }}</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.pagos"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'Ko-Footer-1',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {
    if (this.settingByTemplate) {
      this.setLogo()
    }
  },
  data() {
    return {
      errorsCheckbox: 'El campo checkbox y email son obligatorios',
      checked: false,
      outerVisible: false,
      logo: null,
      email: '',
      toSubscribeResponse: false,
      register: '',
      links: [
        {
          nombre: 'Facebook',
          icon: 'facebook-icon',
          link: this.dataStore.tienda.red_facebook,
        },
        {
          nombre: 'Twitter',
          icon: 'twitter-icon',
          link: this.dataStore.tienda.red_twitter,
        },
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.tienda.red_instagram,
        },
        {
          nombre: 'Youtube',
          icon: 'youtube-icon',
          link: this.dataStore.tienda.red_youtube,
        },
      ],
      secciones: [
        {
          name: 'footer_inicio',
          path: '/',
        },
        {
          name: 'footer_carrito',
          path: '/cart',
        },
        {
          name: 'footer_contacto',
          path: '/contacto',
        },
        {
          name: 'footer_micompra',
          path: '/micompra',
        },
        {
          name: 'header_blog',
          href: '/blog',
        },
      ],
      currentViews: [],
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
  },
  destroyed() {
    this.email = ''
  },
  methods: {
    setLogo() {
      let color = getComputedStyle(this.$refs.background).getPropertyValue(
        '--background_color_1'
      )
      let colorArray = color.split(',')
      let colorInt = parseInt(colorArray[2])
      if (colorInt > 50) {
        this.logo = true
      } else {
        this.logo = false
      }
    },
    toSubscribe() {
      if (this.checked == true) {
        this.$refs.validate
          .validate()
          .then((response) => {
            if (response) {
              this.toSubscribeResponse = false
              const params = {
                correo: this.email,
                tienda: this.dataStore.tienda.id_tienda,
              }
              axios
                .post('https://templates.komercia.co/api/suscriptores', params)
                .then((result) => {
                  this.register = 'Tu correo ha sido registrado'
                  this.$message.success('Tu suscripción esta activa')
                  this.email = ''
                  this.toSubscribeResponse = true
                })
                .catch(
                  (result) => (
                    (this.register = 'Tu correo ya esta registrado'),
                    this.$message.success('Tu correo ya esta registrado')
                  )
                )
            }
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
    settingByTemplate(value) {
      let colorArray = value.split(',')
      let colorInt = parseInt(colorArray[2])
      if (colorInt > 50) {
        this.logo = true
      } else {
        this.logo = false
      }
    },
  },
}
</script>

<style scoped>
.wrapper-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_1);
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 10px;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding: 60px 30px 10px;
  display: flex;
  align-self: center;
}
.top-footer {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.top-footer > div {
  flex: 1;
}
.top-footer > div:nth-child(1) {
  flex: 2;
}
.top-footer > div:nth-child(4) {
  flex: 2;
}
.wrapper-logo {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.left-logo {
  display: flex;
  flex-direction: column;
}
.text-light {
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 10px;
}
.content-logo {
  max-width: 120px;
  width: 100%;
}
.logo {
  max-height: 70px;
  object-fit: contain;
  object-position: left;
}
.text-top {
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  margin-top: 5px;
  cursor: pointer;
}
.text-top:hover {
  color: var(--color_hover_text);
}
.text-top-bold {
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  font-weight: bold;
}
.input-text {
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--color_subtext);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 4px 14px;
  min-height: 41px;
  width: 100%;
}
.input-text::placeholder {
  color: var(--color_subtext);
  opacity: 0.7;
}
.input-text:focus,
.input-text:active {
  outline: 0;
  border: solid 2px var(--color_icon);
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.text-icon {
  display: flex;
  flex-direction: row;
}
.text-icon a {
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  margin-top: 5px;
  margin-left: 7px;
}
.text-icon a:hover {
  color: var(--color_hover_text);
}
.input-content {
  display: flex;
  flex-direction: row;
}
.input-content :nth-child(1) {
  flex: 2;
}
.input-content :nth-child(2) {
  flex: 0.5;
}
.icon {
  font-size: 19px;
  color: var(--color_icon);
}
.btn {
  border-radius: var(--radius_btn);
  color: var(--color_text_btn);
  border: solid 2px var(--color_background_btn);
  background-color: var(--color_background_btn);
  margin-left: 3%;
  padding: 4px 14px;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  max-height: 41px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  color: white;
  background-color: var(--btnhover);
  border: solid 2px var(--btnhover);
}
.content-checkbox {
  margin-top: 3px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.text-checkbox {
  margin-left: 5px;
  font-size: 12px;
  color: var(--color_subtext);
}
.items-movil {
  display: none;
}
.under-footer {
  display: flex;
  width: 100%;
  margin-top: 40px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
}
.separator {
  height: 1.1px;
  width: 100%;
  max-width: 400px;
  opacity: 0.5;
  border: solid 1px var(--color_icon);
  background: var(--color_icon);
  margin-bottom: 10px;
}
.under-footer p {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  text-align: center;
}
.contenedor-term-con {
  width: 100%;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.contenedor-term-con label {
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_icon);
  cursor: pointer;
}
.logo2 {
  width: 100px;
  opacity: 0.7;
}
#modal-toggle {
  display: none;
}
.modal-content::-webkit-scrollbar {
  background: white;
  width: 10px;
  border-top-right-radius: var(--radius_btn);
  border-bottom-right-radius: var(--radius_btn);
}
.modal-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px white;
  border-radius: 10px;
}
.modal-content::-webkit-scrollbar-thumb {
  background: black;
  border-radius: 10px;
}
.modal-content,
.modal-backdrop {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  position: fixed;
  z-index: -1;
  overflow: hidden;
  cursor: pointer;
}
.modal-backdrop {
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}
#modal-toggle:checked ~ .modal-backdrop {
  opacity: 1;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.5);
}
#modal-toggle:checked ~ .modal-content {
  opacity: 1;
  z-index: 15;
  background-color: #fff;
  overflow: auto;
  pointer-events: auto;
  cursor: auto;
  border-radius: var(--radius_btn);
}
.modal-content {
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  max-height: 450px;
  max-width: 1000px;
}
.header-modal {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.modal-close-btn {
  display: inline-block;
  cursor: pointer;
  right: 10px;
}
.close-icon-modal {
  font-size: 30px;
  color: black;
}
.close-icon-modal:hover {
  color: gray;
}
.modal-close-btn svg {
  transition: 0.2s;
}
.modal-close-btn:hover svg {
  transform: rotate(90deg);
}
.tabs {
  width: 100%;
  padding: 10px 20px;
}
.tab {
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  color: #000;
  overflow: hidden;
}
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab label {
  position: relative;
  display: block;
  padding: 0 0 0 1em;
  background: #e6e6e6;
  color: var(--color_text);
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
}
.tab-content {
  max-height: 0;
  overflow: hidden;
  color: black;
  background: white;
  border: 1px solid #e6e6e6;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
.tab-content div {
  color: black;
  margin: 1em;
}
.tab input:checked ~ .tab-content {
  max-height: 100%;
}
.tab label::after {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 3em;
  height: 3em;
  line-height: 3;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
.tab input[type='checkbox'] + label::after {
  color: var(--color_subtext);
  content: '+';
}
.tab input[type='radio'] + label::after {
  content: '\25BC';
}
.tab input[type='checkbox']:checked + label::after {
  transform: rotate(315deg);
}
.tab input[type='radio']:checked + label::after {
  transform: rotateX(180deg);
}
@media (max-width: 768px) {
  .contenedor {
    padding: 60px 20px 10px;
  }
  .top-footer > div {
    margin-right: 30px;
  }
  .top-footer > div:nth-child(4) {
    margin-right: 0px;
  }
  .top-footer {
    margin-top: 23px;
  }
}
@media (max-width: 600px) {
  #modal-toggle:checked ~ .modal-backdrop {
    opacity: 0;
  }
  .contenedor {
    padding: 20px 15px 10px;
  }

  .modal-content {
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
  }
  .left-logo {
    display: none;
  }
  .top-footer {
    display: none;
  }
  .separator {
    max-width: 300px;
  }
  .logo {
    width: 141px;
    height: 70px;
  }
  .logo2 {
    width: 100px;
    opacity: 0.7;
  }
  .under-footer {
    margin-bottom: 28px;
  }
  .items-movil {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .item-movil-center {
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 15px;
  }
  .item-movil-center > div:nth-child(2),
  .item-movil-center > div:nth-child(4),
  .item-movil-center > div:nth-child(6),
  .item-movil-center > div:nth-child(8) {
    text-align: right;
  }
  .footer-item-secciones {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-row-gap: 15px;
  }
  .text-movil {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--color_text);
    margin-top: 10px;
  }
  .item-movil-top {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .left-logo-movil {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .text-center p {
    font-size: 17px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--color_text);
    margin-top: 20px;
    text-align: center;
  }
  .input-content {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 100%;
  }

  .items-icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .icon {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--color_icon);
    margin-left: 7px;
  }
  .btn {
    margin-top: 10px;
    padding: 8px 14px;
    margin-left: 0px;
  }
}
</style>
