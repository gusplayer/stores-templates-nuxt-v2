<template>
  <div class="content-header">
    <div class="content-header-items">
      <div class="content-banner">
        <div class="content-banner-items">
          <img
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
          />
        </div>
      </div>
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
    <KoOrderWa :dataStore="dataStore" />
  </div>
</template>
<script>
import KoOrderWa from '../_order1/orderWa'

import idCloudinary from '../../../../mixins/idCloudinary'
export default {
  name: 'HeaderWa2',
  mixins: [idCloudinary],
  components: { KoOrderWa },
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
    @apply w-full flex flex-col justify-center items-center;
  }
  .banner-image {
    @apply w-auto h-auto object-cover object-center;
  }
  .data-item-logo {
    @apply w-full flex flex-col justify-center items-center -mt-50;
  }
  .logo-img {
    @apply w-98 h-98 rounded-full shadow-md;
  }
  .data-item-name {
    @apply w-full flex flex-col justify-center items-center my-10;
  }
  .name-store {
    font-size: 18px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-center font-semibold;
  }
  .category-store {
    font-size: 15px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-center font-medium;
  }
}
@screen md {
  .data-item-logo {
    @apply -mt-100;
  }
  .logo-img {
    width: 200px;
    height: 200px;
    @apply rounded-full shadow-md;
  }
  .name-store {
    font-size: 30px;
  }
  .category-store {
    font-size: 24px;
  }
}
</style>
