<template>
  <div class="content-blog">
    <div class="bannerBlog">
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="separatorCrumb">/</p>
        <p class="txt-crumb s2">
          {{ $t('header_blog') }}
        </p>
      </div>
    </div>
    <div class="content-art-blog">
      <div class="banner-blog">
        <div class="tittle-banner-blog">
          <p class="txt-banner">Últimos blogs</p>
        </div>
        <input
          type="search"
          :placeholder="$t('header_search')"
          v-model="search"
          @keyup.enter="getSearch(search)"
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
                <KoblogCard
                  v-if="article.estado == 1"
                  :article="article"
                ></KoblogCard>
              </div>
            </div>
            <div v-if="filteredList.length == 0" class="content-products-empty">
              <div class="header-content-logo">
                <nuxt-link to="/" class="wrapper-logo">
                  <img
                    :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
                    class="header-logo"
                    alt="Logo Img"
                  />
                </nuxt-link>
              </div>
              <p class="txt-products-empty">{{ $t('home_msgCatalogo') }}</p>
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
import KoblogCard from '../blog_page/_blogcard/ko-blogcard.vue'
export default {
  name: 'Ko-Blog',
  components: {
    KoblogCard,
  },
  props: {
    dataStore: Object,
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
  background: white;
  @apply w-full flex flex-col justify-center items-center;
}
.content-art-blog {
  @apply flex flex-col justify-center items-center;
}
.contenedor {
  @apply w-full flex justify-start items-center mt-30;
}
.content-item-productos {
  @apply w-full flex flex-col justify-center items-center;
}
.grid-products {
  @apply grid gap-4 justify-center items-center mb-40;
  box-sizing: border-box;
}
.pagination-medium {
  margin-top: 10px;
  background: transparent;
}
.pagination {
  font-size: 18px;
  color: var(--color_text);
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: var(--color_text);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: var(--color_text);
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: var(--color_text);
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
  background-color: var(--color_icon);
  color: white;
}
.txt-banner {
  color: #222;
  font-family: 'Poppins' !important ;
  font-weight: 600;
}
.tittle-banner-blog {
  @apply w-full flex flex-col justify-center items-center;
}
.banner-blog {
  @apply w-full flex flex-row justify-center items-start pt-8 z-10;
  /* background-color: #efefef; */
}
#separator {
  margin-left: 20px;
}
.title {
  font-size: 25px;
  font-family: 'Poppins' !important ;
  font-weight: bold;
  color: #2c2930;
  margin-bottom: 20px;
}
.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.separatorCrumb {
  font-size: 9px;
  color: #222;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-crumb {
  font-size: 15px;
  color: #222;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: #eb7025;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #eb7025;
  transition: all 0.25s ease;
}
.input-text {
  @apply mt-8;
}

@screen sm {
  .bannerBlog {
    @apply hidden;
  }
  .content-art-blog {
    margin-top: 140px;
    @apply w-9/0;
  }
  .tittle-banner-blog {
    @apply flex justify-between items-start;
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
  #separator {
    margin-left: 10px;
  }
  .title {
    @apply hidden;
  }
  .crumb {
    @apply justify-center items-center;
  }
}
@screen md {
  .grid-products {
    @apply grid-cols-2 justify-start items-start;
  }
  .bannerBlog {
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-30;
  }
  #separator {
    margin-left: 10px;
  }
}
@screen lg {
  .grid-products {
    @apply grid-cols-3 gap-4;
  }
}
@screen mlg {
  .content-art-blog {
    margin-top: 0px;
  }
  .grid-products {
    @apply w-full gap-8;
  }
  #separator {
    margin-left: 20px;
  }
}
@media (min-width: 1400px) {
  .content-art-blog {
    @apply w-full;
    max-width: 1400px;
  }
}
</style>
