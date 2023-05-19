<template>
  <div class="container-offers" :style="[settingGeneral]">
    <div
      v-if="koffers"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
      ]"
      class="wrapper-items"
    >
      <div class="content-items">
        <a
          :href="`${koffers.values[0].url_redirect}`"
          class="items-left px-10 pt-15 pb-5 md:px-0 md:pt-0 md:pb-0"
          rel="noreferrer noopener"
        >
          <img
            v-if="koffers.values[0].url_img_background"
            class="image-left"
            :src="
              idCloudinaryBanner(koffers.values[0].url_img_background, 'banner')
            "
            alt="image-left"
          />
          <div class="content-txt-left">
            <div class="left">
              <p
                class="txt-left"
                v-if="koffers.values[0].title"
                :style="`color: ${koffers.values[0]['--color_title']};`"
              >
                {{ koffers.values[0].title }}
              </p>
              <p
                v-if="koffers.values[0].description"
                class="txt-left"
                style="margin-bottom: 10px"
                :style="`color: ${koffers.values[0]['--color_title']};`"
              >
                {{ koffers.values[0].description }}
              </p>
              <div class="btns-center" v-if="koffers.values[0].url_redirect">
                <a
                  :href="`${koffers.values[0].url_redirect}`"
                  rel="noreferrer noopener"
                  class="btn-left"
                  :style="`background: ${koffers.values[0]['--color_background_btn']};`"
                >
                  <span
                    class="txt-btn-left"
                    :style="`color: ${koffers.values[0]['--color_text_btn']};`"
                  >
                    {{ $t('home_comprarAhora') }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </a>
        <button
          class="items-center px-10 pt-5 pb-5 md:px-0 md:pt-0 md:pb-0 relative"
          rel="noreferrer noopener"
          @click="sendUrl(koffers.values[1].url_redirect)"
        >
          <div class="image-static" v-if="!hover">
            <img
              class="image"
              :src="
                idCloudinaryBanner(
                  koffers.values[1].url_img_background,
                  'banner'
                )
              "
              v-if="koffers.values[1].url_img_background"
              alt="imagen center static"
            />
          </div>
          <div class="image-gif" v-if="hover">
            <img
              class="image"
              v-if="koffers.values[1].url_gift_background"
              :src="
                idCloudinaryBanner(
                  koffers.values[1].url_gift_background,
                  'banner'
                )
              "
              alt="imagen center gift"
            />
          </div>
          <div
            v-if="dataStore.tienda.id_tienda === 889"
            class="content-txt-right top-0"
          >
            <div class="right">
              <div class="container">
                <p
                  class="txt-right"
                  v-if="koffers.values[2].title"
                  :style="`color: ${koffers.values[2]['--color_title']};`"
                >
                  Collares
                </p>
                <div class="overlay-1">
                  <p
                    class="txt-right"
                    v-if="koffers.values[2].title"
                    :style="`color: ${koffers.values[2]['--color_title']};`"
                  >
                    Collares
                  </p>
                </div>
              </div>
              <div class="container">
                <p
                  class="txt-right"
                  v-if="koffers.values[2].description"
                  :style="`color: ${koffers.values[0]['--color_title']};`"
                >
                  {{ koffers.values[0].description }}
                </p>
                <div class="overlay-2">
                  <p
                    class="txt-right"
                    v-if="koffers.values[2].description"
                    :style="`color: ${koffers.values[2]['--color_title']};`"
                  >
                    {{ koffers.values[0].description }}
                  </p>
                </div>
              </div>
              <div class="item-button-right">
                <a
                  href="https://www.perfectaaccesorios.com/productos?category=Collares"
                  rel="noreferrer noopener"
                  class="btn-right"
                  :style="`background: ${koffers.values[2]['--color_background_btn']};`"
                >
                  <span
                    class="txt-btn-right"
                    :style="`color: ${koffers.values[2]['--color_text_btn']};`"
                  >
                    {{ $t('home_comprarAhora') }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </button>
        <a
          :href="`${koffers.values[2].url_redirect}`"
          rel="noreferrer noopener"
          class="items-right px-10 pt-5 pb-15 md:px-0 md:pt-0 md:pb-0"
        >
          <img
            v-if="koffers.values[2].url_img_background"
            class="image-right"
            :src="
              idCloudinaryBanner(koffers.values[2].url_img_background, 'banner')
            "
            alt="image-right"
          />
          <div class="content-txt-right">
            <div class="right">
              <div class="container">
                <p
                  class="txt-right"
                  v-if="koffers.values[2].title"
                  :style="`color: ${koffers.values[2]['--color_title']};`"
                >
                  {{ koffers.values[2].title }}
                </p>
                <div class="overlay-1">
                  <p
                    class="txt-right"
                    v-if="koffers.values[2].title"
                    :style="`color: ${koffers.values[2]['--color_title']};`"
                  >
                    {{ koffers.values[2].title }}
                  </p>
                </div>
              </div>
              <div class="container">
                <p
                  class="txt-right"
                  v-if="koffers.values[2].description"
                  :style="`color: ${koffers.values[2]['--color_title']};`"
                >
                  {{ koffers.values[2].description }}
                </p>
                <div class="overlay-2">
                  <p
                    class="txt-right"
                    v-if="koffers.values[2].description"
                    :style="`color: ${koffers.values[2]['--color_title']};`"
                  >
                    {{ koffers.values[2].description }}
                  </p>
                </div>
              </div>
              <div
                class="item-button-right"
                v-if="koffers.values[2].url_redirect"
              >
                <a
                  :href="`${koffers.values[2].url_redirect}`"
                  rel="noreferrer noopener"
                  class="btn-right"
                  :style="`background: ${koffers.values[2]['--color_background_btn']};`"
                >
                  <span
                    class="txt-btn-right"
                    :style="`color: ${koffers.values[2]['--color_text_btn']};`"
                  >
                    {{ $t('home_comprarAhora') }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  props: {
    dataStore: Object,
    koffers: Object,
    settingGeneral: Object,
  },
  data() {
    return {
      hover: false,
    }
  },
  methods: {
    sendUrl(value) {
      window.location = value
    },
  },
}
</script>
<style scoped>
.wrapper-items {
  width: 100%;
}
.container-offers {
  @apply w-full flex flex-col justify-center items-center;
}
.content-items {
  @apply w-full justify-center items-center;
}
.items-left {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  transition: all 200ms ease-in;
  overflow: hidden;
}
.image-left {
  transition: all 200ms ease-in;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
}
.items-left:hover .image-left {
  transition: all 200ms ease-in;
  position: relative;
  -webkit-transform: scale(1.3);
  transform: scale(1.03);
  overflow: hidden;
}
.txt-left {
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1);
  /* color: var(--color_title_1); */
  font-weight: 700;
  line-height: 1.1;
}
.btn-left {
  /* background-color: var(--color_background_btn_1); */
  width: auto;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  transition: all 200ms ease-in;
  @apply px-14 py-5 text-center;
}
.content-txt-left {
  @apply absolute w-full h-full flex flex-col justify-center items-center;
}
/* .left {
  margin-left: 40px;
} */
.items-left:hover .btn-left {
  transition: all 200ms ease-in;
  transform: translateX(10px);
}
.items-center {
  @apply w-full cursor-pointer;
}
.image {
  @apply object-cover w-full;
}
.items-right {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  position: relative;
  cursor: pointer;
  transition: all 200ms ease-in;
  overflow: hidden;
}
.image-right {
  transition: all 200ms ease-in;
  overflow: hidden;
  object-fit: cover;
  width: 100%;
}
.items-right:hover .image-right {
  transition: all 200ms ease-in;
  position: relative;
  -webkit-transform: scale(1.3);
  transform: scale(1.03);
  overflow: hidden;
}
.txt-right {
  /* font-family: 'Poppins', sans-serif; */
  font-family: var(--font-style-1);
  width: auto;
  /* color: var(--color_title_2); */
  font-weight: bold;
  line-height: 1.1;
}
.btn-right {
  /* color: var(--color_background_btn_2); */
  width: auto;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  transition: all 200ms ease-in;
  @apply px-14 py-5 text-center;
}
.content-txt-right {
  @apply absolute w-full h-full flex flex-col justify-center items-center;
}
.items-right:hover .btn-right {
  transition: all 200ms ease-in;
  transform: translateX(10px);
}
.container {
  position: relative;
  width: auto;
}
.overlay-1 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: #fff; */
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.2s ease;
}
.overlay-2 {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  /* background: #fff; */
  overflow: hidden;
  width: 0;
  height: 100%;
  transition: 0.2s ease;
}
@screen sm {
  .content-items {
    @apply grid grid-cols-1;
  }
  .txt-left {
    font-size: 25px;
  }
  .txt-btn-left {
    font-size: 13px;
  }
  .txt-right {
    font-size: 25px;
  }
  .txt-btn-right {
    font-size: 13px;
  }
  /* .right {
    margin-left: 30px;
  } */
  .items-right:hover .overlay-1 {
    width: 140px;
  }
  .items-right:hover .overlay-2 {
    width: 200px;
  }
  .item-button-right,
  .btns-center {
    @apply w-full flex justify-center items-center mt-10;
  }
}
@media (min-width: 425px) {
  .txt-right,
  .txt-left {
    font-size: 30px;
  }
}
@screen md {
  .content-items {
    @apply grid grid-cols-3;
  }
  .mid-content {
    @apply grid grid-cols-2 justify-center items-center;
  }
  .txt-left {
    font-size: 22px;
  }
  .txt-right {
    font-size: 22px;
  }
  .txts-right {
    @apply mb-8;
  }
  /* .right {
    margin-left: 63px;
  } */
  .txt-btn-left {
    font-size: 14px;
  }
  .txt-btn-right {
    font-size: 14px;
  }
  .items-right:hover .overlay-1 {
    width: 170px;
  }
  .items-right:hover .overlay-2 {
    width: 240px;
  }
  .items-left {
    max-width: 635px;
    max-height: 400px;
  }
  .image {
    max-width: 635px;
    max-height: 400px;
  }
  .items-right {
    max-width: 635px;
    max-height: 400px;
  }
  .item-button-right,
  .btns-center {
    @apply w-full flex justify-start items-center mt-10;
  }
}
@screen lg {
  .txt-left. .txt-right {
    font-size: 36px;
  }
}
</style>
