<template>
  <div class="wrapper-container">
    <div class="container">
      <div class="header">
        <router-link :to="`/`" class="card product-card">
          <div class="item">Inicio</div>
        </router-link>
        <router-link :to="`/constructorK`" class="card product-card">
          <div class="item">constructor</div>
        </router-link>
        <el-select
          @change="getDataTienda()"
          v-model="currentStoreData"
          placeholder="Tiendas"
        >
          <el-option
            v-for="item in stores"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
      </div>
      <div class="linea" />

      <nuxt />
      <KoFooter1
        :dataStore="dataStore"
        :currentSettingsFooter="getSettingsCSS"
        :fullProducts="
          nameCurrentComponent.includes('ProductList') ? fullProducts : ''
        "
      ></KoFooter1>
    </div>
  </div>
</template>
<script>
import API from '../components/constructor/_api/api'

export default {
  async mounted() {
    //this.$store.dispatch('GET_DATA')
    await this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_STORELAYOUT')
    this.tiposComponentes = await API.getTipoComponente()
    this.listadoComponentes = await API.getReferenciasComponente()
    if (this.token.length) {
      this.$store.dispatch('GET_SETTINGS_COMPONENT', 96)
    }
  },
  data() {
    return {
      estado: false,
      selectedComponent: true,
      nameCurrentComponent: 'ProductList',
      currentStoreData: '',
      stores: [
        { value: 1, label: 'Topalxe' },
        { value: 347, label: 'Ohlala' },
        { value: 364, label: "Ace Delivery's" },
        { value: 1108, label: 'Familia Comepasto' },
        { value: 889, label: 'Perfecta' },
        { value: 605, label: 'Origen SP' },
        { value: 582, label: 'Tu Tienda' },
        { value: 1100, label: 'Macrobrand' },
        { value: 1559, label: 'Sticker Hipster' },
        { value: 1429, label: 'boom Store Colombia' },
        { value: 1359, label: 'Señora pepa' },
      ],
    }
  },
  computed: {
    token() {
      return this.$store.state.accessToken
    },
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
  methods: {
    getDataTienda() {
      this.$store.dispatch('GET_DATA_TIENDA_BY_ID', this.currentStoreData)
    },
  },
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
