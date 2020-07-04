import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/ResourceShare.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "resourceShare",
    component: Home
  },
  {
    path: "/workbench",
    name: "workbench",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Workbench.vue")
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
