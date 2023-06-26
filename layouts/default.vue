<template>
  <div>
    <div v-if="dataStore">
      <div v-if="stateModalPwd">
        <component v-bind="componentsProps" :is="headerTemplate" />
        <nuxt />
        <component v-bind="componentsProps" :is="footerTemplate" />
        <KoFooterCountry
          v-if="dataStore.tienda.template != 99"
          :dataStore="dataStore"
          :valueWa="false"
        />
        <div
          class="wrapper-whatsapp"
          v-if="dataStore.tienda.whatsapp"
          @click="redirectWhatsapp()"
        >
          <koWhatsApp class="button-whatsapp" />
          <span>
            WhatsApp<br /><small>
              {{ dataStore.tienda.whatsapp }}
            </small>
          </span>
        </div>
        <div
          id="modalNotificacion"
          v-if="
            dataStore.tienda.estado == 0 ||
            !expiredDate(dataStore.tienda.fecha_expiracion)
          "
          class="w-full h-screen fixed top-0 flex justify-center items-center z-100"
        >
          <div
            class="w-full h-screen top-0 absolute backdrop-blur"
            style="background-color: rgba(0, 0, 0, 0.767)"
          />
          <div
            class="w-full py-20 px-30 flex flex-col justify-center items-center bg-white-white rounded-10 shadow-md z-100"
            style="max-width: 250px"
          >
            <koTiendaCerrada />
            <p
              class="mt-15 text-base text-gray-500 text-center"
              style="max-width: 220px"
            >
              Disculpa, no podrá realizar compras por el momento,
            </p>
            <p
              v-if="expiredDate(dataStore.tienda.fecha_expiracion)"
              class="font-bold text-17 mt-15"
              style="color: #ff314d"
            >
              ¿Deseas continuar?
            </p>
            <button
              v-if="expiredDate(dataStore.tienda.fecha_expiracion)"
              class="w-full py-4 mt-15 text-base rounded-10 bg-black text-white-white hover:bg-slate-300 hover:text-black transition ease-in-out delay-75"
              @click="acceptClose()"
            >
              Aceptar
            </button>
          </div>
        </div>
      </div>
      <koModalSecurity :dataStore="dataStore" v-else />
    </div>
    <div v-else>
      <koTiendaError />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import expiredDate from '@/mixins/expiredDate'
export default {
  name: 'default',
  components: {
    // HEADER
    KoHeader1: () => import('../components/headers/header1/Ko-Header-1'),
    KoHeader2: () => import('../components/headers/header2/Ko-Header-2'),
    KoHeader3: () => import('../components/headers/header3/Ko-Header-3'),
    KoHeader4: () => import('../components/headers/header4/Ko-Header-4'),
    KoHeader5: () => import('../components/headers/header5/Ko-Header-5'),
    KoHeader6: () => import('../components/headers/header6/Ko-Header-6'),
    KoHeader7: () => import('../components/headers/header7/Ko-Header-7'),
    KoHeader8: () => import('../components/headers/header8/Ko-Header-8'),
    KoHeader9: () => import('../components/headers/header9/Ko-Header-9'),
    // FOOTER
    KoFooter1: () => import('../components/footers/footer1/Ko-Footer-1'),
    KoFooter2: () => import('../components/footers/footer2/Ko-Footer-2'),
    KoFooter4: () => import('../components/footers/footer4/Ko-Footer-4'),
    KoFooter5: () => import('../components/footers/footer5/Ko-Footer-5'),
    KoFooter6: () => import('../components/footers/footer6/Ko-Footer-6'),
    KoFooter7: () => import('../components/footers/footer7/Ko-Footer-7'),
    KoFooter8: () => import('../components/footers/footer8/Ko-Footer-8'),
    KoFooter9: () => import('../components/footers/K14_footer9/Ko-Footer-9'),
    // OTROS
    KoFooterCountry: () =>
      import('../components/footers/footer1/Ko-Footer-Country'),
    koTiendaCerrada: () => import('../assets/img/tiendaCerrada'),
    koTiendaError: () => import('../components/Ko-errorStore'),
    koModalSecurity: () => import('../components/modal/Ko-modal-security.vue'),
    koWhatsApp: () => import('../components/whatsapp/Ko-whatsApp.vue'),
  },
  mixins: [expiredDate],
  beforeMount() {
    if (this.dataStore.tienda.dominio) {
      caches.keys().then(function (names) {
        for (let name of names) caches.delete(name)
      })
    }
  },
  mounted() {
    if (this.analytics_tagmanager?.pixel_facebook != null) {
      this.$fb.setPixelId(this.analytics_tagmanager.pixel_facebook)
      this.$fb.track('PageView')
      this.$fb.enable()
    }
    this.$store.dispatch('GET_COOKIES')
    this.$store.dispatch('GET_COOKIES_PWD')
    this.$store.dispatch('GET_SHOPPING_CART')
    if (this.$route.query?.clearCart == 'true') {
      this.$store.commit('DELETE_ALL_ITEMS_CART')
      this.$store.commit('UPDATE_CONTENT_CART')
    }
    if (this.$route.query?.openCart == 'true') {
      this.$store.commit('SET_OPEN_ORDER', true)
    }

    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  head() {
    let tipo_letra
    let tipo_letra2
    let tipo_letra3
    switch (this.template) {
      case 3:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra = this.settingByTemplate?.settings?.tipo_letra ?? 'Roboto'
        break
      case 5:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra = this.settingByTemplate?.settings?.tipo_letra ?? 'Roboto'
        break
      case 6:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra = this.settingByTemplate?.settings?.tipo_letra ?? 'Roboto'
        break
      case 7:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate7?.settingGeneral?.fount_1 ?? 'David Libre'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra2 =
          this.settingByTemplate7?.settingGeneral?.fount_2 ?? 'Great Vibes'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra3 = this.settingByTemplate7?.settingGeneral?.fount_3 ?? 'Lora'
        break
      case 9:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate9?.settingGeneral?.fount_1 ?? 'Poppins'
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra2 =
          this.settingByTemplate9?.settingGeneral?.fount_2 ?? 'Roboto'
        break
      case 10:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate10?.settingGeneral?.fount_1 ?? 'Roboto'
        break
      case 11:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate11?.settingGeneral?.fount_1 ?? 'Roboto'
        break
      case 99:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra = 'Poppins'
        break
      case 12:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra = this.settingByTemplate12?.fontFamily ?? 'Poppins'
        break
      case 13:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate13?.settingGeneral?.fount_1 ?? 'Roboto'
        break
      case 14:
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        tipo_letra =
          this.settingByTemplate14?.settingsGeneral?.fount_1 ?? 'Poppins'
        break
    }
    let tienda = this.$store.state?.dataStore?.tienda ?? ''
    let tidio = this.analytics_tagmanager?.tidio_user ?? ''
    let FacebookPixel1 =
      this.analytics_tagmanager?.facebook_pixel_metatag_1 ?? ''
    let googleMerchants = this.analytics_tagmanager?.google_merchant ?? ''
    let geolocation = this.$store.state.dataStore.geolocalizacion
    let description = tienda?.descripcion?.replace(/<[^>]*>?/g, '') ?? ''
    return {
      title: tienda?.nombre ?? 'Tienda Online',
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
        {
          src: tidio ? `https://code.tidio.co/${tidio}.js` : '',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: `${this.$store.state.urlKomercia}/logos/${tienda.logo}`,
        },
        {
          href:
            this.template == 3 ||
            this.template == 5 ||
            this.template == 6 ||
            this.template == 7 ||
            this.template == 9 ||
            this.template == 10 ||
            this.template == 11 ||
            this.template == 13 ||
            this.template == 12 ||
            this.template == 14 ||
            this.template == 99
              ? `https://fonts.googleapis.com/css2?family=${tipo_letra}&display=swap`
              : '',
          rel: 'stylesheet',
        },
        {
          href:
            this.template == 7 || this.template == 9
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
      ],
    }
  },
  data() {
    return {
      headerComponentMap: {
        3: 'KoHeader1',
        5: 'KoHeader1',
        6: 'KoHeader2',
        7: 'KoHeader4',
        8: 'KoHeader3',
        9: 'KoHeader5',
        10: 'KoHeader6',
        11: 'KoHeader7',
        13: 'KoHeader8',
        14: 'KoHeader9',
      },
      footerComponentMap: {
        3: 'KoFooter1',
        5: 'KoFooter1',
        6: 'KoFooter2',
        7: 'KoFooter4',
        8: 'KoFooter1',
        9: 'KoFooter5',
        10: 'KoFooter6',
        11: 'KoFooter7',
        13: 'KoFooter8',
        14: 'KoFooter9',
      },
    }
  },
  computed: {
    ...mapState([
      'template',
      'dataStore',
      'dataCookies',
      'settingBase',
      'settingByTemplate',
      'settingByTemplate7',
      'settingByTemplate9',
      'settingByTemplate10',
      'settingByTemplate11',
      'settingByTemplate12',
      'settingByTemplate13',
      'settingByTemplate14',
      'analytics_tagmanager',
    ]),
    headerTemplate() {
      const headerComponent =
        this.headerComponentMap[parseInt(this.template)] || ''
      return headerComponent
    },
    footerTemplate() {
      const footerComponent =
        this.footerComponentMap[parseInt(this.template)] || ''
      return footerComponent
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        settingByTemplate: this.settingByTemplate?.settings ?? this.settingBase,
        settingByTemplate7: this.settingByTemplate7
          ? [
              {
                setting7Header: this.settingByTemplate7?.header ?? null,
                setting7Footer: this.settingByTemplate7?.footer ?? null,
                setting7General:
                  this.settingByTemplate7?.settingGeneral ?? null,
                settingKProdutCard: this.settingByTemplate7?.card ?? null,
              },
            ]
          : null,
        settingByTemplate9: this.settingByTemplate9
          ? [
              {
                setting9Header: this.settingByTemplate9?.header ?? null,
                setting9Footer: this.settingByTemplate9?.footer ?? null,
                setting9General:
                  this.settingByTemplate9?.settingGeneral ?? null,
              },
            ]
          : null,
        settingByTemplate10: this.settingByTemplate10
          ? [
              {
                setting10Header: this.settingByTemplate10?.header ?? null,
                setting10Footer: this.settingByTemplate10?.footer ?? null,
                setting10General:
                  this.settingByTemplate10?.settingGeneral ?? null,
                pages: this.settingByTemplate10?.pages ?? null,
              },
            ]
          : null,
        settingByTemplate11: this.settingByTemplate11
          ? [
              {
                setting11Header: this.settingByTemplate11?.header ?? null,
                setting11Footer: this.settingByTemplate11?.footer ?? null,
                setting11General:
                  this.settingByTemplate11?.settingGeneral ?? null,
                newsletter: this.settingByTemplate11?.newsletter ?? null,
                pages: this.settingByTemplate11?.pages ?? null,
              },
            ]
          : null,
        settingByTemplate13: this.settingByTemplate13
          ? [
              {
                setting13Header: this.settingByTemplate13?.header ?? null,
                setting13Footer: this.settingByTemplate13?.footer ?? null,
                setting13General:
                  this.settingByTemplate13?.settingGeneral ?? null,
                pages: this.settingByTemplate13?.pages ?? null,
              },
            ]
          : null,
        settingByTemplate14: this.settingByTemplate14
          ? [
              {
                setting14Header: this.settingByTemplate14?.header ?? null,
                setting14Footer: this.settingByTemplate14?.footer ?? null,
                setting14General:
                  this.settingByTemplate14?.settingsGeneral ?? null,
                pages: this.settingByTemplate14?.pages ?? null,
              },
            ]
          : null,
      }
    },
    stateModalPwd: {
      get() {
        return this.$store.state.stateModalPwd
      },
      set(value) {
        this.$store.commit('SET_STATE_MODAL_PWD', value)
      },
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
        var text = ''
        if (this.dataStore.tienda.lenguaje == 'es') {
          text = `Hola%20vengo%20de%20tu%20tienda%20online%20${encodeURIComponent(
            this.dataStore.tienda.nombre
          )}%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n%20%0AURL%3A%20${encodeURIComponent(
            window.location
          )}`
        } else if (this.dataStore.tienda.lenguaje == 'en') {
          text = `Hi%2C%20I%20came%20from%20your%20online%20store%20${encodeURIComponent(
            this.dataStore.tienda.nombre
          )}%20and%20I%20would%20like%20to%20receive%20more%20information.%20%0AURL%3A%20${encodeURIComponent(
            window.location
          )}`
        } else if (this.dataStore.tienda.lenguaje == 'pt') {
          text = `Ol%C3%A1%2C%20vim%20de%20sua%20loja%20virtual%20${encodeURIComponent(
            this.dataStore.tienda.nombre
          )}%20e%20gostaria%20de%20receber%20mais%20informa%C3%A7%C3%B5es.%20%0AURL%3A%20${encodeURIComponent(
            window.location
          )}`
        } else {
          text = `Hola%20vengo%20de%20tu%20tienda%20online%20${encodeURIComponent(
            this.dataStore.tienda.nombre
          )}%20y%20me%20gustar%C3%ADa%20recibir%20mas%20informaci%C3%B3n%20%0AURL%3A%20${encodeURIComponent(
            window.location
          )}`
        }
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/${phone_number_whatsapp}/?text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=${phone_number_whatsapp}&text=${text}`,
            '_blank'
          )
        }
      } else {
        if (this.mobileCheck()) {
          window.open(
            `https://wa.me/57${this.dataStore.tienda.whatsapp}/?text=${text}`,
            '_blank'
          )
        } else {
          window.open(
            `https://web.whatsapp.com/send?phone=57${this.dataStore.tienda.whatsapp}&text=${text}`,
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
    addEventListenerTemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data) {
          if (e.data.type == 'settingModal') {
            this.$store.commit('SET_CURRENTSETTINGMODAL', e.data)
            if (
              e.data.data &&
              e.data.data.stateModal &&
              e.data.data.stateModal == 1
            ) {
              this.stateModalPwd = false
            } else {
              this.stateModalPwd = true
            }
          }
        }
      }
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
html {
  scroll-behavior: smooth;
}
* {
  scroll-behavior: smooth;
  margin: 0px;
  padding: 0px;
  font-family: var(--font-style);
  outline: none;
  text-decoration: none;
  box-sizing: border-box;
  outline: none !important;
  /* overflow-x: hidden; */
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
.layout-enter-active,
.layout-leave-active {
  transition: opacity 0.5s;
}
.layout-enter,
.layout-leave-to {
  opacity: 0;
}
::-webkit-scrollbar {
  -webkit-appearance: none;
}
::-webkit-scrollbar:vertical {
  width: 11px;
}
::-webkit-scrollbar-button:increment,
::-webkit-scrollbar-button {
  display: none;
}
::-webkit-scrollbar:horizontal {
  height: 10px;
}
::-webkit-scrollbar-thumb {
  background-color: #797979;
  border-radius: 20px;
  border: 2px solid #f1f2f3;
}
.el-popover {
  display: none;
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
  z-index: 50;
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
</style>
