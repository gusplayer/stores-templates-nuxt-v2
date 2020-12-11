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
        <option disabled> {{ $t('productdetail_seleccionarOpcion') }}</option>
        <slot></slot>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectGroup-details',
  props: ['options', 'label', 'value', 'index', 'variantes'],
  mounted() {
    this.saveOption()
  },
  data() {
    return {}
  },
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.format.value)
      if (this.$refs.format.value) {
        let variante = this.variantes[this.index].valores.filter((item) => {
          return item.option == this.$refs.format.value
        })
        this.$store.state.beforeCombination.splice(
          this.index,
          1,
          variante[0].option
        )
      }
    },
    saveOption() {
      this.$store.state.beforeCombination.splice(
        this.index,
        1,
        this.variantes[this.index].valores[0].option
      )
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
  background: transparent;
  background-image: none;
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
  font-weight: 600;
}
select::-ms-expand {
  display: none;
}
.select {
  position: relative;
  display: flex;
  width: 100%;
  height: 40px;
  background: transparent;
  overflow: hidden;
  border: 2px solid rgba(127, 127, 139, 0.342);
  border-radius: var(--radius_btn);
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
  /* color: var(--color_subtext); */
  color: rgba(21, 20, 57, 0.541);
}
option:disabled {
  background: white;
  color: black;
  font-weight: bold;
}
</style>
