<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openMenuRight">
      <div class="order_content">
        <div class="order_header">
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
              <img
                v-lazy="
                  `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
                "
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <label for="order_close" @click="closed" class="order_header_close">
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
                  v-else-if="item.href && listArticulos > 0 && item.state"
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
              <li @click="clear">
                <p class="name-category-all">{{ $t('header_allProduct') }}</p>
              </li>
              <div v-for="categoria in categorias" :key="categoria.id">
                <BaseAccordian>
                  <template v-slot:categorias>
                    <li
                      class="text-categoria"
                      :class="
                        categoria.id == indexSelect
                          ? 'text-categoria-active'
                          : ''
                      "
                      @click="sendCategory(categoria, categoria.id)"
                    >
                      {{ categoria.nombre_categoria_producto }}
                    </li>
                  </template>
                  <template v-slot:subcategorias>
                    <li
                      class="close text-subcategoria-all"
                      v-if="selectedSubcategories.length > 0"
                      @click="closed()"
                    >
                      Ver todo
                    </li>
                    <div v-for="(subcategory, key) in subcategories" :key="key">
                      <li
                        v-if="subcategory.categoria == categoria.id"
                        class="close text-subcategoria"
                        :class="
                          subcategory.id == indexSelect2
                            ? 'text-subcategoria-active'
                            : ''
                        "
                        @click="SendSubCategory(subcategory.id)"
                      >
                        {{ subcategory.nombre_subcategoria }}
                      </li>
                    </div>
                  </template>
                </BaseAccordian>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseAccordian from './_BaseAccordion1'
export default {
  name: 'KoMenuRight2',
  components: {
    BaseAccordian,
  },
  props: {
    dataStore: Object,
  },
  data() {
    return {
      selecttag: 1,
      activeNames: [],
      focusbtn: false,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      getSubcategory: false,
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
    }
  },
  computed: {
    fullProducts() {
      return this.$store.state.products.fullProducts
    },
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openMenuRight() {
      return this.$store.state.openMenuLateralRight
    },
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
    dataHoko() {
      return this.$store.state.dataHoko
    },
  },
  watch: {
    dataHoko() {
      this.setHoko()
    },
  },
  mounted() {
    this.setHoko()
    if (this.fullProducts && this.fullProducts.length > 0) {
      this.secciones[1].state = true
    } else {
      this.secciones[1].state = false
    }
  },
  methods: {
    setHoko() {
      if (this.dataHoko && this.dataHoko.statehoko == 1) {
        this.secciones[2].state = true
      } else {
        this.secciones[2].state = false
      }
    },
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
        this.$store.commit('SET_OPEN_ORDER_MENU_RIGHT', false)
      }
    },
    SendSubCategory(value) {
      this.indexSelect2 = value
      this.$store.commit('SET_STATE_BANNER', false)
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
      this.$store.commit('SET_OPEN_ORDER_MENU_RIGHT', false)
      this.selectSubcategory = value
      let filtradoSubCategory = this.subcategories.find(
        (element) => element.id == value
      )
      let filtradoCategories = this.categorias.find(
        (element) => element.id == filtradoSubCategory.categoria
      )
      this.$store.commit(
        'SET_CATEGORY_PRODUCTO',
        filtradoCategories.nombre_categoria_producto
      )
      this.nameSubCategory = filtradoSubCategory.nombre_subcategoria
      this.$router.push({
        path: '/',
        query: {
          subcategory: `${this.nameSubCategory}^${filtradoCategories.id}`,
        },
      })
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: ['subcategory'],
        data: value,
      })
    },
    sendCategory(value, categoria) {
      this.indexSelect = categoria
      this.$store.commit('SET_STATE_BANNER', false)
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.selectedSubcategories = []
      this.$router.push({
        path: '/',
        query: { category: this.nameCategory },
      })
      this.subcategories.find((subcategoria) => {
        if (subcategoria.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategoria)
        }
      })
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto,
      })
    },
    clear() {
      this.$router.push({
        path: '/',
        query: {},
      })
      this.showMenu = false
      this.$store.commit('SET_OPEN_ORDER_MENU_RIGHT', false)
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
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
