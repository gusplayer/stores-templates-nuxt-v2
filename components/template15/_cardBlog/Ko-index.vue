<template>
  <div
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
    style="background-color: var(--background_color_1)"
    :style="[
      settingByTemplate15[0].listBlogHome,
      settingByTemplate15[0].settingGeneral,
      {
        '--font-style-1':
          this.settingByTemplate15[0]?.settingGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <div class="max-w-7xl w-full flex flex-col items-center justify-center">
      <div class="w-full flex flex-row justify-between items-center">
        <p
          class="text-left font-semibold text-30"
          :style="`color: ${settingByTemplate15[0].listBlogHome.color_title_1}; font-weight: ${settingByTemplate15[0].listBlogHome.fontWeighTitle};`"
        >
          {{ settingByTemplate15[0].listBlogHome.title }}
        </p>
        <input
          type="text"
          class="input-search"
          placeholder="Buscar artículos..."
          v-model="search"
        />
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-30">
        <div
          class="w-full h-full mb-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mlg:gap-8 justify-center items-center box-border"
        >
          <div
            v-for="article in filteredList"
            :key="article.id"
            class="w-full h-full"
          >
            <KoBlogCard
              :article="article"
              :cardBlog="settingByTemplate15[0].cardBlog"
              :settingGeneral="settingByTemplate15[0].settingGeneral"
              class="giftLoad w-full h-full"
            />
          </div>
        </div>
        <div
          v-if="filteredList.length == 0"
          class="w-full h-full flex flex-col justify-center items-center text-center"
        >
          <nuxt-link to="/" class="wrapper-logo">
            <img
              v-lazy="
                `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
              "
              width="150"
              class="max-w-[150px] max-h-[150px]"
              alt="Logo Img"
            />
          </nuxt-link>
          <p class="my-15 font-semibold text-20 text-gray-600">
            No se encontraron artículos relacionados
          </p>
        </div>
        <div class="mt-10 product_pagination" v-if="filteredList.length > 12">
          <el-pagination
            background
            layout="prev, pager, next"
            :total="filteredList.length"
            :page-size="12"
            :current-page.sync="currentPage"
            class="text-18 text-black bg-transparent"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko15-Blog',
  components: {
    KoBlogCard: () => import('./blogCard'),
  },
  props: {
    dataStore: Object,
    settingByTemplate15: Array,
  },
  data() {
    return {
      currentPage: 1,
      search: '',
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12
      const final = initial + 12
      return this.filteredList.slice(initial, final)
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter((element) => {
          return element.titulo
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      } else {
        return this.listArticulos
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
.giftLoad {
  max-width: 300px;
}
.input-search {
  box-shadow: inset 0px -48px 0px -43px black;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: black;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: black;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: black;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--btnhover);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--btnhover);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--btnhover);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: black;
  color: white;
}
</style>
