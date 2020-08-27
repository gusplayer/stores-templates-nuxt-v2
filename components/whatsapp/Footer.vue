<template>
  <div class="main-container">
    <KoOrder />
    <div class="product-link" @click="openOrder">
      <p class="unidades">{{productsCart.length }} producto</p>
      <p class="carrito">Ver carrito</p>
      <p class="valor">
        <span>{{saleAmount}}</span>
      </p>
    </div>
  </div>
</template>

<script>
import KoOrder from './_order1/order1'
export default {
  components: {
    KoOrder,
  },
  data() {
    return {
      saleAmount: 0,
    }
  },
  methods: {
    openOrder() {
      console.log('open cart')
      this.$store.state.openOrder = true
    },
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart
    },
    sumValueSale() {
      this.saleAmount = (obj) =>
        this.productsCart.values(obj).reduce((a, b) => a.precio + b.precio)
    },
  },
}
</script>

<style scoped>
.main-container {
  height: 60px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 9999;
}
.product-link {
  background-color: #2cd1ab;
  /* background-color: #128c7e;
  background-color: #25d366; */
  background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%);
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 0px 9px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.product-link p {
  color: #fff;
  font-size: 14px;
}
.unidades {
  width: 30%;
}
.carrito {
  width: 30%;
  align-items: center;
  text-align: center;
  font-size: 18px;
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
</style>