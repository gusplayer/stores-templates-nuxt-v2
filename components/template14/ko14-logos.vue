<template>
  <div
    v-if="logos"
    :style="[logos, dataStore, settingGeneral]"
    class="w-full flex justify-center items-center"
  >
    <div class="w-full max-w-7xl flex justify-center items-center">logos</div>
  </div>
</template>

<script>
export default {
  name: 'Ko14-Logos',
  props: {
    logos: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
}
</script>
