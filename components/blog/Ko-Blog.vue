<template>
  <div :style="settingK05Blog">
    <div
      :style="{
        '--font-style':
          this.settingK05Blog && this.settingK05Blog.tipo_letra
            ? this.settingK05Blog.tipo_letra
            : 'Roboto',
      }"
      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div class="max-w-7xl mx-auto content-blog-list">
        <div class="padding flex flex-row justify-between items-center">
          <h2
            class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
          >
            Blog
          </h2>
          <div class="prueba">
            <div class="search">
              <form id="demo-2" style="position: relative">
                <search-icon class="icon-s" @click="focusInput" />
                <input
                  type="search"
                  :placeholder="$t('header_search')"
                  v-model="search"
                  @keyup.enter="getSearch(search)"
                  id="SearchHeader"
                />
              </form>
            </div>
          </div>
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div v-for="article in filteredList" :key="article.id">
            <KoProductCard1
              v-if="article.estado == 1"
              :article="article"
            ></KoProductCard1>
          </div>
        </div>
        <div v-if="filteredList.length == 0" class="content-products-empty">
          <div class="wrapper_logo">
            <nuxt-link to="/">
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
                "
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
        <div class="w-full flex items-center justify-center">
          <div class="pagination-medium">
            <div class="product_pagination" v-if="filteredList.length > 12">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="filteredList.length"
                :page-size="12"
                :current-page.sync="currentPage"
                class="pagination"
              ></el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KoProductCard1 from './_blogcard/Ko-cardblog'
export default {
  name: 'Ko-Blog',
  components: {
    KoProductCard1,
  },
  props: {
    dataStore: Object,
    settingK05Blog: Object,
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
  methods: {
    focusInput() {
      document.getElementById('SearchHeader').focus()
    },
  },
}
</script>
<style scoped>
.padding {
  padding: 0 30px 10px;
}
.pagination-medium {
  margin-top: 20px;
  background: transparent;
}
.pagination {
  font-size: 18px;
  color: var(--color_text);
  background: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-next {
  color: var(--color_text);
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-prev {
  color: var(--color_text);
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .el-pager li {
  color: var(--color_text);
  background-color: transparent;
}
.pagination-medium >>> .el-pagination.is-background .btn-next:hover {
  color: var(--btnhover);
}
.pagination-medium >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--btnhover);
}
.pagination-medium
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--btnhover);
}
.pagination-medium
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--color_icon);
  color: white;
}
.content-products-empty {
  width: 100%;
  min-height: calc(50vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content-blog-list {
  min-height: calc(59vh);
}
.content-products-empty p {
  font-size: 18px;
  opacity: 0.6;
  font-weight: bold;
  color: var(--color_subtext);
}
.wrapper_logo {
  max-width: 200px;
}
.icon-s {
  font-size: 25px;
  color: black;
  position: absolute;
  top: 3px;
  left: 5px;
  cursor: pointer;
}
.icon-s:hover {
  color: var(--btnhover);
}
input[type='search'] {
  border: solid 2px black;
}
input[type='search']:focus {
  background-color: #fff;
  border-color: var(--btnhover);
}
input:-moz-placeholder {
  color: black;
}
input::-webkit-input-placeholder {
  color: black;
}
#demo-2 input[type='search'] {
  width: 35px;
  height: 35px;
  padding-left: 10px;
  color: transparent;
  cursor: pointer;
  box-sizing: border-box;
}
#demo-2 input[type='search']:hover {
  background-color: #fff;
}
#demo-2 input[type='search']:focus {
  width: 200px;
  padding-left: 32px;
  color: black;
  background-color: #fff;
  cursor: auto;
}
#demo-2 input:-moz-placeholder {
  color: transparent;
}
#demo-2 input::-webkit-input-placeholder {
  color: transparent;
}
</style>
