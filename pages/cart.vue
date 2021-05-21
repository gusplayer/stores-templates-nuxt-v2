<template lang="html">
  <div>
    <K05Cart :dataStore="dataStore" :cities="cities" />
  </div>
</template>
<script>
import K05Cart from '../components/cart/Ko-Cart'
export default {
  layout: 'default',
  name: 'ContentCart',
  components: {
    K05Cart,
  },
  mounted() {
    this.$store.dispatch('GET_CITIES')
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    cities() {
      return this.$store.state.cities
    },
  },
}
</script>
