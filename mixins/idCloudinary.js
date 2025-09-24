import { buildCloudinaryUrl, buildCloudinaryWebp } from '@/utils/cloudinary'

export default {
  methods: {
    // Imágenes de producto
    idCloudinary(url, width, height) {
      const transformation = `dpr_auto,f_auto,fl_lossy,q_auto/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad`
      return buildCloudinaryUrl(url, transformation)
    },
    idCloudinaryQuality(url, width, height) {
      const transformation = `dpr_auto,f_auto,fl_lossy,q_90/c_crop,g_custom/h_${height},w_${width},b_auto,c_pad`
      return buildCloudinaryUrl(url, transformation)
    },
    idCloudinarys(url, width, height) {
      const transformation = `dpr_auto,q_auto:best,c_crop,g_custom/c_scale,h_${height},w_${width}`
      return buildCloudinaryUrl(url, transformation)
    },
    idCloudinaryBanner(url, type, width) {
      if (!url || typeof url !== 'string') {
        console.error('La URL proporcionada es inválida:', url)
        return null
      }

      const baseTransformation = 'dpr_auto,q_auto:best,c_crop,g_custom'

      if (type === 'banner') {
        return buildCloudinaryWebp(url, baseTransformation)
      }

      if (type === 'bannerRes') {
        const responsiveTransformation = `${baseTransformation}/c_scale,w_${width}`
        return buildCloudinaryWebp(url, responsiveTransformation)
      }

      return buildCloudinaryUrl(url)
    },
  },
}
