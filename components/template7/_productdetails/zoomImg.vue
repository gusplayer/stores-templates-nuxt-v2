<template>
  <figure class="zoom" :style="setBackground(photo)" v-on:mousemove="zoom">
    <img
      class="photo_main"
      v-on:mouseover="activeZoom = !activeZoom"
      :src="idCloudinaryDetalle(photo, 645, 430)"
      alt="Product Img"
    />
  </figure>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
import idCloudinaryDetalle from '../../../mixins/idCloudinary'

export default {
  mixins: [idCloudinary, idCloudinaryDetalle],
  name: 'zoomImg-details',
  props: ['photo'],
  data() {
    return {
      activeZoom: true,
    }
  },
  methods: {
    zoom(e) {
      const zoomer = e.currentTarget
      let offsetX, offsetY
      if (e.offsetY) {
        e.offsetY ? (offsetY = e.offsetY) : (offsetX = e.touches[0].pageY)
      }
      if (e.offsetX) {
        e.offsetX ? (offsetX = e.offsetX) : (offsetX = e.touches[0].pageX)
      }
      const x = (offsetX / zoomer.offsetWidth) * 80
      const y = (offsetY / zoomer.offsetHeight) * 80
      zoomer.style.backgroundPosition = `${x}% ${y}%`
    },
    setBackground(p) {
      return `background-image: url('${p}')`
    },
  },
}
</script>

<style scoped>
figure.zoom {
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
  cursor: zoom-in;
  margin-bottom: 10px;
}
figure.zoom img {
  max-width: 100%;
  max-height: 576px;
  background-color: #fff;
  transition: opacity 0.3s;
}
.photo_main {
  object-fit: contain;
}
figure.zoom img:hover {
  opacity: 0;
}
</style>
