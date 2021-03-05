<template>
  <div class="general-container">
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
        <button class="btn-acceptM" @click="acceptClose()">
          Aceptar
        </button>
      </div>
    </div>
    <div class="wrapper-notificacion-wa" v-if="dataStore.tienda.whatsapp == ''">
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
  </div>
</template>

<script>
import koTiendaCerrada from '../assets/img/tiendaCerrada'
export default {
  components: {
    koTiendaCerrada,
  },
  mounted() {
    this.$store.dispatch('GET_SHOPPING_CART')
    let domain = this.$route.fullPath
    if (domain == '/?clearCart=true') {
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENTCART')
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
        amp: true,
      },
      meta: [
        {
          name: ' google',
          content: ' notranslate',
        },
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
        { hid: 'description', name: 'description', content: description },
        { hid: 'subject', name: 'subject', content: 'Tienda Online' },
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
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Poppins:400,500,600&display=swap',
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
  },
  methods: {
    acceptClose() {
      document.getElementById('modalNotificacion').style.zIndex = '-2'
      document.getElementById('modalNotificacion').style.opacity = '0'
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
</style>
