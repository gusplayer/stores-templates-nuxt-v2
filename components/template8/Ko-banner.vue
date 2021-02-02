<template>
  <div class="container-swiper" v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide slide-content slide-1">
        <div></div>
        <div class="content-text">
          <h3 style="font-style: italic; font-family: Lora; font-size: 22px;">
            Fine Jewelry
          </h3>

          <h1>IT'S A GIFT FOR SOMEONE SPECIAL</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            autem sequi accusamus quasi velit, quia tempora soluta excepturi.
          </p>
          <div class="buttons-banner">
            <div class="btn btn-white">SHOP NOW</div>
            <div class="btn btn-border">VIEW MORE</div>
          </div>
        </div>
      </div>
      <div class="swiper-slide slide-content slide-2">
        <div class="content-text">
          <h3 style="font-style: italic; font-family: Lora; font-size: 22px;">
            Fine Jewelry
          </h3>

          <h1>IT'S A TRAP</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            autem sequi accusamus quasi velit, quia tempora soluta excepturi.
          </p>
          <div class="buttons-banner">
            <div class="btn btn-white">SHOP NOW</div>
            <div class="btn btn-border">VIEW MORE</div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
    <div class="swiper-button-prev btn"></div>
    <div class="swiper-button-next btn"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        pagination: {
          el: '.swiper-pagination',
        },
        setWrapperSize: true,
        paginationClickable: true,
        grabCursor: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
  },
  methods: {
    changeSlide() {
      this.swiper.slidePrev(500, false)
    },
  },
}
</script>
<style scoped>
.container-swiper {
  @apply w-full h-screen;
}
.first-banner {
}
.slide-content {
  display:  grid;
  grid-template-columns: 1fr 1fr;
  @apply h-full text-white-white justify-items-center content-center items-center justify-center;
}
.content-text {
  @apply p-16;
}
.slide-2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1450297166380-cabe503887e5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=745&q=80');
  text-align: center;
}
h1 {
  font-size: 50px;
  line-height: 50px;
}
.slide-1 {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url('https://images.unsplash.com/photo-1545839539-88eac4c475d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80');
}
.buttons-banner {
  @apply grid grid-cols-2 gap-5 p-5 mx-5;
}
.btn {
  @apply flex content-center justify-center p-3 cursor-pointer;
}
.btn-white {
  color: black;
  @apply bg-white-white;
}
.btn-border {
  @apply border border-white-white;
}
@media screen(min-width: 1000px){
  .slide-content{
    grid-template-columns:1fr;
  }
}
</style>
