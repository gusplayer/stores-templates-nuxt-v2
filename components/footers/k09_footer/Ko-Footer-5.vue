<template>
  <footer
    v-if="settingByTemplate9 && settingByTemplate9[0].setting9Footer"
    ref="background"
    class="footer-container"
    :style="[
      settingByTemplate9[0].setting9Footer,
      settingByTemplate9[0].setting9General,
      {
        '--font-style-1':
          settingByTemplate9[0]?.setting9General?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <div class="footer-content">
      <div class="footer-content-items">
        <div class="footer-content-logo">
          <img
            v-lazy="`${this.$store.state.urlKomercia}/logos/${dataStore.logo}`"
            class="footer-logo"
            alt="logo_tienda"
          />
        </div>
        <KoSocialNet
          :data-store="dataStore"
          :setting9-footer="settingByTemplate9[0].setting9Footer"
        />
        <div class="footer-content-button">
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <nuxt-link :to="item.path" v-if="item.path" class="btn">
              {{ $t(`${item.name}`) }}
            </nuxt-link>
            <nuxt-link
              v-else-if="item.href && stateListBLogs"
              :to="item.href"
              class="btn"
            >
              {{ $t(`${item.name}`) }}
            </nuxt-link>
          </div>
        </div>
      </div>
      <div class="content-Pliticas-Terminos">
        <button v-if="storePolicies" class="btn" @click="OpenModalPolitics">
          {{ $t('footer_politicasyterminos') }}
        </button>
      </div>
      <div class="separator"></div>
      <div class="madebyKomercia">
        <p class="txt-devBy">{{ $t('footer_desarrollado') }}</p>
        <a
          href="https://komercia.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            v-if="logo"
            v-lazy="
              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`
            "
            class="logo2"
            alt="Logo Img"
          />
          <img
            v-else
            v-lazy="
              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`
            "
            class="logo2"
            alt="Logo Img"
          />
        </a>
      </div>
    </div>
    <div v-if="showModal">
      <div v-if="showModal && storePolicies" class="modal">
        <KoTermsConditions :store-policies="storePolicies" />
      </div>
    </div>
  </footer>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'K09Footer',
  components: {
    KoSocialNet: () => import('@/components/template9/k09-SocialNetworks.vue'),
    KoTermsConditions: () =>
      import('@/components/footers/ko-TermsAndConditions.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate9: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      secciones: [
        {
          name: 'header_inicio',
          path: '/',
        },
        {
          name: 'header_productos',
          path: '/productos',
        },
        {
          name: 'header_contacto',
          path: '/contacto',
        },
        {
          name: 'footer_micompra',
          path: '/micompra',
        },
        {
          name: 'header_blog',
          href: '/blog',
        },
      ],
      logo: true,
    }
  },
  computed: {
    ...mapState(['stateListBLogs', 'storePolicies']),
    ...mapState({
      showModal: (state) => state.modalpolitics05,
    }),
  },
  watch: {
    settingByTemplate9() {
      if (
        this.settingByTemplate9 &&
        this.settingByTemplate9[0].setting9Footer
      ) {
        let color =
          this.settingByTemplate9[0].setting9Footer['--background_color_1']
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
  mounted() {
    if (this.settingByTemplate9 && this.settingByTemplate9[0].setting9Footer) {
      this.setLogo()
    }
  },
  methods: {
    OpenModalPolitics() {
      this.$store.state.modalpolitics05 = true
    },
    setLogo() {
      if (
        this.settingByTemplate9 &&
        this.settingByTemplate9[0].setting9Footer
      ) {
        let color =
          this.settingByTemplate9[0].setting9Footer['--background_color_1']
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
}
</script>

<style scoped>
.footer-container {
  background: var(--background_color_1);
  @apply flex flex-col justify-center items-center pb-30 md:pb-20;
}
.footer-content {
  @apply flex flex-col justify-center items-center;
}
.footer-content-items {
  @apply flex flex-col justify-center items-center w-full mb-10 mt-20;
}
.footer-logo {
  max-width: var(--with_logo);
  @apply object-contain;
}
.footer-content-button {
  @apply w-full flex flex-wrap gap-4 justify-center items-center mt-32 mb-10;
}
.btn {
  transition: all 0.1s ease;
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1) !important;
  font-size: 14px;
  color: var(--color_text);
  @apply font-semibold mx-8;
}
.btn:hover {
  color: #000;
  transition: all 0.1s ease;
  border-bottom: 2px solid #000;
}
.logo2 {
  width: 100px;
  opacity: 0.5;
}
.separator {
  max-width: 400px;
  border: solid 1px var(--color_icon_bg);
  background: var(--color_icon_bg);
  @apply w-full h-2 my-10;
}
.madebyKomercia {
  @apply w-full flex flex-col justify-center items-center mb-10;
}
.txt-devBy {
  font-size: 14px;
  color: var(--color_text);
}
.modal {
  padding-top: 200px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
  @apply w-full h-full fixed left-0 top-0 overflow-auto;
}
@media (max-width: 600px) {
  .separator {
    max-width: 300px;
  }
}
@screen sm {
  .footer-content {
    @apply w-full flex;
  }
  .btn {
    @apply text-sm;
  }
}
@screen md {
  .btn {
    font-size: 16px;
  }
}
@media (min-width: 1192px) {
  .footer-content {
    width: 1192px;
  }
}
</style>
