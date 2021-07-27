<template>
  <main>
    <div
      class="pt-20 section-with-title_container"
      :style="`background:${settingByTemplate12.backgroundColor};`"
    >
      <div
        class="pt-4 pb-4"
        v-for="category in dataStore.categorias"
        :key="category.id"
      >
        <header class="text-center mb-20">
          <h2
            class="font-semibold text-4xl uppercase"
            :style="`color:${settingByTemplate12.titleColor};`"
          >
            {{ category.nombre_categoria_producto }}
          </h2>
        </header>
        <div class="products-wrapper">
          <div
            v-for="product in fullProducts"
            :key="product.id"
            @click="OpenModalproductDetails(product)"
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
            ></ProductCard>
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
  props: { fullProducts: Array },
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
    searchValue() {
      return this.$store.state.searchValue
    },
    showModal() {
      return this.$store.state.modalproductDetails
    },
  },
  methods: {
    OpenModalproductDetails(value) {
      this.tempData = value
      this.$store.state.modalproductDetails = true
    },
    Searchproduct(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: 'search',
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: 'all',
          data: '',
        })
      }
    },
  },
  watch: {
    searchValue(value) {
      this.Searchproduct(value)
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
  padding: 40px 10px 20px;
  max-width: 940px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  -ms-grid-columns: repeat(2, minmax(420px, 1fr));
  grid-template-columns: repeat(2, minmax(420px, 1fr));
}
.modal {
  padding-top: 200px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
}
@media (max-width: 800px) {
  .products-wrapper {
    -ms-grid-columns: repeat(1, minmax(100%, 1fr));
    grid-template-columns: repeat(1, minmax(100%, 1fr));
  }
}
@media (max-width: 500px) {
  .modal {
    padding-top: 80px;
  }
}
</style>
