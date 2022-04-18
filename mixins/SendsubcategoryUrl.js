export default {
  methods: {
    SendsubcategoryUrl(value, categorias, subcategories) {
      let urlFiltradaTemp = decodeURIComponent(value)
      let resTemp = urlFiltradaTemp.split('^')
      let urlFiltrada = decodeURIComponent(resTemp[0])
      let filtradoSubCategoria = subcategories.find((element) => {
        if (
          element.categoria == parseInt(resTemp[1]) &&
          element.nombre_subcategoria == urlFiltrada
        ) {
          return element
        }
      })
      if (filtradoSubCategoria) {
        let filtradoCategorias = categorias.find(
          (element) => element.id == parseInt(resTemp[1])
        )
        this.$store.commit('products/FILTER_BY', {
          type: 'subcategory',
          data: filtradoSubCategoria.id,
        })
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit(
            'SET_CATEGORY_PRODCUTRO',
            filtradoCategorias.nombre_categoria_producto
          )
          this.$store.commit(
            'SET_SUBCATEGORY_PRODCUTRO',
            filtradoSubCategoria.nombre_subcategoria
          )
        } else {
          this.$store.commit('SET_CATEGORY_PRODCUTRO', '')
          this.$store.commit('SET_SUBCATEGORY_PRODCUTRO', '')
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: 'subcategory',
          data: '',
        })
      }
    },
  },
}
