<template>
  <div class="wrapper-blog">
    <div class="bannerBlog">
      <div class="crumb">
        <nuxt-link to="/">
          <p class="txt-crumb s1">{{ $t('header_inicio') }}</p>
        </nuxt-link>
        <p class="separatorCrumb">/</p>
        <nuxt-link to="/blog">
          <p class="txt-crumb s2">
            {{ $t('header_blog') }}
          </p>
        </nuxt-link>
      </div>
    </div>

    <div class="container-article">
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
        <!-- <div class="wrapper-articulo" v-html="dataArticle.contenido"></div> -->
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
  </div>
</template>

<script>
import {
  Doc,
  Paragraph,
  Text,
  Heading,
  Bold,
  Italic,
  Underline,
  Strike,
  Code,
  CodeBlock,
  Blockquote,
  Link,
  BulletList,
  OrderedList,
  ListItem,
  TodoList,
  TodoItem,
  Iframe,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  Image,
  TextAlign,
  LineHeight,
  Indent,
  HorizontalRule,
  HardBreak,
  TrailingNode,
  History,
  TextColor,
  TextHighlight,
  FormatClear,
  FontSize,
  Preview,
  Print,
  SelectAll,
} from 'element-tiptap'
export default {
  name: 'Ko-Blog',
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
  data() {
    return {
      dataArticle: {},
      shippingCreated: '',
      shippingUpdated: '',
      extensions: [
        new Doc(),
        new Paragraph(),
        new Text(),
        new Heading({ level: 5, bubble: true }),
        new Bold({ bubble: true }),
        new Italic({ bubble: true }),
        new Underline({ bubble: true }),
        new Strike({ bubble: true }),
        new Code({ bubble: true }),
        new CodeBlock({ bubble: true }),
        new Blockquote({ bubble: true }),
        new Link({ bubble: true }),
        new BulletList({ bubble: true }),
        new OrderedList({ bubble: true }),
        new ListItem({ bubble: true }),
        new TodoList({ bubble: true }),
        new TodoItem({ bubble: true }),
        new Iframe({ bubble: true }),
        new Table({
          resizable: true,
          bubble: true,
        }),
        new TableHeader(),
        new TableRow(),
        new TableCell(),
        new Image({
          urlPattern: '',
          uploadRequest: '',
          bubble: true,
        }),
        new TextAlign({
          alignments: ['left', 'center', 'right', 'justify'],
          bubble: true,
        }),
        new LineHeight({
          lineHeights: ['100%', '200%', '300%'],
        }),
        new Indent({
          minIndent: 0,
          maxIndent: 7,
        }),
        new HorizontalRule({ bubble: true }),
        new HardBreak(),
        new TrailingNode(),
        new History(),
        new TextColor({
          colors: [
            '#f44336',
            '#e91e63',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#4caf50',
            '#8bc34a',
            '#cddc39',
            '#ffeb3b',
            '#ffc107',
            '#ff9800',
            '#ff5722',
            '#000000',
          ],
          bubble: true,
        }),
        new TextHighlight({
          colors: [
            '#f44336',
            '#e91e63',
            '#9c27b0',
            '#673ab7',
            '#3f51b5',
            '#2196f3',
            '#03a9f4',
            '#00bcd4',
            '#009688',
            '#4caf50',
            '#8bc34a',
            '#cddc39',
            '#ffeb3b',
            '#ffc107',
            '#ff9800',
            '#ff5722',
            '#000000',
          ],
          bubble: true,
        }),
        new FormatClear(),
        new FontSize({
          fontSizes: [
            '8',
            '10',
            '12',
            '14',
            '16',
            '18',
            '20',
            '24',
            '30',
            '36',
            '48',
            '60',
            '72',
          ],
          bubble: true,
        }),
        new Preview(),
        new Print(),
        new SelectAll(),
      ],
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
  min-height: calc(64vh);
  background: #fff;
  padding-bottom: 40px;
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
  color: #fff;
  font-family: 'Roboto', sans-serif !important ;
  font-weight: 400;
}
#separator {
  margin-left: 20px;
}
.container-article {
  @apply flex justify-center items-center rounded-md mt-12;
}
.container-article {
  @apply shadow-2xl;
}
.txt-banner {
  color: #2c2930;
  font-family: 'Roboto', sans-serif !important ;
  font-weight: 400;
}
.tittle-banner-blog {
  @apply w-full flex flex-col justify-center items-center;
}
.banner-blog {
  @apply w-full flex flex-col justify-center items-center pt-8 z-10;
  /* background-color: #efefef; */
}
.crumb {
  @apply w-full flex flex-row justify-center items-center;
}
.separatorCrumb {
  font-size: 9px;
  color: #222;
  font-family: 'Roboto', sans-serif !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.txt-crumb {
  font-size: 15px;
  color: #222;
  font-family: 'Roboto', sans-serif !important;
  @apply pr-6 leading-14 cursor-pointer transition-all ease-in duration-0.2;
}
.s1:hover {
  color: #000;
  transition: all 0.25s ease;
}
.s2:hover {
  color: #000;
  transition: all 0.25s ease;
}
@screen sm {
  .bannerBlog {
    @apply w-full flex bg-cover bg-center bg-no-repeat justify-items-center items-center py-20;
  }
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
  .wrapper-blog {
    margin-top: 140px;
  }
}
@screen md {
  .container-article {
    @apply w-9/5;
  }
  .txt-banner {
    font-size: 36px;
  }
}
@screen lg {
  .icon-blog {
    width: 4%;
    margin-bottom: 40px;
  }
}
@screen mlg {
  .container-article {
    @apply w-9/3;
  }
  .txt-banner {
    font-size: 78px;
  }
  .icon-blog {
    width: 5%;
    margin-bottom: 80px;
  }
  #separator {
    margin-left: 20px;
  }
  .wrapper-blog {
    margin-top: 0px;
  }
}
@screen xl {
  .container-article {
    @apply w-8/3;
  }
}
@screen xml {
  .container-article {
    @apply w-6/3;
  }
}
@screen xxl {
  .container-article {
    @apply w-4/6;
  }
}
</style>
