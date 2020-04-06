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
      bg: "/img/bg/chair.jpg"
    },
    component: () => import(/* webpackChunkName: "views" */ "../views/Home.vue")
  },
  {
    path: "/canwach",
    name: "CanWaCH",
    meta: {
      project: true,
      h: 358,
      s: 87,
      l: 33,
      bg: "/img/bg/canwach-bg.jpg"
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Canwach.vue")
  },
  {
    path: "/unicorn-app",
    name: "Unicorn App",
    meta: {
      project: true,
      h: 333,
      s: 81,
      l: 50,
      bg: "/img/bg/unicorns-bg.jpg"
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Unicorn.vue")
  },
  {
    path: "/pepfar",
    name: "President's Emergency Fund For AIDS Relief",
    meta: {
      project: true,
      h: 207,
      s: 100,
      l: 25,
      bg: "/img/bg/pepfar-bg.jpg"
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Pepfar.vue")
  },
  {
    path: "/ltsa",
    name: "LTSA",
    meta: {
      project: true,
      h: 222,
      s: 54,
      l: 40,
      bg: "/img/bg/ltsa-bg.jpg"
    },
    component: () => import(/* webpackChunkName: "views" */ "../views/Ltsa.vue")
  },
  {
    path: "/humana",
    name: "Humana",
    meta: {
      project: true,
      h: 95,
      s: 49,
      l: 30,
      bg: "/img/bg/humana-bg.jpg"
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Humana.vue")
  },
  {
    path: "/recbc",
    name: "Real Estate Council of BC",
    meta: {
      project: true,
      h: 214,
      s: 100,
      l: 40,
      bg: "/img/bg/recbc-bg.jpg"
    },
    component: () =>
      import(/* webpackChunkName: "views" */ "../views/Recbc.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
