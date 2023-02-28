export default {
  methods: {
    // Imágenes de producto
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_auto/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`
      } else {
        return url
      }
    },
    idCloudinaryQuality(url, width, height) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,f_auto,fl_lossy,q_90/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad/${fitImage[1]}`
      } else {
        return url
      }
    },
    idCloudinarys(url, width, height) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,h_${height},w_${width}/${fitImage[1]}`
      } else {
        return url
      }
    },
    idCloudinaryBanner(url) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/${fitImage[1]}`
      } else {
        return url
      }
    },
    idCloudinaryBannerResponsive(url, width) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      if (fitImage2[2] == 'res.cloudinary.com') {
        return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/dpr_auto,q_auto:best,c_crop,g_custom/c_scale,w_${width}/${fitImage[1]}`
      } else {
        return url
      }
    },
  },
}
