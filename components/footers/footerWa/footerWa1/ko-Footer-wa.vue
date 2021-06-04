<template>
  <div class="footer-container">
    <div
      class="wrapper-footer"
      @click="openOrder"
      :style="`background: ${settingByTemplate.color_primario}; color:${settingByTemplate.color_secundario};`"
    >
      <p class="unidades" v-if="productsCart.length > 0">
        ({{ productsCart.length }}) item
      </p>
      <p class="carrito">
        <whatsapp-icon class="wp-icon" />
        {{ $t('productdetail_btnComprar') }}
      </p>
      <p class="text-footer-wapi valor" v-if="productsCart.length > 0">
        <span class="valor">
          {{
            this.totalCart
              | currency(dataStore.tienda.codigo_pais, dataStore.tienda.moneda)
          }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataStore: Object,
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart
    },
    totalCart() {
      return this.$store.state.totalCart
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
  },
  methods: {
    openOrder() {
      this.$store.commit('SET_OPENORDER', true)
    },
  },
  filters: {
    currency(value, codigo_pais, moneda) {
      let resultCurrent
      if (codigo_pais && moneda) {
        if (value && codigo_pais == 'co' && moneda == 'COP') {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
        } else if (codigo_pais == 'internacional') {
          {
            resultCurrent = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(value)
            return resultCurrent
          }
        } else {
          {
            resultCurrent = new Intl.NumberFormat(codigo_pais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(value)
            return resultCurrent
          }
        }
      } else {
        if (value) {
          return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
        }
      }
    },
  },
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 60px;
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 999;
  max-width: 900px;
  background: white;
}
.wrapper-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 0px 9px;
  cursor: pointer;
}
.wrapper-footer p {
  flex: 1;
}
.main-container {
  height: 60px;
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 9999;
}
.unidades {
  width: 30%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
}
.carrito {
  width: 30%;
  justify-content: center;
  align-content: center;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  flex-direction: row;
}
.valor {
  width: 30%;
  text-align: right;
  font-weight: 500;
  padding: 6px;
  border-radius: 5px;
  font-size: 13px;
}
.wp-icon {
  font-size: 18px;
  margin-right: 2px;
  bottom: 0.125em;
}
@media (max-width: 325px) {
  .unidades {
    width: 25%;
    font-size: 15px;
  }
  .carrito {
    width: 30%;

    font-size: 16px;
  }
  .valor {
    width: 35%;

    font-size: 13px;
  }
  .unidades {
    display: none;
  }
}
</style>
