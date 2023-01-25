<template>
  <div class="content-wa" id="width">
    <component :is="indexTemplate" />
    <WCountry :dataStore="dataStore" :valueWa="true" />
    <div
      style="z-index: 9998"
      class="wrapper-notificacion"
      id="modalNotificacion"
      v-if="
        dataStore.tienda.estado == 0 ||
        !expiredDate(dataStore.tienda.fecha_expiracion)
      "
    >
      <div class="content-notificacion">
        <koTiendaCerrada />
        <p class="text-noti">
          Disculpa, no podrá realizar compras por el momento,
        </p>
        <p class="subtitle-noti">¿Deseas continuar?</p>
        <button class="btn-acceptM" @click="acceptClose()">Aceptar</button>
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
.wrapper-notificacion {
  height: calc(100vh);
  background: rgba(0, 0, 0, 0.5);
  transition: all 200ms ease-in;
  @apply w-full fixed flex justify-center items-center top-0 opacity-100;
}
.content-notificacion {
  padding: 30px 20px;
  max-width: 250px;
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 27px 11px rgba(87, 87, 87, 0.4);
  box-shadow: 0px 0px 27px 11px rgba(87, 87, 87, 0.4);
  @apply w-full flex flex-col justify-center items-center text-center bg-white-white;
}
.text-noti {
  margin-top: 15px;
  letter-spacing: 0px;
  font-size: 16px;
  color: rgb(75, 75, 75);
  width: 160px;
}
.subtitle-noti {
  font-weight: bold;
  font-size: 17px;
  color: #ff314d;
  margin-bottom: 15px;
}
.btn-acceptM {
  width: 110px;
  border-radius: 5px;
  color: white;
  border: solid 2px black;
  background-color: black;
  padding: 4px 14px;
  font-size: 14px;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn-acceptM:hover {
  border: solid 2px gray;
  background-color: gray;
}
</style>
