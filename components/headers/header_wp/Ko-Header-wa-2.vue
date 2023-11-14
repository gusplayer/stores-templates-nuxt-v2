<template>
  <div class="content-header">
    <div class="content-header-items">
      <div class="content-banner">
        <div class="content-banner-items">
          <img
            v-if="settingByTemplate && settingByTemplate.banner"
            class="banner-image"
            :src="
              idCloudinaryBanner(settingByTemplate.banner, 'bannerRes', 900)
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
          :to="stateWapiME ? `/wa/${dataStore.id}/` : `/`"
          class="data-item-logo"
          :class="
            settingByTemplate.logo_cuadrado == 1
              ? `imagen-cuadrado`
              : `imagen-redondo`
          "
        >
          <img
            class="logo-img"
            :class="
              settingByTemplate.logo_cuadrado == 1
                ? `imagen-cuadrado`
                : `imagen-redondo`
            "
            :src="`${$store.state.urlKomercia}/logos/${dataStore.logo}`"
            alt="logo-Store"
          />
        </nuxt-link>
        <div class="data-item-name">
          <p class="name-store">
            {{ dataStore.nombre }}
          </p>
          <p v-if="settingByTemplate?.mensaje_principal" class="category-store">
            {{ settingByTemplate.mensaje_principal }}
          </p>
        </div>
        <div v-if="settingByTemplate?.descripcion" class="content-seeMore">
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
          <div>
            <Flechadown-icon
              v-if="!showInfoStore"
              class="svg-arrow"
              @click="showInfoStore = true"
            />
            <FlechaUp-icon
              v-else
              class="svg-arrow"
              @click="showInfoStore = false"
            />
          </div>
        </div>
        <div v-if="showInfoStore" class="content-infoStore">
          <div v-if="settingByTemplate && settingByTemplate.descripcion">
            <p class="txt-direccion">
              {{ settingByTemplate.descripcion }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <KoOrderWa :data-store="dataStore" :state-order-wapi="true" />
  </div>
</template>
<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'HeaderWa2',
  components: { KoOrderWa: () => import('../_order1/order1.vue') },
  mixins: [idCloudinary],
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showInfoStore: false,
      links: [
        {
          nombre: 'Facebook',
          icon: 'facebook-icon',
          link: this.dataStore.redes.facebook,
        },
        {
          nombre: 'Twitter',
          icon: 'twitter-icon',
          link: this.dataStore.redes.twitter,
        },
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.redes.instagram,
        },
        {
          nombre: 'Youtube',
          icon: 'youtube-icon',
          link: this.dataStore.redes.youtube,
        },
        {
          nombre: 'Tiktok',
          icon: 'tiktok-icon',
          link: this.dataStore.redes.tiktok,
        },
      ],
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
    stateWapiME() {
      return this.$store.state.stateWapiME
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.redes.facebook
      this.links[1].link = this.dataStore.redes.twitter
      this.links[2].link = this.dataStore.redes.instagram
      this.links[3].link = this.dataStore.redes.youtube
      this.links[4].link = this.dataStore.redes.tiktok
    },
  },
}
</script>
<style scoped>
.imagen-redondo {
  border-radius: 100px;
}
.imagen-cuadrado {
  border-radius: 5px;
}
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
  .content-data-store {
    width: 95%;
    @apply flex flex-col justify-center items-center;
  }
  .data-item-logo {
    background: white;
    width: 100px;
    height: 100px;
    @apply flex flex-col justify-center items-center -mt-60 shadow-md;
  }
  .logo-img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    object-position: center;
    background: transparent;
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
  .content-seeMore {
    background-color: #eaeaea;
    @apply w-auto flex flex-row justify-center items-center rounded-full px-5 mb-10 cursor-pointer;
  }
  .txt-seeMore {
    font-size: 14px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto flex flex-col justify-center items-center font-medium pl-5;
  }
  .svg-arrow {
    color: #3d3d3d;
    fill: #3d3d3d;
    bottom: 1px;
  }
  .content-infoStore {
    background-color: #eaeaea;
    @apply w-full flex flex-col justify-center items-start p-15 rounded-9 mb-10;
  }
  .txt-direccion {
    font-size: 13px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto flex justify-center items-center font-medium;
  }
}
@screen md {
  .data-item-logo {
    width: 180px;
    height: 180px;
    @apply -mt-100;
  }
  .logo-img {
    width: 200px;
    height: 200px;
    @apply shadow-md;
  }
  .name-store {
    font-size: 30px;
  }
  .category-store {
    font-size: 24px;
  }
  .content-seeMore {
    @apply mb-20;
  }
  .content-infoStore {
    width: 100%;
    @apply mb-20;
  }
  .txt-seeMore {
    font-size: 16px;
  }
  .txt-direccion {
    font-size: 15px;
  }
}
</style>
