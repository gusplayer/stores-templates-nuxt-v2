<template>
  <div class="wrapper-footer-country">
    <div class="content-footer-country" v-if="dataStore.tienda.pais">
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ko-Newsletter-1',
  props: {
    dataStore: Object,
  },
}
</script>

<style scoped>
.wrapper-footer-country {
  display: flex;
  width: 100%;
  /* background: var(--background_color_1); */
  background: rgb(24, 24, 24);
  justify-content: center;
  align-items: center;
}
.content-footer-country {
  width: 100%;
  max-width: 1300px;
  padding: 5px 20px 6px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
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
  color: white;
  height: 100%;
  font-size: 12px;
}
</style>
