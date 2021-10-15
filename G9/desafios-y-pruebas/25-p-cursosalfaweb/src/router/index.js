import Vue from "vue";
import VueRouter from "vue-router";

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
  },
  {
    path: "/cursos",
    name: "Grade",
    component: () => import("../views/Grades.vue"),
  },
  {
    path: "/cursos/crear",
    name: "GradeCreate",
    component: () => import("../views/GradeCreate.vue"),
  },
  {
    path: "/cursos/:id",
    name: "GradeDetails",
    component: () => import("../views/GradeEdit.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
