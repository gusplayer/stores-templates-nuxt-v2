<template>
  <div class="content-deal">
    <div class="content-grid">
      <div class="grid-left">
        <div class="bg-left"></div>
        <div class="content-image-left">
          <img
            class="img-left"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1614111820/Deal/home1-banner1_mydyc4.jpg"
            alt="img-left"
          />
        </div>
      </div>
      <div class="grid-right">
        <div class="grid-item-tittle">
          <p class="txt-tittle">Ofertas de los días</p>
        </div>
        <div class="grid-item-border"></div>
        <div class="grid-item-subtittle">
          <p class="txt-subtittle">Caducado</p>
        </div>
        <div class="grid-item-price">
          <p class="txt-price-1">$100 <span class="txt-price-2">$500</span></p>
        </div>
        <div class="grid-item-button">
          <button class="btn">
            {{ $t('home_comprarAhora') }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.content-deal {
  @apply w-full flex flex-col justify-items-center items-center my-40;
}
.content-grid {
  border-color: #eeeeee;
  @apply justify-center items-center pb-90 border-b;
}
.grid-left,
.grid-right {
  @apply w-full h-full flex flex-col justify-center items-center;
}
.content-image-left {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden transition-all ease-in duration-0.2;
}
.img-left {
  @apply w-full h-auto object-cover overflow-hidden transition-all ease-in duration-0.5;
}
.img-left:hover {
  @apply relative overflow-hidden transition-all ease-in duration-0.5;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.grid-right {
  background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1614111820/Deal/bg-deal_xeg4hu.png');
  @apply bg-no-repeat  bg-center;
}
.grid-item-tittle,
.grid-item-price,
.grid-item-button {
  @apply w-full flex flex-col justify-center items-center text-center;
}
.txt-tittle,
.txt-subtittle,
.txt-price-1,
.txt-price-2 {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
@screen sm {
  .content-grid {
    @apply w-9/0 grid grid-cols-1 gap-4;
  }
  .txt-tittle {
    font-size: 35px;
    color: #222222;
    @apply my-30 font-semibold;
  }
  .grid-item-border {
    background-color: #e6e6e6;
    @apply w-60 h-2 mb-30;
  }
  .txt-subtittle {
    font-size: 15px;
    color: #666666;
    @apply mb-30;
  }
  .txt-price-1 {
    font-size: 28px;
    color: #eb7025;
    @apply font-semibold leading-1;
  }
  .txt-price-2 {
    font-size: 18px;
    color: #999999;
    @apply font-medium leading-1 line-through;
  }
  .grid-item-price {
    @apply mb-60;
  }
  .btn {
    height: 58px;
    border-color: #222222;
    color: #222222;
    font-size: 16px;
    @apply w-auto px-60 border font-semibold;
  }
  .btn:hover {
    background-color: #eb7025;
    border-color: #eb7025;
    color: #fff;
  }
}
@screen md {
  .content-grid {
    @apply w-9/5;
  }
  .txt-subtittle {
    @apply mb-60;
  }
  .grid-item-price {
    @apply mb-80;
  }
}
@screen lg {
  .content-grid {
    @apply grid grid-cols-2;
  }
  .txt-tittle {
    font-size: 42px;
  }
  .btn {
    @apply w-auto px-40 border;
  }
}
@media (min-width: 1400px) {
  .content-grid {
    max-width: 1400px;
    @apply w-full grid grid-cols-2;
  }
}
</style>
