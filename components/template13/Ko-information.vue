<template>
  <div
    class="content-section"
    :style="[information, settingGeneral]"
    v-if="information"
  >
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
      <div class="wrapper-content-items">
        <img
          v-lazy="information.values[0].url_img"
          alt="imgInfo1"
          class="contentImg"
        />
        <p
          class="text-title"
          :style="`color: ${information.values[0].colorTitle}; font-weight: ${information.values[0].fontWeighTitle};`"
        >
          {{ information.values[0].title }}
        </p>
        <p
          class="text-description"
          :style="`color: ${information.values[0].colorDescription}; font-weight: ${information.values[0].fontWeighPretitle};`"
        >
          {{ information.values[0].description }}
        </p>
        <nuxt-link
          v-if="information.values[0].visbleBtn"
          :to="information.values[0].url_redirect"
          class="btn"
          :style="`color: ${information.values[0].colorBtn};`"
        >
          {{ information.values[0].textBtn }}
        </nuxt-link>
      </div>
      <div class="wrapper-content-items">
        <img
          v-lazy="information.values[1].url_img"
          alt="imgInfo2"
          class="contentImg"
        />
        <p
          class="text-title"
          :style="`color: ${information.values[1].colorTitle}; font-weight: ${information.values[1].fontWeighTitle};`"
        >
          {{ information.values[1].title }}
        </p>
        <p
          class="text-description"
          :style="`color: ${information.values[1].colorDescription}; font-weight: ${information.values[1].fontWeighPretitle};`"
        >
          {{ information.values[1].description }}
        </p>
        <nuxt-link
          v-if="information.values[1].visbleBtn"
          :to="information.values[1].url_redirect"
          class="btn"
          :style="`color: ${information.values[1].colorBtn};`"
          >{{ information.values[1].textBtn }}</nuxt-link
        >
      </div>
      <div class="wrapper-content-items">
        <img
          v-lazy="information.values[2].url_img"
          alt="imgInfo3"
          class="contentImg"
        />
        <p
          class="text-title"
          :style="`color: ${information.values[2].colorTitle}; font-weight: ${information.values[2].fontWeighTitle};`"
        >
          {{ information.values[2].title }}
        </p>
        <p
          class="text-description"
          :style="`color: ${information.values[2].colorDescription}; font-weight: ${information.values[2].fontWeighPretitle};`"
        >
          {{ information.values[2].description }}
        </p>
        <nuxt-link
          v-if="information.values[2].visbleBtn"
          :to="information.values[2].url_redirect"
          class="btn"
          :style="`color: ${information.values[2].colorBtn};`"
          >{{ information.values[2].textBtn }}</nuxt-link
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko13-information',
  props: {
    information: Object,
    settingGeneral: Object,
  },
}
</script>
<style scoped>
.content-section {
  background-color: var(--background_color_1);
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
  /* border: 1px solid; */
  padding: 20px;
  max-width: 380px;
}
.contentImg {
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
  .content-section {
    @apply pt-30 pb-20;
  }
}
@screen sm {
  .content-wrapper {
    @apply w-full grid grid-cols-1 gap-6 px-10;
  }
  .wrapper-content-items {
    max-width: 680px;
    width: 100%;
    height: 100%;
  }
}
@screen md {
  .content-wrapper {
    @apply w-full grid grid-cols-3 gap-6 px-10;
  }
}
@media (min-width: 1200px) {
  .content-wrapper {
    max-width: 1300px;
    @apply w-full h-auto px-20;
  }
}
</style>
