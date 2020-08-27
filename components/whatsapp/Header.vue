<template>
  <div class="header-container">
    <div class="portada-tienda">
      <whatsapp-icon class="wp-icon" />
      <p class="title-whatsapp">Catálogo</p>
    </div>

    <div class="info-logo-tienda">
      <div style>
        <div class="contain-image">
          <img :src="`https://api2.komercia.co/logos/${dataStore.tienda.logo}`" class="header-logo" />
        </div>
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
  height: 140px;
  width: 100%;
  background: #fff;
  top: 0;
}
.portada-tienda {
  height: 35px;
  overflow: hidden;
  background-color: #3a4a59;
  background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%);
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: sticky;
  top: 0;
  z-index: 9;
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
  width: 90px;
  height: 90px;
  /* margin-top: -10px; */
  left: 20px;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  border: solid 3px white;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24); */
  box-shadow: 0 0 2px rgba(92, 100, 111, 0.1),
    0 5px 10px rgba(134, 143, 155, 0.08), 0 15px 35px rgba(52, 58, 67, 0.08);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border-radius: 45px;
}
.header-logo {
  width: 90px;
  height: 90px;
  padding: 5px;
  object-fit: contain;
}
</style>