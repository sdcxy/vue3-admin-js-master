import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("../views/account/Login.vue")
  },
  {
    path: "/components",
    name: "Components",
    component: () => import("../views/Components.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
