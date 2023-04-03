import { createRouter, createWebHistory } from "vue-router";

const importView = (name: string): Promise<string> => import(`@/views/${name}/index.vue`);

const routes = [
  {
    path: '/',
    component: () => importView('Home'),
    meta: { isRequireAuth: true },
  },
  {
    path: '/about',
    component: () => importView('About'),
    meta: { isRequireAuth: true },
  },
  {
    path: '/login',
    component: () => importView('Login'),
    meta: { isRequireAuth: false },
  }
];

const history = createWebHistory();
const router = createRouter({
  history,
  routes,
});


router.beforeEach(async (to, from) => {
 const  abc = 5 < 1;
 if(to.meta.isRequireAuth && !abc) {
  return {
    name: 'login',
  }
 }
})

export default router;