<template>
  <div class="wrapper-footer">
    <div class="contenedor">
      <div class="content-items-iconos">
        <div
          v-for="(item, index) in links"
          :key="`${index}${item.icon}`"
          v-if="item.link"
        >
          <a
            v-if="item.link"
            :href="item.link"
            target="_blank "
            rel="noreferrer noopener"
            ><div class="icon" :is="item.icon"
          /></a>
        </div>
      </div>
      <div class="under-footer">
        <p>{{ $t('footer_desarrollado') }}</p>
        <a
          href="https://valienta.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            v-lazy="
              `https://valienta.com/wp-content/uploads/2020/01/logo-v1.svg`
            "
            class="logo2"
            alt="Logo Img"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Footer-Wa',
  props: {
    dataStore: Object,
  },
  data() {
    return {
      links: [
        {
          nombre: 'Facebook',
          icon: 'facebook-icon',
          link: this.dataStore.tienda.red_facebook,
        },
        {
          nombre: 'Twitter',
          icon: 'twitter-icon',
          link: this.dataStore.tienda.red_twitter,
        },
        {
          nombre: 'Instagram',
          icon: 'instagram-icon',
          link: this.dataStore.tienda.red_instagram,
        },
        {
          nombre: 'Youtube',
          icon: 'youtube-icon',
          link: this.dataStore.tienda.red_youtube,
        },
      ],
    }
  },
}
</script>

<style scoped>
.wrapper-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  box-sizing: border-box;
  flex-direction: column;
}
.contenedor {
  width: 100%;
  border-top: 1px solid rgba(213, 213, 213, 0.473);
  padding: 10px 30px 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.under-footer {
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  max-width: 1300px;
}
.under-footer p {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: black;
}
.logo2 {
  margin-top: 5px;
  width: 100px;
  opacity: 0.7;
}
.content-items-iconos {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.icon {
  margin-right: 10px;
  font-size: 20px;
  color: #a9206b;
}
.icon:hover {
  color: #dd288c;
}
</style>
