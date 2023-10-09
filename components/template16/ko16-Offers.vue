<template>
  <div
    class="w-full justify-center items-center relative mt-20 md:mt-50"
    :style="[offers, `background-color: ${offers['--background_color_1']}`]"
  >
    <picture>
      <source
        media="(max-width: 1024px)"
        :srcset="idCloudinaryBanner(offers.img_res, 'bannerRes', 800)"
      />
      <source
        media="(min-width: 1025px)"
        :srcset="idCloudinaryBanner(offers.img, 'banner')"
      />
      <img
        v-lazy="idCloudinaryBanner(offers.img, 'banner')"
        alt="banner template16"
        class="w-full object-cover"
      />
    </picture>
    <div
      class="w-full h-full max-w-9/0 flex flex-col justify-center items-end absolute top-0"
      style="z-index: 20"
    >
      <div
        class="w-full h-full max-w-lg flex flex-col justify-center items-end"
      >
        <div class="flex-1 flex flex-col justify-center items-start">
          <p
            v-if="offers?.title"
            class="mb-10 max-w-lg md:max-w-xl text-15 md:text-25 lg:text-40 xl:text-45 leading-tight"
            :style="`color: ${offers.color_title}; font-weight: ${offers.fontWeighTitle};`"
          >
            {{ offers.title }}
          </p>
          <p
            v-if="offers?.text"
            class="max-w-md md:max-w-lg text-14 md:text-18 xl:text-28"
            :style="`color: ${offers.color_text}; font-weight: ${offers.fontWeighText};`"
          >
            {{ offers.text }}
          </p>

          <div class="w-full max-w-[300px] flex justify-start items-start">
            <div ref="mySwiper" v-swiper:mySwiper="swiperOption">
              <div class="swiper-wrapper">
                <div
                  v-for="(item, index) in offers.values"
                  :key="index"
                  class="swiper-slide"
                >
                  <K0CountDown
                    :information="item"
                    :product="setProduct(item.item)"
                    :card-products="cardProducts"
                    :setting-general="settingGeneral"
                  />
                </div>
              </div>
              <div class="swiper-pagination" slot="pagination"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '@/mixins/idCloudinary'

export default {
  name: 'Ko16Offers',
  components: {
    K0CountDown: () => import('./_offers/countdown.vue'),
  },
  mixins: [idCloudinary],
  props: {
    cardProducts: {
      type: Object,
      required: true,
    },
    offers: {
      type: Object,
      required: true,
    },
    settingGeneral: {
      type: Object,
      required: true,
    },
    fullProducts: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  methods: {
    setProduct(value) {
      const product = this.fullProducts.filter(
        (product) => product.slug === value
      )
      return product
    },
  },
}
</script>

<style scoped>
.swiper-wrapper,
.swiper-slide {
  max-width: 300px;
}
.pagination {
  font-size: 18px;
  color: #222;
  background: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-prev {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .el-pager li {
  color: #222;
  background-color: transparent;
}
.product_pagination >>> .el-pagination.is-background .btn-next:hover {
  color: var(--color_pagination);
}
.product_pagination >>> .el-pagination.is-background .btn-prev:hover {
  color: var(--color_pagination);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled):hover {
  color: var(--color_pagination);
}
.product_pagination
  >>> .el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: var(--color_pagination);
  color: #fff;
}
</style>
