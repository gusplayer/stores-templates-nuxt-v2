<template>
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(product, index) in this.dataProduct"
        :key="index"
      >
        <KoProductCard1 :product="product"></KoProductCard1>
      </div>
    </div>
    <div class="swiper-pagination" slot="pagination"></div>
  </div>
</template>

<script>
import KoProductCard1 from '../_productcard/Ko-ProductCard-1'

export default {
  name: 'carrousel',
  components: {
    KoProductCard1,
  },
  props: {
    products: {},
  },
  mounted() {
    this.getDataProduct()
  },

  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 22,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        breakpoints: {
          1250: {
            slidesPerView: 3,
            spaceBetween: 35,
          },
          1060: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1000: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          990: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          790: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          770: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          375: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
      dataProduct: [],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    settingBytemplatePrueba() {
      return this.$store.state.settingBytemplatePrueba.favoritos
    },
    dataStore() {
      return this.$store.state.dataStore.productos
    },
  },
  methods: {
    changeSlide() {
      this.swiper.slidePrev(500, false)
    },
    getDataProduct() {
      let tempProduct
      const product = this.products.filter((id, index) => {
        this.dataStore.filter((product, index) => {
          if (id.idProducto == product.id) {
            tempProduct = product
            this.dataProduct.push(tempProduct)
          }
        })
      })
    },
  },
}
</script>

<style scoped>
.swiper-wrapper {
  width: 100%;
}
.swiper-slide {
  width: 100%;
}
.swiper-pagination-bullet {
  background-color: rgba(255, 255, 255, 0.5);
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
</style>
