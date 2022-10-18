<template>
  <div class="content-slide-categorys">
    <div class="content-categories">
      <div
        class="btn-scroll mr-10"
        @click="scrollLeft(1)"
        v-if="this.categorias.length > 5"
      >
        <FlechaLeft-icon class="btn-scroll-icon" />
      </div>
      <div class="itens-slide-categories" id="swiper-slide-categories">
        <div class="wrapper-img-text" @click="clear">
          <img
            src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649430112/Xiaomi_logo__2021_ejxsbk.png"
            class="product-image"
            alt="icon all"
            v-if="dataStore.tienda.id_tienda == 12664"
          />
          <img
            src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649430214/2549900_umsosz.png"
            class="product-image"
            alt="icon all"
            v-else
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
          v-for="categoria in categorias"
          :key="categoria.id"
          @click="sendCategory(categoria, categoria.id, (ref = false))"
        >
          <img
            v-lazy="
              categoria.imagen_cloudinary == null
                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png'
                : idCloudinary(categoria.imagen_cloudinary, 150, 150)
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
      <div
        class="btn-scroll ml-10"
        @click="scrollRight(1)"
        v-if="this.categorias.length > 5"
      >
        <FlechaRight-icon class="btn-scroll-icon" />
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
          class="wrapper-img-text"
          v-for="(subcategorys, index) in selectedSubcategories"
          :key="index"
          @click="SendSubCategory(subcategorys.id)"
        >
          <img
            v-lazy="
              subcategorys.imagen_cloudinary == null
                ? 'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_80,q_auto:best,f_auto/v1649367838/2659360_s1ap5f.png'
                : idCloudinary(subcategorys.imagen_cloudinary, 150, 150)
            "
            :class="
              subcategorys.imagen_cloudinary == 'sin_foto.jpeg'
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
                subcategorys.id == idSubCategory
                  ? settingByTemplate.color_primario
                  : '#25D366'
              };`"
              class="txt-category"
              :class="
                subcategorys.id == idSubCategory ? 'active-tag' : 'disable-tag'
              "
            >
              {{ subcategorys.nombre_subcategoria }}
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
      selectSubcategory: '',
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
      this.selectSubcategory = value
      let filtradoSubCategoria = this.subcategories.find(
        (element) => element.id == value
      )
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
    scrollLeft(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-categories').scrollLeft -= 300
      } else if (value == 2) {
        document.getElementById('swiper-slide-subcategories').scrollLeft -= 300
      }
    },
    scrollRight(value) {
      if (value == 1) {
        document.getElementById('swiper-slide-categories').scrollLeft += 300
      } else if (value == 2) {
        document.getElementById('swiper-slide-subcategories').scrollLeft += 300
      }
    },
  },
}
</script>
<style scoped>
.content-slide-categorys {
  z-index: 10;
  @apply w-full flex flex-col justify-center items-center box-border sticky top-0 bg-white-white;
}
.notproduct-image-res {
  height: 100%;
  max-height: 70px;
  max-width: 70px;
  width: 100%;
}
.product-image {
  width: 100%;
  min-width: 70px;
  max-width: 70px;
  height: 70px;
  min-height: 70px;
  max-height: 70px;
  object-fit: cover;
  overflow: hidden;
}
.wrapper-img-text {
  /* width: 100%; */
  height: 105px;
  max-height: 105px;
  transition: all 600ms ease-in;
  white-space: nowrap;
  @apply flex flex-col items-center justify-start cursor-pointer mr-15;
}
.btn-scroll {
  top: 50%;
  @apply flex justify-center items-center cursor-pointer;
}
.btn-scroll-icon {
  font-size: 20px;
  color: black;
  bottom: 0.125em;
  @apply w-full flex justify-center items-center;
}
.btn-scroll-icon:hover {
  color: #25d366;
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
@media (max-width: 420px) {
  .notproduct-image-res {
    max-height: 50px;
    max-width: 50px;
  }
  .product-image {
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    min-height: 50px;
    max-height: 50px;
  }
  .wrapper-img-text {
    height: 85px;
    max-height: 85px;
  }
}
</style>
