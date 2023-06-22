<template>
  <div
    class="w-full flex justify-center items-center py-15 lg:py-20 px-10 md:px-0"
    :style="`background-color: ${offersProduct['--background_color_1']}`"
  >
    <a
      :href="offersProduct?.url_redirect ?? ''"
      class="w-full max-w-7xl flex items-center justify-center border wrapper_border cursor-pointer"
      :style="`border-color: ${offersProduct.color_border_component}; background-color: ${offersProduct['--background_color_2']}`"
    >
      <div
        class="w-full grid grid-cols-1 md:grid-cols-2 gap-5 justify-between items-center"
      >
        <div
          class="w-full flex flex-col justify-center items-start py-30 md:py-40 pl-20 md:pl-80 pr-20 md:pr-0"
        >
          <p
            class="font-bold text-30 mb-10"
            :style="`color: ${offersProduct.color_title}; font-size: ${offersProduct.fontSizeTitle}; font-weight: ${offersProduct.fontWeighTitle};`"
          >
            <!-- {{ offersProduct.title }} -->
            LEGACY WOODEN SOFA
          </p>
          <div
            class="border h-2 my-10 md:my-15 border-hover"
            :style="`border-color: ${offersProduct.color_border};`"
          />
          <p
            class="mt-10 md:mt-50"
            :style="`color: ${offersProduct.price}; font-size: ${offersProduct.fontSizePrice}; font-weight: ${offersProduct.fontWeighTitle};`"
          >
            <!-- {{ offersProduct.price }} -->
            $1,599
            <span
              :style="`color: ${offersProduct.price_descount}; font-size: ${offersProduct.fontSizePriceDescount}; font-weight: ${offersProduct.fontWeighPriceDescount};`"
            >
              <!-- {{ offersProduct.priceDescount }} -->
              $1.199
            </span>
          </p>
        </div>
        <div class="wrapper-img">
          <picture>
            <source
              media="(max-width: 799px)"
              :srcset="
                idCloudinaryBanner(offersProduct.img_res, 'bannerRes', 800)
              "
            />
            <source
              media="(min-width: 800px)"
              :srcset="idCloudinaryBanner(offersProduct.img, 'banner')"
            />
            <img
              v-lazy="offersProduct.img"
              alt="offersProduct template14"
              class="w-full effect-img"
            />
          </picture>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
import idCloudinary from '@/mixins/idCloudinary'
export default {
  name: 'Ko14-offersProduct',
  props: {
    offersProduct: Object,
    settingGeneral: Object,
    dataStore: Object,
  },
  mixins: [idCloudinary],
}
</script>
<style scoped>
.wrapper_border:hover .border-hover {
  width: 120px;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper-img {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper_border:hover .effect-img {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.effect-img {
  -webkit-transition: all 600ms ease 0s;
}
.border-hover {
  @apply w-80;
  -webkit-transition: all 600ms ease 0s;
}
</style>
