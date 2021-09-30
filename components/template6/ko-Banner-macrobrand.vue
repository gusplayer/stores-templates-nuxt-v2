<template>
  <div class="wrapper-banner">
    <div class="header-content-logo">
      <div class="wrapper-banner">
        <KoSwipper :products="data"></KoSwipper>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinary from '../../mixins/idCloudinary'
import KoSwipper from './bannerMacrobrad/productslideBanner'

export default {
  mixins: [idCloudinary],
  name: 'Ko-Banner-macrobrand',
  components: {
    KoSwipper,
  },
  data() {
    return {
      data: [
        {
          photo:
            'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1633014185/macroband/banner_03_lzwcca.png',
        },
        {
          photo:
            'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1609802297/macroband/banner_02_lmmyse.png',
        },
        {
          photo:
            'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1609802301/macroband/banner_01_s55h4i.jpg',
        },
        // {
        //   photo:
        //     'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1602278801/macroband/banner_web_macrobrand_tn8kra.jpg',
        // },
        {
          photo:
            'https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,q_auto:best,f_auto/v1609802299/macroband/banner_03_vfdrvs.png',
        },
      ],
    }
  },
  setting: {
    type: Object,
    default: function () {
      return {
        name: '',
      }
    },
  },
}
</script>

<style scoped>
.wrapper-banner {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_2);
}
.header-content-logo {
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
}
.wrapper-banner {
  width: 100%;
}
.banner {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
