<template>
  <div class="wrapper-footer">
    <div class="contenedor">
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
            :style="`color: ${
              settingByTemplate && settingByTemplate.color_primario
                ? settingByTemplate.color_primario
                : '#25D366'
            };`"
          >
            <div :is="item.icon" class="icon-wapi" />
          </a>
        </div>
      </div>
      <div class="footer-item-secciones">
        <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
          <nuxt-link
            v-if="item.path"
            :to="`/wa/${dataStore.tienda.id_tienda}${item.path}`"
            class="text-secciones"
          >
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
      <button
        class="text-politics"
        @click="OpenModalPolitics"
        v-if="dataStore.politicas"
      >
        {{ $t('footer_politicasyterminos') }}
      </button>

      <div v-if="showModal">
        <div class="modal" v-if="dataStore.politicas">
          <KoTermsConditions :dataStore="dataStore" />
        </div>
      </div>
      <div
        class="under-footer"
        v-if="
          dataStore.entidades.length &&
          dataStore.entidades[0].id == 17 &&
          settingByTemplate.watermark == 0
        "
      >
        <p>{{ $t('footer_desarrollado') }}</p>
        <a
          href="https://komercia.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            v-lazy="
              `https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_500,q_auto:best,f_auto/v1620052318/midasSoluciones/LOGO_CHICO_1_ezxrjw.png`
            "
            class="logo-midasoluciones"
            alt="Logo Img"
          />
        </a>
      </div>
      <div v-else>
        <div class="under-footer" v-if="settingByTemplate.watermark == 0">
          <p>{{ $t('footer_desarrollado') }}</p>
          <a
            href="https://komercia.co/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              v-lazy="
                `https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png`
              "
              class="logo-wapi"
              alt="Logo Img"
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KoTermsConditions from '../../ko-TermsAndConditions'

export default {
  name: 'Ko-Footer-Wa',
  components: {
    KoTermsConditions,
  },
  props: {
    dataStore: Object,
    settingByTemplate: Object,
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
      ],
      secciones: [
        {
          name: 'footer_inicio',
          path: '/',
        },
        {
          name: 'footer_micompra',
          path: '/micompra',
        },
        // {
        //   name: 'header_blog',
        //   href: '/blog',
        // },
      ],
    }
  },
  computed: {
    showModal() {
      return this.$store.state.modalpolitics05
    },
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
  },
  methods: {
    OpenModalPolitics() {
      this.$store.state.modalpolitics05 = true
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
  background: white;
  box-sizing: border-box;
  flex-direction: column;
}
.contenedor {
  width: 100%;
  border-top: 1px solid rgba(213, 213, 213, 0.473);
  padding: 20px 30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.text-politics {
  margin-bottom: 2px;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: black;
}
.text-politics:hover {
  color: var(--color_hover_text);
}
.footer-item-secciones {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.text-secciones {
  font-size: 14px;
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
  color: black;
}
.logo-wapi {
  width: 100px;
  opacity: 0.7;
}
.logo-midasoluciones {
  width: 150px;
  opacity: 0.7;
}
.content-items-iconos {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.icon-wapi {
  cursor: pointer;
  margin-right: 10px;
  font-size: 20px;
}
.icon-wapi:hover {
  color: #445a64;
}
.modal {
  padding-top: 50px;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
  @apply w-full h-full fixed z-10 left-0 overflow-auto top-0;
}
</style>
