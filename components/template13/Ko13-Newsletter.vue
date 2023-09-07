<template>
  <div
    class="wrapper_newsletter"
    :style="[newsletter, settingGeneral]"
    v-if="newsletter"
  >
    <div class="contenedor px-20">
      <p class="subtext">{{ $t('newsletter_subtitle') }}</p>
      <p class="title">
        {{ $t('newsletter_title') }}
      </p>
      <div class="content-button">
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
              :placeholder="$t('newsletter_email')"
              v-model="email"
              id="CorreoElectronicoNewslletter"
            />
            <span
              v-show="errors[0] || register"
              class="text-error"
              :style="register ? 'color:green' : ''"
              >{{ errorsCheckbox || register }}</span
            >
          </template>
        </ValidationProvider>
        <button ref="colorBtn" class="btn" @click="submitNewsletter">
          {{ $t('newsletter_btn') }}
        </button>
      </div>
      <div class="content-checkbox">
        <input id="checkboxNewsletter" type="checkbox" v-model="checked" />
        <label for="checkboxNewsletter" class="text-checkbox">
          {{ $t('newsletter_msg') }}
        </label>
      </div>
      <div class="content-checkbox">
        <p class="text-error" v-if="stateChecked" style="max-width: 340px">
          Marcar checkbox para poder suscribirse al boletín informativo
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'Ko13-Newsletter-1',
  props: {
    dataStore: Object,
    newsletter: Object,
    settingGeneral: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mounted() {},
  data() {
    return {
      errorsCheckbox: 'El campo checkbox y email son obligatorios',
      email: null,
      register: '',
      checked: false,
      stateChecked: false,
    }
  },
  destroyed() {
    this.email = ''
  },
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
  },
  methods: {
    submitNewsletter() {
      if (this.checked == true) {
        this.$refs.validate
          .validate()
          .then((response) => {
            if (response.valid) {
              const json = {
                email: this.email,
                tienda: this.dataStore.tienda.id_tienda,
              }
              axios
                .post(
                  `${this.$store.state.urlKomercia}/api/tienda/suscriptor`,
                  json
                )
                .then((res) => {
                  if (
                    this.facebookPixel &&
                    this.facebookPixel.pixel_facebook != null
                  ) {
                    window.fbq('track', 'Lead', { value: this.email })
                  }
                  this.register = 'Tu correo ha sido registrado'
                  this.$message.success('Comentario enviado!')
                  this.email = ''
                })
                .catch(
                  (res) => (
                    (this.register = 'Tu correo ya esta registrado'),
                    this.$message.error('Tu correo ya esta registrado')
                  )
                )
            }
          })
          .catch((e) => {
            console.log(e)
          })
      } else {
        this.stateChecked = true
      }
    },
  },
  watch: {},
}
</script>

<style scoped>
.wrapper_newsletter {
  display: flex;
  width: 100%;
  background-color: var(--background_color_1);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding-bottom: var(--padding);
  padding-top: var(--padding);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.subtext {
  text-align: center;
  color: var(--color_pretitle);
  font-size: var(--fontSizepreTitle);
  font-weight: var(--fontWeighpreTitle);
}
.title {
  font-size: var(--fontSizeTitle);
  font-weight: var(--fontWeighTitle);
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -0.4px;
  color: var(--color_title);
  text-align: center;
  width: 600px;
  padding-bottom: 50px;
}
.content-button {
  display: flex;
  padding-bottom: 10px;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}
.input-text {
  font-size: 14px;
  color: var(--color_pretitle);
  border: solid 2px var(--color_border);
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 12px 14px;
  width: 360px;
  height: 100%;
}
.input-text::placeholder {
  color: var(--color_pretitle);
  opacity: 0.7;
}
.input-text:focus,
.input-text:active {
  outline: 0;
  border: solid 2px var(--color_border);
}
.content-input-error {
  display: flex;
  flex-direction: column;
}
.text-error {
  font-size: 12px;
  color: #cb2027;
  width: 100%;
  margin-left: 10px;
}
.btn {
  color: var(--color_text_btn);
  background-color: var(--color_background_btn);
  border: 1px solid var(--color_border_btn);
  padding: 8px 14px;
  font-size: 14px;
  width: 220px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 20px;
  cursor: pointer;
  max-height: 50px;
  transition: all 200ms ease-in;
  border-radius: var(--radius_btn);
}
.btn:hover {
  color: var(--hover_text_btn);
  background-color: var(--hover_text_btn);
  border: 1px solid var(--hover_Border_btn);
}
.content-checkbox {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.text-checkbox {
  margin-left: 5px;
  font-size: 13px;
  color: var(--color_pretitle);
}
@media (max-width: 600px) {
  .title {
    width: 100%;
    max-width: 550px;
  }
}
@media (max-width: 500px) {
  .contenedor {
    padding: 40px 10px 30px 10px;
  }
  .title {
    font-size: 30px;
  }
  .subtext {
    font-size: 12px;
  }
  .input-text {
    width: 230px;
  }
  .btn {
    width: 100px;
    margin-left: 10px;
  }
}
</style>
