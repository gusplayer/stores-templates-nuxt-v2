<template>
  <client-only>
    <div
      :class="cantidadProductos > 0 ? 'content-footer' : 'content-footer-none'"
    >
      <footer class="content-items-footer">
        <div class="item-footer" v-if="cantidadProductos > 0">
          <p class="text-items-cart">
            {{ $t('footer_title') }}
            <span class="text-items-cart ml-2">({{ cantidadProductos }})</span>
          </p>
        </div>
        <button
          v-if="cantidadProductos > 0"
          @click="openOrder"
          :style="`background: ${
            settingByTemplate && settingByTemplate.color_primario
              ? settingByTemplate.color_primario
              : '#25D366'
          }; color:${
            settingByTemplate && settingByTemplate.color_secundario
              ? settingByTemplate.color_secundario
              : '#FFFFFF'
          };`"
          class="button-footer"
        >
          <p class="text-items-button">{{ $t('footer_title2') }}</p>
        </button>

        <p v-else class="button-footer-out">
          {{ $t('footer_carritoVacio2') }}
        </p>

        <div class="item-footer" v-if="cantidadProductos > 0">
          <p class="text-items-cart">
            {{
              this.totalCart
                | currency(
                  dataStore.tienda.codigo_pais,
                  dataStore.tienda.moneda
                )
            }}
          </p>
        </div>
      </footer>
    </div>
  </client-only>
</template>
<script>
import currency from '../../../../mixins/formatCurrent'
export default {
  name: 'Ko2-Footer-Wa',
  mixins: [currency],
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  computed: {
    cantidadProductos() {
      return this.$store.getters.cantidadProductos
    },
    totalCart() {
      return this.$store.state.totalCart
    },
  },
  methods: {
    openOrder() {
      this.$store.commit('SET_OPENORDER', true)
    },
  },
}
</script>
<style scoped>
.content-footer {
  background-color: #3d3d3d;
  position: fixed;
  z-index: 999;
  bottom: 0;
  max-width: 900px;
  height: 60px;
  @apply w-full flex flex-col justify-center items-center;
}
.content-footer-none {
  display: none;
}
@screen sm {
  .content-items-footer {
    @apply w-full flex flex-row justify-center items-center py-20;
  }
  .item-footer {
    flex: 1;
    @apply w-full flex flex-row justify-center items-center;
  }
  .text-items-cart {
    font-size: 12px;
    color: #fff;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto flex flex-row justify-center items-center font-semibold;
  }
  .button-footer {
    height: 37px;
    width: 130px;
    @apply flex flex-col justify-center items-center py-7 rounded-md;
  }
  .button-footer-out {
    width: 161px;
    color: #fff;
    @apply text-center;
  }
  .text-items-button {
    font-size: 14px;
    font-family: 'Poppins', sans-serif !important;
    @apply w-auto font-semibold;
  }
}
@screen md {
  .content-items-footer {
    @apply py-20;
  }
  .text-items-cart {
    font-size: 18px;
  }
  .button-footer {
    height: 40px;
    @apply w-auto py-8 px-30;
  }
  .button-footer-out {
    width: 280px;
    height: 40px;
    @apply py-10;
  }
  .text-items-button {
    font-size: 16px;
  }
}
@media (max-width: 600px) {
  .button-footer {
    height: 40px;
  }
  .button-footer-out {
    height: 40px;
  }
}
@media (max-width: 400px) {
  .button-footer {
    height: 37px;
  }
  .button-footer-out {
    height: 37px;
  }
}
</style>
