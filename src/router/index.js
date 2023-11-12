import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      component: () => import('@/views/About.vue')
    },
    {
      path: '/contact',
      component: () => import('@/views/Contact.vue')
    },
    {
      path: '/portfolio',
      component: () => import('@/views/Portfolio.vue')
    },
    {
      path: '/project/:slug',
      path: '/project/:id',
      name: 'project',
      component: () => import('@/views/project/Project.vue')
    },
    {
      path: '/cookie-policy',
      component: () => import('@/views/CookiePolicy.vue')
    }
  ]
})

export default router
