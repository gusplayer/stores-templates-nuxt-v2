<template>
  <div :style="themeStyleWa">
    <!-- <KoHeaderTest /> -->
    <KoHeaderWp :dataStore="dataStore" />
    <Categories :dataStore="dataStore" />
    <!-- <KoNotificacion :settingBytemplatePrueba="settingBytemplatePrueba" /> -->
    <nuxt />
    <!-- <KFooter1 :dataStore="dataStore" /> -->
  </div>
</template>

<script>
import KoHeaderWp from '../components/whatsapp/Header'
import KFooter1 from '../components/whatsapp/Footer'
import Categories from '../components/whatsapp/Categories'
// import KoHeaderTest from '../components/headers/header_wp/Ko-Header-wp'
// import koWhatsapp from '../components/whatsapp/whatsapp'

export default {
  components: {
    KoHeaderWp,
    KFooter1,
    Categories,
    // KoHeaderTest,
  },
  mounted() {
    // this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_SHOPPING_CART')
    this.$store.dispatch(
      'GET_SETTINGS_BY_TEMPLATE',
      this.$store.state.dataStore.tienda
      // this.$store.state.dataStore.tienda.id_tienda
    )

    let domain = this.$route.fullPath
    if (domain == '/?clearCart=true') {
      // console.log(domain, 'borrar carrito')
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENTCART')
    }

    // this.$store.dispatch(
    //   'GET_ANALYTICS_TAGMANAGER',
    //   this.$store.state.dataStore.tienda.id_tienda
    // )
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
        // {
        //   src: `https://www.googletagmanager.com/gtag/js?id=${this.analytics_tagmanager.analytics}`,
        // },
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
      ],
    }
  },
  computed: {
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

    themeStyleWa() {
      return {
        '--font-style': 'Poppins',

        '--purple': ' #4429b4',
        '--green': '#00dd8d',
        '--magenta': '#c52675',
        '--yellow': '#f2b931',

        '--background_color_1': '#128c7e',

        '--background_color_2': '#e4e4e4',
        '--color_background_hover': '#cccccc',

        '--color_text': '#1e0e62',
        '--color_hover_text': '#c52675',
        '--color_subtext': 'rgba(21, 20, 57, 0.541)',

        '--color_shopping_cart': '#25dac5',
        '--color_icon': '#25dac5',

        '--color_text_btn': '#000',
        '--color_border_btn': '#25dac5',
        '--color_background_btn': '#25dac5',
        '--btnhover': '#c52675',

        '--color_background_btn_2': ' #000',
        '--btnhover2': '#c52675',

        '--color_border': 'rgba(110, 110, 133, 0.342)',

        '--logo_width': '120px',
        '--radius_btn': '5px',
      }
    },

    // analytics_tagmanager() {
    //   return this.$store.state.analytics_tagmanager
    // },
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
    redirectWhatsapp() {
      if (this.dataStore.tienda.whatsapp.length > 10) {
        let phone_number_whatsapp = this.dataStore.tienda.whatsapp
        if (phone_number_whatsapp.charAt(0) === '+') {
          phone_number_whatsapp = phone_number_whatsapp.slice(1)
        }
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/${phone_number_whatsapp}/?text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=${phone_number_whatsapp}&text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información%20${window.location}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/57${this.dataStore.tienda.whatsapp}/?text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=57${this.dataStore.tienda.whatsapp}&text=Hola%20vengo%20de%20tu%20tienda%20online%20y%20me%20gustaría%20recibir%20mas%20información%20${window.location}`,
            '_blank'
          )
        }
      }
    },
  },
}
</script>

<style></style>
