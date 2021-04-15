<template>
  <div
    class="wrapper-content"
    :style="[
      blog,
      settingGeneral,
      currentSettingByTemplate9.blog,
      currentSettingByTemplate9.settingGeneral,
    ]"
  >
    <div
      :style="[
        {
          '--font-style-1':
            this.settingGeneral && this.settingGeneral.fount_1
              ? this.settingGeneral.fount_1
              : 'Poppins',
        },
        {
          '--font-style-1':
            this.currentSettingByTemplate9.settingGeneral &&
            this.currentSettingByTemplate9.settingGeneral.fount_1
              ? this.currentSettingByTemplate9.settingGeneral.fount_1
              : 'Poppins',
        },
      ]"
    >
      <div class="wrapper-items-content">
        <div class="product-text">
          <div class="product-tittle">
            <span class="tittle">{{ blog.title }}</span>
          </div>
        </div>
      </div>
      <div class="wrapper-items">
        <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
          <div class="swiper-wrapper">
            <div
              v-for="(article, index) in filteredList"
              :key="article.id"
              :class="`swiper-slide wrapper-${index + 1}`"
            >
              <Kblog
                v-if="article.estado == 1"
                :article="article"
                :blog="blog"
                :settingGeneral="settingGeneral"
                :currentblog="currentSettingByTemplate9.blog"
                :currentsettingGeneral="
                  currentSettingByTemplate9.settingGeneral
                "
              ></Kblog>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Kblog from '../template9/_blog/blogcard'
export default {
  name: 'ko-Blog',
  components: {
    Kblog,
  },
  props: {
    dataStore: Object,
    blog: Object,
    settingGeneral: Object,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: '',
        spaceBetween: 30,
        breakpoints: {
          10000: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          2560: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1920: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 30,
          },

          580: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
      },
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    listArticulos() {
      return this.$store.state.listArticulos
    },
    filterArticles() {
      const initial = this.currentPage * 12 - 12
      const final = initial + 12
      return this.filteredList.slice(initial, final)
    },
    filteredList() {
      if (this.search) {
        return this.listArticulos.filter((element) => {
          return element.titulo
            .toLowerCase()
            .includes(this.search.toLowerCase())
        })
      } else {
        return this.listArticulos
      }
    },
    currentSettingByTemplate9() {
      return this.$store.state.currentSettingByTemplate9
    },
  },
  mounted() {
    this.mySwiper.slideTo(3, 1000, false)
  },
  watch: {},
}
</script>
<style scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background-color: var(--background_color_1);
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.wrapper-content {
  background-color: var(--background_color_1);
  @apply flex flex-col justify-center items-center w-full;
  padding-bottom: 64px;
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
  width: 93vw;
}
.wrapper-items {
  width: 93vw;
}
.product-text {
  @apply flex flex-col justify-center items-center w-full my-60;
}
.product-tittle {
  @apply flex flex-col justify-center items-center;
}
.tittle {
  @apply flex flex-col justify-center items-center;
  /* font-family: 'Poppins', Helvetica, Arial, sans-serif !important; */
  font-family: var(--font-style-1);
  color: var(--color_title);
  font-weight: 700;
}
@screen sm {
  .product-tittle {
    width: 75%;
  }
  .tittle {
    line-height: 34px;
    font-size: 30px;
  }
}
@screen xml {
  .product-tittle {
    width: 100%;
  }
  .tittle {
    line-height: 34px;
    font-size: 36px;
  }
}
</style>
