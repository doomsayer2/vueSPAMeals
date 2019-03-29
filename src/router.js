import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import store from "./store";

Vue.use(Router);

const router =  new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue"),
      meta: {
        authRequired: true
      }
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("./views/Menu.vue")
    },
    {
      path: "/signin",
      name: "signin",
      component: () => import("./views/Signin.vue")
    },
    {
      path: "/join",
      name: "join",
      component: () => import("./views/Join.vue")
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.isAuthenticated) {
      next({
        path: "/signin"
      });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;