
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '/',
    component: () => import('../views/home/index.vue')
  },
  {
    path: '/section',
    component: () => import('@/views/sections/index.vue'),
    children: [
      {
        path: 'Geometry',
        component: () => import("@/views/sections/Geometry/index.vue")
      },
      {
        path: 'ClassUse',
        component: () => import("@/views/sections/ClassUse/index.vue")
      },
      {
        path: 'ImportModel',
        component: () => import("@/views/sections/ImportModel/index.vue")
      }
    ]
  }

]
const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
