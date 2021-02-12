<template lang="html">
  <div>
    <KCarousel v-bind="componentsProps" />
    <KPromo v-bind="componentsProps" />
    <KProductList v-bind="componentsProps" />
    <KAdvertising v-bind="componentsProps" />
    <KGify v-bind="componentsProps" />
    <KHowwork v-bind="componentsProps" />
    <KBlog v-bind="componentsProps" v-show="listArticulos.length > 0" />
    <KNews v-bind="componentsProps" />
    <KWrapper v-bind="componentsProps" />
  </div>
</template>

<script>
import KCarousel from '../../components/template7/_carouselBanner/ko-carousel'
import KPromo from '../../components/template7/ko-Banner-Promo'
import KProductList from '../../components/template7/Ko-ProductList'
import KAdvertising from '../../components/template7/Ko-advertising'
import KGify from '../../components/template7/Ko-gify'
import KHowwork from '../../components/template7/Ko-how-we-work'
import KWrapper from '../../components/template7/Ko-wrapper'
import KNews from '../../components/template7/Ko-Newsletter'
import KBlog from '../../components/template7/Ko-blog'

export default {
  layout: 'default',
  components: {
    KCarousel,
    KPromo,
    KProductList,
    KAdvertising,
    KGify,
    KHowwork,
    KWrapper,
    KNews,
    KBlog,
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    template() {
      return this.$store.state.template
    },
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
    settingBase() {
      return this.$store.state.settingBase
    },
    facebooPixel() {
      return this.$store.state.analytics_tagmanager.pixel_facebook
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12
      const final = initial + 12
      return this.filteredList.slice(initial, final)
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter((element) => {
          return element.titulo
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      } else {
        return this.listArticulos
      }
    },
    settingByTemplate7() {
      return this.$store.state.settingByTemplate7
    },
    componentsProps() {
      return {
        dataStore: this.dataStore,
        fullProducts: this.fullProducts,
        settingGeneral:
          this.settingByTemplate7 && this.settingByTemplate7.settingGeneral
            ? this.settingByTemplate7.settingGeneral
            : null,
        settingKCarousel:
          this.settingByTemplate7 && this.settingByTemplate7.banner
            ? this.settingByTemplate7.banner
            : null,
        settingKPromo:
          this.settingByTemplate7 && this.settingByTemplate7.content
            ? this.settingByTemplate7.content
            : null,
        settingKProductList:
          this.settingByTemplate7 && this.settingByTemplate7.productList
            ? this.settingByTemplate7.productList
            : null,
        settingKProdutCard:
          this.settingByTemplate7 && this.settingByTemplate7.card
            ? this.settingByTemplate7.card
            : null,
        settingKGify:
          this.settingByTemplate7 && this.settingByTemplate7.ProductFavorite
            ? this.settingByTemplate7.ProductFavorite
            : null,
        settingKHowwork:
          this.settingByTemplate7 && this.settingByTemplate7.howWork
            ? this.settingByTemplate7.howWork
            : null,
        settingKNews:
          this.settingByTemplate7 && this.settingByTemplate7.newsletter
            ? this.settingByTemplate7.newsletter
            : null,
        settingKWrapper:
          this.settingByTemplate7 && this.settingByTemplate7.contentImg
            ? this.settingByTemplate7.contentImg
            : null,
        settingKAdvertising:
          this.settingByTemplate7 && this.settingByTemplate7.advertising
            ? this.settingByTemplate7.advertising
            : null,
        settingKBlog:
          this.settingByTemplate7 && this.settingByTemplate7.blog
            ? this.settingByTemplate7.blog
            : null,
      }
    },
  },
  methods: {
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.facebooPixel != null) {
          window.fbq('track', 'Search', { ValorBuscado: value })
        }
      } else {
        location.href = '?search=' + ''
      }
    },
  },
  watch: {
    search(value) {
      this.Searchproduct(value)
    },
  },
}
</script>

<style>
.search-movil {
  display: none;
}
input {
  outline: none;
}
input[type='search'] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}
input[type='search'] {
  background: transparent;
  border: solid 2px var(--color_icon);
  padding: 4px 7px;
  width: 35px;
  max-height: 36px;
  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
}
#demo-1 input[type='search'] {
  background: #fff;
  border: solid 2px grey;
  padding: 6px 4px 7px 38px;
  width: 100%;
  -webkit-border-radius: var(--radius_btn);
  -moz-border-radius: var(--radius_btn);
  border-radius: var(--radius_btn);
  -webkit-transition: all 0.5s;
  -moz-transition: all 0.5s;
  transition: all 0.5s;
  box-sizing: border-box;
}
#demo-1 input[type='search']:focus {
  width: 100%;
  background-color: #fff;
  border-color: var(--btnhover);
  box-sizing: border-box;
}
input[type='search']:focus {
  background-color: #fff;
  border-color: var(--color_hover_text);
}
input:-moz-placeholder {
  color: var(--color_text);
}
input::-webkit-input-placeholder {
  color: var(--color_text);
}
.space-search {
  display: none;
}
.icon-s {
  font-size: 25px;
  color: grey;
  position: absolute;
  top: 3px;
  left: 8px;
  cursor: pointer;
}
@media (max-width: 500px) {
  .space-search {
    display: flex;
    width: 100%;
    height: 40px;
  }
  .search-movil {
    width: 100%;
    display: flex;
    position: fixed;
    padding: 2px 5px 0px;
    background: var(--background_color_1);
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    transition: all 0.8s;
    top: 88px;
    z-index: 3;
  }
}
</style>
