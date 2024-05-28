import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    component: () =>import('@/views/HomeView.vue'),
    name: "home"
  },
  {
    path: '/result/positive',
    component: () => import('@/views/ResultPositiveView.vue'),
    name: 'result-positive'
  },
  {
    path: '/result/negative',
    component: () => import('@/views/ResultNegativeView.vue'),
    name: 'result-negative'
  },
  { 
    path: '/:pathMatch(.*)*', 
    name: 'not-found',
    component: () => import('@/views/NotFoundView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
