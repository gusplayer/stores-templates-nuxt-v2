import Fuse from 'fuse.js'
export const state = () => ({
  type: '',
  payload: '',
  payloadTag: '',
  tags: [],
  fullProducts: [],
  options: {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    includeScore: false,
    keys: ['nombre'],
  },
})

export const getters = {
  filterProducts: (state, getters) => {
    if (state.type) {
      // primer nivel del filtro solo una opción
      if (state.type.length === 1) {
        if (state.type[0] === 'search') {
          let fuse = new Fuse(getters.allProduct, state.options).search(
            state.payload
          )
          let results = []
          fuse.forEach((items) => {
            results.push(items.item)
          })
          return results
        } else if (state.type[0] === 'subcategory') {
          return getters.allProduct.filter(
            (product) => product.subcategoria === state.payload
          )
        } else if (state.type[0] === 'category') {
          return getters.allProduct.filter(
            (product) => product.categoria === state.payload
          )
        } else if (state.type[0] === 'ShippingFree') {
          return getters.allProduct.filter((product) => {
            if (product.envio_gratis === 1) {
              return product
            }
          })
        } else if (state.type[0] === 'NoShippingFree') {
          return getters.allProduct.filter((product) => {
            if (product.envio_gratis === 0) {
              return product
            }
          })
        } else if (state.type[0] === 'higherNumber') {
          return getters.allProduct.sort(function (prev, next) {
            return next.precio - prev.precio
          })
        } else if (state.type[0] === 'smallerNumber') {
          return getters.allProduct.sort(function (prev, next) {
            return prev.precio - next.precio
          })
        } else if (state.type[0] === 'tag') {
          getters.allProduct.filter((product) => {
            if (product && product.tags && product.tags.length > 0) {
              return product.tags.filter((itemTag) => {
                return itemTag.properties.filter((itemTag) => {
                  if (itemTag.id === state.payloadTag) {
                    return product
                  }
                })
              })
            }
          })
        }
      }
      // segundo nivel del filtro con categoría o subcategoría
      else if (state.type.length === 2) {
        // category and subCategory
        let result
        if (state.type[0] === 'category') {
          result = getters.allProduct.filter(
            (product) => product.categoria === state.payload
          )
        } else if (state.type[0] === 'subcategory') {
          result = getters.allProduct.filter(
            (product) => product.subcategoria === state.payload
          )
        }
        // El resultado del filtro
        if (result) {
          if (result && state.type[1] === 'higherNumber') {
            return result.sort(function (prev, next) {
              return next.precio - prev.precio
            })
          } else if (result && state.type[1] === 'smallerNumber') {
            return result.sort(function (prev, next) {
              return prev.precio - next.precio
            })
          } else if (result && state.type[1] === 'NoShippingFree') {
            return result.filter((product) => {
              if (product.envio_gratis === 0) {
                return product
              }
            })
          } else if (result && state.type[1] === 'ShippingFree') {
            return result.filter((product) => {
              if (product.envio_gratis === 1) {
                return product
              }
            })
          }
        }
        // tag
      }
      // tercer nivel del filtro con categoría o subcategoría y una tag
    }
    return getters.allProduct
  },
  allProduct: (state) => {
    return state.fullProducts.sort(function (prev, next) {
      return next.orden - prev.orden
    })
  },
  filterTags: (state) => {
    return state.tags.sort(function (prev, next) {
      return next.order - prev.order
    })
  },
}
export const mutations = {
  // SET_FILTER: (state, query) => {
  // const { search, category, subcategory } = query
  // if (search && search.length) {
  //   state.type = 'search'
  //   state.payload = search
  // } else if (subcategory && subcategory.length) {
  //   state.type = 'subcategory'
  //   state.payload = subcategory
  // } else if (category && category.length) {
  //   state.type = 'category'
  //   state.payload = category
  // }
  // },
  FILTER_BY: (state, { type, data }) => {
    state.type = type
    state.payload = data
  },
}

export const actions = {}
