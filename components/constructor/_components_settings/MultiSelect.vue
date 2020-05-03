<template>
  <div class="checkbox-select">
    <h4 class="title-input">{{label}}</h4>
    <div
      class="checkbox-select__trigger"
      :class="{ isActive: activeTrigger }"
      @click="showDropdown"
    >
      <span class="checkbox-select__title">Seleccionar</span>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 129 129" fill="navy">
        <path
          d="M121.3 34.6c-1.6-1.6-4.2-1.6-5.8 0l-51 51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8 0-1.6 1.6-1.6 4.2 0 5.8l53.9 53.9c.8.8 1.8 1.2 2.9 1.2 1 0 2.1-.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2.1-5.8z"
        />
      </svg>
    </div>
    <div id="dropdown" class="checkbox-select__dropdown" :class="{ activeSearch: showLoader }">
      <div class="checkbox-select__search-wrapp">
        <input
          type="text"
          @focus="showLoader = true"
          @blur="showLoader = false"
          placeholder="buscar..."
          v-model="search"
        />
      </div>
      <div class="checkbox-select__col">
        <div class="checkbox-select__select-all" v-model="selectAll">
          <label for="selectAll">{{selectAllText}}</label>
          <input type="checkbox" id="selectAll" @click="selectAll" v-model="allSelected" />
        </div>
        <div class="checkbox-select__info">{{checkedFilters.length}} Seleccionados</div>
      </div>
      <ul class="checkbox-select__filters-wrapp">
        <li v-for="(filter, index) in filteredList">
          <div class="checkbox-select__check-wrapp">
            <input
              :id="index"
              class="conditions-check"
              v-model="checkedFilters"
              :value="filter.id"
              type="checkbox"
            />
            <label :for="index">{{filter.nombre_categoria_producto}}</label>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label'],
  created: function() {
    // const customScroll = new SimpleBar(document.getElementById("customScroll"));
  },
  data() {
    return {
      filters: [
        'Bungalow',
        'Chalet',
        'Guesthouse',
        'Hotel',
        'Townhouse',
        'Apartment',
        'Boutique hotel',
        'Cabin',
        'Guest suite',
        'Hostel',
        'Loft',
        'Villa'
      ],
      search: '',
      checkedFilters: [],
      allSelected: true,
      selectAllText: 'Marcar Todo',
      activeTrigger: false,
      dropdown: false,
      showLoader: false
    }
  },
  computed: {
    categories() {
      return this.$store.state.categories
    },
    filteredList() {
      return this.categories.filter(item => {
        return item.nombre_categoria_producto
          .toLowerCase()
          .includes(this.search.toLowerCase())
      })
    }
  },
  methods: {
    selectAll: function() {
      this.checkedFilters = []
      this.selectAllText =
        this.selectAllText == 'Marcar Todo' ? 'Limpiar Todo' : 'Marcar Todo'
      if (this.allSelected) {
        for (let category of this.categories) {
          //in
          // this.checkedFilters.push(this.filters[filter].toString());
          this.checkedFilters.push(category.id)
        }
      }
    },
    showDropdown: function() {
      if (this.dropdown == false) {
        this.dropdown = true
        this.activeTrigger = true
        TweenMax.fromTo(
          '#dropdown',
          0.55,
          {
            autoAlpha: 0,
            y: -10
          },
          {
            autoAlpha: 1,
            y: 0,
            ease: Power2.easeOut
          }
        )
      } else {
        this.dropdown = false
        this.activeTrigger = false
        TweenMax.to('#dropdown', 0.2, {
          autoAlpha: 0,
          y: -10,
          ease: Power2.easeOut
        })
      }
    }
  }
}
</script>

<style scoped>
label {
  outline: none;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
:after,
:before {
  box-sizing: border-box;
}
textarea,
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border-radius: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  outline: 0;
}

.checkbox-select {
  position: relative;
  /* max-width: 440px; */
  width: 100%;
}

@media only screen and (max-width: 600px) {
  .checkbox-select {
    margin: 100px auto 0;
  }
}
.checkbox-select__trigger {
  border-radius: 100px;
  /* background: #fff url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png") repeat; */
  position: relative;
  z-index: 1;
  /* box-shadow: 0 0 10px 8px rgba(0, 0, 0, 0.13); */
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 15px 0 15px;
  transition: all 0.4s ease;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 2px solid #ebeaed;
}
@media only screen and (max-width: 600px) {
  .checkbox-select__trigger {
    padding: 0 20px 0 15px;
    height: 70px;
  }
}
.checkbox-select__trigger.isActive {
  border-radius: 10px 10px 0 0;
  /* background: #f2f2f2 url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png") repeat; */
}
.checkbox-select__trigger.isActive svg {
  transform: rotate(-180deg);
}
.checkbox-select__trigger:hover {
  /* background: #f4f4f4 url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png") repeat; */
}
.checkbox-select__trigger svg {
  width: 18px;
  stroke: 4px;
  transition: all 0.4s ease;
}
@media only screen and (max-width: 600px) {
  .checkbox-select__trigger svg {
    width: 22px;
  }
}
.checkbox-select__title {
  /* font-size: 25px; */
  flex: 1;
  padding-right: 25px;
  font-weight: 400;
  color: rgba(21, 20, 57, 0.4);
  font-weight: 600;
  font-size: 16px;
  /* letter-spacing: 1px; */
}
@media only screen and (max-width: 600px) {
  .checkbox-select__title {
    font-size: 14px;
  }
}
.checkbox-select__dropdown {
  opacity: 0;
  visibility: hidden;
  /* background: #fff url("http://res.cloudinary.com/dnhvfgp9c/image/upload/v1521734636/bcg-pattern.png") repeat; */
  background-color: #fff;
  position: absolute;
  left: 0;
  right: 0;
  box-shadow: 0 12px 15px 6px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 8px 8px;
  overflow: hidden;
  padding-bottom: 25px;
  z-index: 9;
}
.checkbox-select__dropdown:after,
.checkbox-select__dropdown:before {
  position: absolute;
  content: '';
  top: 0;
  display: block;
  height: 2px;
  z-index: 1;
}
/* .checkbox-select__dropdown:after {
  opacity: 0;
  background: var(--purple);
  left: -200px;
  width: 200px;
  background-color: #2980b9;
  transition: opacity 0.3s ease;
  animation: load 1.8s linear infinite;
  background: linear-gradient(135deg, #8f24ed 20%, #8f24ed 20%, #8f24ed 22%, #8f24ed 25%, #107cb3 100%);
} */
.checkbox-select__dropdown:before {
  width: 100%;
  background-color: var(--purple);
}
.checkbox-select__dropdown.activeSearch:after {
  opacity: 1;
}
.checkbox-select__dropdown .simplebar-scrollbar {
  width: 3px;
  right: 1px;
}
.checkbox-select__search-wrapp {
  padding: 10px 25px 5px;
}
@media only screen and (max-width: 600px) {
  .checkbox-select__search-wrapp {
    padding: 10px 15px 5px;
  }
}
.checkbox-select__search-wrapp input {
  width: 100%;
  height: 35px;
  border-width: 0 0 2px;
  border-style: solid;
  border-color: #2c3e50;
  font-size: 16px;
  /* font-family: "Roboto Slab", serif; */
  background: transparent;
}
.checkbox-select__search-wrapp ::-webkit-input-placeholder {
  /* Chrome/Opera/Safari */
  color: #b8b8b8;
  opacity: 1;
}
.checkbox-select__search-wrapp ::-moz-placeholder {
  /* Firefox 19+ */
  color: #b8b8b8;
  opacity: 1;
}
.checkbox-select__search-wrapp :-ms-input-placeholder {
  /* IE 10+ */
  color: #b8b8b8;
  opacity: 1;
}
.checkbox-select__search-wrapp :-moz-placeholder {
  /* Firefox 18- */
  color: #b8b8b8;
  opacity: 1;
}
.checkbox-select__col {
  display: flex;
  font-size: 12px;
  padding: 0 25px;
  justify-content: space-between;
  text-transform: uppercase;
}
@media only screen and (max-width: 600px) {
  .checkbox-select__col {
    padding: 0 15px;
  }
}
.checkbox-select__select-all label {
  cursor: pointer;
}
.checkbox-select__select-all input {
  display: none;
}
.checkbox-select__filters-wrapp {
  margin-top: 20px;
  height: 157px;
  overflow-y: auto;
}
.checkbox-select__check-wrapp {
  position: relative;
  padding: 0 25px;
  margin-bottom: 5px;
}
@media only screen and (max-width: 600px) {
  .checkbox-select__check-wrapp {
    padding: 0 15px;
  }
}
.checkbox-select__check-wrapp input[type='checkbox'] {
  display: none;
}
.checkbox-select__check-wrapp input[type='checkbox'] + label {
  position: relative;
  cursor: pointer;
  font-size: 16px;
  line-height: 22px;
  padding-left: 30px;
  display: inline-block;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  transition: padding 0.25s ease;
}
.checkbox-select__check-wrapp input[type='checkbox'] + label:after {
  border: solid 2px var(--purple);
  content: '';
  width: 22px;
  height: 22px;
  top: 0;
  left: 0;
  position: absolute;
}
.checkbox-select__check-wrapp input[type='checkbox'] + label:before {
  width: 14px;
  height: 14px;
  content: '';
  position: absolute;
  top: 4px;
  left: 4px;
  background-color: var(--purple);
  opacity: 0;
  will-change: transform;
  transform: scale(0.5);
  transition: all 0.2s ease;
}
.checkbox-select__check-wrapp input[type='checkbox'] + label:hover {
  padding-left: 32px;
}
.checkbox-select__check-wrapp input[type='checkbox']:checked + label:before {
  opacity: 1;
  transform: scale(1);
}

/* @keyframes load {
  0% {
    left: -200px;
    width: 20%;
  }
  50% {
    width: 40%;
  }
  70% {
    width: 60%;
  }
  80% {
    left: 50%;
  }
  95% {
    left: 120%;
  }
  100% {
    left: 100%;
  }
} */
.link {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 20px;
  z-index: 9999;
}
.link a {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #fff;
}
.link .fa {
  font-size: 28px;
  margin-right: 8px;
  color: #fff;
}
</style>
