import { createRouter, createWebHistory } from "vue-router";
import registerRouteGuard from "./Interceptor";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 注册路由守卫
registerRouteGuard(router);

export default router;
