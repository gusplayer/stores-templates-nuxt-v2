<template>
  <div class="wrapper-swipper" v-if="settingBytemplatePrueba">
    <div
      class="swiper-container"
      v-for="(item, index) in settingBytemplatePrueba"
      :key="index"
    >
      <div class="content-title">
        <p class="title">{{ item.titulo }}</p>
      </div>
      <KoSwipper :products="item.productos"></KoSwipper>
    </div>
  </div>
</template>

<script>
import KoSwipper from './_productofavorito/productSlide'
export default {
  name: 'carrousel',
  components: {
    KoSwipper,
  },
  computed: {
    settingBytemplatePrueba() {
      return this.$store.state.settingBytemplatePrueba.favoritos
    },
  },
}
</script>

<style scoped>
div.wrapper-swipper {
  --background_color_1: #f2f4f7;
}
.wrapper-swipper {
  display: flex;
  width: 100%;
  background-color: var(--background_color_1);
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.swiper-container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  padding: 20px 10px;
}
.content-title {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
}
.title {
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -0.4px;
  color: var(--color_text);
  margin-bottom: 20px;
  margin-top: 10px;
}
@media (max-width: 770px) {
  .swiper-container {
    padding: 20px 8px;
  }
}
@media (max-width: 380px) {
  .swiper-container {
    padding: 20px 5px;
  }
}
</style>
