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
  watch: {},
}
</script>
<style></style>
