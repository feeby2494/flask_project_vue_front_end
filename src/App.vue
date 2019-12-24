<template>
    <div id="app">
      <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand href="#">NavBar</b-navbar-brand>

          <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

          <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
              <b-nav-item to="/vue">Home</b-nav-item>
              <b-nav-item to="/shop">Shop</b-nav-item>
              <b-nav-item to="/flask_home">Back to Flask Home</b-nav-item>
              <b-nav-item to="/device_repair">Repair Services</b-nav-item>
              <b-nav-item to="/electronics">Electronics</b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
              <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
              </b-nav-form>

              <b-nav-item-dropdown text="About Us" right>
                <b-dropdown-item to="/about">About</b-dropdown-item>

              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>Cart</em>
                </template>
                <li v-for="item in cart">
                  <b-dropdown-item to="/cart">{{ item.name }} | ${{ item.price }}</b-dropdown-item>
                </li>
              </b-nav-item-dropdown>
              <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template v-slot:button-content>
                  <em>User</em>
                </template>

                <b-dropdown-item to="/signup">Signup</b-dropdown-item>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
              </b-nav-item-dropdown>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
      <router-view/>
    </div>
</template>


<script>
  export default {
    data: () => ({
      cart: [{name: "Cat", price: 34}, {name: "Dog", price: 45}, {name: "fish", price: 25}],
      disabled: false,
      absolute: false,
      openOnHover: false,
      value: false,
      closeOnClick: true,
      closeOnContentClick: true,
      offsetX: false,
      offsetY: true,
      elevateOnScroll: false,
      hideOnScroll: false,
      fadeOnScroll: false,
      fadeImgOnScroll: false,
      invertedScroll: false,
      collapse: false,
      collapseOnScroll: false,
      shrinkOnScroll: false,
      extended: false,
      color: 'accent',
      colors: ['primary', 'accent', 'warning lighten-2', 'teal', 'orange'],
    }),
    computed: {
      addToCart() {
        return this.cart.push(this.$store.state.cart);
      }
    }
  }
</script>



<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
