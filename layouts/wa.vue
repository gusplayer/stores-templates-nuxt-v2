<template>
  <div>
    <div
      class="w-full flex justify-center items-center bg-slate-100"
      v-if="dataStore"
    >
      <div v-if="stateModalPwd">
        <nuxt />
      </div>
      <koModalSecurity :dataStore="dataStore" v-else />
      <div
        class="wrapper-whatsapp"
        v-if="dataStore.tienda.whatsapp && dataStore.tienda.id_tienda != 16436"
        @click="redirectWhatsApp()"
      >
        <koWhatsApp class="button-whatsapp" />
        <span>
          WhatsApp<br /><small>
            {{ dataStore.tienda.whatsapp }}
          </small>
        </span>
      </div>
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
    koWhatsApp: () => import('../components/whatsapp/Ko-whatsApp.vue'),
  },
  beforeMount() {
    if (this.dataStore.tienda.dominio) {
      caches.keys().then(function (names) {
        for (let name of names) caches.delete(name)
      })
    }
  },
  async mounted() {
    // Configura y habilita el seguimiento de Facebook Pixel si está disponible
    if (this.analytics_tagmanager?.pixel_facebook != null) {
      this.$fb.setPixelId(this.analytics_tagmanager.pixel_facebook)
      this.$fb.track('PageView')
      this.$fb.enable()
    }

    // Ejecuta las acciones de forma concurrente usando Promise.all
    await Promise.all([
      this.$store.dispatch('GET_COOKIES_PWD'),
      this.$store.dispatch('GET_SHOPPING_CART'),
    ])

    // Borra todos los elementos del carrito y actualiza el contenido si la query 'clearCart' es 'true'
    if (this.$route.query?.clearCart === 'true') {
      this.$store.commit('DELETE_ALL_ITEMS_CART')
      this.$store.commit('UPDATE_CONTENT_CART')
    }

    // Establece 'SET_OPEN_ORDER' en true si la query 'openCart' es 'true'
    if (this.$route.query?.openCart === 'true') {
      this.$store.commit('SET_OPEN_ORDER', true)
    }
  },
  head() {
    let tienda = this.$store.state?.dataStore?.tienda ?? ''
    let geolocation = this.$store.state.dataStore.geolocalizacion
    let description = tienda?.descripcion?.replace(/<[^>]*>?/g, '') ?? ''
    let FacebookPixel1 =
      this.analytics_tagmanager?.facebook_pixel_metatag_1 ?? ''
    let googleMerchants = this.analytics_tagmanager?.google_merchant ?? ''
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
          content: description ?? 'Tienda Online',
        },
        { hid: 'subject', name: 'subject', content: 'Tienda Online' },
        {
          hid: 'summary',
          name: 'summary',
          content: description ?? 'Tienda Online',
        },
        {
          hid: 'url',
          name: 'url',
          content:
            tienda?.dominio ?? `https://${tienda.subdominio}.komercia.co`,
        },
        { hid: 'language', name: 'language', content: 'ES' },
        { hid: 'author', name: 'author', content: 'Komercia' },
        { hid: 'robots', name: 'robots', content: 'index,follow' },
        {
          hid: 'keywords',
          name: 'keywords',
          content:
            'tienda, store, shop, shopping, tienda online, online, Komercia, producto, articulo',
        },
        { hid: 'distribution', name: 'distribution', content: 'global' },
        {
          hid: 'Content-Language',
          'http-equiv': 'Content-Language',
          content: 'es',
        },
        //openGraph meta
        {
          hid: 'og:title',
          name: 'og:title',
          content: tienda?.nombre ?? 'Tienda',
        },
        {
          hid: 'og:type',
          name: 'og:type',
          content: `Tienda online ${tienda.nombre}`,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content:
            tienda?.dominio ?? `https://${tienda.subdominio}.komercia.co`,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`,
        },
        {
          hid: 'og:site_name',
          name: 'og:site_name',
          content: tienda?.nombre ?? 'Tienda',
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
          content: geolocation?.latitud ?? '',
        },
        {
          hid: 'og:longitude',
          name: 'og:longitude',
          content: geolocation?.longitud ?? '',
        },
        {
          hid: 'og:street-address',
          name: 'og:street-address',
          content: geolocation?.direccion ?? '',
        },
        {
          name: 'facebook-domain-verification',
          content: FacebookPixel1 ?? '',
        },
        {
          name: 'google-site-verification',
          content:
            googleMerchants ?? 'ce4pJPC3AEQoDU6jNkAEqV-Dwa1OUU8GxtRTR0d_MM8',
        },
        {
          name: 'Content-Security-Policy',
          content: "script-src 'none'",
        },
        {
          name: 'Cache-control',
          content: 'no-cache, no-store, must-revalidate',
        },
        {
          name: 'Pragma',
          content: 'no-cache',
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
          href: 'https://fonts.googleapis.com/css2?family=Poppins&display=swap',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
        },
      ],
    }
  },
  computed: {
    ...mapState(['dataStore', 'stateModalPwd', 'analytics_tagmanager']),
  },
  methods: {
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
    redirectWhatsApp() {
      let phone_number_whatsapp = this.dataStore.tienda.whatsapp
      if (phone_number_whatsapp.charAt(0) === '+') {
        phone_number_whatsapp = phone_number_whatsapp.slice(1)
      }

      const baseUrl = 'https://wa.me/'
      const text = this.constructMessageText()

      const whatsappUrl = this.mobileCheck()
        ? `${baseUrl}${phone_number_whatsapp}/?text=${text}`
        : `https://web.whatsapp.com/send?phone=${phone_number_whatsapp}&text=${text}`

      window.open(whatsappUrl, '_blank')
    },

    constructMessageText() {
      const tienda = this.dataStore.tienda
      const nombre = encodeURIComponent(tienda.nombre)
      const url = encodeURIComponent(window.location)

      switch (tienda.lenguaje) {
        case 'en':
          return `Hi%2C%20I%20came%20from%20your%20online%20store%20${nombre}%20and%20I%20would%20like%20to%20receive%20more%20information.%20%0AURL%3A%20${url}`
        case 'pt':
          return `Ol%C3%A1%2C%20vim%20de%20sua%20loja%20virtual%20${nombre}%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.%20%0AURL%3A%20${url}`
        default:
          return `Hola%20vengo%20de%20tu%20tienda%20online%20${nombre}%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n%20%0AURL%3A%20${url}`
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Poppins', sans-serif !important;
}
</style>
