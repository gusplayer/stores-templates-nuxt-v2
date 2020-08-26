<template lang="html">
  <div
    class="home"
    :style="
      this.$store.state.settingByTemplate &&
      this.$store.state.settingByTemplate['--background_color_1']
        ? this.$store.state.settingByTemplate
        : this.settingBase
    "
  >
    <div class="space-search"></div>
    <div class="search-movil" id="navbar">
      <form id="demo-1" style="width: 100%;">
        <input
          v-model="search"
          type="search"
          placeholder="¿Qué buscas?"
          @keyup.enter="getSearch(search)"
        />
      </form>
    </div>
    <kBanner :dataStore="dataStore" />
    <KProductFavoritos />
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KProductList>
    <kBannerFooter />
  </div>
</template>

<script>
import kBanner from '../../components/template5/ko-Banner-1'
import KProductFavoritos from '../../components/template5/Ko-ProductFavoritos-1'
import KProductList from '../../components/template6/Ko-ProductList-1'
import kBannerFooter from '../../components/template5/ko-BannerFooter-1'

export default {
  layout: 'default',
  components: {
    kBanner,
    KProductList,
    KProductFavoritos,
    kBannerFooter,
  },
  mounted() {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        document.getElementById('navbar').style.zIndex = '3'
        document.getElementById('navbar').style.top = '91px'
      } else {
        document.getElementById('navbar').style.zIndex = '0'
        document.getElementById('navbar').style.top = '52px'
      }
      prevScrollpos = currentScrollPos
    }
    let domain = this.$route.fullPath
    let search = domain.slice(0, [9])
    if (search === '/?search=') {
      this.setSearch(domain)
    }
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    template() {
      return this.$store.state.template
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    settingBase() {
      return this.$store.state.settingBase
    },
  },
  methods: {
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
      } else {
        location.href = '?search=' + ''
      }
    },
    setSearch(value) {
      let category = value.replace('/?search=', '')
      let UrlCategory = category.replace(/-/g, ' ')
      let urlFiltrada = decodeURIComponent(UrlCategory)
      this.search = urlFiltrada
    },
  },
  watch: {
    search(value) {
      this.Searchproduct(value)
    },
  },
}
</script>

<style></style>
