<template>
  <section v-show="components">
    <div
      v-for="(component, index) in components"
      :key="index"
      :setting="component.setting"
      :is="component.name"
    ></div>
  </section>
</template>

<script>
// import product from '~/components/products/product2'
export default {
  data() {
    return {}
  },
  head() {
    let producto = this.$store.state.detalleProducto
    let tienda = this.$store.state.dataStore.tienda
    let geolocalizacion = this.$store.state.dataStore.geolocalizacion
    let description = tienda.descripcion.replace(/<[^>]*>?/g, '')
    let path = this.$route.path
    if (producto) {
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
              ? `${tienda.dominio}/${path}`
              : `https://${tienda.subdominio}.komercia.co${path}`,
          },
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
          // openGraph meta
          { hid: 'og:title', name: 'og:title', content: producto.nombre },
          {
            hid: 'og:type',
            name: 'og:type',
            content: `Tienda online ${tienda.nombre}`,
          },
          {
            hid: 'og:url',
            name: 'og:url',
            content: tienda.dominio
              ? `${tienda.dominio}/${path}`
              : `https://${tienda.subdominio}.komercia.co${path}`,
          },
          {
            hid: 'og:image',
            name: 'og:image',
            content: this.fitImage(producto.foto_cloudinary),
          },
          { hid: 'og:site_name', name: 'og:site_name', content: tienda.nombre },
          {
            hid: 'og:description',
            name: 'og:description',
            content: description,
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
        ],
        link: [
          //  { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
          {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/icon?family=Material+Icons',
          },
        ],
      }
    }
  },
  computed: {
    components() {
      return this.$store.state.storeLayout.pages.filter(
        (page) => page.value === 'product_details'
      )[0].components
    },
  },
  methods: {
    fitImage(image) {
      let fitImage = image.split('/upload/')
      return (
        'https://res.cloudinary.com/komercia-store/image/upload/w_600,q_auto:best,f_auto/' +
        fitImage[1]
      )
    },
  },
}
</script>

<style scoped></style>
