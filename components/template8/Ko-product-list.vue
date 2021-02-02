<template>
<div class="container content-list">
  <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="list-products swiper-slide"
        v-for="(product, index) in listproducts"
        :key="index"
      >
        <div class="product">
          <img class="img-product" :src="product.img" alt="" />
          <div class="buttons-product">
            <div><span class="material-icons">add_shopping_cart</span></div>
            <div><span class="material-icons">search</span></div>
            <div><span class="material-icons">compare_arrows</span></div>
            <div><span class="material-icons">favorite_border</span></div>
          </div>
          <div class="content-info">
            <p>
              <strong>{{ product.name }}</strong>
            </p>
            <p style="color: #6d6d6d; font-size: 15px;">
              {{ product.category }}
            </p>
            <p style="color: #c3935b; font-size: 14px; font-weight: 700;">
              ${{ product.price }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-button-prev btn"></div>
    <div class="swiper-button-next btn"></div>
  </div>
</div>
  
</template>
<script>
export default {
  name: 'Ko-product-list',
  props: ['listproducts'],
  data() {
    return {
      swiperOption: {
        direction: 'horizontal',
        setWrapperSize: true,
        paginationClickable: true,
        slidesPerView: 3,
        grabCursor: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          1024: {
            slidesPerView: 2,
          },
        },
      },
    }
  },
}
</script>
<style scoped>
.content-list {
  margin:0 auto;
  padding: 20px;
}
.list-products {
  
}
.product {
  @apply relative;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  justify-items: center;
  flex-direction: column;
}
.product * {
  cursor: pointer;
}
.img-product {
  height: 16em;
}
.content-info {
  @apply text-center relative cursor-pointer;
}
.buttons-product {
  visibility: hidden;
  position: absolute;
  border: 0.5px solid rgb(219, 219, 219);
  opacity: 0;
  left: 15%;
  font-size: 10px;
  bottom: 0px;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  display: flex;
  height: 45px;
  flex-direction: row;
  gap: 15px;
  padding: 6px;
  background-color: #fff;
  transition: all 0.5s ease;
}
.buttons-product-rp {
  position: absolute;
  border: 0.5px solid rgb(219, 219, 219);
  opacity: 0;
  bottom: 20%;
  justify-content: center;
  align-content: center;
  display: none;
  height: 40px;
  flex-direction: row;
  gap: 15px;
  padding: 6px;
  background-color: #fff;
}
.buttons-product span {
  cursor: pointer;
  transition: 0.5s;
  padding: 3px;
  display: flex;
  justify-items: center;
}
.buttons-product span:hover {
  color: #c3935b;
}
.product:hover > .buttons-product {
  bottom: 25%;
  opacity: 1;
  visibility: visible;
}
@media screen and (max-width: 1000px) {
  .buttons-product {
    display: none;
  }
}
</style>
