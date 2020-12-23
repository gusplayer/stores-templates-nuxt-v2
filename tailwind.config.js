module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      width: {
        '1/0': '10%',
        '2/0': '20%',
        '3/0': '30%',
        '3/5': '35%',
        '4/0': '40%',
        '5/0': '50%',
        '6/0': '60%',
        '7/0': '70%',
        '8/0': '80%',
        '9/0': '90%',
        '10/0': '100%',
        
        '9': '2.25rem',
      },
      height: {
        '7': '1.75rem',
        '9': '2.25rem',
      },
      fontFamily: {
        'sans': ['ui-sans-serif'],
       },
      maxHeight: {
        '0': '0',
        '1': '25%',
        '2': '50%',
        '3': '75%',
        '16': '4rem',
        '230': '14rem',
        'full': '100%',
       },
       backgroundImage: theme => ({
        'headaerbg': "url('/img/hero-pattern.svg')",
       })
    },
    screens: {
      'sm':'300px',
      // => @media (min-wipxdth: 200px) { ... }
      'md': '700px',
      // => @media (min-width: 768px) { ... }
      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'xl': '1440px',
      // => @media (min-width: 1440) { ... }
    },
    colors: {
      redes: {
        twitter: '#00acee',
        facebook: '#3b5998',
        instagram: '#3f729b',
        youtube: '#c4302b',
      },
      white: {
        white: '#ffffff'
      },
      blue: {
        headerbg: '#E4F2F5',
        headerpage: '#125C77',
      },
      red: {
        btnhoverHeader: '#ED2353',
        btnhomeshop: '#ED2353',
        btnhomeshophover: '#D7204B',
        
      },
      gray: {
        textHeader: '#3f3f3f',
        btnhomeviewhover: '#5C7882',
      },
    }
  },
  variants: {},
  plugins: [],
}
