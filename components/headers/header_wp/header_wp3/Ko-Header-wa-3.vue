<template>
  <div class="content-header">
    <div class="content-header-items">
      <div
        class="content-banner-items"
        :style="`background-image: url(${this.bannerUrl})`"
      >
        <div
          class="content-data-store"
          :style="`background: ${settingByTemplate.color_icon};`"
        >
          <div class="content-logo-name">
            <nuxt-link
              :to="
                this.stateWapiME ? `/wa/${dataStore.tienda.id_tienda}/` : `/`
              "
              class="data-item-logo"
              :class="
                this.settingByTemplate.logo_cuadrado == 1
                  ? `imagen-cuadrado`
                  : `imagen-redondo`
              "
            >
              <img
                class="logo-img"
                :class="
                  this.settingByTemplate.logo_cuadrado == 1
                    ? `imagen-cuadrado`
                    : `imagen-redondo`
                "
                :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
                alt="logo-Store"
              />
            </nuxt-link>
            <div class="data-item-name">
              <p class="name-store">
                {{ dataStore.tienda.nombre }}
              </p>
              <p
                class="category-store"
                v-if="
                  this.settingByTemplate &&
                  this.settingByTemplate.mensaje_principal
                "
              >
                {{ this.settingByTemplate.mensaje_principal }}
              </p>
            </div>
          </div>
          <div
            class="content-seeMore"
            v-if="this.settingByTemplate && this.settingByTemplate.descripcion"
          >
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
                class="svg-arrow"
                v-if="!showInfoStore"
                @click="showInfoStore = true"
              />
              <FlechaUp-icon
                class="svg-arrow"
                v-else
                @click="showInfoStore = false"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content-infoStore" v-if="showInfoStore">
      <div v-if="this.settingByTemplate && this.settingByTemplate.descripcion">
        <p class="txt-direccion">
          {{ this.settingByTemplate.descripcion }}
        </p>
      </div>
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
    settingByTemplate: Object,
  },
  mounted() {
    if (this.settingByTemplate && this.settingByTemplate.banner) {
      this.bannerUrl = this.settingByTemplate.banner
    } else {
      this.bannerUrl =
        'https://www.kellyservices.pl/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBcTFlIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--c649985d042e87fdb30660e80b7dd19a010450b2/banner-default.jpg'
    }
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
    stateWapiME() {
      return this.$store.state.stateWapiME
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
.imagen-redondo {
  border-radius: 100px;
}
.imagen-cuadrado {
  border-radius: 5px;
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
    @apply w-full h-full flex flex-col justify-center items-center rounded-9 overflow-hidden;
  }
  .content-logo-name {
    @apply w-full flex flex-row justify-center items-center mt-20;
  }
  .data-item-logo {
    margin-left: 20px;
    margin-right: 20px;
    background: white;
    width: 110px;
    height: 75px;
    @apply flex flex-col justify-center items-center shadow-md;
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
    color: white;
    fill: white;
    bottom: 1px;
  }
  .content-infoStore {
    background-color: #eaeaea;
    @apply w-9/5 flex flex-col justify-center items-start p-15 rounded-9 mb-10;
  }
  .txt-direccion {
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
  .data-item-logo {
    width: 110px;
    height: 90px;
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
  .data-item-logo {
    width: 150px;
    height: 120px;
  }
  .name-store {
    font-size: 40px;
  }
  .category-store {
    font-size: 26px;
  }
  .txt-seeMore {
    font-size: 18px;
  }
  .txt-direccion {
    font-size: 17px;
  }
}
</style>
