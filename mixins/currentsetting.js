export default {
  methods: {
    currentSettingByTemplate9(value) {
      switch (value.component) {
        case 'settingGeneral':
          this.$store.state.currentSettingByTemplate9.settingGeneral = value
          break
        case 'header':
          this.$store.state.currentSettingByTemplate9.header = value
          break
        case 'footer':
          this.$store.state.currentSettingByTemplate9.footer = value
          break
        case 'banner':
          this.$store.state.currentSettingByTemplate9.banner = value
          break
        case 'koffers':
          this.$store.state.currentSettingByTemplate9.offers = value
          break
        case 'productList':
          this.$store.state.currentSettingByTemplate9.productList = value
          break
        case 'blog':
          this.$store.state.currentSettingByTemplate9.blog = value
          break
        case 'wrapper':
          this.$store.state.currentSettingByTemplate9.wrapper = value
          break
        case 'newsletter':
          this.$store.state.currentSettingByTemplate9.news = value
          break

        case 'productListFilter':
          this.$store.state.currentSettingByTemplate9.news = value
          break
        case 'contact':
          this.$store.state.currentSettingByTemplate9.news = value
          break
        case 'detailsProduct':
          this.$store.state.currentSettingByTemplate9.news = value
          break
      }
    },
  },
}
