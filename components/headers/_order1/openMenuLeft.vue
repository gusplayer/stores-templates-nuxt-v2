<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openMenuLeft">
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
          <div class="wrapper-category-all" v-if="showMenu">
            <li @click="clear">
              <p class="name-category-all">Todos los productos</p>
            </li>
            <div
              v-for="categoria in categorias"
              :key="categoria.id"
              class="contenedor-modulos"
            >
              <BaseAccordian>
                <template v-slot:categorias>
                  <li
                    class="close text-categoria"
                    @click="
                      sendCategory(
                        categoria,
                        categoria.id,
                        index,
                        (ref = false)
                      )
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
          <div v-else class="wrapper-secciones">
            <div
              v-for="(item, index) in secciones"
              :key="`${index}${item.name}`"
              @click="closed"
              style="margin-bottom: 20px;"
            >
              <nuxt-link :to="item.path" class="text-secciones">
                <div v-if="item.path" :is="item.icon" class="icon" />
                {{ item.name }}
              </nuxt-link>
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
  name: 'KoMenuLeft',
  props: {
    dataStore: Object,
    showMenu: Boolean,
  },
  components: {
    BaseAccordian,
  },
  mounted() {},
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
      secciones: [
        {
          name: 'Inicio',
          path: '/',
          icon: 'menu-icon',
        },
        {
          name: 'Carrito',
          path: '/cart',
          icon: 'cart-icon',
        },
        {
          name: 'Contacto',
          path: '/contacto',
          icon: 'account-icon',
        },
      ],
    }
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openMenuLeft() {
      return this.$store.state.openMenulateralLeft
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
      this.$store.commit('SET_OPENORDERMENULEFT', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (
        element === 'order' ||
        element === 'order_header_close' ||
        element === 'continue_shopping' ||
        element === 'continue_shopping2'
      ) {
        this.$store.commit('SET_OPENORDERMENULEFT', false)
      }
    },
    Sendsubcategory(value) {
      this.indexSelect2 = value
      this.$router.push({
        path: '/',
      })
      this.$store.commit('SET_OPENORDERMENULEFT', false)
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
      // this.$store.commit('SET_OPENORDERMENULEFT', false)
      this.currentPage = 1
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
      this.$store.commit('SET_OPENORDERMENULEFT', false)
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
  z-index: 6;
}
.order_content {
  position: absolute;
  left: 0px;
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
    left: -400px;
  }
  100% {
    left: 0px;
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
  padding: 5px 30px;
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
  /* width: 100%; */
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
  padding: 10px 30px;
  margin-top: 10px;
}
.name-category-all {
  font-size: 16px;
  color: var(--color_text);
  margin-bottom: 5px;
}
.name-category-all:hover {
  color: var(--color_hover_text);
}
.text-categoria {
  width: 100%;
  font-size: 16px;
  color: var(--color_text);
}
.text-categoria:hover {
  color: var(--color_hover_text);
}
.text-subcategoria {
  width: 100%;
  font-size: 16px;
  color: var(--color_subtext);
}
.text-subcategoria:hover {
  color: var(--color_hover_text);
}
.text-categoria-active {
  color: var(--color_hover_text);
}
.text-subcategoria-active {
  color: var(--color_hover_text);
}
.wrapper-secciones {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
  margin-top: 15px;
}
.text-secciones {
  font-size: 16px;
  color: var(--color_text);
}
.text-secciones:hover {
  color: var(--color_hover_text);
}
</style>
