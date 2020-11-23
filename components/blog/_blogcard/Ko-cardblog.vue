<template>
  <div class="wrapper-card anim">
    <router-link :to="{ path: `/blog/` + article.slug }" class="container">
      <div class="wrapper-image">
        <img
          v-lazy-load
          :data-src="this.article.photo"
          class="product-image"
          alt="blog"
        />
      </div>
      <!-- <div class="wrapper-image">
        <img :src="idCloudinary(this.article.photo, 600, 600)" class="product-image" alt="blog" />
      </div> -->
      <div class="wrapper-item-text">
        <p class="title">{{ this.article.titulo }}</p>
        <p class="subtext">{{ `${this.article.resumen.slice(0, 200)}...` }}</p>
        <div class="content-date">
          <p>Autor: {{ this.article.autor }}</p>
          <p>{{ this.article.fecha_creacion }}</p>
        </div>
      </div>
    </router-link>
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
}
.anim {
  transition: all 200ms ease-in;
}
.wrapper-card:focus,
.wrapper-card:hover {
  transition: all 200ms ease-in;
  position: relative;
  top: -3px;
  -webkit-box-shadow: 5px 5px 22px 1px rgba(131, 131, 131, 0.52);
  box-shadow: 5px 5px 22px 1px rgba(131, 131, 131, 0.52);
}
.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 5px;
  overflow: hidden;
}
.wrapper-image {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  max-height: 250px;
}
.product-image {
  height: 250px;
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.wrapper-item-text {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 10px;
  height: 250px;
}
.title {
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  text-align: left;
  color: black;
  letter-spacing: 0.5px;
  line-height: 23px;
}
.subtext {
  margin-top: 10px;
  width: 100%;
  font-size: 15px;
  text-align: justify;
  color: rgb(73, 70, 70);
  letter-spacing: 0.5px;
  line-height: 23px;
}
.content-date {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.content-date p {
  width: 100%;
  font-size: 14px;
  text-align: justify;
  color: #3a4557bb;
}
@media (max-width: 965px) {
  .wrapper-item-text {
    height: 350px;
  }
}
@media (max-width: 768px) {
  .wrapper-item-text {
    height: 270px;
  }
}
@media (max-width: 660px) {
  .wrapper-item-text {
    height: 320px;
  }
}
@media (max-width: 585px) {
  .wrapper-item-text {
    height: 200px;
  }
}
@media (max-width: 490px) {
  .wrapper-item-text {
    height: 250px;
  }
}
@media (max-width: 390px) {
  .wrapper-item-text {
    height: 270px;
  }
}
</style>
