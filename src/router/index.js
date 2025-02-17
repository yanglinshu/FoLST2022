import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: "Home | FoLST",
      color: "white",
    },
  },
  {
    path: "/schedule",
    name: "Schedule",
    component: () =>
      import(/* webpackChunkName: "agenda" */ "../views/Schedule.vue"),
    meta: {
      title: "Schedule | FoLST",
      color: "white",
    },
  },
  {
    path: "/speakers",
    name: "Speakers",
    component: () =>
      import(/* webpackChunkName: "speakers" */ "../views/Speakers.vue"),
    meta: {
      title: "Speakers | FoLST",
      color: "white",
    },
  },
  {
    path: "/OC",
    name: "OrganisingCommittee",
    component: () => import("../views/OrganisingCommittee.vue"),
    meta: {
      title: "Organising Committee | FoLST",
      color: "white",
    },
  },
  {
    path: "/poster",
    name: "Poster",
    component: () => import("../views/Poster.vue"),
    meta: {
      title: "Poster | FoLST",
      color: "white",
    },
  },
  {
    path: "*",
    name: "redirect",
    redirect: {
      path: "/",
    },
    meta: {
      title: `Redirect `,
      color: "white",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});

export default router;
