<template>
  <div class="content-header">
    <div class="content-header-items">
      <div
        class="content-banner-items"
        :style="`background-image: url(${this.bannerUrl})`"
      >
        <!-- <img
          v-if="this.settingByTemplate.banner"
          class="banner-image"
          :src="
            idCloudinaryBannerResponsive(this.settingByTemplate.banner, 1000)
          "
          alt="banner-store"
        />
        <img
          v-else
          src="https://www.kellyservices.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTFlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c649985d042e87fdb30660e80b7dd19a010450b2/banner-default.jpg"
          class="banner-image"
          alt="banner-wapi"
        /> -->
        <div class="content-data-store">
          <div class="content-logo-name">
            <nuxt-link
              :to="`/wa/${dataStore.tienda.id_tienda}/`"
              class="data-item-logo"
            >
              <img
                class="logo-img"
                :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
                alt="logo-Store"
              />
            </nuxt-link>
            <div class="data-item-name">
              <p class="name-store">
                {{ dataStore.tienda.nombre }}
              </p>
              <p class="category-store">
                {{ dataStore.tienda.categoria_tienda }}
              </p>
            </div>
          </div>
          <div class="content-seeMore">
            <p
              v-if="!showInfoStore"
              class="txt-seeMore"
              @click="showInfoStore = true"
            >
              {{ $t('home_cardvermas') }}
            </p>
            <p v-else class="txt-seeMore" @click="showInfoStore = false">
              Ver menos
            </p>
            <svg
              v-if="!showInfoStore"
              @click="showInfoStore = true"
              class="svg-arrow"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7,10L12,15L17,10H7Z" />
            </svg>
            <svg
              v-else
              @click="showInfoStore = false"
              class="svg-arrow"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M7,15L12,10L17,15H7Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div class="content-infoStore" v-if="showInfoStore">
      <div v-if="dataStore.geolocalizacion.length">
        <p class="txt-direccion" v-if="dataStore.geolocalizacion[0].direccion">
          {{ dataStore.geolocalizacion[0].direccion }}
        </p>
      </div>
      <div v-if="dataStore.tienda.whatsapp">
        <p class="txt-direccion">
          WhatsApp:
          <span
            class="txt-direccion mx-5"
            v-if="dataStore.tienda.pais == 'Colombia'"
          >
            (+57)
          </span>
          <span
            class="txt-direccion mx-5"
            v-if="dataStore.tienda.pais == 'Chile'"
          >
            (+56)
          </span>
          {{ dataStore.tienda.whatsapp }}
        </p>
      </div>
      <div v-if="dataStore.geolocalizacion.length">
        <p class="txt-horario" v-if="dataStore.geolocalizacion[0].horario">
          {{ $t('contact_horarioAtencion') }}
          {{ dataStore.geolocalizacion[0].horario }}
        </p>
      </div>
    </div>
    <div class="content-category-data">
      <p class="txt-category-top">Categorias</p>
    </div>
    <KoOrderWa :dataStore="dataStore" />
  </div>
</template>
<script>
import KoOrderWa from '../_order1/orderWa'

import idCloudinary from '../../../../mixins/idCloudinary'
export default {
  name: 'HeaderWa3',
  mixins: [idCloudinary],
  components: { KoOrderWa },
  props: {
    dataStore: Object,
  },
  mounted() {
    this.bannerUrl = this.settingByTemplate.banner
  },
  data() {
    return {
      showInfoStore: false,
      bannerUrl: '',
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
.content-header {
  @apply w-full flex flex-col justify-center items-center;
}
@screen sm {
  .content-header-items {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-banner-items {
    height: auto;
    @apply w-9/5 flex flex-col justify-center items-center bg-cover bg-no-repeat bg-center rounded-9 overflow-hidden my-8;
  }
  .content-data-store {
    background: rgb(175, 149, 74);
    background: -moz-linear-gradient(
      left,
      rgb(175, 149, 74) 0%,
      rgb(188, 173, 122, 0.47) 100%
    );
    background: -webkit-linear-gradient(
      left,
      rgb(175, 149, 74) 0%,
      rgb(188, 173, 122, 0.47) 100%
    );
    background: linear-gradient(
      to right,
      rgb(175, 149, 74) 0%,
      rgb(188, 173, 122, 0.47) 100%
    );
    @apply w-full h-full flex flex-col justify-center items-center rounded-9 overflow-hidden;
  }
  .content-logo-name {
    @apply w-full flex flex-row justify-center items-center mt-20;
  }
  .data-item-logo {
    @apply w-7/0 flex flex-col justify-center items-center;
  }
  .logo-img {
    @apply w-70 h-70 rounded-full shadow-md;
  }
  .data-item-name {
    @apply w-full flex flex-col justify-center items-center my-10;
  }
  .name-store {
    font-size: 15px;
    color: #fff;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-start font-semibold;
  }
  .category-store {
    font-size: 12px;
    color: #fff;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-start font-medium;
  }
  .content-category-data {
    @apply w-9/5 flex flex-col justify-center items-center;
  }
  .txt-category-top {
    color: #3d3d3d;
    font-size: 14px;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-start font-semibold my-10;
  }
  .content-seeMore {
    @apply w-auto flex flex-row justify-center items-center mb-10 cursor-pointer;
  }
  .txt-seeMore {
    font-size: 13px;
    color: #fff;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto flex flex-col justify-center items-center font-medium pl-5;
  }
  .svg-arrow {
    fill: #fff;
    @apply w-auto h-auto flex flex-col justify-center items-center;
  }
  .content-infoStore {
    background-color: #eaeaea;
    @apply w-9/5 flex flex-col justify-center items-start p-15 rounded-9 mb-10;
  }
  .txt-direccion,
  .txt-horario {
    font-size: 13px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto flex justify-center items-center font-medium;
  }
}
@media (min-width: 375px) {
  .content-banner-items {
    height: 120px;
  }
}
@media (min-width: 425px) {
  .content-banner-items {
    height: 135px;
  }
  .logo-img {
    @apply w-80 h-80;
  }
  .name-store {
    font-size: 20px;
  }
  .category-store {
    font-size: 15px;
  }
}
@screen md {
  .content-banner-items {
    height: 300px;
    @apply my-18;
  }
  .content-logo-name {
    @apply mt-0 mb-20;
  }
  .logo-img {
    width: 170px;
    height: 170px;
  }
  .name-store {
    font-size: 40px;
  }
  .category-store {
    font-size: 26px;
  }

  .txt-category-top {
    font-size: 18px;
  }
  .txt-seeMore {
    font-size: 18px;
  }
  .txt-direccion,
  .txt-horario {
    font-size: 17px;
  }
}
</style>
