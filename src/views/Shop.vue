<template>
  <div class="home">

    <section class="wrapper">
      <h2> Featured Items </h2>
      <ul class="featured-items">
        <li v-for="product in products" :key="product.id" class="featured-items_item">
          <router-link :to="{ name: 'product', params: { id: product.id}}">
            <img class="product-image" :src="imagePath(product)" alt="">
            <p class="product-title">{{ product.name }}</p>
            <p><em>${{ product.price }}</em></p>
          </router-link>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'shop',
  components: {
    HelloWorld
  },
  props: [],
  data() {
    return {
      products: null
    }
  },
  methods: {
    imagePath(product) {
      try {
        return require(`../assets/imagesForVueClient/products/${product.images[0]}`);
      } catch (e) {
        return require(`../assets/imagesForVueClient/iLookStupid.jpg`);
      }

    }
  }
}
</script>

<style lang="scss">
.wrapper {
  max-width: 800px;
  margin: 0 auto;
  @media only screen and (max-width: 832px) {
    max-width: 100%;
    padding: 1rem;
    text-align: center;
  }
}
.featured-items {
  padding-left: 0;
  list-style: none;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 832px) {
    flex-direction: column;
  }
}
.featured-items_item {
  width: 30%;
  display: flex;
  flex-direction: column;
  text-align: center;
  @media only screen and (max-width: 832px) {
    width: 100%;
  }
}
.product-image {
  max-height: 175px;
  align-self: center
}
.product-title {
  font-weight: bold;
}
</style>
