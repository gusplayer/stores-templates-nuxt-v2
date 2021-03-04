<template>
  <div class="wrapper_newsletter">
    <div class="wrapper-items-content">
      <div class="product-tittle">
        <span class="tittle txt-1">Inscríbase al boletín</span>
        <span class="tittle txt-2"
          >Manténgase actualizado sobre todo lo que es nuevo agregar digno de
          mención</span
        >
      </div>
    </div>

    <div class="wrapper-items">
      <div class="conten-input-check">
        <div class="content-input">
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
                    color="#2c2930"
                    class="icon-msg"
                  >
                    <path
                      d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"
                    />
                  </svg>
                </div>
                <input
                  name="email"
                  class="input-text"
                  type="email"
                  :placeholder="$t('newsletter_email')"
                  v-model="email"
                />
              </div>
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
  background-color: #fff;
  @apply w-full flex flex-col justify-center items-start;
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
}
.content-bttns-shop {
  background-color: transparent;
  padding: 12px 20px;
  border-bottom: 2px solid #e0e0e0;
  @apply flex justify-center items-center uppercase transition-all ease-out duration-0.2;
}
.content-bttns-shop:hover {
  border-bottom: 2px solid #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.content-textbutton-shop {
  color: #222;
  font-size: 14px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply tracking-1 leading-16 font-semibold whitespace-no-wrap;
}
.content-bttns-shop:hover .content-textbutton-shop {
  color: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.conten-input-check {
  @apply w-full flex flex-col justify-center items-center;
}
.content-input {
  @apply w-full flex flex-row justify-start items-center;
}
.content-input-error {
  @apply w-full flex justify-start items-center;
}
.input-text {
  padding: 0 25px;
  font-size: 14px;
  border-bottom: 2px solid #e0e0e0;
  transition: border-color 0.2s ease;
  background-color: transparent;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply w-9/5 h-42 flex justify-start items-center;
}
.input-text:hover {
  border-bottom: 2px solid #eb7025;
  transition: border-color 0.2s ease;
}
.input-text:focus {
  border-bottom: 2px solid #eb7025;
  transition: border-color 0.6s ease;
}
.input-text::placeholder {
  color: var(--color_subtext);
  opacity: 0.7;
}
.text-error {
  font-size: 12px;
  color: #ed2353;
  width: auto;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
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
  color: #2c2930;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
#checkbox:focus {
  background-color: #2c2930;
}

.product-tittle {
  @apply flex flex-col justify-center items-start;
}
.tittle {
  @apply flex flex-col justify-center items-center;
}
.txt-1 {
  color: #222;
  font-size: 16px;
  @apply mb-50 font-semibold;
}
.txt-2 {
  color: #666;
  font-size: 15px;
}
.icon-msg {
  fill: var(--color_subtext);
  @apply w-20 -mt-2 -mr-20 relative;
}
.input-icon {
  @apply w-full flex flex-row;
}
@screen sm {
  .wrapper-items-content {
    @apply w-9/5 mb-20;
  }
  .wrapper-items {
    @apply w-9/5 flex flex-col justify-center items-start mb-12;
  }
  .content-checkbox {
    @apply ml-0;
  }
  .conten-input-check {
    @apply mb-4;
  }
  .content-bttns-shop {
    @apply w-full;
  }
  .content-button {
    @apply justify-center;
  }
  .product-tittle {
    width: 100%;
  }
  .tittle {
    line-height: 1.1;
    letter-spacing: 0px;
  }
  .txt-1 {
    color: #222;
    font-size: 16px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply mb-30;
  }
  .txt-2 {
    color: #666;
    font-size: 15px;
    line-height: 1.55;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply mb-10 font-light;
  }
  .wrapper_newsletter {
    @apply mb-40;
  }
}
@media (min-width: 425px) {
  .wrapper-items {
    @apply flex flex-row;
  }
}

@screen mlg {
  .wrapper-items-content {
    @apply w-9/5;
  }
  .wrapper-items {
    @apply w-auto;
  }
  .wrapper_newsletter {
    @apply mb-0;
  }
  .txt-1 {
    font-size: 16px;
    @apply mb-20;
  }
  .txt-2 {
    font-size: 15px;
    @apply mb-10;
  }
}
@media (min-width: 1400px) {
  .txt-1 {
    @apply mb-30;
  }
}
</style>
