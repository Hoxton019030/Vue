import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue'), children: [
      { path: 'us', component: () =>import('@/views/AboutUs.vue') },
      { path: 'other', component: () => import('../views/AboutOther.vue') },
    ]
  },
  {path:'/products/:sn?',component: ()=> import('../views/Products.vue')},

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
