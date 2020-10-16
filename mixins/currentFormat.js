export default {
  data() {
    return {
      resultCurrent: '',
      resultCurrent2: '',
      resultCurrentWapiMin: '',
      resultCurrentWapiMax: '',
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
    currentFormat2(valor, codigoPais, moneda) {
      if (codigoPais && moneda) {
        if (codigoPais == 'internacional') {
          {
            this.resultCurrent2 = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        } else {
          {
            this.resultCurrent2 = new Intl.NumberFormat(codigoPais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        }
      } else {
        this.resultCurrent2 = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
        }).format(valor)
      }
    },
    currentFormatWapiMin(valor, codigoPais, moneda) {
      if (codigoPais && moneda) {
        if (codigoPais == 'internacional') {
          {
            this.resultCurrentWapiMin = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        } else {
          {
            this.resultCurrentWapiMin = new Intl.NumberFormat(codigoPais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        }
      } else {
        this.resultCurrentWapiMin = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
        }).format(valor)
      }
    },
    currentFormatWapiMax(valor, codigoPais, moneda) {
      if (codigoPais && moneda) {
        if (codigoPais == 'internacional') {
          {
            this.resultCurrentWapiMax = new Intl.NumberFormat('en-IN', {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        } else {
          {
            this.resultCurrentWapiMax = new Intl.NumberFormat(codigoPais, {
              style: 'currency',
              currency: moneda,
              minimumFractionDigits: 0,
            }).format(valor)
          }
        }
      } else {
        this.resultCurrentWapiMax = new Intl.NumberFormat('es-CO', {
          style: 'currency',
          currency: 'COP',
          minimumFractionDigits: 0,
        }).format(valor)
      }
    },
  },
}
