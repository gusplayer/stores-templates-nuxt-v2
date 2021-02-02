<template>
  <ul class="ko-radio_group">
    <li
      :class="{
        'ko-radio_group_option': true,
        'option-selected': option.selected,
      }"
      v-for="(option, index) in optionsData"
      v-on:click="selectOption(option, index)"
      :key="index"
    >
      {{ option.option.toLowerCase() }}
    </li>
  </ul>
</template>

<script>
export default {
  props: ['options', 'index'],
  mounted() {
    this.selectOption(this.options[0], 0)
  },
  data() {
    return {
      beforeNode: '',
      optionsData: this.options,
      beforeIndexOption: '',
    }
  },
  methods: {
    selectOption(option, index) {
      if (typeof this.beforeIndexOption === 'number') {
        const changeOption = (this.optionsData[
          this.beforeIndexOption
        ].selected = false)
        this.optionsData.splice(index, 1, changeOption)
      }
      option.selected = true
      this.optionsData.splice(index, 1, option)
      this.beforeIndexOption = index
      this.saveOption(option)
    },
    saveOption(option) {
      this.$store.state.beforeCombination.splice(this.index, 1, option.option)
    },
  },
}
</script>

<style scoped>
.ko-radio_group {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
.ko-radio_group_option {
  min-height: 38px;
  min-width: 3em;
  padding: 0 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  text-transform: capitalize !important;
  color: black;
  border: 2px solid rgba(127, 127, 139, 0.342);
  border-radius: 5px;
  background: transparent;
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 7px;
}
.ko-radio_group_option:hover {
  transition: 0.2s;
}
.option-selected {
  color: black;
  background: rgba(126, 142, 196, 0.5);
  border: 2px solid rgba(74, 87, 130, 0.5);
}
</style>
