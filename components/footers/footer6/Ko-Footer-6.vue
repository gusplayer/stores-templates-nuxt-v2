<template>
  <div class="footer-container" ref="background" :style="settingByTemplate">
    <div class="footer-content">
      <div class="footer-content-items">
        <div class="footer-content-tienda">
          <div class="content-image">
            <img
              class="img-logo"
              src="https://api2.komercia.co/logos/582-Txm0318.png"
              alt="Logo"
            />
          </div>
          <div class="content-direction">
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
                <KoSocialNet :dataStore="dataStore"></KoSocialNet>
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
            <KoSocialNet :dataStore="dataStore"></KoSocialNet>
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
          <KoNewsLetter></KoNewsLetter>
        </div>
      </div>
      <div class="footer-content-newsLetters-hid">
        <KoNewsLetter></KoNewsLetter>
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
import KoNewsLetter from '../../../components/template10/Ko-Newsletter'
import KoSocialNet from '../../../components/template10/Ko-Social-Networks'
export default {
  components: {
    KoNewsLetter,
    KoSocialNet,
  },
  name: 'Ko-Footer-6',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    if (this.settingByTemplate) {
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
          panel.style.maxHeight = panel.scrollHeight + 'px'
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
  border-color: #eee;
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
  border-color: #eee;
  @apply w-full flex justify-center items-center border-t-2;
}
.logo2 {
  width: 100px;
  opacity: 0.5;
}
.txt-direction,
.txt-number,
.txt-email,
.btn {
  color: #222;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  @apply pb-20;
}
.txt-btns {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  font-size: 15px;
  @apply w-auto mb-5 transition-all ease-in duration-0.2;
}
.txt-btns:hover {
  color: #eb7025;
  @apply transition-all ease-in duration-0.2;
}
.accordion {
  color: #222;
  transition: 0.4s;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
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
@screen sm {
  .img-logo {
    @apply object-contain h-90;
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
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
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
    font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
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
