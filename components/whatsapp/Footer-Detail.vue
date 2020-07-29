<template>
  <div class="main-container">
    <div class="product-link" @click="openOrder">
      <!-- <img
        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFhklEQVRoge2aa2wVRRTHf7ft7YWg5WEMtUQxFEQtEsVUGxA0XjURVEz8QEyxAWOMgq9alZiYGKNR44OYGKM1gI9Eo6jEKBhFKRb9oKKYqHxQXoKPYqtVimJbbrt+OGed6e3Odu/evf1g/CebTeecOfPf3Zk5/zm38D9CMUGvkiGVUJwaIAssAGYBM4GJeT7dwHfAN0A7sAXoSGj8WKgEmoCtwADgWddRoBPYo1enttk+A0AbcI3GGjVUACuAAxaZDmAN0Aic6iBUqbal6nvQ6r8fuAEoLzF36oEvrYHfAxbGHLgCWARstuJ9AZydCNM8pIDbgX4d6FPg3ATjNwDbNXYfcCvJrU8qgHVW8GagLKngFsqAFsxLWkMCU6oC2ICZ5/XFBoyABsz6eJ0iHiKFefN7gdok2EXEdB3T/xKxplOLBvgFOCUxatExDfnqHnBLoZ3rkbnYx+hMGxcaLB6Rd6cKzFbZHOI3FbgZeBhYBUyOTTMcdyiXz4m4HlZgtkrXbnMR8CdDM+suYEyRZINQjpD3gOtHcq7EZFjXPn8ycEh9WjXoNv37xqLpBmOexv8eSIc5NmEyrAvr1ecxq+0Cbfu6CJIj4QMdY2mYU5s6LXTYpyCirIOheieFqEwPOL9Ypg5cpvHfdznUIAqxA1nIQWjUIM8G2FaqbX1RNN1II1v6ANaGYS/SrP69Ccg5gtTofX+A7UWgB7gSGF8k2SAcBd5BOGb9RvsBFuh9a0iQXr0f57AfQd7UsfE4jog2vf87Te0HqNP7jpAA3+r9rLz2cuAloBp4A/gxPsdQ+Nzqgoy/IZ8p7HQ0FjkaDjBUGzVjNFOpEhpABpneXX5DmXWfqOT6QwL8Dbyg/vdY7dV634QstFKhD+E4ibwkW4W8wd0RgpyIZOFBzLqp1bYccF5CZF3Yg3Adss7GaeO+iEF8fbILeXgQXeSfG05KgqkDgQ8A8nn+iBikDHOW3aB/p4CXMV9yqqNvGlgCXIXM6ULRiazBYTrtIDItXEksH5MxuulRbcsAG7WtC7gkr08KeAUjAH8G7iZ63vAXcWeQ0RdkZ0QMBjAbSV72oSMDrNW2QeA5zJS6V9sPAO+q3UO+/AOYzcCFOvX/OMi4Wo3XFvAAAJciO9cgUrnwsQzZmj21b1Sfv4A56jMbyR859esBTg8ZyxebrUHGJWpcV+ADgMiHPu3/FGYaHg88jvlKOR0nH9MxavPOkHGeV5+rg4zjEanQTbxS38XA7zrAJ0gVzscEHXROQD8fT2rfZQ57Gpn7OUKS5ZsaZHFE0vmYCXylMY4gx81JEfplEJni4S4gXK72zWGBFqtTezS+TjIPYQpUh4BnkFNVUHmkGjlA+edeVwlli/o0hg2ewrzBbJhjBExD5qxdld6NLMDbkLm+FlnUvm2GI9Z8TKINPVKClLv9BJUETkB2J7sobF/9wNO4fwgpR1SoB1yXbwxKWr40SEoSdyBb9GpkjcxDDkZ9wE/I1AgTgC2IfN9OxB3ybeRpF8WmnBzmIl+ol+FnkEBUAoe1wzGl4xUJtZgi78qonbKMcPIfJcxAFqwz67rwiHZqKQGpqJiLrAkPeI0Cy+v+FjoreV4johy4C5M/WimQ/BREbP0Q4jMGqcI1k+zJaz5mq+wFbooTZDnmBwUfY4ELgfuQ7NzL0D18G3AF8bRTGpEHfjXQAz4DzoxDHuBVDfIEcD/wEUZh+tdhRMc/COy02rsR3b8ckchB+SWD6PkmJEN3Wv33IUkq9m9vZRjtbl89SDVsFfJjg00shbzBtxj+ZTxEme5FzrC/YjS/f+UQYdZIBHnggi+c0jpYFfLm2/XagbvMaKMKKQifg0jm05AyjU2sC/lXg53Ah8jUSbQEkyH5X8rHUZo66X8H/wCedJPda4pu8gAAAABJRU5ErkJggg=="
      />-->
      <whatsapp-icon class="wp-icon" />
      <p class="unidades">Whatsapp</p>
    </div>
    <div class="add-cart">
      <cart-icon class="cart-icon" />
      <p class="unidades">Agregar</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      saleAmount: 0,
    }
  },
  methods: {
    openOrder() {
      this.$store.state.openOrder = true
    },
  },
  computed: {
    productsCart() {
      return this.$store.state.productsCart
    },
    sumValueSale() {
      this.saleAmount = (obj) =>
        this.productsCart.values(obj).reduce((a, b) => a.precio + b.precio)
    },
  },
}
</script>

<style scoped>
.main-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  width: 100%;
  background: #fff;
  position: fixed;
  bottom: 0;
  padding: 8px;
  z-index: 999;
}
.product-link {
  width: 59%;
  background-color: #25d366;
  height: 100%;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.product-link img {
  width: 20px;
  margin-right: 10px;
  filter: grayscale(1) brightness(2);
}
p {
  color: #fff;
  font-size: 14px;
}
.valor {
  font-size: 12px;
  text-align: right;
  background-color: #12a493;
  padding: 6px;
  width: auto;
  border-radius: 5px;
}
.add-cart {
  width: 39%;
  background-color: #455a64;
  /* background-image: linear-gradient(130deg, #128c7e 0, #2ec4a1 80%); */
  height: 100%;
  border-radius: 6px;
  padding: 0px 9px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.wp-icon {
  color: white;
  margin-right: 4px;
  font-size: 18px;
  margin-top: -4px;
}
.cart-icon {
  color: white;
  margin-right: 4px;
  font-size: 18px;
  margin-top: -4px;
}
</style>