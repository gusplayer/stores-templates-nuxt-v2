<template lang="html">
  <div>
    <KCart :dataStore="dataStore" :cities="cities" />
  </div>
</template>
<script>
import KCart from '../components/cart/Ko-Cart'
export default {
  layout: 'default',
  name: 'ContentCart',
  components: {
    KCart,
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
