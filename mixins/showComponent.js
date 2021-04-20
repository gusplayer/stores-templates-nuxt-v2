export default {
  methods: {
    showComponent07(domain) {
      switch (domain) {
        case '':
          this.moverseA('headerX')
          break
        case '/?component=header':
          this.moverseA('headerX')
          break
        case '/?component=footer':
          this.moverseA('footerX')
          break
        case '/?component=banner':
          this.moverseA('kbannerX')
          break
        case '/?component=promo':
          this.moverseA('KoffersX')
          break
        case '/?component=productlist':
          this.moverseA('KproductlistX')
          break
        case '/?component=advertising':
          this.moverseA('KAdvertisingX')
          break
        case '/?component=gify':
          this.moverseA('KGifyX')
          break
        case '/?component=howwork':
          this.moverseA('KHowworkX')
          break
        case '/?component=blog':
          this.moverseA('KblogX')
          break
        case '/?component=newsletter':
          this.moverseA('KNewsX')
          break
        case '/?component=instagram':
          this.moverseA('KWrapperX')
          break
      }
    },
    showComponent09(domain) {
      switch (domain) {
        case '':
          this.moverseA('headerX')
          break
        case '/?component=header':
          this.moverseA('headerX')
          break
        case '/?component=footer':
          this.moverseA('footerX')
          break
        case '/?component=banner':
          this.moverseA('kbannerX')
          break
        case '/?component=koffers':
          this.moverseA('KoffersX')
          break
        case '/?component=productList':
          this.moverseA('KproductlistX')
          break
        case '/?component=blog':
          this.moverseA('KblogX')
          break
        case '/?component=wrapper':
          this.moverseA('KWrapperX')
          break
        case '/?component=newsletter':
          this.moverseA('KNewsX')
          break
      }
    },
  },
}
