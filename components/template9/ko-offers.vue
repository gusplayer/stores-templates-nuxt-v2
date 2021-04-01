<template>
  <div class="container-offers" :style="[koffers, settingGeneral]">
    <div
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-2':
            this.settingGeneral && this.settingGeneral.fount_2
              ? this.settingGeneral.fount_2
              : 'Roboto',
        },
      ]"
    >
      <div class="content-items show-cont">
        <nuxt-link to="/productos">
          <div class="items-left">
            <img
              class="image-left"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395449/Template9/PromoSale/banner-slider-clean-01_1_bgmlxb.jpg"
              alt="image-left"
            />
            <div class="content-txt-left">
              <div class="left">
                <p class="txt-left">Tendencias:</p>
                <p class="txt-left">Bolsos Khinkali</p>
                <button class="btn-left">
                  <span class="txt-btn-left">{{
                    $t('home_comprarAhora')
                  }}</span>
                </button>
              </div>
            </div>
          </div>
        </nuxt-link>

        <div
          class="items-center"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div class="image-static" v-if="!hover">
            <img
              class="image"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395553/Template9/PromoSale/banner-slider-clean-04_1_qpqmbl.jpg"
              alt=""
            />
          </div>
          <div class="image-gif" v-if="hover">
            <img
              class="image"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395446/Template9/PromoSale/banner-slider-clean-04-anim_w7x9yw.gif"
              alt=""
            />
          </div>
        </div>
        <nuxt-link to="/productos">
          <div class="items-right">
            <img
              class="image-right"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395445/Template9/PromoSale/banner-slider-clean-03_1_zux8pa.jpg"
              alt="image-right"
            />
            <div class="content-txt-right">
              <div class="right">
                <div class="container">
                  <p class="txt-right">Podcast:</p>
                  <div class="overlay-1">
                    <p class="txt-right">Podcast:</p>
                  </div>
                </div>
                <div class="container">
                  <p class="txt-right">Partes de mi</p>
                  <div class="overlay-2">
                    <p class="txt-right">Partes de mi</p>
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
        </nuxt-link>
      </div>
      <div class="content-items hid-cont">
        <div class="items-left">
          <img
            class="image-left"
            src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395449/Template9/PromoSale/banner-slider-clean-01_1_bgmlxb.jpg"
            alt="image-left"
          />
          <div class="content-txt-left">
            <div class="left">
              <p class="txt-left">Tendencias:</p>
              <p class="txt-left">Bolsos Khinkali</p>
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
                src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395553/Template9/PromoSale/banner-slider-clean-04_1_qpqmbl.jpg"
                alt=""
              />
            </div>
            <div class="image-gif" v-if="hover">
              <img
                class="image"
                src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395446/Template9/PromoSale/banner-slider-clean-04-anim_w7x9yw.gif"
                alt=""
              />
            </div>
          </div>
          <div class="items-right">
            <img
              class="image-right"
              src="https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612395445/Template9/PromoSale/banner-slider-clean-03_1_zux8pa.jpg"
              alt="image-right"
            />
            <div class="content-txt-right">
              <div class="right">
                <div class="container">
                  <p class="txt-right">Podcast:</p>
                  <div class="overlay-1">
                    <p class="txt-right">Podcast:</p>
                  </div>
                </div>
                <div class="container">
                  <p class="txt-right">Partes de mi</p>
                  <div class="overlay-2">
                    <p class="txt-right">Partes de mi</p>
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
    koffers: Array,
    settingGeneral: Object,
  },
  data() {
    return {
      hover: false,
    }
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

/* ----------------LEFT----------------- */
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
  font-family: 'Poppins', sans-serif;
  color: #303030;
  font-weight: 700;
  line-height: 1.1;
}
.btn-left {
  background-color: #3d3d3d;
  width: auto;
  height: 30px;
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 200ms ease-in;
}
.txt-btn-left {
  color: white;
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
/* ----------------CENTER----------------- */
.items-center {
  @apply w-full cursor-pointer;
}
.image {
  @apply object-cover w-full;
}
/* ----------------RIGHT----------------- */
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
  font-family: 'Poppins', sans-serif;
  width: auto;
  color: #303030;
  font-weight: bold;
  line-height: 1.1;
}
.btn-right {
  background-color: #fff;
  width: auto;
  height: 30px;
  font-weight: 800;
  padding-left: 10px;
  padding-right: 10px;
  transition: all 200ms ease-in;
}
.txt-btn-right {
  color: #3d3d3d;
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

/* ------------------------------------------- */
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
