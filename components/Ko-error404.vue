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
      <nuxt-link to="/" class="btn-error">Ir al inicio</nuxt-link>
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
  background-color: white;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  min-height: calc(100vh - 335px);
  padding: 60px 20px 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title-error {
  font-size: 30px;
  font-weight: bold;
  color: black;
}
.subtitle-error {
  font-size: 18px;
  color: black;
}
.logokomercia {
  width: 200px;
}
.btn-error {
  border-radius: 5px;
  color: black;
  border: solid 2px black;
  background-color: transparent;
  padding: 8px 12px;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 10px;
  transition: all 200ms ease-in;
}
.btn-error:hover {
  color: grey;
  border: solid 2px grey;
}
</style>
