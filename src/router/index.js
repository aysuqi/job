import { createRouter, createWebHashHistory } from 'vue-router'
import constantRouterMap from './routers'

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRouterMap
})

router.beforeEach((to, from, next) => {
  // 设置浏览器窗口标题内容
  let pathTitle = to.meta.title
  document.title = to.meta.title ? pathTitle : '简历'
  // 在这里执行实际业务的逻辑...
  next()
})

export default router
