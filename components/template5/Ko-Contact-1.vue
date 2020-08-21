<template>
  <div class="wrapper-contact" :style="settingByTemplate">
    <div class="contact">
      <div class="contact-content">
        <div>
          <p class="contact-text-title">Contáctanos</p>
          <p class="contact-text-subtitle">
            Siempre estamos atentos a escuchar nuestros clientes, por favor
            cuentanos tus opiniones y dudas.
          </p>
        </div>
        <div class="wrapper-icon">
          <div class="contact-content-icon">
            <div
              v-for="(item2, index) in dataContact"
              :key="`${index}${item2.dato}`"
              class="text-icon"
            >
              <div v-if="item2.dato" :is="item2.icon" class="contact-icon" />
              <a v-if="item2.dato" :href="item2.dato">{{ item2.dato }}</a>
            </div>
          </div>
          <div class="contact-content-icon">
            <div
              v-for="(item, index) in links"
              :key="`${index}${item.nombre}`"
              class="text-icon"
            >
              <div v-if="item.link" :is="item.icon" class="icon" />
              <a v-if="item.link" :href="item.link">{{ item.nombre }}</a>
            </div>
          </div>
        </div>
        <div class="separator"></div>
        <div v-if="dataStore.geolocalizacion.length">
          <div>
            <p class="contact-text-sub">Visita nuestra tienda</p>

            <p class="contact-text-subtitle2">
              {{ this.dataStore.geolocalizacion[0].direccion }}
            </p>
          </div>
          <iframe
            :src="`https://maps.google.com/maps?q=${this.dataStore.geolocalizacion[0].latitud},${this.dataStore.geolocalizacion[0].longitud}&hl=es;z=14&amp;output=embed`"
            width="100%"
            height="250"
            frameborder="0"
            style="border: 0;"
            allowfullscreen
          ></iframe>
          <div class="under-text">
            <p class="contact-text-subtitle3">
              Horario de atención:
              <br />
              {{ this.dataStore.geolocalizacion[0].horario }}
            </p>
            <a class="contact-text-subtitle4">¿Cómo llegar?</a>
          </div>
        </div>
      </div>

      <div class="contact-content">
        <div class="contact-item-text">
          <p class="contact-text-title">Mensajes</p>
          <p class="contact-text-subtitles">
            Envíanos un mensaje y pronto estaremos en contacto.
          </p>
        </div>
        <ValidationObserver
          ref="observer"
          tag="form"
          class="contact-content-rigth"
        >
          <p>NOMBRE</p>
          <validation-provider name="nombre" rules="required">
            <template slot-scope="{ errors }">
              <input
                name="nombre"
                type="text"
                v-model="nombre"
                class="input-text"
                placeholder="Escribe tu nombre"
              />
              <span class="text-error" v-show="errors[0]">{{ errors[0] }}</span>
            </template>
          </validation-provider>
          <P>E-MAIL</P>
          <validation-provider name="email" rules="required|email">
            <template slot-scope="{ errors }">
              <input
                name="email"
                type="email"
                v-model="email"
                placeholder="Tu correo"
                class="input-text"
              />
              <span class="text-error" v-show="errors[0]">{{ errors[0] }}</span>
            </template>
          </validation-provider>
          <P>MENSAJE</P>
          <validation-provider name="comentario" rules="required">
            <template slot-scope="{ errors }">
              <textarea
                class="input-text-rectangule"
                name="comentario"
                placeholder="Escribe aquí tu mensaje"
                v-model="comment"
              ></textarea>
              <span class="text-error" v-show="errors[0]">{{ errors[0] }}</span>
            </template>
          </validation-provider>
          <P>TELÉFONO</P>
          <div class="input-content">
            <validation-provider name="celular" rules="required|num">
              <template slot-scope="{ errors }">
                <input
                  class="input-text"
                  name="celular"
                  type="number"
                  placeholder="Tu teléfono"
                  v-model="numberphone"
                />
                <span class="text-error" v-show="errors[0]">{{
                  errors[0]
                }}</span>
              </template>
            </validation-provider>
            <button
              ref="colorBtn"
              class="btn"
              v-on:click.prevent="submitContact"
            >
              Enviar
            </button>
          </div>
        </ValidationObserver>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'Ko-Contact-1',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  data() {
    return {
      nombre: '',
      email: '',
      numberphone: '',
      comment: '',
      messageFull: '',
      message: {
        text: '',
        open: false,
      },
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
      dataContact: [
        {
          dato: this.dataStore.tienda.telefono,
          icon: 'phone-icon',
        },
        {
          dato: this.dataStore.tienda.whatsapp,
          icon: 'whatsapp-icon',
        },
        {
          dato: this.dataStore.tienda.email_tienda,
          icon: 'email-icon',
        },
      ],
    }
  },
  destroyed() {
    this.nombre = ''
    this.email = ''
    this.numberphone = ''
    this.comment = ''
  },
  methods: {
    submitContact() {
      this.$refs.observer
        .validate()
        .then((response) => {
          if (response) {
            const json = {
              nombre: this.nombre,
              correo: this.email,
              celular: this.numberphone,
              comentario: this.comment,
              tienda: this.dataStore.tienda.id_tienda,
            }
            axios
              .post(`https://templates.komercia.co/api/mensaje-contacto`, json)
              .then((response) => {
                this.$message.success('Comentario enviado!')
              })
          }
        })
        .catch((e) => {
          this.$message.error('error')
        })
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
      this.dataContact[0].dato = this.dataStore.tienda.telefono
      this.dataContact[1].dato = this.dataStore.tienda.whatsapp
      this.dataContact[2].dato = this.dataStore.tienda.email_tienda
    },
  },
}
</script>

<style scoped>
.wrapper-contact {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_2);
  box-sizing: border-box;
}
.contact {
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1300px;
  align-items: center;
  justify-content: space-between;
  padding: 30px 30px;
}
.contact > div {
  flex: 1;
  max-width: 500px;
  width: 100%;
}
.contact > div:nth-child(2) {
  margin-left: 20px;
}
.contact-content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-self: end;
}
.contact-item-text {
  width: 100%;
}
.contact-text-title {
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: -0.4px;
  color: var(--color_text);
}
.contact-text-subtitle {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 10px;
}
.contact-text-subtitles {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 10px;
}
.contact-text-subtitle2 {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}
.contact-text-subtitle3 {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 10px;
}
.contact-text-subtitle4 {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: var(--color_text);
  margin-top: 10px;
  text-align: right;
}
.-text {
  display: flex;
  flex-direction: column;
}
.contact-icon {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.11;
  letter-spacing: normal;
  color: var(--color_icon);
}
.text-icon {
  display: flex;
  flex-direction: row;
  color: var(--color_icon);
}
.text-icon a:hover {
  cursor: pointer;
  color: var(--color_hover_text);
}
.text-icon a {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  margin-top: 5px;
  margin-left: 7px;
}
.icon {
  font-size: 17px;
}
.contact-text-sub {
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  margin-top: 10px;
}
.contact-text-sub2 {
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  margin-top: 10px;
}
.separator {
  margin-top: 15px;
  width: 100%;
  border: solid 1.5px var(--color_border);
}
.text-icon {
  display: flex;
  flex-direction: row;
}
.contact-content-icon {
  margin-top: 10px;
}
.contact-content-rigth {
  border-radius: 10px;
  background-color: var(--background_color_1);
  padding: 30px 30px 50px 30px;
  margin-top: 20px;
}
.contact-content-rigth p {
  font-size: 14px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.86;
  letter-spacing: 2px;
  color: var(--color_text);
  margin: 10px;
  margin-left: 0px;
}
.under-text {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.under-text p:nth-child(1) {
  flex: 2;
}
.under-text p:nth-child(2) {
  flex: 1;
}
.input-content {
  display: flex;
  flex-direction: row;
}
.input-text {
  font-size: 14px;
  color: var(--color_subtext);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 8px 14px;
  width: 100%;
}
.input-text::placeholder {
  color: var(--color_subtext);

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
  border: solid 2px var(--color_border);
}
.input-text-rectangule {
  font-size: 14px;
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 4px 14px;
  width: 100%;
  max-width: 440px;
  max-height: 140px;
  min-height: 41px;
}
.input-text-rectangule::placeholder {
  color: var(--color_subtext);
  opacity: 0.7;
}

.input-text-rectangule:focus,
.input-text-rectangule:active {
  outline: 0;
  border: solid 2px var(--color_border);
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 2px var(--color_background_btn);
  background-color: var(--color_background_btn);
  padding: 8px 14px;
  font-size: 14px;
  width: 50%;
  max-height: 41px;
  min-height: 41px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  color: white;
  border: solid 2px var(--btnhover);
  background-color: var(--btnhover);
}

@media (max-width: 700px) {
  /* For mobile phones */

  .contact {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    justify-content: center;
    justify-content: space-around;
  }
  .contact > div:nth-child(2) {
    margin-left: 0px;
  }
  .contact-content {
    align-self: normal;
  }
  .contact-text-subtitle {
    display: none;
  }
  .separator {
    display: none;
  }
  .wrapper-icon {
    display: flex;
    flex-direction: column-reverse;
  }
  .contact-text-sub {
    margin-top: 20px;
  }
  .input-content {
    flex-direction: column;
  }
  .btn {
    color: var(--color_text_btn);
    border-radius: var(--radius_btn);
    border: solid 2px var(--color_border_btn);
    background-color: var(--color_background_btn);
    padding: 8px 14px;
    font-size: 14px;
    width: 100%;
    font-weight: bold;
    cursor: pointer;
    margin-left: 0px;
    margin-top: 10px;
  }
  .btn:hover {
    color: var(--color_text_btn_hover);
    border: solid 2px var(--color_border_btn_hover);
    background-color: var(--color_background_btn_hover);
  }
  .contact-content-rigth {
    padding: 20px 15px 20px 15px;
  }
}
</style>
