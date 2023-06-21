<template>
  <div
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
    :style="`background-color: ${newsletter['--background_color_1']}`"
  >
    <div
      class="w-full max-w-7xl flex items-center justify-center border"
      :style="`border-color: ${newsletter.color_border_component};`"
    >
      <div class="w-full grid grid-cols-2 gap-5 justify-between items-center">
        <div
          class="w-full flex flex-col justify-center items-start py-40 pl-80"
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
            class="border h-2 my-8 md:my-10 w-50"
            :style="`border-color: ${newsletter.color_border};`"
          />
          <div class="w-full flex flex-col justify-center">
            <div class="conten-input-check">
              <div
                class="content-input"
                :style="`background-color: ${newsletter.color_input};`"
              >
                <ValidationProvider
                  ref="validate"
                  name="email"
                  rules="required|email"
                  class="content-input-error"
                >
                  <template slot-scope="{ errors }">
                    <div class="input-icon">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink"
                          version="1.1"
                          width="100%"
                          height="100%"
                          viewBox="0 0 24 24"
                          :color="newsletter.color_icon"
                          class="icon-msg"
                        >
                          <path
                            d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                          />
                        </svg>
                      </div>
                      <input
                        id="CorreoElectronicoNewslletter"
                        v-model="email"
                        name="email"
                        class="input-text"
                        type="email"
                        :placeholder="$t('newsletter_email')"
                      />
                    </div>
                    <span
                      v-show="errors[0] || register"
                      class="text-error"
                      :style="register ? 'color:green' : ''"
                    >
                      {{ errorsCheckbox || register }}
                    </span>
                  </template>
                </ValidationProvider>
              </div>
              <div class="content-checkbox">
                <input type="checkbox" id="checkbox" v-model="checked" />
                <p class="text-checkbox">
                  {{ $t('newsletter_msg') }}
                </p>
              </div>
              <p class="text-error" v-if="stateChehed">
                Marcar checkbox para poder suscribirse al boletín informativo
              </p>
            </div>
            <button
              :style="`color: ${newsletter.color_text_input}; background-color: ${newsletter.color_input};`"
              @click="submitNewsletter"
            >
              {{ $t('newsletter_btn') }}
            </button>
          </div>
        </div>
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
            class="w-full"
          />
        </picture>
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
        this.stateChehed = true
      }
    },
  },
  watch: {},
}
</script>
