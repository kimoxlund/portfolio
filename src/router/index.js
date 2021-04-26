import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Kim Oxlund",
    meta: {
      project: false,
      h: 0,
      s: 30,
      l: 40,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Home.vue"),
  },
  {
    path: "/canwach",
    name: "CanWaCH",
    meta: {
      project: true,
      h: 358,
      s: 87,
      l: 33,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Canwach.vue"),
  },
  {
    path: "/unicorn-app",
    name: "Unicorn App",
    meta: {
      project: true,
      h: 333,
      s: 81,
      l: 50,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Unicorn.vue"),
  },
  {
    path: "/pepfar",
    name: "President's Emergency Fund For AIDS Relief",
    meta: {
      project: true,
      h: 207,
      s: 100,
      l: 25,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Pepfar.vue"),
  },
  {
    path: "/ltsa",
    name: "LTSA",
    meta: {
      project: true,
      h: 222,
      s: 54,
      l: 40,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Ltsa.vue"),
  },
  {
    path: "/humana",
    name: "Humana",
    meta: {
      project: true,
      h: 95,
      s: 49,
      l: 30,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Humana.vue"),
  },
  {
    path: "/recbc",
    name: "Real Estate Council of BC",
    meta: {
      project: true,
      h: 214,
      s: 100,
      l: 40,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Recbc.vue"),
  },
  {
    path: "/whiteleaf-interior",
    name: "Whiteleaf Interior Painting",
    meta: {
      project: true,
      h: 173,
      s: 6,
      l: 39,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Whiteleaf.vue"),
  },
  {
    path: "/athena-pathways",
    name: "Athena Pathways",
    meta: {
      project: true,
      h: 249,
      s: 80,
      l: 60,
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Athena.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
