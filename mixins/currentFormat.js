export default {
  data() {
    return {
      resultCurrent: '',
    }
  },
  methods: {
    currentFormat(valor, codigoPais, moneda) {
      if (codigoPais && moneda) {
        if (codigoPais == 'internacional') {
          {
            this.resultCurrent = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        } else {
          {
            this.resultCurrent = new Intl.NumberFormat(codigoPais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        }
      } else {
        this.resultCurrent = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
        }).format(valor)
      }
    },
  },
}
