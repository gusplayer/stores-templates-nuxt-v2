<template>
  <div class="wrapper-dropdown">
    <el-dropdown>
      <span class="el-dropdown-link" aria-haspopup="list">
        {{ select.label }}<Flechadown-icon class="icon-dropdown" />
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="(option, index) in options"
          :key="index"
          v-show="select.lng != option.lng"
          @click.native="chooseLanguage(option)"
        >
          {{ option.label }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'k-select-language',
  mounted() {
    if (this.dataStore && this.dataStore.tienda) {
      switch (this.dataStore.tienda.lenguaje.toLowerCase()) {
        case 'es':
          this.select.label = 'Spanish (es)'
          this.select.lng = 'es'
          break
        case 'en':
          this.select.label = 'English (en)'
          this.select.lng = 'en'
          break
        case 'pt':
          this.select.label = 'Portuguese (pt)'
          this.select.lng = 'pt'
          break
        case 'fr':
          this.select.label = 'Francés (fr)'
          this.select.lng = 'fr'
          break
      }
    }
  },
  data() {
    return {
      select: {
        label: 'Spanish (es)',
        lng: 'es',
      },
      showDropdown: false,
      options: [
        {
          label: 'Spanish (es)',
          lng: 'es',
        },
        {
          label: 'English (en)',
          lng: 'en',
        },
        {
          label: 'Portuguese (pt)',
          lng: 'pt',
        },
        {
          label: 'Francés (fr)',
          lng: 'fr',
        },
      ],
    }
  },
  computed: {
    ...mapState(['dataStore']),
  },
  methods: {
    chooseLanguage(option) {
      this.select = option
      this.$i18n.locale = option.lng
      this.handleDropdown()
    },
    handleDropdown() {
      this.showDropdown = !this.showDropdown
    },
  },
}
</script>

<style scoped>
.wrapper-dropdown {
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}
.el-dropdown-link {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  cursor: pointer;
  color: white;
  font-size: 12px;
  /* font-family: 'Poppins'; */
}
.el-dropdown {
  margin: 8px;
}
.icon-dropdown {
  bottom: 1px;
}
.el-dropdown-menu {
  padding: 5px 0;
  margin: 2px 0;
  background-color: #fff;
  border: 1px solid #bebebe;
  border-radius: 5px;
}
.el-dropdown-menu__item {
  padding: 0 10px;
  color: black;
  /* font-family: 'Poppins'; */
}
.el-dropdown-menu__item:hover {
  color: #e64956;
}
</style>
