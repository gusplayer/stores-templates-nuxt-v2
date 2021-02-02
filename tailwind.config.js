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
        '1/1': '11%',
        '1/2': '12%',
        '1/3': '13%',
        '1/4': '14%',
        '1/5': '15%',
        '2/0': '20%',
        '3/0': '30%',
        '3/5': '35%',
        '4/0': '40%',
        '4/1': '41%',
        '4/2': '42%',
        '4/3': '43%',
        '4/4': '44%',
        '4/5': '45%',
        '4/6': '46%',
        '4/7': '47%',
        '4/8': '48%',
        '5/0': '50%',
        '6/0': '60%',
        '6/3': '63%',
        '6/4': '64%',
        '6/5': '65%',
        '7/0': '70%',
        '8/0': '80%',
        '8/2': '82%',
        '8/3': '83%',
        '8/4': '84%',
        '8/5': '85%',
        '8/6': '86%',
        '8/3': '83%',
        '9/0': '90%',
        '9/3': '93%',
        '9/4': '94%',
        '9/8': '98%',
        '9/5': '95%',
        '9/6': '96%',
        '9/7': '97%',
        '9/8': '98%',
        '9/9': '99%',
        '10/0': '100%',

        '10': '10px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',

        '9': '2.25rem',
      },
      height: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '8': '8px',
        '9': '9px',

        '10': '10px',
        '16': '16px',
        '20': '20px',
        '24': '24px',
        '28': '28px',
        '30': '30px',
        '36': '36px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
      },
      margin: {
        '10': '10px',
        '20': '20px',
        '24': '24px',
        '30': '30px',
        '40': '40px',
        '50': '50px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '90': '90px',
        '100': '100px',
      },
      maxHeight: {
        '0': '0',
        '1': '25%',
        '2': '50%',
        '3': '75%',
        '16': '4rem',
        '230': '14rem',
        full: '100%',
      },
      fontSize: {
        xs: '.75rem',
        sm: '.875rem',
        tiny: '.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '4.4xl': '2.45rem',
        '4.5xl': '2.50rem',
        '5xl': '3rem',
        '6xl': '4rem',
        '7xl': '5rem',
      },
      borderRadius: {
        '1': '1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
      },

      backgroundImage: (theme) => ({
        footerbg:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610007327/Komercia/Footer/flowers-footer-bg_bkpqsk.jpg')",
        bannerbg1:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610007011/Komercia/Carousel-Slider/flowers-slider-1-bg-opt_pjvepv.jpg')",
        bannerbg2:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610007015/Komercia/Carousel-Slider/flowers-slider-2-bg_bjeems.jpg')",
        bannerbg3:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610007018/Komercia/Carousel-Slider/flowers-slider-3-bg_fyovcu.jpg')",
        promobg1:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-large-min_kdnmvh.jpg')",
        promobg2:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-medium-top_irhu3b.jpg')",
        promobg3:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-banner-medium-bottom_rnpeht.jpg')",
        promobg4:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Promo-wrapper/flowers-bottom-right-full-heigh-min_gbnlij.jpg')",
        advertisingbg:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609975091/Komercia/PublicShare/flowers-discount-bg-opt_yvc5ta.jpg')",
        hworkbg:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1610008708/Komercia/Work/flowers-infobox-line-bg_wcixcy.svg')",
        shopbg:
          "url('https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1611623008/Komercia/Shop/flowers-shoppage_jwuds4.jpg')",
      }),
    },
    screens: {
      sm: '300px',
      // => @media (min-wipxdth: 200px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      mlg: '1280px',
      // => @media (min-width: 1280px) { ... }
      xl: '1440px',
      // => @media (min-width: 1440) { ... }
      xml: '1920px',
      // => @media (min-width: 19200) { ... }
      xxl: '2560px',
      // => @media (min-width: 2560) { ... }
    },
    colors: {
      black: '#000',
      white: '#fff',

      redes: {
        twitter: '#00acee',
        facebook: '#3b5998',
        instagram: '#3f729b',
        youtube: '#c4302b',
      },
      white: {
        white: '#ffffff',
      },
      blue: {
        headerbg: '#E4F2F5',
        headerpage: '#125C77',
      },
      red: {
        btnhoverHeader: '#ED2353',
        btnbannershop: '#ED2353',
        btnbannershophover: '#D7204B',
        btnhoverproducts: '#F14F75',
      },
      gray: {
        textHeader: '#3f3f3f',
        btnbannerviewhover: '#5C7882',
        headerinputph: '#b7b7b7',
        searchcontent: '#7F7F7F',
      },
      coffe: {
        headerpage: '#b09782',
      },
      rose: {
        headerpage: '#93646A',
        btnbannerviewhover: '#C18F96',
      },
    },
  },
  variants: {},
  plugins: [],
}
