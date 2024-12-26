import type { RouteRecordRaw } from "vue-router";
import Home from "@/views/home/index.vue";
import Layout from "@/views/Layout.vue";
const NotFind = () => import("@/views/404.vue");

const routes: RouteRecordRaw[] = [
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFind },
  {
    path: "/",
    name: "Layout",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        component: Home,
        name: "Home",
      },
      {
        path: "about",
        component: import("@/views/about/index.vue"),
        name: "About",
      },
    ],
  },
];

export default routes;
