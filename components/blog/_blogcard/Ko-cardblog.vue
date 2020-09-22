<template>
  <div class="wrapper-card anim" :style="settingByTemplate">
    <div class="container">
      <img :src="this.article.photo" alt="blog" />
      <p>{{ this.article.titulo }}</p>
      <p>{{ this.article.autor }}</p>
      <p>{{ this.article.fecha_creacion }}</p>
      <router-link :to="{ path: `/blog/` + article.slug }" class="btn"
        >Ver más</router-link
      >
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductCard-1',
  props: { article: Object },
  mounted() {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {},
}
</script>

<style scoped>
.wrapper-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: white;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: rgb(187, 187, 187) 0 1px 1px;
}
.anim {
  transition: all 0.2s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
</style>
