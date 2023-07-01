<template>
  <div class="w-full py-10">
    <h4 class="text-gray-900 font-bold text-14">{{ label }}</h4>
    <div
      class="select relative flex bg-transparent overflow-hidden w-full max-w-[300px] border-2 rounded-4 py-5"
      :style="`border-color:${detailsProducts.color_border};`"
    >
      <select
        ref="format"
        name="format"
        :style="` color:${detailsProducts.color_subtext};`"
        @change="updateValue()"
      >
        <option disabled>{{ $t('productdetail_seleccionarOpcion') }}</option>
        <slot></slot>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'selectGroup-details',
  props: ['options', 'label', 'value', 'index', 'variantes', 'detailsProducts'],
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
  font-size: 14px;
  font-weight: 600;
  transition: all 0.6s ease-in-out;
  flex: 1;
  padding: 0 0.5em 0 1em;
  cursor: pointer;
  background-color: transparent;
  color: #222;
}
select::-ms-expand {
  display: none;
}
.select::after {
  content: url('data:image/svg+xml;charset=UTF-8, <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="24" height="24" fill="Dark Gray" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>');
  position: absolute;
  top: 1px;
  right: 0;
  cursor: pointer;
  pointer-events: none;
  transition: 0.25s all ease;
  @apply px-1 py-2;
}
option {
  /* color: var(--color_subtext); */
  color: #222;
  font-size: 14px;
  font-weight: 400;
  transition: all 0.6s ease-in-out;
}
option:disabled {
  background: #f8f8f8;
  color: #222;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.6s ease-in-out;
}
</style>
