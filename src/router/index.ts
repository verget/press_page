import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Users from '../views/Users.vue'
import Home from '../views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
