<template lang="html">
  <div class="">
    <p>
      <legend for="name">
        Your Name:
      </legend>
      <input id="name" name="name" v-model="nameToSave">
    </p>
    <p>
      <legend for="email">
        Your Email:
      </legend>
      <input id="email" name="email" v-model="emailToSave">
    </p>
  </div>
</template>

<script>
export default {
  name: 'NameEmail',
  props: ['nameToSave', 'emailToSave']
}
</script>

<style lang="css" scoped>
</style>
