<template lang="html">
  <div :style="this.settingBase ? this.settingBase : null">
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
import KoMicompra from '../../../components/miCompra/Ko-miCompra-1.vue'

export default {
  components: {
    KoMicompra,
  },
  mounted() {
    if (this.$route.query && this.$route.query.orden) {
      this.asyncData()
    }
  },
  data() {
    return {
      orden: {},
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
    asyncData() {
      if (this.$route.query.orden) {
        return axios
          .get(
            `${this.$store.state.urlKomercia}/api/orden/${this.dataStore.tienda.id_tienda}/${this.$route.query.orden}`,
            {
              headers: {
                'content-type': 'application/json',
                'Access-Control-Allow-Origin': '*',
              },
            }
          )
          .then((response) => {
            if (
              this.$route.query.orden == response.data.data.venta.id &&
              this.$route.query.usuario ==
                response.data.data.venta.usuario.identificacion
            ) {
              this.orden = response.data.data
              return this.orden
            } else {
              this.orden.message = 'No exite esta orden'
              return this.orden
            }
          })
          .catch(() => {
            this.orden.message = 'No exite esta orden'
            return this.orden
          })
      } else {
        return this.orden
      }
    },
  },
}
</script>
