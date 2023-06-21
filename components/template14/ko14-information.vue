<template>
  <div
    v-if="information"
    :style="[information, settingGeneral]"
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
    style="background-color: var(--background_color_1)"
  >
    <div
      class="max-w-7xl grid grid-cols-1 md:grid-cols-2 mlg:grid-cols-4 gap-5 md:gap-4 items-center justify-center"
    >
      <div
        v-for="(items, index) in information.values"
        :key="index"
        class="flex flex-row items-center justify-start"
      >
        <img
          v-lazy="idCloudinary(items.img, 150, 150)"
          width="40px"
          height="40px"
          class="object-contain object-center"
          :class="`contentImg${index}`"
          :alt="`imgInfo${index}`"
        />
        <div
          class="h-35 border-l-2 border-l-black ml-20 pr-20 leading-25"
          :style="`border-color: ${items.color_border};`"
        />
        <div>
          <p
            :style="`color: ${items.color_title}; font-size: ${items.fontSizeTitle}; font-weight: ${items.fontWeighTitle};`"
          >
            {{ items.title }}
          </p>
          <p
            :style="`color: ${items.color_text}; font-size: ${items.fontSizeText}; font-weight: ${items.fontWeighText};`"
          >
            {{ items.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  name: 'Ko14-information',
  mixins: [idCloudinary],
  props: {
    information: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
}
</script>
