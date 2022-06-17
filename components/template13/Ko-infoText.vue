<template>
  <div
    class="content-section"
    :style="[infoText, settingGeneral]"
    v-if="infoText"
  >
    <div class="content-wrapper">
      <p class="setting_text" :style="`text-align: ${infoText.justingText};`">
        {{ infoText.text }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko13-infoTexto',
  props: {
    settingGeneral: Object,
    infoText: Object,
  },
  data() {
    return {
      infoText2: {
        '--colorText': '#B2A366',
      },
    }
  },
}
</script>
<style scoped>
.content-section {
  background-color: var(--background_color_1);
  padding-top: var(--padding);
  padding-bottom: var(--padding);
  @apply w-full flex flex-col justify-center items-center;
}
.content-wrapper {
  max-width: 1300px;
  @apply w-full flex justify-center items-center px-20;
}
.setting_text {
  font-size: var(--fontSizeTitle);
  font-weight: var(--fontWeighTitle);
  color: var(--colorText);
}
@media (max-width: 600px) {
  .content-wrapper {
    @apply px-10;
  }
}
</style>
