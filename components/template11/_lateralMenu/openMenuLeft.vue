<template>
  <transition name="fade z-50">
    <div class="order z-50" v-show="openMenuLeft">
      <div class="order_content z-50">
        <div class="order_header">
          <div class="empty"></div>
          <div class="header-content-logo">
            <nuxt-link to="/" class="wrapper-logo" id="tamaño-img">
              <img
                v-lazy="
                  `https://api2.komercia.co/logos/${dataStore.tienda.logo}`
                "
                class="header-logo"
                alt="Logo Img"
              />
            </nuxt-link>
          </div>
          <div class="close-container" @click="closed">
            <div class="leftright"></div>
            <div class="rightleft"></div>
          </div>
        </div>
        <div class="content-lateral-menu">
          <div class="conten-Menu" v-if="!focusbtn">
            <div
              class="header-content-buttons"
              v-if="this.settingByTemplate11[0].pages.values"
            >
              <div
                v-for="(item, index) in this.settingByTemplate11[0].pages
                  .values"
                :key="`${index}${item.displayName}`"
                @click="closed"
              >
                <nuxt-link
                  :to="item.url"
                  v-if="item.isExternalLink == false"
                  class="btn"
                >
                  {{ item.displayName }}
                </nuxt-link>
                <a
                  class="btn"
                  :href="item.url"
                  target="_blank"
                  rel="noreferrer noopener"
                  v-else
                >
                  {{ item.displayName }}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'KoMenuLeft',
  props: {
    dataStore: Object,
    settingByTemplate11: Array,
  },
  data() {
    return {
      selecttag: 1,
      activeNames: [],
      focusbtn: false,
      search: '',
      add: true,
      selectSubcategory: '',
      nameCategory: '',
      nameSubCategory: '',
      selectedSubcategories: [],
      toggleCategories: true,
      indexSelect: '',
      indexSelect2: '',
      getSubcategory: false,
    }
  },
  computed: {
    logoImg() {
      return this.$store.state.dataStore.tienda.logo
    },
    openMenuLeft() {
      return this.$store.state.openMenulateralLeft
    },
  },
  methods: {
    closed() {
      this.$store.commit('SET_OPENORDERMENULEFT', false)
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 6;
  transition: all 0.25s ease;
}
.order_content {
  position: absolute;
  left: 0px;
  max-width: 300px;
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  overflow: auto;
  box-sizing: border-box;
  padding-bottom: 10px;
  animation: dispatch 0.2s linear 1;
  overflow: hidden;
}
@keyframes dispatch {
  0% {
    left: -300px;
  }
  100% {
    left: 0px;
  }
}
.order_content > div {
  width: 100%;
  box-sizing: border-box;
  list-style: none;
}
.order_header {
  @apply grid grid-cols-3 gap-4;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid rgba(129, 129, 129, 0.2);
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  max-height: 60px;
  object-fit: contain;
  object-position: left;
}
.close-container {
  @apply relative h-50 cursor-pointer flex justify-center items-center;
}
.leftright {
  @apply h-4 w-30 absolute rounded-2 transform -rotate-45 transition-all ease-in duration-200;
}
.rightleft {
  @apply h-4 w-30 absolute rounded-2 transform rotate-45 transition-all ease-in duration-200;
}
.close-container:hover .leftright {
  @apply transform rotate-0 bg-black;
}
.close-container:hover .rightleft {
  @apply transform rotate-0 bg-black;
}
.leftright,
.rightleft {
  background-color: #2c2930;
}
.content-lateral-menu {
  @apply w-full flex flex-col justify-center items-center;
}
.btn-lateral-menu-right:focus .conten-Menu {
  @apply hidden;
}
.conten-Menu {
  @apply w-full flex flex-col justify-start items-center;
}
.header-content-buttons {
  @apply w-full grid grid-cols-1 justify-start items-center;
}
.btn {
  color: #191919;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  font-family: 'Roboto', sans-serif !important;
  @apply w-full h-50 flex justify-start items-center font-normal tracking-wider pl-10 uppercase;
  /* border-bottom: 1px solid #2c2930; */
}
.btn:hover {
  color: #767676;
}
@media (min-width: 1280px) {
  .order {
    @apply hidden;
  }
}
</style>
