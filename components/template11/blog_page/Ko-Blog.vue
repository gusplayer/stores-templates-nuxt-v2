<template>
  <div
    class="content-blog"
    :style="[
      settingByTemplate11[0].blog,
      settingByTemplate11[0].setting11General,
      {
        '--font-style-1':
          this.settingByTemplate11[0].setting11General &&
          this.settingByTemplate11[0].setting11General.fount_1
            ? this.settingByTemplate11[0].setting11General.fount_1
            : 'Roboto',
      },
    ]"
  >
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
                  :settingKblog="settingByTemplate11[0].blog"
                ></KoblogCard>
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
import KoblogCard from '../../../components/template11/_blog/blogcard.vue'
export default {
  name: 'Ko-Blog',
  components: {
    KoblogCard,
  },
  props: {
    dataStore: Object,
    settingByTemplate11: Array,
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
  background: var(--background_color_1);
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
  color: var(--color_title);
  font-family: var(--font-style-1) !important;
  @apply font-semibold;
}
.tittle-banner-blog {
  @apply w-full flex flex-col justify-center items-center;
}
.banner-blog {
  @apply w-full flex flex-col justify-center items-start pt-8 z-10;
}
.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.separatorCrumb {
  font-size: 9px;
  color: #222;
  font-family: var(--font-style-1) !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-crumb {
  font-size: 15px;
  color: var(--color_title);
  font-family: var(--font-style-1) !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: var(--color_title);
  transition: all 0.25s ease;
}
.s2:hover {
  color: var(--color_title);
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
  .crumb {
    @apply justify-center items-center;
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
@media (min-width: 1025px) {
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
}
@media (min-width: 1200px) {
  .content-art-blog {
    @apply w-full;
    max-width: 1200px;
  }
}
</style>
