<template>
  <div class="footer-container" ref="background" :style="settingByTemplate">
    <KoNewsLetter></KoNewsLetter>
    <div class="footer-content">
      <div class="footer-content-items">
        <div class="footer-content-logo">
          <img
            class="footer-logo"
            src="https://api2.komercia.co/logos/582-Txm0318.png"
            alt=""
          />
        </div>
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
        <KoSocialNet :dataStore="dataStore"></KoSocialNet>
      </div>
      <div class="madebyKomercia">
        <a
          href="https://komercia.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png"
            v-if="logo == true"
            class="logo2"
            alt="Logo Img"
          />
          <img
            src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png"
            v-else
            class="logo2"
            alt="Logo Img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import KoNewsLetter from '../../../components/template9/Ko-Newsletter'
import KoSocialNet from '../../../components/template9/Ko-Social-Networks'
export default {
  components: {
    KoNewsLetter,
    KoSocialNet,
  },
  name: 'Ko-Footer-1',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    if (this.settingByTemplate) {
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
      logo: null,
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
  },
  methods: {
    setLogo() {
      let color = getComputedStyle(this.$refs.background).getPropertyValue(
        '--background_color_1'
      )
      let colorArray = color.split(',')
      let colorInt = parseInt(colorArray[2])
      if (colorInt > 50) {
        this.logo = true
      } else {
        this.logo = false
      }
    },
  },
  watch: {
    settingByTemplate(value) {
      let colorArray = value.split(',')
      let colorInt = parseInt(colorArray[2])
      if (colorInt > 50) {
        this.logo = true
      } else {
        this.logo = false
      }
    },
  },
}
</script>

<style scoped>
.footer-container {
  @apply flex flex-col justify-center items-center;
  background-color: #f8f8f8;
}
.footer-content {
  @apply flex flex-col justify-center items-center;
  margin-bottom: 10px;
}
.footer-content-items {
  @apply flex flex-col justify-center items-center w-full my-2;
}
.footer-logo {
  @apply object-contain max-h-16;
}
.footer-content-button {
  @apply w-full flex flex-wrap gap-4 justify-center items-center mt-8;
}
.btn {
  margin-right: 15px;
  transition: all 0.1s ease;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  font-size: 14px;
  color: #303030;
  font-weight: 600;
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
.madebyKomercia {
  @apply mt-4;
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
