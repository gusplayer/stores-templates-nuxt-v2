<template>
  <transition name="fade">
    <div v-if="openMenuLeft" class="order" @click="closeOrder">
      <div class="order_content">
        <div class="order_header">
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo">
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.logo}`
                "
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <div class="close-container" @click="closed">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <div class="content-lateral-menu">
          <div class="content-Categorys">
            <div class="wrapper-category-all">
              <li @click="clearFilters">
                <p class="btn-category-all">
                  {{ $t('header_buscar_limpiar') }}
                </p>
              </li>
              <div v-for="category in categorias" :key="category.id">
                <BaseAccordion>
                  <template v-slot:categorias>
                    <li
                      class="btn-category"
                      :class="
                        category.id == categorySelect
                          ? 'text-categoria-active'
                          : ''
                      "
                      @click="setToQueryFilter('category', category)"
                    >
                      {{ category.nombreCategoriaProducto }}
                    </li>
                  </template>
                  <template v-slot:subcategorias>
                    <div v-for="(subcategory, key) in subcategories" :key="key">
                      <li
                        v-if="subcategory.categoria == category.id"
                        class="btn-category"
                        :class="
                          subcategory.id == subCategorySelect
                            ? 'text-subcategoria-active'
                            : ''
                        "
                        @click="setToQueryFilter('subcategories', subcategory)"
                      >
                        <p class="txt-sub-li">
                          {{ subcategory.nombreSubcategoria }}
                        </p>
                      </li>
                    </div>
                  </template>
                </BaseAccordion>
              </div>
              <div
                v-for="(itemsTags, index) in allTags"
                v-show="allTags?.length > 0"
                :key="index"
              >
                <BaseAccordion
                  v-if="
                    itemsTags &&
                    itemsTags.status === 1 &&
                    itemsTags.tagProperties.length > 0 &&
                    itemsTags.visible === 1
                  "
                >
                  <template v-slot:categorias>
                    <li class="btn-category">
                      {{ itemsTags.name }}
                    </li>
                  </template>
                  <template v-slot:subcategorias>
                    <div
                      v-for="itemsProperties in itemsTags.tagProperties"
                      v-show="itemsProperties.status === 1"
                      :key="itemsProperties.id"
                    >
                      <li
                        class="btn-category"
                        :class="
                          itemsProperties.name == tagSelect
                            ? 'text-subcategoria-active'
                            : ''
                        "
                        @click="setToQueryFilter('tag', itemsProperties)"
                      >
                        <p class="txt-sub-li" @click="closed">
                          {{ itemsProperties.name }}
                        </p>
                      </li>
                    </div>
                  </template>
                </BaseAccordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoMenuLeftWapi',
  components: {
    BaseAccordion: () => import('../_BaseAccordion.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      categorySelect: '',
      subCategorySelect: '',
      tagSelect: '',
      query: {
        page: 1,
        category: null,
        subcategory: null,
        tag: null,
      },
    }
  },
  computed: {
    ...mapState(['categorias']),
    ...mapState({
      openMenuLeft: (state) => state.openMenuLateralLeft,
      subcategories: (state) => state.subcategorias,
    }),
    allTags() {
      return this.dataStore.tags
    },
  },
  methods: {
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_LEFT', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order ' ||
        element === 'leftright' ||
        element === 'rightleft'
      ) {
        this.closed()
      }
    },
    setToQueryFilter(type, value) {
      if (type === 'category') {
        this.query.subcategory = null
        this.subCategorySelect = null
        this.query.tag = null
        this.query.category = value.nombreCategoriaProducto || null
        this.categorySelect = value.id
        this.$store.commit(
          'products/SET_CATEGORY_PRODUCTO',
          value.nombreCategoriaProducto
        )
        this.$store.commit('products/SET_SUBCATEGORY_PRODUCTO', null)
        this.closed()
      } else if (type === 'subcategories') {
        this.categorias.filter((item) => {
          if (item.id === value.categoria) {
            this.query.category = item.nombreCategoriaProducto
          }
        })
        this.$store.commit(
          'products/SET_CATEGORY_PRODUCTO',
          this.query.category
        )
        this.$store.commit(
          'products/SET_SUBCATEGORY_PRODUCTO',
          value.nombreSubcategoria || null
        )
        this.query.subcategory = value.id || null
        this.subCategorySelect = value.id
        this.closed()
      } else {
        this.query.tag = value.id || null
        this.closed()
      }

      this.closed()
      this.$store.commit('SET_STATE_BANNER', false)
      this.setInformationFromQuery(this.query)
    },
    async setInformationFromQuery({ page, category, subcategory, tag }) {
      const query = {}

      if (page !== null && page !== undefined) query.page = page
      if (category !== null) query.category = category
      if (subcategory !== null) query.subcategory = subcategory
      if (tag !== null) query.tag = tag

      try {
        await this.$router.push({
          path: `/wa/${this.dataStore.id}`,
          query,
        })
      } catch (error) {
        console.error('Error navigating:', error)
      }
    },
    clearFilters() {
      this.query = {
        page: 1,
        category: null,
        subcategory: null,
        tag: null,
      }
      this.categorySelect = ''
      this.subCategorySelect = ''
      this.$router.push({
        path: `/wa/${this.dataStore.id}`,
        query: '',
      })
      this.$store.commit('products/SET_CATEGORY_PRODUCTO', null)
      this.$store.commit('products/SET_SUBCATEGORY_PRODUCTO', null)
      this.$store.commit('products/SET_TAG_PRODUCT', null)
      this.$store.commit('SET_STATE_BANNER', true)
      this.closed()
    },
  },
}
</script>

<style scoped>
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 99999;
  transition: all 0.25s ease;
}
.order_content {
  position: absolute;
  left: 0px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    left: -300px;
  }
  100% {
    left: 0px;
  }
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
  list-style: none;
}
.order_header {
  height: 80px;
  max-height: 80px;
  @apply relative flex flex-row justify-between items-center px-10;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  max-height: 60px;
  object-fit: contain;
  object-position: left;
}
.wrapper-category-all {
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-x: auto;
}
.text-categoria {
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: #2c2930;
}
.text-subcategoria {
  margin-left: 3px;
  margin-bottom: 5px;
  width: 100%;
  font-size: 15px;
  color: #2c2930;
}
.text-categoria-active {
  color: #2c2930;
}
.text-subcategoria-active {
  color: #2c2930;
}
.close-container {
  right: 30px;
  max-width: 50px;
  @apply absolute h-50 cursor-pointer flex justify-center items-center z-10;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.close-container:hover .leftright {
  @apply transform rotate-0 bg-black;
}
.close-container:hover .rightleft {
  @apply transform rotate-0 bg-black;
}
.leftright,
.rightleft {
  background-color: #2c2930;
}
.content-lateral-menu {
  @apply w-full flex flex-col justify-center items-center;
}
.content-btns-lateral-menu {
  @apply w-full flex flex-row justify-center items-center;
}
.btn-lateral-menu-right:focus .conten-Menu {
  @apply hidden;
}
.btn-lateral-menu-left {
  padding: 18px 15px;
  max-width: 50%;
  width: 50%;
  color: #2c2930;
  text-align: center;
  letter-spacing: 0px;
  font-weight: 600;
  /* text-transform: capitalize; */
  font-size: 14px;
  cursor: pointer;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 3px solid #2c2930;
}
.btn-lateral-menu-right {
  padding: 18px 15px;
  max-width: 50%;
  width: 50%;
  color: #2c2930;
  text-align: center;
  letter-spacing: 0px;
  font-weight: 600;
  /* text-transform: capitalize; */
  font-size: 14px;
  cursor: pointer;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  transition: background-color 0.25s ease, color 0.25s ease;
  border-bottom: 3px solid #2c2930;
}
.show-select-active {
  background-color: #2c2930;
  color: #fff;
}
.conten-Menu,
.content-Categorys {
  margin-top: 20px;
  @apply w-full flex flex-col justify-start items-center;
}
.content-Categorys {
  max-height: 670px;
  overflow-y: scroll;
}
.collapse-category {
  @apply w-full;
}
.header-content-buttons {
  @apply w-full grid grid-cols-1 justify-start items-center;
}
.btn {
  @apply w-full flex font-semibold tracking-wider py-3 px-20;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  text-align: start;
  border-bottom: 1px solid #e7e7e7;
}
.btn:hover {
  border-bottom: 1px solid #000;
}
.btn-category {
  @apply w-full flex font-semibold  tracking-wider py-3 px-20;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
.btn-category-all {
  @apply w-full flex font-semibold  tracking-wider py-3 px-20;
  color: #333;
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
.txt-sub-li {
  font-size: 14px;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  font-weight: 400;
  color: #000;
}

/* @media (min-width: 1280px) {
  .order {
    @apply hidden;
  }
} */
</style>
