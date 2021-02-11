<template>
  <div class="wrapper-blog">
    <div class="banner-blog">
      <div class="tittle-banner-blog">
        <p class="txt-banner">{{ dataStore.tienda.nombre }}</p>
        <p class="txt-banner" id="separator">{{ $t('header_blog') }}</p>
      </div>
    </div>
    <div class="container-article" v-if="dataArticle">
      <div class="content-blog">
        <nuxt-link to="/blog" class="content-back">
          <arrow-left-icon class="arrow-left"> </arrow-left-icon>
          <p>Regresar</p>
        </nuxt-link>
        <p class="title-blog">{{ dataArticle.titulo }}</p>
        <div class="content-date">
          <div class="flex-shrink-0">
            <a href="#">
              <img
                class="h-10 w-10 rounded-full"
                src="https://api2.komercia.co/users/user.jpg"
                alt=""
              />
            </a>
          </div>
          <div class="content-date-items">
            <p>{{ dataArticle.autor }}</p>
            <p>{{ this.shippingCreated }}</p>
          </div>
        </div>
        <div class="editor" v-if="dataArticle.contenido">
          <editor-content class="editor__content" :editor="editor" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Editor, EditorContent } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Image,
  Italic,
  Link,
  Table,
  TableHeader,
  TableCell,
  TableRow,
  Strike,
  Underline,
  History,
  Search,
} from 'tiptap-extensions'
export default {
  name: 'Ko-Blog',
  components: { EditorContent },
  props: {
    dataStore: Object,
  },
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
  beforeDestroy() {
    if (this.editor) {
      this.editor.destroy()
    }
  },
  data() {
    return {
      dataArticle: {},
      shippingCreated: '',
      shippingUpdated: '',
      editor: '',
    }
  },
  computed: {
    listArticulos() {
      return this.$store.state.listArticulos
    },
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
      if (this.dataArticle) {
        this.editor = new Editor({
          editable: false,
          extensions: [
            new Bold(),
            new Blockquote(),
            new CodeBlock(),
            new HardBreak(),
            new Heading({ levels: [1, 2, 3] }),
            new BulletList(),
            new OrderedList(),
            new ListItem(),
            new TodoItem(),
            new TodoList(),
            new Image(),
            new Code(),
            new Italic(),
            new Link(),
            new Strike(),
            new Underline(),
            new History(),
            new Search({
              disableRegex: false,
            }),
            new Table({
              resizable: true,
            }),
            new TableHeader(),
            new TableCell(),
            new TableRow(),
          ],
          content: '',
          onUpdate: ({ getHTML }) => {
            this.html = getHTML()
          },
        })
        if (this.dataArticle.contenido) {
          this.editor.setContent(this.dataArticle.contenido, true)
        }
      }
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
.wrapper-blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(72vh);
  background: #fff;
}
.content-blog {
  @apply p-4;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  box-sizing: content-box;
}
.content-back {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.arrow-left {
  bottom: 2px;
  margin-right: 5px;
  cursor: pointer;
  color: black;
}
.content-back p {
  cursor: pointer;
  color: black;
}
.title-blog {
  font-size: 30px;
  font-weight: bold;
  color: black;
  margin-top: 20px;
}
.content-date {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
}
.content-date-items {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.content-date-items p {
  font-size: 14px;
  color: #3a4557bb;
}
.content-date-items p:nth-child(1) {
  font-weight: bold;
}

/* ///////////// */
.editor {
  width: 100%;
  background: white;
  border-radius: 5px;
  padding: 15px;
  position: relative;
  margin-top: 5px;
}
.editor__content {
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  outline: none;
  padding-top: 10px;
}
.editor__content >>> * {
  caret-color: black;
  outline: none;
}
.editor__content >>> pre {
  padding: 0.7rem 1rem;
  border-radius: 5px;
  background: black;
  color: green;
  font-size: 0.8rem;
  overflow-x: auto;
}
.editor__content >>> pre code {
  display: block;
}
.editor__content >>> p code {
  padding: 0.2rem 0.4rem;
  border-radius: 5px;
  font-size: 0.8rem;
  font-weight: bold;
  background: rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
}
.editor__content >>> ul,
.editor__content >>> ol {
  padding-left: 1rem;
}
.editor__content >>> li > p,
.editor__content >>> li > ol,
.editor__content >>> li > ul {
  margin: 0;
}
.editor__content >>> ul {
  color: black;
  list-style-type: disc;
}
.editor__content >>> ol {
  color: black;
  list-style-type: decimal;
}
.editor__content >>> a {
  color: rgb(68, 68, 211);
}
.editor__content >>> h1 {
  font-weight: bold;
  font-size: 2em;
}
.editor__content >>> h2 {
  font-weight: bold;
  font-size: 1.5em;
}
.editor__content >>> h3 {
  font-weight: bold;
  font-size: 1.17em;
}
.editor__content >>> blockquote {
  border-left: 3px solid rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.8);
  padding-left: 0.8rem;
  font-style: italic;
}
.editor__content >>> blockquote p {
  margin: 0;
}
.editor__content >>> img {
  /* width: 100%; */
  /* margin: 0; */
  max-width: 100%;
  border-radius: 3px;
}
.editor__content >>> img {
  /* width: 100%; */
  /* margin: 0; */
  max-width: 100%;
  border-radius: 3px;
}
.editor__content >>> table {
  border-collapse: collapse;
  table-layout: fixed;
  width: 100%;
  margin: 0;
  overflow: hidden;
}
.editor__content >>> table td,
.editor__content >>> table th {
  min-width: 1em;
  border: 2px solid grey;
  padding: 3px 5px;
  vertical-align: top;
  box-sizing: border-box;
  position: relative;
}
.editor__content >>> table td > *,
.editor__content >>> table th > * {
  margin-bottom: 0;
}
.editor__content >>> table th {
  font-weight: bold;
  text-align: left;
}
.editor__content >>> table .selectedCell:after {
  z-index: 2;
  position: absolute;
  content: '';
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(200, 200, 255, 0.4);
  pointer-events: none;
}
.editor__content >>> table .column-resize-handle {
  position: absolute;
  right: -2px;
  top: 0;
  bottom: 0;
  width: 4px;
  z-index: 20;
  background-color: #adf;
  pointer-events: none;
}
.txt-banner {
  color: #000;
  font-weight: 400;
}
.tittle-banner-blog {
  @apply w-full flex flex-row justify-center items-center my-6;
}
.banner-blog {
  @apply w-full flex flex-col justify-center items-center;
  background: white;
}
#separator {
  margin-left: 20px;
}
.container-article {
  @apply flex justify-center items-center rounded-md;
}
.container-article {
  @apply shadow-2xl;
}
@screen sm {
  .container-article {
    @apply w-9/0;
  }
  .txt-banner {
    font-size: 36px;
  }
  .icon-blog {
    width: 10%;
    margin-bottom: 40px;
  }
  #separator {
    margin-left: 10px;
  }
}
@media (min-width: 425px) {
  .icon-blog {
    width: 8%;
    margin-bottom: 40px;
  }
}
@media (min-width: 490px) {
  .icon-blog {
    width: 7%;
    margin-bottom: 40px;
  }
}
@media (min-width: 576px) {
  .grid-products {
    @apply w-9/5 grid-cols-2;
  }
  .tittle-banner-blog {
    @apply w-9/5;
  }
}
@media (min-width: 600px) {
  .icon-blog {
    width: 6%;
    margin-bottom: 40px;
  }
}
@screen md {
  .container-article {
    @apply w-9/5;
  }
  .txt-banner {
    font-size: 36px;
  }
  .icon-blog {
    width: 5%;
    margin-bottom: 40px;
  }
  #separator {
    margin-left: 10px;
  }
}
@media (min-width: 900px) {
  .icon-blog {
    width: 4%;
    margin-bottom: 40px;
  }
}
@screen lg {
  .icon-blog {
    width: 4%;
    margin-bottom: 40px;
  }
}
@media (min-width: 1100px) {
  .icon-blog {
    width: 3%;
    margin-bottom: 40px;
  }
}
@screen mlg {
  .container-article {
    @apply w-9/3;
  }
  .tittle-banner-blog {
    @apply w-9/3 flex flex-row justify-center items-center my-4;
  }
  .txt-banner {
    font-size: 50px;
  }
  .icon-blog {
    width: 5%;
    margin-bottom: 80px;
  }
  #separator {
    margin-left: 20px;
  }
}
@screen xl {
  .container-article {
    @apply w-8/3;
  }
  .tittle-banner-blog {
    @apply w-8/3;
  }
}
@screen xml {
  .container-article {
    @apply w-6/3;
  }
  .tittle-banner-blog {
    @apply w-6/3;
  }
}
@screen xxl {
  .container-article {
    @apply w-4/6;
  }
  .tittle-banner-blog {
    @apply w-4/6;
  }
}
</style>
