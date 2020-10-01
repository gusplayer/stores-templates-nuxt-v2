<template>
  <div class="wrapper-footer">
    <div class="contenedor">
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
export default {}
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
</style>
