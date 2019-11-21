import Vue from "vue";
import VueRouter from "vue-router";
import UseApi from "../../components/UseApi";
import Detail from "../../components/Detail";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "UseApi",
      component: UseApi
    },
    {
      path: "/detail/:id",
      name: "Detail",
      props: true,
      component: Detail
    },
    {
      path: "*",
      redirect: "/"
    }
  ]
});

export default router;
