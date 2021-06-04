export const strict = false
import axios from 'axios'
import getCookie from '../utils/getCookie'
export const state = () => ({
  configHttp: {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer `,
      'Access-Control-Allow-Origin': '*',
    },
  },
  fullPathServer: '',
  authData: '',
  template: '',
  productsCart: [],
  beforeCombination: [],
  envios: {
    valores: {
      envio_metodo: 'gratis',
      valor: 0,
    },
  },
  cities: [],
  productsData: [],
  categorias: [],
  subcategorias: [],
  geolocalizacion: [],
  openOrder: false,
  openOrderValienta: false,
  openMenulateralRight: false,
  openMenulateralLeft: false,
  openSearch: false,
  stateBanner: true,
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
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI3MmU0ZDc1NmM2NDFjMGM5N2VlMTQzYjc1OTg3NDg1MDI3YzVjYzhhZDNiNTdjMTM1ZjFhNDY2MGIzMTExODMwMWIxYTcxYTk0MGRjYTcyIn0.eyJhdWQiOiIyIiwianRpIjoiMjcyZTRkNzU2YzY0MWMwYzk3ZWUxNDNiNzU5ODc0ODUwMjdjNWNjOGFkM2I1N2MxMzVmMWE0NjYwYjMxMTE4MzAxYjFhNzFhOTQwZGNhNzIiLCJpYXQiOjE1OTA1MTMyNTMsIm5iZiI6MTU5MDUxMzI1MywiZXhwIjoxNTkzMTA1MjUzLCJzdWIiOiIzNDgwIiwic2NvcGVzIjpbXX0.qbFxfGqpayFbPSXy01sygMXWq4fLTqLXpjeksrdT-Pxo9k129iWxFi3XnJ6uYh7LE6frYUMJNiETa3CWA5CJ2ebQk2UGx310sZl5H0Io1oz5KicwJUpq2OgwNLkjg0d_VcvRJTO5aT2gmnwPJbMuz_Y3OHbgFO5zCb2u1SqDSepnxEFl83iR-BKiJ7vESeZlUcHT-xR1SQQClmj4PnLhCeV5MRYFS-ui-TmImheJe8SoQLs-ly9cRTk1u-GYrLskL3yI0z9aOKi6UNXUoe4y8Ji3p8odfJk5ZinX7koXWrPqiBqp15Q2oE763gCnGPQeWE-Tz7QLJJSGeVGHe5xKawjGLRIK57MNG5QttFT5nYpwh1zQZ3jqY2v5JFM2wrLzOUOcAtvR48bFxBe-ea3NkBuLo7V0mJGjpng1rdeCPBV2NwQQTPqmgSAUrFZvX81T5cLfyNmyUVRmJnojelLoiKaaU2ASEBOGt1GFmtw5tbgeXjrFBlPzoWUCRKZyq9qdJyeKbTZbaTD7rewvGZCh9iyjt_Mey3l5-2CJE_csIInAEkFc9i07HrSFuv8pmVrfy1LEDoJwoik5pv39WlIrXtD8bc5maJ-smX8JDeAMMfFhNmjtcbWt1qDaiJYApVDSGPNe5Rw6Uu_bOWyPkKQjXPwbcOSRJT_OihlnCfe1z6M',
  accessToken: '',

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
  settingByTemplate: '',
  settingByTemplate7: '',
  settingByTemplate9: '',
  category_producto_header: '',
  subcategory_producto_header: '',
  analytics_tagmanager: '',
  dataCookies: false,
  searchValue: '',
  settingBase: {
    '--background_color_1': 'hsla(173, 0%, 100%, 1)',
    '--background_color_2': '#efefef',
    '--color_background_btn': '#000000',
    '--color_border': 'rgba(127, 127, 139, 0.342)',
    '--color_icon': '#25dac5',
    '--color_text': ' #000000',
    '--color_subtext': 'rgba(21, 20, 57, 0.541)',
    '--color_text_btn': '#ffffff',
  },
  previousPage: 1,
  layoutUnicentro: false,
  listDescuentos: [],
  listArticulos: [],
  getSettingsCSSNew: {
    '--color_text': '#1e0e62',
    '--color_subtext': 'rgba(21, 20, 57, 0.4)',
    '--color_hover_text': '#8918C8',
    '--color_icon': 'rgba(21, 20, 57, 0.4)',
    '--color_shopping_cart': '#4e33e6',
    '--color_border': '#929292',
    '--background_color_1': 'hsla(173, 0%, 100%, 1)',
    '--background_color_2': '#CFCFCF',
    '--color_text_btn': '#ffffff',
    '--color_border_btn': '#000000',
    '--color_background_btn': '#000000',
    '--color_background_btn_2': 'hsla(0, 0%, 0%, 1)',
    '--btnhover': '#e64956',
    '--radius_btn': '25px',
    '--logo_width': '120px',
    tabs: {
      1: 'Accesorios',
      2: 'Nosotros',
      3: 'Carrito',
      4: 'Contacto',
    },
    title: 'Accesorios para mujer hechos a mano',
    description:
      'Laura Pachecho es una emprendedora con años de experiencia creando accesorios de alta calidad.',
    text_btn: 'Conócenos',
  },
  modalpolitics05: false,
  stateWapiME: true,
  /////
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
})
export const mutations = {
  SET_CURRENTSETTING09(state, value) {
    if (value) {
      if (value.component) {
        switch (value.component) {
          case 'settingGeneral':
            state.settingByTemplate9.settingGeneral = value
            break
          case 'header':
            state.settingByTemplate9.header = value
            break
          case 'banner':
            state.settingByTemplate9.banner = value
            break
          case 'koffers':
            state.settingByTemplate9.koffers = value
            break
          case 'productList':
            state.settingByTemplate9.productList = value
            break
          case 'blog':
            state.settingByTemplate9.blog = value
            break
          case 'wrapper':
            state.settingByTemplate9.wrapper = value
            break
          case 'newsletter':
            state.settingByTemplate9.newsletter = value
            break
          case 'productListFilter':
            state.settingByTemplate9.productListFilter = value
            break
          case 'contact':
            state.settingByTemplate9.contact = value
            break
          case 'detailsProduct':
            state.settingByTemplate9.detailsProduct = value
            break
          case 'footer':
            state.settingByTemplate9.footer = value
            break
          case 'cardProduct':
            state.settingByTemplate9.cardProduct = value
            break
        }
      }
    }
  },
  SET_CURRENTSETTING07(state, value) {
    console.log('Template7', value)
  },
  SET_LAYOUTUNICENTRO(state, value) {
    state.layoutUnicentro = value
  },
  SET_PREVIOUSPAGE(state, value) {
    state.previousPage = value
  },
  SET_STATEBANNER(state, value) {
    state.stateBanner = value
  },
  SET_SEARCHVALUE(state, value) {
    state.searchValue = value
  },
  SET_ACCESSTOKEN(state, value) {
    state.accessToken = value
  },
  SET_CATEGORY_PRODCUTRO(state, value) {
    state.category_producto_header = value
  },
  SET_SUBCATEGORY_PRODCUTRO(state, value) {
    state.subcategory_producto_header = value
  },
  DELETEITEMCART: (state, index) => {
    state.productsCart.splice(index, 1)
  },
  DELETEALLITEMSCART: (state) => {
    state.productsCart = []
  },
  SET_OPENORDER: (state, value) => {
    state.openOrder = value
  },
  SET_OPENSEARCH: (state, value) => {
    state.openSearch = value
  },
  SET_OPENORDER_VALIENTA: (state, value) => {
    state.openOrderValienta = value
  },
  SET_OPENORDERMENURIGTH: (state, value) => {
    state.openMenulateralRight = value
  },
  SET_OPENORDERMENULEFT: (state, value) => {
    state.openMenulateralLeft = value
  },
  SET_ARTICLES(state, value) {
    state.listArticulos = value
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
        if (product.combinaciones.length && product.con_variante > 0) {
          const arrPrices = product.combinaciones.map(
            (combinacion) => combinacion.precio
          )
          product.precio = Math.min(...arrPrices)
        }
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
  SET_SHOPPING_CART(state, value) {
    state.productsCart = value || []
  },
  UPDATE_CONTENTCART(state) {
    state.totalCart = 0
    localStorage.setItem(
      `ShoppingCart/${state.dataStore.tienda.id_tienda}`,
      JSON.stringify(state.productsCart)
    )
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
  SET_CITIES: (state, payload) => {
    state.cities = payload
  },
  SET_SETTINGS_BY_TEMPLATE: (state, value) => {
    state.settingByTemplate = value
  },
  SET_SETTINGS_BY_TEMPLATE_7: (state, value) => {
    state.settingByTemplate7 = value
  },
  SET_SETTINGS_BY_TEMPLATE_9: (state, value) => {
    state.settingByTemplate9 = value
  },
  SET_STATE_WAPIME: (state, value) => {
    state.stateWapiME = value
  },
  SET_ANALITICS_TAGMANAGER: (state, value) => {
    state.analytics_tagmanager = value
  },
  DATA: (state, response) => {
    state.dataStore = response.data
  },
  SET_SERVER_PATH(state, value) {
    state.fullPathServer = value
  },
  SET_TEMPLATE_STORE(state, value) {
    state.template = value
  },
  /////////
  LOGOUT() {
    window.location.href = 'https://perfil.komercia.co/logout'
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
  SET_TOKEN(state, value) {
    state.configHttp = {
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${value || process.env.TOKEN}`,
        'Access-Control-Allow-Origin': '*',
      },
    }
  },
  SET_BEFORECOMBINATION: (state) => {
    state.beforeCombination = []
  },
  SET_SAVEOPTION: (state, payload) => {
    state.beforeCombination.splice(payload.index, 1, payload.option.option)
  },
  // STOREDB: (state, { storeLayout, producto }) => {
  //   state.storeLayout = storeLayout.data
  //   state.detalleProducto = producto.data.detalle
  // },
  // SET_FAVICON: (state) => {
  //   const link =
  //     document.querySelector("link[rel*='icon']") ||
  //     document.createElement('link')
  //   link.type = 'image/png'
  //   link.rel = 'icon'
  //   link.href = state.storeLayout.setting.faviconURL.url
  //   document.getElementsByTagName('head')[0].appendChild(link)
  // },
  // SET_SETTINGS_COMPONENT(state, value) {
  //   state.propertiesComponent = value
  // },
  // SET_VIEWS(state, value) {
  //   state.views = value
  // },
  // SET_PAGINATION(state, value) {
  //   state.pagination = value
  // },
  // SET_DETALLEPRODUCTO: (state, payload) => {
  //   state.detalleProducto = payload
  // },
  // SET_SETTINGS_BY_COMPONENT: (state, value) => {
  //   state.settingsByComponent = value
  // },
  // SET_PROPERTIES: (state, value) => {
  //   state.properties = value
  // },
  // SET_PRODUCT_INFO: (state, value) => {
  //   state.productInfo = value
  // },
}
export const actions = {
  // GET_LOGIN({ state, commit, dispatch }) {
  //   // const token = getCookie('authData')
  //   axios
  //     .post(
  //       `${state.urlComponents}/api/login`,
  //       { token: state.token },
  //       state.configAxios
  //     )
  //     .then(async (response) => {
  //       state.idStore = await response.data.store
  //       commit('SET_ACCESSTOKEN', await response.data.access_token)
  //       dispatch('GET_VIEWS')
  //     })
  // },
  GET_COOKIES({ state }) {
    const cookies = getCookie('authCookies')
    if (cookies == 1) {
      state.dataCookies = true
    }
  },
  async nuxtServerInit({ commit, dispatch, state }, { req, route }) {
    let full = req.headers.host
    let parts = full.split('.')
    let partsID = full.split(':')
    let subdomain = parts[0]
    let id = 0
    let idWapi = 0
    if (
      parts[0] == 'localhost:3000' ||
      parts[0] == 'wapi' ||
      parts[0] == 'valienta' ||
      partsID[1] == '3333'
    ) {
      let partsWapi = req.url.split('/')
      idWapi = partsWapi[2]
    } else if (
      parts[1] == 'komercia' ||
      parts[1] == 'localhost:3000' ||
      parts[1] == 'unicentrovillavicencio'
    ) {
      id = await axios.post(`https://api2.komercia.co/api/tienda/info/by/url`, {
        name: `${subdomain}.komercia.co/`,
      })
    } else {
      id = await axios.post(`https://api2.komercia.co/api/tienda/info/by/url`, {
        name: `https://${full}`,
      })
    }
    if (idWapi) {
      await dispatch('GET_DATA_TIENDA_BY_ID', idWapi)
      await dispatch('GET_TEMPLATE_STORE', 99)
      await dispatch('GET_ANALYTICS_TAGMANAGER', idWapi)
      await dispatch('GET_SETTINGS_BY_TEMPLATE_WAPI', idWapi)
      await commit('SET_STATE_WAPIME', true)
    } else {
      if (id && id.data.data && id.data.data.id) {
        await dispatch('GET_DATA_TIENDA_BY_ID', id.data.data.id)
        await dispatch('GET_TEMPLATE_STORE', id.data.data.template)
        await dispatch('GET_ANALYTICS_TAGMANAGER', id.data.data.id)
        await dispatch('GET_ARTICLES', id.data.data.id)
        if (id.data.data.template == 7) {
          if (state.dataStore && state.dataStore.tienda) {
            await dispatch('GET_SETTINGS_BY_TEMPLATE_7', state.dataStore.tienda)
          }
        } else if (id.data.data.template == 9) {
          if (state.dataStore && state.dataStore.tienda) {
            await dispatch('GET_SETTINGS_BY_TEMPLATE_9', state.dataStore.tienda)
          }
        } else if (
          id.data.data.template == 5 ||
          id.data.data.template == 6 ||
          id.data.data.template == 99
        ) {
          if (state.dataStore && state.dataStore.tienda) {
            await dispatch('GET_SETTINGS_BY_TEMPLATE', state.dataStore.tienda)
            await commit('SET_STATE_WAPIME', false)
          }
        }
      }
    }
    if (state.dataStore) {
      // await dispatch('GET_DATAVALIENTA')
      await dispatch('GET_SERVER_PATH', full)
    }
    // const idSlug = route.path.split('-')
    // const producto = await axios.get(
    //   `https://templates.komercia.co/api/producto/${idSlug.pop()}`
    // )
  },
  GET_SERVER_PATH({ commit }, value) {
    commit('SET_SERVER_PATH', value)
  },
  GET_TEMPLATE_STORE({ commit }, value) {
    commit('SET_TEMPLATE_STORE', value)
  },
  async GET_DATA_TIENDA_BY_ID({ commit }, idTienda) {
    const response = await axios.get(
      `https://templates.komercia.co/api/tienda/${idTienda}`
    )
    commit('DATA', response.data)
    commit('SET_DATA')
  },
  GET_DATA({ commit }) {
    commit('SET_DATA')
  },
  GET_CITIES({ commit }) {
    axios.get(`https://api2.komercia.co/api/ciudades`).then((response) => {
      commit('SET_CITIES', response.data.data)
    })
  },
  async GET_SETTINGS_BY_TEMPLATE({ commit }, store) {
    let template = store.template
    await axios
      .get(
        `https://api2.komercia.co/api/template/${template}/settings/${store.id_tienda}`
      )
      .then((response) => {
        commit('SET_SETTINGS_BY_TEMPLATE', response.data.data)
      })
  },
  async GET_SETTINGS_BY_TEMPLATE_7({ commit }, store) {
    const response = await axios.get(
      `https://node.komercia.co/template7?id=${store.id_tienda}`
    )
    commit('SET_SETTINGS_BY_TEMPLATE_7', response.data.body)
  },
  async GET_SETTINGS_BY_TEMPLATE_9({ commit }, store) {
    const response = await axios.get(
      `https://node.komercia.co/template9?id=${store.id_tienda}`
    )
    commit('SET_SETTINGS_BY_TEMPLATE_9', response.data.body)
  },
  async GET_SETTINGS_BY_TEMPLATE_WAPI({ commit, state }, idWapi) {
    let template = state.template ? state.template : 99
    await axios
      .get(
        `https://api2.komercia.co/api/template/${template}/settings/${idWapi}`
      )
      .then((response) => {
        commit('SET_SETTINGS_BY_TEMPLATE', response.data.data)
      })
  },
  async GET_ANALYTICS_TAGMANAGER({ commit }, id) {
    const response = await axios.get(
      `https://api2.komercia.co/api/apis/tienda/${id}`
    )
    commit('SET_ANALITICS_TAGMANAGER', response.data.data)
  },
  GET_SHOPPING_CART({ state, commit }) {
    if (
      localStorage.getItem(`ShoppingCart/${state.dataStore.tienda.id_tienda}`)
    ) {
      commit(
        'SET_SHOPPING_CART',
        JSON.parse(
          localStorage.getItem(
            `ShoppingCart/${state.dataStore.tienda.id_tienda}`
          )
        )
      )
    }
  },
  GET_DESCUENTOS({ state }) {
    axios
      .get(
        `${state.urlKomercia}/api/descuentos/${state.dataStore.tienda.id_tienda}?page=1`,
        state.configAxios
      )
      .then((response) => {
        state.listDescuentos = response.data.descuentos.data.sort(function (
          prev,
          next
        ) {
          return prev.cantidad_productos - next.cantidad_productos
        })
      })
  },
  async GET_ARTICLES({ state, commit }, id) {
    const response = await axios.get(
      `${state.urlKomercia}/api/blogs/${id}?page=1`,
      state.configAxios
    )
    commit('SET_ARTICLES', response.data.blogs.data)
  },
  // async GET_DATAVALIENTA({ state, commit }) {
  //   const response = await axios.get(
  //     `https://gateway-service-api.prod.valienta.co/company-service-api/store/product`
  //   )
  //   console.log(response.data)
  //   // commit('SET_DATAVALIENTA', response.data.blogs.data)
  // },
  // GET_STORELAYOUT({ commit, state }) {
  //   if (process.client) {
  //     const link = document.createElement('link')
  //     link.href = `https://fonts.googleapis.com/css?family=${state.storeLayout.setting.font}`
  //     link.rel = 'stylesheet'
  //     document.getElementsByTagName('head')[0].appendChild(link)
  //     document.documentElement.style.fontFamily = state.storeLayout.setting.font
  //     state.storeLayout.setting.colors.forEach((color) => {
  //       document.documentElement.style.setProperty(color.var, color.hex)
  //     })
  //     document.documentElement.style.setProperty(
  //       '--opacity',
  //       state.storeLayout.setting.colors[2].hex + '20'
  //     )
  //     commit('SET_FAVICON')
  //   }
  // },
  // GET_SETTINGS_COMPONENT({ state, commit }, value) {
  //   axios
  //     .get(
  //       `${state.urlComponents}/api/components/settings/reference/${value}`,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${state.accessToken}`,
  //         },
  //       }
  //     )
  //     .then((response) => {
  //       commit('SET_SETTINGS_COMPONENT', response.data.data)
  //       state.baseComponents = response.data.data
  //       if (state.baseComponents.settings_base.length) {
  //         if (state.baseComponents.component_type_id == 2) {
  //           state.SettingsValues = []
  //           let components = JSON.parse(
  //             state.baseComponents.settings_base[0].valores
  //           )
  //           state.SettingsValues.push({ ...components })
  //         } else {
  //           let components = JSON.parse(
  //             state.baseComponents.settings_base[0].valores
  //           )
  //           state.SettingsValues = components
  //         }
  //       } else {
  //         alert('No tiene settings')
  //       }
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  // },
  // GET_VIEWS({ state, commit }) {
  //   axios
  //     .get(`${state.urlComponents}/api/views`, {
  //       headers: {
  //         Authorization: `Bearer ${state.accessToken}`,
  //       },
  //     })
  //     .then((response) => {
  //       commit('SET_VIEWS', response.data.data)
  //     })
  // },
  // GET_PAGINATION({ state, commit }, value) {
  //   state.pagination = value
  //   commit('SET_PAGINATION', state.pagination)
  // },
  // GET_SETTINGS_BY_COMPONENT({ state, commit }, id) {
  //   return axios
  //     .get(`${state.urlComponents}/api/components/type/${id}/settings`, {
  //       headers: {
  //         'content-type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .then((response) => {
  //       commit('SET_SETTINGS_BY_COMPONENT', response.data.data)
  //     })
  //     .catch((e) => {
  //       state.errorSettingsByComponent = e.response.data.mensaje
  //       commit('SET_SETTINGS_BY_COMPONENT', '')
  //     })
  // },
  // GET_PROPERTIES({ state, commit }) {
  //   axios
  //     .get(`${state.urlComponents}/api/components/properties/all`, {
  //       headers: {
  //         'content-type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .then((response) => {
  //       commit('SET_PROPERTIES', response.data.data)
  //     })
  // },
  // GET_PRODUCT_INFO({ state, commit }, id) {
  //   axios
  //     .get(`${state.urlTemplate}/api/producto/${id}`, {
  //       headers: {
  //         'content-type': 'application/json',
  //         'Access-Control-Allow-Origin': '*',
  //       },
  //     })
  //     .then((response) => {
  //       commit('SET_PRODUCT_INFO', response.data)
  //     })
  // },
}
export const getters = {
  // getSettingsCSS: (state, getters) => {
  //   if (state.SettingsValues.length) {
  //     state.valuesCSS = []
  //     state.SettingsValues.map((item) => {
  //       state.valuesCSS.push(getters.setSettingsCSS({ ...item }))
  //     })
  //     return state.valuesCSS
  //     // return getters.setSettingsCSS(state.valuesCSS)
  //   }
  //   // state.valuesCSS = {}
  //   state.valuesCSS = { ...state.SettingsValues }
  //   return getters.setSettingsCSS(state.valuesCSS)
  // },
  // setSettingsCSS: () => (obj) => {
  //   let keys = Object.keys(obj)
  //   if (obj) {
  //     keys.map((key) => {
  //       if (key !== `--${key}`) {
  //         Object.defineProperty(
  //           obj,
  //           `--${key}`,
  //           Object.getOwnPropertyDescriptor(obj, key)
  //         )
  //         delete obj[key]
  //       }
  //     })
  //     return obj
  //   } else {
  //     return 'Objecto invalido'
  //   }
  // },
}
