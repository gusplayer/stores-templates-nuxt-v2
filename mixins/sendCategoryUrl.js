export default {
  methods: {
    sendCategoryUrl(value) {
      let urlFiltrada = decodeURIComponent(value)
      this.$store.commit('products/FILTER_BY', {
        type: 'category',
        data: urlFiltrada,
      })
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODCUTRO', urlFiltrada)
      } else {
        this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
      }
    },
  },
}
