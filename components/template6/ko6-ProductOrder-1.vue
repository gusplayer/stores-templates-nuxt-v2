<template>
  <div class="wrapper-ProductOrder" v-if="fullProducts.length">
    <div class="container-ProductOrder">
      <div class="content-title-ProductOrder">
        <p class="title-ProductOrder">Favorito</p>
      </div>
      <div class="content-item-productos">
        <div class="grid-products">
          <div
            v-for="product in fullProducts"
            :key="product.id"
            class="content-products"
          >
            <Ko6ProductCard1 :product="product"></Ko6ProductCard1>
          </div>
        </div>
        <div
          v-if="(this.fullProducts.length == 0)"
          class="content-products-empty"
        >
          <p>{{ $t('home_msgCatalogo') }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Ko6ProductCard1 from './_productcard/Ko6-ProductCard-1'
export default {
  name: 'ko6-ProductOrder-1',
  components: {
    Ko6ProductCard1,
  },
  computed: {
    fullProducts() {
      return this.$store.state.products.fullProducts.slice(0, 8)
    },
  },
}
</script>

<style scoped>
.wrapper-ProductOrder {
  display: flex;
  width: 100%;
  background-color: var(--background_color_2);
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px 0 30px;
}
.container-ProductOrder {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  max-width: 1300px;
  padding: 10px 20px;
  z-index: 1;
}
.content-title-ProductOrder {
  width: 100%;
  max-width: 1300px;
  padding: 10px 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.title-ProductOrder {
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  line-height: 1.4;
  color: var(--color_subtext);
  cursor: pointer;
}
.content-item-productos {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.grid-products {
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 2fr));
  grid-column-gap: 25px;
  grid-row-gap: 30px;
  box-sizing: border-box;
}
.content-products-empty {
  width: 100%;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.content-products-empty p {
  font-size: 18px;
  opacity: 0.6;
  font-weight: bold;
  color: var(--color_subtext);
}
@media (max-width: 1290px) {
  .grid-products {
    grid-template-columns: repeat(4, minmax(240px, 2fr));
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1265px) {
  .grid-products {
    grid-template-columns: repeat(4, minmax(240px, 2fr));
    grid-column-gap: 10px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1250px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(250px, 2fr));
    grid-column-gap: 25px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1060px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(250px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1050px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1020px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 15px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 1010px) {
  .grid-products {
    grid-template-columns: repeat(3, minmax(240px, 2fr));
    grid-column-gap: 10px;
  }
}
@media (max-width: 1000px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 25px;
    grid-row-gap: 30px;
  }
}

@media (max-width: 790px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 780px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 16px;
    grid-row-gap: 30px;
  }
}
@media (max-width: 775px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(250px, 2fr));
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  }
}
@media (max-width: 770px) {
  .container-ProductOrder {
    padding: 20px 8px;
  }
  .content-item-productos {
    padding: 15px;
  }
  .grid-products {
    grid-template-columns: repeat(2, minmax(10px, 2fr));
  }
}
@media (max-width: 700px) {
  .content-items-categorias {
    margin-left: 5px;
    margin-bottom: 0px;
  }
}
@media (max-width: 450px) {
  .grid-products {
    grid-template-columns: repeat(2, minmax(160px, 1fr));
  }
  .content-item-productos {
    padding: 5px;
  }
}
@media (max-width: 380px) {
  .container-ProductOrder {
    padding: 20px 5px;
  }
}
</style>
