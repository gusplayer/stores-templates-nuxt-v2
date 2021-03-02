<template>
  <div class="content-blog">
    <div class="content-items-blog">
      <div class="content-imge">
        <img
          v-if="article.imagen_principal_url"
          class="images"
          :src="idCloudinaryBanner(this.article.imagen_principal_url)"
          alt="right-banner"
        />
      </div>
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
      <div class="content-info-blog">
        <router-link
          :to="{ path: `/blog/` + article.slug }"
          class="cont-tittle"
        >
          <p class="txt-tittle">{{ this.article.titulo }}</p>
        </router-link>

        <div class="cont-autor">
          <span class="flex-shrink-0 mx-1">
            <img
              class="h-15 w-15 rounded-full mr-5"
              src="https://api2.komercia.co/users/user.jpg"
              alt=""
            />
          </span>
          <p class="txt-autor">{{ this.article.autor }}</p>
        </div>
        <div class="cont-article">
          <p class="txt-article">{{ this.article.resumen }}</p>
        </div>
      </div>
      <div class="cont-date">
        <div class="cont-day">
          <p class="txt-day-create">
            {{ this.dayCreate }}
          </p>
        </div>
        <div class="cont-month-year">
          <p class="txt-dates">
            {{ this.nameMonth }}
          </p>
          <p class="txt-dates">
            {{ this.yearCreate }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import idCloudinary from '../../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko-Blogcard',
  props: { article: Object },
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
      nameMonth: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
    }
  },
}
</script>

<style scoped>
.content-blog {
  @apply w-full flex flex-col justify-center items-center;
}
.content-items-blog {
  @apply w-full relative flex flex-col justify-center items-center mb-40;
}
.content-image {
  @apply w-full flex justify-center items-center;
}
.images {
  @apply w-full h-full object-cover overflow-hidden flex justify-center items-center;
}
.text-tittle {
  @apply absolute text-center transition-all ease-in duration-300 grid grid-cols-1 gap-0;
  font: inherit;
  font-size: 100%;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
}
.txt-day,
.txt-month {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #333333;
  font-weight: 600;
}
.txt-day {
  font-weight: 600;
}
.txt-month {
  text-transform: uppercase;
  letter-spacing: 0.3px;
  font-weight: 600;
}
.content-info-blog {
  border-color: #efefef;
  @apply w-full flex flex-col justify-center items-center p-20 border-r border-l;
}
.cont-tittle {
  @apply w-full flex flex-col justify-center items-start;
}
.cont-autor,
.cont-article {
  @apply w-full flex flex-row justify-start items-center mt-15;
}
.cont-date {
  border-color: #efefef;
  @apply w-full flex flex-row justify-start items-center border;
}
.cont-day {
  border-color: #efefef;
  @apply w-70 h-60 flex justify-center items-center border-r;
}
.cont-month-year {
  @apply w-full flex flex-col justify-center items-start pl-20;
}
.txt-article,
.text-tittle,
.txt-autor,
.txt-dates,
.txt-day,
.txt-day-create,
.txt-month,
.txt-tittle {
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
}
@screen sm {
  .txt-day {
    font-size: 15px;
  }
  .txt-month {
    font-size: 10px;
  }
  .overlay-top {
    @apply absolute overflow-hidden shadow-md bg-white-white rounded-2 max-w-full max-h-full transition-all ease-in duration-300;
    top: 10px;
    left: 10px;
    right: 0;
    width: 40px;
    height: 45px;
  }
  .txt-tittle {
    font-size: 14px;
    color: #222;
    @apply font-semibold transition-all ease-in duration-0.2;
  }
  .txt-tittle:hover {
    color: #eb7025;
    @apply transition-all ease-in duration-0.2;
  }
  .txt-autor {
    font-size: 12px;
    color: #222;
  }
  .txt-article {
    color: #666;
    font-size: 14px;
    @apply font-light leading-20;
  }
  .txt-day-create {
    color: #eb7025;
    font-size: 33px;
    @apply font-bold;
  }
  .txt-dates {
    font-size: 12px;
    color: #666;
    @apply uppercase;
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
}
@screen lg {
  .overlay-top {
    top: 10px;
    left: 10px;
    right: 0;
    width: 60px;
    height: 65px;
  }
}
@screen mlg {
  .txt-day {
    font-size: 25px;
  }
  .txt-tituloart {
    font-size: 36px;
    letter-spacing: -1px;
    line-height: 1;
  }
  .overlay-top {
    top: 10px;
    left: 10px;
    right: 0;
    width: 70px;
    height: 75px;
  }
}
</style>
