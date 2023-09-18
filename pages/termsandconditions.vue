<template>
  <div class="w-full flex flex-col justify-center items-center bg-gray-200">
    <div
      class="w-full mx-20 md:mx-0 max-w-[900px] flex flex-row justify-start items-center my-15"
    >
      <nuxt-link to="/" class="text-14">
        {{ $t('header_inicio') }}
      </nuxt-link>
      <p class="px-10 text-14 font-bold">&gt;</p>
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
        v-if="dataStore?.politicas?.datos"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaTratamientos') }}
        </p>
        <div>{{ dataStore?.politicas?.datos }}</div>
      </div>

      <div
        v-if="dataStore?.politicas?.garantia"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaGarantia') }}
        </p>
        <div>{{ dataStore?.politicas?.garantia }}</div>
      </div>

      <div
        v-if="dataStore?.politicas?.devolucion"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaDevoluciones') }}
        </p>
        <div>{{ dataStore?.politicas?.devolucion }}</div>
      </div>

      <div
        v-if="dataStore?.politicas?.cambio"
        class="w-full max-w-[900px] mb-15 px-20 md:px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaCambio') }}
        </p>
        <div>{{ dataStore?.politicas?.cambio }}</div>
      </div>

      <div
        v-if="dataStore?.politicas?.envios"
        class="w-full max-w-[900px] mb-15 px-30"
      >
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaEnvios') }}
        </p>
        <div>{{ dataStore?.politicas?.envios }}</div>
      </div>

      <div
        v-if="dataStore?.politicas?.pagos"
        class="w-full max-w-[900px] mb-15 px-30"
      >
        <p class="text-16 font-bold mb-10">
          {{ $t('footer_politicaPagos') }}
        </p>
        <div class="text-justify">
          {{ dataStore?.politicas?.pagos }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'TermsAndConditions',
  layout: 'default',
  computed: {
    ...mapState(['dataStore']),
  },
}
</script>
