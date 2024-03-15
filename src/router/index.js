import Vue from "vue";
import VueRouter from "vue-router";
import TodoPage from "@/pages/TodoPage.vue";

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
  ],
});

export default router;
