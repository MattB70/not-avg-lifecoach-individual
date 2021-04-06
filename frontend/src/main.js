import Vue from "vue";
import VueTooltip from 'v-tooltip';
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import { NavbarPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

Vue.use(VueTooltip);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(NavbarPlugin);

VueTooltip.options.defaultTemplate = '<div class="tooltip-vue" role="tooltip"><div class="tooltip-vue-arrow"></div><div class="tooltip-vue-inner"></div></div>';
VueTooltip.options.defaultArrowSelector = '.tooltip-vue-arrow, .tooltip-vue__arrow';
VueTooltip.options.defaultInnerSelector = '.tooltip-vue-inner, .tooltip-vue__inner';
