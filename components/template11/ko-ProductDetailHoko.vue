<template>
  <div
    class="wrapper-productDetail"
    :style="[
      settingByTemplate11[0].detailsProduct,
      settingByTemplate11[0].setting11General,
      {
        '--font-style-1':
          this.settingByTemplate11[0].setting11General &&
          this.settingByTemplate11[0].setting11General.fount_1
            ? this.settingByTemplate11[0].setting11General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="container-productDetail-loading" v-if="loading"></div>
    <div class="container-productDetail" v-else>
      <div class="banner-detail">
        <div class="crumb">
          <nuxt-link to="/productosHoko">
            <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
          </nuxt-link>
          <p class="separatorCrumb">/</p>
          <p class="txt-crumb s2" v-if="data.name">{{ data.name }}</p>
        </div>
      </div>
      <div class="empty"></div>
      <div class="product-content">
        <div class="left">
          <div class="wrapper-left">
            <template>
              <div
                v-swiper:mySwiper="swiperOption"
                ref="mySwiper"
                class="photos"
              >
                <div class="swiper-wrapper" v-if="data.images">
                  <div
                    class="swiper-slide photos_selected"
                    v-for="(foto, itemsfoto) in data.images"
                    :key="itemsfoto"
                    @click="selectedPhoto(foto)"
                  >
                    <img class="img-list" v-lazy="foto" alt="Product Img" />
                  </div>
                </div>
                <!-- <div class="swiper-prev" v-if="data.images.length > 3">
                  <FlechaUp-icon class="icon-swiper" />
                </div>
                <div class="swiper-next" v-if="data.images.length > 3">
                  <Flechadown-icon class="icon-swiper" />
                </div> -->
              </div>
            </template>
            <div class="wrapper-photo_main">
              <div class="photo_main">
                <img
                  class="photo_main"
                  v-lazy="this.selectPhotoUrl"
                  alt="Product Zoom"
                />
              </div>
            </div>
            <div class="photos_responsive">
              <ProductSlide :photos="data.images" />
            </div>
          </div>
        </div>
        <div
          class="right"
          :style="`margin-top:${this.settingByTemplate11[0].detailsProduct['--marginTopTitle']};`"
        >
          <div class="content-items-right">
            <div class="content-name">
              <p
                class="text-name"
                :style="`font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizeTitle']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighTitle']};`"
              >
                {{ data.name }}
              </p>
            </div>
            <div class="content-price">
              <p
                class="text-price"
                :style="`font-size:${this.settingByTemplate11[0].detailsProduct['--fontSizePrice']}; font-weight:${this.settingByTemplate11[0].detailsProduct['--fontWeighPrice']};`"
                v-show="data.price"
              >
                {{ data.price | currency }}
              </p>
            </div>
            <div class="empty"></div>
            <div class="content-stock">
              <p class="stock-text-1">{{ $t('productdetail_stock') }}:</p>
              <p class="stock-text-2" v-if="!spent">
                {{ data.stock.amount }} Unidades
              </p>
              <p class="stock-text-2" v-else>{{ $t('home_cardAgotado') }}</p>
            </div>
            <div class="empty"></div>

            <div class="w-full flex flex-row items-center">
              <p class="text-variant" style="margin-right: 10px">
                {{ $t('productdetail_compartir') }}
              </p>
              <a
                :href="this.sharingFacebook"
                target="_blank"
                rel="noreferrer noopener"
                class="btn-facebook"
              >
                <facebook-icon class="wp-icon" />
              </a>
              <button class="btn-whatsapp" @click="redirectWP()">
                <whatsapp-icon class="wp-icon" />
              </button>
            </div>
            <div class="content-direction-btns mt-10">
              <div class="content-quantity-boxes">
                <div class="box-quantity">
                  <p class="txt-quantity">{{ quantityValue }}</p>
                </div>
                <div class="box-quantity-btns">
                  <div class="btn-quantity btn1" v-on:click="addQuantity()">
                    <FlechaUp-icon class="text-icon" />
                  </div>
                  <div class="btn-quantity btn2" v-on:click="removeQuantity()">
                    <Flechadown-icon class="text-icon" />
                  </div>
                </div>
              </div>
              <div class="content-addCart">
                <button
                  ref="colorBtn"
                  class="btn"
                  v-on:click="GoPayments"
                  id="AddToCartTag"
                  v-if="!spent"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    class="minicart-icon"
                    viewBox="0 0 16 16"
                  >
                    <path
                      d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"
                    />
                  </svg>
                  <p class="text-addCart">
                    {{ $t('home_comprarAhora') }}
                  </p>
                </button>
                <button disabled class="btn-disabled" v-else-if="spent">
                  <p class="text-addCart">
                    {{ $t('home_cardAgotado') }}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tab">
        <OptionTab
          :dataStore="dataStore"
          :data="data.stock.product"
        ></OptionTab>
      </div>
      <div class="mb-20"></div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import OptionTab from './_productdetails/OptTab-hoko'
import idCloudinary from '../../mixins/idCloudinary'
import ProductSlide from './_productdetails/productSlideHoko.vue'

export default {
  mixins: [idCloudinary],
  name: 'Ko-ProductDetail',
  props: {
    dataStore: Object,
    // productsData: Array,
    whatsapp: String,
    // envios: Object,
    facebookPixel: Object,
    settingByTemplate11: Array,
  },
  components: {
    OptionTab,
    ProductSlide,
  },
  mounted() {
    this.asyncauthToken()
  },
  data() {
    return {
      data: {},
      maxQuantityValue: 1,
      quantityValue: 1,
      loading: true,
      spent: false,
      selectPhotoUrl: '',
      swiperOption: {
        direction: 'vertical',
        slidesPerView: 4,
        spaceBetween: 10,
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
      },
      sharing: {
        url: '',
        quote: '',
      },
      sharingFacebook: '',
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    dataHoko() {
      return this.$store.state.dataHoko
    },
  },
  methods: {
    mobileCheck() {
      window.mobilecheck = function () {
        var check = false
        ;(function (a) {
          if (
            /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
              a
            ) ||
            /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
              a.substr(0, 4)
            )
          )
            check = true
        })(navigator.userAgent || navigator.vendor || window.opera)
        return check
      }
      return window.mobilecheck()
    },
    redirectWP() {
      let baseUrlMovil = 'https://api.whatsapp.com/send?'
      let baseUrlPc = 'https://web.whatsapp.com/send?'
      let urlProduct = window.location.href
      let text = `Hola 😀, %0AQuiero compartir contigo éste  producto, seguro te va a encantar: ${this.data.name}%0A%0ALink de compra: ${urlProduct}%0A`

      if (this.mobileCheck()) {
        window.open(`${baseUrlMovil}text=${text}`, '_blank')
      } else {
        window.open(`${baseUrlPc}text=${text}`, '_blank')
      }
    },
    async asyncauthToken() {
      if (this.dataHoko.token) {
        this.getProductsHoko(this.$route.params.slug, this.dataHoko.token)
      }
    },
    async getProductsHoko(id, token) {
      let config = {
        headers: {
          'content-type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
          'Access-Control-Allow-Origin': '*',
        },
      }
      await axios
        .get(`https://hoko.com.co/api/member/myproducts/${id}`, config)
        .then((response) => {
          this.loading = false
          this.data = response.data.product
          if (this.data) {
            this.selectedPhoto(this.data.images[0])
            this.maxQuantityValue = this.data.stock.amount
            if (this.data.stock.amount == 0 || this.maxQuantityValue <= 0) {
              this.spent = true
            }
            this.sharing.url = window.location.href
            this.sharing.quote = `Explora%20el%20producto%20${this.data.name}%2C%20te%20van%20a%20encantar.%0ALink%20del%20producto%3A%20${this.sharing.url}`
            this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`
          }
        })
    },
    changeSlide() {
      this.swiper.slidePrev(700, false)
    },
    GoPayments() {
      let objeto = {
        id: this.data.id,
        cantidad: this.quantityValue,
        combinacion: undefined,
      }
      let json = {
        products: [objeto],
        tienda: {
          id: this.$store.state.tienda.id_tienda,
        },
        canal: 'HOKO',
      }
      json = JSON.stringify(json)
      if (json) {
        if (this.layourUnicentro == true) {
          window.open(`https://checkout.komercia.co/?params=${json}`)
          // if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          //   window.fbq('track', 'InitiateCheckout')
          // }
          // this.$gtm.push({ event: 'InitiateCheckout' })
        } else {
          location.href = `https://checkout.komercia.co/?params=${json}`
          // if (this.facebookPixel && this.facebookPixel.pixel_facebook != null) {
          //   window.fbq('track', 'InitiateCheckout')
          // }
          // this.$gtm.push({ event: 'InitiateCheckout' })
        }
      }
    },
    addQuantity() {
      if (this.maxQuantityValue > this.quantityValue) {
        this.quantityValue++
      } else {
        console.log('Alerta de limite de sku')
      }
    },
    removeQuantity() {
      if (this.quantityValue >= 2) {
        this.quantityValue--
      }
    },
    selectedPhoto(photo) {
      this.selectPhotoUrl = photo
    },
  },
  watch: {
    quantityValue(value) {
      if (value > this.maxQuantityValue) {
        this.quantityValue = this.maxQuantityValue
      }
    },
  },
  filters: {
    currency(value) {
      if (value) {
        return `$${value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
      }
      return ''
    },
    toLowerCase(value) {
      if (value) {
        return value.toLowerCase()
      }
      return ''
    },
  },
}
</script>

<style scoped>
.btn-facebook {
  color: #1877f2;
  border-radius: 5px;
  background-color: transparent;
  width: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 0px;
  margin-right: 20px;
}
.btn-facebook:hover {
  color: black;
}
.btn-whatsapp {
  color: #25d366;
  border-radius: 5px;
  background-color: transparent;
  width: 10px;
  cursor: pointer;
  transition: all 200ms ease-in;
  text-decoration: none;
  display: flex;
  justify-content: center;
  text-align: center;
  border: 0px;
}
.btn-whatsapp:hover {
  color: black;
}
.wp-icon {
  font-size: 27px;
  bottom: 3px;
}
.wrapper-left {
  flex: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding-bottom: 30px;
}
.photos_responsive {
  display: none;
}
.photos {
  display: flex;
  margin-right: 30px;
  max-width: 110px;
  position: relative;
}
.swiper-wrapper {
  width: 100%;
  position: relative;
}
.swiper-prev {
  position: absolute;
  top: 0;
  left: 20px;
  z-index: 2;
}
.swiper-next {
  position: absolute;
  left: 20px;
  bottom: 0;
  z-index: 2;
  font-size: 25px;
}
.icon-swiper {
  color: var(--color_icon);
  font-size: 60px;
  cursor: pointer;
}
.icon-swiper:hover {
  color: var(--hover_text);
}
.photos_selected {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  max-height: 100px;
}
.img-list {
  cursor: pointer;
  vertical-align: top;
  height: 100px;
  width: 100px;
  object-fit: contain;
  border-radius: 6px;
  margin-bottom: 10px;
}
.wrapper-photo_main {
  position: relative;
  max-width: 650px;
  max-height: 600px;
  width: 100%;
  margin-right: 25px;
}
.photo_main {
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
  border-radius: 10px;
}
.wrapper-productDetail {
  background: var(--background_color_1);
  @apply w-full flex justify-center items-center;
}
.container-productDetail-loading {
  height: calc(100vh - 420px);
  max-width: 1200px;
  padding: 50px 30px 30px 30px;
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center;
}
.container-productDetail {
  background: var(--background_color_1);
  @apply w-full h-full flex flex-col justify-center items-center;
}
.left {
  @apply w-full flex flex-col justify-center items-center;
}
.right {
  @apply w-full flex flex-col justify-start items-start;
}
.content-name,
.content-price,
.content-addCart {
  @apply w-full flex flex-row justify-start items-center;
}
.section-suggesProduct {
  @apply w-full my-40;
}
.content-quantity-boxes {
  @apply w-full flex flex-row justify-start items-center my-30;
}
.box-quantity {
  background-color: transparent;
  border: 1px solid var(--border);
  @apply w-75 h-50 flex text-center justify-center items-center;
}
.box-quantity-btns {
  background-color: var(--color_background_btn);
  border: 1px solid var(--color_background_btn);
  @apply w-25 h-50 flex flex-col text-center justify-center items-center;
}
.btn-quantity {
  background-color: var(--color_background_btn);
  border-color: var(--color_background_btn);
  @apply w-25 h-25 flex justify-center items-center border-t border-r;
}
.text-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 34px;
  cursor: pointer;
  color: var(--color_text_btn);
}
@screen sm {
  .wrapper-left {
    padding-bottom: 15px;
  }
  .product-content {
    @apply w-9/0 flex-col justify-center items-center mt-40;
  }
  .content-direction-btns {
    @apply w-full flex flex-col justify-start items-start;
  }
  .content-name,
  .content-price {
    @apply mb-30;
  }
  .tab {
    @apply w-9/0 flex mt-40;
  }
  .btn {
    color: var(--color_text_btn);
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn-disabled {
    color: var(--color_text_btn);
    background-color: var(--color_background_btn);
    transition: all 0.15s ease-in;
    @apply w-full h-54 flex flex-row justify-center items-center;
  }
  .btn:hover .text-addCart {
    color: var(--hover_text_btn);
    background: var(--hover_Bg_btn);
    transition: all 0.15s ease-in;
  }
  .text-name {
    color: var(--color_text);
    /* font-size: 22px; */
    line-height: 1;
    font-family: var(--font-style-1) !important;
  }
  .text-price {
    color: var(--color_price);
    /* font-size: 20px; */
    line-height: 26px;
    letter-spacing: 0.3px;
    font-family: var(--font-style-1) !important;
  }
  .text-addCart {
    font-family: var(--font-style-1) !important;
    color: var(--color_text_btn);
    font-size: 12px;
    @apply font-semibold whitespace-nowrap uppercase;
  }
  .minicart-icon {
    fill: var(--color_text_btn);
    color: var(--color_text_btn);
    @apply mr-10 mb-5;
  }
  .text-variant {
    color: var(--color_subtext);
    font-size: 16px;
    transition: all 0.6s ease-in-out;
    font-family: var(--font-style-1) !important;
    @apply font-semibold mr-10;
  }
  .banner-detail {
    @apply hidden;
  }
  .section-suggesProduct {
    @apply w-9/0;
  }
  .content-items-right {
    @apply w-full flex flex-col justify-center items-center mb-20;
  }
  .empty {
    background-color: var(--border);
    max-width: 1200px;
    @apply w-full h-1;
  }
  .content-stock {
    @apply w-full flex flex-row justify-start items-center my-26;
  }
  .stock-text-1 {
    color: var(--color_subtext);
    font-size: 15px;
    font-family: var(--font-style-1) !important;
    @apply font-normal text-left mr-20;
  }
  .stock-text-2 {
    color: var(--color_subtext);
    font-size: 15px;
    font-family: var(--font-style-1) !important;
    @apply font-normal text-left;
  }
}
@media (min-width: 425px) {
  .content-direction-btns {
    @apply flex flex-col;
  }
}
@screen md {
  .banner-detail {
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20;
  }
  .crumb {
    @apply w-full flex flex-row justify-center items-center;
  }
  .separatorCrumb {
    font-size: 9px;
    color: var(--breadCrumbs);
    font-family: var(--font-style-1) !important;
    @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
  }
  .txt-crumb {
    font-size: 15px;
    color: var(--breadCrumbs);
    font-family: var(--font-style-1) !important;
    @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
  }
  .s1:hover {
    color: var(--hover_text);
    transition: all 0.25s ease;
  }
  .s2:hover {
    color: var(--hover_text);
    transition: all 0.25s ease;
  }
  .content-addCart {
    width: 236px;
  }
  .tab {
    @apply w-9/5;
  }
  .product-content {
    @apply w-9/5 grid grid-cols-2 gap-4 justify-start items-start;
  }
  .section-suggesProduct {
    @apply w-9/5;
  }
}
@screen lg {
  .tab {
    @apply flex;
  }
  .content-direction-btns {
    @apply flex flex-col;
  }
}
@media (max-width: 768px) {
  .photos {
    display: none;
  }
  .wrapper-photo_main {
    display: none;
  }
  .photos_responsive {
    width: 100%;
    height: 375px;
    max-width: 400px;
    display: flex;
    box-sizing: border-box;
    overflow: hidden;
    margin-bottom: 10px;
  }
}
@media (min-width: 1200px) {
  .product-content,
  .tab,
  .section-suggesProduct {
    max-width: 1200px;
  }
}
</style>
