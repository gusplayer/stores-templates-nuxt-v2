<template>
  <div class="content-carousel">
    <div class="content-txt">
      <p class="txt-top">{{ banner.txt1 }}</p>
      <div class="separator"></div>
      <p class="txt-bottom">{{ banner.txt2 }}</p>
    </div>
    <div class="content-btn">
      <nuxt-link to="/productos">
        <button class="btn">
          {{ $t('home_comprarAhora') }}
        </button>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    banner: {},
  },
}
</script>
<style scoped>
.contet-carousel {
  @apply w-full flex flex-col justify-center items-center;
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
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
    @apply font-light tracking-1 capitalize;
  }
  .txt-bottom {
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto Condensed', sans-serif;
    @apply font-bold uppercase tracking-0;
  }
  .btn {
    color: #000;
    background-color: #fff;
    font-size: 10px;
    @apply font-normal leading-21 uppercase mt-15 px-14 py-4;
  }
  .btn:hover {
    color: #fff;
    background-color: #000;
  }
  .separator {
    background: #fff;
    @apply w-60 h-1 my-10 uppercase;
  }
}
@screen md {
  .txt-top {
    font-size: 22px;
  }
  .txt-bottom {
    font-size: 35px;
  }
  .btn {
    font-size: 12px;
    @apply mt-40 px-22 py-9;
  }
}
@screen lg {
  .txt-bottom {
    font-size: 55px;
  }
  .btn {
    font-size: 14px;
    @apply mt-68;
  }
}
</style>
