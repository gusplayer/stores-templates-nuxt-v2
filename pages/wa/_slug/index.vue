<template>
  <div class="content-wa" id="width">
    <component :is="indexTemplate" />
    <WCountry :dataStore="dataStore" :valueWa="true" />
    <div
      id="modalNotificacion"
      v-if="
        dataStore.tienda.estado == 0 ||
        !expiredDate(dataStore.tienda.fecha_expiracion)
      "
      class="w-full h-screen fixed top-0 flex justify-center items-center"
      style="z-index: 9998"
    >
      <div
        class="w-full h-screen top-0 absolute backdrop-blur"
        style="background-color: rgba(0, 0, 0, 0.767)"
      />
      <div
        class="w-full py-20 px-30 flex flex-col justify-center items-center bg-white-white rounded-10 shadow-md z-100"
        style="max-width: 250px"
      >
        <koTiendaCerrada />
        <p
          class="mt-15 text-base text-gray-500 text-center"
          style="max-width: 220px"
        >
          Disculpa, no podrá realizar compras por el momento,
        </p>
        <p
          v-if="expiredDate(dataStore.tienda.fecha_expiracion)"
          class="font-bold text-17 mt-15"
          style="color: #ff314d"
        >
          ¿Deseas continuar?
        </p>
        <button
          v-if="expiredDate(dataStore.tienda.fecha_expiracion)"
          class="w-full py-4 mt-15 text-base rounded-10 bg-black text-white-white hover:bg-slate-300 hover:text-black transition ease-in-out delay-75"
          @click="acceptClose()"
        >
          Aceptar
        </button>
      </div>
    </div>
    <div
      class="wrapper-notificacion"
      style="z-index: 9999"
      v-if="dataStore.tienda.whatsapp == ''"
    >
      <div class="content-notificacion">
        <koTiendaCerrada />
        <p class="text-noti">
          Disculpa, no podrá realizar compras por el momento,
        </p>
        <p class="subtitle-noti">
          La tienda no tiene configurado un número de WhatsApp
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import expiredDate from '@/mixins/expiredDate'
import WaTemplate1 from '../../template99/templates/template1/index'
import WaTemplate2 from '../../template99/templates/template2/index'
import WaTemplate3 from '../../template99/templates/template3/index'
import WCountry from '../../../components/footers/footer1/Ko-Footer-Country.vue'
import koTiendaCerrada from '../../../assets/img/tiendaCerrada'
export default {
  name: 'WapiME',
  layout: 'wa',
  mixins: [expiredDate],
  components: {
    koTiendaCerrada,
    WaTemplate1,
    WaTemplate2,
    WaTemplate3,
    WCountry,
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    indexTemplate() {
      let componentTemplate = ''
      if (this.settingByTemplate && this.settingByTemplate.tema) {
        switch (this.settingByTemplate.tema) {
          case 1:
            componentTemplate = 'WaTemplate1'
            break
          case 2:
            componentTemplate = 'WaTemplate2'
            break
          case 3:
            componentTemplate = 'WaTemplate3'
            break
        }
      } else {
        return (componentTemplate = 'WaTemplate1')
      }
      return componentTemplate
    },
  },
  methods: {
    onResize() {
      const widthOutput = document.querySelector('#width')
      if (window.innerWidth > 1300) {
        widthOutput.style.width = '900px'
      } else {
        widthOutput.style.width = window.innerWidth + 'px'
      }
    },
    acceptClose() {
      document.getElementById('modalNotificacion').style.zIndex = '-2'
      document.getElementById('modalNotificacion').style.opacity = '0'
    },
  },
}
</script>

<style scoped>
.content-wa {
  @apply w-full flex flex-col justify-center items-center;
}
</style>
