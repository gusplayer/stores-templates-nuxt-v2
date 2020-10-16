<template>
  <div class="general-container">
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import currentFormat from '../mixins/currentFormat'
Vue.mixin(currentFormat)
export default {
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
}
</script>

<style>
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
</style>
