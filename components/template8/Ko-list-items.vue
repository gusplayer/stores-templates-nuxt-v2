<template>
  <div class="container content-block">
    <div class="content-todo">
      <div class="content-img">
        <div class="img-content">
          <img
            src="https://woodmart.xtemos.com/wp-content/uploads/2017/11/jewelry-banner-img-1.jpg"
            alt=""
          />
        </div>
        <div class="text-content">
          <h3>
            Special offer
          </h3>
          <h1>Mauris Rhoncus</h1>
          <h4>Curabitur non nullat amet.</h4>
          <div
            class="bg-gray-textHeader text-white-white w-1/2 p-2 my-5 text-center"
          >
            View more
          </div>
        </div>
      </div>
      <div class="products">
        <div>
          <h3>Featured products</h3>
          <div
            class="product"
            v-for="(product, index) in products"
            :key="index"
          >
            <img class="img-product" :src="product.img" alt="" />
            <div>
              <p>{{ product.name }}</p>
              <p
                style="
                  color: #c3935b;
                  font-size: 14px;
                  font-weight: 700;
                  margin: 10px 0px;
                "
              >
                ${{ product.price }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3>New products</h3>
          <div
            class="product"
            v-for="(product, index) in products"
            :key="index"
          >
            <img class="img-product" :src="product.img" alt="" />
            <div>
              <p>{{ product.name }}</p>
              <p
                style="
                  color: #c3935b;
                  font-size: 15px;
                  font-weight: 700;
                  margin: 10px 0px;
                "
              >
                ${{ product.price }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Ko-list-items',
  data() {
    return {
      products: [
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
.content-todo {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
.content-block{
  margin:0 auto;
}
.products {
  display: grid;
  grid-auto-flow: column;
  grid-gap: 15px;
}
.content-img {
  display: flex;
  position: relative;
  padding: 20px;
}
.text-content {
  right: 0;
  height: 100%;
  background-color: transparent;
  position: absolute;
  width: 50%;
  padding: 20px;
}
.text-content h1 {
  font-size: 50px;
  line-height: 50px;
}
.text-content h3 {
  font-style: italic;
  font-family: Lora;
  font-size: 15px;
}
.text-content h4 {
}
.products h3 {
  font-size: 22px;
}
.product {
  display: grid;
  grid-template-columns: 0.5fr 1fr;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgb(184, 184, 184);
}
@media (max-width: 1000px) {
  .content-todo {
    grid-template-columns: 1fr;
    justify-content: center;
    justify-items: center;
  }
}
</style>
