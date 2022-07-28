export default {
  methods: {
    // filtro categoria
    sendCategoryUrlMix(value) {
      let urlFiltrada = decodeURIComponent(value)
      this.$store.commit('products/FILTER_BY', {
        type: ['category'],
        data: urlFiltrada,
      })
      if (this.$store.getters['products/filterProducts'].length) {
        this.$store.commit('SET_CATEGORY_PRODUCTO', urlFiltrada)
      } else {
        this.$store.commit('SET_CATEGORY_PRODUCTO', '')
      }
    },
    // filtro subcategoria
    SendSubCategoryUrlMix(value, categories, subcategories) {
      let urlFiltradaTemp = decodeURIComponent(value)
      let resTemp = urlFiltradaTemp.split('^')
      let urlFiltrada = decodeURIComponent(resTemp[0])
      let filtradoSubCategories = subcategories.find((element) => {
        if (
          element.categoria == parseInt(resTemp[1]) &&
          element.nombre_subcategoria == urlFiltrada
        ) {
          return element
        }
      })
      if (filtradoSubCategories) {
        let filtradoCategories = categories.find(
          (element) => element.id == parseInt(resTemp[1])
        )
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: filtradoSubCategories.id,
        })
        if (this.$store.getters['products/filterProducts'].length) {
          this.$store.commit(
            'SET_CATEGORY_PRODUCTO',
            filtradoCategories.nombre_categoria_producto
          )
          this.$store.commit(
            'SET_SUBCATEGORY_PRODUCTO',
            filtradoSubCategories.nombre_subcategoria
          )
        } else {
          this.$store.commit('SET_CATEGORY_PRODUCTO', '')
          this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['subcategory'],
          data: '',
        })
      }
    },
    // filtro mayor o menor numero
    getProductsFilter(value, tag_id) {
      let type = this.$store.state.products.type
      let payload = this.$store.state.products.payload
      this.$store.state.products.payloadTag = tag_id ? tag_id : ''
      if (type && type.length >= 1) {
        if (type[0] == 'category' || type[0] == 'subcategory') {
          this.$store.commit('products/FILTER_BY', {
            type: [type[0], `${value}`],
            data: payload,
          })
        } else {
          this.$store.state.products.type = []
          this.$store.commit('products/FILTER_BY', {
            type: [`${value}`],
            data: '',
          })
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: [`${value}`],
          data: '',
        })
      }
      this.currentPage = 1
    },
    allCategories() {
      this.$store.commit('products/FILTER_BY', {
        type: 'all',
        data: '',
      })
      this.currentPage = 1
    },
    SearchProduct(search) {
      if (search.length) {
        this.search = search
        this.$router.push({
          path: '',
          query: { search: search },
        })
        this.$store.commit('products/FILTER_BY', {
          type: ['search'],
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: ['all'],
          data: '',
        })
      }
      this.currentPage = 1
    },
  },
}
