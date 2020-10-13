export default {
  methods: {
    idCloudinaryBanner(url) {
      let fitImage = url.split('/upload/')
      let fitImage2 = url.split('/')
      return `https://res.cloudinary.com/${fitImage2[3]}/image/upload/c_lpad,dpr_auto,q_auto,f_auto/${fitImage[1]}`
    },
  },
}
