import { createRouter, createWebHistory } from "vue-router";
import Red from "../views/Red.vue";
import Yellow from "../views/Yellow.vue";
import Green from "../views/Green.vue";

const routes = [
  {
    path: "/",
    redirect: "/red",
  },
  {
    path: "/red",
    name: "Red",
    component: Red,
    props: true,
  },
  {
    path: "/yellow",
    name: "Yellow",
    component: Yellow,
  },
  {
    path: "/green",
    name: "Green",
    component: Green,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
