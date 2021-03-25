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
                class="h-40 w-40 rounded-full"
                v-lazy="`https://api2.komercia.co/users/user.jpg`"
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
.editor >>> .el-tiptap-editor__menu-bubble {
  display: none;
}
.editor >>> .el-tiptap-editor__content h1 {
  font-size: 2em;
}
.editor >>> .el-tiptap-editor__content h2 {
  font-size: 1.5em;
}
.editor >>> .el-tiptap-editor__content h3 {
  font-size: 1.17em;
}
.editor >>> .el-tiptap-editor__content h4 {
  font-size: 1.12em;
}
.editor >>> .el-tiptap-editor__content h5 {
  font-size: 0.83em;
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
