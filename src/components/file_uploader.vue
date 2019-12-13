<template lang="html">
  <div class="">
    <label for="file"> {{ fileUploaderTitle }} </label>
    <input type="file" @change="onFileSelected" name="file" value="">
  </div>
</template>

<script>
export default {
  name: 'FileUploader',
  props: [
    selectedFile,
    user,
    fileUploaderTitle
  ],
  methods: {
    onFileSelected(event) {
      console.log(event);
    },
  }
}
</script>

<style lang="css" scoped>
</style>
