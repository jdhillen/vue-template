// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomePage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutPage.vue')
  },
  {
    path: '/style-guide',
    name: 'StyleGuide',
    component: () => import('@/views/StyleGuidePage.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('@/views/ErrorPage.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  }
});

// ==|== Export ====================================================================================
export default router;
