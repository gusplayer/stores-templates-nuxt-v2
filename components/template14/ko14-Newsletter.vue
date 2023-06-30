<template>
  <div
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10"
    :style="`background-color: ${newsletter['--background_color_1']}`"
  >
    <div
      class="w-full max-w-7xl flex items-center justify-center border wrapper_border"
      :style="`border-color: ${newsletter.color_border_component};`"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center"
      >
        <div
          class="w-full flex flex-col justify-center items-start py-30 md:py-40 pl-20 md:pl-80 pr-20 md:pr-0"
        >
          <p
            class="font-bold text-30 mb-10"
            :style="`color: ${newsletter.color_title};`"
          >
            {{ newsletter.title }}
          </p>
          <p class="text-15" :style="`color: ${newsletter.color_text};`">
            {{ newsletter.subTitle }}
          </p>
          <div
            class="border h-2 my-10 md:my-15 border-hover"
            :style="`border-color: ${newsletter.color_border};`"
          />
          <div class="w-full flex flex-col justify-center">
            <div
              class="flex flex-col md:flex-row py-10 px-10 rounded-2"
              :style="`background-color: ${newsletter.color_input};`"
            >
              <ValidationProvider
                ref="validate"
                name="email"
                rules="required|email"
                class="w-full"
              >
                <template slot-scope="{ errors }">
                  <div class="flex flex-row items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        :fill="newsletter.color_icon"
                        :color="newsletter.color_icon"
                      >
                        <path
                          d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                        />
                      </svg>
                    </div>
                    <input
                      v-model="email"
                      name="email"
                      class="ml-10 bg-transparent"
                      :style="`color: ${newsletter.color_text_input};`"
                      type="email"
                      :placeholder="$t('newsletter_email')"
                    />
                  </div>
                  <span
                    v-show="errors[0] || register"
                    class="text-xs"
                    :style="[
                      `color: ${newsletter.color_text_input};`,
                      register ? 'color:green' : '',
                    ]"
                  >
                    {{ errorsCheckbox || register }}
                  </span>
                </template>
              </ValidationProvider>
              <button
                class="w-full md:w-0 font-bold px-15 mt-5 md:mt-0"
                :style="`color: ${newsletter.color_text_input};background-color: ${newsletter.color_input};`"
                @click="submitNewsletter"
              >
                {{ $t('newsletter_btn') }}
              </button>
            </div>
            <div class="mt-3">
              <p v-if="stateChecked" class="text-xs text-red-500 py-2">
                Marcar checkbox para poder suscribirse al boletín informativo
              </p>
              <div class="flex flex-row items-center">
                <input type="checkbox" id="checkbox" v-model="checked" />
                <p class="ml-5 text-xs">
                  {{ $t('newsletter_msg') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="wrapper-img">
          <picture>
            <source
              media="(max-width: 799px)"
              :srcset="idCloudinaryBanner(newsletter.img_res, 'bannerRes', 800)"
            />
            <source
              media="(min-width: 800px)"
              :srcset="idCloudinaryBanner(newsletter.img, 'banner')"
            />
            <img
              v-lazy="newsletter.img"
              alt="newsletter template14"
              class="w-full effect-img"
            />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { ValidationObserver, ValidationProvider } from 'vee-validate'
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'Ko14-Newsletter',
  props: {
    newsletter: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  mixins: [idCloudinary],
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
}
</script>

<style scoped>
.wrapper_border:hover .border-hover {
  width: 120px;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper-img {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper_border:hover .effect-img {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.effect-img {
  -webkit-transition: all 600ms ease 0s;
}
.border-hover {
  @apply w-80;
  -webkit-transition: all 600ms ease 0s;
}
</style>
