import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import CreateMeet from '@/views/CreateMeet.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
    name: 'Login',
  },
  {
    path: '/register',
    component: Register,
    name: 'Register',
  },
  {
    path: '/create_meetup',
    component: CreateMeet,
    name: 'CreateMeet',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
