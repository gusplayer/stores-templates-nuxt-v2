<template>
  <div
    v-if="settingByTemplate10"
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate10.settingGeneral &&
          this.settingByTemplate10.settingGeneral.fount_1
            ? this.settingByTemplate10.settingGeneral.fount_1
            : 'Roboto',
      },
    ]"
  >
    <KbuttonCar />
    <Kcarousel
      id="kbannerX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="
        settingByTemplate10 &&
        settingByTemplate10.banner &&
        settingByTemplate10.banner.visible
      "
    />
    <Ksection
      id="kSectionX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate10 &&
        settingByTemplate10.section &&
        settingByTemplate10.section.visible
      "
    />
    <Ktrending
      id="kTrendingX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate10 &&
        settingByTemplate10.trending &&
        settingByTemplate10.trending.visible
      "
    />
    <Kdeal
      id="kOffersX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate10 &&
        settingByTemplate10.offers &&
        settingByTemplate10.offers.visible
      "
    />
    <Kfeatured
      id="KproductDestacadosX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate10 &&
        settingByTemplate10.productList &&
        settingByTemplate10.productList.visible
      "
    />
    <Kblog
      id="KblogX"
      v-bind="componentsProps"
      v-show="
        listArticulos.length > 0 &&
        settingByTemplate10 &&
        settingByTemplate10.blog &&
        settingByTemplate10.blog.visible
      "
    />
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'default',
  name: 'Ko-template10',
  components: {
    KbuttonCar: () => import('../../components/template10/buttonCar'),
    Kcarousel: () => import('../../components/template10/ko-carousel'),
    Ksection: () => import('../../components/template10/ko-section'),
    Ktrending: () => import('../../components/template10/ko-trending'),
    Kdeal: () => import('../../components/template10/ko-deals'),
    Kfeatured: () => import('../../components/template10/ko-featuredProducts'),
    Kblog: () => import('../../components/template10/ko-blog'),
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate)
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
      'settingByTemplate10',
      'dataHoko',
    ]),
    fullProducts() {
      return this.$store.getters['products/allProduct']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral: this.settingByTemplate10?.settingGeneral ?? null,
        banner: this.settingByTemplate10?.banner ?? null,
        section: this.settingByTemplate10?.section ?? null,
        trending: this.settingByTemplate10?.trending ?? null,
        offers: this.settingByTemplate10?.offers ?? null,
        productList: this.settingByTemplate10?.productList ?? null,
        cardProduct: this.settingByTemplate10?.cardProduct ?? null,
        blog: this.settingByTemplate10?.blog ?? null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenertemplate)
  },
  methods: {
    addEventListenertemplate(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
      ) {
        if (e && e.data && e.data.component && e.data.template == 10) {
          this.$store.commit('SET_CURRENTSETTING10', e.data)
          if (e.data.component == 'banner') {
            this.bannerRendering += 1
          }
        } else if (
          e &&
          e.data &&
          e.data.componentToEdit &&
          e.data.template == 10
        ) {
          switch (e.data.componentToEdit) {
            case 'settingGeneral':
              this.moverseA('kbannerX')
              break
            case 'header':
              this.moverseA('kbannerX')
              break
            case 'footer':
              this.moverseA('KblogX')
              break
            case 'banner':
              this.moverseA('kbannerX')
              break
            case 'section':
              this.moverseA('kSectionX')
              break
            case 'treding':
              this.moverseA('kTrendingX')
              break
            case 'card':
              this.moverseA('kTrendingX')
              break
            case 'offers':
              this.moverseA('kOffersX')
              break
            case 'productDestacados':
              this.moverseA('KproductDestacadosX')
              break
            case 'blog':
              this.moverseA('KblogX')
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
