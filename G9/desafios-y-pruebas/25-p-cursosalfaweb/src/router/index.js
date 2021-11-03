import Vue from "vue";
import VueRouter from "vue-router";
import Store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Root",
    component: () => import("../views/Root.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/cursos",
    name: "Grade",
    component: () => import("../views/Grades.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/cursos/crear",
    name: "GradeCreate",

    component: () => import("../views/GradeCreate.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/cursos/:id",
    name: "GradeDetails",
    component: () => import("../views/GradeEdit.vue"),
    meta: {
      requiredLogin: true,
    },
  },
  {
    path: "/me",
    name: "MiPerfil",
    component: () => import("../views/Me.vue"),
    meta: {
      requiredLogin: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const currentUser = Store.state.session.user; // {user} | null
  const requiredLogin = to.meta.requiredLogin; // undefined | true

  console.log({ currentUser, requiredLogin });

  if (requiredLogin) {
    if (currentUser) {
      next();
    } else {
      next({ name: "Root" });
    }
  } else {
    next();
  }
});

export default router;
