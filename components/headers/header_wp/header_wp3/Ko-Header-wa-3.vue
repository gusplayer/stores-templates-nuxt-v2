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
    height: 102px;
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
    @apply w-full h-full flex flex-row justify-center items-center rounded-9 overflow-hidden;
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
}
</style>
