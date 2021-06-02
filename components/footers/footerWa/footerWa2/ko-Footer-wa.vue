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
export default {
  name: 'FooterWa2',
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
.content-footer {
  background-color: #3d3d3d;
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
    /* flex: 2; */
    width: 130px;
    background: #56d162;
    background: -moz-linear-gradient(left, #56d162 0%, #27b43d 100%);
    background: -webkit-linear-gradient(left, #56d162 0%, #27b43d 100%);
    background: linear-gradient(to right, #56d162 0%, #27b43d 100%);
    @apply flex flex-col justify-center items-center py-7 rounded-md cursor-pointer;
  }
  .button-footer-out {
    width: 161px;
    background: #56d162;
    background: -moz-linear-gradient(left, #56d162 0%, #27b43d 100%);
    background: -webkit-linear-gradient(left, #56d162 0%, #27b43d 100%);
    background: linear-gradient(to right, #56d162 0%, #27b43d 100%);
    @apply flex flex-col justify-center items-center py-7 rounded-md;
  }
  .text-items-button {
    font-size: 12px;
    color: #fff;
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
    @apply w-auto py-8 px-30;
  }
  .button-footer-out {
    width: 280px;
    @apply py-10;
  }
  .text-items-button {
    font-size: 18px;
  }
}
</style>
