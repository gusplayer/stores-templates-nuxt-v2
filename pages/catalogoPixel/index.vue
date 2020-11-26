<template>
  <div class="wrapper-catalogoPixel">
    <div class="container-catalogoPixel">
      <no-ssr>
        <table class="content-table">
          <tr>
            <th>id</th>
            <th>title</th>
            <th>link</th>
            <th>image_link</th>
            <th>product_type</th>
            <th>condition</th>
            <th>availability</th>
            <th>inventory</th>
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
            <td>Product {{ product.categoria }}</td>
            <td>new</td>
            <td>in stock</td>
            <td>{{ product.stock }}</td>
            <td>This is a product</td>
            <td>
              {{ product.precio | currency(dataStore.tienda.moneda) }}
            </td>
            <td>{{ product.marca }}</td>
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
        <div class="content-btn">
          <div>
            <facebook-icon class="iconF" />
            <instagram-icon class="iconI" />
          </div>
          <a
            href="https://komercia.co/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://res.cloudinary.com/komerciaacademico/image/upload/c_scale,w_300,q_auto:best,f_auto/v1599605487/1_aeokv2.png"
              class="logokomercia"
              alt="Logo Komercia"
            />
          </a>
          <button
            id="carga"
            class="btn-download"
            @click="exportTableToCSV('feedname.csv')"
          >
            Descargar archivo CSV
          </button>
        </div>
      </no-ssr>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.url = window.location.host
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
  background: white;
  box-sizing: border-box;
}
.container-catalogoPixel {
  width: 100%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
}
.content-table {
  max-height: 800px;
  overflow-x: auto;
  overflow-y: auto;
  z-index: -1;
  position: absolute;
  top: 0;
}
.content-btn {
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;
  height: calc(100vh - 332px);
}
.btn-download {
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  text-align: center;
  font-weight: 700;
  padding: 10px 5px;
  height: 41px;
  color: black;
  border-radius: 5px;
  border: solid 2px black;
  background-color: transparent;
  cursor: pointer;
}
.logokomercia {
  width: 200px;
}
.iconF {
  font-size: 50px;
  color: #3b5998;
}
.iconI {
  margin-right: 10px;
  font-size: 50px;
  color: #c13584;
}
</style>
