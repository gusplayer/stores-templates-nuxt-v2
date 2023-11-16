<template>
  <div
    class="w-full flex flex-col justify-center items-center box-border pt-30 pb-10 bg-transparent"
  >
    <div
      class="w-full max-w-[1300px] px-10 py-10 md:py-20 flex justify-start items-center"
    >
      <p class="text-18 font-bold cursor-pointer color-title">
        {{ $t('home_destacadosMsg') }}
      </p>
    </div>
    <KoSwiper
      :suggested-products="suggestedProducts"
      :setting-general="settingGeneral"
      :setting-card-products="settingCardProducts"
      :data-store="dataStore"
    />
  </div>
</template>

<script>
export default {
  name: 'KoSuggestionsProducto',
  components: {
    KoSwiper: () => import('./product-slider/product-swiper.vue'),
  },
  props: {
    suggestedProducts: {
      type: Array,
      required: true,
    },
    settingCardProducts: {
      type: Object,
      default: null,
    },
    settingGeneral: {
      type: Object,
      default: null,
    },
    settingByTemplate: {
      type: Object,
      default: null,
    },
    dataStore: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style scoped>
.color-title {
  color: var(--color_title);
}
</style>
