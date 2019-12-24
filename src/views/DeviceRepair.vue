<template lang="html">
  <div class="outsideWrapper mt-0">
    <div>

    </div>
    <div class="wrapper mt-3">
      <b-card no-body class="overflow-hidden" style="max-width:800px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require(`../assets/imagesForVueClient/youtube_banner.jpg`)" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Repair Services">
              <b-card-text>
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
                    <!-- First form for NoteBooks -->
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
                    <!-- First form for SmartPhones -->
                    <div class="" v-show="repair.deviceType === 'smartphone'">
                      <b-form-group
                        id="smartphoneBrand"
                        label="Brand:"
                        label-for="smartphoneBrandInput-1"
                      >
                        <b-form-select  id="smartphoneBrandInput-1" name="smartphoneBrand" v-model="repair.brand">
                          <option v-for=" brand in phones " v-bind:value="brand.name">{{ brand.name }}</option>
                        </b-form-select>
                      </b-form-group>
                      <div class="" v-if="repair.brand">
                        <b-form-group
                          id="smartphoneModel"
                          label="Model:"
                          label-for='phoneModelInput-1'
                        >
                          <b-form-select id="phoneModelInput-1" name="phoneModel" v-model="repair.model">
                            <option v-for=" model in phones[repair.brand].models " v-bind:value="model.name">{{ model.name }}</option>
                          </b-form-select>
                        </b-form-group>
                      </div>
                      <div class="" v-if="repair.model">
                        <b-form-group
                          id="smartphoneVersion"
                          label="Version:"
                          label-for='phoneVersionInput-1'
                        >
                          <b-form-select id="phoneVersionInput-1" name="phoneVersion" v-model="repair.version">
                            <option v-for=" version in phones[repair.brand].models[repair.model].versions " v-bind:value="version.name">{{ version.name }}</option>
                          </b-form-select>
                        </b-form-group>
                      </div>
                    </div>
                    <!-- First form for Desktops -->
                    <div class="" v-show="repair.deviceType === 'desktop'">
                      <p>desktop</p>
                    </div>
                    <!-- First form for ChromeBooks -->
                    <div class="" v-show="repair.deviceType === 'chromebook'">
                      <p>chromebook</p>
                    </div>
                    <b-button variant="info" @click.prevent="next()">Next</b-button>
                  </div>
                  <div class="" v-show="step === 1">


                    <b-button variant="info" class="mr-2" @click.prevent="prev()">Previous</b-button>
                    <b-button variant="info" @click.prevent="next()">Next</b-button>
                  </div>
                  <div class="" v-show="step === 2">

                    <b-button variant="info" class="mr-2" @click.prevent="prev()">Previous</b-button>
                    <b-button variant="info" type="submit" value="Save">Finished</b-button>
                  </div>
                </b-form>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- Website form -->
      <b-card no-body class="overflow-hidden mt-3" style="max-width:800px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require(`../assets/imagesForVueClient/web_services.png`)" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="website Services">
              <b-card-text>
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
                    <b-button variant="info" @click.prevent="next()">Next</b-button>
                  </div>
                  <div class="" v-show="step === 1">


                    <b-button variant="info" class="mr-2" @click.prevent="prev()">Previous</b-button>
                    <b-button variant="info" @click.prevent="next()">Next</b-button>
                  </div>
                  <div class="" v-show="step === 2">

                    <b-button variant="info" class="mr-2" @click.prevent="prev()">Previous</b-button>
                    <b-button variant="info" type="submit" value="Save">Finished</b-button>
                  </div>
                </b-form>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
      <!-- Automotive form -->
      <b-card no-body class="overflow-hidden mt-3" style="max-width:800px;">
        <b-row no-gutters>
          <b-col md="6">
            <b-card-img :src="require(`../assets/imagesForVueClient/corolla_2001.jpg`)" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body title="Automotive Services">
              <b-card-text>
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

                    <div class="" v-show="repair.deviceType === 'desktop'">
                      <p>desktop</p>
                    </div>
                    <div class="" v-show="repair.deviceType === 'chromebook'">
                      <p>chromebook</p>
                    </div>
                    <b-button variant="info" @click.prevent="next()">Next</b-button>
                  </div>
                  <div class="" v-show="step === 1">
                    <p>{{ repair.brand }}</p>
                    <p>{{ repair.model }}</p>
                    <p>{{ repair.deviceType }}</p>
                    <div class="" v-show="repair.deviceType === 'desktop'">
                      <p>desktop</p>
                    </div>
                    <div class="" v-show="repair.deviceType === 'smartphone'">
                      <p>{{ repair.brand }}</p>
                      <p>{{ repair.model }}</p>

                    </div>

                    <b-button variant="info" class="mr-2" @click.prevent="prev()">Previous</b-button>
                    <b-button variant="info" @click.prevent="next()">Next</b-button>
                  </div>
                  <div class="" v-show="step === 2">

                    <b-button variant="info" class="mr-2" @click.prevent="prev()">Previous</b-button>
                    <b-button variant="info" type="submit" value="Save">Finished</b-button>
                  </div>
                </b-form>
              </b-card-text>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
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
        brand: null,
        model: null,
        version: null,
        edge: false,
        plus: false,
        serial: '',
      },
      phones: {
        "Samsung": {
          name: "Samsung",
          models: {
            "s3": {
              name: "s3",
              versions: {"T-Mobile": {name: 'T-Mobile'}, 'AT&T': {name: 'AT&T'}, 'SKT': {name: 'SK Telecom'}},
              carriers: {},
              possibleIssues: {}
            },
            "s4": {
              name: "s4",
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "s5": {
              name: "s5",
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "s6": {
              name: "s6",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "s7": {
              name: "s7",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "s8": {
              name: "s8",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "s9": {
              name: "s9",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "note3": {
              name: "note3",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "note4": {
              name: "note4",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "note5": {
              name: "note5",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "note6": {
              name: "note6",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            },
            "note7": {
              name: "note7",
              edge: false,
              versions: {},
              carriers: {},
              possibleIssues: {}
            }
          }
        },
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
