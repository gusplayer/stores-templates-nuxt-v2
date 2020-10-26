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
            Todo
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
      <!-- <div class="content-item-category" v-if="idCategory">
        <div
          v-for="(subcategory, key) in subcategories"
          :key="key"
          style="margin-top: 10px; margin-bottom: 10px;"
        >
          <div v-if="subcategory.categoria == idCategory" @click="Sendsubcategory(subcategory.id)">
            <button
              class="tags"
              :class="subcategory.id == indexSelect ? 'tags-active' : ''"
            >{{ subcategory.nombre_subcategoria }}</button>
          </div>
        </div>
      </div>-->
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
      this.$store.commit('SET_PREVIOUSPAGE', 1)
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
      this.$store.commit('SET_PREVIOUSPAGE', 1)
    },
    addClass() {
      this.add = !this.add
    },
    clear() {
      this.$store.commit('SET_STATEBANNER', true)
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
  display: flex;
  width: 100%;
  background-color: white;

  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  z-index: 3;
  margin-top: 16px;
  border-top: 1px solid rgba(213, 213, 213, 0.473);
  border-bottom: 1px solid rgba(213, 213, 213, 0.473);
  box-shadow: 0 2px 5px rgba(155, 238, 205, 0.42);
  position: sticky;
  position: -webkit-sticky;
  top: 0; /* required */
}
.content_Category {
  width: 100%;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
.content-item-category::-webkit-scrollbar {
  width: 0 !important;
  display: none;
}
.content-card-category-active {
  color: grey;
  border: solid 1px #25d366;
  box-shadow: 0px 0px 2px 1px #25d366;
}
.name-category {
  font-size: 12px;
  font-weight: 500;
  color: #4e4e4e;
  /* color: rgba(207, 204, 204, 0.493); */
  cursor: pointer;
  margin-top: 3px;
  text-align: center;
}
/* .name-category:hover {
  color: grey;
} */
.name-category-active {
  color: #075e54;
  /* color: #fff; */
  font-weight: bold;
}
.tags {
  display: flex;
  align-items: center;
  color: black;
  background-color: white;
  /* background-color: #075e54; */
  padding: 3px 12px;
  font-size: 12px;
  height: 50px;
  font-weight: 600;
  cursor: pointer;
  margin-right: 5px;
  transition: all 600ms ease-in;
  white-space: nowrap;
}
/* .tags:hover {
  color: grey;
  border-bottom: solid 1px #25d366;
} */
.tags-active {
  color: #075e54;
  /* color: #fff; */
  border-bottom: solid 2px #25d366;
  /* border-bottom: solid 2px #fff; */
  font-weight: bold;
  box-shadow: 0 2px 5px rgba(155, 238, 205, 0.42);
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
.btn-scroll {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  min-height: 50px;
  padding: 0px 6px;
  background-image: linear-gradient(130deg, #0f7c6f 0, #24a788 80%);
  cursor: pointer;
}
.btn-scroll-icon {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: white;
  bottom: 0.125em;
}
.btn-scroll-icon:hover {
  color: var(--color_icon);
}
@media (max-width: 770px) {
  .btn-scroll {
    display: none;
  }
}
</style>
