<template lang="html">
  <div
    class="home"
    :style="
      this.$store.state.settingByTemplate &&
      this.$store.state.settingByTemplate['--background_color_1']
        ? this.$store.state.settingByTemplate
        : this.settingBase
    "
  >
    <kPrueba
      :dataStore="dataStore"
      :orden="orden"
      v-if="orden"
      @update="setDataOrder"
    />
  </div>
</template>

<script>
import axios from 'axios'
import kPrueba from '../components/miCompra/Ko-miCompra-1'

export default {
  components: {
    kPrueba,
  },
  asyncData({ route, store }) {
    if (route.query.orden) {
      return axios
        .get(
          `https://api2.komercia.co/api/orden/${store.state.tienda.id_tienda}/${route.query.orden}`,
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
  },
  methods: {
    setDataOrder(value) {
      this.orden = value
    },
  },
}
</script>
