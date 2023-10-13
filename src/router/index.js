import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/VtextAndVModel',
      name: 'VtextAndVModel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVModel.vue')
    },
    {
      path:'/Vfor',
      name:'Vfor',
      component: () => import('../views/Vfor.vue')
    },
    {
      path:'/sweet',
      name:'sweet',
      component: () => import('../views/sweet.vue')
    },
    {
      path:'/sweet2',
      name:'sweet2',
      component: () => import('../views/sweet2.vue')
    },
    {
      path:'/Von',
      name:'Von',
      component: () => import('../views/Von.vue')
    },
    {
      path:'/dessert',
      name:'dessert',
      component: () => import('../views/dessert.vue')
    },

    ]
})

export default router
