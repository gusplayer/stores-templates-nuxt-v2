<template lang="html">
  <div
    class="home"
    :style="
      this.settingByTemplate &&
      this.settingByTemplate.settings &&
      this.settingByTemplate.settings['--background_color_1']
        ? this.settingByTemplate.settings
        : this.settingBase
    "
  >
    <div class="space-search"></div>
    <div class="search-movil" id="navbar">
      <form id="demo-1" style="width: 100%; position: relative;">
        <search-icon class="icon-s" />
        <input
          v-model="search"
          type="search"
          :placeholder="$t('header_search')"
          @keyup.enter="getSearch(search)"
          id="SearchIndex5"
        />
      </form>
    </div>
    <kBanner></kBanner>
    <kSectionHero></kSectionHero>
    <div class="title-section-products">
      <h3>Adipisicing elit</h3>
      <h2>FEATURED PRODUCTS</h2>
      <p>There are many variations of passages of lorem ipsum available.</p>
    </div>
    <kSectionProducts></kSectionProducts>
    <div class="container content-blocks">
      <div class="text-content">
        <div class="text-block">
          <h1>
            Explore the striking exclusive collections
          </h1>
          <p>
            On projection apartments unsatiable so if he entreaties appearance.
            Rose you wife how set lady half wish. Hard sing an in true felt.
            Welcomed stronger if steepest ecstatic an suitable finished of oh
            entered.
          </p>
        </div>
        <div class="quote">
          And produce say the ten moments parties. Simple innate summer fat
          appear basket his desire joy. Outward clothes promise at gravity.
        </div>
        <div class="social"></div>
      </div>
      <div class="img-content">
        <img
          width="580"
          height="500"
          src="https://woodmart.xtemos.com/wp-content/uploads/2017/11/jew-girl-auth-img.jpg"
          alt=""
        />
      </div>
    </div>
    <div class="title-section-products">
      <h3>Adipisicing elit</h3>
      <h2>ENGAGEMENT & WEDDING</h2>
      <p>There are many variations of passages of lorem ipsum available.</p>
    </div>
    <kProductsList :listproducts="listproducts"></kProductsList>
    <div class="video-tab">
      <div class="video-box">
        <iframe
          width="509"
          height="286"
          src="https://www.youtube.com/embed/Ze7xsy9tVVQ"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
      <div class="text-box">
        <h3>
          Special Offer
        </h3>
        <h1>
          JEWELLERY BOX
        </h1>
        <h2>ALL IN ONE BOX</h2>
        <div
          class="bg-gray-textHeader text-white-white w-1/2 p-2 my-5 text-center"
        >
          CHECK NOW
        </div>
      </div>
    </div>
    <kBannerList />
    <kListItems />
    <div>
      <div class="title-section-products">
      <h3>Adipisicing elit</h3>
      <h2>SHOP OUR INSTAGRAM</h2>
      <p>There are many variations of passages of lorem ipsum available.</p>
    </div>
    <div class="list-imgs">
      <div class="img-product" v-for="(img, index) in imgsproducts">
        <img :src="img" alt="" />
      </div>
    </div>
    </div>
    <kUserSlides />
    
    
    
  </div>
</template>

<script>
import kBanner from '../../components/template8/Ko-banner'
import kSectionHero from '../../components/template8/Ko-hero-section'
import kSectionProducts from '../../components/template8/Ko-product-section'
import kProductsList from '../../components/template8/Ko-product-list'
import kListItems from '../../components/template8/Ko-list-items'
import kUserSlides from '../../components/template8/Ko-user-slide'
import kBannerList from '../../components/template8/Ko-banner-list'
export default {
  layout: 'default',
  components: {
    kBanner,
    kSectionHero,
    kSectionProducts,
    kProductsList,
    kListItems,
    kUserSlides,
    kBannerList,
  },
  mounted() {},
  data() {
    return {
      search: '',
      imgsproducts: [
        '//instagram.fhen2-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/83824585_199968224530507_7290971111045127633_n.jpg?_nc_ht=instagram.fhen2-1.fna.fbcdn.net&_nc_cat=107&_nc_ohc=yp2P0bKpCaIAX8EvE9T&tp=1&oh=13dd9ecdba1cff9c1c1451da06b787fa&oe=603CFB77',
        '//instagram.fhen2-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/83345254_618388188945150_2255330338761976405_n.jpg?_nc_ht=instagram.fhen2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=OLjbxn6AdmoAX9E8WVt&tp=1&oh=6c18cb736e70c7868ca89c96c742c1e6&oe=603C6565',
        '//instagram.fhen2-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/84345599_599158564199446_5113412811427993989_n.jpg?_nc_ht=instagram.fhen2-1.fna.fbcdn.net&_nc_cat=110&_nc_ohc=FF7hnel3ZjoAX9GRlme&tp=1&oh=516a8daae8180a7408a584f7dc0c7847&oe=603C40DE',
        '//instagram.fhen2-1.fna.fbcdn.net/v/t51.2885-15/e35/s320x320/84641945_169400181022668_1716516330913712575_n.jpg?_nc_ht=instagram.fhen2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=XpYrxOIJZKMAX-uPdZu&tp=1&oh=60c94e00a65b33ce274a30aca1d81fc7&oe=603CC6C5',
      ],
      listproducts: [
        {
          name: 'Joya1',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-1-430x430.jpg',
          category: 'Jewelry',
          price: '169',
        },
        {
          name: 'Joya2',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-2-430x430.jpg',
          category: 'Jewelry',
          price: '167',
        },
        {
          name: 'Joya3',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-3-430x430.jpg',
          category: 'Jewelry',
          price: '165',
        },
        {
          name: 'Joya2',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-2-430x430.jpg',
          category: 'Jewelry',
          price: '167',
        },
      ],
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
    settingByTemplate() {
      return this.$store.state.settingByTemplate
    },
  },
  methods: {
    Searchproduct(search) {
      this.search = search
      this.$store.commit('SET_SEARCHVALUE', this.search)
    },
    getSearch(value) {
      if (value) {
        location.href = '?search=' + value
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
* {
  font-family: 'Marcellus SC', serif;
}
.home {
  background-color: #f4f4f4;
}
.video-tab {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding:20px 50px;
  margin: 0 auto;
  
}
.video-box{
  display: flex;
  justify-content: center;
}
.text-box {
  padding: 20px;
}
.text-box h1 {
  font-size: 55px;
  color: rgb(48, 48, 48);
}
.text-box h2 {
  font-size: 40px;
  color: rgb(48, 48, 48);
}
.text-box h3 {
  font-size: 25px;
  font-family: Lora;
  font-style: italic;
  color: #c3935b;
}
.list-imgs {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 10px;
  margin: 0 auto;
  padding: 50px;
}
.img-product {
  position: relative;
  cursor: pointer;
}
.img-product:after {
  position: absolute;
  opacity: 0;
  transition: all 0.5s;
  -webkit-transition: all 0.5s;
}
.img-product:after {
  content: '\A';
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
.img-product:hover:after {
  opacity: 1;
}
.title-section-products {
  @apply flex flex-col text-center mb-2;
}
.title-section-products h3 {
  font-size: 22px;
  color: #c3935b;
  line-height: 32px;
  font-family: Lora;
  font-style: italic;
}
.title-section-products h2 {
  font-size: 30px;
  line-height: 40px;
}
.content-blocks{
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 10px;
  margin: 0 auto;
}
.text-content {
  @apply bg-white-white;
  padding: 25px;
}
.text-block {
}
.text-block h1 {
  width: 75%;
  font-size: 40px;
}
.text-block p {
  font-size: 15px;
  color: gray;
  margin: 5px;
}
.quote {
  font-size: 15px;
  margin: 20px 0;
  border-left-width: 4px !important;
  padding-left: 20px !important;
  border-left-color: #d1ae82 !important;
  border-left-style: solid !important;
}
.img-content {
  height: 100%;
  display: flex;
  align-content: center;
  align-items: center;
}
.img-content img {
  height: 85%;
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
@media (max-width: 1000px) {
  .content-blocks {
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
  .video-tab{
     grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
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
