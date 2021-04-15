<template>
  <div
    :style="{
      '--font-style':
        this.settingByTemplate &&
        this.settingByTemplate.settings &&
        this.settingByTemplate.settings.tipo_letra
          ? this.settingByTemplate.settings.tipo_letra
          : 'Roboto',
    }"
  >
    <component
      v-bind="componentsProps"
      :is="headerTemplate"
      v-if="showTemplate.showHeader"
    />
    <nuxt v-if="showTemplate.showBody" />
    <component
      v-bind="componentsProps"
      :is="footerTemplate"
      v-if="showTemplate.showFooter"
    />
    <KoFooterCountry :dataStore="dataStore" v-if="showTemplate.showCountry" />
    <div
      class="wrapper-whatsapp"
      v-if="dataStore.tienda.whatsapp"
      @click="redirectWhatsapp()"
    >
      <koWhatsapp class="button-whatsapp" />
      <span
        >WhatsApp<br /><small>{{ dataStore.tienda.whatsapp }}</small></span
      >
    </div>
    <!-- <div class="wrapper-cookie" id="modalCookies" v-if="!dataCookies">
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
            <a
              class="_link"
              href="http://www.allaboutcookies.org/"
              target="_blank"
              rel="noreferrer noopener"
              >¿Qué son las cookies?</a
            >
          </div>
        </div>
      </div>
    </div> -->
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
  </div>
</template>

<script>
import KoHeader1 from '../components/headers/header1/Ko-Header-1'
import KoHeader2 from '../components/headers/header2/Ko-Header-2'
import KoHeader3 from '../components/headers/header3/Ko-Header-3'
import KoHeader4 from '../components/headers/header4/Ko-Header-4'
import KoHeader5 from '../components/headers/header5/Ko-Header-5'
import KoHeader6 from '../components/headers/header6/Ko-Header-6'
import KoHeader7 from '../components/headers/header7/Ko-Header-7'
import KoFooter1 from '../components/footers/footer1/Ko-Footer-1'
import KoFooter2 from '../components/footers/footer2/Ko-Footer-2'
import KoFooter4 from '../components/footers/footer4/Ko-Footer-4'
import KoFooter5 from '../components/footers/footer5/Ko-Footer-5'
import KoFooter6 from '../components/footers/footer6/Ko-Footer-6'
import KoFooter7 from '../components/footers/footer7/Ko-Footer-7'

import KoFooterCountry from '../components/footers/footer1/Ko-Footer-Country'
import koWhatsapp from '../components/whatsapp/whatsapp'
import koTiendaCerrada from '../assets/img/tiendaCerrada'

//template6
// import Ko6Header1 from '../components/headers/header1/Ko6-Header-1'
// import Ko6Footer1 from '../components/footers/footer1/Ko6-Footer-1'

export default {
  components: {
    KoHeader1,
    KoHeader2,
    KoHeader3,
    KoHeader4,
    KoHeader5,
    KoHeader6,
    KoHeader7,
    KoFooter1,
    KoFooter2,
    KoFooter4,
    KoFooter5,
    KoFooter6,
    KoFooter7,
    KoFooterCountry,
    koWhatsapp,
    koTiendaCerrada,
    // Ko6Header1,
    // Ko6Footer1,
  },
  mounted() {
    this.$store.dispatch('GET_COOKIES')
    this.$store.dispatch('GET_SHOPPING_CART')
    let domain = this.$route.fullPath
    if (domain == '/?clearCart=true') {
      this.$store.commit('DELETEALLITEMSCART')
      this.$store.commit('UPDATE_CONTENTCART')
    }
  },
  head() {
    let tipo_letra
    let tipo_letra2
    let tipo_letra3
    switch (this.template) {
      case 3:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Roboto'
        break
      case 5:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Roboto'
        break
      case 6:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Roboto'
        break
      case 7:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate7 &&
          this.settingByTemplate7.settingGeneral &&
          this.settingByTemplate7.settingGeneral.fount_1
            ? this.settingByTemplate7.settingGeneral.fount_1
            : 'David Libre'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra2 =
          this.settingByTemplate7 &&
          this.settingByTemplate7.settingGeneral &&
          this.settingByTemplate7.settingGeneral.fount_2
            ? this.settingByTemplate7.settingGeneral.fount_2
            : 'Great Vibes'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra3 =
          this.settingByTemplate7 &&
          this.settingByTemplate7.settingGeneral &&
          this.settingByTemplate7.settingGeneral.fount_3
            ? this.settingByTemplate7.settingGeneral.fount_3
            : 'Lora'
        break
      case 9:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Poppins'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra2 =
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Roboto'
        break
      case 10:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings.tipo_letra
            ? this.settingByTemplate.settings.tipo_letra
            : 'Poppins'
        break
    }
    let tienda = this.$store.state.dataStore.tienda
    let tidio =
      this.analytics_tagmanager && this.analytics_tagmanager.tidio_user
        ? this.analytics_tagmanager.tidio_user
        : ''
    let FacebookPixel1 =
      this.analytics_tagmanager &&
      this.analytics_tagmanager.facebook_pixel_metatag_1
        ? this.analytics_tagmanager.facebook_pixel_metatag_1
        : ''
    let geolocalizacion = this.$store.state.dataStore.geolocalizacion
    let description = tienda.descripcion.replace(/<[^>]*>?/g, '')
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
        {
          hid: 'og:title',
          name: 'og:title',
          content: tienda.nombre ? tienda.nombre : 'Tienda',
        },
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
        {
          name: 'facebook-domain-verification',
          content: FacebookPixel1 ? `${FacebookPixel1}` : '',
        },
        {
          name: ' google',
          content: ' notranslate',
        },
      ],
      script: [
        {
          src:
            'https://maps.googleapis.com/maps/api/js?key=AIzaSyByh33xchBmphNi10U-eB3oCX9sVVT4fiY',
        },
        {
          src: tidio ? `https://code.tidio.co/${tidio}.js` : '',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `https://api2.komercia.co/logos/${tienda.logo}`,
        },
        {
          href:
            this.template == 3 ||
            this.template == 5 ||
            this.template == 6 ||
            this.template == 10 ||
            this.template == 11
              ? `https://fonts.googleapis.com/css?family=${tipo_letra}:100,200,300,400,500,600,700,800,900&display=swap`
              : '',
          rel: 'stylesheet',
        },
        {
          href:
            this.template == 7
              ? `https://fonts.googleapis.com/css2?family=${tipo_letra}&display=swap`
              : '',
          rel: 'stylesheet',
        },
        {
          href:
            this.template == 7
              ? `https://fonts.googleapis.com/css2?family=${tipo_letra2}&display=swap`
              : '',
          rel: 'stylesheet',
        },
        {
          href:
            this.template == 7
              ? `https://fonts.googleapis.com/css2?family=${tipo_letra3}&display=swap`
              : '',
          rel: 'stylesheet',
        },
        {
          href:
            this.template == 9
              ? `https://fonts.googleapis.com/css2?family=${tipo_letra}&display=swap`
              : '',
          rel: 'stylesheet',
        },
        {
          href:
            this.template == 9
              ? `https://fonts.googleapis.com/css2?family=${tipo_letra2}&display=swap`
              : '',
          rel: 'stylesheet',
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
    headerTemplate() {
      // let headerComp = ''
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
        // case 6:
        //   if (this.settingByTemplate.header) {
        //     switch (this.settingByTemplate.header) {
        //       case 1:
        //         headerComp = 'Ko6Header1'
        //         break
        //       case 2:
        //         headerComp = 'KoHeader2'
        //         break
        //     }
        //     return headerComp
        //   }
        //   break
        case 7:
          headerComponent = 'KoHeader4'
          break
        case 8:
          headerComponent = 'KoHeader3'
          break
        case 9:
          headerComponent = 'KoHeader5'
          break
        case 10:
          headerComponent = 'KoHeader6'
          break
        case 11:
          headerComponent = 'KoHeader7'
          break
      }
      return headerComponent
    },
    footerTemplate() {
      let footerComponent = ''
      switch (this.template) {
        case 3:
          footerComponent = 'KoFooter1'
          break
        case 5:
          footerComponent = 'KoFooter1'
          break
        case 6:
          footerComponent = 'KoFooter2'
          break
        // case 6:
        //   if (this.settingByTemplate.footer) {
        //     switch (this.settingByTemplate.footer) {
        //       case 1:
        //         footerComp = 'Ko6Footer1'
        //         break
        //       case 2:
        //         footerComp = 'KoFooter2'
        //         break
        //     }
        //     return footerComp
        //   }
        //   break
        case 7:
          footerComponent = 'KoFooter4'
          break
        case 8:
          footerComponent = 'KoFooter1'
          break
        case 9:
          footerComponent = 'KoFooter5'
          break
        case 10:
          footerComponent = 'KoFooter6'
          break
        case 11:
          footerComponent = 'KoFooter7'
          break
      }
      return footerComponent
    },
    analytics_tagmanager() {
      return this.$store.state.analytics_tagmanager
    },
    settingBase() {
      return this.$store.state.settingBase
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    settingByTemplate9() {
      return this.$store.state.settingByTemplate9
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingByTemplate:
          this.settingByTemplate &&
          this.settingByTemplate.settings &&
          this.settingByTemplate.settings['--background_color_1']
            ? this.settingByTemplate.settings
            : this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                setting7Header:
                  this.settingByTemplate7 && this.settingByTemplate7.header
                    ? this.settingByTemplate7.header
                    : null,
                setting7Footer:
                  this.settingByTemplate7 && this.settingByTemplate7.footer
                    ? this.settingByTemplate7.footer
                    : null,
                setting7General:
                  this.settingByTemplate7 &&
                  this.settingByTemplate7.settingGeneral
                    ? this.settingByTemplate7.settingGeneral
                    : null,
                settingKProdutCard:
                  this.settingByTemplate7 && this.settingByTemplate7.card
                    ? this.settingByTemplate7.card
                    : null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                setting9Header:
                  this.settingByTemplate9 && this.settingByTemplate9.header
                    ? this.settingByTemplate9.header
                    : null,
                setting9Footer:
                  this.settingByTemplate9 && this.settingByTemplate9.footer
                    ? this.settingByTemplate9.footer
                    : null,
                setting9General:
                  this.settingByTemplate9 &&
                  this.settingByTemplate9.settingGeneral
                    ? this.settingByTemplate9.settingGeneral
                    : null,
              },
            ]
          : null,
      }
    },
    showTemplate() {
      return this.$store.state.showTemplate
    },
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
    acceptCookies() {
      document.getElementById('modalCookies').style.bottom = '-135px'
      document.cookie =
        'authCookies = 1; path=/; expires=Thu, 01 Dec 2050 00:00:00 UTC;'
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
  --color_hover_text: #e64956;
  --btnhover: #929292;
  --radius_btn: 5px;
}
* {
  margin: 0px;
  padding: 0px;
  font-family: var(--font-style);
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none !important;
}
.wrapper-whatsapp {
  position: fixed;
  transform: translate(108px, 0px);
  top: 50%;
  right: 0px;
  width: 155px;
  color: white;
  overflow: hidden;
  background-color: #25d366;
  border-radius: 10px 0 0 10px;
  z-index: 3;
  transition: all 0.5s ease-in-out;
  vertical-align: middle;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  max-height: 51px;
}
.wrapper-whatsapp:hover {
  transform: translate(0px, 0px);
}
.wrapper-whatsapp span {
  font-size: 15px;
  padding-top: 8px;
  padding-bottom: 10px;
  position: relative;
  line-height: 16px;
  font-weight: bolder;
  margin-left: 5px;
  color: white;
}
.button-whatsapp {
  width: 50px;
  fill: white;
  line-height: 30px;
  padding: 8px;
  font-weight: bold;
  transform: rotate(0deg);
  transition: all 0.5s ease-in-out;
  text-align: center;
}
.button-whatsapp:hover {
  transform: rotate(360deg);
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
  max-height: 29px;
  width: 140px;
  border-radius: 5px;
  color: white;
  border: solid 2px black;
  background-color: black;
  padding: 4px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-accept:hover {
  color: white;
  border: solid 2px gray;
  background-color: gray;
}
._link {
  width: 149px;
  margin-left: 10px;
  font-size: 12px;
  font-weight: bold;
  color: #41aaf0;
  text-align: center;
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
@media (max-width: 700px) {
  .content-cookie {
    flex-direction: column;
  }
  .title {
    font-size: 14px;
    margin-bottom: 10px;
    text-align: center;
  }
}
</style>
