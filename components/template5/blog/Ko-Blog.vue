<template>
  <div :style="settingK05Blog">
    <div
      :style="{
        '--font-style': settingK05Blog?.tipo_letra ?? 'Roboto',
      }"
      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
    >
      <div
        class="max-w-7xl mx-auto content-blog-list"
        style="min-height: calc(59vh)"
      >
        <div
          class="flex flex-row justify-between items-center px:10 md:px-30 pb-10"
        >
          <h2
            class="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl"
          >
            Blog
          </h2>

          <div class="flex flex-row justify-end items-center relative">
            <div class="absolute -right-10">
              <search-icon
                class="text-25 ml-5 cursor-pointer text-gray-600 color-icon"
              />
            </div>
            <input
              v-model="filters.title"
              type="search"
              class="block w-full min-w-[250px] border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 border-b border-gray-900"
              :placeholder="$t('header_search')"
              @keyup.enter="updateFilters"
            />
          </div>
        </div>
        <div
          class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none"
        >
          <div v-for="article in listBlogs" :key="article.id">
            <KoBlogCard1 :article="article" :setting-blog="settingK05Blog" />
          </div>
        </div>
        <div
          v-if="listBlogs?.length === 0"
          class="w-full flex flex-col justify-center items-center"
          style="min-height: calc(50vh)"
        >
          <div class="w-full max-w-[180px]">
            <nuxt-link to="/">
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.logo}`
                "
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <p class="text-18 opacity-60 font-bold color-text-empty">
            No se encontraron artículos relacionados
          </p>
        </div>
        <div
          v-if="totalBlogs > filters.limit"
          class="w-full flex items-center justify-center mt-40"
        >
          <el-pagination
            background
            layout="prev, pager, next"
            class="pagination bg-transparent"
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
  name: 'KoBlogIndex5',
  components: {
    KoBlogCard1: () => import('./_blog-card/Ko-card-blog.vue'),
  },
  mixins: [filters],
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingK05Blog: {
      type: Object,
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
  font-family: var(--font-style) !important;
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

.color-icon:hover {
  color: var(--btnhover);
}
</style>
