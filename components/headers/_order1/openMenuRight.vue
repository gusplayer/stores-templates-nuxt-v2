<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openMenuRight">
      <div class="order_content">
        <div class="order_header">
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
              <img
                :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <label for="order_close" @click="closed" class="order_header_close">
            <close-icon />
          </label>
        </div>
        <template>
          <div class="wrapper-category-all">
            <li @click="clear">
              <p class="name-category-all">Todos los productos</p>
            </li>
            <div v-for="categoria in categorias" :key="categoria.id">
              <BaseAccordian>
                <template v-slot:categorias>
                  <li
                    class="text-categoria"
                    @click="
                      sendCategory(categoria, categoria.id, (ref = false))
                    "
                    :class="
                      categoria.id == indexSelect ? 'text-categoria-active' : ''
                    "
                  >
                    {{ categoria.nombre_categoria_producto }}
                  </li>
                </template>
                <template v-slot:subcategorias
                  ><template>
                    <div v-for="(subcategory, key) in subcategories" :key="key">
                      <li
                        v-if="subcategory.categoria == categoria.id"
                        @click="Sendsubcategory(subcategory.id)"
                        class="close text-subcategoria"
                        :class="
                          subcategory.id == indexSelect2
                            ? 'text-subcategoria-active'
                            : ''
                        "
                      >
                        {{ subcategory.nombre_subcategoria }}
                      </li>
                    </div>
                  </template></template
                >
              </BaseAccordian>
            </div>
          </div>
        </template>
      </div>
    </div>
  </transition>
</template>

<script>
import BaseAccordian from './_BaseAccordion'
export default {
  name: 'KoMenuRight',
  props: {
    dataStore: Object,
  },
  components: {
    BaseAccordian,
  },
  data() {
    return {
      add: true,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
    }
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openMenuRight() {
      return this.$store.state.openMenulateralRight
    },
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
  },
  methods: {
    closed() {
      this.$store.commit('SET_OPENORDERMENURIGTH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order' ||
        element === 'order_header_close' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.$store.commit('SET_OPENORDERMENURIGTH', false)
      }
    },
    Sendsubcategory(value) {
      this.indexSelect2 = value
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      this.$store.commit('SET_OPENORDERMENURIGTH', false)
      this.addClass()
      this.selectSubcategory = value
      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.id == value
      )
      let filtradoCategorias = this.categorias.find(
        (element) => element.id == filtradoSubCategoria.categoria
      )
      this.$store.commit(
        'SET_CATEGORY_PRODCUTRO',
        filtradoCategorias.nombre_categoria_producto
      )
      this.nameSubCategory = filtradoSubCategoria.nombre_subcategoria
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', this.nameSubCategory)
      this.$store.commit('products/FILTER_BY', {
        type: 'subcategory',
        data: value,
      })
    },
    sendCategory(value, categoria, ref) {
      this.indexSelect = categoria
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_PREVIOUSPAGE', 1)
      let getSubcategory
      this.subcategories.filter((element) => {
        if (element.categoria == categoria) {
          getSubcategory = true
        }
      })
      if (getSubcategory != true) {
        this.$store.commit('SET_OPENORDERMENURIGTH', false)
      }
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODCUTRO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
      this.selectedSubcategories = []
      this.subcategories.find((subcategoria) => {
        if (subcategoria.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategoria)
        }
      })
      if (this.selectedSubcategories.length === 0) {
        this.addClass()
      }
      if (ref) {
        this.addClass()
      }
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: value.nombre_categoria_producto,
      })
    },
    addClass() {
      this.add = !this.add
    },
    clear() {
      this.$router.push({
        path: '/',
      })
      this.showMenu = false
      this.$store.commit('SET_OPENORDERMENURIGTH', false)
      this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
      this.nameCategory = ''
    },
  },
  watch: {},
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
    overflow-x: auto;
    padding: 10px 25px;
    margin-top: 10px;
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
}
</style>
