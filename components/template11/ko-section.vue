<template>
  <div class="content-section">
    <div class="content-wrapper">
      <nuxt-link to="/productos">
        <div class="wrapper-left">
          <img
            class="img-left"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1616120674/Template11/Section/Sub-banner-1_odhkly.jpg"
            alt="banner-1"
          />
          <div class="txt-content">
            <p class="txt-top">Última colección</p>
            <p class="txt-bottom">Calzado nuevo</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/productos">
        <div class="wrapper-center">
          <img
            class="img-center"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1616120675/Template11/Section/Sub-banner-2_cnnyy5.jpg"
            alt="banner-2"
          />
          <div class="txt-content">
            <p class="txt-top">Para mujeres</p>
            <p class="txt-bottom">Mejor bolso</p>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link to="/productos">
        <div class="wrapper-right">
          <img
            class="img-right"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1616120675/Template11/Section/Sub-banner-3_r1davs.jpg"
            alt="banner-3"
          />
          <div class="txt-content">
            <p class="txt-top">Mejor diseñador</p>
            <p class="txt-bottom">Paño de moda</p>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {}
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
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.img-left,
.img-center,
.img-right {
  @apply w-full object-cover overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper-left:hover .img-left {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-center:hover .img-center {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.wrapper-right:hover .img-right {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.txt-content {
  @apply absolute w-full h-full flex flex-col justify-end items-center;
}

@screen sm {
  .content-wrapper {
    @apply w-9/0 grid grid-cols-1 gap-6;
  }
  .txt-top {
    color: #fff;
    font-size: 13px;
    font-family: 'Roboto', sans-serif;
    @apply mb-8 uppercase font-normal tracking-1;
  }
  .txt-bottom {
    color: #fff;
    font-size: 25px;
    font-family: 'Roboto Condensed', sans-serif;
    @apply mb-20 font-bold uppercase;
  }
}
@screen md {
  .content-wrapper {
    @apply w-9/5 grid grid-cols-3 gap-6;
  }
  .txt-bottom {
    font-size: 20px;
  }
}
@screen lg {
  .txt-bottom {
    font-size: 25px;
  }
}
@media (min-width: 1400px) {
  .content-wrapper {
    max-width: 1200px;
  }
}
</style>
