<template>
  <div class="wrapper-footer" ref="background" :style="settingByTemplate">
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
    </div>
    <div class="under-footer">
      <div class="contenedor-term-con" v-if="dataStore.politicas">
        <label class="modal-btn" for="modal-toggle">Condiciones legales</label>
      </div>
      <div class="separator"></div>
      <p>Desarrollado por Komercia Latam</p>
      <a href="https://komercia.co/" target="_blank" rel="noreferrer noopener">
        <img
          src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1575331333/components/files/majg1iax3sjgrtyvrs9x.png"
          v-if="logo"
          class="logo2"
          alt="Logo Img"
        />
        <img
          src="https://res.cloudinary.com/komercia-components/image/upload/c_scale,w_500,q_auto:best,f_auto/v1582151044/assets/cnrizgaks15xpkxk22ex.png"
          v-else
          class="logo2"
          alt="Logo Img"
        />
      </a>
    </div>
    <div class="modal-container" v-if="dataStore.politicas">
      <input type="checkbox" id="modal-toggle" />
      <label class="modal-backdrop" for="modal-toggle"></label>
      <div class="modal-content">
        <div class="header-modal">
          <p class="text-top-bold">Condiciones legales</p>
          <label class="modal-close-btn" for="modal-toggle">
            <close-icon class="close-icon-modal" />
          </label>
        </div>
        <div class="tabs">
          <div class="tab" v-if="this.dataStore.politicas.cambio">
            <input id="tab-one" type="checkbox" name="tabs" />
            <label for="tab-one">Política de cambio</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.cambio"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.datos">
            <input id="tab-two" type="checkbox" name="tabs" />
            <label for="tab-two">Políticas de tratamiento de datos</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.datos"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.devolucion">
            <input id="tab-three" type="checkbox" name="tabs" />
            <label for="tab-three">Politica de devoluciones / retracto</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.devolucion"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.garantia">
            <input id="tab-four" type="checkbox" name="tabs" />
            <label for="tab-four">Politica de garantia</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.garantia"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.envios">
            <input id="tab-five" type="checkbox" name="tabs" />
            <label for="tab-five">Politica de envios</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.envios"></div>
            </div>
          </div>
          <div class="tab" v-if="this.dataStore.politicas.pagos">
            <input id="tab-six" type="checkbox" name="tabs" />
            <label for="tab-six">Politica de pagos</label>
            <div class="tab-content">
              <div v-html="this.dataStore.politicas.pagos"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Footer-1',
  props: {
    dataStore: Object,
    settingByTemplate: Object,
  },
  mounted() {
    if (this.settingByTemplate) {
      this.setLogo()
    }
  },
  data() {
    return {
      logo: null,
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
  methods: {
    setLogo() {
      let color = getComputedStyle(this.$refs.background).getPropertyValue(
        '--background_color_1'
      )
      let colorArray = color.split(',')
      let colorInt = parseInt(colorArray[2])
      if (colorInt > 50) {
        this.logo = true
      } else {
        this.logo = false
      }
    },
  },
  watch: {
    'dataStore.tienda'() {
      this.links[0].link = this.dataStore.tienda.red_facebook
      this.links[1].link = this.dataStore.tienda.red_twitter
      this.links[2].link = this.dataStore.tienda.red_instagram
      this.links[3].link = this.dataStore.tienda.red_youtube
    },
    settingByTemplate(value) {
      let colorArray = value.split(',')
      let colorInt = parseInt(colorArray[2])
      if (colorInt > 50) {
        this.logo = true
      } else {
        this.logo = false
      }
    },
  },
}
</script>

<style scoped>
.wrapper-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background_color_1);
  box-sizing: border-box;
  flex-direction: column;
  padding-bottom: 10px;
}
.contenedor {
  width: 100%;
  max-width: 1300px;
  padding: 40px 30px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.content-items-iconos {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.icon {
  margin-right: 10px;
  font-size: 30px;
  color: var(--color_icon);
}
.icon:hover {
  color: var(--color_hover_text);
}
.text-top-bold {
  font-size: 18px;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_text);
  font-weight: bold;
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
  color: var(--color_text);
}
.contenedor-term-con {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
}
.contenedor-term-con label {
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.4;
  letter-spacing: normal;
  color: var(--color_subtext);
  cursor: pointer;
}
.separator {
  height: 1.1px;
  width: 100%;
  max-width: 400px;
  opacity: 0.5;
  border: solid 1px var(--color_icon);
  background: var(--color_icon);
  margin-bottom: 10px;
}
.logo2 {
  width: 100px;
  opacity: 0.7;
}
#modal-toggle {
  display: none;
}
.modal-content::-webkit-scrollbar {
  background: white;
  width: 5px;
  border-top-right-radius: var(--radius_btn);
  border-bottom-right-radius: var(--radius_btn);
}
.modal-content::-webkit-scrollbar-track {
  box-shadow: inset 0 0 10px white;
  border-radius: 10px;
}
.modal-content::-webkit-scrollbar-thumb {
  background: linear-gradient(125deg, #9b9b9b, black);
  border-radius: 10px;
}
.modal-content,
.modal-backdrop {
  opacity: 0;
  transition: all 0.3s ease-in-out;
  position: fixed;
  z-index: -1;
  overflow: hidden;
  cursor: pointer;
}
.modal-backdrop {
  left: 0;
  top: 0;
  height: 100vh;
  width: 100vw;
}
#modal-toggle:checked ~ .modal-backdrop {
  opacity: 1;
  z-index: 15;
  background-color: rgba(0, 0, 0, 0.5);
}
#modal-toggle:checked ~ .modal-content {
  opacity: 1;
  z-index: 15;
  background-color: #fff;
  overflow: auto;
  pointer-events: auto;
  cursor: auto;
  border-radius: var(--radius_btn);
}
.modal-content {
  top: 0;
  bottom: 0;
  margin: auto;
  left: 0;
  right: 0;
  width: 100%;
  padding: 10px;
  max-height: 450px;
  max-width: 1000px;
}
.header-modal {
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.modal-close-btn {
  display: inline-block;
  cursor: pointer;
  right: 10px;
}
.close-icon-modal {
  font-size: 30px;
  color: black;
}
.close-icon-modal:hover {
  color: gray;
}
.modal-close-btn svg {
  transition: 0.2s;
}
.modal-close-btn:hover svg {
  transform: rotate(90deg);
}
.tabs {
  width: 100%;
  padding: 10px 20px;
}
.tab {
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  color: #000;
  overflow: hidden;
}
.tab input {
  position: absolute;
  opacity: 0;
  z-index: -1;
}
.tab label {
  position: relative;
  display: block;
  padding: 0 0 0 1em;
  background: #e6e6e6;
  color: var(--color_text);
  font-weight: bold;
  line-height: 3;
  cursor: pointer;
}
.tab-content {
  max-height: 0;
  overflow: hidden;
  color: black;
  background: white;
  border: 1px solid #e6e6e6;
  -webkit-transition: max-height 0.35s;
  -o-transition: max-height 0.35s;
  transition: max-height 0.35s;
}
.tab-content div {
  color: black;
  margin: 1em;
}
.tab input:checked ~ .tab-content {
  max-height: 100vh;
}
.tab label::after {
  position: absolute;
  right: 0;
  top: 0;
  display: block;
  width: 3em;
  height: 3em;
  line-height: 3;
  text-align: center;
  -webkit-transition: all 0.35s;
  -o-transition: all 0.35s;
  transition: all 0.35s;
}
.tab input[type='checkbox'] + label::after {
  color: var(--color_subtext);
  content: '+';
}
.tab input[type='radio'] + label::after {
  content: '\25BC';
}
.tab input[type='checkbox']:checked + label::after {
  transform: rotate(315deg);
}
.tab input[type='radio']:checked + label::after {
  transform: rotateX(180deg);
}
@media (max-width: 768px) {
  .contenedor {
    padding: 60px 20px 10px;
  }
}
@media (max-width: 600px) {
  #modal-toggle:checked ~ .modal-backdrop {
    opacity: 0;
  }
  .contenedor {
    padding: 20px 15px 10px;
  }
  .modal-content {
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
  }
  .separator {
    max-width: 300px;
  }
  .under-footer {
    margin-bottom: 28px;
  }
  .under-footer p {
    font-size: 16px;
    text-align: center;
  }
}
</style>
