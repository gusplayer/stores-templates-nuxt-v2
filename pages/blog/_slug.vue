<template>
  <div class="wrapper_error">
    <div class="contenedor">
      <p>{{ this.$route.params.slug }}</p>
      <div v-html="articule.contenido"></div>
      <p>Autor: {{ articule.autor }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-Blog',
  mounted() {
    let filtradoarticule = this.articles.find(
      (element) => element.slug == this.$route.params.slug
    )
    this.articule = filtradoarticule
  },
  data() {
    return {
      articule: {},
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
    },
  },
}
</script>
<style scoped>
.wrapper_error {
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  /* height: calc(100vh - 432px); */
  padding: 60px 20px 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title-error {
  font-size: 30px;
  font-weight: bold;
  color: black;
}
.logokomercia {
  width: 200px;
}
</style>
