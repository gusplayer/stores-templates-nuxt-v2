<template>
  <div class="content-footer">
    <footer class="content-items-footer">
      <div class="item-footer" v-if="productsCart.length > 0">
        <p class="text-items-cart">
          Tu orden
          <span class="text-items-cart ml-2">({{ productsCart.length }})</span>
        </p>
      </div>
      <div
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
        :class="productsCart.length > 0 ? 'button-footer' : 'button-footer-out'"
      >
        <p class="text-items-button">Realizar pedido</p>
      </div>
      <div class="item-footer" v-if="productsCart.length > 0">
        <p class="text-items-cart">
          {{
            this.totalCart
              | currency(dataStore.tienda.codigo_pais, dataStore.tienda.moneda)
          }}
        </p>
      </div>
    </footer>
  </div>
</template>
<script>
import currency from '../../../../mixins/formatCurrent'
export default {
  name: 'FooterWa2',
  mixins: [currency],
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart
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
    @apply flex flex-col justify-center items-center py-7 rounded-md cursor-pointer;
  }
  .button-footer-out {
    height: 37px;
    width: 161px;
    @apply flex flex-col justify-center items-center py-7 rounded-md;
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
