<template>
  <div id="signup" class="wrapper">
    <form action="index.html" method="post">
      <div v-show="step === 1">
        <h3>Sign Up</h3>
          <name-email
            :name-to-save="registration.name"
            :email-to-save="registration.email"
          />
        <button @click.prevent="next()">Next</button>
      </div>
      <div v-show="step === 2">
        <h3>Sign Up</h3>
        <p>
          <legend for="street">
            Your Street:
          </legend>
          <input id="street" name="street" v-model="registration.street">
        </p>
        <p>
          <legend for="aptSuite">
            Your Street:
          </legend>
          <select id="aptSuite" name="aptSuite" v-model="registration.apt_suite">
            <option value="APT">Apt number</option>
            <option value="SUITE">Suite number</option>
            <option value="UNIT">Unit number</option>
            <option value="NONE">None</option>
          </select>
        </p>
        <p v-show="registration.apt_suite !== 'NONE'">
          <legend for="aptSuiteNum">
            Your Apt/Suite/Unit number:
          </legend>
          <input id="aptSuiteNum" name="aptSuiteNum" v-model="registration.apt_suite_num">
        </p>
        <p>
          <legend for="city">
            Your City:
          </legend>
          <input id="city" name="city" v-model="registration.city">
        </p>
        <p>
          <legend for="state">
            Your City:
          </legend>
          <input id="state" name="state" v-model="registration.state">
        </p>
        <p>
          <legend for="zip">
            Your Zip code:
          </legend>
          <input id="zip" name="zip" v-model="registration.zip">
        </p>
        <button @click.prevent="prev()">Previous</button>
        <button @click.prevent="next()">Next</button>
      </div>
      <div v-show="step === 3">
        <label for="file"> Add a profile Pic: </label>
        <input type="file" @change="onFileSelected" name="file" value="">
        <p>
          <legend for="paypal">
            Your paypal email:
          </legend>
          <input id="paypal" name="paypal" v-model="registration.paypal">
        </p>
        <button @click.prevent="prev()">Previous</button>
        <input type="submit" value="Save">
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
