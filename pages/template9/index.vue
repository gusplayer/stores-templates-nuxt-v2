<template>
  <div
    v-if="settingByTemplate9"
    :style="[
      {
        '--font-style-1':
          this.settingByTemplate9.settingGeneral &&
          this.settingByTemplate9.settingGeneral.fount_1
            ? this.settingByTemplate9.settingGeneral.fount_1
            : 'David Libre',
      },
      {
        '--font-style-2':
          this.settingByTemplate9.settingGeneral &&
          this.settingByTemplate9.settingGeneral.fount_2
            ? this.settingByTemplate9.settingGeneral.fount_2
            : 'Great Vibes',
      },
      {
        '--font-style-3':
          this.settingByTemplate9.settingGeneral &&
          this.settingByTemplate9.settingGeneral.fount_3
            ? this.settingByTemplate9.settingGeneral.fount_3
            : 'Lora',
      },
    ]"
  >
    <Kbanner
      id="kbannerX"
      v-bind="componentsProps"
      :key="bannerRendering"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.banner &&
        settingByTemplate9.banner.visible
      "
    />
    <Koffers
      id="KoffersX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.koffers &&
        settingByTemplate9.koffers.visible
      "
    />
    <KproductlistHoko
      id="KproductlistHokoX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.productList &&
        settingByTemplate9.productList.visible == true &&
        dataHoko &&
        dataHoko.statehoko == 1
      "
    />
    <Kproductlist
      id="KproductlistX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.productList &&
        settingByTemplate9.productList.visible == true &&
        this.fullProducts.length > 0
      "
    />
    <Kblog
      id="KblogX"
      v-bind="componentsProps"
      v-show="
        listArticulos.length > 0 &&
        settingByTemplate9 &&
        settingByTemplate9.blog &&
        settingByTemplate9.blog.visible
      "
    />
    <KWrapper
      id="KWrapperX"
      v-bind="componentsProps"
      v-if="
        settingByTemplate9 &&
        settingByTemplate9.wrapper &&
        settingByTemplate9.wrapper.visible
      "
    />
    <KNews
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
import Kbanner from '../../components/template9/ko-carousel'
import Koffers from '../../components/template9/ko-offers'
import Kproductlist from '../../components/template9/Ko-ProductList'
import KproductlistHoko from '../../components/template9/Ko-slider-hoko.vue'
import Kblog from '../../components/template9/ko-blog'
import KWrapper from '../../components/template9/Ko-wrapper'
import KNews from '../../components/template9/Ko-Newsletter'
import { mapState } from 'vuex'

export default {
  layout: 'default',
  components: {
    Kbanner,
    Koffers,
    Kproductlist,
    KproductlistHoko,
    Kblog,
    KWrapper,
    KNews,
  },
  mounted() {
    window.parent.postMessage('message', '*')
    window.addEventListener('message', this.addEventListenertemplate09)
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
      return this.$store.getters['products/filterProducts']
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate9 && this.settingByTemplate9.settingGeneral
            ? this.settingByTemplate9.settingGeneral
            : null,
        banner:
          this.settingByTemplate9 && this.settingByTemplate9.banner
            ? this.settingByTemplate9.banner
            : null,
        koffers:
          this.settingByTemplate9 && this.settingByTemplate9.koffers
            ? this.settingByTemplate9.koffers
            : null,
        productList:
          this.settingByTemplate9 && this.settingByTemplate9.productList
            ? this.settingByTemplate9.productList
            : null,
        productListCard:
          this.settingByTemplate9 && this.settingByTemplate9.cardProduct
            ? this.settingByTemplate9.cardProduct
            : null,
        blog:
          this.settingByTemplate9 && this.settingByTemplate9.blog
            ? this.settingByTemplate9.blog
            : null,
        newsletter:
          this.settingByTemplate9 && this.settingByTemplate9.newsletter
            ? this.settingByTemplate9.newsletter
            : null,
        wrapper:
          this.settingByTemplate9 && this.settingByTemplate9.wrapper
            ? this.settingByTemplate9.wrapper
            : null,
      }
    },
  },
  beforeDestroy() {
    window.removeEventListener('message', this.addEventListenertemplate09)
  },
  methods: {
    addEventListenertemplate09(e) {
      if (
        e.origin.includes('https://panel.komercia.co') ||
        e.origin.includes('http://localhost:8080') ||
        e.origin.includes('https://panel.komercia.xyz')
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
              this.moverseA('kbannerX')
              break
            case 'footer':
              this.moverseA('KNewsX')
              break
            case 'banner':
              this.moverseA('kbannerX')
              break
            case 'koffers':
              this.moverseA('KoffersX')
              break
            case 'productList':
              this.moverseA('KproductlistX')
              break
            case 'blog':
              this.moverseA('KblogX')
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
