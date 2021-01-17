<template>
  <div class="product-content">
    <div class="producto-items-content">
      <div class="product-text">
        <div class="product-tittle">
          <span class="tittle">Accesorios de madera.</span>
        </div>
        <div class="product-subtittle">
          <span class="subtittle">Productos Destacados</span>
        </div>
        <div class="product-description">
          <span class="description">
            Es un hecho establecido desde hace mucho tiempo que un lector se
            distraerá
          </span>
        </div>
      </div>
      <div class="product-conten-items">
        <div v-for="(productsitems, index) in this.Prodructos" :key="index">
          <KOproductos
            :productos="productsitems"
            class="products"
          ></KOproductos>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import KOproductos from '../../../components/template7/_productsItems/productosItems'
export default {
  components: {
    KOproductos,
  },
  data() {
    return {
      Prodructos: [
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609882972/Komercia/Products/flowers-product-1-opt-380x513_ldz0bi.jpg',
          tittle: 'Rosas en rosa',
          description: 'Flores',
          precio: '299.00 $',
          hover: 'Añadir al carrito',
          id: '1',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-2-opt-380x513_ad3a9a.jpg',
          tittle: 'Jardín del Edén',
          description: 'Flores',
          precio: '279.00 $',
          hover: 'Añadir al carrito',
          id: '2',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-3-opt-380x513_lzy0xg.jpg',
          tittle: 'Belleza eterna',
          description: 'Flores',
          precio: '229.00 $',
          hover: 'Añadir al carrito',
          id: '3',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-4-opt-380x513_uw3xtk.jpg',
          tittle: 'Rosas en negro',
          description: 'Flores',
          precio: '269.00 $',
          hover: 'Añadir al carrito',
          id: '4',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-5-opt-380x513_kjj4ha.jpg',
          tittle: 'Tulipanes en Ronda',
          description: 'Flores',
          precio: '250.00 $',
          hover: 'Añadir al carrito',
          id: '5',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-6-opt-380x513_ugsi6l.jpg',
          tittle: 'Flores de temporada',
          description: 'Flores',
          precio: '219.00 $',
          hover: 'Añadir al carrito',
          id: '6',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-7-opt-380x513_dspuys.jpg',
          tittle: 'Aroma de verano',
          description: 'Flores',
          precio: '219.00 $',
          hover: 'Añadir al carrito',
          id: '7',
        },
        {
          photo:
            'https://res.cloudinary.com/brahyanr10/image/upload/c_scale,q_auto:best,f_auto/v1609187409/Komercia/Products/flowers-product-8-opt-380x513_mhm79t.jpg',
          tittle: 'Rosas en azul',
          description: 'Flores',
          precio: '269.00 $',
          hover: 'Añadir al carrito',
          id: '8',
        },
      ],
    }
  },
}
</script>
<style scoped>
.product-content {
  @apply flex flex-col justify-center items-center w-full my-80;
}
.product-text,
.product-conten-items {
  @apply flex flex-col justify-center items-center w-full;
}
.product-tittle,
.product-subtittle,
.product-description,
.tittle,
.subtittle,
.description,
.product-conten-items,
.producto-items-content {
  @apply flex flex-col justify-center items-center text-center;
}

.tittle {
  font-family: 'Great Vibes', cursive !important;
  color: #ed2353;
}
.subtittle {
  font-family: 'David Libre', serif !important;
  color: #2d2a2a;
}
.description {
  font-family: 'Lora', serif !important ;
  color: #777;
}

@screen sm {
  .producto-items-content {
    @apply w-9/5;
  }
  .product-conten-items {
    @apply grid grid-cols-2;
  }
  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 42px;
    font-size: 32px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
@screen md {
  .product-conten-items {
    @apply grid grid-cols-3;
  }
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
}
@screen lg {
  .product-text {
    @apply w-full;
  }
  .product-conten-items {
    @apply grid grid-cols-4;
  }
}
@screen mlg {
  .producto-items-content {
    @apply w-9/3;
  }
}
@screen xl {
  .producto-items-content {
    @apply w-8/3;
  }
}
@screen xml {
  .producto-items-content {
    @apply w-6/3;
  }

  @screen xxl {
    .producto-items-content {
      @apply w-4/6;
    }
  }

  .tittle {
    line-height: 34px;
    font-size: 24px;
  }
  .subtittle {
    line-height: 46px;
    font-size: 36px;
  }
  .description {
    line-height: 24px;
    font-size: 14px;
  }
}
</style>
