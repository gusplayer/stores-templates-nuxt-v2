<template>
  <figure class="zoom" :style="setBackground(photo)" v-on:mousemove="zoom">
    <!-- <image-cloudinary :src="photo" class="photo_main" :width="1000" /> -->
    <cld-image
      cloudName="komercia-store"
      :publicId="getIdCloudinary(photo)"
      width="300"
      crop="scale"
      class="photo_main"
    >
      <cld-transformation
        height="300"
        width="300"
        crop="lpad"
        quality="auto"
        background="auto:border"
      />
    </cld-image>
  </figure>
</template>

<script>
export default {
  props: { Settings: Object },
  props: ['photo'],
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
      const x = (offsetX / zoomer.offsetWidth) * 100
      const y = (offsetY / zoomer.offsetHeight) * 100
      zoomer.style.backgroundPosition = `${x}% ${y}%`
    },
    setBackground(p) {
      return `background-image: url('${
        (p,
        {
          width: 1000,
        })
      }')`
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
  max-height: 430px;
  width: 645px;
  height: 430px;
  background-color: var(--background_color_1);
  transition: opacity 0.3s;
}
.photo_main {
  object-fit: contain;
  object-position: left;
}
figure.zoom img:hover {
  opacity: 0;
}
@media (max-width: 1250px) {
  figure.zoom img {
    width: 600px;
  }
}
@media (max-width: 1185px) {
  figure.zoom img {
    width: 500px;
  }
}
@media (max-width: 1035px) {
  figure.zoom img {
    width: 450px;
  }
}
@media (max-width: 960px) {
  figure.zoom img {
    width: 400px;
  }
}
@media (max-width: 890px) {
  figure.zoom img {
    width: 350px;
  }
}
@media (max-width: 885px) {
  figure.zoom img {
    width: 350px;
  }
}
@media (max-width: 725px) {
  figure.zoom img {
    width: 600px;
  }
}
@media (max-width: 700px) {
  figure.zoom img {
    width: 550px;
  }
}
@media (max-width: 680px) {
  figure.zoom img {
    width: 550px;
  }
}
</style>
