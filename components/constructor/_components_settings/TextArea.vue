<template>
  <div class="textarea">
    <h4 class="title-input">{{label}}</h4>
    <textarea
      autocomplete="off"
      rows="2"
      :placeholder="label"
      :value="value"
      class="textarea__inner"
      @input="updateValue()"
      ref="textArea"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ['label', 'value'],
  methods: {
    updateValue() {
      this.$emit('input', this.$refs.textArea.value)
    }
  }
}
</script>

<style scoped>
.textarea {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: bottom;
  font-size: 14px;
  margin-bottom: 5px;
}
.textarea__inner {
  -webkit-appearance: none;
  border: 2px solid #ebeaed;
  background-image: none;
  background-color: #fff;
  mix-blend-mode: normal;
  border-radius: 10px;
  color: #606266;
  outline: none;
  font-weight: 400;
  width: 100%;
  height: 63px;
  display: block;
  resize: vertical;
  padding: 5px 15px;
  line-height: 1.3;
  font-size: inherit;
}
.textarea__inner::placeholder {
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
