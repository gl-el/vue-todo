import Vue from "vue";
import VueRouter from "vue-router";
import TodoPage from "@/pages/TodoPage.vue";
import CounterPage from "@/pages/CounterPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/todo",
    },
    {
      path: "/todo",
      name: "todo",
      component: TodoPage,
    },
    {
      path: "/counter",
      name: "counter",
      component: CounterPage,
    },
  ],
});

export default router;
