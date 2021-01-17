<template>
  <div class="hwwork-content">
    <div class="hwwork-content-items">
      <div class="hwwork-items">
        <div class="tittle">
          <span class="tittle-text">Massa et semper litara.</span>
        </div>
        <div class="subtittle">
          <span class="subtittle-text">Cómo trabajamos</span>
        </div>
        <div class="description">
          <span class="description-text">
            Las autoridades de nuestro negocio lo dirán en términos inequívocos.
          </span>
        </div>
      </div>

      <div v-swiper:mySwiper="swiperOption" ref="mySwiper" class="hwork-dates">
        <div id="hwork-imgaes" class="swiper-wrapper">
          <div id="hwork-text-1" class="swiper-slide">
            <img
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610008702/Komercia/Work/flowers-infobox-1-img-opt-196x177_c4koro.png"
              alt="imageshwork-1"
            />
            <div class="hwork-tittle">
              <span class="tittle-h">Elige las mejores flores</span>
            </div>
            <div class="hwork-description">
              <span class="description-h"
                >Comienzas con un texto, esculpes información, eliminas lo que
                no se necesita, vas al grano, aclaras las cosas, eres una
                persona contenta.</span
              >
            </div>
            <div class="hwork-seemore">
              <span class="seemore-h">{{ $t('home_cardvermas') }}</span>
            </div>
          </div>
          <div id="hwork-text-2" class="swiper-slide">
            <img
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610008704/Komercia/Work/flowers-infobox-2-img-opt-196x177_ekaxlf.png"
              alt="imageshwork-2"
            />
            <div class="hwork-tittle">
              <span class="tittle-h">Hacemos una composición</span>
            </div>
            <div class="hwork-description">
              <span class="description-h"
                >Los defensores rígidos de la estrategia de contenido pueden
                evitar el uso de copias falsas, pero luego los diseñadores
                pueden querer pedirles que proporcionen hojas de estilo con la
                copia.</span
              >
            </div>
            <div class="hwork-seemore">
              <span class="seemore-h">{{ $t('home_cardvermas') }}</span>
            </div>
          </div>
          <div id="hwork-text-3" class="swiper-slide">
            <img
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610008707/Komercia/Work/flowers-infobox-3-img-opt-196x177_qqq1bx.png"
              alt="imageshwork-3"
            />
            <div class="hwork-tittle">
              <span class="tittle-h">El ramo está listo</span>
            </div>
            <div class="hwork-description">
              <span class="description-h"
                >De todos modos, todavía usa Lorem Ipsum y con razón, ya que
                siempre tendrá un lugar en la caja de herramientas de los
                trabajadores web, ordenar que las cosas sucedan, no siempre de
                la manera.</span
              >
            </div>
            <div class="hwork-seemore">
              <span class="seemore-h">{{ $t('home_cardvermas') }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 20,
        breakpoints: {
          580: {
            slidesPerView: 1,
            spaceBetween: 0,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 0,
          },
          2560: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  mounted() {
    console.log('Current Swiper instance object', this.mySwiper)
    this.mySwiper.slideTo(3, 1000, false)
  },
}
</script>
<style scoped>
.hwork-tittle,
.hwork-description,
.hwork-seemore {
  @apply mt-4;
}
.hwork-seemore:hover .seemore-h {
  @apply cursor-pointer;
  color: #777;
}
.tittle-h {
  @apply font-semibold;
  font-family: 'David Libre', serif !important;
  line-height: 34px;
  font-size: 24px;
  color: #2d2a2a;
}
.description-h {
  font-family: 'Lora', serif !important;
  font: inherit;
  font-size: 14px;
  color: #777;
}
.seemore-h {
  @apply uppercase font-semibold border-b-2 border-red-btnbannershop;
  font-family: 'Lora', serif !important;
  font-size: 13px;
  line-height: 18px;
  color: #333;
}

#hwork-text-1 {
  @apply flex flex-col justify-center items-center text-center mt-4;
}
#hwork-text-2 {
  @apply flex flex-col justify-center items-center text-center mt-4;
}
#hwork-text-3 {
  @apply flex flex-col justify-center items-center text-center mt-4;
}
.hwork-description {
  @apply w-9/0;
}

.hwork-dates {
  @apply bg-hworkbg bg-no-repeat bg-auto w-full mt-16;
}

.hwwork-content {
  @apply w-full flex flex-col justify-center items-center my-16;
}
.hwwork-content-items {
  @apply flex flex-col justify-center items-center text-center;
}
.hwwork-items {
  @apply grid grid-cols-1 gap-2 w-full;
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
  font-family: 'David Libre', serif !important;
  color: #2d2a2a;
}
.description-text {
  font-family: 'Lora', serif !important;
  color: #777777;
}
.gify-slider-content {
  @apply flex overflow-hidden;
}

@screen sm {
  .hwwork-content-items {
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
  .hwwork-content-items {
    @apply w-9/5;
  }
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
}

@screen mlg {
  .hwwork-content-items {
    @apply w-9/3;
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
@screen xl {
  .hwwork-content-items {
    @apply w-8/3;
  }
}
@screen xml {
  .hwwork-content-items {
    @apply w-6/3;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen xxl {
  .hwwork-content-items {
    @apply w-4/6;
  }
}
</style>
