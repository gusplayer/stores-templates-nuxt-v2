<template>
  <div class="wrapper-container">
    <div class="container">
      <p>Contacto</p>
      <br />
      <KoContact1
        :dataStore="dataStore"
        :Settings="getSettingsCSS"
        :fullProducts="
          nameCurrentComponent.includes('ProductList') ? fullProducts : ''
        "
      ></KoContact1>
    </div>
  </div>
</template>
<script>
import API from '../components/conctructor/'

export default {
  created() {
    this.$store.dispatch('GET_SETTINGS_COMPONENT', 100)
  },
  async mounted() {
    this.$store.dispatch('GET_DATA')
    await this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_STORELAYOUT')
    this.tiposComponentes = await API.getTipoComponente()
    this.listadoComponentes = await API.getReferenciasComponente()
  },
  data() {
    return {
      estado: false,
      selectedComponent: true,
      nameCurrentComponent: 'ProductList',
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    getSettingsCSS() {
      return this.$store.getters.getSettingsCSS
    },
  },
  methods: {},
  watch: {
    name(value) {
      return value
    },
  },
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
.btn:hover {
  color: #00dd8d;
  border: 1.5px solid #00dd8d;
}
</style>
