<template lang="html">
  <div class="home">
    <KCategory :dataStore="dataStore" class="stiky-Kcategory-wa" />
    <KProductList :dataStore="dataStore" :fullProducts="fullProducts" />
  </div>
</template>

<script>
import KCategory from '../../components/whatsapp/Ko-Categories-wa'
import KProductList from '../../components/whatsapp/Ko-ProductList-wa'

export default {
  layout: 'wa',
  components: {
    KProductList,
    KCategory,
  },
  data() {
    return {}
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
  },
}
</script>
<style>
.stiky-Kcategory-wa {
  position: sticky;
  top: 0;
}
</style>
