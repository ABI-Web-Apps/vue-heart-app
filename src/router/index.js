import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/views/Home";

// import Home from '../views/Home.vue'
// import Heart from "@/views/Heart";
// import Attack from "@/views/Attack";
// import Electricity from "@/views/Electricity";
// import Failure from "@/views/Failure";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //     path: '/heart',
  //     name: 'Heart',
  //     component: Heart
  // },
  // {
  //     path: '/attack',
  //     name: 'Attack',
  //     component: Attack
  // },
  // {
  //     path: '/electricity',
  //     name: 'Electricity',
  //     component: Electricity
  //   },
  // {
  //     path: '/failure',
  //     name: 'Failure',
  //     component: Failure
  //   },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
