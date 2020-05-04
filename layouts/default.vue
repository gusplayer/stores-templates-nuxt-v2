<template>
  <div>
    <div>
      <!-- <KHeader /> -->

      <nuxt />
      <!-- <kFooter /> -->
    </div>
  </div>
</template>

<script>
import API from '../components/constructor/_api/api'

export default {
  async mounted() {
    let full = window.location.host
    //window.location.host is subdomain.domain.com
    let parts = full.split('.')
    let sub = parts[0]
    console.log(sub)

    let arrayStores = ['1', '1900', '3151', '347', '364', '1359']
    // let arrayStores = [
    //   { value: 1, label: 'Topalxe' },
    //   { value: 347, label: 'Ohlala' },
    //   { value: 364, label: "Ace Delivery's" },
    //   { value: 1108, label: 'Familia Comepasto' },
    //   { value: 889, label: 'Perfecta' },
    //   { value: 605, label: 'Origen SP' },
    //   { value: 582, label: 'Tu Tienda' },
    //   { value: 1100, label: 'Macrobrand' },
    //   { value: 1559, label: 'Sticker Hipster' },
    //   { value: 1429, label: 'boom Store Colombia' },
    //   { value: 1359, label: 'Señora pepa' },
    // ]
    const randomElement =
      arrayStores[Math.floor(Math.random() * arrayStores.length)]
    // const randomElement = 1900
    this.$store.dispatch('GET_DATA')
    this.$store.dispatch('GET_DATA_TIENDA_BY_ID', randomElement)
    await this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_STORELAYOUT')
    this.tiposComponentes = await API.getTipoComponente()
    this.listadoComponentes = await API.getReferenciasComponente()
    // if (this.token.length) {
    //   this.$store.dispatch('GET_SETTINGS_COMPONENT', 96)
    // }
  },
  // components: { kFooter, KHeader,  },

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
