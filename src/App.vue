<template>
  <v-app>
    <div id="app">
      <v-card class="overflow-hidden">
      <v-app-bar
        absolute
        dark
        scroll-target="#playground-example"
        :color="color"
        :elevate-on-scroll="elevateOnScroll"
        :hide-on-scroll="hideOnScroll"
        :fade-on-scroll="fadeOnScroll"
        :fade-img-on-scroll="fadeImgOnScroll"
        :inverted-scroll="invertedScroll"
        :collapse="collapse"
        :collapse-on-scroll="collapseOnScroll"
        :shrink-on-scroll="shrinkOnScroll"
        :extended="extended"
      >
        <v-app-bar-nav-icon>

        </v-app-bar-nav-icon>
        <v-btn><router-link to="/vue">Home</router-link> | </v-btn>
        <v-btn><router-link to="/about">About</router-link> | </v-btn>
        <v-btn><router-link to="/signup">Sign Up</router-link> | </v-btn>
        <v-btn><router-link to="/flask_home">Back to main site</router-link> </v-btn>
        <v-menu
      v-model="value"
      :disabled="disabled"
      :absolute="absolute"
      :open-on-hover="openOnHover"
      :close-on-click="closeOnClick"
      :close-on-content-click="closeOnContentClick"
      :offset-x="offsetX"
      :offset-y="offsetY"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          color="primary"
          dark
          v-on="on"
        >
          Dropdown
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click=""
        >

          <router-link :to="item.link">
              <v-list-item-title :to="item.link">
                {{ item.title }}
              </v-list-item-title>
          </router-link>

        </v-list-item>
      </v-list>
    </v-menu>

        <v-toolbar-title>Title</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="playground-example"
        class="overflow-y-auto"
        max-height="600"
      >
        <v-container style="height: 1500px;">
          <v-content>
            <router-view/>
          </v-content>
        </v-container>
      </v-sheet>
    </v-card>
      <div id="nav" class="wrapper">

      </div>
      </v-app-bar>

    </div>
  </v-app>
</template>


<script>
  export default {
    data: () => ({
      items: [
        { title: 'Home', link: '/vue' },
        { title: 'Click Me' },
        { title: 'Click Me' },
        { title: 'Click Me 2' },
      ],
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
