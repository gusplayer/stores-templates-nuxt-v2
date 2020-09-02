<template>
  <div class="footer-container">
    <div class="wrapper-footer" @click="openOrder">
      <p class="text-footer">Tu pedido: {{ productsCart.length }} items</p>
      <p class="text-footer">{{ totalCard | currency }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataStore: Object,
  },
  mounted() {
    this.productsCart.forEach((element) => {
      this.totalCard += element.precio
    })
  },
  data() {
    return {
      totalCard: 0,
    }
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart
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
  background: transparent;
}
.wrapper-footer {
  position: fixed;
  bottom: 10px;
  z-index: 3;
  width: 100%;
  max-width: 320px;
  background: #00bb2d;
  display: flex;
  justify-content: space-between;
  border: 1px solid #00bb2d;
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
}
.text-footer {
  color: rgb(0, 0, 0);
  font-size: 16px;
  font-weight: bold;
}
</style>
