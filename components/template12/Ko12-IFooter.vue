<template>
  <footer
    class="wrapper_footer"
    :style="`background:${settingByTemplate12.backgroundFooter};`"
  >
    <div class="header-content-logo">
      <nuxt-link
        to="/"
        class="wrapper-logo"
        :style="`max-width:${settingByTemplate12.logoSize};`"
      >
        <img
          :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
          class="header-logo"
          alt="Logo Img"
        />
      </nuxt-link>
    </div>
    <p class="text-title" :style="`color:${settingByTemplate12.footerText};`">
      {{ settingByTemplate12.footerTitle }}
    </p>
    <div class="content-items-iconos">
      <div
        v-for="(item, index) in links"
        :key="`${index}${item.icon}`"
        v-show="item.link"
      >
        <a
          v-if="item.link"
          :href="item.link"
          target="_blank "
          :style="`color:${settingByTemplate12.footerText}; fill:${settingByTemplate12.footerText};`"
          ><div class="icon" :is="item.icon"
        /></a>
      </div>
    </div>
    <button
      class="text-politics"
      v-if="dataStore.politicas"
      @click="OpenModalPolitics"
      :style="`color:${settingByTemplate12.footerText} ;`"
    >
      <p>{{ $t('footer_politicasyterminos') }}</p>
    </button>
    <div v-if="showModal">
      <div class="modal" v-if="dataStore.politicas">
        <KoTermsConditions :dataStore="dataStore"></KoTermsConditions>
      </div>
    </div>
    <div
      class="footer_resources w-full text-gray-400 text-center text-sm font-normal"
    >
      <hr class="border-t border-gray-200 w-full" />
      <div class="madebyKomercia">
        <p class="txt-devBy">{{ $t('footer_desarrollado') }}</p>
        <a
          href="https://komercia.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            v-lazy="
              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`
            "
            v-if="logo == true"
            class="logo2"
            alt="Logo Img"
          />
          <img
            v-lazy="
              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`
            "
            v-else
            class="logo2"
            alt="Logo Img"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import settingsProps from './mixins/ComponentProps'
import KoTermsConditions from '../footers/ko-TermsAndConditions.vue'
export default {
  name: 'Ko12-IFooter',
  mixins: [settingsProps],
  components: {
    KoTermsConditions,
  },
  mounted() {
    if (this.settingByTemplate12 && this.settingByTemplate12.backgroundFooter) {
      this.setLogo()
    }
  },
  data() {
    return {
      links: [
        {
          nombre: 'Facebook',
          icon: 'facebook-icon',
          link: this.dataStore.tienda.red_facebook,
        },
        {
          nombre: 'Twitter',
          icon: 'twitter-icon',
          link: this.dataStore.tienda.red_twitter,
        },
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.tienda.red_instagram,
        },
        {
          nombre: 'Youtube',
          icon: 'youtube-icon',
          link: this.dataStore.tienda.red_youtube,
        },
        {
          nombre: 'Tiktok',
          icon: 'tiktok-icon',
          link: this.dataStore.tienda.red_tiktok,
        },
      ],
      logo: true,
    }
  },
  computed: {
    showModal() {
      return this.$store.state.modalpolitics05
    },
  },
  methods: {
    OpenModalPolitics() {
      this.$store.state.modalpolitics05 = true
    },
    setLogo() {
      if (
        this.settingByTemplate12 &&
        this.settingByTemplate12.backgroundFooter
      ) {
        let color = this.settingByTemplate12.backgroundFooter
        let colorArray = color.split(',')
        let colorInt = parseInt(colorArray[2])
        if (colorInt > 50) {
          this.logo = true
        } else {
          this.logo = false
        }
      }
    },
  },
  watch: {
    settingByTemplate12() {
      if (
        this.settingByTemplate12 &&
        this.settingByTemplate12.backgroundFooter
      ) {
        let color = this.settingByTemplate12.backgroundFooter
        let colorArray = color.split(',')
        let colorInt = parseInt(colorArray[2])
        if (colorInt > 50) {
          this.logo = true
        } else {
          this.logo = false
        }
      }
    },
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
      this.links[4].link = this.dataStore.tienda.red_tiktok
    },
  },
}
</script>

<style scoped>
.wrapper_footer {
  padding: 40px 0 10px;
  @apply relative flex flex-col items-center w-full;
}
.header-content-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 0px;
}
.wrapper-logo {
  width: 100%;
}
.header-logo {
  object-fit: contain;
  object-position: left;
}
.text-title {
  padding: 15px 0 20px;
  text-align: center;
  font-weight: 400;
  max-width: 380px;
}
.text-politics {
  text-align: center;
  font-weight: 400;
}
.modal {
  padding-top: 200px;
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
}
.content-items-iconos {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 15px 0 40px;
}
.icon {
  margin-right: 10px;
  font-size: 28px;
}
.icon:hover {
  color: grey;
  fill: grey;
}
.madebyKomercia {
  margin-top: 20px;
  @apply w-full flex flex-col justify-center items-center mb-10;
}
.txt-devBy {
  font-size: 14px;
  color: var(--color_text);
}
.logo2 {
  width: 100px;
  opacity: 0.5;
}
</style>
