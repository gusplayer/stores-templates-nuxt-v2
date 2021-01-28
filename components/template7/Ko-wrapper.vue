<template>
  <div class="wrapper-content">
    <div class="wrapper-items-content">
      <div class="wrapper-content-items">
        <div class="wrapper-items-text">
          <div class="tittle">
            <span class="tittle-text">Vea nuestra colección.</span>
          </div>
          <div class="subtittle">
            <span class="subtittle-text">Nuestro Instagram</span>
          </div>
          <div class="description">
            <span class="description-text">
              En un contexto profesional, a menudo sucede que empresas privadas
              o
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="wrapper-items">
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper">
          <div
            v-for="(imagen, index) in Imagenes"
            :key="index"
            :class="`swiper-slide wrapper-${index + 1}`"
          >
            <a
              target="_blank"
              rel="noreferrer noopener"
              :href="dataStore.tienda.red_instagram"
            >
              <img class="img-wrapp" :src="imagen.url" alt="wrapper-images" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-wrapper',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
          10000: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          1920: {
            slidesPerView: 6,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 0,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          320: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
        },

        // setWrapperSize: true,
        // paginationClickable: true,
        // grabCursor: true,
        // ...
      },
      Imagenes: [
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto,h_750,w_750/v1610492245/Komercia/Wrapper/wrapper-1_dfo9fn.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto,h_750,w_750/v1610492248/Komercia/Wrapper/wrapper-2_iqhq6i.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto,h_750,w_750/v1610492251/Komercia/Wrapper/wrapper-3_zt0bqm.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto,h_750,w_750/v1610492254/Komercia/Wrapper/wrapper-4_tveirf.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto,h_750,w_750/v1610492258/Komercia/Wrapper/wrapper-5_kamx9v.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto,h_750,w_750/v1610492261/Komercia/Wrapper/wrapper-6_zxfqi5.jpg',
        },
      ],
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false)
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
  },
}
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.wrapper-content {
  @apply flex flex-col justify-center items-center w-full;
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
}
.wrapper-content-items {
  @apply flex flex-col justify-center items-center w-full mb-16 text-center;
}
.wrapper-items-text {
  @apply w-full;
}
.tittle,
.subtittle,
.description {
  @apply flex flex-col justify-center items-center;
}
.tittle-text {
  font-family: 'Great Vibes', cursive !important;
  color: #ed2353;
}
.subtittle-text {
  font-family: 'Lora', serif !important;
  color: #2d2a2a;
}
.description-text {
  font-family: 'Lora', serif !important;
  color: #777777;
}
.wrapper-items {
  @apply w-full;
}
.wrapper-1:hover {
  @apply bg-black bg-opacity-50 cursor-pointer;
}
.wrapper-2:hover {
  @apply bg-black bg-opacity-50 cursor-pointer;
}
.wrapper-3:hover {
  @apply bg-black bg-opacity-50 cursor-pointer;
}
.wrapper-4:hover {
  @apply bg-black bg-opacity-50 cursor-pointer;
}
.wrapper-5:hover {
  @apply bg-black bg-opacity-50 cursor-pointer;
}
.wrapper-6:hover {
  @apply bg-black bg-opacity-50 cursor-pointer;
}

@screen sm {
  .wrapper-items-content {
    @apply w-9/5;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 42px;
    font-size: 32px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen md {
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
}
@screen mlg {
  .wrapper-items-content {
    @apply w-9/3;
  }
  .gify-text-content {
    @apply w-9/3;
  }
  .gify-slider-content {
    @apply w-6/3;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 48px;
    font-size: 35px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
@scree xl {
  .wrapper-items-content {
    @apply w-8/3;
  }
}
@screen xml {
  .wrapper-items-content {
    @apply w-6/3;
  }
}
@scree xxl {
  .wrapper-items-content {
    @apply w-4/6;
  }
}
</style>
