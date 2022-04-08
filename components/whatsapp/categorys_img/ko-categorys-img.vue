<template>
  <div class="content-slide-categorys">
    <div class="content-categories">
      <div class="itens-slide-categories">
        <div class="wrapper-img-text" @click="clear">
          <img
            src="https://res.cloudinary.com/komerciaacademico/image/upload/v1649380123/2544056_ri6jae.png"
            class="product-image"
            alt="icon all"
          />

          <div class="tag">
            <p
              :style="`border-color: ${
                settingByTemplate &&
                settingByTemplate.color_primario &&
                idCategory == ''
                  ? settingByTemplate.color_primario
                  : '#25D366'
              };`"
              :class="idCategory == '' ? 'active-tag ' : 'disable-tag'"
              class="txt-category"
              @click="sendCategory('', '', (ref = false))"
            >
              {{ $t('home_todo') }}
            </p>
          </div>
        </div>
        <div
          class="wrapper-img-text"
          v-for="categoria in categories"
          :key="categoria.id"
          @click="sendCategory(categoria, categoria.id, (ref = false))"
        >
          <img
            v-lazy="
              categoria.imagen_cloudinary == null
                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png'
                : idCloudinary(categoria.imagen_cloudinary, 80, 80)
            "
            :class="
              categoria.imagen_cloudinary == 'sin_foto.jpeg'
                ? 'notproduct-image-res'
                : ''
            "
            class="product-image"
            alt="icon category"
          />
          <div class="tag">
            <p
              :style="`border-color: ${
                settingByTemplate &&
                settingByTemplate.color_primario &&
                categoria.id == idCategory
                  ? settingByTemplate.color_primario
                  : '#25D366'
              };`"
              class="txt-category"
              :class="categoria.id == idCategory ? 'active-tag' : 'disable-tag'"
            >
              {{ categoria.nombre_categoria_producto }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  name: 'CategorySlideWa-4',
  mixins: [idCloudinary],
  props: {
    dataStore: Object,
    settingByTemplate: Object,
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
  },
}
</script>
<style scoped>
.content-slide-categorys {
  top: 0;
  position: sticky;
  z-index: 10;
  box-sizing: border-box;
  @apply w-full flex justify-center items-center bg-white-white py-5;
}
.notproduct-image-res {
  height: 100%;
  max-height: 80px;
  max-width: 80px;
  width: 100%;
}
.product-image {
  width: 100%;
  min-width: 80px;
  max-width: 80px;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  object-fit: cover;
  overflow: hidden;
}
.wrapper-img-text {
  width: 100%;
  height: 129px;
  max-height: 129px;
  transition: all 600ms ease-in;
  white-space: nowrap;

  @apply flex flex-col items-center justify-center cursor-pointer mr-10;
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
    @apply w-full flex justify-center items-center cursor-pointer px-5 border-b-4;
  }
  .disable-tag {
    @apply w-full flex justify-center items-center cursor-pointer rounded-full px-5;
  }
  .txt-category {
    font-size: 14px;
    color: #3d3d3d;
    font-family: 'Poppins', sans-serif !important;
    @apply w-full flex flex-col justify-center items-center font-medium;
  }
  .tag {
    color: black;
    margin-top: 5px;
    font-size: 12px;
    font-weight: 600;
  }
}
@media (min-width: 768px) {
  .txt-category {
    font-size: 16px;
  }
  .active-tag {
    /* background-color: #eaeaea; */
    /* @apply py-10; */
  }
}
</style>
