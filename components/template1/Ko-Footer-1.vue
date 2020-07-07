<template>
  <div class="wrapper-footer" ref="background">
    <div class="contenedor">
      <div class="top-footer">
        <div class="wrapper-logo">
          <div class="left-logo">
            <nuxt-link to="/" class="content-logo">
              <img
                :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
                class="logo"
              />
            </nuxt-link>
            <p class="text-light">Productos de alta calidad hechos a mano.</p>
          </div>
        </div>
        <div>
          <p class="text-top-bold">Secciones</p>
          <br />
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <nuxt-link :to="item.path" class="text-top">{{
              item.name
            }}</nuxt-link>
          </div>
        </div>
        <div>
          <p class="text-top-bold">Síguenos</p>
          <br />
          <div
            v-for="(item, index) in links"
            :key="`${index}${item.nombre}`"
            class="text-icon"
          >
            <div v-if="item.link" :is="item.icon" class="icon" />
            <a v-if="item.link" :href="item.link">{{ item.nombre }}</a>
          </div>
        </div>
        <div>
          <p class="text-top-bold">Suscríbete</p>
          <p class="text-light">
            Registra tu correo para recibir información sobre promociones y
            nuevos productos.
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
                  placeholder="Correo electrónico"
                  v-model="email"
                  @keyup.enter="toSubscribe"
                />
                <span
                  v-show="errors[0] || register"
                  class="text-error"
                  :style="register ? 'color:green' : ''"
                  >{{ errors[0] || register }}</span
                >
              </template>
            </ValidationProvider>
            <button ref="colorBtn" class="btn" @click="toSubscribe">
              Enviar
            </button>
          </div>
        </div>
      </div>
      <div class="items-movil">
        <div class="item-movil-top">
          <div class="left-logo-movil">
            <img
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              class="logo"
            />
            <div
              class="items-iconos"
              v-for="(item, index) in links"
              :key="`${index}${item.icon}`"
              v-if="item.link"
            >
              <div class="icon" :is="item.icon" />
            </div>
          </div>
          <br />
          <div class="footer-item-secciones">
            <div
              v-for="(item, index) in secciones"
              :key="`${index}${item.name}`"
            >
              <nuxt-link :to="item.path" class="text-top">{{
                item.name
              }}</nuxt-link>
            </div>
          </div>
          <div class="text-center">
            <p>Suscríbite a nuestras promociones</p>
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
                  placeholder="Correo electrónico"
                  v-model="email"
                  @keyup.enter="toSubscribe"
                />
                <span
                  v-show="errors[0] || register"
                  class="text-error"
                  :style="register ? 'color:green' : ''"
                  >{{ errors[0] || register }}</span
                >
              </template>
            </ValidationProvider>
            <button class="btn" @click="toSubscribe">Enviar</button>
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
        <label class="modal-btn" for="modal-toggle">Condiciones legales</label>
      </div>
      <div class="separator"></div>
      <p>Desarrollado por Komercia Latam</p>
      <a href="https://komercia.co/">
        <img
          src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png"
          class="logo2"
        />
      </a>
    </div>
    <div class="modal-container" v-if="dataStore.politicas">
      <input type="checkbox" id="modal-toggle" />
      <label class="modal-backdrop" for="modal-toggle"></label>
      <div class="modal-content">
        <div class="header-modal">
          <p class="text-top-bold">Condiciones legales</p>
          <label class="modal-close-btn" for="modal-toggle">
            <close-icon class="close-icon-modal" />
          </label>
        </div>
        <div class="tabs">
          <div class="tab" v-if="this.dataStore.politicas.cambio">
            <input
              type="radio"
              id="rd1"
              name="rd"
              style="visibility: hidden;"
            />
            <label class="tab-label" for="rd1">Política de cambio</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.cambio"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.datos">
            <input
              type="radio"
              id="rd2"
              name="rd"
              style="visibility: hidden;"
            />
            <label class="tab-label" for="rd2"
              >Políticas de tratamiento de datos</label
            >
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.datos"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.devolucion">
            <input
              type="radio"
              id="rd3"
              name="rd"
              style="visibility: hidden;"
            />
            <label class="tab-label" for="rd3"
              >Politica de devoluciones / retracto</label
            >
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.devolucion"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.garantia">
            <input
              type="radio"
              id="rd4"
              name="rd"
              style="visibility: hidden;"
            />
            <label class="tab-label" for="rd4">Politica de garantia</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.garantia"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.envios">
            <input
              type="radio"
              id="rd5"
              name="rd"
              style="visibility: hidden;"
            />
            <label class="tab-label" for="rd5">Politica de envios</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.envios"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.pagos">
            <input
              type="radio"
              id="rd6"
              name="rd"
              style="visibility: hidden;"
            />
            <label class="tab-label" for="rd6">Politica de envios</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.pagos"></div>
            </div>
          </div>
          <div class="tab">
            <input
              type="radio"
              id="rd8"
              name="rd"
              style="visibility: hidden;"
            />
            <label for="rd8" class="tab-close">Cerrar todo</label>
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
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
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
          name: 'Inicio',
          path: '/',
        },
        {
          name: 'Carrito',
          path: '/template1/cart',
        },
        {
          name: 'Contacto',
          path: '/template1/contacto',
        },
      ],
      currentViews: [],
    }
  },
  destroyed() {
    this.email = ''
  },
  methods: {
    toSubscribe() {
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
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
  },
}
</script>

<style scoped>
div.wrapper-footer {
  --logo_width: 70px;
}
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
  max-width: var(--logo_width);
}
.logo {
  width: 100%;
  object-fit: contain;
  object-position: center;
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
  color: var(--color_icon);
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
  border: solid 2px var(--color_border_btn);
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
  color: var(--color_icon);
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
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
  margin-left: 3%;
  padding: 4px 14px;
  font-weight: bold;
  width: 100%;
  min-height: 41px;
  max-height: 41px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  color: white;
  background-color: var(--btnhover);
  border: solid 2px var(--btnhover);
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
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  cursor: pointer;
}
.logo2 {
  width: 100px;
  opacity: 0.7;
}
.content-btn-legal {
  display: flex;
  justify-content: flex-end;
  width: 100%;
}
.content-btn-legal > button {
  max-width: 120px;
}
.content-text-legal {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.tabs {
  overflow: hidden;
}
.tab {
  width: 100%;
  color: var(--color_text);
  overflow: hidden;
}
.tab-label {
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background: white;
  font-weight: bold;
  cursor: pointer;
}
.tab-label:hover {
  background: white;
}
.tab-label::after {
  content: '\276F';
  width: 1em;
  height: 1em;
  text-align: center;
  transition: all 0.35s;
}
.tab-content {
  max-height: 0;
  padding: 0 1em;
  color: var(--color_subtext);
  background: rgba(231, 231, 231, 0.74);
  transition: all 0.35s;
}
.tab-close {
  display: flex;
  justify-content: flex-end;
  padding: 1em;
  font-size: 12px;
  background: white;
  cursor: pointer;
}
.tab-close:hover {
  background: white;
}
input:checked + .tab-label {
  background: white;
}
input:checked + .tab-label::after {
  transform: rotate(90deg);
}
input:checked ~ .tab-content {
  max-height: 100vh;
  padding: 1em;
}
#modal-toggle {
  display: none;
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
  text-align: center;
  width: 100%;
  height: 100%;
  max-height: 500px;
  max-width: 900px;
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
  position: absolute;
  display: inline-block;
  cursor: pointer;
  right: 10px;
}
.close-icon-modal {
  font-size: 30px;
  color: var(--color_background_btn);
}
.close-icon-modal:hover {
  color: var(--btnhover);
}
.modal-close-btn svg {
  transition: 0.2s;
}
.modal-close-btn:hover svg {
  transform: rotate(90deg);
}

@media (max-width: 768px) {
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
    padding: 20px 30px 10px;
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
  .under-footer p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--color_text);
    text-align: center;
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
    grid-column-gap: 30px;
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
    border-radius: var(--radius_btn);
    color: var(--color_text_btn);
    border: solid 2px var(--color_border_btn);
    background-color: var(--color_background_btn);
    margin-top: 10px;
    padding: 8px 14px;
    margin-left: 0px;
  }
}
</style>
