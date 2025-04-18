import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  { path: '/', component: () => import('@/layouts/layouts--main.vue'), name: 'home' },
  {
    path: '/notes/:id',
    component: () => import('@/pages/moreInfo-page.vue'),
    name: 'note',
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'home' },
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
