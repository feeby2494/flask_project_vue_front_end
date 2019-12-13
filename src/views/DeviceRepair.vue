<template lang="html">
  <div class="" id="device" class="wrapper">
    <b-form class="" action="index.html" method="post">
      <div class="" v-show="step === 0">
        <b-form-group
          id="deviceType"
          label="Select your Device Type:"
          label-for="deviceTypeInput-1"
        >
          <b-form-select id="deviceTypeInput-1" name="deviceType" v-model="repair.deviceType">
            <option value="notebook">Notebook</option>
            <option value="smartphone">Smartphone</option>
            <option value="tablet">Tablet</option>
            <option value="desktop">Desktop computer</option>
            <option value="chromebook">Chromebook</option>
          </b-form-select>
        </b-form-group>
        <div class="" v-show="repair.deviceType === 'notebook'">
          <p>notebook</p>
          <b-form-group
            id="notebookBrand"
            label="Brand:"
            label-for="notebookBrandInput-1"
          >
            <b-form-select id="notebookBrandInput-1" name="notebookBrand" v-model="repair.brand">
              <option value="Samsung">Samsung</option>
              <option value="LG">LG</option>
              <option value="Purism">Purism</option>
              <option value="Dell">Dell</option>
              <option value="HP">HP</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Asus">Asus</option>
              <option value="Acer">Acer</option>
              <option value="MSI">Msi</option>
              <option value="Lenovo">Lenovo</option>
              <option value="Microsoft">Microsoft</option>
              <option value="Apple">Apple</option>
            </b-form-select>
          </b-form-group>
        </div>
        <div class="" v-show="repair.deviceType === 'smartphone'">
          <p>smartphone</p>
          <b-form-group
            id="smartphoneBrand"
            label="Brand:"
            label-for="smartphoneBrandInput-1"
          >
            <b-form-select  id="smartphoneBrandInput-1" name="smartphoneBrand" v-model="repair.brand">
              <option v-for=" brand in phones " v-bind:value="brand.name">{{ brand.name }}</option>
            </b-form-select>
          </b-form-group>
        </div>
        <div class="" v-show="repair.deviceType === 'desktop'">
          <p>desktop</p>
        </div>
        <div class="" v-show="repair.deviceType === 'chromebook'">
          <p>chromebook</p>
        </div>
        <b-button @click.prevent="next()">Next</b-button>
      </div>
      <div class="" v-show="step === 1">


        <b-button class="mr-2" @click.prevent="prev()">Previous</b-button>
        <b-button @click.prevent="next()">Next</b-button>
      </div>
      <div class="" v-show="step === 2">

        <b-button class="mr-2" @click.prevent="prev()">Previous</b-button>
        <b-button type="submit" value="Save">Finished</b-button>
      </div>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'deviceRepair',
  data() {
    return {
      step: 0,
      repair: {
        deviceType: '',
        brand: '',
        model: '',
        serial: '',
      },
      phones: {
        "Samsung": {name: "Samsung"},
        "LG": {name: "LG"},
        "Pantech": {name: "Pantech"},
        "Purism": {name: "Purism"},
        "Nokia": {name: "Nokia"},
        "Palm": {name: "Palm"},
        "Google": {name: "Google"},
        "HTC": {name: "HTC"},
        "Vivo": {name: "Vivo"},
        "Oppo": {name: "Oppo"},
        "Honor": {name: "Honor"},
        "Huawei": {name: "Huawei"},
        "Xiaomi": {name: "Xiaomi"},
        "Meizu": {name: "Meizu"},
        "OnePlus": {name: "OnePlus"},
        "Lenovo": {name: "Lenovo"},
        "Qiku360": {name: "Qiku360"},
        "Smartisan": {name: "Smartisan"},
        "Asus": {name: "Asus"},
        "ZTE": {name: "ZTE"},
        "Coolpad": {name: "Coolpad"},
        "Sony": {name: "Sony"},
        "Sharp": {name: "Sharp"},
        "Fujitsu": {name: "Fujitsu"},
        "Toshiba": {name: "Toshiba"},
        "Panasonic": {name: "Panasonic"},
        "NEC": {name: "NEC"},
        "Kyocera": {name: "Kyocera"},
        "Freetel": {name: "Freetel"},
        "Motorola": {name: "Motorola"},
        "BlackBerry": {name: "BlackBerry"},
        "Microsoft": {name: "Microsoft"},
        "Apple": {name: "Apple"},
      }
    }
  },
  methods: {
    prev() {
      this.step--;
    },
    next() {
      this.step++;
    },
    onSubmit(event) {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
