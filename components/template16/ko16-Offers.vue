<template>
  <div
    class="w-full justify-center items-center relative mt-20 md:mt-50"
    :style="`background-color: ${offers['--background_color_1']}`"
  >
    <picture>
      <source
        media="(max-width: 799px)"
        :srcset="idCloudinaryBanner(offers.img, 'bannerRes', 800)"
      />
      <source
        media="(min-width: 800px)"
        :srcset="idCloudinaryBanner(offers.img, 'banner')"
      />
      <img
        v-lazy="offers.img"
        alt="banner template16"
        class="w-full object-cover"
      />
    </picture>
    <div
      class="w-full h-full max-w-9/0 flex flex-col justify-center items-end absolute top-0"
      style="z-index: 20"
    >
      <div class="flex-1 flex flex-col justify-center items-start">
        <p
          v-if="offers?.title"
          class="mb-10 max-w-lg md:max-w-xl text-15 md:text-25 lg:text-40 xl:text-45 leading-tight"
          :style="`color: ${offers.color_title}; font-weight: ${offers.fontWeighTitle};`"
        >
          {{ offers.title }}
        </p>
        <p
          v-if="offers?.text"
          class="max-w-md md:max-w-lg text-14 md:text-18 xl:text-28"
          :style="`color: ${offers.color_text}; font-weight: ${offers.fontWeighText};`"
        >
          {{ offers.text }}
        </p>
        <div v-if="!isFinished" class="mt-30 grid grid-flow-col gap-x-4">
          <div
            class="py-8 px-3 text-center w-[60px]"
            :style="`color: ${offers.values[0].color_bg_discount}; background-color: ${offers.values[0].color_bg}; border-color: ${offers.values[0].color_border_btn}; border-radius: ${settingGeneral?.radius};`"
          >
            <p class="text-18 font-bold">{{ days }}</p>
            <span class="text-14">días</span>
          </div>
          <div
            class="py-8 px-3 text-center w-[60px]"
            :style="`color: ${offers.values[0].color_bg_discount}; background-color: ${offers.values[0].color_bg}; border-color: ${offers.values[0].color_border_btn}; border-radius: ${settingGeneral?.radius};`"
          >
            <p class="text-18 font-bold">{{ hours }}</p>
            <span class="text-14">horas</span>
          </div>
          <div
            class="py-8 px-3 text-center w-[60px]"
            :style="`color: ${offers.values[0].color_bg_discount}; background-color: ${offers.values[0].color_bg}; border-color: ${offers.values[0].color_border_btn}; border-radius: ${settingGeneral?.radius};`"
          >
            <p class="text-18 font-bold">{{ minutes }}</p>
            <span class="text-14">min</span>
          </div>
          <div
            class="py-8 px-3 text-center w-[60px]"
            :style="`color: ${offers.values[0].color_bg_discount}; background-color: ${offers.values[0].color_bg}; border-color: ${offers.values[0].color_border_btn}; border-radius: ${settingGeneral?.radius};`"
          >
            <p class="text-18 font-bold">{{ seconds }}</p>
            <span class="text-14">seg</span>
          </div>
        </div>
        <div
          v-else
          class="mt-30 text-14 md:text-16 xl:text-20"
          :style="`color: ${offers.color_text}; font-weight: ${offers.fontWeighText};`"
        >
          <p>Finalizado</p>
        </div>
        <div class="mt-40">
          <p>Falta agregar producto</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'Ko16Offers',
  mixins: [idCloudinary],
  props: {
    offers: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    dataStore: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      countdown: {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      },
      isFinished: false,
    }
  },
  computed: {
    days() {
      return this.countdown.days
    },
    hours() {
      return this.countdown.hours
    },
    minutes() {
      return this.countdown.minutes
    },
    seconds() {
      return this.countdown.seconds
    },
  },
  watch: {
    'offers.values'() {
      this.calculateCountdown()
      setInterval(this.calculateCountdown, 1000)
    },
  },
  mounted() {
    if (this.offers) {
      this.calculateCountdown()
      setInterval(this.calculateCountdown, 1000)
    }
  },
  methods: {
    calculateCountdown() {
      const now = new Date().getTime()
      const timeRemaining = new Date(this.offers.values[0].maximumTime) - now

      if (timeRemaining <= 0) {
        this.isFinished = true
      } else {
        this.countdown.days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24))
        this.countdown.hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        )
        this.countdown.minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        )
        this.countdown.seconds = Math.floor(
          (timeRemaining % (1000 * 60)) / 1000
        )
      }
    },
  },
}
</script>
