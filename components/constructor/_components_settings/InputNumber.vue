<template>
  <div class="wrapper-input">
    <h4 class="title-input">{{ label }}</h4>
    <div class="input-number">
      <span
        :class="isDisabledDecrease ? 'disabled' : ''"
        role="button"
        @click="decrease()"
        class="icon-input__decrease"
      >
        <menos-icon icon="minus" />
      </span>
      <span
        :class="isDisabledIncrease ? 'disabled' : ''"
        role="button"
        @click="increase()"
        class="icon-input__increase"
      >
        <mas-icon icon="plus" />
      </span>
      <div class="input">
        <input
          type="text"
          autocomplete="off"
          max="10"
          min="1"
          disabled
          :value="sizeWidth"
          @input="updateValue()"
          class="input__inner"
          role="spinbutton"
          aria-valuemax="10"
          aria-valuemin="1"
          :aria-valuenow="value"
          aria-disabled="undefined"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    label: String,
    tag: String,
    incremento: Number,
    name: String,
  },
  created() {
    if (this.value == null) {
      this.sizeWidth = 0
    }
  },
  data() {
    return {
      isDisabledDecrease: false,
      isDisabledIncrease: false,
    }
  },
  computed: {
    sizeWidth: {
      get() {
        if (this.value && this.value.endsWith('px')) {
          return parseInt(this.value.slice(0, -2))
        } else {
          return parseInt(this.value)
        }
      },
      set(value) {
        this.$emit('input', `${value}px`)
      },
    },
  },
  methods: {
    decrease() {
      if (this.sizeWidth == 0) {
        this.sizeWidth = 0
      } else {
        this.sizeWidth = this.sizeWidth - this.incremento
      }
    },
    increase() {
      if (this.name == 'radius_btn') {
        if (this.sizeWidth == 25) {
          this.sizeWidth = 25
        } else {
          this.sizeWidth = this.sizeWidth + this.incremento
        }
      } else {
        this.sizeWidth = this.sizeWidth + this.incremento
      }
    },
  },
  watch: {
    value() {
      if (this.value == null) {
        this.sizeWidth = 0
      }
    },
    sizeWidth(value) {
      if (value == 0) {
        this.isDisabledDecrease = true
      } else if (this.name == 'radius_btn' && value == 25) {
        this.isDisabledIncrease = true
      } else {
        this.isDisabledDecrease = false
        this.isDisabledIncrease = false
      }
    },
  },
}
</script>

<style scoped>
.wrapper-input {
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
  width: 120px;
  line-height: 38px;
}
.icon-input__decrease {
  left: 2px;
  border-radius: 30px 0 0 30px;
  border-right: 2px solid #ebeaed;
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 40px;
  height: auto;
  text-align: center;
  /* background: #f5f7fa; */
  color: hsl(260, 8%, 72%);
  cursor: pointer;
  font-size: 13px;
}
.icon-input__increase {
  right: 2px;
  border-radius: 0 30px 30px 0;
  border-left: 2px solid #ebeaed;
  position: absolute;
  z-index: 1;
  top: 1px;
  width: 40px;
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
  border-radius: 30px;
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
span.disabled {
  cursor: not-allowed;
  /* pointer-events: none; */
  opacity: 0.5;
  background: rgba(241, 240, 240, 0.822);
}
</style>
