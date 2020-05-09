<template>
  <div class="wrapper-card">
    <div class="container">
      <div class="wrapper-image">
        <Image-cloudinary
          :src="`${this.product.foto_cloudinary}`"
          :width="300"
          class="image-producto"
          alt="product image"
        />
        <!-- <img :src="`${this.product.foto_cloudinary}`" class="image-producto" /> -->
        <p class="card-info-1" v-if="spent == true && spent2 == true">
          Agotado !
        </p>
        <p class="card-info-2" v-if="getFreeShipping == false">
          Envío gratis !
        </p>
      </div>
      <div class="wrapper-text">
        <p class="card-text" v-if="this.product.nombre.length >= 20">
          {{ `${this.product.nombre.slice(0, 20)}...` }}
        </p>
        <p class="card-text" v-else>
          {{ `${this.product.nombre.slice(0, 20)}` }}
        </p>
        <!-- <div class="wrapper-price">
          <p class="card-price-1" v-if="this.product.precio>0">$ {{ this.product.precio }}</p>
          <p class="card-descuento">-50%</p>
        </div>-->
        <div class="separador-descuento"></div>
        <p class="card-price-2" v-if="this.product.precio > 0">
          $ {{ this.product.precio }}
        </p>
        <div v-else class="separador"></div>
      </div>
      <div class="wrapper-text-mobil">
        <p class="card-text">{{ `${this.product.nombre.slice(0, 20)}...` }}</p>
        <div class="content-price">
          <div class="wrapper-price">
            <!-- <p class="card-price-1" v-if="this.product.precio>0">$ {{ this.product.precio }}</p>
            <p class="card-descuento">-50%</p>-->
          </div>
          <p class="card-price-2" v-if="this.product.precio > 0">
            $ {{ this.product.precio }}
          </p>
          <div v-else class="separador"></div>
        </div>
      </div>
      <div class="content-button">
        <!-- <button ref="colorBtn" class="btn">Comprar</button> -->

        <router-link
          :to="{
            path: `/template2/productos/${product.slug}`,
            params: { slug: product.slug },
          }"
          ref="colorBtn"
          class="btn"
          >Comprar</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-ProductCard-1',
  props: { product: Object },
  data() {
    return {
      spent: false,
      spent2: false,
    }
  },
  mounted() {
    this.getStockProduct()
  },
  computed: {
    getFreeShipping() {
      let free = true
      if (this.rangosByCiudad.envio_metodo === 'gratis') {
        free = false
      }
      return free
    },
    rangosByCiudad() {
      this.rangosByCiudades = JSON.parse(this.$store.state.envios.valores)
      return this.rangosByCiudades
    },
  },
  methods: {
    getStockProduct() {
      if (this.product.stock == 0) {
        this.spent = true
      }
      if (this.product.combinaciones.length) {
        let pp = this.product.combinaciones.map((item, index) => {
          if (item.unidades == 0) {
            this.spent2 = true
          }
        })
      } else {
        this.spent2 = true
      }
    },
  },
}
</script>

<style scoped>
.separador {
  margin: 30px;
}
.separador-descuento {
  margin: 20px;
}
.wrapper-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--background_color_2);
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05) !important;
  padding-bottom: 10px;
}
.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  /* height: 360px; */
  border-radius: 10px;
  position: relative;
}

.card-info-1 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 4px;
  border-radius: 8px;
  color: white;
  font-size: 12px;
  top: 228px;
  right: 0px;
  z-index: 999;
}
.card-info-2 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #35dd8d;
  padding: 1px 4px;
  border-radius: 5px;
  color: black;
  font-size: 12px;
  font-weight: bold;
  top: 250px;
  right: 0px;
  z-index: 999;
}
.wrapper-image {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 265px;
  top: 0px;
  /* margin-top: 0px;
  padding-top: 0px; */
}
.image-producto {
  width: 100%;
  height: 100%;
  object-fit: contain;
  /* object-position: center; */
  /* align-self: center; */
  /* border-radius: 10px 10px 0px 0px; */
  overflow: hidden;
  /* box-shadow: 0 0 10px 0.2px var(--color_icon); */
}
.wrapper-text {
  display: initial;
  margin-top: 10px;
  text-align: center;
  width: 100%;
}
.wrapper-text-mobil {
  display: none;
}
.card-text {
  font-size: 14px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: 2px;
  color: var(--color_text);

  /* font-family: rocketfont, sans-serif; */
  font-weight: 300;
  /* font-size: 1rem; */
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.wrapper-price > p:nth-child(2) {
  margin-left: 5px;
}
.card-price-1 {
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: rgba(55, 4, 4, 0.61);
  text-decoration: line-through;
}
.card-descuento {
  font-size: 12px;
  color: white;
  background: #fe5858;
  border-radius: 3px;
  padding: 0px 5px;
}
.card-price-2 {
  font-size: 18px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  margin-top: 5px;
}
.content-button {
  display: flex;
  margin-top: 5px;
  width: 100%;
  justify-content: center;
  align-self: center;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 2px var(--color_border_btn);
  background-color: var(--color_background_btn);
  padding: 8px 14px;
  font-size: 14px;
  width: 120px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 20px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  text-align: center;
}
.btn:hover {
  color: white;
  background-color: var(--btnhover);
  border: solid 2px var(--btnhover);
}
@media (max-width: 750px) {
  .content-button {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .btn {
    width: 95%;
    margin-left: 0px;
    margin-bottom: 10px;
  }
  .wrapper-text {
    display: none;
  }
  .wrapper-text-mobil {
    display: initial;
    margin-top: 10px;
    margin-left: 10px;
    justify-content: space-between;
    width: 100%;
  }
  .wrapper-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .card-descuento {
    font-size: 12px;
    color: white;
    background: #fe5858;
    border-radius: 3px;
    padding: 0px 5px;
    width: 45px;
  }
  .content-price {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }
}
</style>
