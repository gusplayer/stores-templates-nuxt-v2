<template>
  <div
    class="product_container relative flex items-center flex-nowrap bg-transparent hover:bg-gray-100 relative p-5 cursor-pointer"
    @mouseenter="() => (isHover = true)"
    @mouseleave="() => (isHover = false)"
    @click="$emit('click-product')"
  >
    <div class="product_image hidden md:flex md:items-center h-24 w-24 md:mr-4">
      <img
        :src="imageSrc"
        role="presentation"
        class="object-contain rounded-full"
      />
    </div>
    <div class="flex-col">
      <div class="product_header mb-1">
        <h3 class="product_name font-semibold text-md text-gray-800">
          {{ name }}
        </h3>
      </div>
      <div class="product_description">
        <p class="font-normal text-gray-500 text-sm">
          {{ description }}
        </p>
      </div>
      <button
        v-show="isHover"
        class="absolute right-2 bottom-2 text-sm py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
      >
        Agregar
      </button>
    </div>
    <span class="product_price absolute top-5 right-5 font-semibold">
      {{ price }}$
    </span>
    <div class="product_divider" />
  </div>
</template>

<script>
import settingsProps from './mixins/ComponentProps'

export default {
  name: 'ProductCard',
  mixins: [settingsProps],
  props: {
    name: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: [String, Number],
      required: true,
    },
  },
  data: () => ({
    isHover: false,
  }),
}
</script>

<style scoped>
.product_container .product_image > img,
.product_container .product_header,
.product_container .product_description {
  transition: all 220ms ease-in-out;
}

.product_container:hover .product_image > img,
.product_container:hover .product_header,
.product_container:hover .product_description {
  transform: translateX(0.4rem);
}

.product_description {
  max-width: 80%;
}

.product_divider {
  width: 100%;
  position: absolute;
  bottom: 0;
  right: 0;
  height: 1px;
  background-color: #eeeeee;
}

@media screen and (min-width: 820px) {
  .product_divider {
    width: 78%;
  }
}
</style>
