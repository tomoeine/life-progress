import { createRouter, createWebHistory } from "vue-router";
import Top from "./pages/Top.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [{ path: "/", component: Top }],
});
