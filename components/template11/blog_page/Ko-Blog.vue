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
      </div>
      <div class="contenedor">
        <!-- <div class="content-search-blog">
          <div class="empty-space"></div>
          <div class="content-tittle">
            <div class="input-animated">
              <input
                type="text"
                v-model="search"
                class="input-text"
                placeholder="¿Que deseas buscar?"
              />
              <span class="search-icon">
                <svg
                  class="search-header"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="20px"
                  height="20px"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </span>
            </div>
          </div>
        </div> -->
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
            <div
              v-if="(filteredList.length == 0)"
              class="content-products-empty"
            >
              <div class="header-content-logo">
                <nuxt-link to="/" class="wrapper-logo">
                  <img
                    :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
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
import KoblogCard from '../../../components/template11/blog_page/_blogcard/ko-blogcard'
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
  font-family: 'Roboto', serif !important ;
  @apply font-semibold;
}
.tittle-banner-blog {
  @apply w-full flex flex-col justify-center items-center;
}
.banner-blog {
  @apply w-full flex flex-col justify-center items-start pt-8 z-10;
  /* background-color: #efefef; */
}
#separator {
  margin-left: 20px;
}
.content-tittle {
  background: white;
  @apply w-auto flex justify-end items-end rounded-5;
}
.title {
  font-size: 25px;
  color: #2c2930;
  font-family: 'Roboto', serif !important ;
  @apply font-bold mb-20;
}
.content-search-blog {
  border-bottom: 1px solid gray;
  @apply h-30 flex flex-row items-center mb-30;
}
.input-animated {
  /* transform: translate(-0%, -50%);
  margin-bottom: -20px; */
  background: white;
  border-color: #303030;
  @apply flex flex-row justify-center items-center rounded-50 border-2;

  /* -webkit-box-shadow: 0px 5px 12px 5px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 5px 12px 5px rgba(0, 0, 0, 0.2); */
}
.input-animated:hover > .input-text {
  width: 240px;
  padding: 0 15px;
  color: #303030;
  font-size: 16px;
}
.input-text:focus {
  width: 240px;
  padding: 0 15px;
  color: #303030;
  font-size: 16px;
}

.input-animated:hover > .search-icon {
  background: #fff;
  cursor: pointer;
  color: #000;
}
.search-icon {
  color: #303030;
  transition: 0.4s;
  border-radius: 50%;
  @apply w-40 h-40 flex justify-center items-center;
}
.input-text {
  background: none;
  color: #303030;
  font-size: 0px;
  transition: 0.4s;
  font-family: 'Roboto', serif !important ;
  @apply w-0 border-none outline-none;
}
.input-text:focus {
  border: none;
}
.empty-space {
  @apply mx-2;
}

.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.separatorCrumb {
  font-size: 9px;
  color: #222;
  font-family: 'Roboto', sans-serif !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-crumb {
  font-size: 15px;
  color: #222;
  font-family: 'Roboto', sans-serif !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: #000;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #000;
  transition: all 0.25s ease;
}

@screen sm {
  .bannerBlog {
    max-width: 1200px;
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20 border-b;
  }
  .content-art-blog {
    @apply w-9/0;
  }
  .tittle-banner-blog {
    @apply justify-start items-start mt-20;
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
  .content-search-blog {
    @apply w-9/0 justify-center flex;
  }
  .input-text {
    width: 240px;
    color: #303030;
    padding: 0 15px;
    font-size: 16px;
  }
  .title {
    @apply hidden;
  }
  .empty-space {
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

  #separator {
    margin-left: 10px;
  }
  .content-search-blog {
    @apply w-7/0 justify-center;
  }
  .empty-space {
    @apply flex;
  }
}
@screen lg {
  .grid-products {
    @apply grid-cols-3 gap-4;
  }
}
@media (min-width: 1025px) {
  .content-search-blog {
    @apply hidden;
  }
  .tittle-banner-blog {
    @apply justify-start items-start;
  }
}
@screen mlg {
  .content-art-blog {
  }
  .grid-products {
    @apply w-full gap-8;
  }
  .tittle-banner-blog {
    @apply w-auto flex flex-row justify-center items-center;
  }

  #separator {
    margin-left: 20px;
  }
  .content-search-blog {
    @apply w-6/0;
  }
}
@media (min-width: 1200px) {
  .content-art-blog {
    @apply w-full;
    max-width: 1200px;
  }
}
</style>
