<template>
  <div
    ref="background"
    class="wrapper-footer w-full flex justify-center items-center"
    :style="[
      settingByTemplate14[0].setting14Footer,
      settingByTemplate14[0].setting14General,
      {
        '--font-style-1':
          settingByTemplate14[0].setting14General?.fount_1 ?? 'Poppins',
      },
    ]"
  >
    <div class="content-footer">
      <div
        class="w-full max-w-7xl flex flex-col justify-center items-center pt-50 pb-10 md:pb-50"
      >
        <div class="content-items-sm">
          <div class="content-store-sm">
            <div class="info-store-sm mb-20">
              <p class="btn">Enlaces</p>
              <div class="w-full flex flex-wrap gap-x-4 gap-y-3">
                <div
                  v-for="(item, index) in secciones"
                  :key="`${index}${item.name}`"
                >
                  <nuxt-link
                    v-if="item.path"
                    :to="item.path"
                    class="txt-number txt"
                  >
                    {{ $t(`${item.name}`) }}
                  </nuxt-link>
                  <nuxt-link
                    v-else-if="item.href && listArticulos > 0"
                    :to="item.href"
                    class="txt-number txt"
                  >
                    {{ $t(`${item.name}`) }}
                  </nuxt-link>
                </div>
              </div>
            </div>
            <div class="info-store-sm mb-20">
              <p class="btn">Información de la tienda</p>
              <div class="footer-content-tienda">
                <div class="content-direction">
                  <p
                    v-if="dataStore.geolocalizacion.length"
                    class="txt-direction txt"
                  >
                    {{ dataStore.geolocalizacion[0].direccion }}
                  </p>
                </div>
                <div class="content-number">
                  <p v-if="dataStore.tienda.telefono" class="txt-number txt">
                    {{ dataStore.tienda.telefono }}
                  </p>
                </div>
                <div class="content-email">
                  <p v-if="dataStore.tienda.email_tienda" class="txt-email txt">
                    {{ dataStore.tienda.email_tienda }}
                  </p>
                </div>
              </div>
            </div>
            <div class="info-networks mb-20">
              <p class="btn">Síguenos</p>
              <KoSocialNet
                :footer-icon="settingByTemplate14[0].setting14Footer"
                :data-store="dataStore"
              />
            </div>
            <div class="info-legal-sm">
              <button
                v-if="dataStore.politicas"
                class="btn-legal btn"
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
              :src="`${$store.state.urlKomercia}/logos/${dataStore.tienda.logo}`"
              alt="Logo"
            />
            <div class="content-direction">
              <p
                v-if="dataStore.geolocalizacion.length"
                class="txt-direction txt"
              >
                {{ dataStore.geolocalizacion[0].direccion }}
              </p>
            </div>
            <div class="content-number">
              <p v-if="dataStore.tienda.telefono" class="txt-number txt">
                {{ dataStore.tienda.telefono }}
              </p>
            </div>
            <div class="content-email">
              <p v-if="dataStore.tienda.email_tienda" class="txt-email txt">
                {{ dataStore.tienda.email_tienda }}
              </p>
            </div>
            <div class="info-networkss">
              <KoSocialNet
                :footer-icon="settingByTemplate14[0].setting14Footer"
                :data-store="dataStore"
              />
            </div>
          </div>
          <div class="info-btn-footer">
            <p class="btn">Enlaces</p>
            <div
              v-for="(item, index) in secciones"
              :key="`${index}${item.name}`"
            >
              <nuxt-link v-if="item.path" :to="item.path" class="btns">
                {{ $t(`${item.name}`) }}
              </nuxt-link>
              <nuxt-link
                v-else-if="item.href && listArticulos > 0"
                :to="item.href"
                class="btns"
              >
                {{ $t(`${item.name}`) }}
              </nuxt-link>
            </div>
          </div>
          <div class="info-btn-footer">
            <p class="btn">Nuestra empresa</p>
            <button
              v-if="dataStore.politicas"
              class="btn-legal btns"
              @click="OpenModalPolitics"
            >
              {{ $t('footer_politicasyterminos') }}
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="settingByTemplate14[0].setting14Footer.watermark"
        class="empty"
      />
      <div
        v-if="settingByTemplate14[0].setting14Footer.watermark"
        class="madebyKomercia"
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
        <div v-if="dataStore.politicas" class="modal">
          <KoTermsConditions :data-store="dataStore" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'KoFooter9',
  components: {
    KoSocialNet: () => import('@/components/template11/ko-socialnet.vue'),
    KoTermsConditions: () =>
      import('@/components/footers/ko-TermsAndConditions.vue'),
  },
  props: {
    dataStore: {
      type: Object,
      required: true,
    },
    settingByTemplate14: {
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
  watch: {
    settingByTemplate14() {
      if (
        this.settingByTemplate14 &&
        this.settingByTemplate14[0].setting14Footer
      ) {
        let color =
          this.settingByTemplate14[0].setting14Footer['--background_color_1']
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
    if (
      this.settingByTemplate14 &&
      this.settingByTemplate14[0].setting14Footer
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
}
</script>

<style scoped>
.wrapper-footer {
  background: var(--background_color_1);
}
.content-footer {
  background: var(--background_color_1);
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
    color: var(--hover_text);
  }
  .btn-legal {
    @apply w-full flex flex-col justify-center items-start text-left;
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
  .info-btn-footer {
    @apply w-full flex flex-col justify-center items-start;
  }
  .btns {
    color: var(--color_text);
    font-size: 14px;
    font-family: var(--font-style-1) !important;
  }
  .btns:hover {
    color: var(--hover_text);
  }
}
@media (min-width: 1200px) {
  .content-items-lg {
    @apply w-full max-w-7xl;
  }
}
</style>
