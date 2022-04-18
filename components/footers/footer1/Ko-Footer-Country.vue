<template>
  <div
    class="wrapper-footer-country"
    :class="valueWa == true ? 'content-footer-country-wa' : ''"
  >
    <div class="content-footer-country" v-if="dataStore.tienda.pais">
      <div class="content-item-flag">
        <div class="content-flag">
          <div v-if="dataStore.tienda.pais == 'Internacional'">
            <client-only>
              <country-flag country="un" size="normal"></country-flag>
            </client-only>
          </div>
          <div v-else>
            <client-only>
              <country-flag
                :country="`${dataStore.tienda.codigo_pais}`"
                size="normal"
              ></country-flag>
            </client-only>
          </div>
        </div>
        <button @click="stateIdStore = !stateIdStore" class="text-country">
          {{ dataStore.tienda.pais }}
        </button>
        <p class="text-country text-margin">|</p>
        <p class="text-country">
          <strong style="margin-right: 1px">$</strong>
          {{ dataStore.tienda.moneda }}
        </p>
        <div v-if="stateIdStore">
          <p class="textid">
            <strong>Store</strong>: {{ dataStore.tienda.id_tienda }}
          </p>
        </div>
      </div>
      <KoLanguage />
    </div>
  </div>
</template>

<script>
import KoLanguage from '../../k-select-language'

export default {
  name: 'Ko-footer-flags',
  components: {
    KoLanguage,
  },
  props: {
    dataStore: Object,
    valueWa: Boolean,
  },
  data() {
    return {
      stateIdStore: false,
    }
  },
}
</script>

<style scoped>
.wrapper-footer-country {
  display: flex;
  width: 100%;
  background: rgb(24, 24, 24);
  justify-content: center;
  align-items: center;
}
.content-footer-country {
  width: 100%;
  padding: 1px 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1300px;
}
.content-footer-country-wa {
  max-width: 900px;
}
.content-item-flag {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
}
.content-flag {
  display: flex;
  margin-right: 5px;
  align-items: center;
  height: 38px;
  /* width: 45px; */
}
.content-flag >>> .flag {
  width: 55px;
  height: 38px;
}
.text-country {
  color: white;
  height: 100%;
  font-size: 12px;
  /* font-family: 'Poppins'; */
}
.text-margin {
  margin-right: 5px;
  margin-left: 5px;
}
.textid {
  margin-left: 10px;
  font-size: 12px;
  color: white;
}
</style>
