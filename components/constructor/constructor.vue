<template>
  <div id="principal-container">
    <div class="menu-lateral-left hidden" id="sidebar">
      <div class="menu-lateral-left-head">
        <h1 class="title-head-left">Componentes</h1>
      </div>
      <div class="menu-login-user">
        <p class="label">Tipo de Componentes</p>
        <el-select
          style="width: 100%;"
          v-model="valueTipos"
          placeholder="Categoria"
        >
          <el-option
            v-for="item in tiposComponentesNew"
            :key="item.id"
            :label="item.label"
            :value="item.label"
          ></el-option>
        </el-select>
        <br />
        <br />
        <p v-if="valueTipos" class="label">Seleccionar componente</p>
        <el-select
          v-if="valueTipos"
          v-model="nameCurrentComponent"
          style="width: 100%; margin-top: 0px;"
          placeholder="Componentes"
        >
          <el-option
            v-for="item in listadoComponentesN"
            :key="item.id"
            :label="item.name"
            :value="item.name"
          ></el-option>
        </el-select>
        <el-button
          v-if="nameCurrentComponent"
          class="button"
          type="primary"
          v-on:click="onPressSelectComponent"
          >Seleccionar</el-button
        >
      </div>
    </div>
    <div class="right-container">
      <div class="rigth-head">
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
        <h1 style="font-size: 20px;" @click="ocutlarlateral()">
          {{ this.nameCurrentComponent }}
        </h1>
        <div class="header-buttons">
          <el-button
            @click="ocutlarlateral()"
            class="button-new-component hidden"
            type="danger"
            >Ocultar</el-button
          >
        </div>
      </div>
      <div class="preview-container">
        <component
          v-if="selectedComponent && getSettingsCSS"
          :is="componentFile"
          :dataStore="dataStore"
          :currentComponentSettings="getSettingsCSS"
          :isDisabled="true"
          :fullProducts="
            nameCurrentComponent.includes('ProductList') ? fullProducts : ''
          "
        ></component>
      </div>
      <div>
        <p></p>
      </div>
    </div>
  </div>
</template>
<script>
import optionsGeneral from './_components_settings/OptionGeneral'
import optionsItems from './_components_settings/OptionItems'
export default {
  components: {
    optionsGeneral,
    optionsItems,
  },
  async mounted() {
    // this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_DATA')
  },
  data() {
    return {
      fileTipos: { name: '' },
      nameCurrentComponent: '',
      currentComponent: null,
      valueTipos: '',
      currentStoreData: '',
      selectedComponent: false,
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
      ],
      tiposComponentesNew: [
        {
          id: 1,
          label: 'banners',
        },
        {
          id: 2,
          label: 'carts',
        },
        {
          id: 3,
          label: 'contacts',
        },
        {
          id: 4,
          label: 'contents',
        },
        {
          id: 5,
          label: 'footers',
        },
        {
          id: 6,
          label: 'headers',
        },
        {
          id: 7,
          label: 'newsletter',
        },
        {
          id: 8,
          label: 'productdetails',
        },
        {
          id: 9,
          label: 'productlist',
        },
        {
          id: 10,
          label: 'separators',
        },
        {
          id: 11,
          label: 'videos',
        },
      ],
      listadoComponentesNew: [
        {
          id_Tipos: 1,
          label: 'banners',
          componentes: [
            {
              id: 11,
              name: 'Ko-Banner-1',
            },
            // {
            //   id: 12,
            //   name: 'Ko-Banner-2',
            // },
            {
              id: 13,
              name: 'Ko-Banner-3',
            },
          ],
        },
        {
          id_Tipos: 2,
          label: 'carts',
          componentes: [
            {
              id: 21,
              name: 'Ko-Cart-1',
            },
          ],
        },
        {
          id_Tipos: 3,
          label: 'contacts',
          componentes: [
            {
              id: 31,
              name: 'Ko-Contact-1',
            },
          ],
        },
        {
          id_Tipos: 4,
          label: 'contents',
          componentes: [
            {
              id: 41,
              name: 'Ko-Content-1',
            },
          ],
        },
        {
          id_Tipos: 5,
          label: 'footers',
          componentes: [
            {
              id: 51,
              name: 'Ko-Footer-1',
            },
            {
              id: 52,
              name: 'Ko-Footer-2',
            },
          ],
        },
        {
          id_Tipos: 6,
          label: 'headers',
          componentes: [
            {
              id: 61,
              name: 'Ko-Header-1',
            },
            {
              id: 62,
              name: 'Ko-Header-2',
            },
            // {
            //   id: 63,
            //   name: 'Ko-Header-3',
            // },
            // {
            //   id: 64,
            //   name: 'Ko-Header-4',
            // },
          ],
        },
        {
          id_Tipos: 7,
          label: 'newsletter',
          componentes: [
            {
              id: 71,
              name: 'Ko-Newsletter-1',
            },
          ],
        },
        {
          id_Tipos: 8,
          label: 'productdetails',
          componentes: [
            {
              id: 81,
              name: 'Ko-ProductDetail-1',
            },
          ],
        },
        {
          id_Tipos: 9,
          label: 'productlist',
          componentes: [
            {
              id: 91,
              name: 'Ko-ProductList-1',
            },
          ],
        },
        {
          id_Tipos: 10,
          label: 'separators',
          componentes: [
            {
              id: 101,
              name: 'Ko-Separator-1',
            },
          ],
        },
        {
          id_Tipos: 11,
          label: 'videos',
          componentes: [
            {
              id: 111,
              name: 'Ko-Videos-1',
            },
            {
              id: 112,
              name: 'Ko-Videos-2',
            },
          ],
        },
      ],
      SettingsComponentes: '',
      urlComponents: '',
    }
  },
  computed: {
    componentFile() {
      // if (this.selectedComponent) {
      //   if ('headers' == this.fileTipos.name.toLowerCase()) {
      //     this.SettingsComponentes = 'headers'
      //   }
      //   if (
      //     'banners' == this.fileTipos.name.toLowerCase() ||
      //     'contents' == this.fileTipos.name.toLowerCase() ||
      //     'separators' == this.fileTipos.name.toLowerCase() ||
      //     'videos' == this.fileTipos.name.toLowerCase() ||
      //     'carts' == this.fileTipos.name.toLowerCase() ||
      //     'productdetails' == this.fileTipos.name.toLowerCase() ||
      //     'newsletter' == this.fileTipos.name.toLowerCase() ||
      //     'contacts' == this.fileTipos.name.toLowerCase() ||
      //     'productlist' == this.fileTipos.name.toLowerCase()
      //   ) {
      //     this.SettingsComponentes = 'general'
      //   }
      //   if ('footers' == this.fileTipos.name.toLowerCase()) {
      //     this.SettingsComponentes = 'footers'
      //   }
      //   return () =>
      //     import(
      //       `../../../core-components-npm/src/components/${this.fileTipos.name.toLowerCase()}/${
      //         this.nameCurrentComponent
      //       }`
      //     )
      // }
      return false
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    getSettingsCSS() {
      return this.$store.state.getSettingsCSSNew
    },
    listadoComponentesN() {
      let result = this.listadoComponentesNew.find(
        (element) => element.label == this.valueTipos
      )
      return result.componentes
    },
  },
  methods: {
    ocutlarlateral() {
      document.getElementById('sidebar').classList.toggle('active')
    },
    getDataTienda() {
      this.$store.dispatch('GET_DATA_TIENDA_BY_ID', this.currentStoreData)
    },
    onPressSelectComponent() {
      this.selectedComponent = false
      this.fileTipos.name = this.valueTipos
      this.selectedComponent = true
    },
    setComponent() {
      this.currentComponent = null
      this.valueTipos = ''
    },
  },

  watch: {
    async valueTipos(value) {
      this.selectedComponent = false
      this.nameCurrentComponent = ''
      this.fileTipos.name = ''
    },
    nameCurrentComponent() {
      this.currentComponent = null
    },
  },
}
</script>

<style scoped>
.content-settings {
  margin-top: 10px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 2fr));
  grid-gap: 5px;
  padding-left: 5px;
}
.colortextoTittle {
  color: white;
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 5px;
}
.colortexto {
  color: black;
  font-size: 14px;
}
.el-collapse {
  border-top: 1px solid #4429b4;
  border-bottom: 1px solid #4429b4;
}
.textarea {
  width: 100%;
}

#principal-container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
}
.label {
  color: #fff;
  margin-bottom: 10px;
}
.menu-lateral-left {
  width: 350px;
  background: #2d2d2d;
}
#sidebar {
  display: initial;
}
#sidebar.active {
  display: none;
}
.menu-lateral-left-head {
  background: #4429b4;
  height: 60px;
  padding: 20px;
}
.menu-login-user {
  padding: 20px;
  background: #2d2d2d;
  height: calc(100% - 60px);
}
.menu-settings-components {
  padding: 20px;
  background: #2d2d2d;
  height: calc(100% - 60px);
}
.title-head-left {
  font-size: 18px;
  font-weight: bold;
  color: #fff;
}
.title-head-right {
  font-size: 18px;
  font-weight: bold;
  color: black;
}
.right-container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
.rigth-head {
  background: #f5f5f5;
  height: 60px;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.preview-container {
  padding: 20px 0;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  height: 100%;
  background: #212121;
  flex-direction: column;
  position: relative;
}
.button {
  /* background-color: #00dd8d; */
  color: #fff;
  width: 100%;
  margin-top: 10px;
}
.button-new-component {
  display: flex;
  align-self: center;
}
.header-buttons {
  display: flex;
  flex-direction: row;
}

@media (max-width: 770px) {
  .hidden {
    display: none;
  }
}
</style>
