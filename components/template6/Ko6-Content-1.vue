<template>
  <div class="wrapper-content">
    <div class="container-content" v-if="this.contentInfo.length">
      <div class="item item_image">
        <img :src="contentInfo[0].photo" />
      </div>
      <div class="item item_content">
        <div class="item texto">
          <div class="wrapper-text">
            <p class="text-titulo">{{ contentInfo[0].title_1 }}</p>
            <p class="text-subtitulo">{{ contentInfo[0].description }}</p>
            <a :href="contentInfo[0].redirect_url" rel="noreferrer noopener">
              <button ref="colorBtn" class="button">
                {{ contentInfo[0].button_text }}
              </button>
            </a>
          </div>
        </div>
      </div>
      <div class="item item_content item_last">
        <div class="item texto">
          <div class="wrapper-text">
            <p class="text-titulo">{{ contentInfo[1].title_1 }}</p>
            <p class="text-subtitulo">{{ contentInfo[1].description }}</p>
            <a :href="contentInfo[1].redirect_url" rel="noreferrer noopener">
              <button class="button">{{ contentInfo[1].button_text }}</button>
            </a>
          </div>
        </div>
      </div>
      <div class="item item_image">
        <img :src="contentInfo[1].photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko6-Content-1',
  props: {
    dataStore: Object,
  },
  computed: {
    contentInfo() {
      return this.$store.state.settingByTemplate.contenidos
    },
  },
}
</script>

<style scoped>
.wrapper-content {
  display: flex;
  width: 100%;
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.container-content {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 30px 30px 50px;
  flex-direction: column;
}
.item .texto {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
}
.item_last .texto {
  width: 100%;
  box-sizing: border-box;
}
.wrapper-text {
  max-width: 400px;
}
.text-titulo {
  font-size: 35px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: var(--color_text);
  margin-bottom: 20px;
}
.text-subtitulo {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: var(--color_subtext);
  /* margin-top: 20px; */
  /* text-align: justify; */
}
.button {
  border-radius: var(--radius_btn);
  color: var(--color_text_btn);
  border: solid 2px var(--color_background_btn);
  background-color: var(--color_background_btn);
  padding: 8px 14px;
  font-size: 14px;
  width: 140px;
  margin-top: 20px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.button:hover {
  background-color: var(--btnhover);
  border: solid 2px var(--btnhover);
}
.item_image {
  position: relative;
  max-width: 630px;
  max-height: 480px;
  height: 480px;
  overflow: hidden;
  width: 100%;
  z-index: 1;
}
.item_image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  max-height: 500px;
  z-index: 1;
}
.item_content {
  display: flex;
  align-items: center;
  justify-items: center;
}
@media screen and (max-width: 800px) {
  .wrapper-text {
    max-width: 500px;
  }
  .container-content {
    padding: 30px 0px;
    grid-template: repeat(1, 1fr) / 4fr;
  }
  .item_image {
    margin: auto;
  }
  .item_last {
    order: 3;
  }
  .item .texto {
    padding: 20px 0px;
  }
}
@media screen and (max-width: 700px) {
  .text-titulo {
    font-size: 35px;
  }
  .text-subtitulo {
    font-size: 18px;
  }
  .item .texto {
    padding: 20px 20px;
  }
}
@media screen and (max-width: 400px) {
  .text-titulo {
    font-size: 30px;
  }
  .text-subtitulo {
    font-size: 16px;
  }
}
</style>
