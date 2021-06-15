<template>
  <div class="content-slide-categorys">
    <div class="content-categories">
      <div class="itens-slide-categories" id="swiper-slide-categories">
        <div
          :class="idCategory == '' ? 'active-tag' : 'disable-tag'"
          @click="clear"
        >
          <p class="txt-category" @click="sendCategory('', '', (ref = false))">
            {{ $t('home_todo') }}
          </p>
        </div>
        <div
          :class="categoria.id == idCategory ? 'active-tag' : 'disable-tag'"
          v-for="categoria in categories"
          :key="categoria.id"
          @click="sendCategory(categoria, categoria.id, (ref = false))"
        >
          <div>
            <p class="txt-category">
              {{ categoria.nombre_categoria_producto }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CategorySlideWa',
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
    categories() {
      return this.dataStore.categorias
    },
    subcategories() {
      return this.dataStore.subcategorias
    },
    product() {
      return this.dataStore.productos
    },
    stateWapiME() {
      return this.$store.state.stateWapiME
    },
  },
  methods: {
    Sendsubcategory(value) {
      this.indexSelect = value
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
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
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
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
      this.idCategory = ''
      this.$store.commit('SET_STATEBANNER', true)
      if (this.stateWapiME) {
        this.$router.push(`/wa/${this.dataStore.tienda.id_tienda}`)
      } else {
        this.$router.push(`/`)
      }
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
}
</script>
<style scoped>
.content-slide-categorys {
  top: 0;
  position: sticky;
  z-index: 10;
  @apply w-full flex justify-center items-center bg-white-white py-5;
}

@screen sm {
  .content-categories {
    border-color: #d6d6d6;
    @apply w-9/5 flex flex-row justify-center items-center border-b pb-10 mb-10;
  }
  .itens-slide-categories {
    @apply w-full flex flex-row items-center overflow-x-auto overflow-y-hidden;
  }
  .itens-slide-categories::-webkit-scrollbar {
    background: transparent;
    @apply hidden;
  }
  .active-tag {
    max-height: 32px;
    background-color: #a1a1a1;
    @apply w-full flex justify-center items-center cursor-pointer mr-10 rounded-md p-10;
  }
  .disable-tag {
    max-height: 32px;
    background-color: #eaeaea;
    @apply w-full flex justify-center items-center cursor-pointer mr-10 rounded-md p-10;
  }
  .txt-category {
    font-size: 14px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-center font-medium;
  }
}
@media (min-width: 768px) {
  .txt-category {
    font-size: 16px;
  }
  .active-tag {
    @apply py-4;
  }
}
</style>
