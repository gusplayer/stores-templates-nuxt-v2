<template>
  <div class="footer-container">
    <div class="wrapper-footer" @click="openOrder">
      <p class="text-footer">
        <span>{{ productsCart.length }} items</span>
      </p>
      <p class="text-footer carrito">Mi pedido</p>
      <p class="text-footer valor">
        <span>{{ this.totalCart | currency }}</span>
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
  background: #fff;
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 9999;
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
.text-footer {
  color: white;
  font-size: 14px;
}

.main-container {
  height: 60px;
  width: 100%;
  background: #fff;
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
  font-size: 14px;
}
.valor {
  width: 30%;
  text-align: right;
}
.valor span {
  font-size: 14px;
  text-align: right;
  background-color: #12a493;
  padding: 6px;
  border-radius: 5px;
}
</style>
