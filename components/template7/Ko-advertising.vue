<template>
  <div class="advertising-content">
    <div class="advertising-background">
      <div class="advertising-items">
        <div class="advertising-border">
          <img
            class="max-w-auto"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609975581/Komercia/PublicShare/flowers-discount-text-element_vaghlr.jpg"
            alt="icon"
          />
          <div class="advertising-text">
            <span class="tittle">-15% de descuento</span>
            <div class="subtittles-items">
              <span class="subtittle">En un ramo de la</span>
              <span class="subtittle">colección de verano</span>
            </div>
          </div>
          <button class="content-bttns-shop">
            <nuxt-link :to="'/productos'">
              <span class="content-textbutton-shop">
                {{ $t('productdetail_btnComprar') }}
              </span>
            </nuxt-link>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-advertising',
}
</script>
<style scoped>
.advertising-content {
  @apply w-full flex justify-center items-center;
  margin-bottom: 70px;
}
.advertising-background {
  @apply flex justify-center items-center bg-advertisingbg bg-cover z-auto;
  padding-top: 66px;
  padding-bottom: 66px;
}
.advertising-items {
  @apply flex justify-center items-center bg-white-white shadow-2xl z-auto;
  width: 596px;
  height: 449px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
}
.advertising-border {
  @apply w-full h-full flex flex-col justify-center items-center border border-opacity-50 z-auto;
  border-color: #e5e5e5;
}
.content-bttns-shop {
  @apply mr-2 rounded-full bg-red-btnbannershop shadow-md justify-center items-center flex font-semibold uppercase tracking-wider;
  padding: 12px 20px;
}
.content-bttns-shop:hover {
  @apply bg-red-btnbannershophover;
  transition: all 0.2s ease-out;
}
.content-textbutton-shop {
  @apply text-white-white;
  font-size: 13px;
  line-height: 18px;
}
.content-textbutton-shop {
  font-family: 'Lora', serif !important;
}
.advertising-text {
  @apply w-full flex flex-col justify-center items-center;
}
.tittle {
  @apply py-4;
  font-family: 'Great Vibes', cursive !important;
  color: #ed2353;
}
.subtittle {
  font-family: 'Lora', serif !important;
  color: #303030;
}
.subtittles-items {
  @apply flex flex-col justify-center items-center pb-4 w-full;
}

@screen sm {
  .advertising-background {
    @apply w-9/0 h-full;
  }
  .advertising-items {
    @apply w-8/5;
  }
  .tittle {
    line-height: 44px;
    font-size: 34px;
  }
  .subtittle {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen md {
  .advertising-background {
    @apply w-9/5 h-full;
  }
  .advertising-items {
    @apply w-8/5;
  }
  .tittle {
    line-height: 50px;
    font-size: 40px;
  }
  .subtittle {
    line-height: 24px;
    font-size: 18px;
  }
}
@screen lg {
  .advertising-background {
    @apply w-9/7 h-full;
  }
  .advertising-items {
    @apply w-6/5;
  }
  .tittle {
    line-height: 60px;
    font-size: 50px;
  }
  .subtittle {
    line-height: 36px;
    font-size: 26px;
  }
}
@screen mlg {
  .advertising-background {
    @apply w-9/3 h-full;
  }
  .advertising-items {
    @apply w-5/0;
  }
}
@media (min-width: 1192px) {
  .advertising-background {
    width: 1192px;
  }
}
</style>
