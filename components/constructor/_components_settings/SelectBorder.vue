<template>
  <div class="wrapper-select">
    <h4 class="title-input">{{ label }}</h4>
    <div class="select">
      <select
        name="format"
        ref="format"
        @change="updateValue()"
        :style="value == -1 || !value ? 'color: rgba(21, 20, 57, 0.4);' : ''"
      >
        <option selected disabled>
          {{ $t('productdetail_seleccionarOpcion') }}</option
        >
        <slot></slot>
        <!-- <option v-for="(item, index) in options" :key="index" @input="updateValue()" :value="value">{{item.type}}</option> -->
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'label', 'value'],
  created() {},
  data() {
    return {}
  },
  methods: {
    updateValue() {
      this.$emit('input', +this.$refs.format.value)
    },
  },
}
</script>

<style scoped>
select {
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
  box-shadow: none;
  border: 0 !important;
  background: #fff;
  background-image: none;
  color: #606266;
  font-weight: 600;
  /* padding: 7px 16px; */
}
select::-ms-expand {
  display: none;
}
.select {
  position: relative;
  display: flex;
  width: 15em;
  height: 40px;
  background: #fff;
  overflow: hidden;
  border: 2px solid #ebeaed;
  border-radius: 100px;
}
select {
  flex: 1;
  padding: 0 0.5em 0 1em;
  cursor: pointer;
  font-size: 1em;
}
.select::after {
  content: url('data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" fill="Indigo" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>');
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.4em 1em;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
}
.select:hover::after {
  content: url('data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" fill="BlueViolet" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>');
}
option {
  color: #606266;
  font-weight: 600;
}
option:disabled {
  background-color: #eee;
  color: rgba(21, 20, 57, 0.301);
}
</style>
