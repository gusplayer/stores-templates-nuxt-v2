<template>
  <div class="footer-container">
    <div class="wrapper-footer" @click="openOrder">
      <p class="text-footer unidades" v-if="productsCart.length > 0">
        <span>{{ productsCart.length }}</span>
        item
      </p>
      <p class="text-footer carrito">
        <whatsapp-icon class="wp-icon" /> {{ $t('productdetail_btnComprar') }}
      </p>
      <p class="text-footer valor" v-if="productsCart.length > 0">
        <span>{{
          this.totalCart
            | currency(dataStore.tienda.codigo_pais, dataStore.tienda.moneda)
        }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import currency from '../../../mixins/formatCurrent'
export default {
  mixins: [currency],
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
      this.$store.commit('SET_OPENORDER_VALIENTA', true)
    },
  },
}
</script>

<style scoped>
.footer-container {
  width: 100%;
  display: flex;
  justify-content: center;
  height: 50px;
  position: fixed;
  bottom: 0;
  padding: 0px 8px 10px;
  z-index: 999;
  max-width: 900px;
  background: white;
}
.wrapper-footer {
  background: #2c3657;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  padding: 0px 9px;
  cursor: pointer;
}
.wrapper-footer:hover {
  background-image: linear-gradient(130deg, #36467a 0, rgb(47, 63, 112) 80%);
}
.wrapper-footer p {
  flex: 1;
}
.text-footer {
  color: white;
  font-size: 16px;
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
.valor span {
  font-size: 13px;
  text-align: right;
  background-color: #a9206b;
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
