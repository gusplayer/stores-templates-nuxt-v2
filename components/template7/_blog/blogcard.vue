<template>
  <div class="producto" :style="[settingKBlog, settingGeneral]">
    <div
      class="container"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :style="[
        {
          '--font-style-3':
            this.settingGeneral && this.settingGeneral.fount_3
              ? this.settingGeneral.fount_3
              : 'Lora',
        },
      ]"
    >
      <nuxt-link
        :to="{ path: `/blog/` + article.slug, query: { idBlog: article.id } }"
        class="contet"
      >
        <div class="figure-img">
          <figure class="content-imge">
            <img
              v-if="article.imagen_principal_url"
              class="images"
              :src="idCloudinary(this.article.imagen_principal_url, 550, 550)"
              alt="right-banner"
            />
            <div v-else class="empty"></div>
          </figure>
        </div>
      </nuxt-link>
      <nuxt-link
        :to="{ path: `/blog/` + article.slug, query: { idBlog: article.id } }"
        class="contet"
      >
        <div class="overlay-top">
          <div class="text-tittle">
            <p class="txt-day">
              {{ this.dayCreate }}
            </p>
            <p class="txt-month">
              {{ this.nameMonth }}
            </p>
          </div>
        </div>
      </nuxt-link>
      <div class="overlay-bottom">
        <div class="content-bottom-titulo">
          <div class="text-cart">
            <p class="w-full txt-tituloart">{{ this.article.titulo }}</p>
          </div>
        </div>
      </div>
      <nuxt-link
        :to="{ path: `/blog/` + article.slug, query: { idBlog: article.id } }"
        class="contet"
      >
        <div class="overlay-bottom-autor">
          <div class="content-bottom-autor">
            <div class="text-cart">
              <p class="w-full txt-autorart">
                {{ $t('home_poteado') }}{{ this.article.autor }}
              </p>
            </div>
          </div>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Blogcard',
  props: { article: Object, settingKBlog: Object, settingGeneral: Object },
  mounted() {
    if (this.article.created_at) {
      let domain = this.article.created_at
      let result = domain.split(' ')
      this.shippingCreated = result[0]
      let data = this.shippingCreated.split('-')
      this.dayCreate = data[2]
      this.monthCreate = data[1]
    }
    if (this.monthCreate == 1) {
      this.nameMonth = 'Ene'
    }
    if (this.monthCreate == 2) {
      this.nameMonth = 'Feb'
    }
    if (this.monthCreate == 3) {
      this.nameMonth = 'Mar'
    }
    if (this.monthCreate == 4) {
      this.nameMonth = 'Abr'
    }
    if (this.monthCreate == 5) {
      this.nameMonth = 'May'
    }
    if (this.monthCreate == 6) {
      this.nameMonth = 'Jun'
    }
    if (this.monthCreate == 7) {
      this.nameMonth = 'Jul'
    }
    if (this.monthCreate == 8) {
      this.nameMonth = 'Ago'
    }
    if (this.monthCreate == 9) {
      this.nameMonth = 'Sep'
    }
    if (this.monthCreate == 10) {
      this.nameMonth = 'Oct'
    }
    if (this.monthCreate == 11) {
      this.nameMonth = 'Nov'
    }
    if (this.monthCreate == 12) {
      this.nameMonth = 'Dic'
    }
  },
  data() {
    return {
      hover: false,
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      nameMonth: '',
    }
  },
}
</script>
<style scoped>
.producto {
  @apply w-full flex flex-col justify-center items-center cursor-pointer mt-8;
}
.container {
  @apply relative shadow-2xl;
  max-width: 500px;
}
.images {
  width: 100%;
  height: 270px;
  max-height: 270px;
  /* height: 100%; */
  object-fit: cover;
  overflow: hidden;
}
.empty {
  background: #cccccc;
  height: 270px;
  max-height: 270px;
  width: 100%;
}
.text-tittle {
  @apply absolute text-center transition-all ease-in duration-300 grid grid-cols-1 gap-0;
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.content-bottom-titulo {
  @apply absolute text-center transition-all ease-in duration-300 w-full;
  color: var(--color_background_text);
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.text-cart {
  @apply w-full;
}
.content-bottom-autor {
  @apply text-white-white absolute text-center transition-all ease-in duration-300 w-full;
  color: var(--color_background_text_2);
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}

.figure-img figure img {
  -webkit-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-transition: 0.7 ease-in-out;
  transition: transform 0.7s ease, opacity 0.7s ease,
    -webkit-transform 0.7s ease;
}
.figure-img figure:hover img {
  -webkit-transform: scale(1.3);
  transform: scale(1.03);
}
figure {
  @apply overflow-hidden m-0 p-0;
}
.figure-img figure {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.217) 30%,
    rgba(0, 0, 0, 0.374) 50%,
    rgb(0, 0, 0) 100%
  );
}
.figure-img figure:hover img {
  opacity: 0.5;
}
.content-imge {
  @apply flex justify-center items-center;
}
.txt-day,
.txt-month {
  font-family: var(--font-style-3) !important;
  color: var(--color_text_date);
}
.txt-tituloart,
.txt-autorart {
  font-family: var(--font-style-3) !important;
  font-size: 14px;
}
.txt-tituloart {
  text-transform: uppercase;
}
.txt-day {
  font-size: 24px;
  font-weight: 600;
}
.txt-month {
  padding-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-weight: 600;
  font-size: 12px;
}
.overlay-top {
  background: var(--color_bg_date);
}
.overlay-bottom {
  background: var(--color_background_card);
}
.overlay-bottom-autor {
  background: var(--color_background_card_2);
}
@screen sm {
  .overlay-top {
    @apply absolute overflow-hidden shadow-2xl rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    top: 7%;
    left: 5%;
    right: 0;
    width: 15%;
    height: 28%;
  }
  .overlay-bottom {
    @apply absolute right-0 bottom-0 overflow-hidden transition-all ease-in duration-300;
    width: 60%;
    height: 26%;
    left: 20%;
    bottom: 35%;
  }
  .overlay-bottom-autor {
    @apply absolute overflow-hidden shadow-2xl bg-opacity-75 rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    bottom: 5%;
    left: 0%;
    right: 0;
    width: 100%;
    height: 15%;
  }
}
@media (max-width: 580px) {
  .images {
    height: 250px;
  }
  .empty {
    height: 250px;
  }
}
@screen md {
  .overlay-top {
    @apply absolute overflow-hidden shadow-2xl rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    top: 5%;
    left: 5%;
    right: 0;
    width: 15%;
    height: 22%;
  }
  .overlay-bottom {
    @apply absolute right-0 bottom-0 overflow-hidden transition-all ease-in duration-300;
    width: 60%;
    height: 26%;
    left: 20%;
    bottom: 35%;
  }
  .overlay-bottom-autor {
    @apply absolute overflow-hidden shadow-2xl bg-opacity-75 rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    bottom: 3%;
    left: 0%;
    right: 0;
    width: 100%;
    height: 15%;
  }
}
@screen lg {
  .overlay-top {
    @apply absolute overflow-hidden shadow-2xl rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    top: 5%;
    left: 5%;
    right: 0;
    width: 15%;
    height: 24%;
  }
}
@screen mlg {
  .overlay-top {
    @apply absolute overflow-hidden shadow-2xl rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    top: 5%;
    left: 5%;
    right: 0;
    width: 15%;
    height: 22%;
  }
}
</style>
