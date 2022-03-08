<template lang="html">
  <div
    class="home"
    :style="
      this.settingByTemplate &&
      this.settingByTemplate.settings &&
      this.settingByTemplate.settings['--background_color_1']
        ? this.settingByTemplate.settings
        : this.settingBase
    "
  >
    <component
      :is="indexTemplate"
      :dataStore="dataStore"
      :orden="orden"
      v-if="orden"
      @update="setDataOrder"
    />
  </div>
</template>

<script>
import axios from 'axios'
import KoMicompra05 from '../components/miCompra/Ko-miCompra-1'
import KoMicompra07 from '../components/template7/Ko-miCompra'
import KoMicompra09 from '../components/template9/Ko-miCompra'
import KoMicompra10 from '../components/template10/Ko-miCompra'
import KoMicompra11 from '../components/template11/ko-miCompra'

export default {
  components: {
    KoMicompra05,
    KoMicompra07,
    KoMicompra09,
    KoMicompra10,
    KoMicompra11,
  },
  asyncData({ route, store }) {
    if (route.query.orden) {
      return axios
        .get(
          `${this.$store.state.urlKomercia}/api/orden/${store.state.tienda.id_tienda}/${route.query.orden}`,
          {
            headers: {
              'content-type': 'application/json',
              'Access-Control-Allow-Origin': '*',
            },
          }
        )
        .then((response) => {
          if (
            route.query.orden == response.data.data.venta.id &&
            route.query.usuario ==
              response.data.data.venta.usuario.identificacion
          ) {
            const orden = response.data.data
            return { orden }
          } else {
            const orden = {}
            orden.message = 'No exite esta orden'
            return { orden }
          }
        })
        .catch(() => {
          const orden = {}
          orden.message = 'No exite esta orden'
          return { orden }
        })
    } else {
      const orden = {}
      return { orden }
    }
  },
  computed: {
    template() {
      return this.$store.state.template
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    settingBase() {
      return this.$store.state.settingBase
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
    indexTemplate() {
      let productListComponent = ''
      switch (this.template) {
        case 3:
          productListComponent = 'KoMicompra05'
          break
        case 5:
          productListComponent = 'KoMicompra05'
          break
        case 6:
          productListComponent = 'KoMicompra05'
          break
        case 7:
          productListComponent = 'KoMicompra07'
          break
        case 9:
          productListComponent = 'KoMicompra09'
          break
        case 10:
          productListComponent = 'KoMicompra10'
          break
        case 11:
          productListComponent = 'KoMicompra11'
          break
      }
      return productListComponent
    },
  },
  methods: {
    setDataOrder(value) {
      this.orden = value
    },
  },
}
</script>
