<template>
  <div class="content-section">
    <div class="content-wrapper">
      <nuxt-link to="/productos">
        <div class="wrapper-left">
          <img
            class="img-left"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1614054545/Temp10/section/h1-bn-1_kpuvht.jpg"
            alt="banner-1"
          />
          <div class="txt-content">
            <p class="txt-tittle">Men</p>
            <p class="txt-subtittle">4 Items</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/productos">
        <div class="wrapper-center">
          <img
            class="img-center"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1614054545/Temp10/section/h1-bn-2_bdewjd.jpg"
            alt="banner-2"
          />
          <div class="txt-content">
            <p class="txt-tittle">Women</p>
            <p class="txt-subtittle">4 Items</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/productos">
        <div class="wrapper-right">
          <img
            class="img-right"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1614054545/Temp10/section/h1-bn-2-2_vrwv92.jpg"
            alt="banner-3"
          />
          <div class="txt-content">
            <p class="txt-tittle">Kids</p>
            <p class="txt-subtittle">4 Items</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
}
</script>
<style scoped>
.content-section {
  @apply w-full flex flex-col justify-center items-center my-40;
}
.content-wrapper {
  @apply justify-center items-center;
}
.wrapper-left,
.wrapper-center,
.wrapper-right {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden transition-all ease-in duration-0.2;
}
.img-left,
.img-center,
.img-right {
  @apply w-full object-cover overflow-hidden transition-all ease-in duration-0.2;
}
.wrapper-left:hover .img-left {
  @apply relative overflow-hidden transition-all ease-in duration-0.2;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-center:hover .img-center {
  @apply relative overflow-hidden transition-all ease-in duration-0.2;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-right:hover .img-right {
  @apply relative overflow-hidden transition-all ease-in duration-0.2;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.txt-content {
  @apply absolute w-full h-full flex flex-col justify-start items-start;
}

@screen sm {
  .content-wrapper {
    @apply w-9/0 grid grid-cols-1 gap-6;
  }
  .wrapper-left:hover .txt-tittle {
    color: #eb7025;
  }
  .wrapper-center:hover .txt-tittle {
    color: #eb7025;
  }
  .wrapper-right:hover .txt-tittle {
    color: #eb7025;
  }
  .txt-tittle {
    color: #222222;
    font-size: 25px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply mt-50 ml-35 pb-10 font-semibold;
  }
  .txt-subtittle {
    color: #777777;
    font-size: 12px;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply ml-35;
  }
}
@screen md {
  .content-wrapper {
    @apply w-9/5 grid grid-cols-3 gap-6;
  }
}
@media (min-width: 1400px) {
  .content-wrapper {
    max-width: 1400px;
  }
}
</style>
