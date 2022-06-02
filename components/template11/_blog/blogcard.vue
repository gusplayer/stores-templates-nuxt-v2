<template>
  <div class="producto h-full" :style="settingKblog">
    <div
      class="container"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <nuxt-link :to="{ path: `/blog/` + article.slug }" class="contet">
        <div class="figure-img">
          <div class="content-imge">
            <img
              v-if="article.imagen_principal_url"
              class="images"
              v-lazy="idCloudinaryBanner(this.article.imagen_principal_url)"
              alt="right-banner"
            />
            <div v-else class="empty"></div>
          </div>
        </div>
      </nuxt-link>
      <nuxt-link :to="{ path: `/blog/` + article.slug }" class="contet">
        <div class="overlay-top">
          <div class="text-tittle">
            <p class="txt-day">
              {{ this.dayCreate }}
            </p>
            <p class="txt-month">
              {{ this.nameMonth }}
            </p>
          </div>
        </div>
      </nuxt-link>

      <div class="content-txt-article">
        <div class="content-tittle-article">
          <nuxt-link :to="{ path: `/blog/` + article.slug }" class="contet">
            <p class="txt-article-tittle">
              {{ this.article.titulo }}
            </p>
          </nuxt-link>
        </div>
        <div class="content-abstract-article">
          <p class="txt-article-abstract">
            {{ this.article.resumen }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Blogcard',
  props: { article: Object, settingKblog: Object },
  mounted() {
    if (this.article.created_at) {
      let domain = this.article.created_at
      let result = domain.split(' ')
      this.shippingCreated = result[0]
      let data = this.shippingCreated.split('-')
      this.dayCreate = data[2]
      this.monthCreate = data[1]
      this.yearCreate = data[0]
    }
    if (this.monthCreate == 1) {
      this.nameMonth = 'Ene'
    }
    if (this.monthCreate == 2) {
      this.nameMonth = 'Feb'
    }
    if (this.monthCreate == 3) {
      this.nameMonth = 'Mar'
    }
    if (this.monthCreate == 4) {
      this.nameMonth = 'Abr'
    }
    if (this.monthCreate == 5) {
      this.nameMonth = 'May'
    }
    if (this.monthCreate == 6) {
      this.nameMonth = 'Jun'
    }
    if (this.monthCreate == 7) {
      this.nameMonth = 'Jul'
    }
    if (this.monthCreate == 8) {
      this.nameMonth = 'Ago'
    }
    if (this.monthCreate == 9) {
      this.nameMonth = 'Sep'
    }
    if (this.monthCreate == 10) {
      this.nameMonth = 'Oct'
    }
    if (this.monthCreate == 11) {
      this.nameMonth = 'Nov'
    }
    if (this.monthCreate == 12) {
      this.nameMonth = 'Dic'
    }
  },
  data() {
    return {
      hover: false,
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
      nameMonth: '',
    }
  },
}
</script>
<style scoped>
.producto {
  @apply w-full flex flex-col justify-start items-center;
  background-color: var(--CardBg);
}
.container {
  @apply relative;
}
.content-imge {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden transition-all ease-in duration-0.2;
}
.images {
  @apply w-full object-cover overflow-hidden;
  -webkit-transition: all 500ms ease 0s;
}
.container:hover .images {
  @apply relative overflow-hidden transition-all ease-in duration-0.5;
  -webkit-transition: all 500ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.empty {
  background: #cccccc;
  height: 100%;
  width: 100%;
}
.text-tittle {
  font: inherit;
  font-size: 100%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  font-family: var(--font-style-1);
  @apply w-full absolute text-center transition-all ease-in duration-300 grid grid-cols-1 gap-0 top-5/0 left-5/0;
}
.txt-day,
.txt-month {
  color: var(--ColorText_Date);
  font-weight: 600;
  font-family: var(--font-style-1);
}
.txt-day {
  font-weight: 600;
}
.txt-month {
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-weight: 600;
}
.content-txt-article,
.content-tittle-article,
.content-abstract-article {
  padding: 0 5px;
  @apply w-full flex flex-col justify-start items-start;
}
.content-date-aticle {
  @apply w-full flex flex-row justify-start items-start;
}
.txt-article-abstract {
  color: var(--CardDescription);
  font-family: var(--font-style-1);
}
@screen sm {
  .container {
    @apply max-w-full;
  }
  .images {
    height: 221px;
  }
  .empty {
    height: 221px;
  }
  .txt-day {
    font-size: 15px;
  }
  .txt-month {
    font-size: 10px;
  }
  .overlay-top {
    @apply absolute overflow-hidden shadow-md rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    top: 10px;
    left: 10px;
    right: 0;
    width: 40px;
    height: 45px;
    background-color: var(--ColorBg_Date);
  }
  .txt-article-tittle {
    font-size: 14px;
    color: var(--CardTitle);
    letter-spacing: 0.3px;
    font-family: var(--font-style-1);
    @apply w-full flex justify-start items-start font-medium mt-20 mb-15 cursor-pointer text-left transition-all ease-in duration-0.5;
  }
  .container:hover .txt-article-tittle {
    color: var(--CardTitle);
    @apply transition-all ease-in duration-0.2;
  }
  .txt-article-day,
  .txt-article-month,
  .txt-article-create {
    font-size: 12px;
    letter-spacing: 0.36px;
  }
  .content-date-article {
    @apply mb-15;
  }
  .content-border-article {
    background-color: #eee;
    @apply w-60 h-1 mb-15;
  }
  .txt-article-abstract {
    font-size: 12px;
    @apply text-left mb-15;
  }
  .btn {
    font-size: 14px;
    @apply leading-24;
  }
}
@media (min-width: 425px) {
  .images {
    height: 272px;
  }
  .empty {
    height: 272px;
  }
}
@screen md {
  .txt-day {
    font-size: 22px;
  }
  .txt-month {
    font-size: 14px;
  }
  .overlay-top {
    top: 10px;
    left: 10px;
    right: 0;
    width: 60px;
    height: 65px;
  }
  .txt-article-tittle {
    font-size: 16px;
  }
  .txt-article-abstract {
    font-size: 14px;
  }
  .images {
    height: 250px;
  }
  .empty {
    height: 250px;
  }
}
@screen lg {
  .overlay-top {
    top: 10px;
    left: 10px;
    right: 0;
    width: 50px;
    height: 55px;
  }
}
@screen mlg {
  .txt-day {
    font-size: 20px;
  }
}
@media (min-width: 1400px) {
  .images {
    height: 298px;
  }
  .empty {
    height: 298px;
  }
}
</style>
