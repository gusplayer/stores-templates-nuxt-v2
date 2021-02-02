<template>
  <div class="content-list">
    <div class="content-list-products">
        <div class="product-banner"> 
            <img src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-banner-1.jpg" alt="">
            <div class="product-banner-text">
                <h3>TRISTIQUE JUSTO</h3>
                <p>Started now shortly had for assured hearing expense led juvenile.</p>
            </div>
        </div>
        <div class="list">
          <kProductList :listproducts="listproducts"></kProductList>
        </div>
    </div>
    <div class="content-list-products">
        <div class="product-banner"> 
            <img src="https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-banner-1.jpg" alt="">
            <div class="product-banner-text">
                <h3>TRISTIQUE JUSTO</h3>
                <p>Started now shortly had for assured hearing expense led juvenile.</p>
            </div>
        </div>
        <div class="list">
          <kProductList :listproducts="listproducts"></kProductList>
        </div>
    </div>
  </div>
</template>

<script>
import kProductList from './Ko-product-list'
export default {
components: {
    kProductList
  },
  name: 'Ko-product-section',
  data() {
    return {
      listproducts: [
        {
          name: 'Joya1',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-1-430x430.jpg',
          category: 'Jewelry',
          price: '169',
        },
        {
          name: 'Joya2',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-2-430x430.jpg',
          category: 'Jewelry',
          price: '167',
        },
        {
          name: 'Joya3',
          img:
            'https://woodmartcdn-cec2.kxcdn.com/wp-content/uploads/2017/11/product-jew-img-3-430x430.jpg',
          category: 'Jewelry',
          price: '165',
        },
        
      ],
    }
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Marcellus+SC&display=swap');
/* .container {
  @apply w-full;
} */
.content-list{
margin: 0 auto;
padding: 20px;
}
.product-banner{
  @apply relative w-64;
}
.content-list-products{
  @apply grid grid-rows-1 p-5;
  grid-template-columns: .3fr 1fr;
}
.list{
  padding:0 3rem;
}
.product-banner-text{
    @apply absolute bottom-0 text-center p-5;
}
.product-banner-text p{
    
    @apply text-gray-textHeader text-sm;
}
@media screen and (max-width: 1000px){
  .content-list-products{
    grid-template-columns:1fr;
  }
  .product-banner{
    display: none;
  }
}
</style>
