<template>
  <div class="header-container">
    <div class="wrapper-header">
      <KoOrderWa :dataStore="dataStore" />
      <div v-if="this.settingByTemplate">
        <div class="wrapper-banner-img" v-if="this.settingByTemplate.banner">
          <img
            :src="
              idCloudinaryBannerResponsive(this.settingByTemplate.banner, 1000)
            "
            class="banner"
            alt="Banner-wapi"
          />
        </div>
      </div>
      <div v-else>
        <div class="wrapper-banner-img">
          <img
            src="https://www.kellyservices.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTFlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c649985d042e87fdb30660e80b7dd19a010450b2/banner-default.jpg"
            class="banner"
            alt="Banner-wapi"
          />
        </div>
      </div>
      <div class="header">
        <nuxt-link
          :to="`/wa/${dataStore.tienda.id_tienda}/`"
          class="containt-image"
        >
          <img
            :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
            class="header-logo"
            alt="Logo Img"
          />
        </nuxt-link>
        <div class="header-content-text">
          <p class="header-text">
            {{ dataStore.tienda.nombre }}
          </p>
          <div v-if="dataStore.geolocalizacion.length">
            <p
              class="header-direccion"
              v-if="dataStore.geolocalizacion[0].direccion"
            >
              {{ dataStore.geolocalizacion[0].direccion }}
            </p>
          </div>
          <div v-if="dataStore.geolocalizacion.length">
            <p
              class="header-horario"
              v-if="dataStore.geolocalizacion[0].horario"
            >
              {{ $t('contact_horarioAtencion') }}
              {{ dataStore.geolocalizacion[0].horario }}
            </p>
          </div>
        </div>
        <div class="container-tienda-wp">
          <p><whatsapp-icon class="wp-icon" /> {{ $t('header_tiendaWa') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
import KoOrderWa from './_order1/orderWa'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Header-wa',
  components: {
    KoOrderWa,
  },
  props: {
    dataStore: Object,
  },

  data() {
    return {
      links: [
        {
          nombre: 'Facebook',
          icon: 'facebook-icon',
          link: this.dataStore.tienda.red_facebook,
        },
        {
          nombre: 'Twitter',
          icon: 'twitter-icon',
          link: this.dataStore.tienda.red_twitter,
        },
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.tienda.red_instagram,
        },
        {
          nombre: 'Youtube',
          icon: 'youtube-icon',
          link: this.dataStore.tienda.red_youtube,
        },
      ],
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplateWapi
    },
  },
  methods: {
    openOrder() {
      this.$store.commit('SET_OPENORDER', true)
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
  },
}
</script>

<style scoped>
.header-container {
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: white;
}
.wrapper-header {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  flex-direction: column;
  transition: all ease 1s;
}
.wrapper-banner-img {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
}
.banner {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.containt-image {
  display: flex;
  width: 105px;
  height: 105px;
  left: 20px;
  top: -50px;
  /* top: 165px; */
  background-color: white;
  position: absolute;
  overflow: hidden;
  border: solid 1px white;
  border-radius: 8px;
  padding: 5px;
  align-items: center;
  box-shadow: 0 0 2px rgba(92, 100, 111, 0.1),
    0 5px 10px rgba(134, 143, 155, 0.08), 0 15px 35px rgba(52, 58, 67, 0.08);
  /* box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px inset, white 0px 0px 0px 3px; */
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  /* border: solid 1px #201d1d; */
}
.header-logo {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
  /* border-radius: 50%; */
}
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px 15px;
  position: relative;
}
.header-content-text {
  margin-left: 130px;
}
.header-text {
  font-size: 1.15rem;
  font-weight: bold;
  color: black;
}
.header-descripcion {
  font-size: 14px;
  font-weight: normal;
  color: black;
  color: #4e4e4e;
}
.header-direccion {
  font-size: 13px;
  font-weight: normal;
  color: black;
  color: #4e4e4e;
}
.header-horario {
  font-size: 13px;
  font-weight: normal;
  color: black;
  color: #4e4e4e;
}
.wrapper-items-icons {
  margin-top: 3px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
}
.container-header-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 28px;
  background-color: #708195;
  margin-right: 8px;
  cursor: pointer;
  border-radius: 45px;
}
.header-icon {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #fff;
  margin-top: -4px;
}
.header-content-icon {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.header-content-cart {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 35px;
  height: 35px;
  border: #25d366 2px solid;
  border-radius: 50%;
  padding-bottom: 3px;
  position: relative;
  cursor: pointer;
}
.header-icon-cart {
  font-size: 20px;
  color: #25d366;
}
.num-items {
  font-size: 11px;
  position: absolute;
  right: -5px;
  top: -5px;
  color: white;
  background-color: #708195;
  border: #25d366 1px;
  border-radius: 10px;
  line-height: 1;
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
.container-tienda-wp {
  display: initial;
  background-color: #f9f9f9;
  position: absolute;
  top: 15px;
  right: 25px;
  border-radius: 15px;
  padding: 4px 8px;
  box-shadow: 0 0 2px rgba(92, 100, 111, 0.1);
  box-shadow: 0 2px 5px rgba(155, 238, 205, 0.42);
  box-shadow: 0 2px 5px rgba(131, 130, 131, 0.276);
}
.container-tienda-wp p {
  color: #4c4c4c;
  font-size: 12px;
}
.wp-icon {
  font-size: 15px;
  color: #075e54;
  margin-right: 3px;
}
@media (max-width: 530px) {
  .header {
    padding: 50px 20px 1px 20px;
  }
  .header-content-text {
    margin-left: 0px;
  }
  .containt-image {
    width: 90px;
    height: 90px;
  }
  .wrapper-banner-img {
    max-height: 160px;
  }
  .banner {
    max-height: 160px;
  }
  .container-tienda-wp {
    top: 10px;
    right: 25px;
  }
}
</style>
