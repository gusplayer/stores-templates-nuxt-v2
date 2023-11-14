<template>
  <div
    v-if="newsletter"
    class="w-full flex justify-center items-center box-border wrapper_newsletter"
    :style="[newsletter, settingGeneral]"
  >
    <div
      class="contenedor w-full max-w-[1300px] flex flex-col justify-center items-center px-20"
    >
      <p class="text-center subtext">{{ $t('newsletter_subtitle') }}</p>
      <p class="w-[600px] text-center pb-50 title">
        {{ $t('newsletter_title') }}
      </p>
      <div class="w-full flex flex-row justify-center pb-10">
        <ValidationProvider
          ref="validate"
          name="email"
          rules="required|email"
          class="flex flex-col"
        >
          <template slot-scope="{ errors }">
            <input
              id="CorreoElectronicoNewslletter"
              v-model="email"
              name="email"
              class="input-text"
              type="email"
              :placeholder="$t('newsletter_email')"
            />
            <span
              v-show="errors[0] || register"
              class="w-full text-12 ml-10 text-[#cb2027]"
              :style="register ? 'color:green' : ''"
            >
              {{ errorsCheckbox || register }}
            </span>
          </template>
        </ValidationProvider>
        <button ref="colorBtn" class="btn" @click="submitNewsletter">
          {{ $t('newsletter_btn') }}
        </button>
      </div>
      <div class="w-full flex flex-row justify-center">
        <input id="checkboxNewsletter" v-model="checked" type="checkbox" />
        <label for="checkboxNewsletter" class="text-checkbox">
          {{ $t('newsletter_msg') }}
        </label>
      </div>
      <div class="w-full flex flex-row justify-center">
        <p
          v-if="stateChecked"
          class="w-full text-12 ml-10 text-[#cb2027]"
          style="max-width: 340px"
        >
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
  name: 'Ko13Newsletter',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    newsletter: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      errorsCheckbox: 'El campo checkbox y email son obligatorios',
      email: null,
      register: '',
      checked: false,
      stateChecked: false,
    }
  },
  computed: {
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
  },
  destroyed() {
    this.email = ''
  },
  methods: {
    submitNewsletter() {
      if (this.checked) {
        this.$refs.validate
          .validate()
          .then((response) => {
            if (response.valid) {
              const json = {
                email: this.email,
                tienda: this.dataStore.id,
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
}
</script>

<style scoped>
.wrapper_newsletter {
  background-color: var(--background_color_1);
}
.contenedor {
  padding-bottom: var(--padding);
  padding-top: var(--padding);
}
.subtext {
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
