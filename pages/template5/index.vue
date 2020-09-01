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
    <div class="space-search"></div>
    <div class="search-movil" id="navbar">
      <form id="demo-1" style="width: 100%;">
        <input
          v-model="search"
          type="search"
          placeholder="¿Qué buscas?"
          @keyup.enter="getSearch(search)"
          id="SearchIndex5"
        />
      </form>
    </div>
    <kBanner v-if="this.stateBanner"></kBanner>
    <KComponent360 />
    <KProductFavoritos />
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KProductList>
    <kBannerFooter />
    <KNewsletter :dataStore="dataStore" />
  </div>
</template>

<script>
import kBanner from '../../components/template5/ko-Banner-1'
import kBannerFooter from '../../components/template5/ko-BannerFooter-1'
import KProductFavoritos from '../../components/template5/Ko-ProductFavoritos-1'
import KProductList from '../../components/template5/Ko-ProductList-1'
import KNewsletter from '../../components/template5/Ko-Newsletter-1'
import KComponent360 from '../../components/template5/Ko-Content360-1'
export default {
  layout: 'default',
  components: {
    kBanner,
    KProductList,
    KNewsletter,
    KProductFavoritos,
    KComponent360,
    kBannerFooter,
  },
  mounted() {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      var navbar = document.getElementById('navbar')
      if (prevScrollpos > currentScrollPos && navbar) {
        navbar.style.zIndex = '3'
        navbar.style.top = '91px'
      } else {
        navbar.style.zIndex = '0'
        navbar.style.top = '52px'
      }
      prevScrollpos = currentScrollPos
    }

    let domain = this.$route.fullPath
    let search = domain.slice(0, [9])
    if (search === '/?search=') {
      this.$store.commit('SET_STATEBANNER', false)
      this.setSearch(domain)
    }
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
    stateBanner() {
      return this.$store.state.stateBanner
    },
  },
  methods: {
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
      } else {
        location.href = '?search=' + ''
      }
    },
    setSearch(value) {
      let category = value.replace('/?search=', '')
      let UrlCategory = category.replace(/-/g, ' ')
      let urlFiltrada = decodeURIComponent(UrlCategory)
      this.search = urlFiltrada
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
.home {
  /* overflow: hidden; */
}
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
  background: #fff
    url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
    7px center;
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
  background: #fff
    url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat
    7px center;
  border: solid 2px var(--color_icon);
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
  border-color: var(--color_hover_text);
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
    padding: 0px 5px;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    transition: all 0.8s;
    top: 91px;
    z-index: 3;
  }
}
</style>
