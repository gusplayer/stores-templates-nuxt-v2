<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-show="openSearch">
      <div class="order_content" @click="closeOrder">
        <!-- <div class="close-container" @click="closedSearch">
          <div class="content-close">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div> -->

        <div class="products-search">
          <div class="search-input-content">
            <form class="form-search z-50">
              <div class="cont-search-up">
                <p class="txt-search-up">{{ $t('home_buscar') }}</p>
              </div>
              <input
                v-model="searchProduct"
                type="search"
                :placeholder="$t('home_buscar')"
                required
                class="input-search"
                @change="setInformationFromQuery"
                @keyup.enter="setInformationFromQuery"
              />
              <i class="header-search-icon">
                <svg
                  class="search-header"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  xmlns:svgjs="http://svgjs.com/svgjs"
                  version="1.1"
                  width="12"
                  height="12"
                  fill="#666"
                  x="0"
                  y="0"
                  viewBox="0 0 512 512"
                  style="enable-background: new 0 0 512 512"
                  xml:space="preserve"
                >
                  <title>Search</title>
                  <g
                    transform="matrix(-1.8369701987210297e-16,-1,1,-1.8369701987210297e-16,9.536744585147972e-7,511.99998569488525)"
                  >
                    <path
                      d="M447.615,64.386C406.095,22.866,350.892,0,292.175,0s-113.92,22.866-155.439,64.386    C95.217,105.905,72.35,161.108,72.35,219.824c0,53.683,19.124,104.421,54.132,144.458L4.399,486.366    c-5.864,5.864-5.864,15.371,0,21.236C7.331,510.533,11.174,512,15.016,512s7.686-1.466,10.617-4.399l122.084-122.083    c40.037,35.007,90.775,54.132,144.458,54.132c58.718,0,113.919-22.866,155.439-64.386c41.519-41.519,64.385-96.722,64.385-155.439    S489.134,105.905,447.615,64.386z M426.379,354.029c-74.001,74-194.406,74-268.407,0c-74-74-74-194.407,0-268.407    c37.004-37.004,85.596-55.5,134.204-55.5c48.596,0,97.208,18.505,134.204,55.5C500.378,159.621,500.378,280.028,426.379,354.029z"
                    />
                  </g>
                </svg>
              </i>
            </form>
          </div>
          <!-- <div class="cont-btn">
            <button class="content-btn" @click="closedSearch">
              <span class="btn-txt">{{ $t('home_vamos') }}</span>
            </button>
          </div> -->
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoSearch10',
  props: {
    showMenu: Boolean,
  },
  computed: {
    ...mapState(['openSearch']),
    ...mapState({
      facebookPixel: (state) => state.analytics_tagmanager,
    }),
    searchProduct: {
      get() {
        return this.$store.state.products.search_product
      },
      set(newValue) {
        this.$store.commit('products/SET_SEARCH_PRODUCT', newValue)
      },
    },
  },
  methods: {
    closedSearch() {
      this.$store.commit('SET_OPEN_SEARCH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (element === 'order' || element === 'order_content') {
        this.$store.commit('SET_OPEN_SEARCH', false)
      }
    },
    async getSuggestedProducts() {
      this.setInformationFromQuery({ page: 1, name: this.searchProduct })
      this.getSearch(this.searchProduct)
    },
    async setInformationFromQuery({ page, name }) {
      const query = {}
      if (page !== null && page !== undefined) query.page = page
      if (name !== null) this.searchProduct = name
      try {
        this.$router.push({
          path: '/productos',
          query: { name: this.searchProduct },
        })
        this.closedSearch()
      } catch (error) {
        console.error('Error navigating:', error)
      }
    },
    getSearch(value) {
      if (value) {
        if (this.facebookPixel?.pixel_facebook != null) {
          window.fbq('track', 'Search', { search_string: value })
        }
      }
    },
  },
}
</script>

<style scoped>
.order {
  top: 0;
  left: 0;
  background-color: transparent;
  z-index: 15;
  @apply h-1 flex justify-end items-start fixed;
}
.order_content {
  background-color: var(--background_color_1);
  box-sizing: border-box;
  animation: dispatch 0.2s linear 1;
  @apply flex flex-col flex-none justify-center items-start overflow-hidden;
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
  max-width: 1400px;
  z-index: 10;
}
input[type='search'] {
  border: none;
  width: 100%;
}
.search-input-content {
  @apply w-auto flex flex-row justify-center items-center z-50;
  font-size: 12px;
  color: #666;
  font-weight: 400;
  padding-left: 10px;
  font-family: 'Poppins', sans-serif;
}
.input-search {
  @apply h-40 items-center z-50 pl-10;
}
::-webkit-input-placeholder {
  @apply w-full text-left items-center justify-center;
  font-size: 14px;
  font-weight: 400;
  color: #666;
  font-family: 'Poppins', sans-serif;
}
.form-search {
  @apply flex flex-row;
}
.form-search:focus .cont-search-up {
  display: flex;
}
.cont-search-up {
  display: none;
}
.txt-search-up {
  font-size: 14px;
  font-family: 'Poppins', sans-serif;
  font-weight: 300;
  margin-left: 5px;
  color: #666;
}
/* -----------------------BTN--------------------------- */
.cont-btn {
  @apply h-full flex flex-col justify-center items-center;
}
.content-btn {
  display: flex;
  justify-content: center;
  align-content: center;
  display: flex;
  justify-content: center;
  align-content: center;
  background-color: #2c2930;
}
.content-btn:hover {
  @apply shadow-lg;
  background-color: #edeaea;
}
.content-btn:hover .btn-txt {
  color: #2c2930;
}
.btn-txt {
  color: #fff;
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  font-size: 23px;
  font-weight: 800;
  /* padding-left: 60px;
  padding-right: 60px; */
}

/* ----------------------------------------------------- */
.close-container {
  @apply relative w-9/8 h-50 flex justify-end items-center;
}
.leftright {
  @apply h-2 w-20 absolute bg-black rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-2 w-20 absolute bg-black rounded-2 transform rotate-45 transition-all ease-in duration-200;
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
.header-search-icon {
  background-color: #fff;
  @apply flex justify-center items-center px-5;
}
.search-header:hover {
  fill: #eb7025;
  @apply cursor-pointer;
}
@screen sm {
  .products-search {
    @apply flex flex-col justify-end items-end;
  }
  /* .search-input-content {
    @apply w-7/0;
  } */
  .cont-btn {
    @apply w-7/0 h-auto;
  }
  .content-btn {
    @apply w-full;
    height: 48px;
  }
  .content-close {
    margin-right: 20px;
    margin-top: 20px;
  }
  .order_content {
    top: 125px;
    right: 0px;
    width: 185px;
    height: 40px;
    background-color: transparent;
    -webkit-box-shadow: 0px 4px 10px 1px #838383;
    box-shadow: 0px 4px 10px 1px #838383;
    @apply relative;
  }
  .order {
    @apply w-8/0;
  }
  .input-search {
    width: 165px;
  }
}
@media (min-width: 480px) {
  .products-search {
    @apply flex flex-row;
  }
  /* .search-input-content {
    @apply w-auto;
  } */
  .cont-btn {
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
  .search-input-content {
    @apply w-auto justify-end items-center;
  }
  .order_content {
    width: 250px;
  }
  .order {
    @apply w-9/0;
  }
  .input-search {
    width: 230px;
  }
}
@screen mlg {
  .order_content {
    top: 80px;
    max-width: 1350px;
    height: 40px;
    background-color: transparent;
    @apply relative;
  }
  .order {
    @apply w-9/4;
  }
  @media (min-width: 1400px) {
    .order {
      @apply w-full justify-center items-start;
    }
    .order_content {
      top: 80px;
      width: 250px;
      margin-left: 1050px;
      height: 40px;
      background-color: transparent;
      @apply relative;
    }
  }
}
</style>
