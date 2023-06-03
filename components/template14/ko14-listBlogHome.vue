<template>
  <div
    v-if="listBlogHome"
    :style="[listBlogHome, dataStore, settingGeneral]"
    class="w-full flex justify-center items-center"
  >
    <div class="w-full max-w-7xl flex justify-center items-center">
      listBlogHome
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko14-listBlogHome',
  props: {
    listBlogHome: Object,
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
