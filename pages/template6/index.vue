<template>
  <div
    :style="[
      {
        '--font-style-1': settingByTemplate6?.settingGeneral?.font ?? 'Poppins',
      },
    ]"
  >
    <K06-banner id="kBannerX" v-bind="componentsProps" />
    <K06-Product-features id="kBannerX" v-bind="componentsProps" />
    <K06-product-overviews id="kBannerX" v-bind="componentsProps" />
    <K06-information id="kBannerX" v-bind="componentsProps" />
    <K06-related-products id="kBannerX" v-bind="componentsProps" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'KoTemplate6',
  components: {
    K06Banner: () => import('@/components/template6/k06-banner.vue'),
    K06Information: () => import('@/components/template6/k06-information.vue'),
    K06ProductFeatures: () =>
      import('@/components/template6/k06-product-features.vue'),
    K06ProductOverviews: () =>
      import('@/components/template6/k06-product-overviews.vue'),
    K06RelatedProducts: () =>
      import('@/components/template6/k06-related-products.vue'),
  },
  layout: 'default',
  computed: {
    ...mapState(['dataStore', 'settingByTemplate6']),
    componentsProps() {
      return {
        dataStore: this.dataStore,
        // settingGeneral: this.settingByTemplate6?.settingGeneral ?? null,
        // settingKCarousel: this.settingByTemplate6?.banner ?? null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate)
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate)
  },
  methods: {
    async addEventListenerTemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data && e.data.component && e.data.template == 6) {
          this.$store.commit('SET_CURRENTSETTING06', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 6
        ) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kBannerX')
              break
            case 'header':
              this.moverseA('kBannerX')
              break
            case 'footer':
              this.moverseA('KWrapperX')
              break
            case 'banner':
              this.moverseA('kBannerX')
              break

            case 'detailsProduct':
              // eslint-disable-next-line no-case-declarations
              const { success, data } = await this.currentChange()
              if ((success, data.length > 0)) {
                this.$router.push({
                  path: '/productos/' + data[0].slug,
                })
              } else {
                this.$router.push({
                  path: '/productos',
                })
              }
              break
            case 'productListFilter':
              this.$router.push({
                path: '/productos',
              })
              break
            case 'contact':
              this.$router.push({
                path: '/contacto',
              })
              break
          }
        } else {
          if (e && e.data && e.data.returnHome) {
            this.$router.push({
              path: '/',
            })
          }
        }
      }
    },
    moverseA(idDelElemento) {
      location.hash = '#' + idDelElemento
    },
    async currentChange() {
      const { success, data } = await this.$store.dispatch(
        'products/GET_ALL_PRODUCTS',
        {
          id_tienda: this.dataStore.id,
          limit: 1,
          page: 1,
        }
      )
      if (success) {
        return { success: true, data: data.publicProductList }
      }
    },
  },
}
</script>

<style scoped>
* {
  font-family: var(--font-style-1) !important;
}
</style>
