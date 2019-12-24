<template>
  <div id="signup" class="wrapper mt-3">
    <form action="index.html" method="post">
      <div v-show="step === 1">
        <h3>Sign Up</h3>
          <name-email
            :name-to-save="registration.name"
            :email-to-save="registration.email"
          />
        <b-button @click.prevent="next()">Next</b-button>
      </div>
      <div v-show="step === 2">
        <h3>Sign Up</h3>
        <p>
          <legend for="street">
            Your Street:
          </legend>
          <b-form-input id="street" name="street" v-model="registration.street"></b-form-input>
        </p>
        <p>
          <legend for="aptSuite">
            Your Street:
          </legend>
          <b-form-select id="aptSuite" name="aptSuite" v-model="registration.apt_suite">
            <option value="APT">Apt number</option>
            <option value="SUITE">Suite number</option>
            <option value="UNIT">Unit number</option>
            <option value="NONE">None</option>
          </b-form-select>
        </p>
        <p v-show="registration.apt_suite !== 'NONE'">
          <legend for="aptSuiteNum">
            Your Apt/Suite/Unit number:
          </legend>
          <b-form-input id="aptSuiteNum" name="aptSuiteNum" v-model="registration.apt_suite_num"></b-form-input>
        </p>
        <p>
          <legend for="city">
            Your City:
          </legend>
          <b-form-input id="city" name="city" v-model="registration.city"></b-form-input>
        </p>
        <p>
          <legend for="state">
            Your City:
          </legend>
          <b-form-input id="state" name="state" v-model="registration.state"></b-form-input>
        </p>
        <p>
          <legend for="zip">
            Your Zip code:
          </legend>
          <b-form-input id="zip" name="zip" v-model="registration.zip"></b-form-input>
        </p>
        <b-button class="mr-2" @click.prevent="prev()">Previous</b-button>
        <b-button @click.prevent="next()">Next</b-button>
      </div>
      <div v-show="step === 3">
        <label for="file"> Add a profile Pic: </label>
        <b-form-file type="file" @change="onFileSelected" name="file"></b-form-file>
        <p>
          <legend for="paypal">
            Your paypal email:
          </legend>
          <b-form-input id="paypal" name="paypal" v-model="registration.paypal"></b-form-input>
        </p>
        <b-button class="mr-2" @click.prevent="prev()">Previous</b-button>
        <b-button type="submit" value="Save">Finished</b-button>
      </div>
    </form>
  </div>
</template>

<script>
import NameEmail from '../components/NameEmail.vue';


export default {
  name: 'registration',
  components: {
    NameEmail
  },
  data() {
    return {
      step: 1,
      registration: {
        name: null,
        email: null,
        street: null,
        apt_suite: 'NONE',
        apt_suite_num: null,
        city: null,
        state: null,
        zip: null,
        paypal: null,
        profile_pic: null
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
    onFileSelected(event) {
      console.log(event);
      this.profile_pic = event.target.files[0];
    },
    onSubmit(event) {

    }
  }
};
</script>

<style lang="scss">
</style>
