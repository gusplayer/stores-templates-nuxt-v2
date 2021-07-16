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
import Ksection from '../../components/template11/ko-section'
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
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
  },
}
</script>
