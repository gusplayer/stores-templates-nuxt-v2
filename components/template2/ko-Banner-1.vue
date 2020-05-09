<template>
  <div class="wrapper-banner">
    <div class="header-content-logo">
      <div class="wrapper-logo">
        <!-- <img :src="`${this.banner}`" class="header-logo" data-aos="fade-right" /> -->
        <img
          src="https://ep01.epimg.net/elcomidista/imagenes/2019/11/28/articulo/1574897584_677912_1574946142_media_normal.jpg"
          class="header-logo"
          data-aos="zoom-in"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataStore: Object,
  },
  data() {
    return {}
  },
  computed: {
    banner() {
      return this.dataStore.banners[0].ruta_banner
    },
  },
  methods: {},
}
</script>

<style scoped>
.wrapper-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #eef1f4;
}
.header-content-logo {
  display: flex;
  justify-content: center;
  /* max-width: 1300px; */
  width: 100%;
  align-items: center;
}
.wrapper-logo {
  /* max-width: 1300px; */
  width: 100%;
  height: 350px;
  position: relative;
}
.header-logo {
  width: 100%;
  max-height: 350px;
  object-fit: cover;
  object-position: center;
  position: absolute;
}

@media (max-width: 770px) {
  .wrapper-logo {
    height: 280px;
  }
}
@media (max-width: 400px) {
  .wrapper-logo {
    height: 138px;
  }
}
</style>
