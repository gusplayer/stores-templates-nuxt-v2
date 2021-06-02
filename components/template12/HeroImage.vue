<template>
  <div class="w-full hero-image_container">
    <div class="relative h-inherit flex items-center justify-center">
      <div
        :style="`background-image: url('${imageSrc}')`"
        class="hero_image_bg h-inherit w-full"
      />
      <div
        class="hidden lg:flex justify-center h-inherit items-center z-10 flex-col text-gray-100 ease duration-300"
        :class="{
          'opacity-40 ': shouldChangeOpacity,
        }"
      >
        <h2 class="uppercase text-5xl font-semibold m-0">
          {{ title }}
        </h2>
        <p class="mt-2 italic text-md normal-case text-gray-200">
          {{ subtitle }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroImage',
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    shouldChangeOpacity: false,
  }),
  computed: {
    imageSrc() {
      return `https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1`
    },
  },
  async mounted() {
    window.addEventListener('scroll', await this.handleTextOpacity)
  },
  async beforeDestroy() {
    window.removeEventListener('scroll', await this.handleTextOpacity)
  },
  methods: {
    async handleTextOpacity() {
      await (this.shouldChangeOpacity = !!(window.scrollY >= 160))
    },
  },
}
</script>

<style scoped>
.hero-image_container {
  height: 250px;
  overflow: hidden;
  padding: 0px;
  margin: 0px;
}

.hero_image_bg {
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 1;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-animation: ZoominOut 30s ease;
  animation: ZoominOut 10s ease;
  animation-delay: 120ms;
  animation-fill-mode: forwards;
  filter: brightness(0.7);
}

/* Zoom in Keyframes */
@-webkit-keyframes ZoominOut {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes ZoominOut {
  0% {
    transform: scale(1.4);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (min-width: 920px) {
  .hero-image_container {
    height: 51.178vh;
  }
}
</style>
