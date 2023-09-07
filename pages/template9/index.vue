<template>
  <div
    v-if="settingByTemplate9"
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate9?.settingGeneral?.fount_1 ?? 'David Libre',
      },
      {
        '--font-style-2':
          this.settingByTemplate9?.settingGeneral?.fount_2 ?? 'Great Vibes',
      },
    ]"
  >
    <Ko9-Banner
      id="kBannerX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.banner &&
        settingByTemplate9.banner.visible
      "
    />
    <Ko9-offers
      id="KOffersX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.koffers &&
        settingByTemplate9.koffers.visible
      "
    />
    <Ko9-sliderHoko
      id="KProductListHokoX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.productList &&
        settingByTemplate9.productList.visible == true &&
        dataHoko &&
        dataHoko.statehoko == 1
      "
    />
    <Ko9-ProductList
      id="KProductListX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.productList &&
        settingByTemplate9.productList.visible == true &&
        this.fullProducts.length > 0
      "
    />
    <Ko9-blog
      id="KBlogX"
      v-bind="componentsProps"
      v-show="
        listArticulos.length > 0 &&
        settingByTemplate9 &&
        settingByTemplate9.blog &&
        settingByTemplate9.blog.visible
      "
    />
    <Ko9-wrapper
      id="KWrapperX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.wrapper &&
        settingByTemplate9.wrapper.visible
      "
    />
    <Ko9-Newsletter
      id="KNewsX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.newsletter &&
        settingByTemplate9.newsletter.visible
      "
    />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template9',
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenerTemplate09)
  },
  data() {
    return {
      bannerRendering: 0,
    }
  },
  computed: {
    ...mapState([
      'dataStore',
      'listArticulos',
      'settingByTemplate9',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: this.settingByTemplate9?.settingGeneral ?? null,
        banner: this.settingByTemplate9?.banner ?? null,
        koffers: this.settingByTemplate9?.koffers ?? null,
        productList: this.settingByTemplate9?.productList ?? null,
        productListCard: this.settingByTemplate9?.cardProduct ?? null,
        blog: this.settingByTemplate9?.blog ?? null,
        newsletter: this.settingByTemplate9?.newsletter ?? null,
        wrapper: this.settingByTemplate9?.wrapper ?? null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenerTemplate09)
  },
  methods: {
    addEventListenerTemplate09(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080')
      ) {
        if (e && e.data && e.data.component && e.data.template == 9) {
          this.$store.commit('SET_CURRENTSETTING09', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 9
        ) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kBannerX')
              break
            case 'footer':
              this.moverseA('KNewsX')
              break
            case 'banner':
              this.moverseA('kBannerX')
              break
            case 'koffers':
              this.moverseA('KOffersX')
              break
            case 'productList':
              this.moverseA('KProductListX')
              break
            case 'blog':
              this.moverseA('KBlogX')
              break
            case 'wrapper':
              this.moverseA('KWrapperX')
              break
            case 'newsletter':
              this.moverseA('KNewsX')
              break
            case 'detailsProduct':
              if (this.fullProducts) {
                this.$router.push({
                  path: '/productos/' + this.fullProducts[0].slug,
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
          if (e && e.data && e.data.returnHome == true) {
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
  },
}
</script>
