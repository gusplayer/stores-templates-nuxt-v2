<template>
  <div>
    <div class="wrapper-container" v-if="this.estado">
      <div class="container">
        <div class="header">
          <router-link :to="`/`" class="card product-card">
            <div class="item">Inicio</div>
          </router-link>
          <router-link :to="`/constructorK`" class="card product-card">
            <div class="item">constructor</div>
          </router-link>
        </div>
        <div class="linea" />
        <nuxt />
        <!-- <KoCart1
          :dataStore="dataStore"
          :currentSettingsHeader="getSettingsCSS"
          :currentSettingsFooter="getSettingsCSS"
          :Settings="getSettingsCSS"
          :fullProducts="
            nameCurrentComponent.includes('ProductList') ? fullProducts : ''
          "
        ></KoCart1> -->
      </div>
    </div>
  </div>
</template>
<script>
// import template1 from './template1'
export default {
  data() {
    return {
      estado: false,
    }
  },
  computed: {},
  methods: {},
  watch: {},
}
</script>

<style scoped>
.wrapper-container {
  display: flex;
  width: 100%;
  background-color: var(--background_color_1);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 100%;
  margin: 0 auto;
  max-width: 1300px;
  /* padding: 77px 20px 56px 20px; */
}
.text {
  color: black;
}
.btn {
  font-size: 15px;
  font-weight: bold;
  color: #4429b4;
  border: 1.5px solid #4429b4;
  background: transparent;
  border-radius: 10px;
  padding: 5px 10px;
  width: 160px;
  margin-right: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  text-align: center;
}
.linea {
  margin-top: 20px;
  margin-bottom: 20px;
  width: 100%;
  height: 2px;
  background: #4429b4;
}
.btn:hover {
  color: #00dd8d;
  border: 1.5px solid #00dd8d;
}

.header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  max-width: 1300px;
  padding: 20px 30px;
}
</style>
