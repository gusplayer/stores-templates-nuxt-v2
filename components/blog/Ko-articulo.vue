<template>
  <div class="wrapper-blog">
    <div class="content-blog">
      <div class="content-back" v-if="toggleArrow">
        <arrow-left-icon class="arrow-left" @click="$router.go(-1)">
        </arrow-left-icon>
        <p @click="$router.go(-1)">Regresar</p>
      </div>
      <p class="title-blog">{{ dataArticle.titulo }}</p>

      <div class="content-date">
        <div class="flex-shrink-0">
          <a href="#">
            <img
              class="h-10 w-10 rounded-full"
              src="https://api2.komercia.co/users/user.jpg"
              alt=""
            />
          </a>
        </div>
        <div class="content-date-items">
          <p>{{ dataArticle.autor }}</p>
          <p>{{ this.shippingCreated }}</p>
        </div>
      </div>
      <div class="wrapper-articulo" v-html="dataArticle.contenido"></div>
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
    if (this.dataArticle && this.dataArticle.created_at) {
      let dateCreated = this.dataArticle.created_at
      let resultCreated = dateCreated.split(' ')
      this.shippingCreated = resultCreated[0]
      let dateUpdate = this.dataArticle.updated_at
      let resultUpdate = dateUpdate.split(' ')
      this.shippingUpdated = resultUpdate[0]
    }
  },
  data() {
    return {
      dataArticle: {},
      toggleArrow: false,
      shippingCreated: '',
      shippingUpdated: '',
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
          this.dataArticle = product
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
  min-height: calc(64vh);
  background: #efefef;
  justify-content: center;
  align-items: center;
}
.content-blog {
  width: 100%;
  max-width: 1200px;
  padding: 30px 20px 50px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
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
.title-blog {
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
}
.content-date {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.content-date-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.content-date-items p {
  font-size: 14px;
  color: #3a4557bb;
}
.content-date-items p:nth-child(1) {
  font-weight: bold;
}
.wrapper-articulo {
  background: white;
  border-radius: 5px;
  padding: 15px;
}
</style>
