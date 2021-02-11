<template>
  <div class="wrapper-content">
    <div class="wrapper-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">Instagram Feed</span>
        </div>
      </div>
    </div>
    <div class="wrapper-items">
      <div v-for="(imagen, index) in Imagenes" :key="index" class="grid-imgs">
        <a
          target="_blank"
          rel="noreferrer noopener"
          :href="dataStore.tienda.red_instagram"
        >
          <img class="img-wrapp" :src="imagen.url" alt="wrapper-images" />
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-wrapper',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  data() {
    return {
      Imagenes: [
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612567120/Template9/Insta%20feed/106126747_116303283248247_1364453437983674588_n_nk4whf.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612567123/Template9/Insta%20feed/106205430_1167171920308203_7606075881202904642_n_ffumkq.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612567126/Template9/Insta%20feed/106354131_189289569205191_2308887490431682312_n_mwh1ac.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612567128/Template9/Insta%20feed/106275795_331385771589537_2659543148796565714_n_evg4qt.jpg',
        },
        {
          url:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1612567130/Template9/Insta%20feed/106115016_144855913874556_2205084450678486706_n_bzyvnl.jpg',
        },
      ],
    }
  },
  computed: {},
  mounted() {},
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
  },
}
</script>
<style scoped>
.img-wrapp {
  transition: all 150ms ease-in;
}
.img-wrapp:hover {
  transition: all 150ms ease-in;
  position: relative;
  -webkit-transform: scale(0.9);
  transform: scale(0.95);
}
.wrapper-content {
  @apply flex flex-col justify-center items-center w-full mb-10;
}
.wrapper-items-content {
  @apply flex flex-col justify-center items-center;
  width: 100%;
}
.wrapper-items {
  @apply justify-center items-center;
}

.product-text {
  @apply flex flex-col justify-center items-center w-full my-60;
}
.product-tittle {
  @apply flex flex-col justify-center items-center;
}
.tittle {
  @apply flex flex-col justify-center items-center;
  font-family: 'Poppins', Helvetica, Arial, sans-serif !important;
  color: #333333;
  font-weight: 700;
}
@screen sm {
  .product-tittle {
    width: 100%;
  }
  .tittle {
    line-height: 1.1;
    letter-spacing: 0px;
    font-size: 30px;
  }
  .wrapper-items {
    @apply grid grid-cols-2 gap-2;
  }
  .img-wrapp {
    width: 100%;
  }
  .wrapper-items {
    width: 96vw;
  }
}
@media (min-width: 640px) {
  .wrapper-items {
    @apply grid grid-cols-3 gap-2;
  }
  .wrapper-items {
    width: 98vw;
  }
  .tittle {
    line-height: 34px;
    font-size: 36px;
  }
}
@screen lg {
  .wrapper-items {
    @apply grid grid-cols-5 gap-2;
  }
  .img-wrapp {
    transition: all 150ms ease-in;
    width: 90vw;
  }
  .wrapper-items {
    width: 99vw;
  }
}
@screen xml {
  .product-tittle {
    width: 100%;
  }
}
</style>
