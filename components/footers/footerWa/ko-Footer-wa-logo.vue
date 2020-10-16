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
      <!-- <div class="content-footer-country" v-if="dataStore.tienda.pais">
        <div
          v-if="dataStore.tienda.pais == 'Internacional'"
          style="display: flex;"
        >
          <no-ssr>
            <country-flag country="un" size="normal"></country-flag>
          </no-ssr>
        </div>
        <div v-else class="content-flag">
          <no-ssr>
            <country-flag
              :country="`${dataStore.tienda.codigo_pais}`"
              size="normal"
            ></country-flag>
          </no-ssr>
        </div>
        <p class="text-country">{{ dataStore.tienda.pais }}</p>
      </div> -->
      <div class="under-footer">
        <p>Desarrollado por Komercia Latam</p>
        <a
          href="https://komercia.co/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img
            src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png"
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
  padding: 20px 30px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
/* .content-footer-country {
  width: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 3px;
}
.content-flag {
  display: flex;
  align-items: center;
  height: 20px;
  width: 45px;
}
.content-flag >>> .flag {
  width: 55px;
  height: 35px;
}
.text-country {
  color: black;
  height: 100%;
  font-size: 12px;
} */
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
  color: #128c7e;
}
.icon:hover {
  color: #25d366;
}
</style>
