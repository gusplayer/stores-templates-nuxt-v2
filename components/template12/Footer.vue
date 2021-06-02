<template>
  <footer
    ref="footer"
    :class="`${visible ? 'visible' : 'invisible'}`"
    class="footer_container relative flex flex-col pt-14 items-center w-full bg-gray-100"
  >
    <div class="footer_logo mb-6">
      <img :src="logoSrc" class="w-44 fit-contain" />
    </div>
    <p
      class="footer_brand_modus text-center text-md font-normal text-gray-400 pr-4 pl-4"
      v-html="modus"
    />
    <div class="footer_social_icons flex flex-nowrap mt-6 mb-12">
      <div
        v-for="item in 4"
        :key="item"
        class="w-10 rounded-sm h-10 bg-gray-300 mr-4 hover:bg-blue-200"
      />
    </div>
    <div
      class="footer_resources w-full text-gray-400 text-center text-sm font-normal"
    >
      <hr class="border-t border-gray-200 w-full" />
      <p class="p-4">
        {{ resourcesText }}
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'IFooter',
  props: {
    modus: {
      type: String,
      default: () =>
        "We don't care if we're doing haute cuisine or burgers and pizza. <br / >We just do it right. Always.",
    },
    resourcesText: {
      type: String,
      default: () =>
        '© 2017 Gourmet - info@restaurant.com - +02 123458992 - Wall Street Avenue 502, New York - Restaurant Template Handmade by schiocco.io',
    },
  },
  data: () => ({
    visible: false,
  }),
  computed: {
    logoSrc() {
      return '/logo-2.png'
    },
  },
  mounted() {
    this.execIntersectionObserver()
  },
  methods: {
    execIntersectionObserver() {
      const vm = this
      const ref = document.getElementById('LastSection')
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0]
        vm.visible = isIntersecting
      })
      observer.observe(ref)
    },
  },
}
</script>

<style scoped>
.footer_container {
  height: 50vh;
}

@media screen and (min-width: 752px) {
  .footer_container {
    height: 44vh;
  }
}

@media screen and (min-width: 1200px) {
  .footer_container {
    height: 35vh;
  }
}
</style>
