<template>
  <main>
    <section v-for="(section, i) in data" :key="section.id">
      <section-with-title
        :id="`${i + 1 === data.length ? 'LastSection' : ''}`"
        :title="section.title"
        :subtitle="section.subtitle"
      >
        <div class="products-wrapper">
          <product-card
            v-for="product in section.products"
            :key="product.id"
            :name="product.name"
            :price="product.price"
            :image-src="product.image"
            :description="product.description"
          />
        </div>
      </section-with-title>
    </section>
  </main>
</template>

<script>
import ProductCard from './ProductCard'
import SectionWithTitle from './SectionWithTitle'

export default {
  name: 'ISection',
  components: {
    SectionWithTitle,
    ProductCard,
  },
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.products-wrapper {
  display: grid;
  -ms-grid-columns: repeat(auto-fit, minmax(420px, 1fr));
  grid-template-columns: repeat(auto-fit, minmax(420px, 1fr));
}

@media screen and (min-width: 1200px) {
  .products-wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1500px) {
  .products-wrapper {
    max-width: 70%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1700px) {
  .products-wrapper {
    max-width: 80%;
    margin: 0 auto;
  }
}

@media screen and (min-width: 1800px) {
  .products-wrapper {
    max-width: 50%;
    margin: 0 auto;
  }
}

</style>
