export default {
  methods: {
    idCloudinary(url, width, height) {
      // let arr = url.split('/')
      // let newArr = arr.splice(arr.length - 4, arr.length)
      // let id = newArr.join('/')
      // return id
      let fitImage = url.split('/upload/')
      return (
        'https://res.cloudinary.com/komercia-store/image/upload/b_auto:border,w_'${width}',q_auto,f_auto/' +
        fitImage[1]
      )
    },
    //https://res.cloudinary.com/komercia-store/image/upload/b_auto:border,c_lpad,h_700,q_auto,w_700/c_scale,dpr_1.0,w_300/dpr_auto/v1594820387/1544/products/uxhaio2wrw6fdgfsvhwx.jpg
    // fitImage(image) {
    //   let fitImage = image.split('/upload/')
    //   return (
    //     'https://res.cloudinary.com/komercia-store/image/upload/w_120,q_auto,f_auto/' +
    //     fitImage[1]
    //   )
    // },
  },
}
