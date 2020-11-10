<template>
  <div class="wrapper-catalogoPixel">
    <div class="container-catalogoPixel content-table">
      <no-ssr>
        <table>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>link</th>
            <th>image_link</th>
            <th>product_type</th>
            <th>condition</th>
            <th>availability</th>
            <th>description</th>
            <th>price</th>
            <th>brand</th>
            <th>mpn</th>
            <th>shipping</th>
            <th>google_product_category</th>
          </tr>
          <tr v-for="(product, index) in fullProducts" :key="index">
            <td>{{ product.id }}</td>
            <td>{{ product.nombre }}</td>
            <td>{{ `https://${url}/productos/${product.slug}` }}</td>
            <td>{{ product.foto_cloudinary }}</td>
            <td>product</td>
            <td>new</td>
            <td>in stock</td>
            <td>This is a product</td>
            <td>
              {{ product.precio | currency(dataStore.tienda.moneda) }}
            </td>
            <td>ZZZ</td>
            <td>G{{ index }}</td>
            <td>
              {{
                product.precio
                  | currencyShipping(
                    dataStore.tienda.codigo_pais,
                    dataStore.tienda.moneda
                  )
              }}
            </td>
            <td>{{ product.categoria }}</td>
          </tr>
        </table>
        <button @click="exportTableToCSV('feedname.csv')">
          Export HTML Table To CSV File
        </button>
      </no-ssr>
    </div>
    <div class="container-catalogoPixel">
      <a href="https://komercia.co/" target="_blank" rel="noreferrer noopener">
        <img
          src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_300,q_auto:best,f_auto/v1599605487/1_aeokv2.png"
          class="logokomercia"
          alt="Logo Komercia"
        />
      </a>
      <p class="icon-more">+</p>
      <img
        src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_300,q_auto:best,f_auto/v1605045287/xfacebook-pixel-logotyp.png.pagespeed.ic.LYUwNiemhv_tugqs7.png"
        class="logoPixelFacebook"
        alt="Logo Komercia"
      />
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.url = window.location.host
    if (this.fullProducts) {
      //   this.exportTableToCSV('feedname.csv')
    }
  },

  data() {
    return {
      url: '',
    }
  },
  computed: {
    dataStore() {
      return this.$store.state.dataStore
    },
    fullProducts() {
      return this.$store.getters['products/filterProducts']
    },
  },
  methods: {
    exportTableToCSV(filename) {
      var csv = []
      var rows = document.querySelectorAll('table tr')
      for (var i = 0; i < rows.length; i++) {
        var row = [],
          cols = rows[i].querySelectorAll('td, th')
        for (var j = 0; j < cols.length; j++) row.push(cols[j].innerText)
        csv.push(row.join(','))
      }
      this.downloadCSV(csv.join('\n'), filename)
    },
    downloadCSV(csv, filename) {
      var csvFile
      var downloadLink
      csvFile = new Blob([csv], { type: 'text/csv' })
      downloadLink = document.createElement('a')
      downloadLink.download = filename
      downloadLink.href = window.URL.createObjectURL(csvFile)
      downloadLink.style.display = 'none'
      document.body.appendChild(downloadLink)
      downloadLink.click()
    },
  },
  filters: {
    currency(value, moneda) {
      if (moneda) {
        return `${value
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${moneda}`
      }
    },
    currencyShipping(value, codigo_pais, moneda) {
      if (codigo_pais) {
        return `${codigo_pais.toUpperCase()}:::${value
          .toString()
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')} ${moneda}`
      }
    },
  },
}
</script>

<style scoped>
.wrapper-catalogoPixel {
  width: 100%;
  height: calc(100vh - 332px);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background_color_2);
  box-sizing: border-box;
}
.container-catalogoPixel {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.content-table {
  max-height: 800px;
  overflow-x: auto;
  overflow-y: auto;
  display: none;
}
.logokomercia {
  width: 200px;
}
.icon-more {
  font-size: 30px;
  font-weight: bold;
  padding: 10px 0;
}
</style>
