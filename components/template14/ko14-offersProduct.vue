<template>
  <div
    v-if="offersProduct"
    :style="[offersProduct, dataStore, settingGeneral]"
    class="w-full flex justify-center items-center"
  >
    <div class="w-full max-w-7xl flex justify-center items-center">
      offersProduct
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko14-offersProduct',
  props: {
    offersProduct: Object,
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
