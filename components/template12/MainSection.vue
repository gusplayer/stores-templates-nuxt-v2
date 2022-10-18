<template>
  <main>
    <div
      class="pt-20"
      :style="`background:${settingByTemplate12.backgroundColor};`"
    >
      <div v-if="dataStore.categorias.length > 0">
        <div
          class="pt-4 pb-4"
          v-for="category in dataStore.categorias"
          :key="category.id"
        >
          <header class="text-center">
            <h2
              class="text-title"
              :style="`color:${settingByTemplate12.titleColor};`"
            >
              {{ category.nombre_categoria_producto }}
            </h2>
          </header>
          <div v-if="dataStore.subcategorias.length > 0">
            <div
              class="products-wrapper"
              v-for="(subcategory, key) in dataStore.subcategorias"
              :key="key"
              v-show="subcategory.categoria == category.id"
            >
              <div class="subcategori-Content">
                <p
                  class="text-subtitle"
                  :style="`color:${settingByTemplate12.titleColor};`"
                  v-if="subcategory.categoria == category.id"
                >
                  {{ subcategory.nombre_subcategoria }}
                </p>
              </div>
              <div class="products-content">
                <div
                  v-for="product in fullProducts"
                  :key="product.id"
                  @click="OpenModalProductDetails(product)"
                  v-show="
                    product.categoria == category.nombre_categoria_producto &&
                    product.subcategoria == subcategory.id
                  "
                >
                  <ProductCard
                    :product="
                      product.categoria == category.nombre_categoria_producto &&
                      product.subcategoria == subcategory.id
                        ? product
                        : {}
                    "
                    :dataStore="dataStore"
                    :settingByTemplate12="settingByTemplate12"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="products-content" v-else>
            <div
              v-for="product in fullProducts"
              :key="product.id"
              @click="OpenModalProductDetails(product)"
              v-show="product.categoria == category.nombre_categoria_producto"
            >
              <ProductCard
                :product="
                  product.categoria == category.nombre_categoria_producto
                    ? product
                    : {}
                "
                :dataStore="dataStore"
                :settingByTemplate12="settingByTemplate12"
              />
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <header class="text-center">
          <h2
            class="text-title"
            :style="`color:${settingByTemplate12.titleColor};`"
          >
            {{ $t('header_productos') }}
          </h2>
        </header>
        <div class="products-content">
          <div
            v-for="product in fullProducts"
            :key="product.id"
            @click="OpenModalProductDetails(product)"
          >
            <ProductCard
              :product="product"
              :dataStore="dataStore"
              :settingByTemplate12="settingByTemplate12"
            />
          </div>
        </div>
      </div>
      <div class="modal" v-if="showModal">
        <ProductDetail
          :dataStore="dataStore"
          :tempData="tempData"
          :settingByTemplate12="settingByTemplate12"
        />
      </div>
      <hr class="h-20 bg-transparent border-transparent" />
      <hr class="border-transparent divider border-0" />
    </div>
  </main>
</template>

<script>
import ProductCard from './ProductCard'
import settingsProps from './mixins/ComponentProps'
import ProductDetail from './productDetail.vue'

export default {
  name: 'ISection',
  mixins: [settingsProps],
  components: {
    ProductCard,
    ProductDetail,
  },
  data() {
    return {
      section: {
        title: 'MEAT & FIRST DISHES',
        subtitle: 'Slow cook meals and fresh fishes',
      },
      tempData: {},
    }
  },
  computed: {
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
    searchValue() {
      return this.$store.state.searchValue
    },
    showModal() {
      return this.$store.state.modalproductDetails
    },
  },
  methods: {
    OpenModalProductDetails(value) {
      this.tempData = value
      this.$store.state.modalproductDetails = true
    },
    SearchProduct(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: '',
        })
      }
    },
  },
  watch: {
    searchValue(value) {
      this.SearchProduct(value)
    },
  },
}
</script>

<style scoped>
.divider {
  background-image: url('~/assets/img/gradient-line.png');
  background-position: center;
  background-size: contain;
  height: 3px;
  width: 25%;
  margin: 0 auto;
}
.products-wrapper {
  width: 100%;
  justify-content: center;
  align-items: center;
}
.subcategori-Content {
  max-width: 940px;
  width: 100%;
  padding: 30px 10px 20px;
  margin: 0 auto;
}
.products-content {
  max-width: 940px;
  width: 100%;
  padding: 10px 10px 20px;
  margin: 0 auto;
  display: grid;
  -ms-grid-columns: repeat(2, minmax(420px, 1fr));
  grid-template-columns: repeat(2, minmax(420px, 1fr));
  column-gap: 20px;
  /* row-gap: 15px; */
}
.modal {
  padding-top: 200px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
}
.text-title {
  @apply font-semibold text-4xl uppercase;
}
.text-subtitle {
  font-size: 22px;
  @apply font-semibold uppercase;
}
@media (max-width: 800px) {
  .products-wrapper {
    -ms-grid-columns: repeat(1, minmax(100%, 1fr));
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
  .text-title {
    @apply text-2xl;
  }
}
@media (max-width: 500px) {
  .modal {
    padding-top: 80px;
  }
  .products-wrapper {
    padding: 25px 10px 20px;
  }
  .text-title {
    @apply text-2xl;
  }
}
</style>
