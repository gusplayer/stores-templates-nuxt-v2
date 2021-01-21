<template>
  <div class="footer-container">
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
    </div>
  </div>
</template>

<script>
import KoSocialNet from '../../../components/template7/Ko-Social-Networks'
export default {
  components: {
    KoSocialNet,
  },
  name: 'Ko-Footer-1',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
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
          name: 'header_blog',
          href: '/blog',
        },
      ],
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos.length
    },
  },
}
</script>

<style scoped>
.footer-container {
  @apply flex justify-center items-center bg-footerbg bg-auto bg-center bg-no-repeat;
  height: 322px;
}
.footer-content {
  @apply w-9/5 flex grid grid-cols-3 mx-6;
}
.footer-content-image {
  @apply object-cover;
}
.footer-img {
  @apply transform rotate-180;
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
  @apply mx-2 font-semibold text-gray-textHeader uppercase tracking-wider;
}
.btn:hover {
  @apply text-red-btnhoverHeader;
}
.footer-content-icons {
  @apply w-full flex flex-wrap justify-center items-center;
}
.icon-socialmedia {
  @apply flex flex-wrap mx-2;
}
.btn {
  font-family: 'Lora', serif !important ;
}
@screen sm {
  .footer-content-image {
    @apply sr-only;
  }
  .footer-content {
    @apply w-full flex;
  }
  .btn {
    @apply text-sm;
  }
  .icon-socialmedia {
    @apply w-5;
  }
}
@screen lg {
  .footer-content-image {
    @apply not-sr-only;
  }
}
</style>
