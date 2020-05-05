<template>
  <div class="wrapper-footer" ref="background">
    <div class="contenedor">
      <div>
        <div class="left-logo">
          <div class="wrapper-logo">
            <img :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`" class="logo" />
          </div>
          <p>Productos de alta calidad hechos a mano.</p>
        </div>
      </div>
      <div class="top-footer">
        <div class="top-footer-item">
          <p class="text-top-bold">Secciones</p>
          <br />
          <div v-for="(item, index) in secciones" :key="`${index}${item.name}`">
            <p class="text-top">{{ item.name}}</p>
          </div>
        </div>
        <div>
          <p class="text-top-bold">Síguenos</p>
          <br />
          <div v-for="(item, index) in links" :key="`${index}${item.nombre}`" class="text-icon">
            <div v-if="item.link" :is="item.icon" class="icon" />
            <a v-if="item.link" :href="item.link">{{ item.nombre }}</a>
          </div>
        </div>
        <div>
          <p class="text-top-bold">Suscríbete</p>
          <p class="text-light">
            Registra tu correo para recibir información sobre promociones y
            nuevos productos.
          </p>
          <br />
          <form class="input-content">
            <input
              class="input-text"
              type="email"
              v-model="email"
              placeholder="Tu correo electrónico"
              required
            />
            <button ref="colorBtn" class="btn" @click="submitNewsletter">Enviar</button>
          </form>
        </div>
      </div>
      <div class="items-mobil">
        <div class="item-mobil-top">
          <div class="left-logo-mobil">
            <img :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`" class="logo" />
            <div
              class="items-iconos"
              v-for="(item, index) in links"
              :key="`${index}${item.icon}`"
              v-if="item.link"
            >
              <div class="icon" :is="item.icon" />
            </div>
          </div>
          <div class="text-center">
            <p>Suscríbite a nuestras promociones</p>
          </div>
          <form class="input-content">
            <input
              class="input-text"
              v-model="email"
              type="email"
              placeholder="Tu correo electrónico"
              required
            />
            <button class="btn" @click="submitNewsletter">Enviar</button>
          </form>
        </div>
        <div v-if="currentViews.length" class="item-mobil-center">
          <div v-for="(item, index) in currentViews" :key="`${index}${item.name}`">
            <p class="text-mobil">{{ item.name}}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="under-footer">
      <div class="separator"></div>
      <p>Desarrollado por Komercia Latam</p>
      <img
        src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png"
        class="logo2"
      />
      <!-- <img
        src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png"
        class="logo2"
      />-->
    </div>
  </div>
</template>

<script>
export default {
  name: "Ko-Footer-1",
  props: {
    dataStore: Object,
  },
  data() {
    return {
      logo: null,
      email: "",
      message: "",
      secciones: [],
      links: [
        {
          nombre: "Facebook",
          icon: "facebook-icon",
          link: this.dataStore.tienda.red_facebook
        },
        {
          nombre: "Twitter",
          icon: "twitter-icon",
          link: this.dataStore.tienda.red_twitter
        },
        {
          nombre: "Instagram",
          icon: "instagram-icon",
          link: this.dataStore.tienda.red_instagram
        },
        {
          nombre: "Youtube",
          icon: "youtube-icon",
          link: this.dataStore.tienda.red_youtube
        }
      ],
      secciones: [
        {
          name: "Inicio",
          path: "/"
        },
        {
          name: "Productos",
          path: "/productos"
        },
        {
          name: "Carrito",
          path: "/cart"
        },
        {
          name: "Contacto",
          path: "/contacto"
        }
      ],
      currentViews: []
    };
  },
  methods: {    
    submitNewsletter() {
      if (this.email) {
        const json = {
          email: this.email,
          tienda: this.$store.state.id
        };
        axios.post(`https://api2.komercia.co/api/tienda/suscriptor`, json);
      }
    },
  },
  watch: {
    "dataStore.tienda"() {
      this.links[0].link = this.dataStore.tienda.red_facebook;
      this.links[1].link = this.dataStore.tienda.red_twitter;
      this.links[2].link = this.dataStore.tienda.red_instagram;
      this.links[3].link = this.dataStore.tienda.red_youtube;
    },
  }
};
</script>

<style scoped>
.wrapper-footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--white);
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 10px;
}
.contenedor {
  display: flex;
  width: 100%;
  max-width: 1300px;
  flex-direction: row;
  align-items: center;
  padding: 40px 30px 0px;
  justify-content: space-between;
}
.contenedor > div:nth-child(1) {
  flex: 2;
  margin-right: 90px;
}
.top-footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.top-footer > div {
  flex: 1;
  margin-right: 10px;
}
.top-footer > div:nth-child(3) {
  flex: 2;
  margin-right: 10px;
}
.left-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: -30px;
}
.left-logo p {
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--grey);
  margin-top: 10px;
}
.wrapper-logo {
  max-width: 120px;
}
.logo {
  width: 100%;
  object-fit: contain;
  object-position: center;
}
.logo2 {
  width: 100px;
  opacity: 0.7;
}
.separator {
  background: var(--green);
  height: 1.1px;
  width: 400px;
  opacity: 0.5;
  border: solid 1px var(--green);
  margin-bottom: 10px;
}
.under-footer {
  display: flex;
  width: 100%;
  margin-top: 40px;
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
  color: var(--purple);
}
.text-top {
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--purple);
  margin-top: 5px;
  cursor: pointer;
}
.text-top:hover {
  color: var(--green);
}

.text-top-bold {
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--purple);
  font-weight: bold;
}
.text-light {
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--grey);
}
.input-text {
  font-size: 14px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: var(--grey);
  border: solid 2px #afafaf;
  border-radius: var(--radius_btn);
  background-color: transparent;
  padding: 4px 14px;
}
.input-text::placeholder {
  color: var(--grey);
  opacity: 0.7;
}
.input-text:focus,
.input-text:active {
  outline: 0;
}
.text-icon {
  display: flex;
  flex-direction: row;
}

.text-icon a {
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--purple);
  margin-top: 5px;
  margin-left: 7px;
}
.text-icon a:hover {
  color: var(--green);
}
.input-content {
  display: flex;
  flex-direction: row;
}
.input-content :nth-child(1) {
  flex: 2;
}
.input-content :nth-child(2) {
  flex: 0.5;
}
.icon {
  font-size: 19px;
  color: var(--green);
}
.btn {
  border-radius: var(--radius_btn);
  color: var(--white);
  border: solid 2px var(--black);
  background-color: var(--black);
  margin-left: 3%;
  padding: 4px 14px;
  width: 100%;
  cursor: pointer;
  transition: all 200ms ease-in;
}
.btn:hover {
  color: var(--black);
  border: solid 2px var(--grey);
  background-color: var(--grey);
}
.items-mobil {
  display: none;
}

@media (max-width: 768px) {
  /* For tablets */
  .contenedor {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .contenedor > div:nth-child(1) {
    flex: 2;
    margin-right: 0px;
  }
  .left-logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .top-footer {
    margin-top: 23px;
  }
  .items-mobil {
    display: none;
  }
}
@media (max-width: 600px) {
  /* For mobile phones */
  .contenedor {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }
  .left-logo {
    display: none;
  }
  .top-footer {
    display: none;
  }
  .separator {
    display: none;
  }
  .logo {
    width: 141px;
    height: 70px;
  }
  .logo2 {
    width: 100px;
    opacity: 0.7;
  }
  .under-footer p {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--purple);
    text-align: center;
  }
  .items-mobil {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .item-mobil-center {
    width: 100%;
    margin-top: 30px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 30px;
    grid-row-gap: 15px;
  }
  .item-mobil-center > div:nth-child(2),
  .item-mobil-center > div:nth-child(4),
  .item-mobil-center > div:nth-child(6),
  .item-mobil-center > div:nth-child(8) {
    text-align: right;
  }

  .text-mobil {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--purple);
    margin-top: 10px;
  }
  .item-mobil-top {
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .left-logo-mobil {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .text-center p {
    font-size: 17px;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    letter-spacing: normal;
    color: var(--purple);
    margin-top: 20px;
    text-align: center;
  }
  .input-content {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
    width: 100%;
  }

  .items-icons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  .icon {
    font-size: 18px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--green);
    margin-left: 7px;
  }
  .btn {
    border-radius: var(--radius_btn);
    color: var(--white);
    border: solid 2px var(--black);
    background-color: var(--black);
    margin-top: 10px;
    padding: 8px 14px;
    margin-left: 0px;
  }
}
</style>
