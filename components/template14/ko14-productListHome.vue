<template>
  <div
    v-if="listProductsHome"
    :style="[listProductsHome, dataStore, settingGeneral]"
    class="w-full flex justify-center items-center"
  >
    <div class="w-full max-w-7xl flex justify-center items-center">
      listProductsHome
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko14-productListHome',
  props: {
    listProductsHome: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
  mounted() {},
  data() {
    return {}
  },
}
</script>

<style scoped></style>
