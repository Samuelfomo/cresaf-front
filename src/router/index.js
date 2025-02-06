import { createRouter, createWebHistory } from 'vue-router';
import Home from "@public/home.vue";
import Values from "@public/values.vue";
import Image from "@public/components/image2.vue";
import Login from "@public/login.vue";
const routes = [

  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/values',
    name: 'values',
    component: Values
  },
  {
    path: '/image',
    name: 'image',
    component: Image
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
