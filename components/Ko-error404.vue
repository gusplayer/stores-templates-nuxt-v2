<template>
  <div class="wrapper_error">
    <div class="contenedor">
      <a href="https://komercia.co/" target="_blank" rel="noreferrer noopener">
        <img
          v-lazy="
            `https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_300,q_auto:best,f_auto/v1599605487/1_aeokv2.png`
          "
          class="logokomercia"
          alt="Logo Komercia"
        />
      </a>
      <p class="title-error">
        Esta página no existe
      </p>
      <p class="subtitle-error">
        El enlace en el que hizo clic puede estar roto o ya no existe.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error-404',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
}
</script>
<style scoped>
.wrapper_error {
  display: flex;
  width: 100%;
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  height: calc(100vh - 432px);
  padding: 60px 20px 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title-error {
  font-size: 30px;
  font-weight: bold;
  color: var(--color_text);
}
.subtitle-error {
  font-size: 18px;
  color: var(--color_subtext);
}
.logokomercia {
  width: 200px;
}
</style>
