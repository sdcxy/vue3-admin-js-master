import {
  createRouter,
  createWebHashHistory
} from "vue-router";
const routes = [
  {
    path: "/",
    name: "Login",
    component: () => import("@/views/account/Login.vue")
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("@/views/account/Forget.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/Home.vue")
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;