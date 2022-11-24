<template>
  <transition name="fade">
    <div class="order" @click="closeOrder" v-if="openSearch">
      <div class="order_content">
        <div class="close-container" @click="closedSearch">
          <div class="content-close">
            <div
              class="leftright"
              :style="`background: ${
                settingByTemplate && settingByTemplate.color_primario
                  ? settingByTemplate.color_primario
                  : '#25D366'
              };`"
            ></div>
            <div
              class="rightleft"
              :style="`background: ${
                settingByTemplate && settingByTemplate.color_primario
                  ? settingByTemplate.color_primario
                  : '#25D366'
              };`"
            ></div>
          </div>
        </div>
        <form class="products-search" onsubmit="return false">
          <div class="search-input-content">
            <div class="form-search">
              <div class="cont-search-up">
                <p class="txt-search-up">{{ $t('home_buscar') }}</p>
              </div>
              <input
                id="myInput"
                type="search "
                :placeholder="$t('home_buscar')"
                v-model="search"
                class="input-search"
              />
              <!-- onkeypress="return (event.charCode != 13)" -->
            </div>
          </div>
          <div class="cont-btn">
            <button
              class="content-btn"
              :style="`background: ${
                settingByTemplate && settingByTemplate.color_primario
                  ? settingByTemplate.color_primario
                  : '#25D366'
              };`"
              @click="closedSearch"
              type="submit"
            >
              <span
                class="btn-txt"
                :style="`color:${
                  settingByTemplate && settingByTemplate.color_secundario
                    ? settingByTemplate.color_secundario
                    : '#FFFFFF'
                };`"
              >
                {{ $t('home_vamos') }}
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'Ko-SearchWa-2',
  props: {
    settingByTemplate: Object,
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    ...mapState(['openSearch']),
  },
  methods: {
    closedSearch() {
      this.$store.commit('SET_OPEN_SEARCH', false)
    },
    closeOrder(event) {
      const element = event.target.className
      if (element === 'order') {
        this.$store.commit('SET_OPEN_SEARCH', false)
      }
    },
    SearchProduct(search) {
      this.$store.commit('SET_SEARCH_VALUE', search)
      if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
        window.fbq('track', 'Search', { value: search })
      }
      this.$router.push({
        path: '',
        query: { search: search },
      })
    },
  },
  watch: {
    search(value) {
      this.SearchProduct(value)
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
}
.content-btn:hover {
  @apply shadow-lg;
  background-color: #edeaea;
}
.btn-txt {
  font-size: 16px;
  font-weight: 800;
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
  @apply h-2 w-20 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-2 w-20 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
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
