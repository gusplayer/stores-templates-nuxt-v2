<template>
  <div class="header-container">
    <div class="portada-tienda">
      <whatsapp-icon class="wp-icon" />
      <p class="title-whatsapp">Catálogo WhatsApp</p>
      <!-- <img
        class="image-portada"
        src="https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      />-->
    </div>

    <div class="info-logo-tienda">
      <div style>
        <div class="contain-image">
          <img :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`" class="header-logo" />
        </div>
        <!-- <div>
          <p class="tiitle">Titutlo</p>
          <p>Tienda Whatsapp</p>
        </div>-->
      </div>
      <p>Información ></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Header-1',
  props: {
    dataStore: Object,
  },
}
</script>

<style scoped>
.header-container {
  height: 120px;
  width: 100%;
  background: #fff;
  top: 0;
}
.portada-tienda {
  height: 40px;
  overflow: hidden;
  background-color: #3a4a59;
  background-color: #128c7e;
  background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%);
  padding: 10px;
  display: flex;
  align-items: center;
}
.image-portada {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: blur(1px);
  -webkit-filter: blur(1px);
  filter: brightness(0.6);
  -webkit-filter: brightness(0.6);
}
.title-whatsapp {
  color: white;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
}
.wp-icon {
  color: white;
  margin-right: 4px;
  margin-left: 14px;
  font-size: 18px;
  margin-top: -4px;
}
.info-logo-tienda {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 35px;
  padding: 0px 15px;
  background-color: #ece5dd;
}
.info-logo-tienda p {
  display: flex;
  font-size: 12px;
  color: #3a4a59;
}
.contain-image {
  overflow: hidden;
  width: 60px;
  height: 60px;
  margin-top: -10px;
  left: 20px;
  background-color: #fff;
  border-radius: 45px;
  position: absolute;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.header-logo {
  width: 60px;
  height: 60px;
  object-fit: contain;
}
</style>