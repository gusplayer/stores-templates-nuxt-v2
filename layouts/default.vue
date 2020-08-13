<template>
  <div :style="fontStyle">
    <component :dataStore="dataStore" :is="headerTemplate" />
    <!-- <KoHeader1 :dataStore="dataStore" /> -->
    <!-- <KoNotificacion :settingBytemplatePrueba="settingBytemplatePrueba" /> -->
    <nuxt />
    <KFooter1 :dataStore="dataStore" />
    <div class="wrapper-whatsapp" v-if="dataStore.tienda.whatsapp">
      <koWhatsapp class="button-whatsapp" @click.native="redirectWhatsapp()" />
    </div>
    <div class="wrapper-cookie" id="modalCookies" v-if="!dataCookies">
      <div class="content-cookie">
        <p class="title">
          Este sitio web utiliza cookies para su funcionar correctamente y
          brindarte una mejor experiencia.
        </p>
        <div class="wrapper-btn">
          <div class="content-btn">
            <button class="btn-accept" @click="acceptCookies()">
              Acepto cookies
            </button>
            <button class="btn-decline" @click="declineCookies()">
              Cancelar cookies
            </button>
          </div>
          <a
            class="_link"
            href="http://www.allaboutcookies.org/"
            target="_blank"
            >¿Qué son las cookies?</a
          >
        </div>
      </div>
    </div>
    <div
      class="wrapper-notificacion"
      id="modalNotificacion"
      v-if="dataStore.tienda.estado == 0"
    >
      <div class="content-notificacion">
        <p class="title-noti">TIENDA CERRADA</p>
        <p class="subtitle-noti">
          Disculpa, no podrá realizar compras por el momento, desea continuar
        </p>
        <button class="btn-acceptM" @click="acceptClose()">
          Aceptar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import KoNotificacion from '../components/template5/Ko-Notificacion-1'
import KoHeader1 from '../components/headers/header1/Ko-Header-1'
import KoHeader2 from '../components/headers/header2/Ko-Header-2'
import KoHeader3 from '../components/headers/header3/Ko-Header-3'
import KFooter1 from '../components/footers/footer1/Ko-Footer-1'
import koWhatsapp from '../components/whatsapp/whatsapp'

export default {
  components: {
    KoHeader1,
    KoHeader2,
    KoHeader3,
    KFooter1,
    koWhatsapp,
    KoNotificacion,
  },
  mounted() {
    console.log(this.analytics)
    this.$store.dispatch('GET_COOKIES')
    this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_SHOPPING_CART')
    this.$store.dispatch('GET_SERVER_PATH')
    this.$store.dispatch(
      'GET_SETTINGS_BY_TEMPLATE',
      this.$store.state.dataStore.tienda
      // this.$store.state.dataStore.tienda.id_tienda
    )
    let domain = this.$route.fullPath
    if (domain == '/?clearCart=true') {
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENTCART')
    }

    // console.log('ruta completa ' + this.fullPathServer)
  },
  head() {
    let tienda = this.$store.state.dataStore.tienda
    let geolocalizacion = this.$store.state.dataStore.geolocalizacion
    let description = tienda.descripcion.replace(/<[^>]*>?/g, '')
    return {
      title: tienda.nombre ? tienda.nombre : 'Tienda',
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
            'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
        },
        { hid: 'description', name: 'description', content: description },
        { hid: 'subject', name: 'subject', content: 'tienda de ropa' },
        { hid: 'summary', name: 'summary', content: description },
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
          content: `https://api2.komercia.co/logos/${tienda.logo}`,
        },
        { hid: 'og:site_name', name: 'og:site_name', content: tienda.nombre },
        { hid: 'og:description', name: 'og:description', content: description },
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
      ],
      script: [
        {
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyByh33xchBmphNi10U-eB3oCX9sVVT4fiY',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `https://api2.komercia.co/logos/${tienda.logo}`,
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
        },
      ],
    }
  },
  computed: {
    dataCookies() {
      return this.$store.state.dataCookies
    },
    template() {
      return this.$store.state.template
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullPathServer() {
      return this.$store.state.fullPathServer
    },
    settingBytemplatePrueba() {
      return this.$store.state.settingBytemplatePrueba
    },
    headerTemplate() {
      let headerComponent = ''
      switch (this.template) {
        case 3:
          headerComponent = 'KoHeader1'
          break
        case 5:
          headerComponent = 'KoHeader1'
          break
        case 6:
          headerComponent = 'KoHeader2'
          break
        case 7:
          headerComponent = 'KoHeader3'
          break
      }
      return headerComponent
    },
    footerTemplate() {
      let headerComponent = ''
      switch (this.template) {
        case 5:
          headerComponent = 'KoHeader1'
          break
        case 6:
          headerComponent = 'KoHeader2'
          break
      }
      return headerComponent
    },
    analytics() {
      return this.$store.state.analytics_tagmanager
    },

    fontStyle() {
      return {
        '--font-style': 'Roboto',
      }
    },

    // analytics_tagmanager() {
    //   return this.$store.state.analytics_tagmanager
    // },
  },
  methods: {
    acceptCookies() {
      document.getElementById('modalCookies').style.bottom = '-135px'
      document.cookie = `authCookies = 1; path=/; expires=Thu, 01 Dec 2050 00:00:00 UTC;`
    },
    declineCookies() {
      document.getElementById('modalCookies').style.bottom = '-135px'
    },
    acceptClose() {
      document.getElementById('modalNotificacion').style.zIndex = '-2'
      document.getElementById('modalNotificacion').style.opacity = '0'
    },
  },
}
</script>

<style>
:root {
  --purple: #4429b4;
  --green: #00dd8d;
  --magenta: #c52675;
  --yellow: #f2b931;

  --background_color_1: #fff;
  --background_color_2: #e4e4e4;
  --color_background_hover: #cccccc;

  --color_text: #1e0e62;
  --color_hover_text: #c52675;
  --color_subtext: rgba(21, 20, 57, 0.541);

  --color_shopping_cart: #25dac5;
  --color_icon: #25dac5;

  --color_text_btn: #000;
  --color_border_btn: #25dac5;
  --color_background_btn: #25dac5;
  --btnhover: #c52675;

  --color_background_btn_2: #000;
  --btnhover2: #c52675;

  --color_border: rgba(110, 110, 133, 0.342);

  --logo_width: 120px;
  --radius_btn: 5px;
}
* {
  margin: 0px;
  padding: 0px;
  /* font-family: 'Poppins'; */
  font-family: var(--font-style);
  outline: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none !important;
}
.wrapper-whatsapp {
  width: 60px;
  height: 60px;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00bb2d;
  border-radius: 50px;
  z-index: 2;
  bottom: 60px;
  right: 10px;
  cursor: pointer;
  transition: all 300ms ease-in;
}
.wrapper-whatsapp:hover {
  background: #2ac04e;
}
.button-whatsapp {
  fill: white;
  width: 38px;
}
.wrapper-cookie {
  z-index: 3;
  position: fixed;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0px;
  background: transparent;
  transition: all 200ms ease-in;
}
.content-cookie {
  padding: 10px;
  width: 100%;
  max-width: 1300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #53585ee5;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-box-shadow: 3px 3px 28px 3px rgba(0, 0, 0, 0.46);
  box-shadow: 3px 3px 28px 3px rgba(0, 0, 0, 0.46);
}
.title {
  font-size: 16px;
  color: white;
}
.wrapper-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.content-btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.btn-accept {
  width: 129px;
  border-radius: 5px;
  color: black;
  border: solid 2px #25dac5;
  background-color: #25dac5;
  padding: 4px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-accept:hover {
  color: white;
  border: solid 2px rgb(25, 26, 27);
  background-color: rgb(25, 26, 27);
}
.btn-decline {
  width: 140px;
  margin-left: 10px;
  border-radius: 5px;
  color: white;
  border: solid 2px rgb(25, 26, 27);
  background-color: rgb(25, 26, 27);
  padding: 4px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-decline:hover {
  border: solid 2px rgb(25, 26, 27);
  background-color: rgb(25, 26, 27);
}
._link {
  width: 119px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #41aaf0;
  text-decoration: none;
}
._link:hover {
  color: #2c85c0;
}
.wrapper-notificacion {
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
.content-notificacion {
  padding: 15px;
  width: 100%;
  max-width: 320px;
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
.title-noti {
  font-size: 25px;
  font-weight: bold;
  color: var(--purple);
  margin-bottom: 10px;
}
.subtitle-noti {
  font-size: 14px;
  color: black;
  margin-bottom: 10px;
}
.btn-acceptM {
  width: 129px;
  border-radius: 5px;
  color: white;
  border: solid 2px var(--purple);
  background-color: var(--purple);
  padding: 4px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-acceptM:hover {
  color: var(--purple);
  border: solid 2px var(--green);
  background-color: var(--green);
}
@media (max-width: 768px) {
  .wrapper-btn {
    flex-direction: column;
  }
}
@media (max-width: 700px) {
  .content-cookie {
    flex-direction: column;
  }
  .title {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
  }
  ._link {
    margin-top: 5px;
    margin-left: 0px;
  }
}
@media (max-width: 400px) {
  .wrapper-whatsapp {
    bottom: 50px;
    right: 10px;
  }
}
</style>
