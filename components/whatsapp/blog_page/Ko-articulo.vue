<template>
  <div class="content-article">
    <div class="bannerBlog">
      <div class="crumb">
        <nuxt-link
          :to="
            this.stateWapiME ? `/wa/${dataStore.tienda.id_tienda}/blog` : `/`
          "
        >
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="separatorCrumb">/</p>
        <p class="txt-crumb s2">
          {{ $t('header_blog') }}
        </p>
      </div>
    </div>
    <div class="content-item-article">
      <p class="tittle-blog">{{ dataArticle.titulo }}</p>
      <div class="content-img">
        <img
          class="img-aritcle"
          v-lazy="dataArticle.imagen_principal_url"
          alt="Image-Article"
        />
      </div>
      <div class="content-data-article">
        <svg
          fill="#3a3a3a"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          version="1.1"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            d="M9,10V12H7V10H9M13,10V12H11V10H13M17,10V12H15V10H17M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5A2,2 0 0,1 5,3H6V1H8V3H16V1H18V3H19M19,19V8H5V19H19M9,14V16H7V14H9M13,14V16H11V14H13M17,14V16H15V14H17Z"
          />
        </svg>
        <p class="txt-created">{{ shippingCreated }}</p>
      </div>
      <div class="editor" v-if="dataArticle.contenido">
        <el-tiptap
          v-model="dataArticle.contenido"
          :extensions="extensions"
          :spellcheck="false"
          :readonly="true"
          :charCounterCount="false"
          :tooltip="false"
          :showMenubar="false"
          :bubble="false"
        />
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import extensions from '../../../mixins/elemenTiptap.vue'
export default {
  mixins: [extensions],
  name: 'Ko-articulo',
  mounted() {
    if (this.listArticulos.length) {
      this.searchIdForSlug()
    }
    if (this.dataArticle && this.dataArticle.created_at) {
      let dateCreated = this.dataArticle.created_at
      let resultCreated = dateCreated.split(' ')
      this.shippingCreated = resultCreated[0]
      let dateUpdate = this.dataArticle.updated_at
      let resultUpdate = dateUpdate.split(' ')
      this.shippingUpdated = resultUpdate[0]
    }
  },
  data() {
    return {
      dataArticle: {},
      shippingCreated: '',
      shippingUpdated: '',
    }
  },
  computed: {
    ...mapState(['dataStore', 'stateWapiME', 'listArticulos']),
  },
  methods: {
    searchIdForSlug() {
      let domain = this.$route.fullPath
      let result = domain.split('/')
      this.listArticulos.filter((product) => {
        if (product.slug === result[result.length - 1]) {
          this.dataArticle = product
        }
      })
    },
  },
  watch: {
    listArticulos() {
      this.searchIdForSlug()
    },
  },
}
</script>
<style scoped>
.content-article {
  max-width: 900px;
  height: calc(100vh);
  overflow-y: auto;
  @apply w-full flex flex-col justify-start items-center;
}
.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.separatorCrumb {
  font-size: 9px;
  color: #222;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-crumb {
  font-size: 15px;
  color: #222;

  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: #222;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #222;
  transition: all 0.25s ease;
}
@screen sm {
  .bannerBlog {
    max-width: 900px;
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20 border-b;
  }
  .crumb {
    @apply justify-center items-center;
  }
  .content-item-article {
    @apply w-9/0 flex flex-col justify-start items-center mb-20;
  }
  .tittle-blog {
    font-size: 16px;
    color: #191919;
    letter-spacing: 0.3px;
    @apply w-full flex flex-col justify-center items-start font-medium my-20 leading-22;
  }
  .content-img {
    @apply w-full flex flex-col justify-start items-center mb-20;
  }
  .img-article {
    @apply w-full h-auto;
  }
  .content-data-article {
    @apply w-full flex flex-row justify-start items-center mb-20;
  }
  .txt-created {
    font-size: 13px;
    color: #000;
    @apply font-normal capitalize;
  }
  .editor {
    @apply w-full max-w-full flex flex-col justify-center items-center overflow-hidden;
  }
}
@screen md {
  .content-img {
    width: 400px;
    max-width: 400px;
  }
}
@media (min-width: 900px) {
  .content-item-article {
    max-width: 900px;
    height: calc(100vh - 55px);
  }
}
</style>
