<template>
  <div
    id="width"
    class="w-full flex flex-col justify-center items-center bg-transparent"
  >
    <waTemplate />
    <div
      v-if="dataStore.estado === 0 || !expiredDate(dataStore.fechaExpiracion)"
      id="modalNotification"
      class="w-full h-screen fixed top-0 flex justify-center items-center"
      style="z-index: 9998"
    >
      <div
        class="w-full h-screen top-0 absolute backdrop-blur"
        style="background-color: rgba(0, 0, 0, 0.767)"
      ></div>
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
          v-if="expiredDate(dataStore.fechaExpiracion)"
          class="font-bold text-17 mt-15"
          style="color: #ff314d"
        >
          ¿Deseas continuar?
        </p>
        <button
          v-if="expiredDate(dataStore.fechaExpiracion)"
          class="w-full py-4 mt-15 text-base rounded-10 bg-black text-white-white hover:bg-slate-300 hover:text-black transition ease-in-out delay-75"
          @click="acceptClose()"
        >
          Aceptar
        </button>
      </div>
    </div>
    <div
      v-if="dataStore.redes.whatsapp == ''"
      class="wrapper-notificacion"
      style="z-index: 9999"
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
import { mapState } from 'vuex'
import expiredDate from '@/mixins/expiredDate'
export default {
  name: 'WapiME',
  components: {
    waTemplate: () => import('../../template99/index.vue'),
    koTiendaCerrada: () => import('@/assets/img/tiendaCerrada'),
  },
  mixins: [expiredDate],
  layout: 'wa',
  computed: {
    ...mapState(['dataStore']),
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize)
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
      document.getElementById('modalNotification').style.zIndex = '-2'
      document.getElementById('modalNotification').style.opacity = '0'
    },
  },
}
</script>
