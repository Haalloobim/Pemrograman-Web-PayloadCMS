import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import MainTask from '../views/MainTask.vue' 
import RegisterPage from '../views/RegisterPage.vue' 


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login', 
    name: 'login',
    component: LoginPage
  },
  {
    path: '/register', 
    name: 'register',
    component: RegisterPage
  },
  {
    path: '/main',
    name: 'main', 
    component: MainTask
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
