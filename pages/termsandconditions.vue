<template>
  <div class="wrapper-component-terms">
    <div class="content-component-terms">
      <h1 class="text-20 font-bold mb-30">
        {{ $t('footer_condicionesLegales') }}
      </h1>
      <div v-if="this.dataStore.politicas.datos" class="item-text-terms">
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaTratamientos') }}
        </p>
        <div v-html="this.dataStore.politicas.datos" />
      </div>

      <div v-if="this.dataStore.politicas.garantia" class="item-text-terms">
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaGarantia') }}
        </p>
        <div v-html="this.dataStore.politicas.garantia" />
      </div>

      <div v-if="this.dataStore.politicas.devolucion" class="item-text-terms">
        <p class="text-17 font-bold mb-10">
          {{ $t('footer_politicaDevoluciones') }}
        </p>
        <div v-html="this.dataStore.politicas.devolucion" />
      </div>

      <div v-if="this.dataStore.politicas.cambio" class="item-text-terms">
        <p class="text-17 font-bold mb-10">{{ $t('footer_politicaCambio') }}</p>
        <div v-html="this.dataStore.politicas.cambio" />
      </div>

      <div v-if="this.dataStore.politicas.envios" class="item-text-terms">
        <p class="text-17 font-bold mb-10">{{ $t('footer_politicaEnvios') }}</p>
        <div v-html="this.dataStore.politicas.envios" />
      </div>

      <div v-if="this.dataStore.politicas.pagos" class="item-text-terms">
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
<style scoped>
.wrapper-component-terms {
  background: #d1d1d1;
  @apply w-full flex justify-center items-start;
}
.content-component-terms {
  padding: 30px 0px 0px;
  max-width: 900px;
  @apply w-full flex flex-col justify-center items-center shadow-md bg-white-white my-30;
}
.item-text-terms {
  max-width: 900px;
  @apply mb-15 px-30;
}
</style>
