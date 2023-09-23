<template>
  <div
    class="w-full max-w-8/5 md:max-w-7/7 lg:max-w-6/0 flex justify-start lg:justify-end items-center mt-55"
  >
    <div
      class="w-full max-w-[600px] grid grid-cols-1 md:grid-cols-2 gap-5 justify-center items-center"
    >
      <div class="flex flex-col justify-center items-start mr-20">
        <p
          class="text-24 font-bold mb-5"
          :style="`color: ${settingByTemplate15[0].newsletter.color_title};`"
        >
          {{ settingByTemplate15[0].newsletter.title }}
        </p>
        <p
          class="text-15"
          :style="`color: ${settingByTemplate15[0].newsletter.color_text};`"
        >
          {{ settingByTemplate15[0].newsletter.subTitle }}
        </p>
      </div>
      <div
        class="w-full flex justify-center items-start border-t-2 md:border-t-0 md:border-l-2 pt-20 md:pt-0 md:pl-30"
        :style="`border-color: ${settingByTemplate15[0].newsletter.color_border};`"
      >
        <div class="w-full flex flex-col justify-center items-start">
          <ValidationProvider
            ref="validate"
            name="email"
            rules="required|email"
            class="px-20 py-8 w-full"
            :style="`background-color: ${settingByTemplate15[0].newsletter.color_input}; border-radius: ${settingByTemplate15[0].settingGeneral.radius};`"
          >
            <template slot-scope="{ errors }">
              <input
                v-model="email"
                name="email"
                type="email"
                :placeholder="$t('newsletter_email')"
                class="bg-transparent"
                :style="`color: ${settingByTemplate15[0].newsletter.color_text_input};`"
              />
              <span
                v-show="errors[0] || register"
                :style="register ? 'color:green' : ''"
              >
                {{ errorsCheckbox || register }}
              </span>
            </template>
          </ValidationProvider>
          <div class="flex justify-center mt-6">
            <input type="checkbox" id="checkbox" v-model="checked" />
            <p
              class="ml-6 text-12"
              :style="`color: ${settingByTemplate15[0].newsletter.color_text};`"
            >
              {{ $t('newsletter_msg') }}
            </p>
          </div>
          <p v-if="stateChehed">
            Marcar checkbox para poder suscribirse al boletín informativo
          </p>
        </div>
        <button
          class="px-20 py-8 ml-10"
          :style="`background-color: ${settingByTemplate15[0].newsletter.colorBg_Btn};  border-radius: ${settingByTemplate15[0].settingGeneral.radius}`"
          @click="submitNewsletter"
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              :fill="settingByTemplate15[0].newsletter.color_icon"
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
export default {
  name: 'Ko14-Newsletter',
  props: {
    dataStore: Object,
    settingByTemplate15: Array,
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
      stateChehed: false,
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
      if (this.checked) {
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
        this.stateChehed = true
      }
    },
  },
}
</script>

<style scoped>
.txt {
  color: var(--color_text);
  font-size: 14px;
}
.btn {
  color: var(--color_title);
  font-size: 18px;
  @apply pb-10;
}
</style>
