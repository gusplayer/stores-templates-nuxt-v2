export default {
  methods: {
    showComponent07(domain) {
      switch (domain) {
        case '':
          this.$store.state.showTemplate.showHeader = true
          this.$store.state.showTemplate.showBody = true
          this.$store.state.showTemplate.showFooter = true
          this.$store.state.showTemplate.showCountry = true
          break
        case '/?component=header':
          this.$store.state.showTemplate.showHeader = true
          this.$store.state.showTemplate.showBody = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=footer':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showBody = false
          this.$store.state.showTemplate.showFooter = true
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=banner':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = true
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=promo':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = true
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=productlist':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = true
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=advertising':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = true
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=gify':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = true
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=howwork':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = true
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=blog':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = true
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=newsletter':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = true
          this.$store.state.showTemplate7.showWrapper = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=instagram':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate7.showCarousel = false
          this.$store.state.showTemplate7.showPromo = false
          this.$store.state.showTemplate7.showProductList = false
          this.$store.state.showTemplate7.showAdvertising = false
          this.$store.state.showTemplate7.showGify = false
          this.$store.state.showTemplate7.showHowwork = false
          this.$store.state.showTemplate7.showBlog = false
          this.$store.state.showTemplate7.showNews = false
          this.$store.state.showTemplate7.showWrapper = true
          this.$store.state.showTemplate.showCountry = false
          break
      }
    },
    showComponent09(domain) {
      switch (domain) {
        case '':
          this.$store.state.showTemplate.showHeader = true
          this.$store.state.showTemplate.showBody = true
          this.$store.state.showTemplate.showFooter = true
          this.$store.state.showTemplate.showCountry = true
          break
        case '/?component=header':
          this.$store.state.showTemplate.showHeader = true
          this.$store.state.showTemplate.showBody = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=footer':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showBody = false
          this.$store.state.showTemplate.showFooter = true
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=banner':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate9.showBanner = true
          this.$store.state.showTemplate9.showOffers = false
          this.$store.state.showTemplate9.showProductList = false
          this.$store.state.showTemplate9.showBlog = false
          this.$store.state.showTemplate9.showWrapper = false
          this.$store.state.showTemplate9.showNews = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=koffers':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate9.showBanner = false
          this.$store.state.showTemplate9.showOffers = true
          this.$store.state.showTemplate9.showProductList = false
          this.$store.state.showTemplate9.showBlog = false
          this.$store.state.showTemplate9.showWrapper = false
          this.$store.state.showTemplate9.showNews = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=productList':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate9.showBanner = false
          this.$store.state.showTemplate9.showOffers = false
          this.$store.state.showTemplate9.showProductList = true
          this.$store.state.showTemplate9.showBlog = false
          this.$store.state.showTemplate9.showWrapper = false
          this.$store.state.showTemplate9.showNews = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=blog':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate9.showBanner = false
          this.$store.state.showTemplate9.showOffers = false
          this.$store.state.showTemplate9.showProductList = false
          this.$store.state.showTemplate9.showBlog = true
          this.$store.state.showTemplate9.showWrapper = false
          this.$store.state.showTemplate9.showNews = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=wrapper':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate9.showBanner = false
          this.$store.state.showTemplate9.showOffers = false
          this.$store.state.showTemplate9.showProductList = false
          this.$store.state.showTemplate9.showBlog = false
          this.$store.state.showTemplate9.showWrapper = true
          this.$store.state.showTemplate9.showNews = false
          this.$store.state.showTemplate.showCountry = false
          break
        case '/?component=newsletter':
          this.$store.state.showTemplate.showHeader = false
          this.$store.state.showTemplate.showFooter = false
          this.$store.state.showTemplate9.showBanner = false
          this.$store.state.showTemplate9.showOffers = false
          this.$store.state.showTemplate9.showProductList = false
          this.$store.state.showTemplate9.showBlog = false
          this.$store.state.showTemplate9.showWrapper = false
          this.$store.state.showTemplate9.showNews = true
          this.$store.state.showTemplate.showCountry = false
          break
      }
    },
  },
}
