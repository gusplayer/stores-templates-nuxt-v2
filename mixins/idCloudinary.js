export default {
  methods: {
    idCloudinary(url, width, height) {
      let fitImage = url.split('/upload/')
      return `https://res.cloudinary.com/komercia-store/image/upload/b_auto:border,c_lpad,h_${height},w_${width},dpr_auto,q_auto,f_auto/${fitImage[1]}`
    },
  },
}
