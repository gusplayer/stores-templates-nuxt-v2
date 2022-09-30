<template>
  <div class="content-slide-categorys">
    <div class="content-categories">
      <div class="itens-slide-categories">
        <div
          class="tag"
          :class="idCategory == '' ? 'active-tag' : 'disable-tag'"
          @click="clear"
        >
          <p class="txt-category" @click="sendCategory('', '', (ref = false))">
            {{ $t('home_todo') }}
          </p>
        </div>
        <div
          class="tag"
          :class="categoria.id == idCategory ? 'active-tag' : 'disable-tag'"
          v-for="categoria in categorias"
          :key="categoria.id"
          @click="sendCategory(categoria, categoria.id, (ref = false))"
        >
          <p class="txt-category">
            {{ categoria.nombre_categoria_producto }}
          </p>
        </div>
      </div>
    </div>
    <div
      class="content-categories"
      v-if="
        settingByTemplate.state_subcategorias == 1 &&
        selectedSubcategories.length > 0
      "
    >
      <div class="itens-slide-categories">
        <div
          class="tag"
          :class="
            subcategorys.id == idSubCategory ? 'active-tag' : 'disable-tag'
          "
          v-for="(subcategorys, index) in selectedSubcategories"
          :key="index"
        >
          <p class="txt-category" @click="SendSubCategory(subcategorys.id)">
            {{ subcategorys.nombre_subcategoria }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategorySlideWa-2',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  data() {
    return {
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      idCategory: '',
      idSubCategory: '',
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
    stateWapiME() {
      return this.$store.state.stateWapiME
    },
  },
  methods: {
    SendSubCategory(value) {
      this.idSubCategory = value
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
      this.$store.commit('SET_STATE_BANNER', false)
      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.id == value
      )
      if (filtradoSubCategoria && filtradoSubCategoria.categoria) {
        let filtradoCategorias = this.categorias.find(
          (element) => element.id == filtradoSubCategoria.categoria
        )
        this.$store.commit(
          'SET_CATEGORY_PRODUCTO',
          filtradoCategorias.nombre_categoria_producto
        )
        this.nameSubCategory = filtradoSubCategoria.nombre_subcategoria
        this.$store.commit('SET_SUBCATEGORY_PRODUCTO', this.nameSubCategory)
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: value,
        })
        this.$store.commit('SET_PREVIOUS_PAGE', 1)
      }
    },
    sendCategory(value, categoria, ref) {
      this.idCategory = categoria
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
      this.$store.commit('SET_STATE_BANNER', false)
      this.nameCategory = value.nombre_categoria_producto
      this.$store.commit('SET_CATEGORY_PRODUCTO', this.nameCategory)
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      this.selectedSubcategories = []
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
      this.$store.commit('SET_PREVIOUS_PAGE', 1)
    },
    clear() {
      this.idCategory = ''
      this.idSubCategory = ''
      this.selectedSubcategories = ''
      this.$store.commit('SET_STATE_BANNER', true)
      this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
        data: '',
      })
      this.$emit('clear')
    },
  },
}
</script>
<style scoped>
.content-slide-categorys {
  z-index: 10;
  @apply w-full flex flex-col justify-center items-center bg-white-white py-5 box-border sticky top-0;
}
@screen sm {
  .content-categories {
    border-color: #d6d6d6;
    @apply w-9/0 flex flex-row justify-center items-center border-b pb-10 mb-10;
  }
  .itens-slide-categories {
    @apply w-full flex flex-row items-center overflow-x-auto overflow-y-hidden;
  }
  .itens-slide-categories::-webkit-scrollbar {
    background: transparent;
    @apply hidden;
  }
  .active-tag {
    background-color: #eaeaea;
    @apply flex justify-center items-center cursor-pointer mr-18 rounded-md px-8;
  }
  .disable-tag {
    @apply flex justify-center items-center cursor-pointer mr-18 rounded-full px-8;
  }
  .txt-category {
    font-size: 14px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-center font-medium;
  }
  .tag {
    display: flex;
    align-items: center;
    color: black;
    background-color: white;
    padding: 3px 12px;
    font-size: 12px;
    height: 50px;
    font-weight: 600;
    cursor: pointer;
    margin-right: 5px;
    transition: all 600ms ease-in;
    white-space: nowrap;
  }
}
@media (min-width: 768px) {
  .txt-category {
    font-size: 16px;
  }
  .active-tag {
    background-color: #eaeaea;
    @apply py-4;
  }
}
</style>
