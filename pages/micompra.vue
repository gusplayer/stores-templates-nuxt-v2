<template lang="html">
  <div>
    <KoMicompra
      :dataStore="dataStore"
      :orden="orden"
      v-if="orden"
      @update="setDataOrder"
    />
  </div>
</template>

<script>
import axios from 'axios'
import KoMicompra from '../components/miCompra/Ko-miCompra-1'

export default {
  components: {
    KoMicompra,
  },
  asyncData({ route, store }) {
    if (route.query.orden) {
      return axios
        .get(
          `${store.state.urlKomercia}/api/orden/${store.state.tienda.id_tienda}/${route.query.orden}`,
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
            orden.message = 'No existe esta orden'
            return { orden }
          }
        })
        .catch(() => {
          const orden = {}
          orden.message = 'No existe esta orden'
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
  },
  methods: {
    setDataOrder(value) {
      this.orden = value
    },
  },
}
</script>
