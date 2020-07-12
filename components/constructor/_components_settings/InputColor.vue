<template>
  <div class="wrapper-input">
    <h4 v-if="label" class="title-input">{{ label }}</h4>
    <el-tooltip
      :disabled="hover ? false : true"
      class="item"
      effect="light"
      :content="hover"
      :placement="tooltip > 6 ? 'bottom' : 'top'"
    >
      <el-color-picker
        ref="inputColor"
        v-model="colorPicker"
        show-alpha
        color-format="hsl"
      ></el-color-picker>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true,
    },
    label: String,
    hover: String,
    tooltip: Number,
  },
  computed: {
    colorPicker: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
}
</script>

<style scoped>
.wrapper-input {
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}
.title-input {
  color: white;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 26px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-left: 5px;
}
</style>
