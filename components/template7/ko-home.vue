<template>
  <div class="home-content">
      <div class="home">
          <div class="home-content-items">
              <div class="home-content-img">
                  <img class="img-home" src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2018/11/flowers-slider-txt-element.jpg.png" alt="">
              </div>
              <div class="text-tittle">
                  <span class="home-text-tittle">
                      Hermosas Flores para sus vacaiones.
                  </span>
              </div>
              <div class="text-subtittle">
                  <span class="home-text-subtittle">
                      A volutpat nisl ante una parturient vestibulum parturient pretium velit egestas sit donec vestibulum.
                  </span>
              </div>
              <div class="home-content-buttons">
                <button class="content-bttns-shop">
                    <span class="content-textbutton-shop">
                        COMPRAR
                    </span>
                </button>
                <button class="content-bttns-view">
                    <span class="content-textbutton-viewmore">
                        VER MÁS
                    </span>
                </button>
              </div>
          </div>
          <div >
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
    .home-content {
        @apply w-full flex flex-col justify-center items-center bg-blue-headerbg;
    }
    
    .home-content-items {
        @apply flex flex-col justify-center items-center;
    }
    .home-content-buttons {
        @apply flex flex-wrap gap-4 mt-16 px-6;
    }
    .content-bttns-shop {
        @apply rounded-full py-3 px-6 bg-red-btnhomeshop shadow-md h-12 justify-center items-center flex;
    }
    .content-bttns-shop:hover {
        @apply bg-red-btnhomeshophover;
    }
    .content-textbutton-shop {
        @apply text-white-white;
    }
    .content-bttns-view {
        @apply rounded-full py-3 px-6 border-gray-btnhomeviewhover border-2 shadow-md h-12 justify-center items-center flex;
    }
    .content-bttns-view:hover {
        @apply bg-gray-btnhomeviewhover text-white-white;
    }
    .text-subtittle {
        @apply mt-8;
    }
    .home-text-subtittle {
        @apply text-gray-btnhomeviewhover font-semibold;
    }
    .text-tittle {
        @apply w-8/0 flex justify-center items-center text-center;
    }
    .text-subtittle {
        @apply w-8/0 flex justify-center items-center text-center;
    }
    .home-content-img {
        @apply mb-6;
    }
    .img-girl {
      @apply  transition duration-500 ease-in-out;
    }
    .img-girl:hover {
        @apply  transform translate-y-1 scale-110;
    }
    @screen sm {
        .home {
            @apply w-full flex flex-col justify-center items-center;
        }
        .home-text-tittle {
            @apply text-2xl text-blue-headerpage font-semibold italic;
        }
        .home-content-img {
            @apply mt-6;
        }
        .home-content-buttons {
            @apply my-16;
        }
    }
    @screen lg {
        .home {
            @apply flex w-6/0 grid grid-cols-2 gap-2;
        }
        .home-text-tittle {
            @apply text-4xl text-blue-headerpage font-semibold italic;
        }
        
    }
</style>
