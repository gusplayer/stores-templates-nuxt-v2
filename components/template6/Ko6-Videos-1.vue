<template>
  <div class="wrapper-videos" v-if="videoInfo.showVideo == 1">
    <div class="contenedor">
      <div class="content-left">
        <div>
          <p class="text-titulo">{{ videoInfo.video_title }}</p>
          <p class="text-subtitulo">
            {{ videoInfo.video_description }}
          </p>
        </div>
        <div class="content-button">
          <button ref="colorBtn" class="btn">Catálogo</button>
        </div>
      </div>
      <div class="content-right">
        <div class="content-video">
          <div class="wrapper-video">
            <iframe
              :src="`https://www.youtube.com/embed/${videoInfo.video_url}?rel=0&amp;controls=0&amp;showinfo=0`"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            ></iframe>
          </div>
        </div>
        <div class="content-mobil">
          <p class="text-subtitulo-responsive">
            {{ videoInfo.video_description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko6-Videos-1',
  props: {
    dataStore: Object,
  },
  computed: {
    videoInfo() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style scoped>
.wrapper-videos {
  display: flex;
  width: 100%;
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 50px 30px 50px;
}
.contenedor > div {
  flex: 1;
}
.contenedor > div:nth-child(2) {
  flex: 2;
  margin-left: 20px;
}
.content-left {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: end;
}
.text-titulo {
  font-size: 22px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  color: var(--color_text);
}
.text-subtitulo {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.63;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 20px;
}
.content-button {
  margin-top: 20px;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
  padding: 4px 14px;
  width: 120px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  background-color: var(--btnhover);
}
.content-right {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-self: end;
}
.content-video {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.wrapper-video {
  position: relative;
  max-width: 570px;
  width: 570px;
  height: 320px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0px 0px 40px -5px grey;
}
.wrapper-video iframe,
.wrapper-video object,
.wrapper-video embed {
  width: 100%;
  height: 100%;
}
.content-mobil {
  display: none;
}

@media (max-width: 824px) {
  .contenedor {
    flex-direction: column;
    justify-content: center;
    padding: 30px 20px 30px;
  }
  .contenedor > div:nth-child(2) {
    margin-left: 0px;
  }
  .content-left {
    flex-direction: row;
    justify-content: space-between;
    align-self: center;
  }
  .content-right {
    margin-top: 20px;
    align-self: initial;
  }
  .wrapper-video {
    max-width: 800px;
    width: 800px;
    height: 320px;
    border-radius: 20px;
    box-shadow: 0px 0px 68px -12px grey;
  }
  .text-subtitulo {
    display: none;
  }
  .content-button {
    margin-top: 0px;
  }
  .content-mobil {
    display: initial;
  }
  .text-subtitulo-responsive {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.63;
    letter-spacing: normal;
    color: var(--color_subtext);
    margin-top: 20px;
  }
}
@media (max-width: 630px) {
  .content-button {
    margin-top: 8px;
  }
}
</style>
