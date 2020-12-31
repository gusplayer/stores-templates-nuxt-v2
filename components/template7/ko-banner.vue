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
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>


<style scoped>
    .banner {
        @apply flex flex-col justify-center items-center;
    }
    .banner-content {
        @apply w-full flex flex-col justify-center items-center;
    }
    .banner-content-items {
        @apply w-full flex flex-col justify-center items-center;
    }
    .banner-content-buttons {
        @apply flex flex-row gap-3 justify-center items-center;
    }
    .content-bttns-shop {
        @apply mr-2 px-6 h-10 rounded-full bg-red-btnbannershop shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
    }
    .content-bttns-view {
        @apply ml-2 px-6 h-10 rounded-full border-gray-btnbannerviewhover border-2 shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
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
    .banner-text-tittle {
        @apply text-blue-headerpage ;
    }
    .banner-text-subtittle {
        @apply text-gray-btnbannerviewhover;
    }
    .text-tittle {
        @apply flex justify-center items-center text-center leading-tight;
    }
    .text-subtittle {
        @apply flex justify-center items-center text-center break-all;
    }
    .banner-content-img {
        @apply mb-6;
    }
    .banner-img {
        @apply flex w-full justify-center items-center;
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
            @apply w-full;
        }
        .banner-text-tittle {
            @apply w-full text-5xl;
        }
        .banner-text-subtittle {
            @apply w-full text-lg;
        }
        .text-tittle {
            @apply w-9/0 leading-tight;
        }
        .text-subtittle {
            @apply w-9/0 mt-4;
        }
        .banner-content-items {
            @apply w-full;
        }
        .banner-content-img {
            @apply mt-6;
        }
        .banner-content-buttons {
            @apply mt-6 mb-10 w-9/0;
        }
        /* .content-bttns-shop {
            @apply px-4 h-10;
        }
        .content-bttns-view {
            @apply px-4 border-2 h-10;
        } */
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
        .banner {
            @apply w-8/0;
        }
        .banner-text-tittle {
            @apply w-5/0;
        }
        .banner-text-subtittle {
            @apply w-9/0 text-xl;
        }
        .banner-content-buttons {
            @apply mt-10 mb-12;
        }
    }
    @screen lg {
        .banner {
            @apply w-full grid grid-cols-2 gap-6;
        }
        .banner-text-tittle {
            @apply w-8/0 text-5xl;
        }
        .text-tittle {
            @apply w-8/0;
        }
    }
    @screen mlg {
        .banner {
            @apply w-9/3;
        }
        .banner-text-tittle {
            @apply w-9/0 text-6xl;
        }
        .banner-text-subtittle {
            @apply w-9/0 text-lg;
        }
    }
    @screen xl{
        .banner {
            @apply w-8/3;
        }
        .banner-text-tittle {
            @apply text-6xl;
        }
        .banner-text-subtittle {
            @apply w-8/0 text-base;
        }
        .text-tittle {
            @apply w-8/3;
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
    @screen xml {
        .banner {
            @apply w-6/3;
        }
        .banner-text-tittle {
            @apply text-6xl;
        }
    }
    @screen xxl{
        .banner {
            @apply w-4/6;
        }
    }
</style>
