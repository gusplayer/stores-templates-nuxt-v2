<template>
  <div class="form">
    <div class="box">
      <h2 class="title">Eliminar Componente</h2>
      <br />
      <el-row :gutter="18">
        <el-col :span="10" :offset="2">
          <p class="subtitle bold">Tipo de componente</p>
          <el-select
            v-model="value"
            placeholder="Select"
            @change="selectedComponent"
          >
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
        <el-col :span="10" :offset="0">
          <p class="subtitle bold">Nombre del componente</p>
          <el-select v-model="idComponent" placeholder="Select">
            <el-option
              v-for="item in listadoComponentes"
              :key="item.name"
              :label="item.name"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </el-col>
      </el-row>
      <br />
      <br />
      <el-row :gutter="18">
        <el-col :span="6" :offset="18">
          <el-button>Cancel</el-button>
          <el-button @click="removeComponent()" type="primary"
            >Eliminar</el-button
          >
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import API from '../_api/api'
const cityOptions = ['Imagen', 'Orden', 'Boton', 'Titulo']
export default {
  async mounted() {
    this.$store.dispatch('GET_DATA')
    // this.$store.dispatch('GET_STORELAYOUT')
    this.tiposComponentes = await API.getTipoComponente()
    // this.listadoComponentes = await API.getReferenciasComponente()
  },
  data() {
    return {
      options: [
        {
          id: 1,
          icon: 'Header.png',
          label: 'Menu',
          name: 'Headers',
        },
        {
          id: 2,
          icon: 'Banner.png',
          label: 'Banner',
          name: 'Banners',
        },
        {
          id: 3,
          icon: 'Contenido.png',
          label: 'Contenido',
          name: 'Contents',
        },
        {
          id: 4,
          icon: 'Grid.png',
          label: 'Grid',
          name: 'Grid',
        },
        {
          id: 5,
          icon: 'Separador.png',
          label: 'Separador',
          name: 'Separators',
        },
        {
          id: 6,
          icon: 'Video.png',
          label: 'Video',
          name: 'Videos',
        },
        {
          id: 7,
          icon: 'Footer.png',
          label: 'Pie de página',
          name: 'Footers',
        },
        {
          id: 8,
          icon: 'Carrito.png',
          label: 'Carrito de compra',
          name: 'Carts',
        },
        {
          id: 9,
          icon: 'ProductDetails.png',
          label: 'Detalle de Producto',
          name: 'ProductDetails',
        },
        {
          id: 10,
          icon: 'Newsletters.png',
          label: 'Newsletter',
          name: 'Newsletter',
        },
        {
          id: 11,
          icon: 'Contacto.png',
          label: 'Contacto',
          name: 'Contacts',
        },
        {
          id: 12,
          icon: 'ListaProductos.png',
          label: 'Listado de productos',
          name: 'ProductList',
        },
      ],
      value: '',
      urlImagen: '',
      fileList: [],
      checkAll: false,
      checkedCities: ['Imagen', 'Orden'],
      cities: cityOptions,
      isIndeterminate: true,
      listadoComponentes: '',
      idComponent: '',
      createComponet: {
        label: '',
        name: '',
        source: '',
        component_type_id: null,
      },
    }
  },
  methods: {
    handleCheckAllChange(val) {
      this.checkedCities = val ? cityOptions : []
      this.isIndeterminate = false
    },
    handleCheckedCitiesChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.cities.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.cities.length
    },
    selectedComponent() {
      let componet = this.options.find((item) => item.id == this.value)
      this.createComponet.label = componet.label
      this.createComponet.component_type_id = componet.id
      this.idComponent = ''
    },
    removeComponent() {
      this.$axios
        .$delete(
          `https://components.komercia.co/api/components/${this.idComponent}`,
          {
            headers: {
              'content-type': 'application/json',
              Authorization: `Bearer ${API.ACCESS_TOKEN}`,
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
        .then((response) => {
          this.$message({
            message: response.mensaje,
            type: 'success',
          })
          this.$emit('upDialogFormVisible', false)
        })
        .catch((error) => {
          for (const key in error.response.data.errors) {
            if (error.response.data.errors.hasOwnProperty(key)) {
              const element = error.response.data.errors[key]
              this.$message.error(element[0])
            }
          }
        })
    },
  },
  watch: {
    async value(newValue) {
      // this.selectedComponent = false
      // this.currentComponent = ''
      // this.fileTipos.name = ''
      this.listadoComponentes = await API.getReferenciasComponente(this.value)
    },
  },
}
</script>

<style scoped>
.box {
  max-width: 900px;
  width: 100%;
  /* min-height: 400px; */
  border-radius: 10px;
  /* background-color: #fff; */
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  /* padding: 25px 15px; */
}
.title {
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  margin: 15px 0;
  color: #2c3c5a;
}
.bold {
  font-weight: 600;
}
.subtitle {
  line-height: 1;
  margin-bottom: 7px;
}
.el-select {
  width: 100%;
}
</style>
