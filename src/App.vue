<!--This code wraps our application in the <v-app> tag that Vuetify requires. 
 Inside that tag is the <v-content> tag. Inside that is the <router-view> tag. 
 The router view tag will display the current page that you are on. -->

<template>
  <v-app>
    <app-navigation></app-navigation>

    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import AppNavigation from '@/components/AppNavigation';

export default {
  name: 'App',
  components: {
    AppNavigation
  }
};
</script>

<style>
</style>
