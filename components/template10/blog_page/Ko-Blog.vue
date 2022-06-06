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
  @apply w-full flex flex-col justify-center items-start pt-8 z-10;
  /* background-color: #efefef; */
}
#separator {
  margin-left: 20px;
}
.content-tittle {
  width: auto;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  border-radius: 5px;
  background: white;
}
.title {
  font-size: 25px;
  font-family: 'Poppins' !important ;
  font-weight: bold;
  color: #2c2930;
  margin-bottom: 20px;
}
.content-search-blog {
  @apply flex flex-row  items-center;
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
  height: 30px;
}
.input-animated {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transform: translate(-0%, -50%);
  margin-bottom: -20px;
  border-radius: 50px;
  background: white;
  border: 2px solid #303030;

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
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  border-radius: 50%;
}
.input-text {
  border: none;
  background: none;
  outline: none;
  color: #303030;
  font-size: 0px;
  transition: 0.4s;
  width: 0px;
  font-family: 'Poppins' !important ;
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

@screen sm {
  .bannerBlog {
    @apply hidden;
  }
  .content-art-blog {
    margin-top: 140px;
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
  .bannerBlog {
    height: 220px;
    background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/v1614233821/Temp10/Productos/bg-beagrumb_gxvk1i.jpg');
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center;
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
    margin-top: 0px;
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
@media (min-width: 1400px) {
  .content-art-blog {
    @apply w-full;
    max-width: 1400px;
  }
}
</style>
