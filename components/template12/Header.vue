<template>
  <header
    class="flex text-white justify-between items-center pr-4 pl-4 pb-2 transform-gpu fixed top-0 left-0 w-full z-10"
    :class="{
      'bg-white text-gray-800 h-16 pt-2 ease duration-500 shadow': isVariantLogo,
      'pt-8 h-10': !isVariantLogo,
    }"
  >
    <h1>
      <nuxt-link to="/">
        <img :src="logoSrc" class="w-28" />
      </nuxt-link>
    </h1>
    <div
      class="bg-transparent p-2 cursor-pointer ease duration-200 rounded-md"
      :class="{
        'hover:bg-gray-200': isVariantLogo,
        'hover:bg-gray-900': !isVariantLogo,
      }"
      role="button"
      title="Cart"
      @click="handleOpenCart"
    >
      <cart-icon title />
    </div>
  </header>
</template>

<script>
export default {
  name: 'IHeader',
  data: () => ({
    logoSrc: 'http://templates.framework-y.com/gourmet/images/logo.png',
  }),
  computed: {
    defaultLogoSrc() {
      return 'http://templates.framework-y.com/gourmet/images/logo.png'
    },
    variantLogoSrc() {
      return 'http://templates.framework-y.com/gourmet/images/logo-2.png'
    },
    isVariantLogo() {
      return this.logoSrc === this.variantLogoSrc
    },
  },
  async mounted() {
    window.addEventListener('scroll', await this.handleToggleLogo)
  },
  async beforeDestroy() {
    window.removeEventListener('scroll', await this.handleToggleLogo)
  },
  methods: {
    async handleToggleLogo() {
      if (window.scrollY >= 200) {
        await (this.logoSrc = this.variantLogoSrc)
      } else {
        await (this.logoSrc = this.defaultLogoSrc)
      }
    },
    handleOpenCart() {
      this.$store.commit('SET_OPENORDER', true)
    },
  },
}
</script>
