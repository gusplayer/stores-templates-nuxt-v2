import Vue from 'vue'

Vue.mixin({
  methods: {
    getIdCloudinary(url) {
      let str = url
      let arr = str.split('/')
      let newArr = arr.splice(arr.length - 4, arr.length)
      let id = newArr.join('/')
      return id
    },
    currency(value) {
      if (value) {
        return `$ ${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
      return 'Producto sin precio'
    },
  },
})
