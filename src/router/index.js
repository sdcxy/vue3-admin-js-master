import {
  createRouter,
  createWebHashHistory
} from "vue-router";

import Layout from "@/layout/index.vue"
import { defineAsyncComponent } from "vue";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: defineAsyncComponent(() => import("@/views/account/Login.vue"))
  },
  {
    path: "/forget",
    name: "Forget",
    component: () => import("@/views/account/Forget.vue")
  },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    children: [
      {
        path: "home",
        name: "Home",
        component: () => import("@/views/home/Home.vue")
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;