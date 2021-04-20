// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/:catchAll(.*)',
    component: () => import('../views/PageNotFound.vue')
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes
});

// ==|== Export ====================================================================================
export default router;
