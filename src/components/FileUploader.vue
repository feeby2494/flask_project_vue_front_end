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
    'fileUploaderTitle', 'user', 'selectedFile'
  ],
  methods: {
    onFileSelected(event) {
      console.log(event);
      this.selectedFile = event.target.files[0];
    }
  }
}
</script>

<style lang="css" scoped>
</style>
