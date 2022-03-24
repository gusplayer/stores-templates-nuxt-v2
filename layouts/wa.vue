<template>
  <div>
    <div class="general-container" v-if="dataStore">
      <nuxt />
      <div
        class="wrapper-notificacion"
        id="modalNotificacion"
        v-if="dataStore.tienda.estado == 0"
      >
        <div class="content-notificacion">
          <koTiendaCerrada />
          <p class="text-noti">
            Disculpa, no podrá realizar compras por el momento,
          </p>
          <p class="subtitle-noti">¿Deseas continuar?</p>
          <button class="btn-acceptM" @click="acceptClose()">Aceptar</button>
        </div>
      </div>
      <div
        class="wrapper-notificacion-wa"
        v-if="dataStore.tienda.whatsapp == ''"
      >
        <div class="content-notificacion">
          <koTiendaCerrada />
          <p class="text-noti">
            Disculpa, no podrá realizar compras por el momento,
          </p>
          <p class="subtitle-noti">
            La tienda no tiene configurado un número de WhatsApp
          </p>
        </div>
      </div>
      <div
        class="wrapper-security-modal"
        :style="`background: ${
          dataStore.modal && dataStore.modal.colorBg_1
            ? dataStore.modal.colorBg_1
            : 'rgba(5, 5, 5, 0.897)'
        };`"
        v-if="
          dataStore.modal && dataStore.modal.stateModal == 1 && !stateModalPwd
        "
      >
        <div
          class="content-security-modal"
          :style="`background: ${
            dataStore.modal && dataStore.modal.colorBg_2
              ? dataStore.modal.colorBg_2
              : 'White'
          };`"
        >
          <img
            v-if="dataStore.modal && dataStore.modal.img"
            :src="dataStore.modal.img"
            alt="img-modal-block"
            :style="`width: ${
              dataStore.modal && dataStore.modal.width_img
                ? dataStore.modal.width_img
                : '120px'
            };
           margin-bottom: ${
             dataStore.modal && dataStore.modal.marginBottomImg
               ? dataStore.modal.marginBottomImg
               : '10px'
           };
          `"
          />
          <p
            :style="`color: ${
              dataStore.modal && dataStore.modal.colorTitle
                ? dataStore.modal.colorTitle
                : 'White'
            };
             font-size: ${
               dataStore.modal && dataStore.modal.fontSizeTitle
                 ? dataStore.modal.fontSizeTitle
                 : '20px'
             };
            font-weight: ${
              dataStore.modal && dataStore.modal.fontWeighTitle
                ? dataStore.modal.fontWeighTitle
                : 'Bold'
            };
            margin-bottom: ${
              dataStore.modal && dataStore.modal.marginBottomTitle
                ? dataStore.modal.marginBottomTitle
                : '15px'
            };            
            `"
          >
            {{ dataStore.modal.title }}
          </p>
          <p
            :style="`color: ${
              dataStore.modal && dataStore.modal.colorDescription
                ? dataStore.modal.colorDescription
                : 'White'
            };
            font-size: ${
              dataStore.modal && dataStore.modal.fontSizeDescription
                ? dataStore.modal.fontSizeDescription
                : '16px'
            };
            font-weight: ${
              dataStore.modal && dataStore.modal.fontWeighDescription
                ? dataStore.modal.fontWeighDescription
                : '400'
            };
            margin-bottom: ${
              dataStore.modal && dataStore.modal.marginBottomDescription
                ? dataStore.modal.marginBottomDescription
                : '20px'
            };
            `"
          >
            {{ dataStore.modal.description }}
          </p>

          <div class="inputBox">
            <input
              name="password"
              type="password"
              v-model="pwd"
              class="input-text"
              :style="`color: ${
                dataStore.modal && dataStore.modal.colorBorder
                  ? dataStore.modal.colorBorder
                  : 'Black'
              }; border: solid 2px ${
                dataStore.modal && dataStore.modal.colorBorder
                  ? dataStore.modal.colorBorder
                  : 'Black'
              };`"
              placeholder="Ingresar contraseña"
              id="password"
            />
            <div id="toggle" @click="switchVisibility()">
              <i class="el-icon-view" />
            </div>
          </div>
          <button
            class="btn-acceptModal"
            :style="`color: ${
              dataStore.modal && dataStore.modal.colorTextBtn
                ? dataStore.modal.colorTextBtn
                : 'White'
            }; 
          background-color: ${
            dataStore.modal && dataStore.modal.colorBgBtn
              ? dataStore.modal.colorBgBtn
              : 'Black'
          };          
          `"
            @click="closedModal"
          >
            Ingresar
          </button>
        </div>
      </div>
    </div>
    <div v-else>
      <koTiendaError />
    </div>
  </div>
</template>

<script>
import koTiendaCerrada from '../assets/img/tiendaCerrada'
import koTiendaError from '../components/Ko-errorStore'
export default {
  components: {
    koTiendaCerrada,
    koTiendaError,
  },
  mounted() {
    this.$store.dispatch('GET_SHOPPING_CART')
    let domain = this.$route.query
    if (domain.clearCart == 'true') {
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENTCART')
    }
    if (
      this.analytics_tagmanager &&
      this.analytics_tagmanager.pixel_facebook != null
    ) {
      window.fbq('track', 'PageView', {
        description: 'StoreKomerciaWhatsapp',
      })
    }
    if (this.dataStore.modal && this.dataStore.modal.stateModal == 1) {
      this.$store.commit('SET_STATE_MODAL_PWD', false)
    }
  },
  head() {
    let tienda = this.$store.state.dataStore.tienda
    let geolocalizacion = this.$store.state.dataStore.geolocalizacion
    let description = tienda.descripcion.replace(/<[^>]*>?/g, '')
    return {
      title: tienda.nombre ? tienda.nombre : 'Tienda',
      htmlAttrs: {
        lang: 'es',
      },
      meta: [
        { hid: 'utf-8', charset: 'utf-8' },
        {
          hid: 'x-ua-compatible',
          'http-equiv': 'x-ua-compatible',
          content: 'ie=edge',
        },
        {
          hid: 'viewport',
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=3.0, minimum-scale=1.0',
        },
        {
          hid: 'description',
          name: 'description',
          content: description ? description : 'Tienda Online',
        },
        { hid: 'subject', name: 'subject', content: 'Tienda Online' },
        {
          hid: 'summary',
          name: 'summary',
          content: description ? description : 'Tienda Online',
        },
        {
          hid: 'url',
          name: 'url',
          content: tienda.dominio
            ? tienda.dominio
            : `https://${tienda.subdominio}.komercia.co`,
        },
        { hid: 'language', name: 'language', content: 'ES' },
        { hid: 'author', name: 'author', content: 'Komercia' },
        { hid: 'robots', name: 'robots', content: 'index,follow' },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'tienda, store, shop, shopping, tienda online, online, komercia, producto, articulo',
        },
        { hid: 'distribution', name: 'distribution', content: 'global' },
        {
          hid: 'Content-Language',
          'http-equiv': 'Content-Language',
          content: 'es',
        },
        //openGraph meta
        { hid: 'og:title', name: 'og:title', content: tienda.nombre },
        {
          hid: 'og:type',
          name: 'og:type',
          content: `Tienda online ${tienda.nombre}`,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: tienda.dominio
            ? tienda.dominio
            : `https://${tienda.subdominio}.komercia.co`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`,
        },
        { hid: 'og:site_name', name: 'og:site_name', content: tienda.nombre },
        {
          hid: 'og:description',
          name: 'og:description',
          content: description ? description : 'Tienda Online',
        },
        { hid: 'og:email', name: 'og:email', content: tienda.email_tienda },
        {
          hid: 'og:phone_number',
          name: 'og:phone_number',
          content: `${tienda.telefono}`,
        },
        {
          hid: 'og:latitude',
          name: 'og:latitude',
          content: geolocalizacion.latitud,
        },
        {
          hid: 'og:longitude',
          name: 'og:longitude',
          content: geolocalizacion.longitud,
        },
        {
          hid: 'og:street-address',
          name: 'og:street-address',
          content: geolocalizacion.direccion,
        },
        {
          name: ' google',
          content: ' notranslate',
        },
      ],
      script: [
        {
          src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyByh33xchBmphNi10U-eB3oCX9sVVT4fiY',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto&display=swap',
        },
      ],
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    analytics_tagmanager() {
      return this.$store.state.analytics_tagmanager
    },
    stateModalPwd() {
      return this.$store.state.stateModalPwd
    },
  },
  methods: {
    acceptClose() {
      document.getElementById('modalNotificacion').style.zIndex = '-2'
      document.getElementById('modalNotificacion').style.opacity = '0'
    },
    closedModal() {
      if (this.dataStore.modal && this.dataStore.modal.password) {
        if (this.dataStore.modal.password == this.pwd) {
          this.$store.commit('SET_STATE_MODAL_PWD', true)
        }
      }
    },
    switchVisibility() {
      const password = document.getElementById('password')
      if (password.type === 'password') {
        password.setAttribute('type', 'text')
      } else {
        password.setAttribute('type', 'password')
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif !important;
}
.general-container {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  background-color: #f0f0f0;
}
.wrapper-notificacion {
  top: 0;
  opacity: 1;
  z-index: 9998;
  width: 100%;
  height: calc(100vh);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: all 200ms ease-in;
}
.content-notificacion {
  padding: 30px 20px;
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: white;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 27px 11px rgba(87, 87, 87, 0.4);
  box-shadow: 0px 0px 27px 11px rgba(87, 87, 87, 0.4);
}
.text-noti {
  margin-top: 15px;
  letter-spacing: 0px;
  font-size: 16px;
  color: rgb(75, 75, 75);
  width: 160px;
}
.subtitle-noti {
  font-weight: bold;
  font-size: 17px;
  color: #ff314d;
  margin-bottom: 15px;
}
.btn-acceptM {
  width: 110px;
  border-radius: 5px;
  color: white;
  border: solid 2px black;
  background-color: black;
  padding: 4px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-acceptM:hover {
  border: solid 2px gray;
  background-color: gray;
}
.wrapper-notificacion-wa {
  top: 0;
  opacity: 1;
  z-index: 9999;
  width: 100%;
  height: calc(100vh);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  transition: all 200ms ease-in;
}
.wrapper-security-modal {
  top: 0;
  opacity: 1;
  z-index: 99999;
  width: 100%;
  height: calc(100vh);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background: rgba(5, 5, 5, 0.897); */
  transition: all 200ms ease-in;
}
.content-security-modal {
  padding: 30px 20px;
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background: white; */
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 47px 11px rgba(87, 87, 87, 0.4);
  box-shadow: 0px 0px 47px 11px rgba(87, 87, 87, 0.4);
}
.btn-acceptModal {
  width: 100%;
  max-width: 250px;
  border-radius: 5px;
  padding: 8px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.input-text {
  margin-bottom: 10px;
  font-size: 14px;
  border-radius: 5px;
  background-color: transparent;
  padding: 8px 14px;
  width: 100%;
}
.input-text::placeholder {
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
  border: solid 2px rgba(127, 127, 139, 0.342);
}
.inputBox {
  max-width: 250px;
  width: 100%;
  position: relative;
}
#toggle {
  position: absolute;
  top: 20%;
  right: 10px;
  cursor: pointer;
}
@media (max-width: 500px) {
  .content-security-modal {
    max-width: 350px;
  }
}
</style>
