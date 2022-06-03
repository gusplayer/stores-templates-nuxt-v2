<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-if="openSearch">
      <div class="order_content">
        <div class="close-container" @click="closedSearch">
          <div class="content-close">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <div class="products-search">
          <div class="search-input-content">
            <form class="form-search">
              <div class="cont-search-up">
                <p class="txt-search-up">{{ $t('home_buscar') }}</p>
              </div>
              <input
                type="search "
                :placeholder="$t('home_buscar')"
                v-model="search"
                class="input-search"
              />
            </form>
          </div>
          <div class="cont-btn">
            <button class="content-btn" @click="closedSearch">
              <span class="btn-txt">{{ $t('home_buscar') }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Ko-SearchWa',
  data() {
    return {
      search: '',
    }
  },
  computed: {
    openSearch() {
      return this.$store.state.openSearch
    },
  },
  methods: {
    closedSearch() {
      this.$store.commit('SET_OPENSEARCH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (element === 'order') {
        this.$store.commit('SET_OPENSEARCH', false)
      }
    },
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
      if (this.facebooPixel && this.facebooPixel.pixel_facebook != null) {
        window.fbq('track', 'Search', { value: search })
      }
    },
  },
  watch: {
    search(value) {
      this.Searchproduct(value)
    },
  },
}
</script>

<style scoped>
.order {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-end;
  background-color: rgba(0, 0, 0, 0.185);
  z-index: 15;
}
.order_content {
  position: absolute;
  top: 0px;
  width: 100%;
  height: 150px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    top: -300px;
  }
  100% {
    top: 0px;
  }
}
.products-search {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  width: 100%;
  height: 100%;
  max-width: 900px;
  z-index: 10;
}
input[type='search'] {
  border: none;
  width: 100%;
}
.search-input-content {
  @apply w-full flex flex-row justify-start items-center z-20;
  font-size: 25px;
  color: #000;
  font-weight: 800;
}
.input-search {
  border-bottom: 1px solid black;
  @apply w-full items-center z-10;
}
::-webkit-input-placeholder {
  @apply text-left items-center;
  font-size: 25px;
  font-weight: 800;
  color: #000;
  padding-left: 5px;
}
.form-search:focus .cont-search-up {
  display: flex;
}
.cont-search-up {
  @apply -mt-4;
  display: none;
}
.txt-search-up {
  font-size: 25px;
  font-weight: 800;
  margin-left: 10px;
  color: #2c2930;
}
.cont-btn {
  @apply h-full flex flex-col justify-center items-center;
}
.content-btn {
  display: flex;
  justify-content: center;
  align-content: center;
  max-height: 37px;
  border-radius: 5px;
  background-color: #2c2930;
}
.content-btn:hover {
  @apply shadow-lg;
  background-color: #edeaea;
}
.btn-txt {
  font-size: 16px;
  font-weight: 800;
  color: #edeaea;
}
.content-btn:hover .btn-txt {
  color: #2c2930;
}
.close-container {
  width: 100%;
  max-width: 900px;
  @apply relative h-50 flex justify-end items-center;
}
.leftright {
  background: #000;
  @apply h-2 w-20 absolute rounded-2 transform -rotate-45 transition-all ease-in-out duration-300;
}
.rightleft {
  background: #000;
  @apply h-2 w-20 absolute rounded-2 transform rotate-45 transition-all ease-in-out duration-300;
}
.content-close {
  @apply flex justify-center items-center cursor-pointer;
  width: 20px;
  height: 20px;
}
.content-close:hover .leftright {
  @apply transform rotate-0;
}
.content-close:hover .rightleft {
  @apply transform rotate-0;
}
@screen sm {
  .products-search {
    @apply w-full flex flex-col justify-items-center items-center;
  }
  .search-input-content {
    @apply w-8/0;
  }
  .cont-btn {
    margin-top: 10px;
    @apply w-8/0 h-auto;
  }
  .content-btn {
    @apply w-full;
    height: 48px;
  }
  .content-close {
    margin-right: 20px;
    margin-top: 20px;
  }
}
@media (min-width: 480px) {
  .products-search {
    @apply flex flex-row;
  }
  .search-input-content {
    @apply w-auto;
  }
  .cont-btn {
    margin-top: 0px;
    @apply w-auto h-auto;
  }
  .content-btn {
    width: 80px;
    height: 48px;
  }
}
@media (min-width: 640px) {
  .content-btn {
    width: 180px;
  }
}
@screen md {
  .products-search {
    @apply -mt-6;
  }
  .search-input-content {
    @apply w-6/0;
  }
}
@screen xl {
  .search-input-content {
    @apply w-7/0;
  }
}
@screen xml {
  .search-input-content {
    @apply w-8/0;
  }
}
</style>
