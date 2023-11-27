import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import * as echarts from 'echarts/core'
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent
// }from 'echarts/components'
// import {
//   PieChart
// }from 'echarts/charts'
// import{
//   CanvasRenderer
// }from 'echarts/rederers'

// echarts.use(
//   [TitleComponent,TooltipComponent,LegendComponent,PieChart,CanvasRenderer]
// )

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/vote',
      name: 'vote',
      component: () => import('../views/vote.vue')
    },
    {
      path: '/confirm',
      name: 'confirm',
      component: () => import('../views/confirm.vue')
    },
    {
      path: '/BakeQuestion',
      name: 'BakeQuestion',
      component: () => import('../views/BakeQuestion.vue')
    },
    {
      path: '/Question',
      name: 'Question',
      component: () => import('../views/Question.vue')
    },
    {
      path: '/material',
      name: 'material',
      component: () => import('../views/material.vue')
    },
    {
      path: '/topic',
      name: 'topic',
      component: () => import('../views/topic.vue')
    },
    {
      path: '/total',
      name: 'total',
      component: () => import('../views/total.vue')
    },
    

    ]
})

export default router
