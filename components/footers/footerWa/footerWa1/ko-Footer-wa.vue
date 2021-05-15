<template>
  <div class="footer-container">
    <div
      class="wrapper-footer"
      @click="openOrder"
      :class="
        dataStore.entidades.length && dataStore.entidades[0].id == 17
          ? 'wrapper-footer-midasoluciones'
          : 'wrapper-footer-wapi'
      "
    >
      <p
        class="unidades"
        v-if="productsCart.length > 0"
        :class="
          dataStore.entidades.length && dataStore.entidades[0].id == 17
            ? 'text-footer-midasoluciones'
            : 'text-footer-wapi'
        "
      >
        <span>{{ productsCart.length }}</span>
        item
      </p>
      <p
        class="carrito"
        :class="
          dataStore.entidades.length && dataStore.entidades[0].id == 17
            ? 'text-footer-midasoluciones'
            : 'text-footer-wapi'
        "
      >
        <whatsapp-icon class="wp-icon" />
        {{ $t('productdetail_btnComprar') }}
      </p>
      <p class="text-footer-wapi valor" v-if="productsCart.length > 0">
        <span
          :class="
            dataStore.entidades.length && dataStore.entidades[0].id == 17
              ? 'valor-midasoluciones'
              : 'valor-wapi'
          "
        >
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
  /* background: #25d366; */
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
  /* background: #fff; */
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 9999;
}
.unidades {
  width: 30%;
  font-size: 13px;
  font-weight: 600;
}
.carrito {
  width: 30%;
  align-items: center;
  text-align: center;
  font-size: 15px;
  font-weight: 600;
}
.valor {
  width: 30%;
  text-align: right;
  font-weight: 500;
}
.wp-icon {
  font-size: 18px;
  margin-right: 2px;
  margin-bottom: -2px;
}
.wrapper-footer-wapi {
  background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%);
}
.wrapper-footer-wapi:hover {
  background-image: linear-gradient(130deg, #0f7c6f 0, #24a788 80%);
}
.wrapper-footer-midasoluciones {
  background-image: linear-gradient(130deg, #eebe2d 0, #fecb37 80%);
}
.wrapper-footer-midasoluciones:hover {
  background-image: linear-gradient(130deg, #c79e25 0, #e0b531 80%);
}
.text-footer-wapi {
  color: white;
  font-size: 16px;
}
.valor-wapi {
  font-size: 13px;
  text-align: right;
  background-color: #12a493;
  padding: 6px;
  border-radius: 5px;
}
.valor-midasoluciones {
  font-size: 13px;
  text-align: right;
  background-color: black;
  padding: 6px;
  border-radius: 5px;
}
</style>
