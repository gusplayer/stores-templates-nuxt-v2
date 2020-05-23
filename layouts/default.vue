<template>
  <div>
    <KoHeader1 :dataStore="dataStore" />
    <nuxt />
    <KFooter1 :dataStore="dataStore" />
  </div>
</template>

<script>
import KoHeader1 from '../components/template1/Ko-Header-1'
import KFooter1 from '../components/template1/Ko-Footer-1'

export default {
  components: {
    KoHeader1,
    KFooter1,
  },
  mounted() {
    this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_SHOPPING_CART')
    this.$store.dispatch(
      'GET_SETTINGS_BY_TEMPLATE',
      this.$store.state.dataStore.tienda.id_tienda
    )
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
  computed: {
    dataStore() {
      return this.$store.state.dataStore
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

  --color_border: rgba(21, 20, 57, 0.541);

  --logo_width: 120px;
  --radius_btn: 25px;
}
* {
  margin: 0px;
  padding: 0px;
  font-family: 'Poppins';
  /* outline: none; */
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none !important;
}
</style>
