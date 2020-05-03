<template>
  <div class="wrapper-input">
    <h4 class="title-input">{{label}}</h4>
    <input
      type="text"
      autocomplete="off"
      ref="urlIframe"
      :placeholder="label"
      class="input__inner"
      :value="value"
      @input="updateValue()"
    />
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.urlIframe.value)
    }
  }
}
</script>

<style scoped>
.wrapper-input {
  margin-bottom: 5px;
}
.input__inner {
  -webkit-appearance: none;
  border: 2px solid #ebeaed;
  background-image: none;
  background-color: #fff;
  border-radius: 100px;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  font-weight: 600;
  width: 100%;
}
.input__inner::placeholder {
  color: rgba(21, 20, 57, 0.4);
  text-transform: capitalize;
  font-weight: 600;
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
