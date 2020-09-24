<template>
  <div class="wrapper_error">
    <div class="contenedor">
      <div>
        <p class="title-error">Blog</p>
      </div>
      <div class="content-item">
        <div class="content-item-productos">
          <div class="grid-products">
            <div
              v-for="article in filterArticles"
              :key="article.id"
              class="content-products"
            >
              <KoProductCard1 :article="article"></KoProductCard1>
            </div>
          </div>
          <div v-if="(articles.length == 0)" class="content-products-empty">
            <p>No se encontraron artículos.</p>
          </div>
          <div class="pagination-medium">
            <div class="product_pagination" v-if="articles.length > 12">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="articles.length"
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
  data() {
    return {
      currentPage: 1,
    }
  },
  computed: {
    articles() {
      return this.$store.state.articles
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12
      const final = initial + 12
      return this.articles.slice(initial, final)
    },
  },
}
</script>
<style scoped>
.wrapper_error {
  display: flex;
  width: 100%;
  background: #efefef;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  /* height: calc(100vh - 432px); */
  padding: 20px 20px 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title-error {
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-bottom: 30px;
}
.content-item-productos {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.grid-products {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 2fr));
  grid-column-gap: 25px;
  grid-row-gap: 30px;
  box-sizing: border-box;
}
.content-products-empty {
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content-products-empty p {
  font-size: 18px;
  opacity: 0.6;
  font-weight: bold;
  color: var(--color_subtext);
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
@media (max-width: 800px) {
  .grid-products {
    grid-column-gap: 15px;
  }
}

@media (max-width: 770px) {
  .container {
    padding: 0px;
  }
  .content-item-productos {
    padding: 15px;
  }
  .title {
    font-size: 25px;
    margin-top: 20px;
  }
  .grid-products {
    grid-template-columns: repeat(2, minmax(10px, 2fr));
    grid-row-gap: 15px;
    grid-column-gap: 20px;
  }
  .dropbtn {
    margin-left: 5px;
  }
  .text-categorias {
    padding: 0 10px;
  }
  .content-title {
    padding: 0px 15px;
  }
}
@media (max-width: 585px) {
  .grid-products {
    grid-template-columns: repeat(1, minmax(10px, 2fr));
  }
  .content-item-productos {
    padding: 5px;
  }
}
</style>
