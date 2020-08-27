<template lang="html">
  <div class="home">
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KProductList>
  </div>
</template>

<script>
import KProductList from '../../components/instagram/Ko-ProductList-1'

export default {
  layout: 'ig',
  components: {
    KProductList,
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
  },
  methods: {
    Searchproduct(search) {
      this.$store.commit('SET_SEARCHVALUE', search)
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
  border: solid 2px var(--color_shopping_cart);
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
    /* height: 2px; */
  }
  .search-movil {
    width: 100%;
    display: flex;
    position: fixed;
    padding: 0px 5px;
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    transition: all 0.8s;
    top: 53px;
    z-index: 3;
  }
}
</style>
