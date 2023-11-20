import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import MainTask from '../views/MainTask.vue' 
import RegisterPage from '../views/RegisterPage.vue' 
import CreatePage from '../views/CreatePage.vue' 
import readPage from '../views/ReadPage.vue' 
import updatePage from '../views/UpdatePage.vue' 
import deletePage from '../views/DeletePage.vue' 
import NotFound from '../views/NotFound.vue';

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
  },
  {
    path: '/create',
    name: 'create', 
    component: CreatePage
  },
  {
    path: '/read',
    name: 'read', 
    component: readPage
  },
  {
    path: '/update',
    name: 'update', 
    component: updatePage
  },
  {
    path: '/delete',
    name: 'delete', 
    component: deletePage
  }, 
  {
    path: '/:pathMatch(.*)*',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
