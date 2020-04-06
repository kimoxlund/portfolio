import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import { store } from "./store";
import { VLazyImagePlugin } from "v-lazy-image";
import VueGtag from "vue-gtag";
import Page from "./components/Page";
import Navigation from "./components/Navigation";
import NavToggle from "./components/NavToggle";
import CaseImage from "./components/CaseImage";
import CaseMeta from "./components/CaseMeta";
import PageLink from "./components/PageLink";

Vue.use(VLazyImagePlugin);
Vue.use(
  VueGtag,
  {
    config: { id: process.env.VUE_APP_GA_KEY }
  },
  router
);

Vue.component("page", Page);
Vue.component("navigation", Navigation);
Vue.component("nav-toggle", NavToggle);
Vue.component("case-image", CaseImage);
Vue.component("case-meta", CaseMeta);
Vue.component("page-link", PageLink);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount("#app");
