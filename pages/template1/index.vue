<template lang="html">
  <div class="home">
    <div class="space-search"></div>
    <div class="search-movil" id="navbar">
      <form id="demo-1" style="width: 100%;">
        <input v-model="search" type="search" placeholder="¿Qué buscas?" />
      </form>
    </div>
    <kBanner :dataStore="dataStore" />
    <!-- <KProductFavoritos /> -->
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KProductList>
    <KNewsletter :dataStore="dataStore" />
  </div>
</template>

<script>
import kBanner from '../../components/template1/ko-Banner-1'
import KProductFavoritos from '../../components/template1/Ko-ProductFavoritos-1'
import KProductList from '../../components/template1/Ko-ProductList-1'
import KNewsletter from '../../components/template1/Ko-Newsletter-1'

export default {
  components: {
    kBanner,
    KProductList,
    KNewsletter,
    KProductFavoritos,
  },
  mounted() {
    var prevScrollpos = window.pageYOffset
    window.onscroll = function () {
      var currentScrollPos = window.pageYOffset
      if (prevScrollpos > currentScrollPos) {
        // document.getElementById('navbar').style.left = '0px'
        document.getElementById('navbar').style.zIndex = '3'
        document.getElementById('navbar').style.top = '91px'
        // document.getElementById('navbar').style.opacity = '1'
      } else {
        // document.getElementById('navbar').style.left = '-400px'
        document.getElementById('navbar').style.zIndex = '0'
        document.getElementById('navbar').style.top = '55px'
        // document.getElementById('navbar').style.opacity = '0'
      }
      prevScrollpos = currentScrollPos
    }
  },
  data() {
    return {
      search: '',
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
  },
  methods: {
    Searchproduct(search) {
      if (search.length) {
        this.$store.commit('products/FILTER_BY', {
          type: 'search',
          data: search,
        })
      } else {
        this.$store.commit('products/FILTER_BY', {
          type: 'all',
          data: '',
        })
      }
      this.currentPage = 1
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
  overflow: hidden;
}
.search-movil {
  display: none;
}
/* search */
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
  border: solid 2px var(--color_shopping_cart);
  padding: 4px 7px;
  width: 35px;
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
  border: solid 2px var(--color_shopping_cart);
  padding: 2px 4px 4px 38px;
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
    height: 37px;
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
