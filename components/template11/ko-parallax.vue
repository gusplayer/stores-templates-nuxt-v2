<template>
  <div class="content-parallax">
    <div class="content-bg">
      <div class="content-txt">
        <p class="txt-top">Últimas Ideas Y Combinaciones De Atuendos De Moda</p>
        <div class="separator"></div>
        <p class="txt-bottom">TENDENCIAS DE ROPA DE INSTYLE</p>
        <div class="content-btn">
          <nuxt-link to="/productos">
            <button class="btn">
              {{ $t('home_comprarAhora') }}
            </button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.content-parallax {
  @apply w-full flex flex-col justify-center items-center mb-40;
}
.content-bg {
  background-position: 50% 73.2661%;
  background-image: url('https://res.cloudinary.com/brahyanr10/image/upload/v1616131522/Template11/Parallax/parallax_udbjr5.jpg');
  @apply w-full flex flex-col justify-center items-center bg-fixed bg-no-repeat bg-cover;
}
.content-txt {
  @apply w-full flex flex-col justify-center items-center;
}
.content-btn {
  @apply w-full flex flex-col justify-center items-center;
}
@screen sm {
  .txt-top {
    color: #fff;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    @apply font-light tracking-1 capitalize text-center;
  }
  .txt-bottom {
    color: #fff;
    font-size: 20px;
    font-family: 'Roboto Condensed', sans-serif;
    @apply font-bold uppercase tracking-0 text-center mb-34;
  }
  .btn {
    color: #000;
    background-color: #fff;
    font-size: 14px;
    @apply font-normal leading-21 uppercase px-15 py-10;
  }
  .btn:hover {
    color: #fff;
    background-color: #000;
  }
  .separator {
    background: #fff;
    @apply w-60 h-1 my-10 uppercase;
  }
  .content-txt {
    @apply px-10 py-50;
  }
}
@screen md {
  .txt-top {
    font-size: 20px;
  }
  .txt-bottom {
    font-size: 40px;
  }
  .btn {
    font-size: 14px;
    letter-spacing: 0.4px;
    @apply px-15 py-10;
  }
  .content-txt {
    padding: 121px;
  }
}
@screen lg {
  .txt-bottom {
    font-size: 55px;
  }
  .btn {
    font-size: 14px;
    @apply mt-30;
  }
  .content-txt {
    padding: 171px 10px;
  }
}
@media (min-width: 1200px) {
  .content-txt {
    padding: 236px;
  }
  .txt-bottom {
    font-size: 55px;
  }
}
</style>
