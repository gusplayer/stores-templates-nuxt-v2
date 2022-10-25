<template>
  <div class="wrapper-component">
    <div class="content-component">
      <h1 class="text-20 font-bold mb-30">
        {{ $t('footer_condicionesLegales') }}
      </h1>

      <div v-if="this.dataStore.politicas.datos" class="mb-15">
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaTratamientos') }}
        </p>
        <div v-html="this.dataStore.politicas.datos" class="text-justify"></div>
      </div>

      <div v-if="this.dataStore.politicas.garantia" class="mb-15">
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaGarantia') }}
        </p>
        <div
          v-html="this.dataStore.politicas.garantia"
          class="text-justify"
        ></div>
      </div>

      <div v-if="this.dataStore.politicas.devolucion" class="mb-15">
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaDevoluciones') }}
        </p>
        <div
          v-html="this.dataStore.politicas.devolucion"
          class="text-justify"
        ></div>
      </div>

      <div v-if="this.dataStore.politicas.cambio" class="mb-15">
        <p class="text-17 font-bold mb-10">{{ $t('footer_politicaCambio') }}</p>
        <div
          v-html="this.dataStore.politicas.cambio"
          class="text-justify"
        ></div>
      </div>

      <div v-if="this.dataStore.politicas.envios" class="mb-15">
        <p class="text-17 font-bold mb-10">{{ $t('footer_politicaEnvios') }}</p>
        <div
          v-html="this.dataStore.politicas.envios"
          class="text-justify"
        ></div>
      </div>

      <div v-if="this.dataStore.politicas.pagos" class="mb-15">
        <p class="text-16 font-bold mb-10">{{ $t('footer_politicaPagos') }}</p>
        <div v-html="this.dataStore.politicas.pagos" class="text-justify"></div>
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

  methods: {},
}
</script>
<style scoped>
.wrapper-component {
  background: #d1d1d1;
  @apply w-full flex justify-center items-start box-border;
}
.content-component {
  padding: 30px 30px 0px;
  @apply w-full max-w-5/0 flex flex-col justify-center items-center shadow-md bg-white-white my-30;
}
</style>
