export default {
  methods: {
    // filtro etiqueta URL
    sendTagUrlMix(tag_id, tag_Name) {
      this.$store.commit('products/FILTER_BY', {
        type: ['tag'],
        data: '',
      })
      this.$store.state.products.payloadTag = parseInt(tag_id)
      this.$store.state.products.payloadTagName = tag_Name
    },
    // filtro categoría URL
    sendCategoryUrlMix(value) {
      this.$store.commit('SET_SUBCATEGORY_PRODUCTO', '')
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
    // filtro subcategoría URL
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
    // filtro categoría, subcategoría y etiqueta
    getProductsFilter(value, tag_id, tag_Name, Lateral) {
      let type = this.$store.state.products.type
      let payload = this.$store.state.products.payload
      if (type.length < 2) {
        this.$store.state.products.payloadTag = tag_id
          ? tag_id
          : this.$store.state.products.payloadTag
          ? this.$store.state.products.payloadTag
          : ''
        this.$store.state.products.payloadTagName = tag_Name
          ? tag_Name
          : this.$store.state.products.payloadTagName
          ? this.$store.state.products.payloadTagName
          : ''
      }
      if (type && type.length >= 1) {
        if (
          type[0] == 'category' ||
          type[0] == 'subcategory' ||
          type[0] == 'tag'
        ) {
          this.$store.commit('products/FILTER_BY', {
            type: [type[0], `${value}`],
            data: payload,
          })
        }
        if (type[0] == 'category' || type[0] == 'subcategory') {
          if (type[1] == 'tag') {
            this.$store.commit('products/FILTER_BY', {
              type: [type[0], type[1], `${value}`],
              data: payload,
            })
            this.$store.state.products.payloadTag2 = tag_id
              ? tag_id
              : this.$store.state.products.payloadTag2
              ? this.$store.state.products.payloadTag2
              : ''
            this.$store.state.products.payloadTag2Name = tag_Name
              ? tag_Name
              : this.$store.state.products.payloadTag2Name
              ? this.$store.state.products.payloadTag2Name
              : ''
          }
        } else {
          this.$store.state.products.type = []
          this.$store.commit('products/FILTER_BY', {
            type: [`${value}`],
            data: '',
          })
          this.setURlTag(tag_id, tag_Name)
        }
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: [`${value}`],
          data: '',
        })
        this.setURlTag(tag_id, tag_Name)
      }
      this.currentPage = 1
      if (Lateral === true) {
        this.$router.push({
          path: '/productos',
        })
        this.$store.commit('SET_OPENORDERMENULEFT', false)
      }
    },
    allCategories() {
      this.$store.commit('products/FILTER_BY', {
        type: ['all'],
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
    setURlTag(id, name) {
      if (this.$store.state.products.type[0] == 'tag') {
        this.$router.push({
          path: '',
          query: {},
        })
        this.$router.push({
          path: '',
          query: {
            tagId: id,
            tagName: name,
          },
        })
      }
    },
  },
}
