<template>
  <div class="content-section" :style="[settingKinformation, settingGeneral]">
    <div
      class="content-wrapper"
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Roboto',
        },
      ]"
    >
      <div
        class="wrapper-content-items"
        :style="`border-color: ${
          settingKinformation.values[0].visibleBorder
            ? settingKinformation.values[0].colorBorder
            : none
        }; background:${settingKinformation.values[0].color_bg}; `"
      >
        <img
          v-lazy="settingKinformation.values[0].url_img_Top"
          alt="imgInfo1"
          class="contentimg"
        />
        <p
          class="text-title"
          :style="`color: ${settingKinformation.values[0].colorTitle}; font-weight: ${settingKinformation.values[0].fontWeighTitle};`"
        >
          {{ settingKinformation.values[0].title }}
        </p>
        <p
          class="text-description"
          :style="`color: ${settingKinformation.values[0].colorDescription}; font-weight: ${settingKinformation.values[0].fontWeighPretitle};`"
        >
          {{ settingKinformation.values[0].description }}
        </p>
        <nuxt-link
          v-if="settingKinformation.values[0].visbleBtn"
          :to="settingKinformation.values[0].url_redirect"
          class="btn"
          :style="`color: ${settingKinformation.values[0].colorBtn};`"
          >{{ settingKinformation.values[0].textBtn }}</nuxt-link
        >
      </div>
      <div
        class="wrapper-content-items"
        :style="`border-color: ${
          settingKinformation.values[1].visibleBorder
            ? settingKinformation.values[1].colorBorder
            : none
        }; background:${settingKinformation.values[1].color_bg}; `"
      >
        <img
          v-lazy="settingKinformation.values[1].url_img_Top"
          alt="imgInfo2"
          class="contentimg"
        />
        <p
          class="text-title"
          :style="`color: ${settingKinformation.values[1].colorTitle}; font-weight: ${settingKinformation.values[1].fontWeighTitle};`"
        >
          {{ settingKinformation.values[1].title }}
        </p>
        <p
          class="text-description"
          :style="`color: ${settingKinformation.values[1].colorDescription}; font-weight: ${settingKinformation.values[1].fontWeighPretitle};`"
        >
          {{ settingKinformation.values[1].description }}
        </p>
        <nuxt-link
          v-if="settingKinformation.values[1].visbleBtn"
          :to="settingKinformation.values[1].url_redirect"
          class="btn"
          :style="`color: ${settingKinformation.values[1].colorBtn};`"
          >{{ settingKinformation.values[1].textBtn }}</nuxt-link
        >
      </div>
      <div
        class="wrapper-content-items"
        :style="`border-color: ${
          settingKinformation.values[2].visibleBorder
            ? settingKinformation.values[2].colorBorder
            : none
        }; background:${settingKinformation.values[2].color_bg}; `"
      >
        <img
          v-lazy="settingKinformation.values[2].url_img_Top"
          alt="imgInfo3"
          class="contentimg"
        />
        <p
          class="text-title"
          :style="`color: ${settingKinformation.values[2].colorTitle}; font-weight: ${settingKinformation.values[2].fontWeighTitle};`"
        >
          {{ settingKinformation.values[2].title }}
        </p>
        <p
          class="text-description"
          :style="`color: ${settingKinformation.values[2].colorDescription}; font-weight: ${settingKinformation.values[2].fontWeighPretitle};`"
        >
          {{ settingKinformation.values[2].description }}
        </p>
        <nuxt-link
          v-if="settingKinformation.values[2].visbleBtn"
          :to="settingKinformation.values[2].url_redirect"
          class="btn"
          :style="`color: ${settingKinformation.values[2].colorBtn};`"
          >{{ settingKinformation.values[2].textBtn }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-information',
  props: {
    settingKinformation: Object,
    settingGeneral: Object,
  },
}
</script>
<style scoped>
.content-section {
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center pt-60 pb-40;
}
.content-wrapper {
  @apply justify-center items-center;
}
.wrapper-content-items {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border: 1px solid;
  padding: 20px;
  max-width: 380px;
}
.contentimg {
  width: 60px;
  max-height: 60px;
  object-position: center;
  object-fit: cover;
}
.text-title {
  margin-top: 15px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-transform: capitalize;
  text-align: center;
}
.text-description {
  padding: 0 10%;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: 0.4px;
  font-weight: 400;
  margin-top: 10px;
  text-align: center;
}
.btn {
  margin-top: 15px;
  font-size: 14px;
  line-height: 26px;
  letter-spacing: 0.3px;
  text-decoration: underline;
  text-transform: uppercase;
  cursor: pointer;
}
@media (max-width: 600px) {
  .wrapper-content-items {
    padding: 10px 15px;
  }
}
@screen sm {
  .content-wrapper {
    @apply w-9/0 grid grid-cols-1 gap-6;
  }
  .wrapper-content-items {
    max-width: 680px;
    width: 100%;
    height: 100%;
  }
}
@screen md {
  .content-wrapper {
    @apply w-9/5 grid grid-cols-3 gap-6;
  }
}
@media (min-width: 1200px) {
  .content-wrapper {
    max-width: 1200px;
    @apply w-full h-auto;
  }
}
</style>
