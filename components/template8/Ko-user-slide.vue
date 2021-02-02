<template>
  <div class="container content-user">
    <div class="list-users">
      <div class="box-content">
        <h2>
          Join us and get discounts every month up to 20%
        </h2>
        <p>
          Friendship contrasted solicitude insipidity in introduced literature
          it.
        </p>
        <div
          class="flex flex-row justify-items-center justify-center align-center gap-3"
        >
          <input
            placeholder="Your email address"
            type="text"
            class="border border-gray-btnhomeviewhover p-2"
          />
          <button class="h-10 p-3 bg-red-btnhoverHeader h-full">SIGN UP</button>
        </div>
      </div>
      <div class="w-full">
        <div class="title-section-products">
          <h3>Adipisicing elit</h3>
          <h2>ENGAGEMENT & WEDDING</h2>
        </div>

        <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide slide-page">
              <div>
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2015/12/testimonial2-1-100x100.jpg"
                  class="photo rounded-full m-5"
                  alt="Product img"
                />
              </div>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias rem exercitationem ut veniam est beatae, accusantium
                  minima deleniti. Delectus iste mollitia, nihil esse iusto
                  exercitationem cumque! Dolores quod ipsa eligendi?
                </p>
                <p><strong>Helen signy</strong> - Happy Costumer</p>
              </div>
            </div>
            <div class="swiper-slide slide-page">
              <div>
                <img
                  src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/02/wood-testimon-7-100x100.jpg"
                  class="photo rounded-full m-5"
                  alt="Product img"
                />
              </div>
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Alias rem exercitationem ut veniam est beatae, accusantium
                  minima deleniti. Delectus iste mollitia, nihil esse iusto
                  exercitationem cumque! Dolores quod ipsa eligendi?
                </p>
                <p><strong>Helen signy</strong> - Happy Costumer</p>
              </div>
            </div>
          </div>
          <div class="swiper-button-prev btn"></div>
          <div class="swiper-button-next btn"></div>
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
        slidesPerView: 1,
        direction: 'horizontal',
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        setWrapperSize: true,
        paginationClickable: true,
        grabCursor: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
      },
    }
  },
}
</script>
<style scoped>
.slide-page {
  @apply text-center grid justify-items-center px-10;
}
.content-user {
  display: grid;
  margin: 0 auto;
}
.list-users {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.title-section-products h3 {
  font-size: 22px;
  color: #c3935b;
  line-height: 32px;
  font-family: Lora;
  font-style: italic;
}
.title-section-products h2 {
  font-size: 30px;
  line-height: 40px;
}
.box-content {
  @apply grid gap-3 bg-white-white p-10 text-center;
}
.box-content h2 {
  font-size: 40px;
}
@media (max-width: 1000px) {
  .list-users {
    grid-template-columns: 1fr;
  }
}
</style>
