import { createRouter, createWebHistory } from 'vue-router';
import Home from "@public/home.vue";
import Values from "@public/values.vue";
import Image from "@public/components/image2.vue";
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
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
