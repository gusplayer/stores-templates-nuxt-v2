<template>
  <transition name="fade">
    <div v-show="openMenuRight" class="order" @click="closeOrder">
      <div class="order_content">
        <div class="order_header">
          <div class="header-content-logo">
            <nuxt-link id="tamaño-img" to="/" class="wrapper-logo">
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.logo}`
                "
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <label for="order_close" class="order_header_close" @click="closed">
            <close-icon />
          </label>
        </div>
        <div class="content-lateral-menu">
          <div class="content-btns-lateral-menu">
            <button
              id="btnfocus"
              class="btn-lateral-menu-left"
              :class="selecttag == 1 ? 'show-select-active' : ''"
              @click="selectTag1"
            >
              {{ $t('header_inicio') }}
            </button>
            <button
              v-if="categorias && categorias.length > 0"
              class="btn-lateral-menu-right"
              :class="selecttag == 2 ? 'show-select-active' : ''"
              @click="selectTag2"
            >
              {{ $t('header_categorias') }}
            </button>
          </div>
          <div v-if="!focusbtn" class="conten-Menu">
            <div class="header-content-buttons">
              <div
                v-for="(item, index) in secciones"
                :key="`${index}${item.name}`"
                @click="closed"
              >
                <nuxt-link
                  v-if="item.path && item.state"
                  :to="item.path"
                  class="btn"
                >
                  {{ $t(`${item.name}`) }}
                </nuxt-link>
                <nuxt-link
                  v-else-if="item.href && stateListBLogs && item.state"
                  :to="item.href"
                  class="btn"
                >
                  {{ $t(`${item.name}`) }}
                </nuxt-link>
              </div>
            </div>
          </div>
          <div v-if="focusbtn" class="content-Categorys">
            <div class="wrapper-category-all">
              <li @click="clearFilters">
                <p class="name-category-all">{{ $t('header_allProduct') }}</p>
              </li>
              <div v-for="categoria in categorias" :key="categoria.id">
                <BaseAccordion>
                  <template v-slot:categorias>
                    <li
                      class="text-categoria"
                      :class="
                        categoria.id == categorySelect
                          ? 'text-categoria-active'
                          : ''
                      "
                      @click="setToQueryFilter('category', categoria)"
                    >
                      {{ categoria.nombreCategoriaProducto }}
                    </li>
                  </template>
                  <template v-slot:subcategorias>
                    <div v-for="(subcategory, key) in subcategories" :key="key">
                      <li
                        v-if="subcategory.categoria == categoria.id"
                        class="close text-subcategoria"
                        :class="
                          subcategory.id == subCategorySelect
                            ? 'text-subcategoria-active'
                            : ''
                        "
                        @click="setToQueryFilter('subcategories', subcategory)"
                      >
                        {{ subcategory.nombreSubcategoria }}
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
                    itemsTags.tagProperties.length > 0
                  "
                >
                  <template v-slot:categorias>
                    <li class="text-categoria">
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
                        {{ itemsProperties.name }}
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
import BaseAccordion from '../_BaseAccordion1'
export default {
  name: 'KoMenuRight2',
  components: {
    BaseAccordion,
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      selecttag: 1,
      focusbtn: false,
      categorySelect: '',
      subCategorySelect: '',
      tagSelect: '',
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
          state: true,
          //icon: 'menu-icon',
        },
        // {
        //   name: 'header_productos',
        //   path: '/productos',
        //   state: true,
        // },
        // {
        //   name: 'header_productos_hoko',
        //   path: '/productosHoko',
        //   state: false,
        // },
        {
          name: 'header_contacto',
          path: '/contacto',
          state: true,
          //icon: 'account-icon',
        },
        {
          name: 'header_blog',
          href: '/blog',
          state: true,
          //icon: 'account-icon',
        },
        {
          name: 'header_carrito',
          path: '/cart',
          state: true,
          //icon: 'cart-icon',
        },
      ],
      query: {
        page: 1,
        name: null,
        category: null,
        subcategory: null,
        tag: null,
      },
    }
  },
  computed: {
    ...mapState(['stateListBLogs', 'dataHoko', 'categorias']),
    ...mapState({
      showModal: (state) => state.modalpolitics05,
      openMenuRight: (state) => state.openMenuLateralRight,
      facebookPixel: (state) => state.analytics_tagmanager,
      subcategories: (state) => state.subcategorias,
    }),
    logoImg() {
      return this.$store.state.dataStore.logo
    },
    allTags() {
      return this.dataStore.tags
    },
  },
  watch: {
    dataHoko() {
      // this.setHoko()
    },
  },
  mounted() {
    // this.setHoko()
  },
  methods: {
    // setHoko() {
    //   this.secciones[2].state =
    //     this.dataHoko && this.dataHoko.statehoko === 1 ? true : false
    // },
    selectTag1() {
      this.selecttag = 1
      this.focusbtn = false
    },
    selectTag2() {
      this.selecttag = 2
      this.focusbtn = true
    },
    closed() {
      this.$store.commit('SET_OPEN_ORDER_MENU_RIGHT', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order' ||
        element === 'order_header_close' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.closed()
      }
    },
    setToQueryFilter(type, value) {
      if (type === 'search') {
        this.query.name = this.query.name || null
        this.getSearch(this.query.name)
      } else if (type === 'category') {
        this.sendAnalyticsStore(value.id)
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
      } else {
        this.query.tag = value.id || null
      }

      this.closed()
      this.setInformationFromQuery(this.query)
    },
    async setInformationFromQuery({ page, name, category, subcategory, tag }) {
      const query = {}

      if (page !== null && page !== undefined) query.page = page
      if (category !== null) query.category = category
      if (name !== null) query.name = name
      if (subcategory !== null) query.subcategory = subcategory
      if (tag !== null) query.tag = tag

      try {
        await this.$router.push({ path: '', query })
      } catch (error) {
        console.error('Error navigating:', error)
      }
    },
    clearFilters() {
      this.query = {
        page: 1,
        name: null,
        category: null,
        subcategory: null,
        tag: null,
      }
      this.categorySelect = ''
      this.subCategorySelect = ''
      this.$store.commit('SET_STATE_BANNER', true)
      this.$router.push({ path: '', query: '' })
      this.$store.commit('products/SET_CATEGORY_PRODUCTO', null)
      this.$store.commit('products/SET_SUBCATEGORY_PRODUCTO', null)
      this.$store.commit('products/SET_TAG_PRODUCT', null)
    },
    getSearch(value) {
      if (value) {
        if (this.facebookPixel?.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      }
    },
    async sendAnalyticsStore(value) {
      await this.$store.dispatch('SEND_ANALYTICS_STORE', {
        storeId: this.dataStore.id,
        event: 'CLICKED_CATEGORY',
        categoryId: value,
      })
    },
  },
}
</script>

<style scoped>
.order {
  display: none;
}
@media (max-width: 700px) {
  .order {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 6;
  }
  .order_content {
    position: absolute;
    right: 0px;
    max-width: 400px;
    width: 100%;
    height: 100vh;
    background-color: var(--background_color_1);
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
      right: -400px;
    }
    100% {
      right: 0px;
    }
  }
  .order_content > div {
    width: 100%;
    box-sizing: border-box;
    list-style: none;
  }
  .order_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--color_border);
    padding: 10px 25px;
    flex: none;
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
  .order_header_close {
    font-size: 30px;
    color: var(--color_icon);
    transition: 0.3s;
    cursor: pointer;
  }
  .order_header_close:hover {
    color: gray;
  }
  .wrapper-category-all {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: hidden;
    /* padding: 10px 25px; */
    /* margin-top: 10px; */
  }
  .name-category-all {
    font-weight: bold;
    font-size: 16px;
    color: var(--color_text);
    margin-bottom: 5px;
  }
  .text-categoria {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    color: var(--color_text);
  }
  .text-subcategoria-all {
    margin-left: 3px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 15px;
    font-weight: bold;
    color: var(--color_text);
  }
  .text-subcategoria {
    margin-left: 3px;
    margin-bottom: 5px;
    width: 100%;
    font-size: 15px;
    color: var(--color_subtext);
  }
  .text-categoria-active {
    color: var(--color_hover_text);
  }
  .text-subcategoria-active {
    color: var(--color_hover_text);
  }
  .content-lateral-menu {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-btns-lateral-menu {
    @apply w-full flex flex-row justify-start items-center;
  }
  .btn-lateral-menu-right:focus .conten-Menu {
    @apply hidden;
  }
  .btn-lateral-menu-left {
    padding: 18px 15px;
    max-width: 50%;
    width: 50%;
    color: var(--color_text);
    text-align: center;
    letter-spacing: 0px;
    font-weight: 600;
    /* text-transform: capitalize; */
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;
    border-bottom: 3px solid var(--color_text);
  }
  .btn-lateral-menu-right {
    padding: 18px 15px;
    max-width: 50%;
    width: 50%;
    color: var(--color_text);
    text-align: center;
    letter-spacing: 0px;
    font-weight: 600;
    /* text-transform: capitalize; */
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.25s ease, color 0.25s ease;
    border-bottom: 3px solid var(--color_text);
  }
  .show-select-active {
    background-color: var(--color_icon);
    color: #fff;
  }
  .conten-Menu,
  .content-Categorys {
    margin-top: 20px;
    @apply w-9/0 flex flex-col justify-start items-center;
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
    @apply w-full flex font-semibold tracking-wider py-2 pl-3;
    color: var(--color_text);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0px;
    /* border-bottom: 1px solid #2c2930; */
  }
  .btn:hover {
    border-bottom: 2px solid var(--color_icon);
  }
}
</style>
