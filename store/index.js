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
      titulo: 'Primer Blog',
      photo: 'https://blog.hotmart.com/blog/2017/09/criar-um-blog-670x419.png',
      autor: 'Miguel',
      contenido:
        '<h2><span style="color: #003300;"><strong>Primer blog</strong></span></h2><p>&nbsp;</p><div><div>Lorem&nbsp;ipsum&nbsp;dolor,&nbsp;sit&nbsp;amet&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Sequi&nbsp;et&nbsp;magni&nbsp;neque&nbsp;recusandae,&nbsp;libero&nbsp;magnam&nbsp;iure&nbsp;error&nbsp;quia&nbsp;architecto&nbsp;eveniet&nbsp;molestias,&nbsp;reiciendis,&nbsp;ipsa&nbsp;enim&nbsp;dolore&nbsp;repellendus?&nbsp;Amet&nbsp;expedita&nbsp;eligendi&nbsp;itaque?</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div><img src="https://miposicionamientoweb.es/wp-content/uploads/2017/02/qu%C3%A9-es-un-blog-y-para-qu%C3%A9-sirve-todo-sobre-blogging.png" alt="blog" width="692" height="295" /></div></div>',
      fecha_creacion: '22/09/2020',
      slug: 'Blog-numero-uno',
    },
    {
      id: 2,
      titulo: 'Segundo Blog',
      photo:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSExIWFhUXGBcYGBgYGRcXFxgdHRoYGBoXGBoYHSggGB4lHRgYIjEhJSkrLi4uGh8zODMtNygtLisBCgoKDg0OGxAQGy0lICUtLS0tLS0tLS8tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAKQBNAMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAMEBgcBAgj/xABHEAACAQIDBAcFBgQFAgQHAAABAgMAEQQSIQUxQVEGEyJhcYGRBzKhsfAUI1KSwdEzQmJyCIKi4fEVUzRDo7IWJGODs8Ly/8QAGQEAAgMBAAAAAAAAAAAAAAAAAAMBAgQF/8QAMhEAAgIBAwIDBgYBBQAAAAAAAAECEQMSITEEQTJRcRNhgZGh0QUiM0Lh8CQUorHS8f/aAAwDAQACEQMRAD8A1fDYoP3Hl+op6sn6N9JHw5WLEsTHuSX+ZP6XPEf1evOtNixgIFyNdzDcaVGVoicHB0yVXRUXjUpauUR2gXSZDZGH9Q+GYfFaPUN27HeFu4hvQi/wvVsbqSKzVxZOw0mZQeYBp9TQrYUl4V5i6+mlEgaiSp0TF2h9WpxWqMGr2GqCxJvTbravIevYegk8Bq5I9t2+uyLx9ap/SD2i7Owtw+IEkgv93D943gSDlXzNWSbIZatSfq3jXqeZUUs7BVG9mIVR4k6Vhe3/AG3TvdcHAkK8Hk+8fxC6Kp9aoWIxe0Npydpp8Uw4asq+Q7KfCrafMEjdekHtZ2dh7qkjYh+UIuvnI1l9L1lu3/atipmvDFHBycjrZh3h3GVNPwqKk7A9juMmsZnWFdNB94/hoQg/MfCtI6P+yXAQWLR9c44ydv8A02CD8p8am0uCaMJgwWP2g+YLPiW/GxZlHcXc5V8L1eNgexbESWbEyrGv4Yxmb8zWA8g1bzhtnIgFlCgbu7w5eVPllHefrWocmydkUno97McBhrEQiRxbtP8AeNfmC2in+0CrlDg1QaAL8/U09nP/AB+5pBT4fE+pqoWLQcPM6D41wkm37WHxr2I/rfXoigDwI6C9OsPm2bjVAuThp7eIjYj5UeqLtWHPBKn4o3X1Uigk+OdjzZJ4X/DLG3owNfUKkX+vL418pX0r6nw7XRWB94KfUXv5DWl9RwhmLlkqI3P1r/yflXnFvwr0FsOI3afIUxa51O7f4/X61mGnkAeZoRtrD3UgCjcab2ND8a9/AUmQ6GzKBtPZSgarQbDxPh5kmj0dGDD9Qe4i4PcaveJhL9ojT+Xv7zQDGYa5PLj391Mx5nEe8cZrcu3SDZ0e1MAGjXtgdZDzDAEGM+Nip4XAPCsUbDd3C5/atU9n21jG5hb3WOZPEDteR0I/tPOnelHRvDRzHEFJJOuYkRJ2VzaFsz7wCTcADnW2eVaPafMwwxOOR4/kCuni/wDymGHev/4zVRiisABv/U7q07a+HmdUECR3AGkiCQKLEaZgdeF6ru0MNjUGZ4sI4G/NCq+PaTKR41w/wrKl0yT83/ybckalZW1wubUMQBoLd3H1vSodtPpFK0h+yxKkQstlVnBIGpBJJseA5WpV0bn2S+f8GJ9V5R+pcpNlu/DQm53fX13VPw+1Tg7Jq+HvZl3tGecfNR+Hhw5H1hsQQgvbxB18bcqG4oZtb7t3Lxpalp4HuOvZmjbO2irorKweNvdca+tG49wrGNl4+XCNmhGdGN3iO5hxZSfdb4HjzGo7C2rHNGJIWzLxX+ZTbUEbwRfcf961QnqRiy4XjfuDFN4iIMrKeII9dKcRwRcUjTRRXOhkshSZZbZ0mddBYcLaeFWK9Q8PhQkkjDdJZj4gZT8AKY21t7DYRc2JxEcQ5M3bPggux8hV3+Z2iqVKgleuqayjb/tqw6XXCQNMeDyfdx+IUdpvPLWd7a6fbTxx6szOAd0WHBQHyTtN5k1Kh5k0zf8Ab3TTA4O4nxKBh/5anrJPyJcjztWcbe9uR1XBYbwknN/MRofm1U3YPsw2hiCC0YhU2N5Pe/It2B/uy760jYHsXwsdmxDtM3I9lPyIb+rHwo2RZRMo2n0l2ltJsjyzTf8A0owcn5IxbzNGtgeyXHT6yZYF7+2/5VNh5sK+gtldH4IFCRQoi8goUegFj51MxOKii9+QDuG/0GtGpsHUVbM52D7HcFFYy5pn/rNx5IOzbxzVf9n7FiiUKkYUDcLCw8FGg8gKj/8AW2fTDwM39R0X9vjUzAJNYmYqSToBqAOXAXqGUjlUnUfn2JYUd7eG79qWfl8NfjuFd6vnr9ct1ewKgYNZb/76n9hXpYQKcpUBRwCu0qVBIq4a7XDQB2lSpUAfFGMg6t3j/AzL6Ej9K+mejkufC4ducMR/0L8zp5GvnnphHl2hjF5YnED0lcVvXQeW+zsIb/8Akp6gZQPK1Uz+FF8fIaxL625a+JP186SIba02v19fW+pGtt1Y2aEeZjpYbqE4lcxt/KN/fxt+/wDzRHEk2sN5+rmoskeRbDhp3k76pIZDYE40k79P0FAJ48xybhxvpyNgPrlVgxA1sDqePzPlf591C8f0WjxMdixQjtK4FyO+2l83LuG6qwSctzTGSitwzsrCdVDnRfvpmyJuPVoB2m8eHian4rpLFh5OoxCMPdKPvDAjVgN9lOh1JrPm2LtPAZZISZUtmBTtEXAJDRtrfXhfdvrmP6cxYuLqcXCUdT2ZI96n+1tQfAnwrf0rxxyacl6Hs/P1F9V0cskFPBJN8/w/cWXpn0tOCVZI1WTrDZe0ctrFgRlHarPulHT6fE4cQsqpnN3yX93TKpzHfvJ8qg4vbriNoRKNxysL2IO/KDrGxFwRwv50BwWIIuphDhjb3CxJHBTuvx01qsfwtdHBRUtUbbTXfe912ZgeSWeShJaX3T+/dGt9FNtbPXDIsThANGEhCuW0LM2upN+GnAaClWZw7OJAIwbkEXBPEeZpUtxjf/n3OnHplX6kf93/AFNG156b/D9q7DEXfKo7z4UR2vshoUzkhhfW1wbnd5UtgQMLm2/fff3Dy+t1ZpJp0xUZRcdSGzs8cTvtcfIUQw2HeEiSI5H0Gt8rLycDeeR3jXmQZEarclrWBuBz5VVPaB04lwmSHDWWZ16xpSAxRSSFWMHQE2JLeAFOw43KXInLkpbmmQ7YVIuvnIww/m60hFP9pNsw5EDXuNwKlt72yYKK6wI+JfmPu4r/ANzDMfJax3ZeycbtOVipaZwVzySOTlzEhb3u2pB0UGtH6P8AsVGjYqcsbi6x9ld24sQWI8lroLTHbkw6e5U9u+1XaOJORJBh1OgWAWY33DObsT4WqHsjoBtHGNnMTJm1Lzkhj35Tdz6V9B7B6GYPCD7mBVPFgO0fFzdj60aZkRMwKgd5yD1I/SpcmwpIyfYPsThWzYqVpDxUfdp6Kcx/MK0fYvRXDYZcsMCIOOVQt/EjVvMmvf8A19B2UQyPr7lyN+mpF/hSK4ybeVhXkNW+H7iq0+4r20eI7+n34CUrRxjtsF5AaegGpqC+2gbiGIufQf7edqrPSnbmztl5Ti2kllcFlQKWLC9ieCD/ADGr1hwuVStspAItoLHUUbBWSXO31YHOFxUv8SURr+FNT52/c1JwmwoU1y5jzftfDdVa6Te0/CYaX7NCkmLxGo6rDjNlI/lZhx7lBItraq9sz23R/aOoxuCkwmoBYsWKX3dYhRSosQbi/hRZKwxTt7v37mo47FxQRtLK6xxoLszEKo4ce/SqFtD2z7NRJDEzysqkp93IiO1rhMxW6k8ytUr287UZ9o4XByuVwqrFIwGlyzsrOeZCAgctedaf0vkwOF2XLEwjSBoXjijXKOsLKcixAe8xNiCPHheoGkT2V9Nn2pDPJJGkbRy5QqXNkKKVuSdTfPrpw0q71g3+GzGWmxkBOrJHIB/YzKTb/wC4vwreaAFSpUqAFSpUqAFSrjsALkgAbydAKHYbb2Hkl6mOUO9iezcrpv7W4+RoAIiu1wV2gD5O9qeHCbWxigWvLm/Oqufi1ap7OsTm2XhgBqA6+SyOPrxrPPbdh8u2MQfxrC//AKaL81q8eyhs2zoxyeUHuGYt+tVzK4F8fiLnC9yKmMe/SoKOqAyOwRRxYgD1PGo7begchVZmBFwQjlSNeIG7S191ZVjk+DRy6S+SsnG/vcTu7uXw19aiYi1tPL96WB2rFOWVGOZLgggi2655Hlvrk1iTy+v96XOLWzGU4umRI8Nc3OmmtuX1pU14rDLuJ7TeHL5DyqRh4eJ4an9B5DX0rxiBZWbi24VMY0VlOxl9pohQOQFYAZjuVhoCe47r+FCuk2wIMSfvIhnH847Leo94eNxUTpJFnTKNN/od9/nVO2V00kiHVuTNENFN7SIBwU27Q7j68KZKLlxyGPIoNbgDbvR5o5THGDIt7C9r35cvPSjfQPDS4HEGfFo0UAjexLKwDnLqFVjqQOVGU6QYNtVkAbfaQFLefunyJoR0lxazJl6yMjlnW3zq8ZNKpIdkksnAR6QY7Cyy9ZBKVVhdgtlGbM2YkW3neTxvSqiRIFFs6+VyPWlUzhFybjwUhkaik2b5i4esDRWsLWB1IJsCL6AaG26+6oowojXL3aHj5+JvRBpwFzX100Guvlf13aUOxeIs7KRv1HKx10+IqvURVKRj6aTtxIqRXNz9f7VnntfwBvh8RbQh4if7TmX5t6VqOEUHQgX51XfahguuwEmUaxFZF8FNmP5WNU6d1NDs28So+wfaQj2iYWPZxETpbmy2kH+lX9a+i1QDcK+Qei20/s2Mw+IvYRyozW/DmGcea3HnX2KgFrjUHUHfetrMo0VJBtppv5d9VnbkeGwUDYvGSSSKlsxsx1JAAyjXUkDU2q21X+n2y/tOzcXBa5aJyo/qT7xP9SrUWUljjLxIa6D9JsNjsK2IgQxRq7IQ2VSuUA3bKSBowO+vadO9mGQRDH4csd1pFynuz+7fzrBfZDsxtoSts+WZ1wgBxMsSHKZmUxoqsd+XUE+HOxB723dA8FgsPBiMLH1RMnVMuZ2DAozBu2SQRkt35qC9Bf8AxJ7OvDhMT+F3iPfnUOvp1betF5+kcg6LLiYSesGHjhzAnMpDrh3cEaggAm/A61B21g5MV0UjLgtKkUUi3uTZHsDzuYr+N6J+xfASHZL4fGYdkQvIAsqlQ8TqpJs2trl9aAA/+HaXCrhJyWjXEdac+YqH6vKmTf8Ay3z+d+6gntHjTbe1oMNgCJCkeWWdRmjUZixOYaMqgmxvYlrCrdD7GNktKWVpyvZPV9YOrAYXFjkzm+/3qv2wtg4bBx9VhoUiTS+Uatbi7HtOe8k0AnZSPa90c2Y+HjnxryQmO0Ucsal2IsSI3ABBGjEE21462OedDsXsjDssuFwuOx+MU/dRui5UIJKuFQkLqb37RB1sDW37a6QYNFaOVllvoYwBJfuI93yNDejvSFGmSGLCrBCxdVsFUlkUORlUALYHv3igAB7IOgU+CebGYsKs84yiNTfq1LZ2DEG1ywXQXsF3m9hp1RH2glwq9tjYgLrvNgSeA7+VNt172tljHa39prbl7u/hvA4G4BPof/1UNbqkeTUC4BCjfvJ/biKkYXBhL/zEtmudbHKFuL3O4cST303iNowx6FhcfyrqeA3DlceAIvYUAeYY5yVLOFAZiVAFyNyqdTaw5HfQbbW3ZlkaGJUBDFMzXJJMPWqw0sOIsb7qL/aJnByRhNCQX466C3A214jcOdoLdHi8hlklIJKMQgW4ZQ6jtkbsr2NlG6gCobVXrXieaZnjYwMyZ9Y0dEJbINSSxb3BoB3ixrYGypBNDIIVRE63M2UISGWyqOyrNrrqug/marNgNlQw26uMAgBcx7TWGgGZrmw5XqbQBwV2uCu0AfOn+IbCldpRycJMOnqruD8LUV9jki/YZS5AWOZ2JO4DIjfvS/xIRffYNuaTL6NGf/2od7KMQowG0QwBygNY7jdG0PddRejJ4CU3exZ8HjftcgDIskpa4RwTBhU1sWQWEstrkqe7dTsoBRJZpM6kPZXcLGlmAVLKQLhTuVdMrVTei2PMcoQsCzJKMwN7sVkubjiS66/0jzUTddHuLlXzBbs9syKrAA3t2oxpbXzNblHTKo9kvq39kc94XmyL2s9rW7Srhdntu2+3vfBa8fjYzBBIR1cpaTKwOuQWUZn3gHkefA0X6L40zqcwOZLFrixbfbhvuCPIHjVQxGG6zqYmfII4gzC9wMxzSB9RaykC5tvFWPoVjRNNOyrZFWMDSwIGYDxIyelqwZFGWK/e38G3XzOzlktdYlstn5LySfHrV1577WxkNgvE6t9ePyqDjGue4X9B+5/SpufQtzqBiBoBbfv8KzNEIq+38NPOFjiFlfSRid3ceIBFAsZsIRr1bpbgLjlx8asu153RwYz2txGtjuJuPC3fT2G6ZYZ16rExgW0Ga9tOTqCfUeZpmNRfqQ1KD1JWmZ70g2BHGiulwSSCL3G7hfUa1H6ObAixBZZHdSPw5f1B5VfJYcJMDnkBUG6hJIiSDfQ9sEcKDSfYsMSYiA3F3lXTduRLk+lH4eprGnm5t8+pXqZRbaxkjYvQPCdWftLyB8zWOZEDKDZWUC+hsd+t76bqVAtpdMoWfRHcAWDDsg79wOvHiB4Uq3N4r/gypZWamioCAVFuW/nYm5vw+NR9pJqD+E28t4+NSsMisQ1tGtdr2IG9RqeZO6kNmogZRuYk8NDv5fOs0oaotEQnpkmDcJIbkfm7u6puIjVlZW90gqb7tQRb676biwYU6Hdqf3Ndd8xtwG76+t4rnp0dNqz5vx2FMUkkTb0ZkPkSP0r6q9lu1PtOysJIb5lj6tr77xkx3PjlB86+e/ajgOq2g5G6VVkHiRlb4qfWtM/w47UzQYrCnekiyr4SLlIHgYx+auldqzDxsbFXLV2kagD522H0K2nDtic4INh0SWYLOyfcZDmZEIOjqRlGgOUkHhV0Ps/xG0J0fa20FnVLlIMOMkZByk9uw3i17DNYjtDStJxGz1diWZipA7OY20JPPjp6U7Bgo0JZUAJvc8Tc3PmSbk8aAIjRTW6uNUiRQFUi1gthbIANLDS1hu9GZZo4s0eImEjSahLEkga3CXNhp3AZfE0SnxSJ7za8BvY8NFGp1qqdISzT4bERxuwPWxNlXM2W5AZbbrqWYHTSgBvEdLmyH7JhSUUHtNa1l35VU9oDuOlD9rPJMSskzMqyTplzCNZLIskK8FGYFtTfd4VK2b0YxDhHkVYnWPq8xbO1jmBYIugazHUsddct6PYXoxh07Ul5WOXWUgrcAIvYFlvawFwT30AU7ZWGBaMJhc595+q7QR0e6WkdiBcaMua1jfeLVYtmdHZzJDPO6K0dyQgLGRiAGZzoASAoNr3tfjVilnK5VjjzDtDTsquXgdNOQpiPDzuB1kgXTXJvPZIOv8tmN95vYbtaAH5JYoVA7KDQAAam5toBqf8AmvEOOLkZIyV4s3ZFrgacTpc+AHOvUGzYkNwgvzOpvlC314kAC/jzNPSTgcyd1lBJ87bvOgBiXBl75pGsRaynKNy38dzb/wAXcKew2FSMAIoAH7Abz3AelIlzuAUd/aPoNB6mmp+rQXlcHlnI+A3fCghtLdjoxIPu3bw3eu70pFXbecv9up9WFvhQfFdJ0HZiUueHAem8/CgW2dvOq5sRiEw6d7Bb+AvdvC9TQl9RF7QV+n3LbPi4YjdmGf8AM3hbh8KEz9JWbSGMnvb9hoPWso2p7TMJHph4nxDfif7uPyBGY+BUeNUvbPTjH4m6tN1SfghHVr4XHaPgTarqN8EVlly69OfmbpienkGDD/bMQmc2tGDmcb/5EFxw4edUPb3tslkOTBwWvuaS9/JEN/8AV5VkYjF+ZPqf3q6dCcDKC4aEqjAEMRY33W52I+XfV1iV7l09EaRFxmF2hj3D4mQ6Xy5rALe18qINNw32Olab7OOjQwuGlF88khu1xZSALBbX3C7HvvTOA2fqKuOy48q1bJCLjpKRyyUrMo6UbFTDTdZGDlvmFiOy2+xB38PoVEwwwzFgxk6txd/cCqNCRc3N/K9Wz2lYYxFXHuPcf2tvI8xqPOs0lTjSISlGLi2/U1ThrqUfl6O/oyy4zaBlJVCqRta9r3JHAltSAPIWFXDogiRQ5QbtI12O7TcNOAsB61mWBS2vPT1q67HxhXXloB3/AFalzpR0rgdCLrd7mgFwSOW79T9d1R3luS3j6Dd9d1DcNjDYnyH19b6deWy/H01+fzrOy1DcwFmc8AR56k/H5VS9o4EHtH4fXM3q242YZApPefrxoFjzoRx/fh9cqpdD4IpWOw4uRw+vrzobikAGnHdVox+Dtrwqu4lN7cOFOjKys4g1k5UqcMZNKmmc+g8PhHjSzi5XRRci/LW43XI31LxE5IFlvxOu62/x5VK2kL20PpcaUOilABGXKAdNb6c9dR50zBvBe4w51U37xvFygXseF/r6+dMppr32Hjr8tfMnlXgFXAZDcAmxGotz77cO+1cLcB4W/Ty+t9YM0NORo6GGWrGmUX2w7PzYeGcD+G5Qnucfuo9aB+xPaxg2rEpNknDRNrYXIzJpxOZQB/dWg9McL12Dnhy3OQkf3J21+I+NYTs3GtDLFOvvROki+KMGHxFa8LuFCci/MfadI03hp1kRZFN1dQwPMEXHwNOVYoRcTiWByrGzHTXhqbHU6aAE2JHDnTK4aV7dZJl1BKpoNGJy5t+4KCePa3XFpeInCC5udbAAXJ0J+QNRFnmf3UCC9u2DfhrYHv3btDrqKAHIcDFF2gqg6AsfHTuvc/GvGK2vGgNrsRm0UEjs2uM1rX7Q076S7MB1lYyXFrN7u/N7u7eButoB33lgKg4KPICgDxiUdhZWya79CbZTwI07VvId9M4bZiKcxLO17hnOYjdu4Ddy4nmaf+0XNlGbdc7gL+Op8hwrnVMfee3cvZ/1b/MWoA9yzquhYA8BxPgN5rnWMfdW3e2nmANfW1QcRtTDw37QvxC6k8NTz04mhU/SGV9IY7D8R1+enzqaEyzwjty/JblgZLdp5Dp35FHpv8yaHYnb8EQyp2rbgosvr+16oW2+meFgJ+0YsSPu6uL7xx3ck8DaqJtX2pSm64PDrCNwkf7yTxA91T3HMKlRK6ssuFp9eTYsbt2dlLXWGMb2YhbDmWbXz0qh7Z6f4GIn7x8VJxEeiecjGx8QTWTbT2jPiWzYiZ5Dv7RuB/avur5CvGDwTyG0cbOf6Rf47hTVjfcr7KPMvzP3/YtO1faTjZQVhCYZD/2xd/N2+YAqo4h2di8rs7HezsWY+JbWrXs7oRK9jK4jHJe03ruFWnZfRXDxWyx5m/E3aby5eVWSihl1sZxgNjTy/wAOI2/E3ZX1O+rJs/oNxmkJ/pTQeZ31oEuEWJM8zpCg/mkIUehoOelmEzGOBXnlysUuCkbMBcKCde1Y20sfMVNkWz1sno5FHpFEL87XPmTU7HYzDYb/AMRiEQ/gHbf8q3NVEbf2pORKB1EKHMwKiGEKPxFu244G3PcKreLGCjd8jS4hSxIH8FLXOjMbyPbTUBb86A03ybbgCrKGSxB3HuOoPgRrRnDqbCs89mvSTrb4eREjyKOrChgpjGlu0SSUJGt9Qx5GtKRLUMpVMa2psxMTA8Mm5hod5U8GHeDWE7QwLRStE4s6Ehh+vgd47iK+g0qoe0To8HUYtF7SACTvXgx71Onge6kZF3NOCdPS+5mOGhs3cBfzovhlIy+vnw+u6oscNiO/U+HCpeGbM2763D9TWWTZvSLBBJYDlv8Ar0qW8+gvy18yL0Iw5uTfdoPU/wC1PYuQE2+rfRpTJo9zS37R3cvkPhUWdb8dTfy5kHw/SpMZFvrf/t+leX3Ft3LwpbYxbAfaSAiw46nnYfQHiareKS7btBuqw4qS4JG9tB4fVz6VBkwoHjTIOiZKwFJhtaVS5Ab/APNKnahGlGldBulZVvsuKezAfdzMfet/JJfQnTRj4cr3ttoqoBaWLKdxLKAfC5+HxO6sh2xs+4vbdvqq4rZ4JNxc1lw5ti+TplN2jddruCbADlcADcLjdQzDpc332Hx+vnUHCYy0GFDe88ea+u8Kh14a3O+jEXdu3+JNaMsbhGRjxPTJxG+r1tpfl8/n8a+eek+zvs+Lnh4JI1v7TqvwIr6Liw12LnQfOsf9smBy4tJgLCWO3mhsfgVqeme9Fsy7myexnbH2nZUFyC0N4GtwyWyf+mUq8Vhv+HHa1nxWEJ3qsyDXgckh5fzR+lblWhiRVHkxajv1tpaw1tqTpe/DfTssgUFmNgN55UDxPSKFW+7TO50va1+69rn0oSsXPLCHiYSEkj7hlHP/APoX/wBNMYloozmlkGbkL31FjbUsB6Cq7tTbkgQvNKmHjvvZgg8N979xNUDa3tHwUVxEr4p+f8OK/idT5Ag86mhftZy8Efi/sahL0jGogiueJI+JC/qaru3+kSRC+MxaRDfkvdj4Iup8bGse2x7QcfiLqsggTXswjJp3v71/AjwqrFNSzG5JuSd5J4knU1dQZHsnLxyv3cI07avtQhS64TDF24STaDxCDUj8pqlba6VY3F3E07ZDp1adhLciq+9/mvTGz9iTzfw4jl/E3ZX1Op8qs+zugo3zyE/0poPU6n4VdRS5LpRiqiqKRFDc5QCTyAufQVYNm9E8TLYlRGvNt/5RWibJ2JHH2YYgPAa+ZqfI0MbBJZ0VzujBDSHS9goqdVBZVtm9CYEsZLyn+rRfyj9atmD2XZeygVRx0VRVSxXtEW4XB4YMxNgZrs7cezHHfh337qGdKRPLKftOLVYnsyRuWaRA2oTqIx7yns3a27fRuFFx2tt/B4U5HcyyWDBIxpY6gl2soHnQXEdLMXiYC2AiEWVislsruAQCjZ3sANGBvu04G9V/a08USQokCz5YwyTS5rFWZiV6pTayNmWzk2N9K8zPJjMOLXZoPejRRYxuey6xRjLdXBU2HulTU0A6y2ikkxmIM6SNkyxSCZ0kHbUmRjkjIAYaXuCeVM7HxSHOmGgEc2XNFISZJSV1ZMzjKjOmaxUDUW40/svZLxo/2z7qGVCttXmJXtRukUYJBVt+bKLOwO+vWzoYIo5JoIZWnhyyq+IAy5VPbdI0Ngy3VrMzaXPC1SSCtjNiJZ+tVHxB1EhN2BUgh45JHsFUqzbyLGx4VOwvR3C/aepOOVgWIj6pS5b8CtIR1aMTZdMwueFecBt+aWbq8RJJIkt43jW5BVt5jiQWzK1nBAubcb16x3ROaAs+JeOBFcx5yTIzNYm8ccVyCQMwzFLVJAzgekDYeUNh8OkTDeZLyytr2kd5LBAdQciqa3bo9tJMTBHNHuZbgcRwKnvVgVPhWHbU23hWkMseFzu1i7zm6s1gHkECHICxGbVmFzuq2ezfpdMcSMLObrID1Isi5CoJKBUACoyg8NCBzNDVoqzXEFPBQQVIBB0IOoPMGm0tvG404KSwMo6RbGOGmdB7raxH+k8PEG48u+omFiAuRut/sP19a07pRsn7RAQB94naQ9/FfMfG1Zs5soG7ifLcLenpWPJGmdLDPVE9QkAeLfAf8fGm11a/M/X6U3KwAVO7/euZspFJaHokTTBdCablx65LmoG1pQDe9DVjMinWwFXhiXciUgkMYhOYkD9KjbZxioMyENeqtiJLMQDcCuvjLxlSKf7JCfaljw7xsoJ40qp0eLYCwNdqPZh7U2vGYYHlaqjjtnnMeV9O+r1ioL8KiYjC9hja9lJ+FcZWnsa4zoHyyEdQgALRYeMi5sL7tbf20f2XISgBtcWvvsdL6X4bvSqhhsQGxj6NoI49NVtkD68tXtVrwDBWyA6gHnbuuedj8q7mi8dHJc6mmF5ZBuFUL2tbPEmD6wC7QsG8iQp+d6trS2F77+HOo20MEcRBLDwdHU95I0t4aVhxzqSZslD8pkPsp2x9l2phnPuyN1L620k7AJ7gxVv8tfUmKx0cYJdwLb/rhXxihZWG8Mp8wwPzuKs2K/6jjjeeVyp1s5yJ4iNRb4V0nG2Yro2jpR7WsBErxK3XEggrH2t+nvAhB+a45Vlu1PahinuuGjTDLzH3kn5mFvh50D2l0ZMUYdWMhBAYBeegyjUnWls/oxiJNSBGvNt/5RVlBLkq2m7BWMxEkzZ5pXkbm7Fj5X3V6weDeQ2ijZz3DTzO4VetndD4EsXvK39Xu/lGnrVswWzDlGVAq89FX68KtsiHIz3Z3QmVtZnCD8K9pvU6D41atl9GIIiMkWZvxN2m8r7vKn8f0lwOH3ymdt2WAZlvyLnTyuDQra/SrGvIYsJD1cRVWWSNbllYAhmkfsqOGu4gi9Ftkblrmw6xLnmkSFebsB5Ab791Bdo9MMLFE0kCNiCrhGLXjVSQSGIIvY2I7yLVVcfhw8MWIxOIaSVGeO8LLKzADrMrOSFRhdt2a4tvpbE2mCksWHj6qR1zISzSvIUu7RMzDKCy5iuUDVeZFFBQWw+28fi1kEp+z4cxsesVTCsdu0HBJDOLgKbX0bhVe2WuEinjMkkkhDqSyL1Uam985Z/vHsQCTZdKb2NLiHxPWxo+IYHtG7OGUjtJI7aKpVjvtraiMfRzDnE9T9rQi7BFhBkdt5RWkP3aOdF3trbnVqokibZ2riI5HQlcO2dhIIFEXaBvmzKc7gggi5sb07tDA/aMk8ZVTLdpAzBerlH8RsguxV+ywIB1uKUvSBsyGHDRxsiqiu6iachBlGZ2WwNtOyoPC9ScIMQ+oitoNWIA8OfwqJOhuLGp8k3D7Mj+ziB7zkMXQjNCkeYWdQdXcEgMRZdRXrC7F1AzDdwW27zqRgtnzn3pFX+0FvnaiEOyJ79mdfNbfImkSyPzN+PCobnI9iSfyOv+YW+I/apEcc8Qs0LMu4lfvAfy6+op1cHjRwjcf0tY/wCoCpuEw+KuLqVH9y/oTSnJjdvMgoYCjRCJ4S+rGG8MjeJWxPgdKG7P6Fxr1sYmJilWzK6gMrC5jlDLozKSdLC4Zhxq84frlHbOYeA/SvMuIjJ1OVvDQ1McskJnixy7fIybanR6PBWOIWWdjuCfcwecpzO3gqr41BHSGYArAUwicep+7bTi8pJkc+La8q2ifDqylXAZDvDC4PrQ7Y/RzAQSmQYZGN7jNd8negYlR6X76fHOv3GOeB/tD/QPbhxmESZlysSVbQhSy72S+9WFjpxuOFWGqbt32hwYaaOBoJQjMoMpCrGgJtmGpLW3nQaX37qs22toDD4eXEMpIiRnZRvOUXNql7v1MzVEwNVE6bbJ6uXr10ST3uQYA/8Au+d6LdLtrSJgpZYCVYKGVwBoLgk634XqjdG8ficc2R5pGUWLXJy87WGlTPA3DUy+DL+ekP7NwDOcxBrm18Pk1tuq7DDLGlgKqPSGO4JvXPrc6cZWUvaWL11FRMftc5QoXKK9TRnP2qibUy6Ab60JC5Ngxm3mnI3VhlNeccoUAUODGmIzvYINhbcaVKGYW1rlAH0EyVC2mLRN32HqQKnJ3D4ftQvpS5WAnS4u5/tUfuRXGjG2jW3SKHsDE58TKczBesbtC4Nl92/dl/StFhuwBBG69ra301vflcedZP0TnEcoX8QGt9xW5077X9K1LDYcmPI7lja5Kkq1j3qb379K7cGnFHNyx0yoYxxPWhQf7fPj5ftRDCyhF04aA8zxPrr6VEkw/wB5e2pHHfY668q7imsAo0Cjd9d1q5meGjIzoYZa4IDydF8O7PiI4lWQsc1r67jmtewJ7rXqM+zSKLbGxgjnCvoswC35H/yr+Pa/MKNY7CDlrXS6WerGjn9VFxyMqC4Wli8Th8OnWYibICbBQCzk8rCi82HN6Gbe2Mk0RDR57agXK9oA5O0NQDex8adJCYvzAq9Ng7tDhMPaXIxjaWzszKM2XKDYEqGtrvAqvYjHYsyrLi8V1ZUhsjMS2++kEW4cLNa9CF27NGQYssIUg5Y1CC4PuyG5dxwIZjRDHdHpJHWWJQsM1nR5HREXPqUJaxJDlhpe4y1Whwtsx4fDyN1MIkByujSsWTK4zKURAoK8O2TqN1O43ESYvDoRmYxWjdEU2sbvFIsSdlSbFDYG1hzrxjGw8SLh5s880LOvYJhiAJBMTMy53CvmIIC+8dae2pi3WNGwrJh4JU1WM5G6xLB45JPfc6hhmOquNN5qSBYLZzwxuuNbqI5EugftS50IMbpCt20Nwc2XRjXvALDHE2Iw0byzwskl57KoUm3WpFE1uy+UEMTbMDXnZOAfEYRg6hVjPWRTS2ii7Vlki6w6G9w4tftKb769RxRbPltK7YiUIQY4+zhysie68jayKVYHsqBfjpQAtn7aklkOGxTs0ct4nQADKSQVeONBlujgG/EX301iOjU+G+9xGSFEbKCzXZ2XX7pY7tfTMCQANDfSpmNxpGGSTCBMKoJinERIZjbPE/XayFWUMti1sysNb0z0awjzwzRsCIGBcTSdmGOVLlHMh0OYZ42tc2I5VYCThtp4fVi4JOuu++/W+pNEoek2HFu0p4WH6UEj6JqNTKHe/uxhhGLc5HW7X/pXnrU/A9EylyZMtxb7sZSPBjc/KkSUO7OnHJma8Iak25GrAMrKW90W7R/y76SdKcPwkA8aYwXR3CLYlLsDfMWYtffe9996nv0dwLkloASxJJBYG51J0NKbh7x1Zlyl9SThNso3uyA+BqU0p35j61CwWysHD/DiI15sfmaLJjoQtsgNJlp7Doa64I8e0nX3fO50NTY9orJoUI7xqKEzbWhBIELVBnxvJGA8angJR1cosxdVN1mJ/p0NqblxyDXNY8QQaqse0UGmT5j5VJGNBHZVr+tDkL9kHU2mpIsQSNRcehF+NO7U2q8sUkTEsrqVa4vcHQg+VVSbbFjYj4Uk2q38unyo1tFXgiy3Kpl2WYxqxgeMb96goP8A20V6KbDTDQKgAzEXY8zQ3oLN1kTgj3ZD4ahT8yatl7CtObLqio/E5uPFolL1+gM2oxAsoqlbfg76sW2ceRcLvqmY9mY3LVl5NkFW5XcVKVJvQhrMSzGpu2mN7ChIQnfpWiKEzluRMY9zfhTEVqlTgDSmhYCroSxOlcryz3rlSQfSyQ2qle0XEssTi3ZMYAPE53AN/IXq5rnG8kjxNZt7UcbmAQHUyDv7Kpb53rk4lcka5cFT2W4V1k/AQ3luPqLitn2YLKCFWxFmP8xOgF9NdLa3rD4JLqB+I2OnCtd6MykwquTMyjLa43rYbzxsRr3V0cL3cWZ+pjaUl6BSUNmzFVsNFOa5Nr7xbThxNC5yH3nQgsf7ePruo1jnCrqQN1rm2vIX40Kk3sAd9mPcN4H5s3kDSuthaUvgHRzpuIK2imYMT3jz3k6cQLC451btj4sYnDpJ/OBlccQ40b13+YqnTSXvpYcB8z9cBRDohizFiOrb3Z/g4BKeouvebcqV0uTTKvMf1WLVC/IPzYa9RjANQdx0NG54bGorxV1Ls5NGP9OcO2EnV4YIlaUsTKVzv1gN2yh7pHcENcC+p5VTxDiMVIRaSeTcfekI8TrlHoK3XpVslZ4GHUpK4F0V75S4ByXykHXVd+t9dKxLHbUnkXIz9XFcgRLaOMa+71aAZiN1yCaBsWWOXZceJaMTYmNcS0dpYows0kjx3y5XVurWR0VRYneO80OwPSQRAJBhkKZhJ9/9+7sosDqAsfZuLqNOelRMLsKdCsrMuGUEMkk56o3UggpHYu9jropGlGZMdstsWpdJpIme7Zj1UMec3ZkRfvGXMSbErYcDpUEkLb2EmlxOeMyzmS0sAytI3Vvc2G8LkN0IsAMtTsdhYkgRMXMIZ4s0fVqFxExi95FbIQkbKWcDMwsGGnZFD9t7UxkbHDySdTHG7J1UN4olIN7gJYkHNmBJJN70T2zsZ8QkeNbq4uuW0rzOIFEiHKZFVu04kXK1lU65qLA7i8UmEiT7FGHjxEV2lnyyveNyGjMf8NCjFeBvmWx1rzBi5doQmJi0uIgP2iLczul1WWMKALWOV1HIMoqZ0cGDdWwOZsVKxMsPZbDQ9asbAorBhKS66EkKDlUWBqs4npFOyGNCsER3xQL1K/5iO2/fnY0WSGcT0ieBis0RR+K5lZhyuAez4Gmx05H/AG2/0/vVYwmBeVurijaRvwopY+NlGg76NjoFjBYvHlB5ENbuYg5Qe69+6qOEWzV/q8tc/Qk//Gg/7bAeVPQ9LM2oR/EgW9c1RYOjrQsGsCw5gMPRhb4VNlkVv4kdj+JdD50PEvIuuqyeZMj2+pFr5fHSuSbRPjVfxWFv7jZvgaHLI6G40tw4eBqjxR7DI9XJeJfIuMOOblXJ9oNbWoGFxSlVbdf58R616kxIPKkuO5rc9rsdGM7q42LtxINQmYmmZGy6k1GkW8jDWG2rwZQfEURZ1CiQrlB3d/gKreHlIsSLk+6P1NGdmdqZOsJYlhp/KPAU6OGMVqn8hLzyntD4v7GqdGcGseHXKpXN2jffc86JyHSmJZgqr4Cg+19uLGu/Ws8pWxSTZX9vYgI7EmqnPjjvAoviGSU52byoLjBc5UFTBDJPYF4zFG9yNahJGX1JtT+1MMVOp1rxDh+wSTandhO7ZDnhA3a0OmSiEoO69QpquhciMaVdpVJQ+oLaVj3tCS5WS5v1sgtw1JP6VylXKxupxNv7WANhRgzqDuB0+JrVdiHK5t+GM+ZLKfhSpVoi/wDJj/exXKv8Z/3uWWOFbAW3HS9yd3M68TQXbS2C20vmXyBW3zPrSpVp6n9JmPpf1V/ewIiQG3iD6WsPCoG13K9sGzK2ZTyKtofhSpVy8fiOvI1LCymSGORrZmRGNt12UE29aadaVKu1E4MuRrIDccxWMdPNpNhcYyYZI4WdFkeVEHXMz3LdtrlNR/JlpUqsECkySMzF2Ysx3sxLMfEnU0T6MbNXE4mOBywV95W2byuCPhSpUDXwWjp3tVsHjPs8EcStHHGoxBRXxJCrlF5HuAbADMoB76EdIJ2nwmExMrF5rzwF2JLMkbK6Zid5HWsL8Ra+6uUqquEQAI5CpDKSGUhlI3gg3BHeCK2bC9BsHO7YyVWZpFilaLNlhzyIruQFAa2Yk2zW1pUqrkdIC97O2VDDGEjjVE35VUKv5VAB8TrT8sY5UqVIZZFQ6SYJFK2W2Ym/d4VUsfgE767SrXidxDuAMThlBoViYhSpVdlkGMHhEWNRa99TfnTckQ5UqVYG3Z2nFKKogYiYruoeWubmuUqZEwZHuWfZ+FXKJNc1rdw8Kk7H/wDExj+qlSrVkS1fAXib9l8WaRtiYgDwrOtt4hi2ppUq5kfEPXgIsDmwFepBl1FKlThaBLNme51qO8pJN6VKrlCG7VClGtdpVdCmNsgrlKlUkH//2Q==',
      autor: 'Juan',
      contenido:
        '<h2><span style="color: #003300;"><strong>Segundo blog</strong></span></h2><p>&nbsp;</p><div><div>Lorem&nbsp;ipsum&nbsp;dolor,&nbsp;sit&nbsp;amet&nbsp;consectetur&nbsp;adipisicing&nbsp;elit.&nbsp;Sequi&nbsp;et&nbsp;magni&nbsp;neque&nbsp;recusandae,&nbsp;libero&nbsp;magnam&nbsp;iure&nbsp;error&nbsp;quia&nbsp;architecto&nbsp;eveniet&nbsp;molestias,&nbsp;reiciendis,&nbsp;ipsa&nbsp;enim&nbsp;dolore&nbsp;repellendus?&nbsp;Amet&nbsp;expedita&nbsp;eligendi&nbsp;itaque?</div><div>&nbsp;</div><div>&nbsp;</div><div>&nbsp;</div><div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRX64AVeuWSrgjXlGgGCNb72EZWcdB2ZHCj5w&amp;usqp=CAU" alt="bolg" width="284" height="177" /></div></div>',
      fecha_creacion: '22/10/2020',
      slug: 'Blog-numero-dos',
    },
  ],
})

export const mutations = {
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
  SET_SETTINGS_BY_TEMPLATE: (state, value) => {
    state.settingByTemplate = value
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
    if (
      parts[1] == 'komercia' ||
      parts[1] == 'wapi' ||
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
    await dispatch('GET_DATA_TIENDA_BY_ID', id.data.data.id)
    await dispatch('GET_TEMPLATE_STORE', id.data.data.template)
    await dispatch('GET_SERVER_PATH', full)
    await dispatch('GET_ANALYTICS_TAGMANAGER', id.data.data.id)
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
