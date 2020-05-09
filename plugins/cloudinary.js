import Vue from 'vue'
import ImageCloudinary, { CldImage, CldTransformation } from 'cloudinary-vue'

Vue.use(ImageCloudinary, {
  configuration: {
    cloudname: 'komercia-store',
    components: [CldImage, CldTransformation],
  },
})
