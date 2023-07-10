<template>
  <div class="w-full flex flex-col justify-center items-center bg-gray-200">
    <div
      class="w-full mx-20 md:mx-0 max-w-[900px] flex flex-row justify-start items-center my-15"
    >
      <nuxt-link to="/" class="text-14">
        {{ $t('header_inicio') }}
      </nuxt-link>
      <p class="px-10 text-14 font-bold">></p>
      <p class="text-14 font-bold">
        {{ $t('footer_politicasyterminos') }}
      </p>
    </div>
    <div
      class="w-full mx-20 md:mx-0 max-w-[900px] pt-30 flex flex-col justify-center items-center shadow-md bg-white-white mb-33"
    >
      <h1 class="text-20 font-bold mb-30">
        {{ $t('footer_condicionesLegales') }}
      </h1>
      <div
        v-if="this.dataStore.politicas.datos"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaTratamientos') }}
        </p>
        <div v-html="this.dataStore.politicas.datos" />
      </div>

      <div
        v-if="this.dataStore.politicas.garantia"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaGarantia') }}
        </p>
        <div v-html="this.dataStore.politicas.garantia" />
      </div>

      <div
        v-if="this.dataStore.politicas.devolucion"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaDevoluciones') }}
        </p>
        <div v-html="this.dataStore.politicas.devolucion" />
      </div>

      <div
        v-if="this.dataStore.politicas.cambio"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">{{ $t('footer_politicaCambio') }}</p>
        <div v-html="this.dataStore.politicas.cambio" />
      </div>

      <div
        v-if="this.dataStore.politicas.envios"
        class="w-full max-w-[900px] mb-15 px-30"
      >
        <p class="text-17 font-bold mb-10">{{ $t('footer_politicaEnvios') }}</p>
        <div v-html="this.dataStore.politicas.envios" />
      </div>

      <div
        v-if="this.dataStore.politicas.pagos"
        class="w-full max-w-[900px] mb-15 px-30"
      >
        <p class="text-16 font-bold mb-10">{{ $t('footer_politicaPagos') }}</p>
        <div v-html="this.dataStore.politicas.pagos" class="text-justify" />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  computed: {
    ...mapState(['dataStore']),
  },
}
</script>
