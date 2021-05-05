export default {
  methods: {
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad,dpr_auto,q_100,f_auto/${fitImage[1]}`
    },
    idCloudinaryDetalle(url, width, height) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad,dpr_auto,q_100,f_auto/${fitImage[1]}`
    },
    // idCloudinary(url, width, height) {
    //   let fitImage = url.split('/upload/')
    //   let fitImage2 = url.split('/')
    //   return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/b_auto:border,c_lpad,h_${height},w_${width},dpr_auto,q_auto,f_auto/${fitImage[1]}`
    // },
    idCloudinaryBanner(url) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/c_lpad,dpr_auto,q_100,f_auto,c_crop,g_custom/${fitImage[1]}`
    },
    idCloudinaryBannerResponsive(url, width) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto,f_auto,c_crop,g_custom/c_scale,w_${width}/${fitImage[1]}`
    },
  },
}
