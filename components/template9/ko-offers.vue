<template>
  <div
    class="container-offers"
    :style="[
      koffers.values[0],
      koffers.values[2],
      settingGeneral,
      currentSettingByTemplate9.offers[0],
      currentSettingByTemplate9.offers[2],
      currentSettingByTemplate9.settingGeneral,
    ]"
  >
    <div
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-1':
            this.currentSettingByTemplate9 &&
            this.currentSettingByTemplate9.settingGeneral &&
            this.currentSettingByTemplate9.settingGeneral.fount_1
              ? this.currentSettingByTemplate9.settingGeneral.fount_1
              : 'Poppins',
        },
      ]"
      v-if="koffers"
    >
      <div class="content-items show-cont">
        <div>
          <div class="items-left">
            <img
              class="image-left"
              :src="koffers.values[0].url_img_background"
              alt="image-left"
              v-if="koffers.values[0].url_img_background"
            />
            <div class="content-txt-left">
              <div class="left">
                <p class="txt-left" v-if="koffers.values[0].title">
                  {{ koffers.values[0].title }}
                </p>
                <p class="txt-left" v-if="koffers.values[0].description">
                  {{ koffers.values[0].description }}
                </p>
                <button class="btn-left">
                  <span class="txt-btn-left">{{
                    $t('home_comprarAhora')
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div
          class="items-center"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div class="image-static" v-if="!hover">
            <img
              class="image"
              :src="koffers.values[1].url_img_background"
              v-if="koffers.values[1].url_img_background"
              alt="imagen center static"
            />
          </div>
          <div class="image-gif" v-if="hover">
            <img
              class="image"
              :src="koffers.values[1].url_gift_background"
              v-if="koffers.values[1].url_gift_background"
              alt="imagen center gift"
            />
          </div>
        </div>
        <div>
          <div class="items-right">
            <img
              class="image-right"
              :src="koffers.values[2].url_img_background"
              v-if="koffers.values[2].url_img_background"
              alt="image-right"
            />
            <div class="content-txt-right">
              <div class="right">
                <div class="container">
                  <p class="txt-right" v-if="koffers.values[2].title">
                    {{ koffers.values[2].title }}
                  </p>
                  <div class="overlay-1">
                    <p class="txt-right" v-if="koffers.values[2].title">
                      {{ koffers.values[2].title }}
                    </p>
                  </div>
                </div>
                <div class="container">
                  <p class="txt-right" v-if="koffers.values[2].description">
                    {{ koffers.values[2].description }}
                  </p>
                  <div class="overlay-2">
                    <p class="txt-right" v-if="koffers.values[2].description">
                      {{ koffers.values[2].description }}
                    </p>
                  </div>
                </div>
                <button class="btn-right">
                  <span class="txt-btn-right">{{
                    $t('home_comprarAhora')
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-items hid-cont">
        <div class="items-left">
          <img
            class="image-left"
            :src="koffers.values[0].url_img_background"
            v-if="koffers.values[0].url_img_background"
            alt="image-left"
          />
          <div class="content-txt-left">
            <div class="left">
              <p class="txt-left" v-if="koffers.values[0].title">
                {{ koffers.values[0].title }}
              </p>
              <p class="txt-left" v-if="koffers.values[0].description">
                {{ koffers.values[0].description }}
              </p>
              <button class="btn-left">
                <span class="txt-btn-left">{{ $t('home_comprarAhora') }}</span>
              </button>
            </div>
          </div>
        </div>
        <div class="mid-content">
          <div
            class="items-center"
            @mouseover="hover = true"
            @mouseleave="hover = false"
          >
            <div class="image-static" v-if="!hover">
              <img
                class="image"
                :src="koffers.values[1].url_img_background"
                v-if="koffers.values[1].url_img_background"
                alt="imagen center static"
              />
            </div>
            <div class="image-gif" v-if="hover">
              <img
                class="image"
                :src="koffers.values[1].url_gift_background"
                v-if="koffers.values[1].url_gift_background"
                alt="imagen center gift"
              />
            </div>
          </div>
          <div class="items-right">
            <img
              class="image-right"
              :src="koffers.values[2].url_img_background"
              v-if="koffers.values[2].url_img_background"
              alt="image-right"
            />
            <div class="content-txt-right">
              <div class="right">
                <div class="container">
                  <p class="txt-right" v-if="koffers.values[2].title">
                    {{ koffers.values[2].title }}
                  </p>
                  <div class="overlay-1">
                    <p class="txt-right" v-if="koffers.values[2].title">
                      {{ koffers.values[2].title }}
                    </p>
                  </div>
                </div>
                <div class="container">
                  <p class="txt-right" v-if="koffers.values[2].description">
                    {{ koffers.values[2].description }}
                  </p>
                  <div class="overlay-2">
                    <p class="txt-right" v-if="koffers.values[2].description">
                      {{ koffers.values[2].description }}
                    </p>
                  </div>
                </div>
                <button class="btn-right">
                  <span class="txt-btn-right">{{
                    $t('home_escuchaAhora')
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
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
  computed: {
    currentSettingByTemplate9() {
      return this.$store.state.currentSettingByTemplate9
    },
  },
}
</script>
<style scoped>
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
  color: var(--color_title_1);
  font-weight: 700;
  line-height: 1.1;
}
.btn-left {
  background-color: var(--color_background_btn_1);
  width: auto;
  height: 30px;
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 200ms ease-in;
}
.txt-btn-left {
  color: var(--color_text_btn_1);
  text-transform: uppercase;
}
.content-txt-left {
  @apply absolute w-full h-full flex flex-col justify-center items-center;
}
.left {
  margin-left: 40px;
}
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
  color: var(--color_title_2);
  font-weight: bold;
  line-height: 1.1;
}
.btn-right {
  color: var(--color_background_btn_2);
  width: auto;
  height: 30px;
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 200ms ease-in;
}
.txt-btn-right {
  color: var(--color_text_btn_2);
  text-transform: uppercase;
}
.content-txt-right {
  @apply absolute w-full flex flex-col justify-end items-center;
  height: 88%;
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
  background: #fff;
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
  background: #fff;
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
    font-size: 30px;
  }
  .txt-btn.left {
    font-size: 14px;
  }
  .txt-right {
    font-size: 30px;
  }
  .txt-btn.right {
    font-size: 14px;
  }
  .right {
    margin-left: 30px;
  }
  .hid-cont {
    @apply hidden;
  }
  .items-right:hover .overlay-1 {
    width: 140px;
  }
  .items-right:hover .overlay-2 {
    width: 200px;
  }
}
@screen md {
  .mid-content {
    @apply grid grid-cols-2 justify-center items-center;
  }
  .txt-left {
    font-size: 36px;
  }
  .txt-right {
    font-size: 36px;
  }
  .txts-right {
    @apply mb-8;
  }
  .right {
    margin-left: 63px;
  }
  .hid-cont {
    @apply grid;
  }
  .show-cont {
    @apply hidden;
  }
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
}
@screen lg {
  .content-items {
    @apply grid grid-cols-3;
  }
  .hid-cont {
    @apply hidden;
  }
}
</style>
