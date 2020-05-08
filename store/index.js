export const strict = false
// import { database } from "~/plugins/firebase"
import axios from 'axios'
// import { stat } from "fs";

// const idStore = 605

export const state = () => ({
  urlHttp: 'https://api2.komercia.co',
  configHttp: {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer `,
      'Access-Control-Allow-Origin': '*',
    },
  },
  isLoading: false,
  authData: '',
  userData: {
    id: 0,
  },
  storeLayoutKey: '',
  storeLayout: {
    pages: [
      {
        name: 'Inicio',
        active: true,
        components: [],
        value: 'home',
        exception: ['products', 'carts'],
      },
      {
        name: 'Productos',
        active: true,
        components: [],
        value: 'products',
        exception: ['products', 'carts', 'contacts'],
      },
      {
        name: 'Detalle del producto',
        active: true,
        components: [],
        value: 'product_details',
        only: ['products'],
      },
      {
        name: 'Carrito',
        active: true,
        components: [],
        value: 'cart',
        only: ['carts'],
      },
      {
        name: 'Contacto',
        active: true,
        components: [],
        value: 'contact',
        only: ['contacts'],
      },
    ],
  },
  productsCart: [],
  totalCart: 0,
  selectedCard: 'koProductCard2',
  beforeCombination: [],
  togglePayment: false,
  envios: {
    valores: {
      envio_metodo: 'gratis',
      valor: 0,
    },
  },
  settingData: {},
  tienda: {},
  detalleProducto: {},
  banners: [],
  cities: [],
  productsData: [],
  categorias: [],
  subcategorias: [],
  geolocalizacion: [],
  openOrder: false,
  mediospago: {
    epayco: false,
  },
  politicas: {
    garantia: '',
    datos: '',
  },
  whatsapp: '',
  totalCart: 0,
  sections: null,
  components: null,
  dataStore: '',
  storesDB: '',
  views: [],
  settingsComponent: {},
  urlComponents: 'https://components.komercia.co',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjBmNGU1MTU2YjY5NmFlNDhmZmU2NGY5YzhhYTY3NTRlZmYyMDYzNzMzNDk2YTExZjU1MDYyZTc5YzM4MDNkNDk1MjE4ZDljMjcxOWYzMWFlIn0.eyJhdWQiOiIyIiwianRpIjoiMGY0ZTUxNTZiNjk2YWU0OGZmZTY0ZjljOGFhNjc1NGVmZjIwNjM3MzM0OTZhMTFmNTUwNjJlNzljMzgwM2Q0OTUyMThkOWMyNzE5ZjMxYWUiLCJpYXQiOjE1ODgwMDMzNTUsIm5iZiI6MTU4ODAwMzM1NSwiZXhwIjoxNTkwNTk1MzU1LCJzdWIiOiIzNDgwIiwic2NvcGVzIjpbXX0.joDsrhSiGk1f--aCnSYnL8NyaEem-Br8nUoxNniZOMxocHrbpmd8z2XppmCTe9dYDs4OjxQsJBu0aOOWVh_FfaneizUg2hLn0T_EiUhKGOYCA9GdsjMvBXSGkkcBSRe7ibCigApVN17t_pehbsBpixhFltqu7sRSluWtxsdHKIoIfAJdC4uY1vvHbNL6XmEGr1gU_-smDB2BBmBZ_G87I4TQtA_psDEus8hHBK6Zhw2F6H0sUzVlDXKA_fKnAoAdWPDM4_Z8GHukepicf_jlCvPwq6bgKQQBmQmWcOZl1dz6EmyTNUo50PGbwFYnsMO2KowY8w1bI5ErRFifkswKOTBQFXwGX8ZnA1aeprYfWaCOQO7r6HHV4DZ0TbFvgAbdx8rFqtSkdB8e_NKiJscEbtU2RczB5RmNZh_wKq2bFqoKyUqo1CEzhh1wdjOerpXXfoalRm8Gyn7aSzwf2M8q1R0rL6ZgpgtknvUEOcH5LZgIlI7Kg2KlAf_FTBNW9ufWylW3YLLYuL_Aex6ggtHf2m7S5dDlUT1J5DvyTaUuLIHWhrBh02o4I2-1Mcn5u3CzNTTOZJyKmD5cO5bfcEte7pB1hq_qHqZuN4C-TBuU5JYx-8l5O0myjknbFDsip68Y_D-i6zOuBIZJTQDT1fYOK58BwQqAasGfJmM89zl-MN4',
  accessToken: '',
  settingsByComponent: '',
  properties: '',
  errorSettingsByComponent: null,
  productInfo: '',
  urlKomercia: 'https://api2.komercia.co',
  urlTemplate: 'https://templates.komercia.co',
  configAxios: {
    headers: {
      'content-type': 'application/json',
      Authorization: '',
      'Access-Control-Allow-Origin': '*',
      Access: 'application/json',
    },
  },
  baseComponents: {},
  SettingsValues: {},
  valuesCSS: {},
  propertiesComponent: {},
  pagination: {},
})

export const mutations = {
  SET_ACCESSTOKEN(state, value) {
    state.accessToken = value
  },
  SET_SETTINGS_COMPONENT(state, value) {
    state.propertiesComponent = value
  },
  SET_VIEWS(state, value) {
    state.views = value
  },
  SET_PAGINATION(state, value) {
    state.pagination = value
  },
  DELETEITEMCART: (state, index) => {
    state.productsCart.splice(index, 1)
  },
  SET_SAVEOPTION: (state, payload) => {
    state.beforeCombination.splice(payload.index, 1, payload.option.option)
  },
  SET_DETALLEPRODUCTO: (state, payload) => {
    state.detalleProducto = payload
  },
  SET_BEFORECOMBINATION: (state) => {
    state.beforeCombination = []
  },
  SET_OPENORDER: (state, value) => {
    state.openOrder = value
  },
  SET_TOKEN(state, value) {
    state.configHttp = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${value || process.env.TOKEN}`,
        'Access-Control-Allow-Origin': '*',
      },
    }
  },
  SET_SHOPPING_CART(state, value) {
    state.productsCart = value || []
  },
  SET_DATA(state) {
    state.productsData = state.dataStore.productos.sort((a, b) => {
      if (a.nombre < b.nombre) return -1
      if (a.nombre > b.nombre) return 1
      return 0
    })
    state.productsData.map((product) => {
      if (product.variantes.length) {
        try {
          product.combinaciones = JSON.parse(
            product.variantes[0].combinaciones[0].combinaciones
          )
        } catch (err) {
          // console.warn(product.id)
        }
        if (product.combinaciones.length) {
          const arrPrices = product.combinaciones.map(
            (combinacion) => combinacion.precio
          )
          product.precio = Math.min(...arrPrices)
        }
        // product.variantes = product.variantes[0].variantes
      }
    })
    state.products.fullProducts = state.productsData
    state.categorias = state.dataStore.categorias
    state.subcategorias = state.dataStore.subcategorias
    state.geolocalizacion = state.dataStore.geolocalizacion
    state.mediospago = state.dataStore.medios_pago || {
      epayco: false,
    }
    state.politicas = state.dataStore.politicas || {
      garantia: '',
      datos: '',
    }
    state.tienda = state.dataStore.tienda
    state.envios = state.dataStore.medios_envio
    state.envios.valores = JSON.parse(
      JSON.stringify(state.dataStore.medios_envio.valores)
    )
    state.whatsapp = state.tienda.whatsapp
  },
  SET_LOADING(state, value) {
    state.isLoading = value
  },
  GET_USERDATA(state) {
    let headers = {
      'content-type': 'application/json',
      Authorization: `Bearer ${state.authData || ''}`,
      'Access-Control-Allow-Origin': '*',
      Accept: 'application/json',
    }
    axios({
      method: 'get',
      url: 'https://api2.komercia.co/api/user',
      headers,
    }).then((response) => {
      state.userData = response.data.data
    })
  },
  SET_FAVICON: (state) => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement('link')
    link.type = 'image/png'
    link.rel = 'icon'
    link.href = state.storeLayout.setting.faviconURL.url
    document.getElementsByTagName('head')[0].appendChild(link)
  },
  UPDATE_CONTENTCART(state) {
    state.totalCart = 0
    localStorage.setItem('ShoppingCart', JSON.stringify(state.productsCart))
    state.productsCart.forEach((product) => {
      state.totalCart += product.precio * product.cantidad
    })
  },
  CALCULATE_TOTALCART(state) {
    state.totalCart = 0
    state.productsCart.forEach((product) => {
      state.totalCart += product.precio * product.cantidad
    })
  },
  LOGOUT() {
    window.location.href = 'https://perfil.komercia.co/logout'
  },
  SELECT_CARD(state, value) {
    state.selectedCard = value
    // state.storeLayout.setting.card = value
  },
  SET_CITIES: (state, payload) => {
    state.cities = payload
  },
  SET_STORELAYOUT: (state) => {
    // const link = document.createElement('link')
    // link.href = `https://fonts.googleapis.com/css?family=${
    //   state.storeLayout.setting.font
    // }`
    // link.rel = 'stylesheet'
    // document.getElementsByTagName('head')[0].appendChild(link)
    // document.documentElement.style.fontFamily =
    //   state.storeLayout.setting.font
    // state.storeLayout.setting.colors.forEach(color => {
    //   document.documentElement.style.setProperty(color.var, color.hex)
    // })
    // document.documentElement.style.setProperty(
    //   '--opacity',
    //   state.storeLayout.setting.colors[2].hex + '20'
    // )
  },
  DATA: (state, response) => {
    state.dataStore = response.data
  },
  STOREDB: (state, { storeLayout, producto }) => {
    state.storeLayout = storeLayout.data
    state.detalleProducto = producto.data.detalle
  },
  SET_SETTINGS_BY_COMPONENT: (state, value) => {
    state.settingsByComponent = value
  },
  SET_PROPERTIES: (state, value) => {
    state.properties = value
  },
  SET_PRODUCT_INFO: (state, value) => {
    state.productInfo = value
  },
}
export const actions = {
  GET_LOGIN({ state, commit, dispatch }) {
    // const token = getCookie("authData");
    axios
      .post(
        `${state.urlComponents}/api/login`,
        { token: state.token },
        state.configAxios
      )
      .then(async (response) => {
        state.idStore = await response.data.store
        commit('SET_ACCESSTOKEN', await response.data.access_token)
        // dispatch("GET_TYPES_COMPONENTS");
        // dispatch("GET_COMPONENTS_BY_REFERENCE");
        dispatch('GET_VIEWS')
        // dispatch("GET_COMPONENTS_BASE");
        // dispatch("GET_DATASTORE");
      })
  },
  async nuxtServerInit({ commit, dispatch }, { req, route }) {
    let full = req.headers.host
    let parts = full.split('.')
    let subdomain = parts[0]
    // console.log(subdomain)

    const id = await axios.post(
      `https://api2.komercia.co/api/tienda/info/by/url`,
      { name: `${subdomain}.komercia.co/` }
    )
    await dispatch('GET_DATA_TIENDA_BY_ID', id.data.data.id)

    // console.log(route.path);

    const idSlug = route.path.split('-')
    // console.log(idSlug)

    const producto = await axios.get(
      // `https://templates.komercia.co/api/producto/bolso-refraction-sp-24812`
      `https://templates.komercia.co/api/producto/${idSlug.pop()}`
    )

    // const storeLayout = await axios.get(
    //   `https://komercia-2c50b.firebaseio.com/stores/${id.data.data.id}.json?auth=NbJcMDHW4Ueg4x67y5hHmxbZF3fhsyneVfQBpSFn`
    // )
    // commit('STOREDB', { storeLayout, producto })
    // commit('SELECT_CARD', storeLayout.data.setting.card || 'koProductCard1')
  },
  async GET_DATA_TIENDA_BY_ID({ commit }, idTienda) {
    const response = await axios.get(
      `https://templates.komercia.co/api/tienda/${idTienda}`
    )
    commit('DATA', response.data)
    commit('SET_DATA')
    // console.log(response.data)
  },
  GET_DATA({ commit }) {
    commit('SET_DATA')
  },
  GET_CITIES({ commit }) {
    this.$axios
      .$get(`https://api2.komercia.co/api/ciudades`)
      .then((response) => {
        commit('SET_CITIES', response.data)
      })
  },
  GET_STORELAYOUT({ commit, state }) {
    if (process.client) {
      const link = document.createElement('link')
      link.href = `https://fonts.googleapis.com/css?family=${state.storeLayout.setting.font}`
      link.rel = 'stylesheet'
      document.getElementsByTagName('head')[0].appendChild(link)
      document.documentElement.style.fontFamily = state.storeLayout.setting.font
      state.storeLayout.setting.colors.forEach((color) => {
        document.documentElement.style.setProperty(color.var, color.hex)
      })
      document.documentElement.style.setProperty(
        '--opacity',
        state.storeLayout.setting.colors[2].hex + '20'
      )
      commit('SET_FAVICON')
    }
  },
  GET_SETTINGS_COMPONENT({ state, commit, dispatch }, value) {
    axios
      .get(
        `${state.urlComponents}/api/components/settings/reference/${value}`,
        {
          headers: {
            Authorization: `Bearer ${state.accessToken}`,
          },
        }
      )
      .then((response) => {
        commit('SET_SETTINGS_COMPONENT', response.data.data)
        state.baseComponents = response.data.data
        if (state.baseComponents.settings_base.length) {
          if (state.baseComponents.component_type_id == 2) {
            state.SettingsValues = []
            let components = JSON.parse(
              state.baseComponents.settings_base[0].valores
            )
            state.SettingsValues.push({ ...components })
          } else {
            let components = JSON.parse(
              state.baseComponents.settings_base[0].valores
            )
            state.SettingsValues = components
          }
        } else {
          alert('No tiene settings')
        }
      })
      .catch((error) => {
        console.log(error)
      })
  },
  GET_VIEWS({ state, commit }) {
    axios
      .get(`${state.urlComponents}/api/views`, {
        headers: {
          Authorization: `Bearer ${state.accessToken}`,
        },
      })
      .then((response) => {
        commit('SET_VIEWS', response.data.data)
      })
  },
  GET_PAGINATION({ state, commit }, value) {
    state.pagination = value
    commit('SET_PAGINATION', state.pagination)
  },
  GET_SETTINGS_BY_COMPONENT({ state, commit }, id) {
    return axios
      .get(`${state.urlComponents}/api/components/type/${id}/settings`, {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        commit('SET_SETTINGS_BY_COMPONENT', response.data.data)
      })
      .catch((e) => {
        state.errorSettingsByComponent = e.response.data.mensaje
        commit('SET_SETTINGS_BY_COMPONENT', '')
      })
  },
  GET_PROPERTIES({ state, commit }) {
    axios
      .get(`${state.urlComponents}/api/components/properties/all`, {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        commit('SET_PROPERTIES', response.data.data)
      })
  },
  GET_SHOPPING_CART({ commit }) {
    if (localStorage.getItem('ShoppingCart')) {
      commit(
        'SET_SHOPPING_CART',
        JSON.parse(localStorage.getItem('ShoppingCart'))
      )
    }
  },
  GET_PRODUCT_INFO({ state, commit }, id) {
    axios
      .get(`${state.urlTempleate}/api/producto/${id}`, {
        headers: {
          'content-type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then((response) => {
        commit('SET_PRODUCT_INFO', response.data)
      })
  },
}
export const getters = {
  getSettingsCSS: (state, getters) => {
    if (state.SettingsValues.length) {
      state.valuesCSS = []
      state.SettingsValues.map((item) => {
        state.valuesCSS.push(getters.setSettingsCSS({ ...item }))
      })
      return state.valuesCSS
      // return getters.setSettingsCSS(state.valuesCSS)
    }
    // state.valuesCSS = {}
    state.valuesCSS = { ...state.SettingsValues }
    return getters.setSettingsCSS(state.valuesCSS)
  },
  setSettingsCSS: (state) => (obj) => {
    let keys = Object.keys(obj)
    if (obj) {
      keys.map((key) => {
        if (key !== `--${key}`) {
          Object.defineProperty(
            obj,
            `--${key}`,
            Object.getOwnPropertyDescriptor(obj, key)
          )
          delete obj[key]
        }
      })
      return obj
    } else {
      return 'Objecto invalido'
    }
  },
}
