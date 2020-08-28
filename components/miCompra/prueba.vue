<template>
  <div class="wrapper_newsletter">
    <div class="contenedor">
      <p class="title">Mi compra Proximamente</p>
      <!-- <p>API incluir esta ruta: https://api2.komercia.co/api/orden/582/16907</p>
      <p>Preguntar numero de orden y cedula (ID tienda ya esta)</p>
      <p>una vez se traiga la peticion, revisar si la cedula coincide</p>
      <p>
        Si no coincide o la API le da error, mostrar un mensaje que no existe
        esa orden
      </p> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Newsletter-1',
  props: {
    dataStore: Object,
  },

  mounted() {},
  data() {
    return {}
  },

  methods: {},
  watch: {},
}
</script>

<style scoped>
.wrapper_newsletter {
  display: flex;
  width: 100%;
  height: calc(100vh - 470px);
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding: 60px 20px 60px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.title {
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -0.4px;
  color: var(--color_text);
  text-align: center;
  width: 600px;
  padding-bottom: 50px;
}
</style>
