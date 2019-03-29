import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import firebase from "firebase";
import router from "@/router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    apiUrl: "https://api.edamam.com/search",
    user: null,
    isAuthenticated: false,
    userRecipes: []
  },
  mutations: {
    setRecipes(state, payload) {
      state.recipes = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
    setIsAuthenticated(state, payload) {
      state.isAuthenticated = payload;
    },
    setUserRecipes(state, payload) {
      state.userRecipes = payload;
    }
  },
  actions: {
    async getRecipes({ state, commit }, plan) {
      const firstRand = Math.floor(Math.random() * (100 - 0)) + 0;
      const secondRand = Math.floor(Math.random() * (100 + firstRand)) + firstRand;
      try {
        let response = await axios.get(`${state.apiUrl}`, {
          params: {
            q: plan,
            app_id: "20ee994c",
            app_key: "c46269c601fcf71ee71a7ec8543ab818",
            from: firstRand,
            to: secondRand
          }
        });
        commit("setRecipes", response.data.hits);
      } catch {
        commit("setRecipes", []);
      }
    },
    userJoin({ commit }, { email, password }) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/about");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userLogin({ commit }, { email, password }) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(user => {
          commit("setUser", user);
          commit("setIsAuthenticated", true);
          router.push("/about");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    userSignOut({ commit }) {
      firebase
        .auth()
        .signOut()
        .then(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        })
        .catch(() => {
          commit("setUser", null);
          commit("setIsAuthenticated", false);
          router.push("/");
        });
    },
    addRecipe({ state }, payload) {
      firebase
        .database()
        .ref("users")
        .child(state.user.user.uid)
        .push(payload.recipe.label);
    },
    getUserRecipes({ state, commit }) {
      return firebase
        .database()
        .ref("users/" + state.user.user.uid)
        .once("value", snapshot => {
          commit("setUserRecipes", snapshot.val());
        });
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.user !== null && state.user !== undefined;
    }
  }
});
