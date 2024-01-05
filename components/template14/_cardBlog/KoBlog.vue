<template>
  <div
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
    :style="[
      settingByTemplate14[0].settingGeneral,
      {
        '--font-style-1':
          settingByTemplate14[0]?.settingGeneral?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <div class="max-w-7xl w-full flex flex-col items-center justify-center">
      <div class="w-full flex flex-row justify-between items-center">
        <p class="text-left font-semibold text-black text-30">Últimos blogs</p>
        <input
          v-model="filters.title"
          class="input-search"
          type="search"
          :placeholder="$t('header_search')"
          @keyup.enter="updateFilters"
        />
      </div>
      <div class="w-full flex flex-col justify-center items-center mt-30">
        <div
          class="w-full h-full mb-40 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mlg:gap-8 justify-center items-center box-border"
        >
          <div
            v-for="article in listBlogs"
            :key="article.id"
            class="w-full h-full"
          >
            <KoBlogCard
              :article="article"
              :card-blog="settingByTemplate14[0].cardBlog"
              :setting-general="settingByTemplate14[0].settingGeneral"
              class="giftLoad w-full h-full"
            />
          </div>
        </div>
        <div
          v-if="listBlogs?.length === 0"
          class="w-full h-full flex flex-col justify-center items-center text-center"
        >
          <nuxt-link to="/" class="wrapper-logo">
            <img
              v-lazy="
                `${this.$store.state.urlKomercia}/logos/${dataStore.logo}`
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
        <div v-if="totalBlogs > filters.limit" class="mt-10 product_pagination">
          <el-pagination
            background
            layout="prev, pager, next"
            class="text-18 text-black bg-transparent"
            :total="totalBlogs"
            :page-size="filters.limit"
            :current-page.sync="filters.page"
            @current-change="changePage"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import filters from '@/mixins/filterBlogs'
export default {
  name: 'Ko14Blog',
  components: {
    KoBlogCard: () => import('./Ko_BlogCard.vue'),
  },
  mixins: [filters],
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate14: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState(['stateListBLogs']),
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
