import Vue from "vue";
import VueRouter from "vue-router";
import TodoPage from "@/pages/TodoPage.vue";
import CounterPage from "@/pages/CounterPage.vue";
import TodoPageVuex from "@/pages/TodoPageVuex.vue";
import FormPage from "@/pages/FormPage.vue";
import PostsPage from "@/pages/PostsPage.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: import.meta.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/todo-vuex",
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
    {
      path: "/todo-vuex",
      name: "todo-vuex",
      component: TodoPageVuex,
    },
    { path: "/form", name: "form-page", component: FormPage },
    {
      path: "/posts",
      name: "posts",
      component: PostsPage,
    },
  ],
});

export default router;
