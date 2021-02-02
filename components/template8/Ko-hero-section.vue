<template>
  <div class="container">
    <div class="hero-section">
      <div>
        <img
          src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/jewelry-girl-welcome-row-1.png"
          alt=""
        />
      </div>
      <div class="content-text">
        <div>Donec sollicitudin</div>
        <div class="title-big">JEWELLERY</div>
        <div class="title-small">STORE</div>
        <div class="long-text">
          An sincerity so extremity he additions. Her yet there truth merit. Mrs
          all projecting favourable now unpleasing. Son law garden chatty
          temper. Oh children provided to mr elegance marriage strongly.
        </div>
        <div class="box-buttons">
          <button class="button-black">SHOP NOW</button>
          <button class="button-border">VIEW MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-prueba',
  computed: {
    banner() {
      return this.$store.state.settingByTemplate
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
.container {
  background-image: url('https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/vertical-line-bg-2.png?id=13674');
  @apply w-full grid mx-auto;
}
.hero-section{
  @apply grid grid-cols-2 p-10 gap-10;
}
.content-text {
  @apply text-center;
}
.long-text {
  @apply text-sm leading-7;
}
.title-big {
  font-size: 65px;
  line-height: 75px;
}
.title-small {
  font-family: 'Marcellus SC', serif;
  font-size: 50px;
  line-height: 55px;
}
.box-buttons {
  @apply mt-5 grid grid-cols-2 gap-5;
}
.button-black {
  @apply text-white-white bg-gray-textHeader p-3;
}
.button-border {
  border: solid gray;
  @apply border-2;
}

@media screen and (max-width: 1000px){
.hero-section{
  grid-template-columns: 1fr;
}
  
}
</style>
