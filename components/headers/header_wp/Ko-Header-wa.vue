<template>
  <div class="header-container">
    <div class="wrapper-header">
      <KoOrderWa :dataStore="dataStore" />
      <div class="wrapper-banner-img">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdgeNil1eNY8XKW_XrVp9EUThSQghe12-sAA&usqp=CAU"
          class="banner"
          alt="Banner tienda"
        />
      </div>
      <nuxt-link to="/wa" class="containt-image">
        <img
          :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
          class="header-logo"
          alt="Logo Img"
        />
      </nuxt-link>
      <div class="header">
        <div class="header-content-text">
          <p class="header-text">{{ dataStore.tienda.nombre }}</p>
          <!-- <p class="header-descripcion" v-if="dataStore.tienda.descripcion">
            {{ dataStore.tienda.descripcion }}
          </p> -->
          <p
            class="header-direccion"
            v-if="dataStore.geolocalizacion[0].direccion"
          >
            {{ dataStore.geolocalizacion[0].direccion }}
          </p>
          <p class="header-horario" v-if="dataStore.geolocalizacion[0].horario">
            Horario de atención: {{ dataStore.geolocalizacion[0].horario }}
          </p>
        </div>
        <div class="header-content-items">
          <div class="wrapper-items-icons">
            <div v-for="(item, index) in links" :key="`${index}${item.icon}`">
              <div class="header-icon" v-if="item.link" :is="item.icon" />
            </div>
          </div>
          <div class="header-content-icon">
            <div class="header-content-cart" @click="openOrder">
              <cart-icon class="header-icon-cart" />
              <span class="num-items">{{ productsCart }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoOrderWa from './_order1/orderWa'
export default {
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
  max-width: 780px;
  background: white;
  flex-direction: column;
  transition: all ease 1s;
  position: relative;
}
.wrapper-banner-img {
  width: 100%;
  max-height: 210px;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
}
.banner {
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.containt-image {
  width: 90px;
  height: 90px;
  left: 20px;
  top: 165px;
  background-color: white;
  position: absolute;
  overflow: hidden;
  border: solid 1px white;
  border-radius: 45px;
  box-shadow: 0 0 2px rgba(92, 100, 111, 0.1),
    0 5px 10px rgba(134, 143, 155, 0.08), 0 15px 35px rgba(52, 58, 67, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.header-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
  object-position: center;
}
.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 15px 30px;
}
.header-content-text {
  margin-left: 100px;
}
.header-text {
  font-size: 18px;
  font-weight: bold;
  color: black;
}
.header-descripcion {
  font-size: 14px;
  font-weight: normal;
  color: black;
}
.header-direccion {
  font-size: 14px;
  font-weight: normal;
  color: black;
}
.header-horario {
  font-size: 13px;
  font-weight: normal;
  color: black;
}
.header-content-items {
  display: flex;
  flex-direction: row;
  align-self: flex-start;
  justify-content: space-between;
}
.wrapper-items-icons {
  margin-top: 3px;
  margin-right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-self: center;
}
.header-icon {
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #25d366;
  margin-left: 7px;
  cursor: pointer;
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
  background-color: #25d366;
  border: #25d366 1px;
  border-radius: 10px;
  line-height: 1;
  display: flex;
  padding: 3px;
  justify-content: center;
  align-items: center;
  font-weight: bold;
}
@media (max-width: 530px) {
  .header {
    padding: 50px 30px 15px 30px;
  }
  .header-content-text {
    margin-left: 0px;
  }
  .header-content-items {
    position: absolute;
    top: 215px;
    right: 10px;
  }
}
@media (max-width: 330px) {
  .header {
    padding: 70px 30px 15px 30px;
  }
}
</style>
