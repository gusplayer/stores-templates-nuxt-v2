<template>
  <div class="header-container">
    <div class="wrapper-header">
      <KoOrderWa :dataStore="dataStore" />
      <div class="content-item-top">
        <div class="content-logo-valienta">
          <img
            src="https://valienta.com/wp-content/uploads/2020/01/logo-v1.svg"
            width="100px"
            style="margin-left: 55px;"
          />
        </div>
        <div class="wrapper-icons">
          <div v-if="showInfo">
            <search-icon class="icon-cart" />
          </div>
          <p class="separador"></p>
          <div class="content-cart" @click="openOrder">
            <cart-icon class="icon-cart" />
            <span class="num-items" v-if="productsCart">{{
              productsCart
            }}</span>
          </div>
        </div>
      </div>
      <div v-if="showInfo">
        <div v-if="this.settingByTemplate">
          <div class="wrapper-banner-img" v-if="this.settingByTemplate.banner">
            <img
              :src="
                idCloudinaryBannerResponsive(
                  this.settingByTemplate.banner,
                  1000
                )
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
      </div>
      <div class="header" v-if="showInfo">
        <nuxt-link
          :to="`/wp/${dataStore.tienda.id_tienda}/`"
          class="containt-image"
        >
          <img
            :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
            class="header-logo"
            alt="Logo Img"
          />
        </nuxt-link>
        <div style="width: 100%;">
          <p class="header-text">
            {{ dataStore.tienda.nombre }}
          </p>
          <div v-if="dataStore.tienda.descripcion">
            <div
              style="margin-top: 5px;"
              class="header-direccion"
              v-html="dataStore.tienda.descripcion"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
import KoOrderWa from './_order1/orderValienta'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Header-wa',
  components: {
    KoOrderWa,
  },
  props: {
    dataStore: Object,
  },
  mounted() {
    let domain = this.$route.fullPath
    let result = domain.split('/')
    if (result.length == '5') {
      this.showSearch = false
      this.showInfo = false
    } else {
      this.showSearch = true
      this.showInfo = true
    }
  },

  data() {
    return {
      showInfo: true,
      showSearch: true,
      search: '',
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
      this.$store.commit('SET_OPENORDER_VALIENTA', true)
    },
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
      } else {
        location.href = '?search=' + ''
      }
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
    search(value) {
      this.Searchproduct(value)
    },
    $route(to, from) {
      let domain = this.$route.fullPath
      let result = domain.split('/')
      if (result.length == '5') {
        this.showSearch = false
        this.showInfo = false
      } else {
        this.showSearch = true
        this.showInfo = true
      }
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
  max-width: 900px;
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
.content-item-top {
  width: 100%;
  max-width: 900px;
  padding: 7px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  justify-content: flex-end;
  align-self: center;
  position: fixed;
  top: 0;
  z-index: 3;
  background: white;
}
.content-logo-valienta {
  width: 100%;
  max-height: 35px;
  display: flex;
  justify-content: center;
}
.wrapper-icons {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: center;
}
.separador {
  margin-left: 5px;
  margin-right: 5px;
  border-left: 1px solid #4a5782;
  max-height: 22px;
  top: 2px;
  position: relative;
}
.content-cart {
  position: relative;
  cursor: pointer;
}
.num-items {
  font-size: 10px;
  position: absolute;
  right: -10px;
  top: -4px;
  color: white;
  border-radius: 50px;
  padding: 2px 5px;
  background: #4a5782;
  border: 1px solid #ffffff;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
}
.icon-cart {
  font-size: 22px;
  color: #4a5782;
}
.icon-cart:hover {
  color: #a9206b;
}
.wrapper-banner-img {
  width: 100%;
  max-height: 300px;
  overflow: hidden;
  margin-top: 39.66px;
}
.banner {
  max-height: 300px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.header {
  width: 100%;
  padding: 70px 0px 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  position: relative;
}
.containt-image {
  display: flex;
  width: 130px;
  height: 130px;
  left: 43%;
  top: -70px;
  background-color: white;
  position: absolute;
  overflow: hidden;
  border: solid 1px white;
  border-radius: 50%;
  padding: 5px;
  align-items: center;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.header-logo {
  height: 100%;
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.header-text {
  font-size: 18px;
  font-weight: bold;
  color: #484848;
}
div >>> p {
  font-size: 14px;
  font-weight: normal;
  color: #484848;
}

@media (max-width: 530px) {
  .containt-image {
    width: 100px;
    height: 100px;
    left: 36%;
    top: -50px;
  }
  .header-text {
    font-size: 16px;
  }
  div >>> p {
    font-size: 13px;
  }
  .header {
    padding: 58px 0px 10px;
  }
  .wrapper-banner-img {
    max-height: 160px;
  }
  .banner {
    max-height: 160px;
  }
}
</style>
