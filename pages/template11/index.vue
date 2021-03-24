<template>
  <div>
    <Kcarousel></Kcarousel>
    <Ksection></Ksection>
    <Ktrending :dataStore="dataStore" :fullProducts="fullProducts"></Ktrending>
    <Kparallax></Kparallax>
    <Ktrending :dataStore="dataStore" :fullProducts="fullProducts"></Ktrending>
    <Kblog :dataStore="dataStore" v-show="listArticulos.length > 0"></Kblog>
  </div>
</template>
<script>
import Kcarousel from '../../components/template11/ko-carousel'
import Ksection from '../../components/template10/ko-section'
import Ktrending from '../../components/template11/ko-trendingProduct'
import Kparallax from '../../components/template11/ko-parallax'
import Kblog from '../../components/template11/ko-blog'

export default {
  components: {
    Kcarousel,
    Ksection,
    Ktrending,
    Kparallax,
    Kblog,
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
    facebooPixel() {
      return this.$store.state.analytics_tagmanager.pixel_facebook
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12
      const final = initial + 12
      return this.filteredList.slice(initial, final)
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter((element) => {
          return element.titulo
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      } else {
        return this.listArticulos
      }
    },
  },
  methods: {
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.facebooPixel != null) {
          window.fbq('track', 'Search', { ValorBuscado: value })
        }
      } else {
        location.href = '?search=' + ''
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
<style></style>
