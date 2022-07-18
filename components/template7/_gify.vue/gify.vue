<template>
  <div class="gify-content">
    <div class="container-gify">
      <img class="image" :src="gify.photo" alt="gify" />
      <div class="overlay-tops">
        <div class="icons-hover">
          <div class="share-icon">
            <svg
              class="shares-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </div>
          <div class="search-icon">
            <svg
              class="searchs-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <div class="heart-icon">
            <svg
              class="hearts-icon"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        class="overlay-bottoms"
        @mouseover="hover = false"
        @mouseleave="hover = true"
      >
        <div class="cart-Shop">
          <div class="text-cart" v-if="hover">
            {{ gify.hover }}
          </div>
          <div class="icon-cart" v-if="!hover">
            <cart-icon class="icon" />
          </div>
        </div>
      </div>
    </div>
    <div class="datos-productos">
      <div class="tittle">{{ gify.tittle }}</div>
      <div class="description">{{ gify.description }}</div>
      <div class="precio">{{ gify.precio }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hover: true,
    }
  },
  props: {
    gify: {},
  },
  methods: {
    toggleItem: function () {
      this.hover = !this.hover
    },
  },
}
</script>
<style scoped>
.shares-icon:hover {
  background: var(--hover_card);
}
.searchs-icon:hover {
  background: var(--hover_card);
}
.hearts-icon:hover {
  background: var(--hover_card);
}
.shares-icon,
.searchs-icon,
.hearts-icon {
  @apply h-full w-full;
  color: #333;
}
.gify-content {
  @apply flex flex-col justify-center items-center cursor-pointer;
}
.datos-productos {
  @apply w-full flex flex-col justify-center items-center;
}
.container-gify {
  @apply relative w-full;
}
.image {
  @apply block max-w-full h-auto w-full;
}
.overlay-bottoms {
  @apply absolute w-full left-0 right-0 bottom-0 overflow-hidden h-0 transition-all ease-in duration-300  bg-red-btnhoverproducts;
}
.overlay-bottoms:hover {
  background: var(--hover_card);
  @apply transition-all ease-in duration-300;
}
.container-gify:hover .overlay-bottoms {
  height: 10%;
}
.icon {
  @apply text-2xl;
}
.cart-Shop {
  @apply text-white-white absolute text-center transition-all ease-in duration-300 w-full;
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.overlay-tops {
  @apply absolute w-0 overflow-hidden transition-all ease-in duration-300 shadow-2xl bg-white-white;
  top: 0;
  left: 100%;
  right: 0;
  height: 40%;
}
.container-gify:hover .overlay-tops {
  width: 15%;
  left: 85%;
}
.icons-hover {
  @apply text-white-white absolute text-center transition-all ease-in duration-300 grid grid-cols-1 gap-4;
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.tittle {
  font-family: 'David Libre' !important;
  color: #3f3f3f;
  font: inherit;
  font-size: 100%;
}
.description {
  font-family: 'Lora' !important;
  color: #9e9e9e;
  font: inherit;
  font-size: 100%;
}
.precio {
  @apply font-bold;
  font-family: 'Lora' !important;
  color: #ed2353;
  font-weight: 600;
}
</style>
