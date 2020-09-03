<template>
  <div class="wrapper_Category">
    <div class="content_Category">
      <dir>
        <p class="text-title">Categorías</p>
      </dir>
      <div class="content-item-category">
        <div class="tags" style="margin-top: 10px; margin-bottom: 10px;">
          <p class="name-category" @click="clear">Todos los productos</p>
        </div>
        <div
          v-for="categoria in categorias"
          :key="categoria.id"
          class="tags"
          :class="categoria.id == idCategory ? 'tags-active' : ''"
          style="margin-top: 10px; margin-bottom: 10px;"
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
      <div class="content-item-category" v-if="idCategory">
        <div
          v-for="(subcategory, key) in subcategories"
          :key="key"
          style="margin-top: 10px; margin-bottom: 10px;"
        >
          <div
            v-if="subcategory.categoria == idCategory"
            @click="Sendsubcategory(subcategory.id)"
          >
            <button
              class="tags"
              :class="subcategory.id == indexSelect ? 'tags-active' : ''"
            >
              {{ subcategory.nombre_subcategoria }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Categories-wa',
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
        path: '/wa',
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
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria
      this.$router.push({
        path: '/wa',
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
    },
    addClass() {
      this.add = !this.add
    },
    clear() {
      this.idCategory = ''
      this.$router.push({
        path: '/wa',
      })
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.$emit('clear')
      this.addClass()
    },
  },
  watch: {},
}
</script>

<style scoped>
.wrapper_Category {
  display: flex;
  width: 100%;
  background-color: white;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 3;
}
.content_Category {
  width: 100%;
  max-width: 780px;
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.text-title {
  background: transparent;
  font-size: 16px;
  font-weight: bold;
  line-height: 1.4;
  color: black;
}
.content-item-category {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
}
.content-card-category-active {
  color: grey;
  border: solid 1px #25d366;
  box-shadow: 0px 0px 2px 1px #25d366;
}
.name-category {
  font-size: 14px;
  font-weight: bold;
  color: black;
  cursor: pointer;
  margin-top: 3px;
  text-align: center;
}
.name-category:hover {
  color: grey;
}
.name-category-active {
  color: grey;
}
.tags {
  border-radius: 10px;
  color: black;
  border: solid 1px black;
  background-color: white;
  padding: 3px 12px;
  font-size: 14px;
  height: 30px;
  font-weight: bold;
  cursor: pointer;
  margin-right: 10px;
  transition: all 200ms ease-in;
  white-space: nowrap;
}
.tags:hover {
  color: grey;
  border: solid 1px #25d366;
}
.tags-active {
  color: grey;
  border: solid 1px #25d366;
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
  background: #25d366;
  border-radius: 10px;
}
.content-item-category::-webkit-scrollbar-thumb:hover {
  background: grey;
}
</style>
