<template>
  <div
    class="content-blog"
    :style="[
      settingByTemplate13[0].setting13General,
      {
        '--font-style-1':
          this.settingByTemplate13[0].setting13General &&
          this.settingByTemplate13[0].setting13General.fount_1
            ? this.settingByTemplate13[0].setting13General.fount_1
            : 'Poppins',
      },
    ]"
  >
    <div class="content-art-blog">
      <div class="banner-blog">
        <div class="tittle-banner-blog">
          <p class="txt-banner">Últimos blogs</p>
        </div>
        <input
          type="text"
          class="input-search"
          placeholder="Buscar artículos..."
          v-model="search"
        />
      </div>
      <div class="contenedor">
        <div class="content-item w-full">
          <div class="content-item-productos">
            <div class="grid-products">
              <div
                v-for="article in filteredList"
                :key="article.id"
                class="content-products"
              >
                <KoBlogCard
                  v-if="article.estado == 1"
                  :article="article"
                  class="h-full"
                />
              </div>
            </div>
            <div v-if="filteredList.length == 0" class="content-products-empty">
              <div class="header-content-logo">
                <nuxt-link to="/" class="wrapper-logo">
                  <img
                    v-lazy="
                      `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
                    "
                    class="header-logo"
                    alt="Logo Img"
                  />
                </nuxt-link>
              </div>
              <p class="txt-products-empty">
                No se encontraron artículos relacionados
              </p>
            </div>
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
  </div>
</template>
<script>
import KoBlogCard from './blogcard.vue'
export default {
  name: 'Ko13-Blog',
  components: {
    KoBlogCard,
  },
  props: {
    dataStore: Object,
    settingByTemplate13: Array,
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
.content-blog {
  background: #ffffff;
  @apply w-full flex flex-col justify-center items-center mt-20;
}
.content-art-blog {
  @apply flex flex-col justify-center items-center z-0;
}
.contenedor {
  @apply w-full flex flex-col justify-center items-center mt-30;
}
.content-item-productos {
  @apply w-full flex flex-col justify-center items-center;
}
.grid-products {
  @apply grid gap-4 justify-center items-center mb-40;
  box-sizing: border-box;
}
.pagination-medium {
  background: transparent;
  @apply mt-10;
}
.pagination {
  font-size: 18px;
  color: black;
  background: transparent;
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
.txt-banner {
  color: black;
  font-family: var(--font-style-1) !important;
  @apply font-semibold;
}
.banner-blog {
  @apply w-full flex flex-row justify-between items-center;
}
.tittle-banner-blog {
  @apply w-full flex justify-start items-center;
}
.input-search {
  box-shadow: inset 0px -48px 0px -43px black;
}
.content-products-empty {
  @apply w-full h-full flex flex-col justify-center items-center text-center;
}
@screen sm {
  .content-art-blog {
    @apply w-9/0;
  }
  .grid-products {
    @apply w-full grid-cols-1 gap-8;
  }
  .content-products {
    @apply transition-all ease-in duration-0.2;
  }
  .content-products:hover {
    @apply w-full transition-all ease-in duration-0.2;
    -webkit-box-shadow: 0px 6px 15px 6px #bfbfbf;
    box-shadow: 0px 6px 15px 6px #bfbfbf;
  }
  .txt-banner {
    font-size: 30px;
  }
}
@screen md {
  .grid-products {
    @apply grid-cols-2 justify-start items-start;
  }
}
@screen lg {
  .grid-products {
    @apply grid-cols-3 gap-4;
  }
}
@screen mlg {
  .grid-products {
    @apply w-full gap-8;
  }
}
@media (min-width: 1200px) {
  .content-art-blog {
    max-width: 1300px;
    @apply w-full;
  }
}
</style>
