<template>
  <div
    class="footer-container"
    ref="background"
    :style="[
      settingByTemplate10[0].setting10Footer,
      settingByTemplate10[0].setting10General,
      {
        '--font-style-1':
          this.settingByTemplate10 &&
          this.settingByTemplate10[0].setting10General &&
          this.settingByTemplate10[0].setting10General.fount_1
            ? this.settingByTemplate10[0].setting10General.fount_1
            : 'Roboto',
      },
    ]"
  >
    <div class="footer-content">
      <div class="footer-content-items">
        <div class="footer-content-tienda">
          <div class="content-image">
            <img
              class="img-logo"
              :src="`${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
              alt="Logo"
            />
          </div>
          <div
            class="content-direction"
            v-if="
              this.dataStore &&
              this.dataStore.geolocalizacion &&
              this.dataStore.geolocalizacion.length
            "
          >
            <p class="txt-direction">
              {{ this.dataStore.geolocalizacion[0].direccion }}
            </p>
          </div>
          <div class="content-number">
            <p class="txt-number">
              {{ this.dataStore.tienda.telefono }}
            </p>
          </div>
          <div class="content-email">
            <p class="txt-email">
              {{ this.dataStore.tienda.email_tienda }}
            </p>
          </div>
          <div class="content-Pliticas-Terminos">
            <button
              class="txt-pol-term"
              v-if="dataStore.politicas"
              @click="OpenModalPolitics"
            >
              {{ $t('footer_politicasyterminos') }}
            </button>
          </div>
        </div>
        <div class="footer-content-itemsBtns">
          <div class="content-buttons">
            <div class="container-txt">
              <div class="content-txt-redes">
                <p class="txt-redes">Nuestras redes</p>
              </div>
              <div class="content-txt-btns">
                <p class="txt-btn">Enlaces</p>
              </div>
            </div>
            <div class="container-opt">
              <div class="footer-socialNetworks">
                <KoSocialNet
                  :dataStore="dataStore"
                  :setting10Footer="this.settingByTemplate10[0].setting10Footer"
                  :setting10General="
                    this.settingByTemplate10[0].setting10General
                  "
                />
              </div>
              <div class="footer-content-button">
                <div
                  v-for="(item, index) in secciones"
                  :key="`${index}${item.name}`"
                >
                  <nuxt-link :to="item.path" v-if="item.path" class="btn">
                    <p class="txt-btns">
                      {{ $t(`${item.name}`) }}
                    </p>
                  </nuxt-link>
                  <nuxt-link
                    :to="item.href"
                    v-else-if="item.href && listArticulos > 0"
                    class="btn"
                  >
                    <p class="txt-btns">
                      {{ $t(`${item.name}`) }}
                    </p>
                  </nuxt-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="footer-acordion-bttns">
          <button class="accordion">Nuestras redes</button>
          <div class="panel">
            <KoSocialNet
              :dataStore="dataStore"
              :setting10Footer="this.settingByTemplate10[0].setting10Footer"
              :setting10General="this.settingByTemplate10[0].setting10General"
            />
          </div>
          <button class="accordion">Enlaces</button>
          <div class="panel">
            <div
              v-for="(item, index) in secciones"
              :key="`${index}${item.name}`"
            >
              <nuxt-link :to="item.path" v-if="item.path" class="btn pb-5">
                <p class="txt-btns">
                  {{ $t(`${item.name}`) }}
                </p>
              </nuxt-link>
              <nuxt-link
                :to="item.href"
                v-else-if="item.href && listArticulos > 0"
                class="btn pb-5"
              >
                <p class="txt-btns">
                  {{ $t(`${item.name}`) }}
                </p>
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="footer-content-newsLetters">
          <KoNewsLetter
            :settingByTemplate10="this.settingByTemplate10"
            :dataStore="dataStore"
          />
        </div>
      </div>
      <div class="footer-content-newsLetters-hid">
        <KoNewsLetter
          :settingByTemplate10="this.settingByTemplate10"
          :dataStore="dataStore"
        />
      </div>
      <div
        class="madebyKomercia"
        v-if="settingByTemplate10[0].setting10Footer.watermark == true"
      >
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
    <!-- <KoTermsConditions class="modal" id="myModal"></KoTermsConditions> -->
  </div>
</template>

<script>
import KoNewsLetter from '../../../components/template10/Ko-Newsletter'
import KoSocialNet from '../../../components/template10/Ko-Social-Networks'
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
    settingByTemplate10: Array,
  },
  mounted() {
    if (
      this.settingByTemplate10 &&
      this.settingByTemplate10[0].setting10Footer
    ) {
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
    settingByTemplate10() {
      if (
        this.settingByTemplate10 &&
        this.settingByTemplate10[0].setting10Footer
      ) {
        let color =
          this.settingByTemplate10[0].setting10Footer['--background_color_1']
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
  border-color: var(--color_border);
  @apply w-full flex flex-col justify-center items-center border-t;
}
.footer-content {
  @apply w-full flex flex-col justify-center items-center;
}
.footer-content-items {
  @apply w-full grid grid-cols-3 gap-2 justify-center items-center;
}
.footer-content-itemsBtns {
  @apply w-full grid grid-cols-2 gap-4;
}
.madebyKomercia {
  border-color: var(--color_border);
  @apply w-full flex flex-col justify-center items-center border-t-2;
}
.txt-devBy {
  font-size: 14px;
  color: var(--color_text);
}
.logo2 {
  width: 100px;
  opacity: 0.5;
}
.txt-direction,
.txt-number,
.txt-email,
.btn {
  color: var(--color_text);
  font-family: var(--font-style-1) !important;
  @apply pb-20;
}
.txt-btns {
  font-family: var(--font-style-1) !important;
  font-size: 15px;
  @apply w-auto mb-5 transition-all ease-in duration-0.2;
}
.txt-btns:hover {
  color: var(--hover_text);
  @apply transition-all ease-in duration-0.2;
}
.accordion {
  color: #222;
  transition: 0.4s;
  font-family: var(--font-style-1) !important;
  @apply w-full text-left mb-0 border-none outline-none cursor-pointer;
}
.accordion:after {
  content: '\276F';
  color: #000;
  font-weight: bold;
  float: right;
  /* margin-left: 5px; */
  @apply transition-all ease-in duration-0.2;
}
.active:after {
  transform: rotate(90deg);
  @apply transition-all ease-in duration-0.2;
}
.panel {
  background-color: #fff;
  transition: 0.4s ease-out;
  @apply w-full max-h-0 justify-start items-center mt-10 mb-10 overflow-hidden;
}
.content-Pliticas-Terminos {
  @apply w-auto flex flex-col justify-start items-center;
}
.txt-pol-term {
  color: var(--color_text);
  font-size: 15px;
  font-family: var(--font-style-1) !important;
  @apply text-left;
}
.txt-pol-term:hover {
  color: var(--hover_text);
}
.modal {
  padding-top: 200px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
}
@screen sm {
  .img-logo {
    @apply object-contain object-left w-full;
  }
  .footer-content {
    @apply w-9/0;
  }
  .footer-content-items {
    @apply flex flex-col;
  }
  .footer-content-itemsBtns,
  .footer-content-newsLetters-hid {
    @apply hidden;
  }
  .footer-content-tienda {
    @apply w-full flex flex-col justify-center items-start mt-20 mb-30;
  }
  .footer-acordion-bttns {
    @apply w-full flex flex-col justify-start items-center mb-20;
  }
  .footer-content-newsLetters {
    @apply w-full flex flex-col justify-start items-center;
  }
  .accordion {
    font-size: 15px;
    @apply font-semibold;
  }
  .txt-direction,
  .txt-number,
  .txt-email {
    font-size: 15px;
    @apply mb-10;
  }
  .content-image {
    max-width: var(--with_logo);
    @apply w-full flex justify-center items-center mb-20;
  }
  .madebyKomercia {
    max-height: 91px;
    @apply h-91;
  }
}
@media (min-width: 425px) {
  .content-image {
    @apply justify-start items-center;
  }
}
@screen md {
  .container-txt,
  .container-opt {
    @apply w-full grid grid-cols-2 gap-4 justify-start items-center;
  }
  .container-txt {
    @apply mt-20;
  }
  .content-txt-redes,
  .content-txt-btns {
    color: var(--color_title);
    font-family: var(--font-style-1) !important;
    @apply mb-20;
  }
  .content-buttons {
    @apply w-full flex flex-col justify-center items-center;
  }
  .footer-content-items {
    @apply w-full grid grid-cols-2 gap-4 justify-center items-center;
  }
  .footer-content-itemsBtns {
    @apply flex justify-center items-start;
  }
  .footer-content-newsLetters-hid {
    @apply w-full flex flex-col justify-start items-center;
  }
  .footer-acordion-bttns {
    @apply hidden;
  }
  .footer-content-newsLetters {
    @apply hidden;
  }
  .footer-content-button {
    @apply w-auto;
  }
  .txt-redes,
  .txt-btn {
    font-size: 15px;
    font-family: var(--font-style-1) !important;
    @apply font-semibold;
  }
  .txt-direction,
  .txt-number,
  .txt-email {
    @apply mb-0;
  }
}
@screen mlg {
  .footer-content-items {
    @apply grid grid-cols-3 gap-4;
  }
  .footer-content-newsLetters {
    @apply flex mt-40;
  }
  .footer-content-newsLetters-hid {
    @apply hidden;
  }
  .footer-content-items {
    height: 433px;
    max-height: 433px;
  }
}
@media (min-width: 1400px) {
  .footer-content {
    width: 1400px;
  }
}
</style>
