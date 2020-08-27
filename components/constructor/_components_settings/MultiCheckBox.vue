<template>
  <div class="wrapper-select">
    <h4 class="title-input">{{ label }}</h4>
    <div class="select">
      <el-checkbox
        :indeterminate="isIndeterminate"
        v-model="checkAll"
        @change="handleCheckAllChange"
        >Marcar todos</el-checkbox
      >
      <div style="margin: 10px 0;"></div>
      <el-checkbox-group
        v-model="checkedViews"
        @change="handleCheckedViewsChange"
      >
        <el-checkbox
          v-for="(view, index) in views"
          :label="view.id"
          :value="view.id"
          :key="`${view}-${index}`"
          :disabled="view.name === 'Detalle Producto'"
          >{{ view.name }}</el-checkbox
        >
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
export default {
  props: ['options', 'label', 'value', 'views'],
  data() {
    return {
      checkedViews: [],
      checkAll: false,
      isIndeterminate: true,
    }
  },
  methods: {
    selectedViews(value) {
      let views = []
      value.filter((view) => views.push(view.id))
      return views
    },
    handleCheckedViewsChange(value) {
      let checkedCount = value.length
      this.checkAll = checkedCount === this.views.length
      this.isIndeterminate =
        checkedCount > 0 && checkedCount < this.views.length
      this.$emit('input', this.checkedViews)
      this.$store.dispatch('GET_PAGINATION', this.checkedViews)
    },
    handleCheckAllChange(val) {
      this.checkedViews = val ? this.selectedViews(this.views) : []
      this.isIndeterminate = false
      this.$emit('input', this.checkedViews)
      this.$store.dispatch('GET_PAGINATION', this.checkedViews)
    },
  },
}
</script>

<style scoped>
.el-checkbox-group {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
