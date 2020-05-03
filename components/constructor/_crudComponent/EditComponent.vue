<template>
  <div class="form">
    <div class="box">
      <h2 class="title">Editar Componente</h2>
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
              v-for="item in tiposComponentes"
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
            v-model="updateComponent.name"
            size="mini"
          ></el-input>
        </el-col>
      </el-row>
      <br />
      <el-row
        :gutter="22"
        v-for="(propertie, index) in settings.properties"
        :key="`setting${index}`"
      >
        <el-col :span="6" :offset="1">
          <p class="subtitle bold">Settings</p>
          <el-select v-model="propertie.value" placeholder="Select" size="mini">
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
            v-model="propertie.key.type"
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
            v-model="propertie.label"
            size="mini"
          ></el-input>
        </el-col>
        <el-col :span="4" :offset="0">
          <p class="subtitle bold">Value</p>
          <div v-if="propertie.key.type == 3">
            <el-color-picker
              color-format="hsl"
              show-alpha
              v-if="setting_base"
              v-model="setting_base[propertie.value]"
              size="mini"
            ></el-color-picker>
          </div>
          <div v-else-if="propertie.key.type == 'color'">
            <el-color-picker
              color-format="hsl"
              show-alpha
              v-if="setting_base"
              v-model="setting_base[propertie.value]"
              size="mini"
            ></el-color-picker>
          </div>
          <div v-else>
            <el-input
              placeholder="Value"
              v-if="setting_base"
              v-model="setting_base[propertie.value]"
              size="mini"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="2" :offset="0">
          <p class="subtitle bold">Tags</p>
          <el-input
            placeholder="Value"
            v-model="propertie.tags"
            size="mini"
          ></el-input>
        </el-col>
        <el-col :span="2" :offset="0" class="position-button">
          <el-button
            size="mini"
            type="danger"
            plain
            @click="removeSetting(index, propertie.value)"
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
              v-if="setting_base"
              v-model="currentSetting.value"
              size="mini"
            ></el-color-picker>
          </div>
          <div v-else>
            <el-input
              placeholder="Value"
              v-if="setting_base"
              v-model="currentSetting.value"
              size="mini"
            ></el-input>
          </div>
        </el-col>
        <el-col :span="2" :offset="0">
          <p class="subtitle bold">Tags</p>
          <el-input
            placeholder="Value"
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
            v-model="updateComponent.source"
            size="mini"
          ></el-input>
        </el-col>
      </el-row>
      <br />
      <br />
      <el-row :gutter="22">
        <el-col :span="6" :offset="20">
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
  props: {
    currentComponent: Object,
  },
  async mounted() {
    this.tiposComponentes = await API.getTipoComponente()
    this.$store.dispatch('GET_PROPERTIES')

    this.value = this.currentComponent.component_type_id
    this.updateComponent.name = this.currentComponent.name
    this.updateComponent.source = this.currentComponent.source
    this.updateComponent.label = this.currentComponent.label
    this.updateComponent.component_type_id = this.currentComponent.component_type_id
    if (this.currentComponent.settings_base.length) {
      this.settings = this.currentComponent
      this.setting_base = JSON.parse(
        this.currentComponent.settings_base[0].valores
      )
    }
  },
  data() {
    return {
      setting_base: '',
      settings: [],
      tiposComponentes: '',
      currentSetting: {
        setting: '',
        tags: '',
        property_id: '',
        label: '',
        value: '',
      },
      value: '',
      urlImagen: '',
      fileList: [],
      checkAll: false,
      checkedCities: ['Imagen', 'Orden'],
      cities: cityOptions,
      isIndeterminate: true,
      idComponent: '',
      updateComponent: {
        label: '',
        name: 'Ko-',
        source: '',
        component_type_id: null,
        settings_base: [],
        properties: [],
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
      this.updateComponent.label = componet.label
      this.updateComponent.component_type_id = componet.id
    },
    setComponent() {
      let stringify = JSON.stringify(this.setting_base)
      this.settings.settings_base[0].valores = stringify
      this.updateComponent.settings_base = this.settings.settings_base
      this.updateComponent.properties = this.settings.properties
      this.$axios
        .$put(
          `https://components.komercia.co/api/components/references/${this.currentComponent.id}`,
          this.updateComponent,
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
          this.$message.error(error.response.data.mensaje)
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
      this.settings.properties[this.settings.properties.length] = {
        component_property_id: this.currentSetting.property_id,
        value: this.currentSetting.setting,
        label: this.currentSetting.label,
        tags: this.addTag(this.currentSetting.setting),
        // tags: null,

        key: { type: this.currentSetting.property_id },
      }
      Object.assign(this.setting_base, {
        [this.currentSetting.setting]: this.currentSetting.value,
      })
      this.cleanCurrentSetting()
    },
    removeSetting(index, value) {
      delete this.setting_base[value]
      this.settings.properties.splice(index, 1)
    },
    cleanCurrentSetting() {
      this.currentSetting.setting = ''
      this.currentSetting.tags = ''
      this.currentSetting.property_id = ''
      this.currentSetting.label = ''
      this.currentSetting.value = ''
    },
  },
  watch: {
    settings: function () {
      this.settings.properties
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
.position-button {
  margin-top: 21px;
}
.el-color-picker--mini,
.el-color-picker__trigger {
  height: 28px;
  width: 100%;
}
</style>
