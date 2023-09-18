<template>
  <div class="contein-carousel" :style="[banner, settingGeneral]">
    <div
      v-if="banner"
      class="carousel-content"
      :style="[
        {
          '--font-style-1':
            settingGeneral && settingGeneral.fount_1
              ? settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            settingGeneral && settingGeneral.fount_2
              ? settingGeneral.fount_2
              : 'Roboto',
        },
      ]"
    >
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div v-if="banner.values" class="swiper-wrapper">
          <div
            v-for="(elementBanner, index) in banner.values"
            :key="index"
            class="swiper-slide swiper-slide w-full flex justify-center items-center"
          >
            <picture v-if="dataStore.tienda.id_tienda === 889">
              <source
                media="(max-width: 799px)"
                srcset="../../assets/img/perfecta/banner1.webp"
              />
              <source
                media="(min-width: 800px)"
                :srcset="
                  idCloudinaryBanner(
                    elementBanner['url_img_background'],
                    'banner'
                  )
                "
              />
              <img
                v-lazy="
                  idCloudinaryBanner(
                    elementBanner['url_img_background'],
                    'banner'
                  )
                "
                class="slide-bgWeb"
                alt="banner template13"
              />
            </picture>
            <img
              v-else
              class="slide-bgWeb"
              :src="
                idCloudinaryBanner(
                  elementBanner['url_img_background'],
                  'banner'
                )
              "
              :alt="`img_banner_${index}`"
            />
            <div class="banner-content-items-1 absolute">
              <div class="content-items-1">
                <div class="text-top">
                  <p
                    class="banner-text-top"
                    :style="`color: ${elementBanner['--color_pretitle']};`"
                  >
                    {{ elementBanner.pretitle }}
                  </p>
                </div>
                <div class="text-medium">
                  <p
                    class="banner-text-medium"
                    :style="`color: ${elementBanner['--color_title']};`"
                  >
                    {{ elementBanner.title }}
                  </p>
                </div>
                <div class="text-bottom">
                  <p
                    class="banner-text-bottom"
                    :style="`color: ${elementBanner['--color_description']};`"
                  >
                    {{ elementBanner.description }}
                  </p>
                </div>
                <div v-if="elementBanner.url_redirect" class="banner-button">
                  <a
                    :href="`${elementBanner.url_redirect}`"
                    rel="noreferrer noopener"
                    class="btn-shop"
                    :class="elementBanner.url_redirect ? 'cursorPointer' : null"
                  >
                    <span class="text-button">
                      {{ $t('home_comprarAhora') }}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="swiper-pagination" />
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinaryBanner from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinaryBanner],
  props: {
    dataStore: Object,
    banner: Object,
    settingGeneral: Object,
  },
  data() {
    return {
      swiperOption: {
        autoHeight: true,
        slidesPerView: 'auto',
        loop: true,
        effect: 'fade',
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
  watch: {
    'banner.values'() {
      this.autoplayBanner()
    },
  },
  mounted() {
    this.autoplayBanner()
  },
  methods: {
    autoplayBanner() {
      if (this.banner && this.banner.values.length == 1) {
        this.swiperOption.autoplay.delay = 900000000000000000
      } else {
        this.swiperOption.autoplay.delay = 6000
      }
    },
  },
}
</script>
<style scoped>
picture {
  width: 100%;
}
.contein-carousel {
  @apply w-full flex flex-col justify-center items-center;
  /* margin-top: 72px; */
}
.carousel-content {
  @apply w-full flex justify-center items-center z-auto;
}
.cursorPointer {
  cursor: pointer;
}
.swiper-wrapper {
  @apply z-auto;
}
/* .swiper-slide-1 {
  max-height: 831px;
  height: 831px;
  height: 50vw;
  object-fit: contain;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
} */
.text-button {
  color: var(--color_text_btn);
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
.carousel-content >>> .swiper-pagination-bullet-active {
  opacity: 1;
  background: #2c2930;
}
.swiper-pagination-bullet {
  width: 12px;
  height: 2px;
  display: inline-block;
  border-radius: 100%;
  background: white;
  opacity: 0.2;
}
.banner-content-items-1 {
  padding: 20px;
}
.slide-bgWeb {
  display: initial;
  @apply w-full object-center object-cover;
}
@screen sm {
  /* .swiper-slide-1 {
    @apply flex flex-col justify-center items-center z-auto;
  } */
  .banner-content-items-1 {
    @apply w-9/0 flex flex-col justify-center items-center;
  }
  .content-items-1 {
    @apply w-full;
  }
  .text-top {
    @apply w-full flex justify-center items-center text-center mb-10;
  }
  .banner-text-top {
    font-size: 10px;
    @apply font-semibold uppercase flex;
  }
  .text-medium {
    @apply w-full flex flex-col justify-center items-center text-center mb-10;
  }
  .banner-text-medium {
    font-size: 18px;
    line-height: 0.9;
    font-weight: 700;
  }
  .text-bottom {
    @apply hidden;
  }
  .banner-button {
    @apply w-full flex flex-col justify-center items-center text-center;
  }
  .text-button {
    @apply px-14;
    transition: all 0.25s ease;
    letter-spacing: 1px;
    font-size: 13px;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
  }
  .btn-shop {
    transition: all 0.25s ease;
    background-color: var(--color_background_btn);
    border-radius: var(--radius_btn);
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .btn-shop:hover {
    transition: all 0.25s ease;
    background-color: #ffffff;
  }
  .btn-shop:hover .text-button {
    transition: all 0.25s ease;
    color: #2c2930;
  }
}
@screen md {
  .banner-content-items-1 {
    display: initial;
    @apply w-7/0;
  }
  .text-top {
    @apply mb-24;
  }
  .banner-text-top {
    font-size: 14px;
  }

  .banner-text-medium {
    font-size: 40px;
  }
  .text-bottom {
    @apply w-full flex flex-col justify-center items-center text-center mb-24;
  }
  .banner-text-bottom {
    font-size: 16px;
  }
  .text-medium {
    @apply mb-24;
  }
  .banner-text-bottom {
    font-size: 16px;
    font-weight: 600;
    @apply flex;
  }
  .banner-button {
    @apply w-full flex flex-col justify-center items-center text-center;
    margin-top: 30px;
  }
}
@screen lg {
  /* .swiper-slide-1 {
    @apply justify-center items-center z-auto;
  } */
  .banner-content-items-1 {
    @apply w-9/8 justify-start items-start;
  }
  .content-items-1 {
    @apply w-5/0;
  }
  .text-top {
    @apply justify-start items-start text-left mb-10;
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
  .banner-text-medium {
    font-size: 72px;
  }
}
@media (min-width: 1300px) {
  .banner-content-items-1 {
    @apply justify-start items-start;
    width: 1300px;
  }
  .content-items-1 {
    width: 47%;
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
@media (min-width: 1400px) {
  /* .slide-bgWeb {
    max-height: 732px;
  } */
}
</style>
