<template>
  <div class="contein-carousel" :style="[banner, settingGeneral]">
    <div
      class="carousel-content"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Roboto',
        },
      ]"
    >
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide swiper-slide-1">
            <div class="banner-content-items-1">
              <div class="content-items-1">
                <div class="text-top">
                  <p class="banner-text-top">
                    Muchas gracias a todos nuestros clientes
                  </p>
                </div>
                <div class="text-medium">
                  <p class="banner-text-medium txtmed1">Empujando</p>
                  <p class="banner-text-medium">los límites</p>
                </div>
                <div class="text-bottom">
                  <p class="banner-text-bottom">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  </p>
                </div>
                <nuxt-link :to="'/productos'">
                  <div class="banner-button">
                    <button class="btn-shop">
                      <span class="text-button">
                        {{ $t('home_comprarAhora') }}
                      </span>
                    </button>
                  </div>
                </nuxt-link>
              </div>
            </div>
          </div>
          <div class="swiper-slide swiper-slide-2">
            <div class="banner-content-items-2">
              <div class="content-items-2">
                <div class="text-top">
                  <span class="banner-text-top"> Sigue al conejo rojo </span>
                </div>
                <div class="text-medium">
                  <span class="banner-text-medium txtmed1"> Hasta </span>
                  <span class="banner-text-medium"> 50% de descuento </span>
                </div>
                <div class="text-bottom">
                  <p class="banner-text-bottom">
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    essecillum dolore eu fugiat nulla pariatur. Excepteur sint
                  </p>
                </div>
                <div class="banner-button">
                  <button class="btn-shop">
                    <nuxt-link :to="'/productos'">
                      <span class="text-button">
                        {{ $t('home_comprarAhora') }}
                      </span>
                    </nuxt-link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataStore: Object,
    banner: Object,
    settingGeneral: Object,
  },
  computed: {
    template() {
      return this.$store.state.template
    },
  },
  data() {
    return {
      Banners: [
        {
          txtTop: 'Muchas gracias a todos nuestros clientes',
          txtMedium1: 'Empujando',
          txtMedium2: 'los límites',
          txtBottom1:
            'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.',
          id: '1',
        },
        {
          txtTop: 'Sigue al conejo rojo',
          txtMedium1: 'Hasta',
          txtMedium2: '50% de descuento',
          txtBottom1:
            'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur.',
          id: '2',
        },
      ],
      swiperOption: {
        slidesPerView: 'auto',
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 6000,
          disableOnInteraction: false,
        },
      },
    }
  },
}
</script>
<style scoped>
.contein-carousel {
  @apply w-full flex flex-col justify-center items-center;
  margin-top: 72px;
}
.carousel-content {
  @apply w-full flex justify-center items-center z-auto;
}
.swiper-wrapper {
  @apply z-auto;
}
.swiper-slide-1 {
  height: 831px;
  width: 100vw;
  background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612320607/Template9/Carousel/slide-headphones-bg_atwvao.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.swiper-slide-2 {
  height: 831px;
  width: 100vw;
  background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612320609/Template9/Carousel/home-sp-slide-02_v3ynzg.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.banner-text-top,
.banner-text-medium,
.banner-text-bottom,
.text-button {
  color: white;
}
.banner-text-top,
.banner-text-medium {
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1);
}
.banner-text-bottom,
.text-button {
  /* font-family: 'Roboto', Helvetica, Arial, sans-serif; */
  font-family: var(--font-style-2);
}
.btn-shop {
  transition: all 0.25s ease;
  background-color: #2c2930;
  height: 51px;
}
.btn-shop:hover {
  transition: all 0.25s ease;
  background-color: white;
}
.btn-shop:hover .text-button {
  transition: all 0.25s ease;
  color: #2c2930;
}
.swiper-pagination-bullet-active {
  opacity: 1;
  background: #2c2930;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 2px;
  display: inline-block;
  border-radius: 100%;
  background: #000;
  opacity: 0.2;
}
/* ----------------------------- */

@screen sm {
  .swiper-slide-1 {
    @apply flex flex-col justify-center items-center z-auto;
  }
  .swiper-slide-2 {
    @apply flex flex-col justify-center items-center z-auto;
  }
  .banner-content-items-1 {
    @apply w-9/0 flex flex-col justify-center items-center;
  }
  .banner-content-items-2 {
    @apply w-7/0 flex flex-col justify-center items-center;
  }
  .content-items-1 {
    @apply w-full;
  }
  .content-items-2 {
    @apply w-full;
  }
  .text-top {
    @apply w-full flex justify-center items-center text-center mb-24;
  }
  .banner-text-top {
    font-size: 14px;
    @apply font-semibold uppercase;
  }
  .text-medium {
    @apply w-full flex flex-col justify-center items-center text-center mb-24;
  }
  .banner-text-medium {
    font-size: 38px;
    line-height: 0.9;
    font-weight: 700;
  }
  .txtmed1 {
    line-height: 1.3;
  }
  .text-bottom {
    @apply w-full flex flex-col justify-center items-center text-center mb-24;
  }
  .banner-text-bottom {
    font-size: 16px;
    font-weight: 600;
    line-height: 32px;
  }
  .banner-button {
    @apply w-full flex flex-col justify-center items-center text-center;
    margin-top: 30px;
  }
  .text-button {
    @apply px-24;
    transition: all 0.25s ease;
    letter-spacing: 1px;
    font-size: 15px;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
  }
}
@screen md {
  .banner-content-items-1 {
    @apply w-7/0;
  }
  .banner-content-items-2 {
    @apply w-6/5;
  }
  .banner-text-top {
    font-size: 16px;
  }
  .banner-text-medium {
    font-size: 72px;
  }
  .banner-text-bottom {
    font-size: 16px;
  }
}
@screen lg {
  .swiper-slide-1 {
    @apply justify-center items-center z-auto;
  }
  .swiper-slide-2 {
    @apply justify-center items-center z-auto;
  }
  .banner-content-items-1 {
    @apply w-9/8 justify-start items-start;
  }
  .banner-content-items-2 {
    @apply w-5/0 justify-start items-start;
  }
  .content-items-1 {
    @apply w-5/0;
  }
  .content-items-2 {
    @apply w-9/0;
  }
  .text-top {
    @apply justify-start items-start text-left mb-0;
  }
  .text-medium {
    @apply justify-start items-start text-left;
  }
  .text-bottom {
    @apply justify-start items-start text-left mb-0;
  }
  .banner-button {
    @apply justify-start items-start text-center;
  }
  .txtmed1 {
    line-height: 0.9;
  }
}
@media (min-width: 1300px) {
  .banner-content-items-1 {
    @apply justify-start items-start;
    width: 1300px;
  }
  .banner-content-items-2 {
    @apply justify-end items-end;
    width: 1300px;
  }
  .content-items-1 {
    width: 45%;
  }
  .content-items-2 {
    width: 35%;
  }
  .text-top {
    @apply mb-20;
  }
  .text-bottom {
    @apply mb-40;
  }
  .banner-text-medium {
    font-size: 90px;
  }
}
</style>
