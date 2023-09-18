<template>
  <div class="wrapper_Category">
    <div class="content_Category">
      <div class="content-item-category">
        <ul class="content-card">
          <div class="wrapper-image">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdgeNil1eNY8XKW_XrVp9EUThSQghe12-sAA&usqp=CAU"
              class="product-image"
              alt="Category Img"
            />
          </div>
          <div class="content-text">
            <p class="name-category" @click="clear">
              {{ $t('header_allProduct') }}
            </p>
          </div>
        </ul>
        <ul
          v-for="categoria in categorias"
          :key="categoria.id"
          class="content-card"
          :class="categoria.id == idCategory ? 'content-card-active ' : ''"
        >
          <div
            class="wrapper-image"
            @click="sendCategory(categoria, categoria.id, (ref = false))"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQdgeNil1eNY8XKW_XrVp9EUThSQghe12-sAA&usqp=CAU"
              class="product-image"
              alt="Category Img"
            />
          </div>
          <div
            class="content-text"
            @click="sendCategory(categoria, categoria.id, (ref = false))"
          >
            <p class="name-category">
              {{ categoria.nombre_categoria_producto }}
            </p>
          </div>
        </ul>
      </div>
      <div class="content-item-category" v-if="idCategory">
        <div
          v-for="(subcategory, key) in subcategories"
          :key="key"
          style="margin-top: 10px; margin-bottom: 10px"
        >
          <div
            v-if="subcategory.categoria == idCategory"
            @click="SendSubCategory(subcategory.id)"
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
// import idCloudinary from '../../mixins/idCloudinary'
export default {
  // mixins: [idCloudinary],
  name: 'Ko7Category',
  props: {
    dataStore: Object,
  },
  data() {
    return {
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
      return this.$store.getters['products/allProduct']
    },
  },
  methods: {
    SendSubCategory(value) {
      this.indexSelect = value
      this.$store.commit('SET_STATE_BANNER', false)
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
        path: '/productos',
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
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria
      this.$store.commit('SET_STATE_BANNER', false)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.selectedSubcategories = []
      this.$router.push({
        path: '/productos',
        query: { category: this.nameCategory },
      })
      this.subcategories.find((subcategory) => {
        if (subcategory.categoria === categoria) {
          this.toggleCategories = false
          this.selectedSubcategories.push(subcategory)
        }
      })
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: value.nombre_categoria_producto,
      })
    },
    clear() {
      this.idCategory = ''
      this.showMenu = false
      this.$router.push({
        path: '/productos',
        query: {},
      })
      this.$store.commit('SET_STATE_BANNER', true)
      this.$store.commit('SET_OPEN_ORDER_MENU_RIGHT', false)
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
      this.nameCategory = ''
    },
  },
  watch: {},
}
</script>

<style scoped>
.wrapper_Category {
  display: flex;
  width: 100%;
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 3;
}
.content_Category {
  width: 100%;
  max-width: 1300px;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.content-item-category {
  width: 100%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
}
.content-item-category::-webkit-scrollbar {
  background: transparent;
  height: 8px;
  border: 1px solid rgba(161, 161, 161, 0.589);
}
.content-item-category::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px white;
  border-radius: 10px;
}
.content-item-category::-webkit-scrollbar-thumb {
  background: var(--color_border);
  border-radius: 10px;
}
.content-item-category::-webkit-scrollbar-thumb:hover {
  background: var(--btnhover);
}
.content-card {
  width: 100%;
  min-width: 130px;
  max-width: 130px;
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid var(--color_border);
  background-color: white;
  border-radius: 10px;
  margin-right: 10px;
  margin-bottom: 5px;
}
.content-card:hover {
  box-shadow: 0px 0px 2px 1px var(--color_border);
}
.content-card-active {
  box-shadow: 0px 0px 2px 1px var(--color_border);
}
.wrapper-image {
  width: 100%;
  max-width: 130px;
  max-height: 85px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
  cursor: pointer;
}
.product-image {
  width: 100%;
  object-fit: cover;
  overflow: hidden;
}
.content-text {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  max-height: 40px;
}
.name-category {
  font-size: 14px;
  font-weight: bold;
  color: var(--color_text);
  cursor: pointer;
  margin-top: 3px;
  text-align: center;
}
.name-category:hover {
  color: var(--hover_text);
}
.tags {
  border-radius: 10px;
  color: var(--color_background_btn);
  border: solid 1px var(--color_background_btn);
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
  background: var(--hover_card);
  border: solid 1px var(--color_border);
}
.tags-active {
  color: var(--btnhover);
  border: solid 1px var(--color_border);
}
</style>
