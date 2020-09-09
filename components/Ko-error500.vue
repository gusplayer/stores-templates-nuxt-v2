<template>
  <div class="wrapper_error">
    <div class="contenedor">
      <a href="https://komercia.co/" target="_blank" rel="noreferrer noopener">
        <img
          src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_300,q_auto:best,f_auto/v1599605487/1_aeokv2.png"
          class="logokomercia"
          alt="Logo Komercia"
        />
      </a>
      <p class="title-error">
        Contactar con Komercia
      </p>
      <p class="subtitle-error">
        error 500
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'error-500',
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
  color: black;
}
.subtitle-error {
  font-size: 18px;
  color: black;
}
.logokomercia {
  width: 200px;
}
</style>
