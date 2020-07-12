<template>
  <div class="inputs-array">
    <h4 class="title-input">{{ label }}</h4>
    <div class="wrapper-inputs">
      <div class="content-input" v-for="(item, index) in value" :key="index">
        <span class="label-input">{{ item.label }}</span>
        <div class="input-number">
          <span
            role="button"
            @click="decrease(index)"
            class="icon-input__decrease"
          >
            <font-awesome-icon icon="minus" />
          </span>
          <span
            role="button"
            @click="increase(index)"
            class="icon-input__increase"
          >
            <font-awesome-icon icon="plus" />
          </span>
          <div class="input">
            <input
              :ref="`input-${index}`"
              type="text"
              autocomplete="off"
              max="10"
              min="1"
              disabled
              :value="item.size"
              class="input__inner"
              role="spinbutton"
              aria-valuemax="10"
              aria-valuemin="1"
              :aria-valuenow="item.size"
              aria-disabled="undefined"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'label'],
  data() {
    return {
      num: 0,
    }
  },
  methods: {
    decrease(index) {
      if (this.value[index].size == 0) {
        this.value[index].size = 0
        // this.value[index].size = 0;
      } else {
        this.value[index].size = +this.$refs[`input-${index}`][0].value - 2
        // this.$emit("input", this.$refs[`input-${index}`].value[index].size -= 5)
      }
    },
    increase(index) {
      this.value[index].size = +this.$refs[`input-${index}`][0].value + 2
    },
  },
}
</script>

<style scoped>
.inputs-array {
  margin-bottom: 5px;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
.input-number {
  position: relative;
  display: inline-block;
  width: 90px;
  line-height: 38px;
}
.icon-input__decrease {
  left: 2px;
  border-radius: 10px 0 0 10px;
  border-right: 2px solid #ebeaed;
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 30px;
  height: auto;
  text-align: center;
  /* background: #f5f7fa; */
  color: hsl(260, 8%, 72%);
  cursor: pointer;
  font-size: 13px;
}
.icon-input__increase {
  right: 2px;
  border-radius: 0 10px 10px 0;
  border-left: 2px solid #ebeaed;
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 30px;
  height: auto;
  text-align: center;
  /* background: #f5f7fa; */
  color: hsl(260, 8%, 72%);
  cursor: pointer;
  font-size: 13px;
}
.input {
  display: block;
  position: relative;
  font-size: 14px;
  width: 100%;
}
.input__inner {
  -webkit-appearance: none;
  padding-left: 50px;
  padding-right: 50px;
  text-align: center;
  background-color: #fff;
  background-image: none;
  border-radius: 10px;
  border: 2px solid #ebeaed;
  box-sizing: border-box;
  color: #606266;
  display: inline-block;
  font-size: inherit;
  height: 40px;
  line-height: 40px;
  outline: none;
  padding: 0 15px;
  transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
  width: 100%;
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
.content-input {
  display: flex;
  flex-direction: column;
  margin-right: 12px;
}
.wrapper-inputs {
  display: flex;
  flex-wrap: wrap;
}
.label-input {
  font-size: 14px;
  color: hsl(260, 17%, 68%);
}
</style>
