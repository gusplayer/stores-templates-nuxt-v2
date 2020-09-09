<template>
  <div id="principal-container">
    <div class="menu-lateral-left hidden" id="sidebar">
      <div class="menu-lateral-left-head">
        <h1 class="title-head-left">Componentes</h1>
      </div>
      <div v-if="developerDataToken" class="menu-login-user">
        <p class="label">Token del usuario</p>
        <el-input placeholder="Token del usuario" v-model="input"></el-input>
        <br />

        <el-button class="button" type="primary">Iniciar sesión</el-button>
      </div>
      <div v-else class="menu-login-user">
        <p class="label">Tipo de Componentes</p>

        <el-select
          style="width: 100%;"
          v-model="valueTipos"
          placeholder="Categoria"
        >
          <el-option
            v-for="item in tiposComponentes"
            :key="item.id"
            :label="item.label"
            :value="item.id"
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
            v-for="item in listadoComponentes"
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
        <br />
        <el-button
          v-if="editar"
          class="button"
          type="warning"
          v-on:click="onPressEdit()"
          >Editar</el-button
        >
        <div v-if="getSettingsCSS.length">
          <optionsItems v-if="editar"></optionsItems>
        </div>
        <div v-else>
          <optionsGeneral v-if="editar"></optionsGeneral>
        </div>
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
            class="button-new-component hidden"
            @click="dialogForm()"
            type="primary"
            >Nuevo Componente</el-button
          >
          <el-button
            @click="removeComponent()"
            class="button-new-component hidden"
            type="danger"
            >Eliminar</el-button
          >
          <el-button
            @click="ocutlarlateral()"
            class="button-new-component hidden"
            type="danger"
            >Ocultar</el-button
          >
        </div>
      </div>
      <!-- probar para banner -->
      <!-- :Settings="getSettingsCSS.length?getSettingsCSS:[]"  -->
      <div class="preview-container">
        <component
          v-if="selectedComponent && getSettingsCSS"
          :is="componentFile"
          :dataStore="dataStore"
          :currentSettingsHeader="getSettingsCSS"
          :currentSettingsFooter="getSettingsCSS"
          :Settings="getSettingsCSS"
          :fullProducts="
            nameCurrentComponent.includes('ProductList') ? fullProducts : ''
          "
          tienda="carrito"
        ></component>
        <!-- <KContent1></KContent1> -->
        <br />
        <!-- <componenteP :currentSettingsHeader="currentSettingsHeader"></componenteP> -->
      </div>
    </div>
    <el-dialog
      width="85%"
      :visible.sync="dialogFormVisible"
      @close="setComponent()"
    >
      <div
        :is="componente"
        @upDialogFormVisible="upDialogFormVisible"
        :currentComponent="currentComponent"
      ></div>
      <!-- <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">Confirm</el-button>
      </span>-->
    </el-dialog>
  </div>
</template>
<script>
import API from './_api/api'
import FormNewComponent from './_crudComponent/FormNewComponent'
import EditComponent from './_crudComponent/EditComponent'
import RemoveComponent from './_crudComponent/RemoveComponent'
// import componenteP from '../../../core-components-npm/src/components/banners/Ko-Banner-2'
// import KContent1 from '../../../core-components-npm/src/components/contents/Ko-Content-1'
import optionsGeneral from './_components_settings/OptionGeneral'
import optionsItems from './_components_settings/OptionItems'

export default {
  components: {
    EditComponent,
    FormNewComponent,
    RemoveComponent,
    // componenteP,
    // KContent1,
    optionsGeneral,
    optionsItems,
  },
  async mounted() {
    // this.$store.dispatch('GET_LOGIN')
    this.$store.dispatch('GET_DATA')
    // this.$store.dispatch('GET_STORELAYOUT')
    this.tiposComponentes = await API.getTipoComponente()
    this.listadoComponentes = await API.getReferenciasComponente()
  },
  data() {
    return {
      fileTipos: { name: 'Grid' },
      nameCurrentComponent: '',
      currentComponent: null,
      valueTipos: '',
      currentStoreData: '',
      selectedComponent: false,
      developerDataToken: '',
      componentsApi: '',
      valueComponentes: '',
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
      tiposComponentes: '',
      listadoComponentes: '',
      dialogFormVisible: false,
      editar: false,
      componente: '',
      SettingsComponentes: '',
    }
  },
  computed: {
    componentFile() {
      if (this.selectedComponent) {
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
    ocutlarlateral() {
      document.getElementById('sidebar').classList.toggle('active')
    },
    getDataTienda() {
      this.$store.dispatch('GET_DATA_TIENDA_BY_ID', this.currentStoreData)
    },
    onPressSelectComponent() {
      this.selectedComponent = false
      this.editar = true
      let id = this.listadoComponentes.find(
        (element) => element.name == this.nameCurrentComponent
      )
      this.tiposComponentes.forEach((element) => {
        if (element.id == this.valueTipos) {
          this.fileTipos.name = element.name
        }
      })
      this.selectedComponent = true
      this.$store.dispatch('GET_SETTINGS_COMPONENT', id.id)
    },
    onPressEdit() {
      this.componente = 'EditComponent'
      this.currentComponent = this.listadoComponentes.find(
        (component) => component.name == this.nameCurrentComponent
      )
      this.$store.dispatch(
        'GET_SETTINGS_BY_COMPONENT',
        this.currentComponent.component_type_id
      )
      this.dialogFormVisible = true
    },
    dialogForm() {
      this.componente = 'FormNewComponent'
      this.dialogFormVisible = true
    },
    removeComponent() {
      this.componente = 'RemoveComponent'
      this.dialogFormVisible = true
    },
    upDialogFormVisible(newValue) {
      this.dialogFormVisible = newValue
    },
    setComponent() {
      this.currentComponent = null
      this.editar = false
      this.componente = ''
      this.valueTipos = ''
    },
  },

  watch: {
    async valueTipos(value) {
      this.selectedComponent = false
      this.nameCurrentComponent = ''
      this.fileTipos.name = ''
      this.listadoComponentes = await API.getReferenciasComponente(
        this.valueTipos
      )
    },
    nameCurrentComponent() {
      this.currentComponent = null
    },
    // size(newValue, oldValue) {
    //   let reset = `${newValue}`
    //   this.$store.state['settings'].currentSettingsHeader += newValue
    // }
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
