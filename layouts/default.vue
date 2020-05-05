<template>
  <div>
    <div v-if="this.estado">
      <KHeader2 />
      <nuxt />
      <KFooter1 />
    </div>
    <div v-else>
      <Ktemplate2 />
    </div>
  </div>
</template>

<script>
import KHeader2 from '../components/template/header'
import KFooter1 from '../components/template/footer'
import Ktemplate2 from './template2-layout'

export default {
  components: {
    KHeader2,
    KFooter1,
    Ktemplate2,
  },
  data() {
    return {
      estado: false,
    }
  },
  async mounted() {
    let full = window.location.host
    //window.location.host is subdomain.domain.com
    let parts = full.split('.')
    let subdomain = parts[0]
    console.log(subdomain)
    let arrayStores

    if (subdomain == 'topalxe') {
      arrayStores = 1
    }
    if (subdomain == 'perfecta') {
      arrayStores = 889
    }
    if (subdomain == 'ohlala') {
      arrayStores = 347
    }
    if (subdomain == 'cultura') {
      arrayStores = 802
    }
    if (subdomain == 'tutienda') {
      arrayStores = 582
    }
    // this.$store.dispatch('GET_DATA')
    this.$store.dispatch('GET_DATA_TIENDA_BY_ID', arrayStores)
    await this.$store.dispatch('GET_LOGIN')
    // this.$store.dispatch('GET_STORELAYOUT')
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
            : `http://${tienda.subdominio}.komercia.co`,
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
            : `http://${tienda.subdominio}.komercia.co`,
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
}
</script>

<style>
:root {
  --purple: #4429b4;
  --green: #00dd8d;
  --magenta: #c52675;
  --yellow: #f2b931;
  --color_text: #0c0c0c;
  --color_background: #fff;
}
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Poppins';
  outline: none;
}
</style>
