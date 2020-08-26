<template>
  <div class="form">
    <div class="box">
      <h2 class="title">Nuevo Componente</h2>
      <br />
      <el-row :gutter="22">
        <el-col :span="10" :offset="1">
          <p class="subtitle bold">Tipo de componente</p>
          <el-select
            v-model="value"
            placeholder="Select"
            @change="selectedComponent"
            size="mini"
          >
            <el-option
              v-for="(item, index) in tiposComponentes"
              :key="`${item.label}-${index}`"
              :label="item.label"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="12" :offset="0">
          <p class="subtitle bold">Nombre del componente</p>
          <el-input
            placeholder="Please name"
            v-model="createComponet.name"
            size="mini"
          ></el-input>
        </el-col>
      </el-row>
      <br />
      <el-row
        :gutter="22"
        v-for="(item, index) in settings"
        :key="`setting${index}`"
      >
        <el-col :span="6" :offset="1">
          <p class="subtitle bold">Settings</p>
          <el-select
            v-model="settings[index].setting"
            placeholder="Select"
            size="mini"
            disabled
          >
            <el-option
              v-for="(item, index) in propertiesAndTags"
              :key="`${item}-${index} `"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Type</p>
          <el-select
            v-model="settings[index].property_id"
            placeholder="Select"
            size="mini"
            disabled
          >
            <el-option
              v-for="item in properties"
              :key="item.type"
              :label="item.type"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Label</p>
          <el-input
            placeholder="Label"
            v-model="settings[index].label"
            size="mini"
            disabled
          ></el-input>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Value</p>
          <el-input
            placeholder="Value"
            v-model="settings[index].value"
            size="mini"
            disabled
          ></el-input>
        </el-col>
        <el-col :span="2" :offset="0">
          <p class="subtitle bold">Tags</p>
          <el-input
            placeholder="Value"
            v-model="settings[index].tags"
            size="mini"
            disabled
          ></el-input>
        </el-col>

        <el-col :span="2" :offset="0" class="position-button">
          <el-button
            size="mini"
            type="danger"
            plain
            @click="removeSetting(index, 1)"
            icon="el-icon-delete"
            >Borrar</el-button
          >
        </el-col>
      </el-row>
      <br v-if="settings.length" />
      <el-row :gutter="22">
        <el-col :span="6" :offset="1">
          <p class="subtitle bold">Settings</p>
          <el-select
            v-model="currentSetting.setting"
            placeholder="Select"
            size="mini"
          >
            <el-option
              v-for="(item, index) in propertiesAndTags"
              :key="`${item}-${index} `"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Type</p>
          <el-select
            v-model="currentSetting.property_id"
            placeholder="Select"
            size="mini"
          >
            <el-option
              v-for="item in properties"
              :key="item.type"
              :label="item.type"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Label</p>
          <el-input
            placeholder="Label"
            v-model="currentSetting.label"
            size="mini"
          ></el-input>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Value</p>
          <div v-if="currentSetting.property_id == 3">
            <el-color-picker
              color-format="hsl"
              show-alpha
              v-model="currentSetting.value"
              size="mini"
            ></el-color-picker>
          </div>
          <div v-else>
            <el-input
              placeholder="Value"
              v-model="currentSetting.value"
              size="mini"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="2" :offset="0">
          <p class="subtitle bold">Tag</p>
          <el-input
            placeholder="Tag"
            v-model="currentSetting.tags"
            size="mini"
          ></el-input>
        </el-col>
        <el-col :span="2" :offset="0" class="position-button">
          <el-button
            size="mini"
            type="success"
            plain
            @click="addSetting()"
            icon="el-icon-plus"
            >Agregar</el-button
          >
        </el-col>
      </el-row>
      <br />
      <el-row :gutter="22">
        <el-col :span="10" :offset="1">
          <p class="subtitle bold">Cargar Thumb del componente</p>
          <el-input
            placeholder="Please url"
            v-model="createComponet.source"
            size="mini"
          ></el-input>
        </el-col>
      </el-row>
      <br />
      <br />
      <el-row :gutter="22">
        <el-col :span="8" :offset="20">
          <el-button type="danger" plain>Cancel</el-button>
          <el-button @click="setComponent()" type="primary">Confirm</el-button>
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
    this.tiposComponentes = await API.getTipoComponente()
    this.$store.dispatch('GET_PROPERTIES')
    // console.log(this.$store.dispatch('GET_PROPERTIES'))
  },
  data() {
    return {
      tiposComponentes: '',
      value: '',
      currentSetting: {
        setting: '',
        tags: '',
        property_id: '',
        label: '',
        value: '',
      },
      urlImagen: '',
      settings: [],
      fileList: [],
      checkAll: false,
      checkedCities: ['Imagen', 'Orden'],
      cities: cityOptions,
      isIndeterminate: true,
      createComponet: {
        label: '',
        name: 'Ko-',
        source: '',
        component_type_id: null,
        settings_base: '',
      },
    }
  },
  computed: {
    settingsByComponent() {
      return this.$store.state.settingsByComponent
    },
    properties() {
      return this.$store.state.properties
    },
    propertiesAndTags() {
      if (this.settingsByComponent.setting && this.settingsByComponent.tags) {
        let arr = [
          ...this.settingsByComponent.setting,
          ...this.settingsByComponent.tags,
        ] // => concatena los dos arrays
        return [...new Set(arr)] // => elimina los elementos duplicados
      } else if (this.settingsByComponent.setting) {
        return [...this.settingsByComponent.setting]
      }
    },
    errorSettingsByComponent: {
      get() {
        return this.$store.state.errorSettingsByComponent
      },
      set(value) {
        this.$store.state.errorSettingsByComponent = value
      },
    },
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
      this.cleanCurrentSetting()
      let componet = this.tiposComponentes.find((item) => item.id == this.value)
      this.createComponet.label = componet.label
      this.createComponet.component_type_id = componet.id
      this.$store
        .dispatch('GET_SETTINGS_BY_COMPONENT', componet.id)
        .then((res) => {
          if (this.errorSettingsByComponent) {
            this.$message.error(this.errorSettingsByComponent)
            this.errorSettingsByComponent = null
          }
        })
      this.settings = []
    },
    setComponent() {
      this.createComponet.settings = this.settings
      let obj = {}

      this.settings.map((item) => {
        obj[item.setting] = item.value
      })
      this.createComponet.settings_base = JSON.stringify(obj)
      this.$axios
        .$post(
          'https://components.komercia.co/api/components/references',
          this.createComponet,
          {
            headers: {
              'content-type': 'application/json',
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
    addTag(setting) {
      let tag = null
      if (this.currentSetting.tags == '') {
        if (this.settingsByComponent.tags) {
          tag = this.settingsByComponent.tags.find((item) => item === setting)
        }
        return tag ? this.settingsByComponent.tag : null
      } else {
        tag = this.currentSetting.tags
        return tag
      }
    },
    addSetting() {
      this.currentSetting.tags = this.addTag(this.currentSetting.setting)
      this.settings.push({ ...this.currentSetting })
      this.cleanCurrentSetting()
    },
    removeSetting(index) {
      this.settings.splice(index, 1)
    },
    cleanCurrentSetting() {
      this.currentSetting.setting = ''
      this.currentSetting.tags = ''
      this.currentSetting.property_id = ''
      this.currentSetting.label = ''
      this.currentSetting.value = ''
    },
  },
}
</script>

<style scoped>
.box {
  width: 100%;
  border-radius: 10px;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
}
.title {
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  margin: 0;
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
.position-button {
  margin-top: 21px;
}
</style>
