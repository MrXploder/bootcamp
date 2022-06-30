import Vue from 'vue';
import VueRouter from 'vue-router';
import Store from '@/store/';

import SignIn from '@/views/SignInView.vue';
import SignUp from '@/views/SignUpView.vue';
import Lectures from '@/views/LecturesView.vue';
import EditLecture from '@/views/EditLectureView.vue';
import LecturesHome from '@/views/LecturesHomeView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: SignIn,
    meta: { requireLogin: false },
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
    meta: { requireLogin: false },
  },
  {
    path: '/lectures',
    name: 'Lectures',
    component: Lectures,
    meta: { requireLogin: true },
  },
  {
    path: '/lectures/:lectureId',
    name: 'EditLecture',
    component: EditLecture,
    meta: { requireLogin: true },
  },
  {
    path: '/home',
    name: 'LecturesHome',
    component: LecturesHome,
    meta: { requireLogin: true },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requireLogin = to.meta.requireLogin;
  const activeLogin = Store.getters['session/activeLogin'];
  if (requireLogin) {
    if (activeLogin) {
      next();
    } else {
      next('/signin');
    }
  } else {
    next();
  }
});

export default router;
