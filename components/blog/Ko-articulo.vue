<template>
  <div class="wrapper-blog">
    <div class="container-article" v-if="dataArticle">
      <div class="content-blog">
        <nav class="flex mt-20 mb-5 sm:mb-10" aria-label="Breadcrumb">
          <ol class="flex items-start space-x-4">
            <li>
              <div>
                <a href="#" class="text-gray-400 hover:text-gray-500">
                  <svg
                    class="flex-shrink-0 h-20 w-20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
                    />
                  </svg>
                  <span class="sr-only">Home</span>
                </a>
              </div>
            </li>
            <li>
              <nuxt-link to="/blog" class="flex items-center">
                <svg
                  class="flex-shrink-0 h-20 w-20 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <a
                  href="#"
                  class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
                  >listado de artículos</a
                >
              </nuxt-link>
            </li>
          </ol>
        </nav>
        <div>
          <p class="size_title mt-10 text-start">
            {{ dataArticle.titulo }}
          </p>
        </div>
        <div class="flex justify-between items-center">
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
          <div class="flex icons">
            <a
              :href="this.sharingFacebook"
              target="_blank"
              rel="noreferrer noopener"
              style="max-height: 25px;"
            >
              <facebook-icon class="wp-icon" />
            </a>
            <a
              :href="this.sharingTwitter"
              target="_blank"
              rel="noreferrer noopener"
              style="max-height: 25px;"
            >
              <twitter-icon class="wp-icon marginIcon" />
            </a>
            <a
              :href="this.sharingLinkedin"
              target="_blank"
              rel="noreferrer noopener"
              style="max-height: 25px;"
            >
              <linkedin-icon class="wp-icon marginIcon" />
            </a>
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
      sharing: {
        url: '',
        quote: '',
        quoteTwitter: '',
      },
      sharingFacebook: '',
      sharingTwitter: '',
      sharingLinkedin: '',
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
      this.sharing.url = window.location.href
      this.sharing.quote = `${this.dataArticle.titulo}%0A%0A${this.dataArticle.resumen}`
      this.sharing.quoteTwitter = `${this.dataArticle.titulo}%20by%20${this.dataArticle.autor}%0A`
      this.sharingFacebook = `https://www.facebook.com/sharer/sharer.php?u=${this.sharing.url}&quote=${this.sharing.quote}`
      this.sharingTwitter = `https://twitter.com/intent/tweet?text=${this.sharing.quoteTwitter}%0A${this.sharing.url}`
      this.sharingLinkedin = `https://www.linkedin.com/shareArticle?mini=true&url=${this.sharing.url}`
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
.size_title {
  font-size: 48px;
  font-weight: bold;
  color: black;
  line-height: 48px;
}
.wrapper-blog {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: calc(72vh);
  background: white;
}
.container-article {
  @apply flex justify-center items-center;
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
.content-date {
  width: 100%;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  margin-top: 10px;
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
.editor >>> .el-tiptap-editor > .el-tiptap-editor__content {
  border: none;
  padding: 10px 5px;
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
.wp-icon {
  font-size: 25px;
  bottom: 2px;
  color: #757575;
  cursor: pointer;
}
.wp-icon:hover {
  color: #494949;
}
.marginIcon {
  margin-left: 8px;
}
@screen sm {
  .container-article {
    width: 95%;
  }
  .icon-blog {
    width: 10%;
    margin-bottom: 40px;
  }
}
@media (max-width: 425px) {
  .icon-blog {
    width: 8%;
    margin-bottom: 40px;
  }
  .size_title {
    font-size: 25px;
  }
}
@media (max-width: 490px) {
  .icon-blog {
    width: 7%;
    margin-bottom: 40px;
  }
}
@media (max-width: 576px) {
  .grid-products {
    @apply w-9/5 grid-cols-2;
  }
}
@media (max-width: 600px) {
  .icon-blog {
    width: 6%;
    margin-bottom: 40px;
  }
  .size_title {
    font-size: 28px;
    line-height: 35px;
  }
}
@screen md {
  .container-article {
    @apply w-9/5;
  }
  .icon-blog {
    width: 5%;
    margin-bottom: 40px;
  }
}
@media (max-width: 900px) {
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
@media (max-width: 1100px) {
  .icon-blog {
    width: 3%;
    margin-bottom: 40px;
  }
}
@screen mlg {
  .container-article {
    @apply w-7/8;
  }
  .icon-blog {
    width: 5%;
    margin-bottom: 80px;
  }
}
@screen xl {
  .container-article {
    @apply w-4/8;
  }
}
</style>
