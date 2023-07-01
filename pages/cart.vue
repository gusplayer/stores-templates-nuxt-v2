<template>
  <KCart :dataStore="dataStore" />
</template>
<script>
export default {
  layout: 'default',
  name: 'ContentCart',
  components: {
    KCart: () => import('../components/cart/Ko-Cart'),
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
  },
}
</script>
