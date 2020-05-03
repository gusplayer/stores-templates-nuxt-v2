<template>
  <div class="wrapper-container">
    <div class="container">
      <h1 class="text">Componentes</h1>
      <button @click="leer">Mostrar</button>
      <div v-if="estado">
        <!-- <div
          :is="componentFile"
          :dataStore="dataStore"
          :Settings="getSettingsCSS"
          :fullProducts="
            nameCurrentComponent.includes('ProductList') ? fullProducts : ''
          "
        ></div>-->
        <!-- <KoSeparator1
          :is="componentFile"
          :dataStore="dataStore"
          :Settings="getSettingsCSS"
          :fullProducts="
            nameCurrentComponent.includes('ProductList') ? fullProducts : ''
          "
        ></KoSeparator1> -->
      </div>
    </div>
  </div>
</template>
<script>
// import API from '../components/constructor/api'

export default {
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
      fileTipos: { name: 'separators' },
      SettingsComponentes: '',
      nameCurrentComponent: 'Ko-Separator-1',
    }
  },
  computed: {
    componentFile() {
      if (this.selectedComponent) {
        // console.log(this.fileTipos.name.toLowerCase())
        if ('headers' == this.fileTipos.name.toLowerCase()) {
          this.SettingsComponentes = 'headers'
        }
        if (
          'banners' == this.fileTipos.name.toLowerCase() ||
          'contents' == this.fileTipos.name.toLowerCase() ||
          'separators' == this.fileTipos.name.toLowerCase() ||
          'videos' == this.fileTipos.name.toLowerCase() ||
          'carts' == this.fileTipos.name.toLowerCase() ||
          'productdetails' == this.fileTipos.name.toLowerCase() ||
          'newsletter' == this.fileTipos.name.toLowerCase() ||
          'contacts' == this.fileTipos.name.toLowerCase() ||
          'productlist' == this.fileTipos.name.toLowerCase()
        ) {
          this.SettingsComponentes = 'general'
        }
        if ('footers' == this.fileTipos.name.toLowerCase()) {
          this.SettingsComponentes = 'footers'
        }

        // return () =>
        //   import(
        //     `../../../core-components-npm/src/components/${this.fileTipos.name.toLowerCase()}/${
        //       this.nameCurrentComponent
        //     }`
        //   )
      }
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
    leer() {
      if (this.estado == false) {
        this.estado = true
        this.$store.dispatch('GET_SETTINGS_COMPONENT', 91)
      } else {
        this.estado = false
      }
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
</style>
