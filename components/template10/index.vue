<template>
  <div>
    <KbuttonCar></KbuttonCar>
    <Kcarousel></Kcarousel>
    <Ksection></Ksection>
    <Ktrending :dataStore="dataStore" :fullProducts="fullProducts"></Ktrending>
    <Kdeal></Kdeal>
    <Kfeatured :dataStore="dataStore" :fullProducts="fullProducts"></Kfeatured>
    <Kblog :dataStore="dataStore" v-show="listArticulos.length > 0"></Kblog>
  </div>
</template>
<script>
import KbuttonCar from '../../components/template10/buttonCar'
import Kcarousel from '../../components/template10/ko-carousel'
import Ksection from '../../components/template10/ko-section'
import Ktrending from '../../components/template10/ko-trending'
import Kdeal from '../../components/template10/ko-deals'
import Kfeatured from '../../components/template10/ko-featuredProducts'
import Kblog from '../../components/template10/ko-blog'

export default {
  components: {
    KbuttonCar,
    Kcarousel,
    Ksection,
    Ktrending,
    Kdeal,
    Kfeatured,
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
