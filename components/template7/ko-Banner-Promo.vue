<template>
  <div class="promo-banner-content">
    <div class="promo-banner-items">
      <div class="promo-banners">
        <figure class="promo-banner-images" id="promo-banner-images-1">
          <img
            id="images-1"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-large-min_kdnmvh.jpg"
            alt="left-banner"
          />
          <div class="promo-banner-text" id="promo-banner-text-1">
            <p class="promo-banner-tittle" id="promo-banner-tittle-1"
              >Flores <p class="promo-banner-tittle" id="promo-banner-tittle-1">para vacaciones.</p></p
            >
            <span class="promo-banner-subtittle" id="promo-banner-subtittle-1"
              >Hemos creado una nueva colección de ramos.</span
            >
            <div class="banner-content-buttons">
              <button class="content-bttns-shop">
                <nuxt-link :to="'/productos'">
                  <span class="content-textbutton-shop">
                    {{ $t('productdetail_btnComprar') }}
                  </span>
                </nuxt-link>
              </button>
            </div>
          </div>
          <div class="banner-border-1"></div>
        </figure>
      </div>
      <div class="banner-medium">
        <div class="promo-banner-2">
          <figure class="promo-banner-images" id="promo-banner-images-2">
            <img
              id="images-2"
              class="images"
              width="384"
              height="230"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-medium-top_irhu3b.jpg"
              alt="medium-top-banner"
            />
            <div class="promo-banner-text" id="promo-banner-text-2">
              <p class="promo-banner-tittle" id="promo-banner-tittle-2"
                >Flores <p class="promo-banner-tittle" id="promo-banner-tittle-2">para la fecha.</p></p
              >
              <span class="promo-banner-subtittle" id="promo-banner-subtittle-medium"
                >Flores delicadas para ella.</span
              >
            </div>
          </figure>
        </div>
        <div class="promo-banner-3">
          <figure class="promo-banner-images" id="promo-banner-images-3">
            <img
              id="images-3"
              class="images"
              width="384"
              height="230"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-medium-bottom_rnpeht.jpg"
              alt="medium-bottom-banner"
            />
            <div class="promo-banner-text" id="promo-banner-text-3">
              <p class="promo-banner-tittle" id="promo-banner-tittle-3"
                >Flores <p class="promo-banner-tittle" id="promo-banner-tittle-3">para el Festival.</p></p
              >
              <span class="promo-banner-subtittle" id="promo-banner-subtittle-medium"
                >Decora tus vacaciones.</span
              >
            </div>
          </figure>
        </div>
      </div>
      <div class="promo-banners">
        <figure class="promo-banner-images" id="promo-banner-images-4">
          <img
            id="images-4"
            class="images"
            width="283"
            height="480"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-bottom-right-full-heigh-min_gbnlij.jpg"
            alt="right-banner"
          />
          <div class="promo-banner-text" id="promo-banner-text-4">
            <p class="promo-banner-tittle" id="promo-banner-tittle-4"
              >Flores <p class="promo-banner-tittle" id="promo-banner-tittle-4">para cumpleaños.</p></p
            >
            <span class="promo-banner-subtittle" id="promo-banner-subtittle-4"
              >Crea tu bougnet.</span
            >
          </div>
          <div class="banner-border-2"></div>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      Banner: [
        {
          background:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-large-min_kdnmvh.jpg',
          tittle: 'Flores para vacaciones.',
          description: 'Hemos creado una nueva colección de ramos.',
          id: '1',
        },
        {
          background:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-medium-top_irhu3b.jpg',
          tittle: 'Flores para fecha.',
          description: 'Flores dedicadas para ella.',
          id: '2',
        },
        {
          background:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-medium-bottom_rnpeht.jpg',
          tittle: 'Flores para el festival',
          description: 'Decora tus vacaciones.',
          id: '3',
        },
        {
          background:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-bottom-right-full-heigh-min_gbnlij.jpg',
          tittle: 'Flores para cumpleaños.',
          description: 'Crea tu bougnet.',
          id: '4',
        },
      ],
    }
  },
}
</script>

<style scoped>
.promo-banner-content {
  @apply w-full flex flex-row justify-center items-center mt-40;
}
.promo-banner-items {
  @apply flex flex-row justify-center items-start w-full h-full;
}
.banner-medium {
  @apply grid grid-rows-2 gap-5 mx-5;
}
figure {
  @apply overflow-hidden m-0 p-0;
}
.promo-banner-items figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}
.promo-banner-items figure:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.1);
}
.promo-banner-images {
  @apply flex justify-center items-center;
}
.promo-banner-text {
  @apply absolute flex flex-col;
}
.promo-banner-tittle {
  font-family: 'Great Vibes', cursive !important;
}
.promo-banner-subtittle {
  font-family: 'Lora', serif !important ;
  font-style: italic;
}
.content-textbutton-shop {
  font-family: 'Lora', serif !important;
}
.banner-content-buttons {
  @apply flex flex-row gap-3 justify-center items-center;
}
.content-bttns-shop {
  @apply mr-2 px-6 h-36 rounded-full bg-red-btnbannershop shadow-md justify-center items-center flex font-semibold uppercase tracking-wider z-10;
}
.content-bttns-shop:hover {
  @apply bg-red-btnbannershophover cursor-pointer;
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  @apply text-white-white;
}
.content-textbutton-shop {
  @apply text-xs;
}
#promo-banner-text-1, #promo-banner-text-4 {
  @apply justify-center items-center flex;
}
#promo-banner-text-2, #promo-banner-text-3{
  @apply justify-start items-start flex;
}
.promo-banner-subtittle {
  color: rgba(48,48,48,.7);
}
#promo-banner-tittle-1 {
  color: #c24d94;
}
#promo-banner-tittle-2 {
  color: #b45080;
}
#promo-banner-tittle-3 {
  color: #598060;
}
#promo-banner-tittle-4 {
  color: #647db4;
}
.promo-banners, .banner-medium, .promo-banner-3{
  @apply cursor-pointer;
}
@screen sm {
  .promo-banners {
    @apply sr-only;
  }
  #promo-banner-tittle-2 {
    line-height: 42px;
    font-size: 32px;
  }
  #promo-banner-tittle-3 {
    line-height: 42px;
    font-size: 32px;
  }
  #promo-banner-tittle-2, #promo-banner-tittle-3, #promo-banner-subtittle-medium {
    @apply pr-16 leading-normal  ;
  }
  .banner-content-buttons{
    @apply sr-only;
  }
  
}
@screen md {
  .promo-banners {
    @apply not-sr-only;
  }
  .promo-banner-items {
    @apply w-9/5;
  }
  .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 128px;
    padding-bottom: 128px;
    
    padding-left: 129px;
    padding-right: 130px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 128px;
    padding-bottom: 128px;
    
    padding-left: 69px;
    padding-right: 70px;
  }
  #promo-banner-tittle-1 {
    line-height: 34px;
    font-size: 30px;
  }
  #promo-banner-tittle-2 {
    line-height: 34px;
    font-size: 24px;
  }
  #promo-banner-tittle-3 {
    line-height: 34px;
    font-size: 24px;
  }
  #promo-banner-tittle-4 {
    line-height: 34px;
    font-size: 24px;
  }
  .promo-banner-subtittle {
    @apply w-8/0 text-center;
  }
  .promo-banner-subtittle {
    line-height: 30px;
    font-size: 12px;
  }
  #promo-banner-subtittle-medium {
    @apply text-left;
  }
  #promo-banner-text-1{
    @apply pb-10 leading-normal;
  }
  #promo-banner-text-4{
    @apply pb-24 leading-normal;
  }
  #promo-banner-tittle-2, #promo-banner-tittle-3, #promo-banner-subtittle-medium {
    @apply pr-16 leading-normal  ;
  }
}
@media (min-width:900px){
    .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 160px;
    padding-left: 160px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 160px;
    padding-left: 80px;
  }
}
@media (min-width:970px){
    .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 190px;
    /* padding-bottom: 140px; */
    
    padding-left: 190px;
    /* padding-right: 130px; */
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 190px;
    /* padding-bottom: 128px; */
    
    padding-left: 100px;
    /* padding-right: 70px; */
  }
}
@screen lg {
  .promo-banner-items {
    @apply w-9/5;
  }
  .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 177px;
    padding-bottom: 176px;
    
    padding-left: 178px;
    padding-right: 179px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 177px;
    padding-bottom: 176px;
    
    padding-left: 94px;
    padding-right: 95px;
  }
  #promo-banner-tittle-1 {
    line-height: 46px;
    font-size: 36px;
  }
  #promo-banner-tittle-2 {
    line-height: 34px;
    font-size: 24px;
  }
  #promo-banner-tittle-3 {
    line-height: 34px;
    font-size: 24px;
  }
  #promo-banner-tittle-4 {
    line-height: 34px;
    font-size: 24px;
  }
  .promo-banner-subtittle {
    @apply w-full;
  }
  .promo-banner-subtittle {
    line-height: 58px;
    font-size: 14px;
  }
  #promo-banner-text-1{
    @apply pb-24 leading-normal;
  }
  #promo-banner-text-4{
    @apply pb-40 leading-normal;
  }
  #promo-banner-tittle-2, #promo-banner-tittle-3, #promo-banner-subtittle-medium {
    @apply pr-32 leading-normal  ;
  }
  .banner-content-buttons{
    @apply not-sr-only;
  }
}
@media (min-width:1120px){
  .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 210px;    
    padding-left: 210px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 210px;    
    padding-left: 110px;
  }
}
@media (min-width:1180px){
    .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 220px;    
    padding-left: 220px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 210px;    
    padding-left: 110px;
  }
}
@media (min-width:1240px){
    .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 230px;    
    padding-left: 230px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 230px;
    padding-left: 130px;
  }
}
@screen mlg {
  .promo-banner-items {
    @apply w-9/3;
  }
  #promo-banner-tittle-1 {
    line-height: 58px;
    font-size: 48px;
  }
  #promo-banner-tittle-2 {
    line-height: 42px;
    font-size: 32px;
  }
  #promo-banner-tittle-3 {
    line-height: 42px;
    font-size: 32px;
  }
  #promo-banner-tittle-4 {
    line-height: 42px;
    font-size: 32px;
  }
  .promo-banner-subtittle {
    line-height: 58px;
    font-size: 14px;
  }
  .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 216px;
    padding-bottom: 216px;
    
    padding-left: 218px;
    padding-right: 219px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 216px;
    padding-bottom: 216px;
    
    padding-left: 117px;
    padding-right: 118px;
  }
  #promo-banner-subtittle-medium {
    @apply leading-tight;
  }
  #promo-banner-text-1{
    @apply pb-40 leading-normal;
  }
  #promo-banner-text-4{
    @apply pb-56 leading-normal;
  }
  #promo-banner-tittle-2, #promo-banner-tittle-3, #promo-banner-subtittle-medium {
    @apply pr-40 leading-normal  ;
  }

}
@screen xl {
  .promo-banner-items {
    @apply w-8/3;
  }
  #promo-banner-tittle-1 {
    line-height: 58px;
    font-size: 48px;
  }
  #promo-banner-tittle-2 {
    line-height: 42px;
    font-size: 32px;
  }
  #promo-banner-tittle-3 {
    line-height: 42px;
    font-size: 32px;
  }
  #promo-banner-tittle-4 {
    line-height: 42px;
    font-size: 32px;
  }
  .promo-banner-subtittle {
    line-height: 58px;
    font-size: 85%;
  }
  .banner-border-1 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 216px;
    padding-bottom: 216px;
    
    padding-left: 218px;
    padding-right: 219px;
  }
  .banner-border-2 {
    @apply absolute border-4 border-white-white border-opacity-50 z-auto;
    padding-top: 216px;
    padding-bottom: 216px;
    
    padding-left: 117px;
    padding-right: 118px;
  }
  #promo-banner-text-1{
  @apply pb-40 leading-normal;
  }
  #promo-banner-text-4{
    @apply pb-56 leading-normal;
  }
  #promo-banner-tittle-2, #promo-banner-tittle-3, #promo-banner-subtittle-medium {
    @apply pr-40 leading-normal  ;
  }

}
@screen xml {
  .promo-banner-items {
    @apply w-6/3;
  }
}
@screen xxl {
  .promo-banner-items {
    @apply w-4/6;
  }
}
</style>
