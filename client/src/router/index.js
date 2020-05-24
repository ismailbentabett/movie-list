import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import registerView from "../views/registerView.vue";
import loginView from "../views/loginView.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/register",
    name: "register",
    component: registerView
  },
  {
    path: "/login",
    name: "login",
    component: loginView
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
