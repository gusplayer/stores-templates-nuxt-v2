<template>
  <footer class="wrapper_footer">
    <div class="header-content-logo">
      <nuxt-link to="/" class="wrapper-logo">
        <img
          :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
          class="header-logo"
          alt="Logo Img"
        />
      </nuxt-link>
    </div>
    <p class="text-title">
      We don't care if we're doing haute cuisine or burgers and pizza. We just
      do it right. Always.
    </p>
    <div class="content-items-iconos">
      <div
        v-for="(item, index) in links"
        :key="`${index}${item.icon}`"
        v-if="item.link"
      >
        <a v-if="item.link" :href="item.link" target="_blank "
          ><div class="icon" :is="item.icon"
        /></a>
      </div>
    </div>
    <button
      class="text-politics"
      v-if="dataStore.politicas"
      @click="OpenModalPolitics"
    >
      <p>{{ $t('footer_politicasyterminos') }}</p>
    </button>
    <div v-if="showModal">
      <div class="modal" v-if="dataStore.politicas">
        <KoTermsConditions :dataStore="dataStore"></KoTermsConditions>
      </div>
    </div>
    <div
      class="
        footer_resources
        w-full
        text-gray-400 text-center text-sm
        font-normal
      "
    >
      <hr class="border-t border-gray-200 w-full" />
      <p class="p-4">
        © 2017 Gourmet - info@restaurant.com - +02 123458992 - Wall Street
        Avenue 502, New York - Restaurant Template Handmade by schiocco.io
      </p>
    </div>
  </footer>
</template>

<script>
import settingsProps from './mixins/ComponentProps'
import KoTermsConditions from '../footers/ko-TermsAndConditions.vue'
export default {
  name: 'IFooter',
  mixins: [settingsProps],
  components: {
    KoTermsConditions,
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
  },
  watch: {
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
  @apply relative flex flex-col items-center w-full bg-gray-100;
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
  max-height: 80px;
  object-fit: contain;
  object-position: left;
}
.text-title {
  color: rgb(156, 163, 175);
  padding: 15px 0 20px;
  text-align: center;
  font-weight: 400;
  max-width: 380px;
}
.text-politics {
  color: rgb(156, 163, 175);
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
  color: rgb(156, 163, 175);
  fill: rgb(156, 163, 175);
}
.icon:hover {
  color: grey;
  fill: grey;
}
</style>
