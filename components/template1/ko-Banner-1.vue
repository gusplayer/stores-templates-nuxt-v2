<template>
  <div class="wrapper-banner">
    <div class="header-content-logo">
      <div class="wrapper-banner" v-if="this.banner">
        <img
          :src="`${this.banner.banner}`"
          class="banner"
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
.wrapper-banner {
  width: 100%;
}
.banner {
  width: 100%;
  height: 100%;
  object-fit: hover;
  object-position: center;
}
.wrapper-logo-background {
  background: var(--purple);
  min-height: 400px;
}
</style>
