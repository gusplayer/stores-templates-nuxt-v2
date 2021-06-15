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
      v-if="this.banner"
    >
      <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
        <div class="swiper-wrapper" v-if="this.banner.values">
          <div
            class="swiper-slide"
            v-for="(elementBannner, index) in this.banner.values"
            :key="index"
          >
            <div
              class="swiper-slide-1"
              loading="lazy"
              :style="
                mobileFirst == true
                  ? `background-image: url(${idCloudinarys(
                      elementBannner['url_img_background'],
                      320,
                      350
                    )})`
                  : `background-image: url(${idCloudinaryBanner(
                      elementBannner['url_img_background']
                    )})`
              "
            >
              <div class="banner-content-items-1">
                <div class="content-items-1">
                  <div class="text-top">
                    <p
                      class="banner-text-top"
                      :style="`color: ${elementBannner['--color_pretitle']};`"
                    >
                      {{ elementBannner.pretitle }}
                    </p>
                  </div>
                  <div class="text-medium">
                    <p
                      class="banner-text-medium"
                      :style="`color: ${elementBannner['--color_title']};`"
                    >
                      {{ elementBannner.title }}
                    </p>
                  </div>
                  <div class="text-bottom">
                    <p
                      class="banner-text-bottom"
                      :style="`color: ${elementBannner['--color_description']};`"
                    >
                      {{ elementBannner.description }}
                    </p>
                  </div>
                  <div class="banner-button" v-if="elementBannner.url_redirect">
                    <a
                      :href="`${elementBannner.url_redirect}`"
                      rel="noreferrer noopener"
                      class="btn-shop"
                      :class="
                        elementBannner.url_redirect ? 'cursorPointer' : null
                      "
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
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script>
import idCloudinarys from '../../mixins/idCloudinary'
import idCloudinaryBanner from '../../mixins/idCloudinary'

export default {
  props: {
    dataStore: Object,
    banner: Object,
    settingGeneral: Object,
  },
  mixins: [idCloudinarys, idCloudinaryBanner],
  mounted() {
    this.autoplayBanner()
    if (this.mobileCheck()) {
      this.mobileFirst = true
    } else {
      this.mobileFirst = false
    }
  },
  data() {
    return {
      mobileFirst: '',
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
  computed: {},
  methods: {
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
    autoplayBanner() {
      if (this.banner && this.banner.values.length == 1) {
        this.swiperOption.autoplay.delay = 900000000000000000
      } else {
        this.swiperOption.autoplay.delay = 6000
      }
    },
  },
  watch: {
    'banner.values'() {
      this.autoplayBanner()
    },
  },
}
</script>
<style scoped>
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
@screen sm {
  .swiper-slide-1 {
    /* max-height: 831px; */
    height: 350px;
    /* height: 50vw; */
    object-fit: contain;
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .swiper-slide-1 {
    @apply flex flex-col justify-center items-center z-auto;
  }
  .banner-content-items-1 {
    @apply w-9/0 flex flex-col justify-center items-center;
  }
  .content-items-1 {
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
    font-size: 25px;
    line-height: 0.9;
    font-weight: 700;
  }
  .text-bottom {
    @apply w-full flex flex-col justify-center items-center text-center mb-24;
  }
  .banner-text-bottom {
    font-size: 16px;
    font-weight: 600;
  }
  .banner-button {
    @apply w-full flex flex-col justify-center items-center text-center;
    margin-top: 30px;
  }
  .text-button {
    @apply px-24;
    transition: all 0.25s ease;
    letter-spacing: 1px;
    font-size: 12px;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
  }
  .btn-shop {
    transition: all 0.25s ease;
    background-color: var(--color_background_btn);
    border-radius: var(--radius_btn);
    height: 40px;
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
  .swiper-slide-1 {
    max-height: 831px;
    /* height: 380px; */
    height: 50vw;
    object-fit: contain;
    width: 100vw;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
  .banner-content-items-1 {
    display: initial;
    @apply w-7/0;
  }
  .banner-text-top {
    font-size: 16px;
  }
  .banner-text-medium {
    font-size: 40px;
  }
  .banner-text-bottom {
    font-size: 16px;
  }
}
@screen lg {
  .swiper-slide-1 {
    @apply justify-center items-center z-auto;
  }
  .banner-content-items-1 {
    @apply w-9/8 justify-start items-start;
  }
  .content-items-1 {
    @apply w-5/0;
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
/* @media (max-width: 500px) {
  .banner-content-items-1 {
    display: none;
  }
} */
</style>
