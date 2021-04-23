<template>
  <div
    class="footer-container"
    ref="background"
    :style="[
      settingByTemplate9[0].setting9Footer,
      settingByTemplate9[0].setting9General,
    ]"
    v-if="settingByTemplate9 && settingByTemplate9[0].setting9Footer"
  >
    <div
      class="footer-content"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate9 &&
            this.settingByTemplate9[0].setting9General &&
            this.settingByTemplate9[0].setting9General.fount_1
              ? this.settingByTemplate9[0].setting9General.fount_1
              : 'Poppins',
        },
      ]"
    >
      <div class="footer-content-items">
        <div class="footer-content-logo">
          <img
            class="footer-logo"
            v-lazy="
              `https://api2.komercia.co/logos/${this.dataStore.tienda.logo}`
            "
            alt=""
          />
        </div>
        <KoSocialNet :dataStore="dataStore"></KoSocialNet>
        <div class="footer-content-button">
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <nuxt-link :to="item.path" v-if="item.path" class="btn">
              {{ $t(`${item.name}`) }}
            </nuxt-link>
            <nuxt-link
              :to="item.href"
              v-else-if="item.href && listArticulos > 0"
              class="btn"
              >{{ $t(`${item.name}`) }}</nuxt-link
            >
          </div>
        </div>
      </div>
      <div class="content-Pliticas-Terminos">
        <button
          class="btn"
          @click="OpenModalPolitics"
          v-if="dataStore.politicas"
        >
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
    <div v-if="showModal">
      <div class="modal" v-if="dataStore.politicas">
        <KoTermsConditions :dataStore="dataStore"></KoTermsConditions>
      </div>
    </div>
  </div>
</template>

<script>
import KoSocialNet from '../../../components/template9/Ko-Social-Networks'
import KoTermsConditions from '../../../components/footers/ko-TermsAndConditions'

export default {
  components: {
    KoSocialNet,
    KoTermsConditions,
  },
  name: 'Ko-Footer-5',
  props: {
    dataStore: Object,
    settingByTemplate9: Array,
  },
  mounted() {
    if (this.settingByTemplate9 && this.settingByTemplate9[0].setting9Footer) {
      this.setLogo()
    }
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
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
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
        this.settingByTemplate9 &&
        this.settingByTemplate9[0].setting9Footer
      ) {
        let color = this.settingByTemplate9[0].setting9Footer[
          '--background_color_1'
        ]
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
    settingByTemplate9() {
      if (
        this.settingByTemplate9 &&
        this.settingByTemplate9[0].setting9Footer
      ) {
        let color = this.settingByTemplate9[0].setting9Footer[
          '--background_color_1'
        ]
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
  @apply flex flex-col justify-center items-center;
}
.footer-content {
  @apply flex flex-col justify-center items-center;
  margin-bottom: 10px;
}
.footer-content-items {
  @apply flex flex-col justify-center items-center w-full mb-10 mt-40;
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
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
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
