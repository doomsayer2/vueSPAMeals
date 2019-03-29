import "@babel/polyfill";
import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/firebase";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/**
 * Edmam:
 * ID: 20ee994c
 * KEY: c46269c601fcf71ee71a7ec8543ab818	—
 */
