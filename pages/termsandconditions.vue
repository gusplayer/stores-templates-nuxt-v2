<!-- eslint-disable vue/no-v-html -->
<template>
  <div class="flex w-full flex-col items-center justify-center bg-gray-200">
    <div
      class="mx-20 my-15 flex w-full max-w-[900px] flex-row items-center justify-start md:mx-0"
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
      class="mx-20 mb-33 flex w-full max-w-[900px] flex-col items-center justify-center bg-white-white pt-30 shadow-md md:mx-0"
    >
      <h1 class="mb-30 text-20 font-bold">
        {{ $t('footer_condicionesLegales') }}
      </h1>
      <div
        v-if="storePolicies?.datos"
        class="mb-15 w-full max-w-[900px] px-20 md:px-30"
      >
        <p class="mb-10 text-17 font-bold">
          {{ $t('footer_politicaTratamientos') }}
        </p>
        <div v-html="storePolicies.datos"></div>
      </div>

      <div
        v-if="storePolicies?.garantia"
        class="mb-15 w-full max-w-[900px] px-20 md:px-30"
      >
        <p class="mb-10 text-17 font-bold">
          {{ $t('footer_politicaGarantia') }}
        </p>
        <div v-html="storePolicies.garantia"></div>
      </div>

      <div
        v-if="storePolicies?.devolucion"
        class="mb-15 w-full max-w-[900px] px-20 md:px-30"
      >
        <p class="mb-10 text-17 font-bold">
          {{ $t('footer_politicaDevoluciones') }}
        </p>
        <div v-html="storePolicies.devolucion"></div>
      </div>

      <div
        v-if="storePolicies?.cambio"
        class="mb-15 w-full max-w-[900px] px-20 md:px-30"
      >
        <p class="mb-10 text-17 font-bold">
          {{ $t('footer_politicaCambio') }}
        </p>
        <div v-html="storePolicies.cambio"></div>
      </div>

      <div
        v-if="storePolicies?.envios"
        class="mb-15 w-full max-w-[900px] px-30"
      >
        <p class="mb-10 text-17 font-bold">
          {{ $t('footer_politicaEnvios') }}
        </p>
        <div v-html="storePolicies.envios"></div>
      </div>

      <div v-if="storePolicies?.pagos" class="mb-15 w-full max-w-[900px] px-30">
        <p class="mb-10 text-16 font-bold">
          {{ $t('footer_politicaPagos') }}
        </p>
        <div v-html="storePolicies.pagos"></div>
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
    ...mapState(['storePolicies']),
  },
}
</script>
