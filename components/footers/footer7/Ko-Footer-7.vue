<template>
  <div
    class="wrapper-footer"
    ref="background"
    :style="[
      settingByTemplate11[0].setting11Footer,
      settingByTemplate11[0].setting11General,
    ]"
  >
    <div
      class="content-footer"
      :style="[
        {
          '--font-style-1':
            this.settingByTemplate11 &&
            this.settingByTemplate11[0].setting11General &&
            this.settingByTemplate11[0].setting11General.fount_1
              ? this.settingByTemplate11[0].setting11General.fount_1
              : 'Roboto',
        },
      ]"
    >
      <KoNewsLetter
        :newsletter="settingByTemplate11[0].newsletter"
      ></KoNewsLetter>
      <div class="content-footer-items">
        <div class="content-items-sm">
          <div class="content-store-sm">
            <div class="info-store-sm">
              <button class="accordion btn">Información de la tienda</button>
              <div class="footer-content-tienda panel">
                <div class="content-direction">
                  <p class="txt-direction txt">
                    {{ this.dataStore.geolocalizacion[0].direccion }}
                  </p>
                </div>
                <div class="content-number">
                  <p class="txt-number txt">
                    {{ this.dataStore.tienda.telefono }}
                  </p>
                </div>
                <div class="content-email">
                  <p class="txt-email txt">
                    {{ this.dataStore.tienda.email_tienda }}
                  </p>
                </div>
              </div>
            </div>
            <div class="info-networks">
              <button class="accordion btn">Siguenos</button>
              <KoSocialNet
                :footerIcon="this.settingByTemplate11[0].setting11Footer"
                :dataStore="dataStore"
                class="panel"
              ></KoSocialNet>
            </div>
            <div class="info-legal-sm">
              <button
                class="btn-legal btn"
                v-if="dataStore.politicas"
                @click="OpenModalPolitics"
              >
                {{ $t('footer_politicasyterminos') }}
              </button>
            </div>
          </div>
        </div>
        <div class="content-items-lg">
          <div class="info-btn-footer gap-2">
            <img
              class="img-logo"
              :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`"
              alt="Logo"
            />
            <div class="content-direction">
              <p class="txt-direction txt">
                {{ this.dataStore.geolocalizacion[0].direccion }}
              </p>
            </div>
            <div class="content-number">
              <p class="txt-number txt">
                {{ this.dataStore.tienda.telefono }}
              </p>
            </div>
            <div class="content-email">
              <p class="txt-email txt">
                {{ this.dataStore.tienda.email_tienda }}
              </p>
            </div>
            <div class="info-networkss">
              <KoSocialNet
                :footerIcon="this.settingByTemplate11[0].setting11Footer"
                :dataStore="dataStore"
              ></KoSocialNet>
            </div>
          </div>
          <div class="info-btn-footer">
            <p class="btn">Enlaces</p>
            <div
              v-for="(item, index) in secciones"
              :key="`${index}${item.name}`"
            >
              <nuxt-link :to="item.path" v-if="item.path" class="btns">
                {{ $t(`${item.name}`) }}
              </nuxt-link>
              <nuxt-link
                :to="item.href"
                v-else-if="item.href && listArticulos > 0"
                class="btns"
              >
                {{ $t(`${item.name}`) }}
              </nuxt-link>
            </div>
          </div>
          <div class="info-btn-footer">
            <p class="btn">Nuestra empresa</p>
            <button
              class="btn-legal btns"
              v-if="dataStore.politicas"
              @click="OpenModalPolitics"
            >
              {{ $t('footer_politicasyterminos') }}
            </button>
          </div>
        </div>
      </div>
      <div
        class="empty"
        v-if="this.settingByTemplate11[0].setting11Footer.watermark"
      />
      <div
        class="madebyKomercia"
        v-if="this.settingByTemplate11[0].setting11Footer.watermark"
      >
        <p class="txt-devBy">{{ $t('footer_desarrollado') }}</p>
        <a
          href="https://komercia.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            v-lazy="
              `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`
            "
            class="logo2"
            alt="Logo Img"
          />
        </a>
      </div>
      <div v-if="showModal">
        <div class="modal" v-if="dataStore.politicas">
          <KoTermsConditions :dataStore="dataStore"></KoTermsConditions>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KoNewsLetter from '../../../components/template11/ko-newsletter'
import KoSocialNet from '../../../components/template11/ko-socialnet'
import KoTermsConditions from '../../../components/footers/ko-TermsAndConditions'
export default {
  components: {
    KoNewsLetter,
    KoSocialNet,
    KoTermsConditions,
  },
  name: 'Ko-Footer-6',
  props: {
    dataStore: Object,
    settingByTemplate11: Array,
  },
  mounted() {
    if (
      this.settingByTemplate11 &&
      this.settingByTemplate11[0].setting11Footer
    ) {
      this.setLogo()
    }
    var acc = document.getElementsByClassName('accordion')
    var i
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener('click', function () {
        this.classList.toggle('active')
        var panel = this.nextElementSibling
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null
        } else {
          panel.style.maxHeight = panel.scrollHeight + 10 + 'px'
        }
      })
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
    showModal() {
      return this.$store.state.modalpolitics05
    },
  },
  methods: {
    OpenModalPolitics() {
      this.$store.state.modalpolitics05 = true
    },
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
    settingByTemplate9() {
      if (
        this.settingByTemplate11 &&
        this.settingByTemplate11[0].setting11Footer
      ) {
        let color =
          this.settingByTemplate11[0].setting11Footer['--background_color_1']
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
.wrapper-footer {
  background: var(--background_color_1);
  @apply w-full flex justify-center items-center;
}
.content-footer {
  background: var(--background_color_1);
  @apply w-full flex flex-col justify-center items-center;
}
.content-footer-items {
  max-width: 1200px;
  @apply w-full flex flex-col justify-center items-center;
}
.modal {
  padding-top: 200px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
}
.empty {
  background-color: var(--color_border);
  @apply w-full h-1 flex flex-col justify-center items-center;
}
@screen sm {
  .content-items-sm {
    @apply w-full flex flex-col justify-center items-center;
  }
  .content-store-sm {
    @apply w-9/0 flex flex-col justify-center items-start;
  }
  .content-direction,
  .content-number,
  .content-email {
    @apply w-full flex flex-col justify-center items-start;
  }
  .info-store-sm,
  .info-legal-sm,
  .info-networks {
    @apply w-full flex flex-col justify-center items-start;
  }

  .btn {
    color: var(--color_title);
    font-size: 18px;
    font-family: var(--font-style-1) !important;
    @apply pb-10;
  }
  .txt {
    color: var(--color_text);
    font-size: 14px;
    font-family: var(--font-style-1) !important;
  }
  .btns:hover {
    color: #fff;
  }
  .btn-legal {
    @apply w-full flex flex-col justify-center items-start text-left;
  }
  .accordion {
    transition: 0.4s;
    @apply w-full text-left mb-0 border-none outline-none cursor-pointer;
  }
  .accordion:after {
    content: '\276F';
    color: #fff;
    @apply font-bold float-right transition-all ease-in duration-0.2;
  }
  .active:after {
    transform: rotate(90deg);
    @apply transition-all ease-in duration-0.2;
  }
  .panel {
    transition: 0.4s ease-out;
    @apply w-full max-h-0 justify-start items-center mb-10 overflow-hidden;
  }
  .content-items-lg {
    @apply hidden;
  }
  .madebyKomercia {
    @apply w-full flex flex-col justify-center items-center py-20;
  }
  .txt-devBy {
    font-size: 14px;
    color: var(--color_text);
  }
  .logo2 {
    width: 100px;
    opacity: 0.5;
  }
}
@screen lg {
  .content-items-sm {
    @apply hidden;
  }
  .content-items-lg {
    @apply w-9/0 grid grid-cols-3 gap-4 justify-center items-start;
  }
  .img-logo {
    max-width: var(--with_logo);
    @apply w-full object-contain;
  }
  .content-image {
    @apply w-full flex flex-col justify-start items-center mb-20;
  }
  .info-btn-footer {
    @apply w-full flex flex-col justify-center items-start;
  }
  .btns {
    color: var(--color_text);
    font-size: 14px;
    font-family: var(--font-style-1) !important;
  }
  .btns:hover {
    color: #fff;
  }
}
@media (min-width: 1200px) {
  .content-items-lg {
    max-width: 1200px;
    @apply w-8/0;
  }
  .content-footer-items {
    @apply pt-40 pb-60;
  }
}
</style>
