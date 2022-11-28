<template>
  <div
    class="wrapper_blog"
    :style="[settingByTemplate9[0].blog, settingByTemplate9[0].settingGeneral]"
  >
    <div
      class="banner-blog"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate9[0].settingGeneral &&
            this.settingByTemplate9[0].settingGeneral.fount_1
              ? this.settingByTemplate9[0].settingGeneral.fount_1
              : 'Poppins',
        },
      ]"
    >
      <div class="crumb">
        <nuxt-link to="/">
          <p
            class="txt-crumb s1"
            :style="`color: ${settingByTemplate9[0].blog.breadcrumbs};`"
          >
            Home
          </p>
        </nuxt-link>
        <p
          class="txt-crumb"
          :style="`color: ${settingByTemplate9[0].blog.breadcrumbs};`"
        >
          /
        </p>
        <p
          class="txt-crumb s2"
          :style="`color: ${settingByTemplate9[0].blog.breadcrumbs};`"
        >
          Blog
        </p>
      </div>
      <div class="tittle-banner-blog">
        <p class="txt-banner">{{ $t('header_blog') }}</p>
      </div>
    </div>
    <div
      class="contenedor"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate9[0].settingGeneral &&
            this.settingByTemplate9[0].settingGeneral.fount_1
              ? this.settingByTemplate9[0].settingGeneral.fount_1
              : 'Poppins',
        },
      ]"
    >
      <div class="content-search-blog">
        <div class="text-search">
          <p class="title">Buscar Articulo</p>
        </div>
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
      </div>
      <div class="content-item w-full">
        <div class="content-item-productos">
          <div class="grid-products">
            <div
              v-for="article in filteredList"
              :key="article.id"
              class="content-products"
            >
              <KoblogCard
                :article="article"
                :blog="settingByTemplate9[0].blog"
                :settingGeneral="settingByTemplate9[0].settingGeneral"
                style="max-height: 560px"
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
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KoblogCard from '../../../components/template9/_blog/blogcard'
export default {
  name: 'Ko-Blog',
  components: {
    KoblogCard,
  },
  props: {
    dataStore: Object,
    settingByTemplate9: Array,
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
.wrapper_blog {
  display: flex;
  flex-direction: column;
  width: 100%;
  background: var(--background_color_1);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-bottom: 40px;
  padding-top: 20px;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 40px;
}
.content-item-productos {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.grid-products {
  @apply grid gap-4 justify-center items-center;
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
  color: var(--color_title);
  /* font-family: 'Poppins' !important ; */
  font-family: var(--font-style-1) !important ;
  font-weight: 700;
}
.tittle-banner-blog {
  @apply w-full flex flex-col justify-center items-center;
}
.banner-blog {
  padding-top: 20px;
  @apply w-full flex flex-col justify-center items-start pt-8;
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
  /* font-family: 'Poppins' !important ; */
  font-weight: bold;
  color: #2c2930;
  margin-bottom: 20px;
  font-family: var(--font-style-1) !important ;
}
.content-search-blog {
  border-bottom: 1px solid gray;
  margin-bottom: 30px;
  height: 30px;
  @apply flex flex-row  items-center;
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
  /* font-family: 'Poppins' !important ; */
  font-family: var(--font-style-1) !important ;
}
.input-text:focus {
  border: none;
}
.empty-space {
  @apply mx-2;
}

.crumb {
  @apply w-full flex flex-row justify-start items-start mt-4;
}
.txt-crumb {
  font-family: Arial, sans-serif;
  font-size: 12px;
  /* color: #b3b3b3; */
  line-height: 14px;
  padding: 2px 4px;
  cursor: pointer;
  transition: all 0.25s ease;
  font-family: var(--font-style-1) !important ;
}
.s1:hover {
  background-color: #2c2930;
  color: #fff;
  transition: all 0.25s ease;
}
.s2:hover {
  background-color: #2c2930;
  color: #fff;
  transition: all 0.25s ease;
}

@screen sm {
  .content-products {
    @apply w-full;
    -webkit-box-shadow: 0px 6px 15px 6px #bfbfbf;
    box-shadow: 0px 6px 15px 6px #bfbfbf;
  }
  .txt-banner {
    font-size: 36px;
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
    @apply w-9/5 grid-cols-2;
  }
  .txt-banner {
    font-size: 36px;
  }
  #separator {
    margin-left: 10px;
  }
  .content-search-blog {
    @apply w-7/0 justify-center;
  }
  .input-text {
    width: 0px;
    padding: 0px;
  }
  .title {
    @apply flex;
  }
  .empty-space {
    @apply flex;
  }
}
@screen lg {
  .grid-products {
    @apply w-9/5 grid-cols-3;
  }
  /* .content-search-blog {
    @apply w-6/0;
  } */
}
@media (max-width: 768px) {
  .grid-products {
    @apply w-9/0 grid-cols-2;
  }
}
@media (max-width: 600px) {
  .grid-products {
    @apply w-9/0 grid-cols-1;
  }
}
@media (min-width: 1025px) {
  .content-search-blog {
    @apply hidden;
  }
  .crumb {
    @apply justify-start items-start;
    padding-left: 40px;
  }
  .tittle-banner-blog {
    @apply justify-start items-start;
    padding-left: 40px;
  }
}
@screen mlg {
  .grid-products {
    @apply w-9/6 gap-8;
  }
  .tittle-banner-blog {
    @apply w-auto flex flex-row justify-center items-center;
  }
  .txt-banner {
    font-size: 48px;
  }
  #separator {
    margin-left: 20px;
  }
  .content-search-blog {
    @apply w-6/0;
  }
}
</style>
