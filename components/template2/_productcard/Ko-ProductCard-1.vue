<template>
  <div class="wrapper-card">
    <div class="container">
      <div class="wrapper">
        <div class="wrapper-image">
          <cld-image
            cloudName="komercia-store"
            :publicId="getIdCloudinary(this.product.foto_cloudinary)"
            height="300"
            dpr="auto"
            responsive="width"
            width="auto"
            class="product-image"
          >
            <cld-transformation
              height="300"
              width="300"
              crop="lpad"
              quality="auto"
              background="auto:border"
            />
            <cld-transformation v-if="soldOut" effect="grayscale" />
          </cld-image>
          <p class="card-info-1" v-if="soldOut">
            Agotado !
          </p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            Envío gratis !
          </p>
        </div>
        <div class="wrapper-text">
          <div class="content-name-product">
            <p class="card-text" v-if="this.product.nombre.length >= 25">
              {{ `${this.product.nombre.slice(0, 25)}...` }}
            </p>
            <p class="card-text" v-else>
              {{ `${this.product.nombre.slice(0, 25)}` }}
            </p>
          </div>

          <div class="content-text-price" v-if="this.product.precio">
            <div class="wrapper-price">
              <div>
                <!-- <p class="card-price-1" v-if="this.product.precio > 0">
                $ {{ this.product.precio }}
              </p> -->
                <p
                  class="card-price-2"
                  v-if="this.product.precio > 0 || this.product.precio"
                >
                  {{ currency(this.product.precio) }}
                </p>
              </div>
              <!-- <p class="card-descuento">-50%</p> -->
            </div>
            <router-link
              :to="{
                path: `/template2/productos/${product.slug}`,
                params: { slug: product.slug },
              }"
              class="btn"
              >Comprar</router-link
            >
          </div>
          <div class="content-text-price2" v-else>
            <router-link
              :to="{
                path: `/template2/productos/${product.slug}`,
                params: { slug: product.slug },
              }"
              class="btn"
              >Comprar</router-link
            >
          </div>
        </div>
      </div>

      <router-link
        :to="{
          path: `/template2/productos/${product.slug}`,
          params: { slug: product.slug },
        }"
        class="wrapper-movil"
      >
        <div class="wrapper-image">
          <cld-image
            cloudName="komercia-store"
            :publicId="getIdCloudinary(this.product.foto_cloudinary)"
            height="300"
            dpr="auto"
            responsive="width"
            width="auto"
            class="product-image"
          >
            <cld-transformation
              height="300"
              width="300"
              crop="lpad"
              quality="auto"
              background="auto:border"
            />
            <cld-transformation v-if="soldOut" effect="grayscale" />
          </cld-image>
          <p class="card-info-1" v-if="soldOut">
            Agotado !
          </p>
          <p class="card-info-2" v-if="getFreeShipping == false">
            Envío gratis !
          </p>
        </div>
        <div class="wrapper-text">
          <div class="content-name-product-movil">
            <p class="card-text-movil" v-if="this.product.nombre.length >= 25">
              {{ `${this.product.nombre.slice(0, 25)}...` }}
            </p>
            <p class="card-text-movil" v-else>
              {{ `${this.product.nombre.slice(0, 25)}` }}
            </p>
          </div>
          <div class="content-text-price-movil" v-if="this.product.precio">
            <div class="wrapper-price">
              <div>
                <!-- <p class="card-price-1-movil" v-if="this.product.precio > 0">
                  $ {{ this.product.precio }}
                </p> -->
                <p class="card-price-2" v-if="this.product.precio > 0">
                  {{ currency(this.product.precio) }}
                </p>
              </div>
              <!-- <p class="card-descuento">-50%</p> -->
            </div>
          </div>
          <div class="separator-movil" v-else></div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  // mixins: [getIdCloudinary],
  name: 'Ko-ProductCard-1',
  props: { product: Object },
  data() {
    return {}
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
    soldOut() {
      if (
        this.product.con_variante &&
        this.product.variantes[0].variantes !== '[object Object]'
      ) {
        const arrCombinations = this.product.variantes
        let inventario = 0
        if (
          arrCombinations.length &&
          arrCombinations[0].variantes !== '[object Object]'
        ) {
          if (
            arrCombinations[0].combinaciones.length &&
            arrCombinations[0].combinaciones.length
          ) {
            if (
              JSON.parse(arrCombinations[0].combinaciones[0].combinaciones)
                .length
            ) {
              JSON.parse(
                arrCombinations[0].combinaciones[0].combinaciones
              ).forEach((item) => {
                inventario += parseInt(item.unidades)
              })
            }
          }
        }
        return !inventario
      } else {
        return !this.product.stock
      }
    },
  },
  methods: {},
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
  /* background: var(--background_color_2); */
  background: white;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 1px 7px rgba(0, 0, 0, 0.05) !important;
}
.container {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.card-info-1 {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e71f77;
  padding: 1px 4px;
  border-radius: var(--radius_btn);
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
  border-radius: var(--radius_btn);
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
  height: 300px;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  overflow: hidden;
}
.wrapper-text {
  display: initial;
  margin-top: 5px;
  width: 100%;
}
.content-text-price {
  display: flex;
  width: 100%;
  padding: 0px 20px;
  align-items: center;
  margin-bottom: 15px;
  justify-content: space-between;
}
.content-text-price2 {
  display: flex;
  width: 100%;
  padding: 0px 20px;
  align-items: center;
  margin-bottom: 15px;
  justify-content: center;
}
.card-text {
  font-size: 14px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 1.2px;
  color: var(--color_text);
  font-weight: 400;
}
.content-name-product {
  display: flex;
  width: 100%;
  padding: 0px 20px;
  margin-bottom: 20px;
  margin-top: 10px;
}
.wrapper-price {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 47px;
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
  text-align: left;
}
.card-descuento {
  font-size: 12px;
  color: white;
  background: #fe5858;
  border-radius: 3px;
  padding: 0px 4px;
  display: flex;
  justify-content: center;
  align-self: flex-end;
  position: relative;
  top: -8px;
  margin-left: 5px;
}
.card-price-2 {
  font-size: 22px;
  font-weight: '500';
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  text-align: left;
}
.btn {
  color: var(--color_text_btn);
  border-radius: var(--radius_btn);
  border: solid 1px var(--color_text);
  background-color: var(--color_text);
  color: white;
  padding: 8px 14px;
  font-size: 14px;
  width: 120px;
  height: 40px;
  font-weight: bold;
  cursor: pointer;
  margin-bottom: 0px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  text-align: center;
}
.btn:hover {
  color: white;
  background-color: var(--btnhover);
  border: solid 1px var(--btnhover);
}
.wrapper {
  display: initial;
}
.wrapper-movil {
  display: none;
}
@media (max-width: 768px) {
  .wrapper {
    display: none;
  }
  .wrapper-movil {
    display: initial;
  }
  .content-name-product-movil {
    display: flex;
    width: 100%;
    padding: 0px 20px;
    margin-bottom: 20px;
    margin-top: 10px;
    justify-content: center;
    align-items: center;
  }
  .card-text-movil {
    font-size: 14px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1;
    letter-spacing: 1.2px;
    color: var(--color_text);
    font-weight: 400;
    text-align: center;
  }

  .content-text-price-movil {
    display: flex;
    width: 100%;
    padding: 0px 20px;
    align-items: center;
    margin-bottom: 15px;
    justify-content: center;
  }
  .card-price-1-movil {
    font-size: 12px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: rgba(55, 4, 4, 0.61);
    text-decoration: line-through;
    text-align: center;
  }
  .separator-movil {
    width: 100%;
    margin-bottom: 25px;
  }
}
</style>
