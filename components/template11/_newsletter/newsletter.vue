<template>
  <div class="wrapper-newsletter">
    <div class="wrapper-items">
      <div class="content-input-submit">
        <div class="content-input">
          <ValidationProvider
            ref="validate"
            name="email"
            rules="required|email"
            class="content-input-error"
          >
            <template slot-scope="{ errors }">
              <div class="content-subError">
                <input
                  name="email"
                  class="input-text"
                  type="email"
                  :placeholder="$t('newsletter_email')"
                  v-model="email"
                />
                <span
                  v-show="errors[0] || register"
                  class="text-error"
                  :style="register ? 'color:green' : ''"
                  >{{ errorsCheckbox || register }}
                </span>
              </div>
            </template>
          </ValidationProvider>
        </div>
      </div>
      <div class="content-button">
        <button ref="colorBtn" @click="submitNewsletter" class="btn btn-sm">
          OK
        </button>
        <button ref="colorBtn" @click="submitNewsletter" class="btn btn-md">
          {{ $t('newsletter_btn') }}
        </button>
      </div>
    </div>
    <div class="content-checkbox">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <p class="text-checkbox">
        {{ $t('newsletter_msg') }}
      </p>
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
.wrapper-newsletter {
  max-width: 660px;
  @apply w-full flex flex-col justify-center items-center;
}
.content-button {
  @apply w-auto flex justify-center items-center;
}
.btn {
  color: #222;
  background: #fff;
  font-size: 14px;
  padding: 12px 22px;
  font-family: 'Roboto', sans-serif;
  @apply w-full flex justify-center items-center tracking-1 uppercase transition-all ease-out duration-0.2 whitespace-nowrap;
}
.content-checkbox {
  @apply w-full flex justify-start items-center ml-8 bg-transparent;
}
.text-checkbox {
  margin-left: 8px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  @apply bg-transparent;
}
#checkbox:focus {
  background-color: #2c2930;
}
.content-input-submit {
  @apply w-full flex flex-col justify-center items-center;
}
.content-input {
  @apply w-full flex flex-row justify-start items-center;
}
.content-input-error {
  @apply w-full flex justify-start items-center;
}
.content-subError {
  @apply w-full flex flex-col justify-start items-center;
}
.input-text {
  padding: 12px 10px;
  font-size: 14px;
  background-color: #fff;
  font-family: 'Roboto', sans-serif;
  @apply w-full h-45 flex flex-col justify-start items-center;
}
.input-text::placeholder {
  color: #777;
}
.text-error {
  font-size: 12px;
  color: #ed2353;
  /* background-color: rgba(255, 255, 255); */
  font-family: 'Roboto', sans-serif;
  @apply w-full mt-10;
}

@screen sm {
  .wrapper-items {
    @apply w-full flex flex-row justify-center items-start;
  }
  .content-checkbox {
    @apply ml-0 mt-10;
  }
  .content-input-submit {
    @apply mb-4;
  }
  .content-button {
    @apply justify-center;
  }
  .btn-md {
    @apply hidden;
  }
  .text-checkbox {
    font-size: 12px;
  }
}
@screen md {
  .btn-sm {
    @apply hidden;
  }
  .btn-md {
    @apply w-full flex;
  }
  .text-checkbox {
    font-size: 14px;
  }
}
</style>
