<template>
  <div class="content-wa" id="width">
    <KBlogWapi />
  </div>
</template>

<script>
import KBlogWapi from '../../../../components/whatsapp/blog_page/Ko-Blog.vue'
export default {
  layout: 'wa',
  components: {
    KBlogWapi,
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width')
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px'
      } else {
        widthOutput.style.width = window.innerWidth + 'px'
      }
    },
  },
}
</script>
<style scoped>
.content-wa {
  @apply w-full flex flex-col justify-center items-center;
}
</style>
