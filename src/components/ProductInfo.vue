<template lang="html">
  <div>
    <b-card
      title=" product.name "
      img-src="  "
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
    >

      <b-card-text>
        {{ product.price }}

      </b-card-text>

      <b-button href=" product.affilate_link " variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<script>
var width = document.documentElement.clientWidth;
var height = document.documentElement.clientHeight;

export default {
  name: "productInfo",
  props: ['name', 'price', 'affilate_link']
}
</script>

<style lang="css" scoped>
</style>
