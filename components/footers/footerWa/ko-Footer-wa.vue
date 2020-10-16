<template>
  <div class="footer-container">
    <div class="wrapper-footer" @click="openOrder">
      <p class="text-footer" v-if="productsCart.length > 0">
        <span>{{ productsCart.length }}</span>
        item
      </p>
      <p class="text-footer carrito">
        <whatsapp-icon class="wp-icon" />Comprar
      </p>
      <p class="text-footer valor" v-if="productsCart.length > 0">
        <span v-if="dataStore.tienda.codigo_pais && dataStore.tienda.moneda">
          <span v-if="dataStore.tienda.codigo_pais == 'internacional'">
            {{
              new Intl.NumberFormat('en-IN', {
                style: 'currency',
                currency: dataStore.tienda.moneda,
                minimumFractionDigits: 0,
              }).format(this.totalCart)
            }}</span
          >
          <span v-else>{{
            new Intl.NumberFormat(dataStore.tienda.codigo_pais, {
              style: 'currency',
              currency: dataStore.tienda.moneda,
              minimumFractionDigits: 0,
            }).format(this.totalCart)
          }}</span>
        </span>
        <span v-else>{{
          new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0,
          }).format(this.totalCart)
        }}</span>
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
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
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
  background: #25d366;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 0px 9px;
  cursor: pointer;
  background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%);
}
.wrapper-footer p {
  flex: 1;
}
.text-footer {
  color: white;
  font-size: 12px;
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
}
.carrito {
  width: 30%;
  align-items: center;
  text-align: center;
  font-size: 13px;
  font-weight: 500;
}
.valor {
  width: 30%;
  text-align: right;
}
.valor span {
  font-size: 12px;
  text-align: right;
  background-color: #12a493;
  padding: 6px;
  border-radius: 5px;
}
.wp-icon {
  font-size: 18px;
  margin-right: 2px;
  margin-bottom: -2px;
}
.icon-bag {
  color: white;
}
</style>
