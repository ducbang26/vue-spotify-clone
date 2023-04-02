import { createRouter, createWebHistory } from "vue-router";

const importView = (name: string): Promise<string> => import(`/src/views/${name}/index.vue`);

const routes = [
  {
    path: '/',
    component: () => importView('Home'),
  },
  {
    path: '/About',
    component: () => importView('About'),
  }
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
})

export default router;