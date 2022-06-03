<template>
  <div class="content-article">
    <div class="bannerBlog">
      <div class="crumb">
        <nuxt-link
          :to="{
            path: this.stateWapiME
              ? `/wa/${dataStore.tienda.id_tienda}/blog`
              : `/`,
          }"
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
      <div class="w-full flex justify-start">
        <div class="content-img">
          <img
            class="img-aritcle"
            :src="dataArticle.imagen_principal_url"
            alt="Image-Article"
          />
        </div>
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
  name: 'Ko-articulo-wa',
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
  @apply w-full flex flex-col justify-start items-center;
}
.content-item-article {
  overflow-y: auto;
  height: calc(100vh - 55px);
  box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
  @apply px-20;
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
.editor {
  width: 100%;
}
.editor >>> .el-tiptap-editor > .el-tiptap-editor__content {
  border: none;
  padding: 0px 5px;
  background-color: transparent;
}
.editor >>> .el-tiptap-editor__menu-bubble {
  display: none;
}
.editor >>> .el-tiptap-editor__content h1 {
  font-size: 2em;
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content h2 {
  font-size: 1.5em;
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content h3 {
  font-size: 1.17em;
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content h4 {
  font-size: 1.12em;
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content h5 {
  font-size: 0.83em;
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content p {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content span {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content blockquote {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content code {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content ul {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content ol {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content li {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content pre {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content strong {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content em {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content s {
  font-family: 'Poppins', sans-serif !important;
}
.editor >>> .el-tiptap-editor__content .image-view__body__image {
  cursor: none;
  pointer-events: none;
}
.editor >>> .el-popper.el-tiptap-image-popper {
  display: none;
}
@screen sm {
  .bannerBlog {
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    background-color: #fff;
    max-width: 900px;
    @apply w-full flex justify-center items-center py-20 border-b;
  }
  .crumb {
    @apply justify-center items-center;
  }
  .content-item-article {
    @apply w-full flex flex-col justify-start items-center;
  }
  .tittle-blog {
    font-size: 16px;
    color: #191919;
    letter-spacing: 0.3px;
    @apply w-full flex flex-col justify-center items-start font-bold my-20 leading-22;
  }
  .content-img {
    @apply w-full flex flex-col justify-start items-start mb-20;
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
}
@screen md {
  .content-img {
    width: 100%;
    max-width: 350px;
  }
}
</style>
