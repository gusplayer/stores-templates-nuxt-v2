<template>
  <div class="wrapper_Category">
    <div class="content_Category">
      <div
        class="btn-scroll"
        @click="scrollLeft()"
        v-if="this.categorias.length > 8"
      >
        <FlechaLeft-icon class="btn-scroll-icon" />
      </div>
      <div class="content-item-category" id="swiper-slide-categories">
        <div class="tags" :class="idCategory == '' ? 'tags-active' : ''">
          <p
            class="name-category"
            :class="idCategory == '' ? 'name-category-active ' : ''"
            @click="clear"
          >
            {{ $t('home_todo') }}
          </p>
        </div>
        <div
          v-for="categoria in categorias"
          :key="categoria.id"
          class="tags"
          :class="categoria.id == idCategory ? 'tags-active' : ''"
        >
          <div @click="sendCategory(categoria, categoria.id, (ref = false))">
            <p
              class="name-category"
              :class="categoria.id == idCategory ? 'name-category-active' : ''"
            >
              {{ categoria.nombre_categoria_producto }}
            </p>
          </div>
        </div>
      </div>
      <div
        class="btn-scroll"
        @click="scrollRight()"
        v-if="this.categorias.length > 8"
      >
        <FlechaRight-icon class="btn-scroll-icon" />
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Categories-valienta',
  props: {
    dataStore: Object,
  },
  data() {
    return {
      add: true,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      idCategory: '',
      indexSelect: '',
    }
  },
  computed: {
    categorias() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    product() {
      return this.dataStore.productos
    },
  },
  methods: {
    Sendsubcategory(value) {
      this.indexSelect = value
      this.$router.push({
        path: `/wp/${this.dataStore.tienda.id_tienda}`,
      })
      this.$store.commit('SET_STATEBANNER', false)
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
      this.$store.commit('SET_PREVIOUSPAGE', 1)
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria
      this.$router.push({
        path: `/wp/${this.dataStore.tienda.id_tienda}`,
      })
      this.$store.commit('SET_STATEBANNER', false)
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
      this.$store.commit('SET_PREVIOUSPAGE', 1)
    },
    addClass() {
      this.add = !this.add
    },
    clear() {
      this.$store.commit('SET_STATEBANNER', true)
      this.idCategory = ''
      this.$router.push({
        path: `/wp/${this.dataStore.tienda.id_tienda}`,
      })
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
    },
    scrollLeft() {
      document.getElementById('swiper-slide-categories').scrollLeft -= 300
    },
    scrollRight() {
      document.getElementById('swiper-slide-categories').scrollLeft += 300
    },
  },
  watch: {},
}
</script>

<style scoped>
.wrapper_Category {
  width: 100%;
  display: flex;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 3;
  position: sticky;
  position: -webkit-sticky;
  top: 43px;
}
.content_Category {
  width: 100%;
  padding: 10px 5px 1px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.btn-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  min-height: 50px;
  padding: 0px 6px;
  background: #e4e4e4;
  cursor: pointer;
}
.btn-scroll-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: black;
  bottom: 0.125em;
}
.btn-scroll-icon:hover {
  color: white;
}
.content-item-category {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
}
.content-item-category::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.tags {
  display: flex;
  align-items: center;
  color: #4a5782;
  background: #f8f8f8;
  padding: 3px 12px;
  font-size: 12px;
  height: 50px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 5px;
  transition: all 600ms ease-in;
  white-space: nowrap;
}
.tags-active {
  color: #a9206b;
  font-weight: bold;
  background: #f8f8f8;
  border: 1px solid #7e8dd1;
  box-sizing: border-box;
  border-radius: 10px;
}
.name-category {
  font-size: 12px;
  font-weight: 500;
  color: #4a5782;
  cursor: pointer;
  margin-top: 3px;
  text-align: center;
}
.name-category-active {
  color: #a9206b;
  font-weight: bold;
}
.content-item-category::-webkit-scrollbar {
  background: transparent;
  height: 5px;
  border: 1px solid rgba(161, 161, 161, 0.589);
}
.content-item-category::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px white;
  border-radius: 10px;
}
.content-item-category::-webkit-scrollbar-thumb {
  background: #4a5782;
  border-radius: 10px;
}
.content-item-category::-webkit-scrollbar-thumb:hover {
  background: grey;
}

@media (max-width: 770px) {
  .btn-scroll {
    display: none;
  }
}
</style>
