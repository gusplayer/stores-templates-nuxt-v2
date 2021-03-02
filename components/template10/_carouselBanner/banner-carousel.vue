<template>
  <div class="content">
    <div class="content-items-top">
      <div class="empty-border-left fadeInLeft"></div>
      <div class="content-text-top">
        <div class="txt-banner-top">
          <p class="txt-1 fadeInLeft">{{ banner.txt1 }}</p>
        </div>
        <div class="txt-banner-top">
          <p class="txt-2 fadeInLeft">{{ banner.txt2 }}</p>
        </div>
      </div>
    </div>
    <div class="content-text-medium">
      <p class="txt-3 fadeInRight">{{ banner.txt3 }}</p>
    </div>
    <div class="content-text-bottom">
      <div class="txt-banner-bottom">
        <p class="txt-4 fadeInLeft">{{ banner.txt4 }}</p>
      </div>
      <div class="txt-banner-bottom">
        <p class="txt-5 fadeInRight">{{ banner.txt5 }}</p>
      </div>
    </div>
    <div class="content-buttom">
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
.content {
  @apply flex flex-col justify-center items-start;
}
.txt-1,
.txt-2,
.txt-3,
.txt-4,
.txt-5 {
  color: #222222;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply uppercase z-20;
}

.txt-1,
.txt-2,
.empty-border-left {
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
}
.txt-3 {
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
}
.txt-4,
.txt-5 {
  -webkit-animation-duration: 4s;
  animation-duration: 4s;
}
@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(80px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
.fadeInLeft {
  -webkit-animation-name: fadeInLeft;
  animation-name: fadeInLeft;
}
.fadeInRight {
  -webkit-animation-name: fadeInRight;
  animation-name: fadeInRight;
}

@screen sm {
  .content {
    @apply w-8/5;
  }
  .empty-border-left {
    background-color: #222222;
    @apply h-22 w-1;
  }
  .content-items-top {
    @apply w-7/0 flex flex-row justify-start items-start ml-8;
  }
  .content-text-top {
    @apply w-7/0 flex flex-col justify-start items-start pl-10;
  }
  .content-text-medium {
    @apply w-7/0 flex justify-start items-start;
  }
  .content-text-bottom {
    @apply hidden;
  }
  .btn {
    font-size: 10px;
    color: #222222;
    border-color: #222222;
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
    @apply px-10 py-2 border font-semibold truncate;
  }
  .btn:hover {
    color: #fff;
    border-color: #eb7025;
    background-color: #eb7025;
    @apply border;
  }
  .txt-1,
  .txt-2 {
    font-size: 8px;
    @apply w-full truncate tracking-1;
  }
  .txt-3 {
    font-size: 20px;
    @apply w-full mt-5 mb-10 truncate font-semibold tracking-3;
  }
}
@media (min-width: 425px) {
  .empty-border-left {
    @apply h-26;
  }
  .content-items-top {
    @apply ml-10;
  }
  .txt-1,
  .txt-2 {
    font-size: 10px;
  }
  .txt-3 {
    font-size: 30px;
  }
  .btn {
    font-size: 12px;
    @apply px-12 py-2 border font-semibold truncate;
  }
}
@screen md {
  .empty-border-left {
    @apply h-33;
  }
  .content-items-top {
    @apply ml-15;
  }
  .content-text-top {
    @apply pl-15;
  }
  .txt-1,
  .txt-2 {
    font-size: 13px;
    @apply tracking-0;
  }
  .txt-3 {
    font-size: 50px;
    @apply tracking-6 pb-20;
  }
  .btn {
    font-size: 12px;
    @apply px-12 py-7 ml-5 border-2 font-semibold truncate;
  }
  .btn:hover {
    @apply border-2;
  }
}
@screen lg {
  .content {
    @apply w-7/5;
  }
  .content-items-top {
    @apply ml-0;
  }
  .content-text-bottom {
    @apply w-7/0 flex flex-row justify-start items-end mb-20;
  }
  .txt-3 {
    font-size: 50px;
    @apply mb-0 mt-20 h-auto;
  }
  .txt-4 {
    font-size: 10px;
    color: #777777;
    @apply pr-5 pb-2;
  }
  .txt-5 {
    font-size: 15px;
  }
  .btn {
    font-size: 12px;
    @apply px-35 py-8 ml-0;
  }
}
@screen mlg {
  .empty-border-left {
    @apply h-35;
  }
  .txt-3 {
    font-size: 70px;
  }
}
@media (min-width: 1400px) {
  .empty-border-left {
    @apply h-50;
  }
  .txt-1,
  .txt-2 {
    font-size: 15px;
  }
  .txt-3 {
    font-size: 90px;
  }
  .txt-4 {
    font-size: 12px;
    @apply pr-8 pb-5;
  }
  .txt-5 {
    font-size: 24px;
  }
  .btn {
    font-size: 16px;
    @apply px-51 py-12 border-2;
  }
  .btn:hover {
    @apply border-2;
  }
}
</style>
