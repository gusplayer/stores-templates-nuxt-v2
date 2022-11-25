<template lang="html">
  <div>
    <KCart :dataStore="dataStore" />
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
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
  },
}
</script>
