<template>
  <div class="wrapper-footer" ref="background" :style="settingByTemplate">
    <div
      :style="{
        '--font-style':
          this.settingByTemplate && this.settingByTemplate.tipo_letra
            ? this.settingByTemplate.tipo_letra
            : 'Roboto',
      }"
      class="contenedor"
    >
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
            rel="noreferrer noopener"
          >
            <div class="icon" :is="item.icon" />
          </a>
        </div>
      </div>
      <div class="footer-item-secciones">
        <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
          <nuxt-link v-if="item.path" :to="item.path" class="text-secciones">
            {{ $t(`${item.name}`) }}
          </nuxt-link>
          <nuxt-link
            v-if="item.href && listArticulos > 0"
            :to="item.href"
            class="text-secciones"
          >
            {{ $t(`${item.name}`) }}
          </nuxt-link>
        </div>
      </div>
    </div>
    <div
      :style="{
        '--font-style':
          this.settingByTemplate && this.settingByTemplate.tipo_letra
            ? this.settingByTemplate.tipo_letra
            : 'Roboto',
      }"
      class="under-footer"
    >
      <button
        class="contenedor-term-con"
        v-if="dataStore.politicas"
        @click="OpenModalPolitics"
      >
        <p>{{ $t('footer_politicasyterminos') }}</p>
      </button>
      <div class="separator"></div>
      <p v-if="this.showLogo">
        {{ $t('footer_desarrollado') }}
      </p>
      <a
        v-if="this.showLogo"
        href="https://komercia.co/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img
          width="120"
          loading="lazy"
          v-lazy="
            `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`
          "
          v-if="logo"
          class="logo2"
          alt="Logo Img"
        />
        <img
          width="120"
          loading="lazy"
          v-lazy="
            `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png`
          "
          v-else
          class="logo2"
          alt="Logo Img"
        />
      </a>
      <nuxt-link to="/" class="wrapper-logo-tablada" v-if="!this.showLogo">
        <img
          width="120"
          loading="lazy"
          v-lazy="
            `${this.$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`
          "
          class="logo-tablada"
          alt="Logo Img"
        />
      </nuxt-link>
    </div>
    <div
      :style="{
        '--font-style':
          this.settingByTemplate && this.settingByTemplate.tipo_letra
            ? this.settingByTemplate.tipo_letra
            : 'Roboto',
      }"
      v-if="showModal"
    >
      <div class="modal" v-if="dataStore.politicas">
        <KoTermsConditions :dataStore="dataStore"></KoTermsConditions>
      </div>
    </div>
  </div>
</template>

<script>
import KoTermsConditions from '../ko-TermsAndConditions'

export default {
  name: 'Ko-Footer-1',
  components: {
    KoTermsConditions,
  },
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    if (
      this.settingByTemplate &&
      this.settingByTemplate['--background_color_1']
    ) {
      this.setLogo()
    }
    if (
      this.dataStore.tienda.id_tienda == 5574 ||
      this.dataStore.tienda.id_tienda == 5347 ||
      this.dataStore.tienda.id_tienda == 6369
    ) {
      this.showLogo = false
    }
  },
  data() {
    return {
      showLogo: true,
      logo: true,
      secciones: [
        {
          name: 'footer_inicio',
          path: '/',
        },
        {
          name: 'footer_carrito',
          path: '/cart',
        },
        {
          name: 'footer_contacto',
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
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
      this.links[4].link = this.dataStore.tienda.red_tiktok
    },
    settingByTemplate(value) {
      if (value['--background_color_1']) {
        let color = value['--background_color_1']
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
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background_color_1);
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 10px;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding: 40px 30px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer-item-secciones {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
}
.text-secciones {
  font-size: 16px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  margin-right: 10px;
  /* text-align: center; */
}
.text-secciones:hover {
  color: var(--color_hover_text);
}
.content-items-iconos {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.icon {
  margin-right: 10px;
  font-size: 30px;
  color: var(--color_icon);
  fill: var(--color_icon);
}
.icon:hover {
  color: var(--btnhover);
  fill: var(--btnhover);
}
.text-top-bold {
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  font-weight: bold;
}
.under-footer {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
}
.under-footer p {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
}
.contenedor-term-con {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.contenedor-term-con p {
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_icon);
  cursor: pointer;
}
.separator {
  height: 1.1px;
  width: 100%;
  max-width: 400px;
  opacity: 0.5;
  border: solid 1px var(--color_icon);
  background: var(--color_icon);
  margin-bottom: 10px;
}
.logo2 {
  width: 100px;
  opacity: 0.7;
}
.modal {
  padding-top: 200px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 top-0 overflow-auto;
}
.wrapper-logo-tablada {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.logo-tablada {
  max-height: 74px;
  object-fit: contain;
  object-position: left;
}
@media (max-width: 768px) {
  .contenedor {
    padding: 60px 20px 10px;
  }
}
@media (max-width: 600px) {
  #modal-toggle:checked ~ .modal-backdrop {
    opacity: 0;
  }
  .contenedor {
    padding: 20px 10px 10px;
  }
  .modal-content {
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
  }
  .separator {
    max-width: 300px;
  }
  .under-footer {
    margin-bottom: 28px;
  }
  .under-footer p {
    font-size: 16px;
    text-align: center;
  }
}
</style>
