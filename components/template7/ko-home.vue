<template>
  <div class="banner-content">
      <div class="banner">
          <div class="banner-content-items">
              <div class="banner-content-img">
                  <img class="img-banner" src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2018/11/flowers-slider-txt-element.jpg.png" alt="">
              </div>
              <div class="text-tittle">
                  <span class="banner-text-tittle">
                      Hermosas flores para sus vacaciones.
                  </span>
              </div>
              <div class="text-subtittle">
                  <span class="banner-text-subtittle">
                      A volutpat nisl ante una parturient vestibulum parturient pretium velit egestas sit donec vestibulum.
                  </span>
              </div>
              <div class="banner-content-buttons">
                <button class="content-bttns-shop">
                    <span class="content-textbutton-shop">
                        Comprar
                    </span>
                </button>
                <button class="content-bttns-view">
                    <span class="content-textbutton-viewmore">
                        Ver más
                    </span>
                </button>
              </div>
          </div>
          <div class="banner-img">
              <img class="img-girl" src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2018/12/flowers-slider-2-img.png" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .banner-content {
        @apply w-full flex flex-col justify-center items-center bg-headaerbg;
    }
    .banner-content-items {
        @apply w-full flex flex-col justify-center items-center;
    }
    .banner-content-buttons {
        @apply flex flex-row gap-3 justify-center items-center;
    }
    .content-bttns-shop {
        @apply rounded-full bg-red-btnbannershop shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
    }
    .content-bttns-view {
        @apply rounded-full border-gray-btnbannerviewhover border-2 shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
    }
    .content-bttns-shop:hover {
        @apply bg-red-btnbannershophover;
    }
    .content-bttns-view:hover {
        @apply bg-gray-btnbannerviewhover text-white-white;
    }
    .content-textbutton-shop {
        @apply text-white-white;
    }
    .banner-text-subtittle {
        @apply text-gray-btnbannerviewhover;
    }
    .text-tittle {
        @apply flex justify-center items-center text-center;
    }
    .text-subtittle {
        @apply flex justify-center items-center text-center;
    }
    .banner-content-img {
        @apply mb-6;
    }
    .banner-img {
        @apply flex justify-center items-center;
    }
    .banner-text-tittle {
        font-family: 'Great Vibes', cursive !important;
    }
    .banner-text-subtittle {
        font-family: 'Lora', cursive !important;
    }
    .content-textbutton-shop {
        font-family: 'Lora', serif !important;
    }
    .content-textbutton-viewmore {
        font-family: 'Lora', serif !important;
    }
    @screen sm {
        .banner {
            @apply w-full flex flex-col justify-center items-center;
        }
        .banner-text-tittle {
            @apply w-full text-4.4xl text-blue-headerpage ;
        }
        .banner-text-subtittle {
            @apply text-xl;
        }
        .text-tittle {
            @apply w-9/0;
        }
        .text-subtittle {
            @apply w-9/0 mt-8;
        }
        .banner-content-items {
            @apply w-full;
        }
        .banner-content-img {
            @apply mt-6;
        }
        .banner-content-buttons {
            @apply my-12 w-9/0;
        }
        .content-bttns-shop {
            @apply py-3 px-4  h-10;
        }
        .content-bttns-view {
            @apply py-3 px-4 border-2  h-10;
        }
        .content-textbutton-shop {
            @apply text-xs;
        }
        .content-textbutton-viewmore {
            @apply text-xs;
        }
        .banner-img{
            @apply w-9/0;
        }
    }
    @screen md {
        .banner-text-tittle {
            @apply w-5/0 text-5xl text-blue-headerpage ;
        }
        .banner-text-subtittle {
            @apply w-9/0 text-xl;
        }
        .text-tittle {
            @apply w-9/0;
        }
        .text-subtittle {
            @apply w-9/0 ;
        }
        .banner-content-buttons {
            @apply my-12 w-9/0;
        }
        .content-bttns-shop {
            @apply py-3 px-6 h-10;
        }
        .content-bttns-view {
            @apply py-3 px-6 border-2 h-10;
        }
    }
    @screen lg {
        .banner {
            @apply flex w-full grid grid-cols-2 gap-2;
        }
        .banner-text-tittle {
            @apply w-8/0 text-5xl text-blue-headerpage ;
        }
        .banner-text-subtittle {
            @apply w-9/0 text-xl;
        }
        .text-tittle {
            @apply w-8/0;
        }
        .text-subtittle {
            @apply w-9/0 ;
        }
    }
    @screen xl{
        .banner {
            @apply flex w-8/3 grid grid-cols-2 gap-2;
        }
        .banner-text-tittle {
            @apply w-8/0 text-6xl text-blue-headerpage ;
        }
        .banner-text-subtittle {
            @apply w-8/0 text-base;
        }
        .text-tittle {
            @apply w-8/3 leading-tight;
        }
        .text-subtittle {
            @apply w-8/3 mt-6;
        }
        .banner-content-buttons {
            @apply my-10 w-9/0;
        }
        .banner-img{
            @apply w-full;
        }
    }
    @screen xxl{
        .banner {
            @apply flex w-4/6 grid grid-cols-2 gap-2;
        }
        .banner-text-tittle {
            @apply w-8/0 text-6xl text-blue-headerpage ;
        }
        .banner-text-subtittle {
            @apply w-8/0 text-base;
        }
        .text-tittle {
            @apply w-8/3 leading-tight;
        }
        .text-subtittle {
            @apply w-8/3 mt-6;
        }
        .banner-content-buttons {
            @apply my-10 w-9/0;
        }
        .banner-img{
            @apply w-full;
        }
    }
</style>
