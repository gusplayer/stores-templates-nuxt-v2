<template>
  <div v-if="status == 1 && price?.precio">
    <h4 v-if="moreDetails">Addi</h4>
    <div v-if="stateWidgetAddi" class="mt-20">
      <addi-widget
        :price="price.precio"
        :ally-slug="analytics_tagmanager?.addiAllySlug"
      />
    </div>
    <p v-else>
      <span v-if="moreDetails">
        El precio del producto está fuera del rango permitido por ADDI.
      </span>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'PluginAddi',
  props: {
    price: {
      type: Object,
      required: true,
    },
    status: {
      type: Number,
      required: true,
    },
    moreDetails: {
      type: Boolean,
      required: true,
    },
    dataStore: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      stateWidgetAddi: false,
    }
  },
  computed: {
    ...mapState(['analytics_tagmanager']),
  },
  watch: {
    'price.precio'() {
      this.getAmountAddi()
    },
  },
  mounted() {
    this.getAmountAddi()
  },
  methods: {
    async getAmountAddi() {
      if (
        this.analytics_tagmanager?.addiAllySlug != null &&
        this.dataStore?.medioPagos?.addi === 1
      ) {
        this.stateWidgetAddi = false
        const { success, data } = await this.$store.dispatch(
          'VERIFY_AMOUNTS_ADDI',
          {
            // slug: 'splashjugueteriaypiscinas-ecommerce',
            slug: this.analytics_tagmanager.addiAllySlug,
            amount: this.price.precio,
          }
        )
        if (success) {
          if (
            this.price.precio >= data.minAmount &&
            this.price.precio <= data.maxAmount
          ) {
            this.stateWidgetAddi = true
          } else {
            this.stateWidgetAddi = false
          }
        } else {
          this.stateWidgetAddi = false
        }
      }
    },
  },
}
</script>
