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
  openMenuLateralRight: false,
  openMenuLateralLeft: false,
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
  dataStore: '',
  token:
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjI3MmU0ZDc1NmM2NDFjMGM5N2VlMTQzYjc1OTg3NDg1MDI3YzVjYzhhZDNiNTdjMTM1ZjFhNDY2MGIzMTExODMwMWIxYTcxYTk0MGRjYTcyIn0.eyJhdWQiOiIyIiwianRpIjoiMjcyZTRkNzU2YzY0MWMwYzk3ZWUxNDNiNzU5ODc0ODUwMjdjNWNjOGFkM2I1N2MxMzVmMWE0NjYwYjMxMTE4MzAxYjFhNzFhOTQwZGNhNzIiLCJpYXQiOjE1OTA1MTMyNTMsIm5iZiI6MTU5MDUxMzI1MywiZXhwIjoxNTkzMTA1MjUzLCJzdWIiOiIzNDgwIiwic2NvcGVzIjpbXX0.qbFxfGqpayFbPSXy01sygMXWq4fLTqLXpjeksrdT-Pxo9k129iWxFi3XnJ6uYh7LE6frYUMJNiETa3CWA5CJ2ebQk2UGx310sZl5H0Io1oz5KicwJUpq2OgwNLkjg0d_VcvRJTO5aT2gmnwPJbMuz_Y3OHbgFO5zCb2u1SqDSepnxEFl83iR-BKiJ7vESeZlUcHT-xR1SQQClmj4PnLhCeV5MRYFS-ui-TmImheJe8SoQLs-ly9cRTk1u-GYrLskL3yI0z9aOKi6UNXUoe4y8Ji3p8odfJk5ZinX7koXWrPqiBqp15Q2oE763gCnGPQeWE-Tz7QLJJSGeVGHe5xKawjGLRIK57MNG5QttFT5nYpwh1zQZ3jqY2v5JFM2wrLzOUOcAtvR48bFxBe-ea3NkBuLo7V0mJGjpng1rdeCPBV2NwQQTPqmgSAUrFZvX81T5cLfyNmyUVRmJnojelLoiKaaU2ASEBOGt1GFmtw5tbgeXjrFBlPzoWUCRKZyq9qdJyeKbTZbaTD7rewvGZCh9iyjt_Mey3l5-2CJE_csIInAEkFc9i07HrSFuv8pmVrfy1LEDoJwoik5pv39WlIrXtD8bc5maJ-smX8JDeAMMfFhNmjtcbWt1qDaiJYApVDSGPNe5Rw6Uu_bOWyPkKQjXPwbcOSRJT_OihlnCfe1z6M',
  accessToken: '',
  urlKomercia: 'https://api2.komercia.co',
  urlKomerciaV3: 'https://api3.komercia.co',
  urlNodeSettings: 'https://node.komercia.co',
  urlTemplate: 'https://templates.komercia.co',
  urlComponents: 'https://components.komercia.co',
  urlAWSsettings: 'https://tp2qtsmpza.us-east-2.awsapprunner.com',
  configAxios: {
    headers: {
      'content-type': 'application/json',
      Authorization: '',
      'Access-Control-Allow-Origin': '*',
      Access: 'application/json',
    },
  },
  settingByTemplate: '',
  settingByTemplate7: '',
  settingByTemplate9: '',
  settingByTemplate10: '',
  settingByTemplate11: '',
  settingByTemplate12: '',
  settingByTemplate13: '',
  settingByTemplate14: '',
  settingByTemplate15: '',
  settingByTemplate16: '',
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
  modalpolitics05: false,
  modalproductDetails: false,
  stateWapiME: true,
  settingBaseWapir: {
    color_icon: '#25d3652c',
    color_primario: '#25D366',
    color_secundario: 'white',
    descripcion: '',
    estilo_categorias: 1,
    estilo_productos: 1,
    logo_cuadrado: 1,
    mensaje_principal: '',
    pago_online: 1,
    tema: 1,
    watermark: 0,
  },
  dataHoko: {},
  producthoko: [],
  stateModalPwd: true,
  formOrdenWhatsAPP: false,
  tempInfo: '',
})
export const mutations = {
  SET_CURRENTSETTING5(state, value) {
    if (value && value.data) {
      state.settingByTemplate = value.data
    }
  },
  SET_CURRENTSETTING07: (state, value) =>
    setCurrentSetting(state, { ...value, template: '7' }),
  SET_CURRENTSETTING09: (state, value) =>
    setCurrentSetting(state, { ...value, template: '9' }),
  SET_CURRENTSETTING10: (state, value) =>
    setCurrentSetting(state, { ...value, template: '10' }),
  SET_CURRENTSETTING11: (state, value) =>
    setCurrentSetting(state, { ...value, template: '11' }),
  SET_CURRENTSETTING12(state, value) {
    if (value && value.data) {
      state.settingByTemplate12 = value.data
    }
  },
  SET_CURRENTSETTING13: (state, value) =>
    setCurrentSetting(state, { ...value, template: '13' }),
  SET_CURRENTSETTING14: (state, value) =>
    setCurrentSetting(state, { ...value, template: '14' }),
  SET_CURRENTSETTING15: (state, value) =>
    setCurrentSetting(state, { ...value, template: '15' }),
  SET_CURRENTSETTING16: (state, value) =>
    setCurrentSetting(state, { ...value, template: '16' }),
  SET_CURRENT_SETTING_MODAL(state, value) {
    if (value && value.data) {
      state.dataStore.modal = value.data
    }
  },
  SET_CURRENTSETTING99: (state, value) => {
    if (value && value.setting) {
      state.settingByTemplate = value.setting
    }
  },
  SET_LAYOUTUNICENTRO(state, value) {
    state.layoutUnicentro = value
  },
  SET_PREVIOUS_PAGE(state, value) {
    state.previousPage = value
  },
  SET_STATE_BANNER(state, value) {
    state.stateBanner = value
  },
  SET_SEARCH_VALUE(state, value) {
    state.searchValue = value
  },
  SET_ACCESSTOKEN(state, value) {
    state.accessToken = value
  },
  SET_CATEGORY_PRODUCTO(state, value) {
    state.category_producto_header = value
  },
  SET_SUBCATEGORY_PRODUCTO(state, value) {
    state.subcategory_producto_header = value
  },
  DELETEITEMCART: (state, index) => {
    state.productsCart.splice(index, 1)
  },
  DELETE_ALL_ITEMS_CART: (state) => {
    state.productsCart = []
  },
  SET_OPEN_ORDER: (state, value) => {
    state.openOrder = value
  },
  SET_OPEN_SEARCH: (state, value) => {
    state.openSearch = value
  },
  SET_OPENORDER_VALIENTA: (state, value) => {
    state.openOrderValienta = value
  },
  SET_OPEN_ORDER_MENU_RIGHT: (state, value) => {
    state.openMenuLateralRight = value
  },
  SET_OPEN_ORDER_MENU_LEFT: (state, value) => {
    state.openMenuLateralLeft = value
  },
  SET_ARTICLES(state, value) {
    state.listArticulos = value
  },
  SET_DATA(state) {
    state.products.tags =
      state.dataStore && state.dataStore.tags ? state.dataStore.tags : []
    state.categorias = state.dataStore.categorias.sort(function (prev, next) {
      return next.orden - prev.orden
    })
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
  UPDATE_CONTENT_CART(state) {
    state.totalCart = 0
    localStorage.setItem(
      `ShoppingCart/${state.dataStore.tienda.id_tienda}`,
      JSON.stringify(state.productsCart)
    )
    state.productsCart.forEach((product) => {
      state.totalCart += product.precio * product.cantidad
    })
  },
  CALCULATE_TOTAL_CART(state) {
    state.totalCart = 0
    state.productsCart.forEach((product) => {
      state.totalCart += product.precio * product.cantidad
    })
  },
  SET_CITIES: (state, payload) => {
    state.cities = payload
  },
  SET_SETTINGS_BY_TEMPLATE: (state, { templateNumber, value }) => {
    if (templateNumber === 5 || templateNumber === 99) {
      state.settingByTemplate = value
    } else {
      const statePropertyName = `settingByTemplate${templateNumber}`
      state[statePropertyName] = value
    }
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
      url: `${state.urlKomercia}/api/user`,
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
  SET_DATA_HOKO(state, data) {
    state.dataHoko = data
  },
  SET_STATE_MODAL_PWD(state, data) {
    state.stateModalPwd = data
  },
  SET_STATE_FORM_MODAL_WHATS_APP(state, data) {
    state.formOrdenWhatsAPP = data
  },
  SET_INFO(state, data) {
    state.tempInfo = data
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
  async GET_COOKIES_PWD({ state, commit, dispatch }) {
    const cookies = getCookie('authPwd')
    if (
      state.dataStore &&
      state.dataStore.modal &&
      state.dataStore.modal.stateModal == 1 &&
      state.dataStore.modal.password
    ) {
      if (cookies) {
        const { success } = await dispatch('GET_ACCESS_CODE', {
          id_tienda: state.dataStore.tienda.id_tienda,
          pwd: cookies,
        })
        if (success) {
          commit('SET_STATE_MODAL_PWD', true)
        } else {
          if (cookies == state.dataStore.modal.password) {
            commit('SET_STATE_MODAL_PWD', true)
          }
        }
      }
    }
  },
  async nuxtServerInit({ commit, dispatch, state }, { req }) {
    const { subdomain, id, template, idWapi } = await getIdData(
      state,
      req,
      commit
    )
    // let idWapi = ''
    // let id = {
    //   data: {
    //     data: {
    //       id: 14513,
    //       template: 13,
    //     },
    //   },
    // }

    if (idWapi) {
      await handleWapi(commit, dispatch, idWapi)
    } else {
      await handleKomercia(id, template, commit, dispatch)
    }

    await handleDataStore(state, commit)

    const param = {
      url: req.headers.host,
      parts: req.headers.host.split('.'),
      subdomain,
      id,
      dataStore: state.dataStore ? state.dataStore : null,
    }
    commit('SET_INFO', param)
  },
  GET_SERVER_PATH({ commit }, value) {
    commit('SET_SERVER_PATH', value)
  },
  // GET_TEMPLATE_STORE({ commit }, value) {
  //   commit('SET_TEMPLATE_STORE', value)
  // },
  async GET_DATA_TIENDA_BY_ID({ state, commit, dispatch }, idTienda) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlTemplate}/api/tienda/${idTienda}`,
      })
      if (data && data.estado == 200) {
        // dispatch('GET_ALL_PRODUCTS', data.data.tienda.id_tienda)
        await dispatch('GET_ANALYTICS_TAGMANAGER', data.data.tienda.id_tienda)
        await dispatch('GET_ARTICLES', data.data.tienda.id_tienda)
        commit('DATA', data)
        commit('SET_DATA')
      }
    } catch (err) {
      console.log('Data store', err.response)
    }
  },
  GET_DATA({ commit }) {
    commit('SET_DATA')
  },
  async GET_CITIES({ commit, state }) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/ciudades`,
      })
      if (data) {
        commit('SET_CITIES', data.data)
        localStorage.setItem('storeCities', JSON.stringify(state.cities))
        return { success: true, data: data }
      }
    } catch (err) {
      console.log('Data cities', err.response)
    }
  },
  async GET_ALL_PRODUCTS({ state }, id_tienda) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlTemplate}/api/productos/${id_tienda}`,
        headers: state.configAxios,
      })
      if (data) {
        state.productsData = data.sort((a, b) => {
          if (a.nombre < b.nombre) return -1
          if (a.nombre > b.nombre) return 1
          return 0
        })
        state.productsData.map((product) => {
          if (product.variantes.length) {
            try {
              if (
                product.variantes[0].combinaciones[0].combinaciones &&
                product.variantes[0].combinaciones[0].combinaciones !== 'Array'
              ) {
                product.combinaciones = JSON.parse(
                  product.variantes[0].combinaciones[0].combinaciones
                )
              }
            } catch (err) {
              console.warn('Error producto especifico', product.id)
            }
            if (
              product.combinaciones &&
              product.combinaciones.length &&
              product.con_variante > 0
            ) {
              const arrPrices = product.combinaciones.map(
                (combinacion) => combinacion.precio
              )
              product.precio = Math.min(...arrPrices)
            }
          }
        })
        state.products.fullProducts = state.productsData
          ? state.productsData
          : []
      }
    } catch (err) {
      console.log('All products store', err.response)
    }
  },
  async GET_SETTINGS_BY_TEMPLATE(
    { commit, state },
    { idStore, templateStore }
  ) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/template/${templateStore}/settings/${idStore}`,
      })
      if (data) {
        commit(`SET_SETTINGS_BY_TEMPLATE`, {
          templateNumber: templateStore,
          value: data.data,
        })
      }
    } catch (err) {
      console.log('Data setting Laravel', err.response)
    }
  },
  async GET_SETTINGS_BY_TEMPLATE_NODE(
    { commit, state },
    { idStore, templateStore }
  ) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlNodeSettings}/template${templateStore}?id=${idStore}`,
      })
      if (data) {
        commit(`SET_SETTINGS_BY_TEMPLATE`, {
          templateNumber: templateStore,
          value: data.body,
        })
      }
    } catch (err) {
      console.log('Data setting NODE', err.response)
    }
  },
  // async GET_SETTINGS_BY_TEMPLATE_AWS(
  //   { commit, state },
  //   { templateStore, subdominio }
  // ) {

  //   try {
  //     const { data } = await axios({
  //       method: 'GET',
  //       url: `${state.urlAWSsettings}/api/v1/templates/websites/template?criteria=${subdominio}`,
  //     })
  //     console.log(data)
  //     if (data) {
  //       commit(`SET_SETTINGS_BY_TEMPLATE`, {
  //         templateNumber: templateStore,
  //         value: data.data.webSiteTemplate,
  //       })
  //     }
  //   } catch (err) {
  //     console.log('Data setting NODE', err.response)
  //   }
  // },
  async GET_SETTINGS_BY_TEMPLATE_WAPI({ commit, state }, idWapi) {
    let template = state.template ? state.template : 99
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/template/${template}/settings/${idWapi}`,
      })
      if (data) {
        commit(`SET_SETTINGS_BY_TEMPLATE`, {
          templateNumber: template,
          value: data.data,
        })
      }
    } catch (err) {
      console.log('Data setting wapi', err.response)
    }
  },
  async GET_ANALYTICS_TAGMANAGER({ commit, state }, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/apis/tienda/${id}`,
      })
      if (data) {
        commit('SET_ANALITICS_TAGMANAGER', data.data)
      }
    } catch (err) {
      console.log('Data integraciones', err.response)
    }
  },
  async GET_DESCUENTOS({ state }) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/descuentos/${state.dataStore.tienda.id_tienda}?page=1`,
        headers: state.configAxios,
      })
      if (data) {
        state.listDescuentos = data.descuentos.data.sort(function (prev, next) {
          return prev.cantidad_productos - next.cantidad_productos
        })
      }
    } catch (err) {
      console.log('Data descuentos', err.response)
    }
  },
  async GET_ARTICLES({ state, commit }, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/blogs/${id}?page=1`,
        headers: state.configAxios,
      })
      if (data) {
        commit('SET_ARTICLES', data.blogs.data)
      }
    } catch (err) {
      console.log('Data blog tienda', err.response)
    }
  },
  async GET_DATA_ARTICLE({ state }, params) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/blog/${params.idStore}/${params.idBlog}`,
        headers: state.configAxios,
      })
      if (data) {
        return { success: true, data: data }
      }
    } catch (err) {
      console.log('Data articulo tienda', err.response)
    }
  },
  async GET_DATA_HOKO({ dispatch, commit, state }, id) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/hoko/${id}`,
      })
      if (data.data) {
        dispatch('GET_PRODUCTSHOKO', 1)
        commit('SET_DATA_HOKO', data.data)
      } else {
        console.log('No tiene Hoko registrado')
      }
    } catch (err) {
      console.log('Data hoko', err.response)
    }
  },
  async GET_PRODUCTSHOKO({ state }, id) {
    if (state.dataHoko && state.dataHoko.token) {
      try {
        const { data } = await axios({
          method: 'GET',
          url: `https://hoko.com.co/api/member/myproducts?page=${id}`,
          headers: {
            'content-type': 'multipart/form-data',
            Authorization: `Bearer ${state.dataHoko.token}`,
            'Access-Control-Allow-Origin': '*',
          },
        })
        if (data) {
          state.producthoko = data
        }
      } catch (err) {
        console.log('Listado prodcutos Hoko', err.response)
      }
    }
  },
  async GET_ACCESS_CODE({ state, commit }, params) {
    try {
      const { data } = await axios({
        method: 'GET',
        url: `${state.urlKomercia}/api/access-code/${params.id_tienda}?code=${params.pwd}`,
        headers: state.configAxios,
      })
      if (data && data.code && data.estado === 200) {
        commit('SET_STATE_MODAL_PWD', true)
        return { success: true, data: data }
      } else {
        return { success: false, data: null }
      }
    } catch (err) {
      console.error('Ocurrió un error al realizar la solicitud:', err)
      return { success: false, data: null }
    }
  },
  GET_SHOPPING_CART({ state, commit, dispatch }) {
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
    dispatch('VERIFY_PRODUCTS')
  },
  async VERIFY_PRODUCTS({ state, commit }) {
    let idProducts = state.productsCart.map((a) => a.id.toString())
    if (idProducts.length == 1) {
      idProducts = [idProducts]
    }
    let data = {
      id_tienda: state.dataStore.tienda.id_tienda,
      ids: idProducts,
    }
    const response = await axios.post(
      `${state.urlKomercia}/api/ids/por/productos`,
      data,
      state.configAxios
    )
    let productServer = response.data.data
    let merged = []
    for (let i = 0; i < productServer.length; i++) {
      merged.push({
        ...state.productsCart[i],
        ...productServer[i],
      })
    }
    const productsFinal = merged.map((product) => {
      if (product.con_variante && product.variantes && product.variantes[0]) {
        let variantesConSplit =
          product.variantes[0].combinaciones[0].combinaciones
        variantesConSplit = variantesConSplit.toString().slice(1, -1)
        let arrayObtain = JSON.parse('[' + variantesConSplit + ']')
        let filterCombination = arrayObtain.filter((item) => {
          if (item.combinacion.toString() == product.combinacion.toString()) {
            return item
          }
        })
        const newProduct = {
          cantidad: product.cantidad,
          combinacion: filterCombination[0].combinacion,
          envio_gratis: product.envio_gratis,
          foto_cloudinary: product.foto_cloudinary,
          id: product.id,
          limitQuantity: parseInt(filterCombination[0].unidades),
          nombre: product.nombre,
          precio: filterCombination[0].precio,
          promocion_valor: product.promocion_valor,
          tag_promocion: product.tag_promocion,
          activo: product.activo,
          stock_disponible: 1,
          dropshipping: product.dropshipping,
        }
        if (!filterCombination[0].estado) {
          newProduct.activo = 0
        }
        if (filterCombination[0].unidades == 0) {
          newProduct.activo = 0
        } else {
          if (newProduct.cantidad > newProduct.limitQuantity) {
            newProduct.stock_disponible = 0
          }
        }
        return newProduct
      } else {
        const newProduct = {
          cantidad: product.cantidad,
          // combinacion: filterCombination[0].combinacion,
          envio_gratis: product.envio_gratis,
          foto_cloudinary: product.foto_cloudinary,
          id: product.id,
          limitQuantity: product.informacion_producto[0].inventario,
          nombre: product.nombre,
          precio: product.precio,
          promocion_valor: product.promocion_valor,
          tag_promocion: product.tag_promocion,
          activo: product.activo,
          stock_disponible: 1,
          dropshipping: product.dropshipping,
        }
        if (newProduct.cantidad == 0) {
          newProduct.activo = 0
        } else {
          if (newProduct.cantidad > newProduct.limitQuantity) {
            newProduct.stock_disponible = 0
          } else if (newProduct.cantidad <= newProduct.limitQuantity) {
            newProduct.stock_disponible = 1
          }
        }
        return newProduct
      }
    })
    commit('SET_SHOPPING_CART', productsFinal)
    // commit('UPDATE_CONTENT_CART', 1)
  },
  SEND_ADD_TO_CART({ state, getters }, value) {
    let eventFacebook = ''
    if (value === 1) {
      eventFacebook = 'AddToCart'
    } else if (value === 2) {
      eventFacebook = 'InitiateCheckout'
    }
    if (eventFacebook) {
      let array = []
      let content = []
      if (state.productsCart && state.productsCart.length > 0) {
        if (
          state.analytics_tagmanager &&
          state.analytics_tagmanager.pixel_facebook != null
        ) {
          state.productsCart.map((element) => {
            if (element) {
              array.push(`${element.id}`)
              let temp = {
                id: `${element.id}`,
                quantity: element.cantidad,
              }
              content.push(temp)
            }
          })
          if (array && content) {
            window.fbq('track', eventFacebook, {
              content_type: 'product',
              content_ids: array,
              contents: content,
              currency: state.dataStore.tienda.moneda,
              value: getters.total ? getters.total : 0,
              num_items: getters.cantidadProductos,
              description: 'Productos agregados al carrito',
            })
          }
          this.$gtm.push({ event: eventFacebook })
        } else {
          // console.log('no tiene pixel')
        }
      } else {
        // console.log('no tiene productos en el carrito')
      }
    }
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
  subtotalCart(state) {
    return state.totalCart
  },
  cantidadProductos(state) {
    let cantidadProductos = 0
    if (state.productsCart) {
      state.productsCart.filter((value) => {
        cantidadProductos += parseInt(value.cantidad)
      })
    }
    return cantidadProductos
  },
  listaDescuentosProductos(state, getters) {
    if (state.listDescuentos) {
      let resultDesc
      state.listDescuentos.filter((element) => {
        if (element.tipo == 0 && element.estado == 1) {
          if (getters.cantidadProductos >= element.cantidad_productos) {
            resultDesc = element
          }
        }
      })
      if (resultDesc) {
        if (resultDesc.opcion == 1) {
          let data = {
            cantidad: resultDesc.cantidad_productos,
            valor: resultDesc.valor_descuento,
            tipo: resultDesc.opcion,
          }
          return data
        } else if (resultDesc.opcion == 0) {
          let data = {
            cantidad: resultDesc.cantidad_productos,
            valor: resultDesc.porcentaje_descuento,
            tipo: resultDesc.opcion,
          }
          return data
        }
      } else {
        return ''
      }
    }
  },
  listaDescuentosPrecio(state) {
    if (state.listDescuentos) {
      let resultDesc
      state.listDescuentos.filter((element) => {
        if (element.tipo == 1 && element.estado == 1) {
          let rangosByDisconunt = JSON.parse(element.rangos_precios)
          if (rangosByDisconunt) {
            rangosByDisconunt.find((rango) => {
              if (
                state.totalCart >= rango['inicial'] &&
                state.totalCart <= rango['final']
              ) {
                resultDesc = rango
              }
            })
          }
        }
      })
      return resultDesc ? resultDesc : ''
    }
  },
  total(state, getters) {
    if (getters.subtotalCart) {
      return getters.subtotalCart
    } else {
      return 0
    }
  },
  verifyProducts(state) {
    let resutlVerify = []
    if (state.productsCart) {
      state.productsCart.filter((product) => {
        if (product.activo == 1 && product.stock_disponible == 1) {
          resutlVerify.push(product)
        }
      })
    }
    if ((resutlVerify && resutlVerify.length) == state.productsCart.length) {
      return 1
    } else {
      return 0
    }
  },
  locationStore(state) {
    if (state.dataStore) {
      if (state.dataStore.tienda.template == 99) {
        return `https://wapi.me/wa/${state.dataStore.tienda.id_tienda}`
      } else {
        const suffix = state.dataStore.tienda.template !== 3 ? 'store' : 'co'
        if (state.dataStore.tienda.dominio) {
          return `${state.dataStore.tienda.dominio}`
        } else {
          return `https://${state.dataStore.tienda.subdominio}.komercia.${suffix}`
        }
      }
    }
  },
  userDropshipping(state) {
    let userID = null
    if (state.productsCart) {
      state.productsCart.filter((value) => {
        if (value.dropshipping) {
          userID = value.dropshipping
        }
      })
    }
    return userID
  },

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

function setCurrentSetting(state, { component, setting, template }) {
  if (component && setting) {
    // eslint-disable-next-line no-prototype-builtins
    if (state[`settingByTemplate${template}`].hasOwnProperty(component)) {
      state[`settingByTemplate${template}`][component] = setting
    }
  }
}

async function getIdData(state, req, commit) {
  let full = req.headers.host
  let parts = full.split('.')
  let partsID = full.split(':')
  let subdomain = parts[0]
  let id = 0
  let template = 0
  // let webSite = false
  let idWapi = null

  if (
    parts[0] == 'localhost:3000' ||
    parts[0] == 'wapi' ||
    partsID[1] == '3333'
  ) {
    let partsWapi = req.url.split('/')
    idWapi = partsWapi[2]
  } else if (parts[1] === 'komercia' || parts[1] === 'localhost:3000') {
    const response = await axios.get(
      `${state.urlAWSsettings}/api/v1/templates/websites/template?criteria=${subdomain}`
    )
    id = response.data.data.id || response.data.data.storeId
    template = response.data.data.templateNumber || response.data.data.template
    // webSite = response.data?.data?.templateNumber ?? null
    if (template === 15) {
      commit(`SET_SETTINGS_BY_TEMPLATE`, {
        templateNumber: template,
        value: response.data.data.webSiteTemplate,
      })
    }
  } else {
    const response = await axios.get(
      `${state.urlAWSsettings}/api/v1/templates/websites/template?criteria=${parts[1]}`
    )
    id = response.data.data.id || response.data.data.storeId
    template = response.data.data.templateNumber || response.data.data.template
    // webSite = response.data?.data?.templateNumber ?? null
    if (template === 15) {
      commit(`SET_SETTINGS_BY_TEMPLATE`, {
        templateNumber: template,
        value: response.data.data.webSiteTemplate,
      })
    }
  }
  // else if (parts[1] == 'komercia' || parts[1] == 'localhost:3000') {
  //   id = await axios.post(`${state.urlKomercia}/api/tienda/info/by/url`, {
  //     name: `${subdomain}.komercia.co/`,
  //   })
  // } else {
  //   let getDomain = full.split('/?')
  //   let domainURL =
  //     getDomain.length > 1 ? `https://${getDomain[0]}` : `https://${getDomain}`
  //   id = await axios.post(`${state.urlKomercia}/api/tienda/info/by/url`, {
  //     name: domainURL,
  //   })
  // }
  return { subdomain, id, template, idWapi }
}

async function handleWapi(commit, dispatch, idWapi) {
  commit('SET_TEMPLATE_STORE', 99)

  await dispatch('GET_SETTINGS_BY_TEMPLATE_WAPI', idWapi)
  await dispatch('GET_ALL_PRODUCTS', idWapi)
  await dispatch('GET_DATA_TIENDA_BY_ID', idWapi)

  commit('SET_STATE_WAPIME', true)
}

async function handleKomercia(id, template, commit, dispatch) {
  if (id) {
    commit('SET_TEMPLATE_STORE', template)
    await dispatch('GET_ALL_PRODUCTS', id)
    await dispatch('GET_DATA_TIENDA_BY_ID', id)
    await dispatch('GET_DATA_HOKO', id)

    if (
      template === 7 ||
      template === 9 ||
      template === 10 ||
      template === 11 ||
      template === 12 ||
      template === 13 ||
      template === 14 ||
      template === 16
    ) {
      if (id && template) {
        await dispatch('GET_SETTINGS_BY_TEMPLATE_NODE', {
          templateStore: template,
          idStore: id,
        })
      }
    }
    // else if (template === 15 && webSite === null) {
    //   if (id && template) {
    //     await dispatch('GET_SETTINGS_BY_TEMPLATE_AWS', {
    //       templateStore: template,
    //       subdominio: state.dataStore.tienda.subdominio,
    //     })
    //   }
    // }
    else if (template === 5 || template === 99) {
      if (id && template) {
        await dispatch('GET_SETTINGS_BY_TEMPLATE', {
          templateStore: template,
          idStore: id,
        })
        await commit('SET_STATE_WAPIME', false)
      }
    }
  }
}

async function handleDataStore(state, commit) {
  if (state.dataStore) {
    if (state.dataStore.modal && state.dataStore.modal.stateModal === 1) {
      await commit('SET_STATE_MODAL_PWD', false)
    }
  }
}
