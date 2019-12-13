<template>
  <div>
    <section class="wrapper">
      <ProductInfo
        :name="product.name"
        :price="product.price"
        :affilate_link="product.affilate_link"


      />
      <h2>{{ product.name }}</h2>
      <p>Quanity: {{ counter }}</p>
      <b-form-input type="text" v-on:input="updateQuanity" v-on:keyup.up.down="keyboardCounter" name="" v-bind:value="counter"></b-form-input>
      <b-button v-on:click="increase" type="button" name="button">increase quanity</b-button>
      <b-button v-on:click="decrease" type="button" name="button">decrease quanity</b-button>
      <b-button type="button" name="addCart" v-on.click="cartAdd">Add to Cart</b-button>
    </section>
  </div>
</template>

<script>
import ProductInfo from '@/components/ProductInfo.vue'

export default {

  name: 'product',
  components: {
    ProductInfo
  },
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
      counter: 1
    }
  },
  computed: {
    cartAdd: function() {
      return this.$store.cart;

    }
  },
  methods: {
    increase: function() {
      this.counter++;
    },
    decrease: function() {
      this.counter--;
    },
    keyboardCounter: function(event) {
      if(event.keyCode == 38) {
        event.target.value++;
        this.counter++;
      }
      if(event.keyCode == 40) {
        event.target.value--;
        this.counter--;
      }
    },
    updateQuanity: function(event) {
     this.counter = Number(event.target.value);
   }
  }
};
</script>

<style lang="scss">
</style>
