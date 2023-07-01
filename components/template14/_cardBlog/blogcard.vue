<template>
  <nuxt-link
    :to="{
      path: `/blog/` + article.slug,
      query: { idBlog: article.id },
    }"
    class="w-full h-full flex flex-col justify-center items-center wrapper_border"
    :style="`background-color: ${cardBlog['--background_color_1']}`"
  >
    <div class="relative rounded-5 wrapper-img">
      <img
        v-if="article.imagen_principal_url"
        class="rounded-5 effect-img max-h-[250px] max-w-[300px]"
        width="300"
        height="250"
        v-lazy="idCloudinary(this.article.imagen_principal_url, 400, 400)"
        alt="right-banner"
      />
      <div v-else class="w-full h-full bg-slate-200" />
      <div
        class="absolute bottom-10 left-10 p-10 flex flex-col justify-center items-center rounded-5"
        :style="`background-color: ${cardBlog.color_bg_date}`"
      >
        <p class="text-15" :style="`color: ${cardBlog.color_date};`">
          {{ this.dayCreate }}
        </p>
        <p class="text-15 font-bold" :style="`color: ${cardBlog.color_date};`">
          {{ this.nameMonth }}
        </p>
      </div>
    </div>
    <p class="my-10 font-bold text-14">{{ this.article.titulo }}</p>
    <p class="text-14 text-justify">{{ this.article.resumen }}</p>
  </nuxt-link>
</template>
<script>
import idCloudinary from '../../../mixins/idCloudinary'
export default {
  mixins: [idCloudinary],
  name: 'Ko14-BlogCard',
  props: { article: Object, cardBlog: Object, settingGeneral: Object },
  mounted() {
    if (this.article.created_at) {
      const [shippingCreated] = this.article.created_at.split(' ')
      const [yearCreate, monthCreate, dayCreate] = shippingCreated.split('-')
      this.dayCreate = dayCreate
      this.monthCreate = monthCreate
      this.yearCreate = yearCreate
    }
    this.nameMonth = this.monthNames[parseInt(this.monthCreate)]
  },
  data() {
    return {
      shippingCreated: '',
      dayCreate: '',
      monthCreate: '',
      yearCreate: '',
      nameMonth: '',
      monthNames: {
        1: 'Ene',
        2: 'Feb',
        3: 'Mar',
        4: 'Abr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Ago',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dic',
      },
    }
  },
}
</script>
<style scoped>
.wrapper-img {
  @apply w-full h-auto relative flex justify-start cursor-pointer overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
}
.wrapper_border:hover .effect-img {
  @apply relative overflow-hidden;
  -webkit-transition: all 600ms ease 0s;
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.effect-img {
  -webkit-transition: all 600ms ease 0s;
}
</style>
