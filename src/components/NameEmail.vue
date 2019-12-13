<template lang="html">
  <div class="">
    <p>
      <legend for="name">
        Your Name:
      </legend>
      <b-form-input id="name" name="name" v-model="nameToSave"></b-form-input>
    </p>
    <p>
      <legend for="email">
        Your Email:
      </legend>
      <b-form-input id="email" name="email" v-model="emailToSave"></b-form-input>
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
