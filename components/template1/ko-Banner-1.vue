<template>
  <div class="wrapper-banner">
    <div class="header-content-logo">
      <div class="wrapper-logo" v-if="this.banner">
        <img
          :src="`${this.banner.banner}`"
          class="header-logo"
          alt="Banner tienda"
        />
      </div>
      <div class="wrapper-logo wrapper-logo-background" style="" v-else>
        <img
          src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto,w_1600/v1590167391/komerciaAcademico/7_eviapt.png"
          class="header-logo"
          alt="Banner tienda"
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
      return this.$store.state.settingByTemplate
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
  width: 100%;
  align-items: center;
}
.wrapper-logo {
  width: 100%;
  height: 350px;
  position: relative;
}
.wrapper-logo-background {
  background: var(--purple);
  min-height: 400px;
  /* max-height: 420px; */
}
.header-logo {
  width: 100%;
  height: 100%;
  object-fit: hover;
  object-position: center;
  position: absolute;
}
@media (max-width: 1300px) {
  .wrapper-logo-background {
    min-height: 200px;
    max-height: 350px;
  }
}
@media (max-width: 1100px) {
  .wrapper-logo-background {
    min-height: 200px;
    max-height: 250px;
  }
}
@media (max-width: 770px) {
  .wrapper-logo-background {
    min-height: 120px;
    max-height: 180px;
  }
}
@media (max-width: 450px) {
  .wrapper-logo {
    height: 230px;
  }
  .wrapper-logo-background {
    min-height: 90px;
    max-height: 100px;
  }
}
</style>
