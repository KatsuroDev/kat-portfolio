import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import HomePage from '../views/pages/HomePage.vue';
import AboutPage from '../views/pages/AboutPage.vue';
import UploadPage from '../views/pages/UploadPage.vue';

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
    },
    {
        path: '/admin/upload',
        name: 'upload',
        component: UploadPage
    }
  ]
});

export default router;