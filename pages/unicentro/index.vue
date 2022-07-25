<template lang="html">
  <div
    class="home"
    :style="
      this.settingByTemplate &&
      this.settingByTemplate.settings &&
      this.settingByTemplate.settings.tipo_letra
        ? this.settingByTemplate.settings
        : this.settingBase
    "
  >
    <div class="space-search"></div>
    <div class="search-movil" id="navbar">
      <form id="demo-1" style="width: 100%; position: relative">
        <search-icon class="icon-search-tp" />
        <input
          v-model="search"
          type="search"
          :placeholder="$t('header_search')"
          @keyup.enter="getSearch(search)"
          id="SearchIndex5"
        />
      </form>
    </div>
    <KProductFavoritos v-if="this.stateBanner" />
    <KProductList
      :dataStore="dataStore"
      :fullProducts="fullProducts"
    ></KProductList>
    <KNewsletter :dataStore="dataStore" />
  </div>
</template>

<script>
import KProductFavoritos from '../../components/template5/Ko-ProductFavoritos-1'
import KProductList from '../../components/template5/Ko-ProductList-1'
import KNewsletter from '../../components/template5/Ko-Newsletter-1'
export default {
  layout: 'unicentro',
  components: {
    KProductList,
    KNewsletter,
    KProductFavoritos,
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
    facebookPixel() {
      return this.$store.state.analytics_tagmanager
    },
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
  },
  methods: {
    SearchProduct(search) {
      this.search = search
      this.$store.commit('SET_SEARCHVALUE', this.search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
        if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          window.fbq('track', 'Search', { value: value })
        }
      } else {
        location.href = '?search=' + ''
      }
    },
  },
  watch: {
    search(value) {
      this.SearchProduct(value)
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
.icon-search-tp {
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
    padding: 8px 5px 0px;
    background: var(--background_color_1);
    -webkit-transition: all 0.8s;
    -moz-transition: all 0.8s;
    transition: all 0.8s;
    top: 88px;
    z-index: 3;
  }
}
</style>
