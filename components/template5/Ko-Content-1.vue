<template>
  <div class="wrapper-content">
    <div class="container">
      <div class="item item_image">
        <img v-lazy-load :data-src="setting.data[0].photo" />
      </div>
      <div class="item item_content">
        <div class="item texto">
          <p class="text-titulo">{{ setting.data[0].title_1 }}</p>
          <p class="text-subtitulo">{{ setting.data[0].description }}</p>
          <a :href="setting.data[0].redirect_url">
            <button ref="colorBtn" class="button">
              {{ setting.data[0].button_text }}
            </button>
          </a>
        </div>
      </div>
      <div class="item item_content item_last">
        <div class="item texto">
          <p class="text-titulo">{{ setting.data[0].title_2 }}</p>
          <p class="text-subtitulo">{{ setting.data[1].description }}</p>
          <a :href="setting.data[1].redirect_url">
            <button class="button">{{ setting.data[1].button_text }}</button>
          </a>
        </div>
      </div>
      <div class="item item_image">
        <img v-lazy-load :data-src="setting.data[1].photo" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Content-1',
  props: {
    dataStore: Object,
    setting: {
      type: Object,
      default: function () {
        return {
          name: '',
          data: [
            {
              title_1: '',
              photo:
                'https://res.cloudinary.com/komercia-store/image/upload/v1564506232/lcutljex9d8adxfj6jnh.png',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              redirect_url: '',
              button_text: 'SHOP NOW',
            },
            {
              title_2: '',
              photo:
                'https://res.cloudinary.com/komercia-store/image/upload/v1564506244/oyzygz1vhpg3rjshnxjp.png',
              description:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
              redirect_url: '',
              button_text: 'SELL IT',
            },
          ],
        }
      },
    },
  },
  computed: {},
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
.container {
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  margin: 0 auto;
  width: 100%;
  max-width: 1300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 50px 30px 50px;
  flex-direction: column;
}
.item .texto {
  max-width: 400px;
  width: 100%;
  text-align: justify;
  padding: 20px;
  box-sizing: border-box;
}
.item_last .texto {
  max-width: 400px;
  width: 100%;
  text-align: justify;
  padding: 20px;
  padding-left: 0px;
  box-sizing: border-box;
}

.text-titulo {
  font-size: 40px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: var(--color_text);
}
.text-subtitulo {
  font-size: 20px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 20px;
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
  .container {
    padding: 0px;
    grid-template: repeat(1, 1fr) / 4fr;
  }
  .item_image {
    margin: auto;
  }
  .item_last {
    order: 3;
  }
  .item .texto {
    max-width: 768px;
    width: 100%;
    text-align: justify;
    padding: 30px 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
@media screen and (max-width: 700px) {
  .item .texto {
    max-width: 700px;
    padding: 20px 10px;
  }
  .text-titulo {
    font-size: 35px;
  }
  .text-subtitulo {
    font-size: 18px;
  }
}
@media screen and (max-width: 400px) {
  .item .texto {
    max-width: 400px;
    padding: 20px 10px;
  }
  .text-titulo {
    font-size: 30px;
  }
  .text-subtitulo {
    font-size: 16px;
  }
}
</style>
