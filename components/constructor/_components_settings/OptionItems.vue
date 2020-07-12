<template>
  <div class="option">
    <h4 class="title-input">Settings</h4>

    <div class="wrapper-color">
      <template v-for="item in propertiesComponent.properties">
        <InputColor
          v-if="item.key.type == 'color'"
          :key="`${item.label}${item.id}`"
          :hover="item.label"
          v-model="Settings[0][item.value]"
        />
      </template>
    </div>
    <div
      class="item"
      v-for="item in propertiesComponent.properties"
      :key="`${item.label}${item.id}`"
    >
      <InputNumber
        v-if="item.key.type == 'number'"
        :label="item.label"
        :incremento="incremento"
        v-model="Settings[0][item.value]"
      />
      <InputText
        v-else-if="item.key.type == 'url' || item.key.type == 'text'"
        :label="item.label"
        v-model="Settings[0][item.value]"
      />
      <TextArea
        v-else-if="item.key.type == 'description'"
        :label="item.label"
        v-model="Settings[0][item.value]"
      />
      <InputArray
        v-else-if="item.key.type == 'array'"
        :label="item.label"
        v-model="Settings[0][item.value]"
      />
      <SelectBorder
        v-else-if="item.key.type == 'select'"
        :label="item.label"
        v-model="Settings[0][item.value]"
      />
      <MultiCheckBox
        v-else-if="item.key.type == 'multiselect'"
        :label="item.label"
        :views="views"
        v-model="Settings[0][item.value]"
      />
      <InputFile
        v-else-if="item.key.type == 'boolean'"
        :label="item.label"
        @upload="upload"
        v-model="Settings[0][item.value]"
      />

      <InputFile
        v-else-if="item.key.type == 'boolean'"
        :label="item.label"
        @upload="upload"
        v-model="settings[0][item.value]"
      />
    </div>
  </div>
</template>

<script>
import InputNumber from './InputNumber'
import InputText from './InputText'
import InputColor from './InputColor'
import TextArea from './TextArea'
import InputFile from './InputFile'
import InputArray from './InputArray'
import SelectBorder from './SelectBorder'
import MultiCheckBox from './MultiCheckBox'
export default {
  components: {
    InputNumber,
    InputText,
    InputColor,
    TextArea,
    InputFile,
    InputArray,
    SelectBorder,
    MultiCheckBox,
  },
  data() {
    return {
      incremento: 5,
      typeVideo: [
        {
          id: 1,
          name: 'Youtube',
        },
        {
          id: 2,
          name: 'Vimeo',
        },
      ],
    }
  },
  computed: {
    propertiesComponent() {
      return this.$store.state.propertiesComponent
    },
    Settings: {
      get() {
        return this.$store.state.SettingsValues
      },
      set(value) {
        this.$store.state.SettingsValues = value
      },
    },
    views() {
      return this.$store.state.views
    },
  },
}
</script>

<style scoped>
.option {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.wrapper-color {
  display: flex;
}
.title-input {
  color: white;
  margin-top: 10px;
}
.title-input2 {
  color: white;
  margin-top: 5px;
}
</style>
