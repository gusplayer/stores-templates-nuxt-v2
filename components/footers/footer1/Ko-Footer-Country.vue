<template>
  <div
    class="wrapper-footer-country"
    :class="valueWa == true ? 'content-footer-country-wa' : ''"
  >
    <div class="content-footer-country" v-if="dataStore.tienda.pais">
      <div class="content-item-flag">
        <div class="content-flag" v-if="selectOptionCountry">
          <img
            :src="this.selectOptionCountry.img"
            width="30px"
            class="mr-2"
            alt="bandera pais"
          />
        </div>
        <button @click="stateIdStore = !stateIdStore" class="text-country">
          {{ dataStore.tienda.pais }}
        </button>
        <p class="text-country text-margin">|</p>
        <p class="text-country">
          <strong
            style="margin-right: 1px"
            v-if="dataStore.tienda.moneda == 'PEN'"
            >S/</strong
          >
          <strong style="margin-right: 1px" v-else>$</strong>
          {{ dataStore.tienda.moneda }}
        </p>
        <div v-if="stateIdStore" class="flex flex-row justify-start">
          <p class="textId">
            <strong>ID</strong>:
            {{ dataStore.tienda.id_tienda }}
          </p>
          <p class="textId ml-5">
            <strong>Temp</strong>: {{ dataStore.tienda.template }}
          </p>
          <p class="textId ml-5">
            <strong>Hoko</strong>: {{ dataHoko.statehoko == 0 ? 'NO' : 'SI' }}
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
      optionsCountry: [
        {
          id: 1,
          name: 'co',
          title: 'Colombia',
          currencySign: '$',
          simbolo: 'COP',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Colombia_kz1t6d.png',
        },
        {
          id: 2,
          name: 'internacional',
          title: 'Internacional',
          currencySign: '$',
          simbolo: 'USD',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Internacional_rzalry.png',
        },
        {
          id: 3,
          name: 'mx',
          title: 'México',
          currencySign: '$',
          simbolo: 'MXN',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Mexico_dibihf.png',
        },
        {
          id: 6,
          name: 'ar',
          title: 'Argentina',
          currencySign: '$',
          simbolo: 'ARS',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417092/komerica/Banderas/Argentina_twinoc.png',
        },
        {
          id: 7,
          name: 'cl',
          title: 'Chile',
          currencySign: '$',
          simbolo: 'CLP',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/v1653417091/komerica/Banderas/Chile_rzygtf.png',
        },
        {
          id: 8,
          name: 'pr',
          title: 'Puerto Rico',
          currencySign: '$',
          simbolo: 'USD',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Puerto_Rico_uorvfh.png',
        },
        {
          id: 9,
          name: 'pe',
          title: 'Perú',
          currencySign: 'S/',
          simbolo: '',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Peru_v36g5q.png',
        },
        {
          id: 10,
          name: 'pan',
          title: 'Panamá',
          currencySign: '$',
          simbolo: 'USD',
          img: 'https://res.cloudinary.com/komerciaacademico/image/upload/q_auto,f_auto/v1653417091/komerica/Banderas/Panama_pdney2.png',
        },
      ],
    }
  },
  computed: {
    dataHoko() {
      return this.$store.state.dataHoko
    },
    selectOptionCountry() {
      return this.optionsCountry.find(
        (country) => country.id === this.dataStore.tienda.id_pais
      )
    },
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
.textId {
  margin-left: 10px;
  font-size: 12px;
  color: white;
}
</style>
