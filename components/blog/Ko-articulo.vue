<template>
  <div class="wrapper-blog">
    <div class="content-blog">
      <div class="content-back" v-if="toggleArrow">
        <arrow-left-icon class="arrow-left" @click="$router.go(-1)">
        </arrow-left-icon>
        <p @click="$router.go(-1)">Regresar</p>
      </div>
      <p class="title-blog">{{ articule.titulo }}</p>

      <div class="content-date">
        <p style="margin-right: 10px;">{{ articule.autor }}</p>
        <p>{{ articule.updated_at }}</p>
      </div>
      <div class="wrapper-articulo" v-html="articule.contenido"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-Blog',
  mounted() {
    this.routePrev()
    this.$store.dispatch('GET_ARTICLES')
    if (this.listArticulos.length) {
      this.searchIdForSlug()
    }
  },
  data() {
    return {
      articule: {},
      toggleArrow: false,
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos
    },
  },
  methods: {
    searchIdForSlug() {
      let domain = this.$route.fullPath
      let result = domain.split('/')
      this.listArticulos.filter((product) => {
        if (product.slug === result[result.length - 1]) {
          this.articule = product
        }
      })
    },
    routePrev() {
      if (this.$route.path == '/') {
        this.toggleArrow = false
      } else {
        this.toggleArrow = true
      }
    },
  },
  watch: {
    listArticulos() {
      this.searchIdForSlug()
    },
  },
}
</script>
<style scoped>
.wrapper-blog {
  display: flex;
  width: 100%;
  background: #efefef;
  justify-content: center;
  align-items: center;
}
.content-blog {
  width: 100%;
  max-width: 1200px;
  padding: 30px 20px 50px 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: content-box;
}
.content-back {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.arrow-left {
  bottom: 2px;
  margin-right: 5px;
  cursor: pointer;
  color: black;
}
.content-back p {
  cursor: pointer;
  color: black;
}
.content-back p:hover,
.arrow-left:hover {
  color: red;
}
.title-blog {
  font-size: 30px;
  font-weight: bold;
  color: black;
}
.content-date {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 40px;
}
.content-date p {
  font-size: 14px;
  color: #3a4557bb;
}
.wrapper-articulo {
  background: white;
  border-radius: 5px;
  padding: 20px;
}
</style>
