<template>
  <div class="wrapper_notificacion" ref="colorfondo">
    <div class="contenedor">
      <nuxt-link
        :to="this.settingBytemplatePrueba.notificaciones.urlRedirect"
        v-if="this.settingBytemplatePrueba.notificaciones.urlRedirect"
      >
        <p class="title" ref="colortexto">
          {{ this.settingBytemplatePrueba.notificaciones.texto }}
        </p>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Notificacion-1',
  props: {
    settingBytemplatePrueba: Object,
  },
  mounted() {
    if (
      this.settingBytemplatePrueba.notificaciones.colorFondo &&
      this.settingBytemplatePrueba.notificaciones.colorTexto
    ) {
      this.$refs.colorfondo.style.setProperty(
        '--background_color_1',
        this.settingBytemplatePrueba.notificaciones.colorFondo
      )
      this.$refs.colortexto.style.setProperty(
        '--color_text',
        this.settingBytemplatePrueba.notificaciones.colorTexto
      )
    }
  },
  data() {
    return {}
  },
}
</script>

<style scoped>
.wrapper_notificacion {
  display: flex;
  width: 100%;
  background-color: var(--background_color_1);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: fixed;
  top: 120px;
  z-index: 3;
}
.contenedor {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1300px;
  padding: 5px 20px;
}
.title {
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.24;
  letter-spacing: -0.4px;
  color: var(--color_text);
  text-align: center;
  cursor: pointer;
}
</style>
