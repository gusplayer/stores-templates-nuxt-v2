<template>
  <div class="main-container">
    <div class="product-link" @click="openOrder">
      <whatsapp-icon class="wp-icon" />
      <p class="unidades">Whatsapp</p>
    </div>
    <div class="add-cart">
      <cart-icon class="cart-icon" />
      <p class="unidades">Agregar</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saleAmount: 0,
    }
  },
  methods: {
    openOrder() {
      this.$store.state.openOrder = true
    },
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart
    },
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 999;
}
.product-link {
  width: 59%;
  background-color: #25d366;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-link img {
  width: 20px;
  margin-right: 10px;
  filter: grayscale(1) brightness(2);
}
p {
  color: #fff;
  font-size: 14px;
}
.valor {
  font-size: 12px;
  text-align: right;
  background-color: #12a493;
  padding: 6px;
  width: auto;
  border-radius: 5px;
}
.add-cart {
  width: 39%;
  background-color: #455a64;
  /* background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%); */
  height: 100%;
  border-radius: 6px;
  padding: 0px 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wp-icon {
  color: white;
  margin-right: 4px;
  font-size: 18px;
  margin-top: -4px;
}
.cart-icon {
  color: white;
  margin-right: 4px;
  font-size: 18px;
  margin-top: -4px;
}
</style>
