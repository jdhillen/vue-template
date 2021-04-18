// ==|== Imports ===================================================================================
import { createRouter, createWebHistory } from 'vue-router';

// ==|== Pages =====================================================================================
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import PageNotFound from '../views/PageNotFound.vue';

// ==|== Routes ====================================================================================
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:catchAll(.*)',
    component: PageNotFound
  }
];

// ==|== Router ====================================================================================
const router = createRouter({
  history: createWebHistory(),
  routes
});

// ==|== Export ====================================================================================
export default router;
