<template>
  <div class="content-button-car">
    <div class="header-content-icon" @click="openOrder">
      <i class="header-content-cart">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          fill="currentColor"
          class="icon-shop"
          viewBox="0 0 16 16"
        >
          <title>Cart</title>
          <path
            d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
          />
        </svg>
      </i>
    </div>
    <div class="border-num-items">
      <span class="num-items">{{ productsCart }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-buttonCar',
  computed: {
    productsCart() {
      return this.$store.state.productsCart.length
    },
  },
  methods: {
    openOrder() {
      this.$store.commit('SET_OPEN_ORDER', true)
    },
  },
}
</script>
<style scoped>
.content-button-car {
  @apply w-100 h-50 flex flex-row justify-start items-center fixed bottom-30 left-30 z-50;
}
.header-content-icon {
  color: #222222;
  background-color: #fff;
  -webkit-box-shadow: 0px 2px 6px 0px #7f7f7f;
  box-shadow: 0px 2px 6px 0px #7f7f7f;
  @apply w-42 h-42 flex justify-center items-center cursor-pointer rounded-full;
}
.header-content-icon:hover {
  color: #eb7025;
  -webkit-box-shadow: 0px 2px 49px 0px #7f7f7f;
  box-shadow: 0px 2px 49px 0px #7f7f7f;
}
.border-num-items {
  @apply relative -mt-30 -ml-15;
}
.num-items {
  color: #fff;
  background-color: #222222;
  font-size: 12px;
  @apply rounded-full px-6 py-1;
}
</style>
