<template>
  <div>
    <section class="wrapper">
      <h2>{{ product.name }}</h2>
      <p>Quanity: </p>
      <input type="text" v-on:input="updateQuanity" v-on:keyup.up.down="keyboardCounter" name="" v-bind:value="counter">
      <button v-on:click="increase" type="button" name="button">increase quanity</button>
      <button v-on:click="decrease" type="button" name="button">decrease quanity</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'product',
  data() {
    return {
      product: this.$store.getters.product(this.$route.params.id),
      counter: 1
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
