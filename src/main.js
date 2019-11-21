import Vue from "vue";
import App from "./App.vue";
import axios from "axios";
import infiniteScroll from "vue-infinite-scroll";
import router from "./components/router";

Vue.config.productionTip = false;
Vue.prototype.$http = axios;

Vue.use(infiniteScroll);

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
