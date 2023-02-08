<template>
  <div>
    <div class="general-container" v-if="dataStore">
      <div v-if="stateModalPwd">
        <nuxt />
      </div>
      <koModalSecurity :dataStore="dataStore" v-else />
    </div>
    <div v-else>
      <koTiendaError />
    </div>
  </div>
</template>

<script>
import koTiendaError from '../components/Ko-errorStore'
import koModalSecurity from '../components/modal/Ko-modal-security.vue'
import { mapState } from 'vuex'
export default {
  name: 'defaultWa',
  components: {
    koTiendaError,
    koModalSecurity,
  },
  beforeMount() {
    if (this.dataStore.tienda.dominio) {
      caches.keys().then(function (names) {
        for (let name of names) caches.delete(name)
      })
    }
  },
  mounted() {
    if (
      this.analytics_tagmanager &&
      this.analytics_tagmanager.pixel_facebook != null
    ) {
      this.$fb.setPixelId(this.analytics_tagmanager.pixel_facebook)
      this.$fb.track('PageView')
      this.$fb.enable()
    }
    this.$store.dispatch('GET_COOKIES_PWD')
    this.$store.dispatch('GET_SHOPPING_CART')
    if (this.$route.query && this.$route.query.clearCart == 'true') {
      this.$store.commit('DELETE_ALL_ITEMS_CART')
      this.$store.commit('UPDATE_CONTENT_CART')
    }
    if (this.$route.query && this.$route.query.openCart == 'true') {
      this.$store.commit('SET_OPEN_ORDER', true)
    }
  },
  head() {
    let tienda = this.$store.state.dataStore.tienda
      ? this.$store.state.dataStore.tienda
      : ''
    let geolocalizacion = this.$store.state.dataStore.geolocalizacion
    let description =
      tienda && tienda.descripcion
        ? tienda.descripcion.replace(/<[^>]*>?/g, '')
        : ''
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
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: tienda.nombre ? tienda.nombre : 'Tienda',
        },
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
          content:
            geolocalizacion && geolocalizacion.latitud
              ? geolocalizacion.latitud
              : '',
        },
        {
          hid: 'og:longitude',
          name: 'og:longitude',
          content:
            geolocalizacion && geolocalizacion.longitud
              ? geolocalizacion.longitud
              : '',
        },
        {
          hid: 'og:street-address',
          name: 'og:street-address',
          content:
            geolocalizacion && geolocalizacion.direccion
              ? geolocalizacion.direccion
              : '',
        },
        {
          name: ' google',
          content: ' notranslate',
        },
        {
          name: 'Content-Security-Policy',
          content: "script-src 'none'",
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
    ...mapState(['dataStore', 'stateModalPwd', 'analytics_tagmanager']),
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
</style>
