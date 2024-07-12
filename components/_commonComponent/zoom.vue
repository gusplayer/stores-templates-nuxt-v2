<template>
  <div>
    <div class="cursor-pointer" @click.prevent="ShowModal(true)">
      <KoProductSlider
        :photos="photos"
        :photo="photo"
        :id-you-tube="idYouTube"
        :width-photo="550"
        :width-screen="400"
      />
    </div>
    <div
      v-if="showModal"
      class="fixed left-0 top-0 z-[1000] flex h-full w-full items-center justify-center overflow-auto bg-[#000000de]"
    >
      <span
        class="absolute right-[35px] top-[20px] cursor-pointer text-[40px] font-bold text-white-white transition hover:text-gray-500 focus:text-gray-500"
        @click.prevent="ShowModal(false)"
      >
        &times;
      </span>

      <div class="max-h-[90%] max-w-[90%] md:max-h-[80%] md:max-w-[80%]">
        <KoProductSliderOption
          :photos="photos"
          :photo="photo"
          :id-you-tube="idYouTube"
          :width-photo="850"
          :width-screen="600"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WrapperImgWapi',
  components: {
    KoProductSlider: () => import('./product-slide.vue'),
    KoProductSliderOption: () => import('./product-slide-option.vue'),
  },
  props: {
    photos: {
      type: Array,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    idYouTube: {
      type: String,
      default: null,
    },
  },

  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    ShowModal(value) {
      this.showModal = value
    },
  },
}
</script>

<style scoped>
.photos .responsive .swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.5);
}
.photos .responsive .swiper-pagination-bullet-active {
  background-color: #fff;
}

.youTube__action_back {
  background-color: var(--color_background_btn);
  color: var(--color_text_btn);
  border-style: none;
  outline: none;
}
</style>
