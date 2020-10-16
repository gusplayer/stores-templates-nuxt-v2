export const strict = false
// import { database } from "~/plugins/firebase"
import axios from 'axios'
// import { stat } from "fs";

// const idStore = 605
import getCookie from '../utils/getCookie'

export const state = () => ({
  configHttp: {
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer `,
      'Access-Control-Allow-Origin': '*',
    },
  },
  isLoading: false,
  fullPathServer: '',
  authData: '',
  template: '',
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
  openMenulateralRight: false,
  openMenulateralLeft: false,
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
  settingByTemplate: '',
  settingByTemplateWapi: '',
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
  articles: [
    {
      id: 1,
      titulo: 'How to create a personal freelance brand',
      photo: 'https://blog.hotmart.com/blog/2017/09/criar-um-blog-670x419.png',
      autor: 'Miguel',
      resumen:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem commodi sunt laborum modi. Placeat obcaecati ex exercitationem saepe similique minus eum. Dolorem dignissimos incidunt nulla labore tempora autem deserunt explicabo.',
      contenido:
        '<h1>Articulo prueba</h1><p><br></p><p>You have been dreaming of becoming your own boss for years and now you have finally taken the leap of faith. You are a freelancer! Being a freelancer doesn’t mean that all you need to do is build a regular client base and bill your hours.</p><p><br></p><p>Every brand has something unique that makes it what it is. That thing is personality and in the case of a freelancer,&nbsp;<em>you</em>&nbsp;are the personality of the brand. There has never been a better time to start owning who you truly are and begin to celebrate it.Be real, be authentic and take the risk to express in writing who you think you really are. The best way to do this is to write a free-association essay in the first person. By using the words,&nbsp;<em>I am,</em>&nbsp;you are affirming who you are to yourself. Next, think of your eulogy.Seriously! A legacy is what we leave behind when we are gone. It’s what pops into mind when people think of us. What other people think when they interact with you as your business is very important to how they feel about your business and what you are offering.</p>',
      fecha_creacion: '22/09/2020',
      slug: 'Blog-numero-uno',
    },
    {
      id: 2,
      titulo: 'Segundo Blog',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPQ5gB912M2i2LM1CPd4sUPB1DXpcVMj846Q&usqp=CAU',
      autor: 'Juan',
      resumen:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem commodi sunt laborum modi. Placeat obcaecati ex exercitationem saepe similique minus eum. Dolorem dignissimos incidunt nulla labore tempora autem deserunt explicabo.',
      contenido:
        '<h1>Articulo prueba</h1><p><br></p><p>You have been dreaming of becoming your own boss for years and now you have finally taken the leap of faith. You are a freelancer! Being a freelancer doesn’t mean that all you need to do is build a regular client base and bill your hours.</p><p><br></p><p>Every brand has something unique that makes it what it is. That thing is personality and in the case of a freelancer,&nbsp;<em>you</em>&nbsp;are the personality of the brand. There has never been a better time to start owning who you truly are and begin to celebrate it.Be real, be authentic and take the risk to express in writing who you think you really are. The best way to do this is to write a free-association essay in the first person. By using the words,&nbsp;<em>I am,</em>&nbsp;you are affirming who you are to yourself. Next, think of your eulogy.Seriously! A legacy is what we leave behind when we are gone. It’s what pops into mind when people think of us. What other people think when they interact with you as your business is very important to how they feel about your business and what you are offering.</p>',
      fecha_creacion: '22/10/2020',
      slug: 'Blog-numero-dos',
    },
    {
      id: 3,
      titulo: 'How to create a personal freelance brand',
      photo: 'https://blog.hotmart.com/blog/2017/09/criar-um-blog-670x419.png',
      autor: 'Miguel',
      resumen:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem commodi sunt laborum modi. Placeat obcaecati ex exercitationem saepe similique minus eum. Dolorem dignissimos incidunt nulla labore tempora autem deserunt explicabo.',
      contenido:
        '<h1>Articulo prueba</h1><p><br></p><p>You have been dreaming of becoming your own boss for years and now you have finally taken the leap of faith. You are a freelancer! Being a freelancer doesn’t mean that all you need to do is build a regular client base and bill your hours.</p><p><br></p><p>Every brand has something unique that makes it what it is. That thing is personality and in the case of a freelancer,&nbsp;<em>you</em>&nbsp;are the personality of the brand. There has never been a better time to start owning who you truly are and begin to celebrate it.Be real, be authentic and take the risk to express in writing who you think you really are. The best way to do this is to write a free-association essay in the first person. By using the words,&nbsp;<em>I am,</em>&nbsp;you are affirming who you are to yourself. Next, think of your eulogy.Seriously! A legacy is what we leave behind when we are gone. It’s what pops into mind when people think of us. What other people think when they interact with you as your business is very important to how they feel about your business and what you are offering.</p>',
      fecha_creacion: '22/09/2020',
      slug: 'Blog-numero-uno',
    },
    {
      id: 4,
      titulo: 'Segundo Blog',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPQ5gB912M2i2LM1CPd4sUPB1DXpcVMj846Q&usqp=CAU',
      autor: 'Juan',
      resumen:
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem commodi sunt laborum modi. Placeat obcaecati ex exercitationem saepe similique minus eum. Dolorem dignissimos incidunt nulla labore tempora autem deserunt explicabo.',
      contenido:
        '<h1>Articulo prueba</h1><p><br></p><p>You have been dreaming of becoming your own boss for years and now you have finally taken the leap of faith. You are a freelancer! Being a freelancer doesn’t mean that all you need to do is build a regular client base and bill your hours.</p><p><br></p><p>Every brand has something unique that makes it what it is. That thing is personality and in the case of a freelancer,&nbsp;<em>you</em>&nbsp;are the personality of the brand. There has never been a better time to start owning who you truly are and begin to celebrate it.Be real, be authentic and take the risk to express in writing who you think you really are. The best way to do this is to write a free-association essay in the first person. By using the words,&nbsp;<em>I am,</em>&nbsp;you are affirming who you are to yourself. Next, think of your eulogy.Seriously! A legacy is what we leave behind when we are gone. It’s what pops into mind when people think of us. What other people think when they interact with you as your business is very important to how they feel about your business and what you are offering.</p>',
      fecha_creacion: '22/10/2020',
      slug: 'Blog-numero-dos',
    },
  ],
  layoutUnicentro: false,
})

export const mutations = {
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
  SET_SETTINGS_COMPONENT(state, value) {
    state.propertiesComponent = value
  },
  SET_VIEWS(state, value) {
    state.views = value
  },
  SET_PAGINATION(state, value) {
    state.pagination = value
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
  SET_OPENORDERMENURIGTH: (state, value) => {
    state.openMenulateralRight = value
  },
  SET_OPENORDERMENULEFT: (state, value) => {
    state.openMenulateralLeft = value
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
  // UPDATE_CONTENTCART(state) {
  //   state.totalCart = 0
  //   localStorage.setItem('ShoppingCart', JSON.stringify(state.productsCart))
  //   state.productsCart.forEach((product) => {
  //     state.totalCart += product.precio * product.cantidad
  //   })
  // },
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
  SET_SETTINGS_BY_TEMPLATE: (state, value) => {
    state.settingByTemplate = value
  },
  SET_SETTINGS_BY_TEMPLATE_WAPI: (state, value) => {
    state.settingByTemplateWapi = value
  },
  SET_ANALITICS_TAGMANAGER: (state, value) => {
    state.analytics_tagmanager = value
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
  SET_SERVER_PATH(state, value) {
    state.fullPathServer = value
  },
  SET_TEMPLATE_STORE(state, value) {
    state.template = value
    // state.template = 7
  },
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
  async nuxtServerInit({ dispatch, state }, { req, route }) {
    let full = req.headers.host
    let parts = full.split('.')
    let subdomain = parts[0]
    let id = 0
    let idWapi = 0

    if (parts[0] == 'localhost:3000' || parts[0] == 'wapi') {
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
    } else {
      await dispatch('GET_DATA_TIENDA_BY_ID', id.data.data.id)
      await dispatch('GET_TEMPLATE_STORE', id.data.data.template)
      await dispatch('GET_ANALYTICS_TAGMANAGER', id.data.data.id)
    }
    await dispatch('GET_SERVER_PATH', full)
    await dispatch('GET_SETTINGS_BY_TEMPLATE', state.dataStore.tienda)
    const idSlug = route.path.split('-')
    const producto = await axios.get(
      `https://templates.komercia.co/api/producto/${idSlug.pop()}`
    )
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
  GET_SETTINGS_BY_TEMPLATE({ commit }, store) {
    let template = store.template
    let id = store.id_tienda
    this.$axios
      .$get(`https://api2.komercia.co/api/template/${template}/settings/${id}`)
      .then((response) => {
        commit('SET_SETTINGS_BY_TEMPLATE', response.data)
      })
  },
  GET_SETTINGS_BY_TEMPLATE_WAPI({ commit }, idWapi) {
    let template = 99
    this.$axios
      .$get(
        `https://api2.komercia.co/api/template/${template}/settings/${idWapi}`
      )
      .then((response) => {
        commit('SET_SETTINGS_BY_TEMPLATE_WAPI', response.data)
      })
  },
  GET_ANALYTICS_TAGMANAGER({ commit }, id) {
    this.$axios
      .$get(`https://api2.komercia.co/api/apis/tienda/${id}`)
      .then((response) => {
        commit('SET_ANALITICS_TAGMANAGER', response.data)
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
  GET_SETTINGS_COMPONENT({ state, commit }, value) {
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
  // GET_SHOPPING_CART({ commit }) {
  //   if (localStorage.getItem('ShoppingCart')) {
  //     commit(
  //       'SET_SHOPPING_CART',
  //       JSON.parse(localStorage.getItem('ShoppingCart'))
  //     )
  //   }
  // },
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
  setSettingsCSS: () => (obj) => {
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
