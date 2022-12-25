import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/components/Home';
import Sub from '@/components/Sub';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/',
    name: 'sub',
    component: Sub,
  },
];

// eslint-disable-next-line no-new
const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
