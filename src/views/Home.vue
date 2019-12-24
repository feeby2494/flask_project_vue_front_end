<template>
  <div class="home">

    <section class="wrapper mt-3">
      <h2> Shopping Our Items </h2>
      <h3>New Items for Low Prices!</h3>
      <p>Shop from our selection of hot products and second hand parts and equipment!
        We offer a selection of unique tools and parts that have been put to the test by us.
      </p>
      <h3>Used Items from Us and Others!</h3>
      <p>
        Look out for chances to buy items we don't need too! From anything like cars parts to
        unused soldier stations. We don't have all the space in the world and it's no use just letting stuff sit around!
        On occassion, if space permits, we can also sell used items from our customers.
      </p>

    </section>
    <hr>
    <section class="wrapper">
      <h2> Repair and Warranty Services </h2>
    </section>
    <hr>
    <section class="wrapper">
      <h2> Web and IT Support Services </h2>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: [],
  computed: {
    products() {
      return this.$store.state.products
    }
  },
  methods: {

  }
}
</script>

<style lang="scss">
.wrapper {
  max-width: 900px;
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
