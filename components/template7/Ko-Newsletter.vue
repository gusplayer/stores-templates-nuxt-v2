<template>
  <div class="wrapper_newsletter" :style="[settingKNews, settingGeneral]">
    <div
      class="wrapper-items-content"
      :style="[
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <div class="wrapper-content-items">
        <div class="wrapper-items-text">
          <div class="tittle">
            <span class="tittle-text">{{ $t('nesletter_tittle') }}</span>
          </div>
          <div class="subtittle">
            <span class="subtittle-text">{{ $t('newsletter_subtittle') }}</span>
          </div>
          <div class="description">
            <span class="description-text">
              {{ $t('newsletter_description') }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="wrapper-items"
      :style="[
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Great Vibes',
        },
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <div class="conten-input-check">
        <div class="content-input">
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
        </div>
        <div class="content-checkbox">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <p class="text-checkbox">
            {{ $t('newsletter_msg') }}
          </p>
        </div>
      </div>

      <div class="content-button">
        <button
          ref="colorBtn"
          @click="submitNewsletter"
          class="content-bttns-shop"
        >
          <span class="content-textbutton-shop">
            {{ $t('newsletter_btn') }}
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'Ko-Newsletter-1',
  props: {
    dataStore: Object,
    settingGeneral: Object,
    settingKNews: Object,
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
    }
  },
  destroyed() {
    this.email = ''
  },
  computed: {
    facebooPixel() {
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
                .post('https://api2.komercia.co/api/tienda/suscriptor', json)
                .then((res) => {
                  if (
                    this.facebooPixel &&
                    this.facebooPixel.pixel_facebook != null
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
      }
    },
  },
  watch: {},
}
</script>

<style scoped>
.wrapper_newsletter {
  @apply w-full flex flex-col justify-center items-center;
  background: var(--background_color_1);
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
}
.wrapper-content-items {
  @apply flex flex-col justify-center items-center w-full mb-8 text-center;
}
.wrapper-items-text {
  @apply w-full;
}
.tittle,
.subtittle,
.description {
  @apply flex flex-col justify-center items-center;
}
.tittle-text {
  font-family: var(--font-style-2), cursive !important;
  color: var(--color_pre_title);
}
.subtittle-text {
  font-family: var(--font-style-3), serif !important;
  color: var(--color_title);
}
.description-text {
  font-family: var(--font-style-3), serif !important;
  color: var(--color_description);
}
.content-bttns-shop {
  @apply mr-2 shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
  background: var(--color_background_btn);
  border-radius: var(--radius_btn);
  padding: 12px 20px;
  margin-left: 20px;
}
.content-bttns-shop:hover {
  @apply bg-red-btnbannershophover;
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  color: var(--color_text_btn);
  font-size: 13px;
  line-height: 18px;
}
.content-textbutton-shop {
  font-family: var(--font-style-3), serif !important;
}
.wrapper-items {
  @apply w-auto flex justify-center;
}
.conten-input-check {
  @apply w-full flex flex-col justify-center items-center;
}
.content-input {
  @apply w-full flex flex-col justify-start items-center;
}
.content-input-error {
  @apply w-full flex justify-start items-center;
}
.input-text {
  @apply w-full flex justify-start items-center border;
  font-family: var(--font-style-3), serif !important;
  border-radius: 30px;
  padding: 0 15px;
  max-width: 100%;
  width: 100%;
  height: 42px;
  font-size: 14px;
  border: 2px solid rgba(129, 129, 129, 0.2);
  transition: border-color 0.5s ease;
}
.input-text::placeholder {
  color: var(--color_subtext);
  opacity: 0.7;
}
.text-error {
  font-family: var(--font-style-3), serif !important;
  font-size: 12px;
  color: #ed2353;
  width: auto;
}

.content-button {
  @apply w-auto flex items-start;
}
.content-input-error {
  @apply w-full flex flex-col justify-start items-center;
}

.content-checkbox {
  @apply w-full flex justify-start items-center ml-8 mt-2;
}
.text-checkbox {
  margin-left: 5px;
  font-size: 13px;
  color: var(--color_subtext);
}
@screen sm {
  .wrapper-items-content {
    @apply w-9/5;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 42px;
    font-size: 32px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
  .wrapper-items {
    @apply flex-col w-9/0 mb-12 items-center;
  }
  .content-checkbox {
    @apply ml-0;
  }
  .conten-input-check {
    @apply mb-4;
  }
  .content-button {
    @apply justify-center;
  }
}
@screen md {
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
  .wrapper-items {
    @apply flex-row;
  }
  .content-button {
    @apply justify-start;
  }
  .wrapper-items {
    @apply w-6/0 items-start;
  }
}
@screen mlg {
  .wrapper-items-content {
    @apply w-9/3;
  }
  .gify-text-content {
    @apply w-9/3;
  }
  .gify-slider-content {
    @apply w-6/3;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 48px;
    font-size: 35px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
  .wrapper-items {
    @apply w-4/0;
  }
}
@media (min-width: 1192px) {
  .wrapper-items-content {
    width: 1192px;
  }
  .wrapper-items {
    width: 600px;
  }
}
</style>
