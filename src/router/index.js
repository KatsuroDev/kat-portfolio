import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomePage from '../views/pages/HomePage.vue'
import AboutPage from '../views/pages/AboutPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
        path: '/about',
        name: 'about',
        component: AboutPage
    }
  ]
})

export default router