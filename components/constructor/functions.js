export const Bold = props => (
  <Text style={{ fontWeight: 'bold' }}>{props.children}</Text>
)

// #4429AE
// #4a59f5

export const Colors = {
  first: '#4429AE',
  // first: "#4a59f5",
  second: '#00DD8D',
  // second: "#30c490",
  third: '#f5aa3a',
  fourth: '#db5d2a',
  red: '#ff585a',
  another: '#12cc6f',
  morado_oscuro: '#1c2260',
  morado_claro: '#5c6af6',
  morado_claro_usado_en_alertas: '#4a59f5',
  verde_nuevo: '#57ad2a',
  verde_aguamarina_oscuro: '#0F9380',
  verde_aguamarina_claro: '#00c894',
  rojito_medio_morado: '#f14b5a',
  badge: '#0000ff',
  input_background: '#F6F7FA',
  placeholder_input: '#B0C4DE'
}

export const formatCurrency = n => {
  if (n) {
    return parseInt(n)
      .toFixed()
      .replace(/(\d)(?=(\d{3})+(,|$))/g, '$1,')
  } else {
    return 0
  }
}
