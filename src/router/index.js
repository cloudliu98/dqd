import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Live from '../views/Live.vue'
import Game from '../views/Game.vue'
import Data from '../views/Data.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta:{keep:true},
  },
  {
    path: '/live',
    name: 'live',
    meta:{keep:true},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Live.vue')
  },
  {
    path: '/game',
    name: 'game',
    component: Game,
    meta:{keep:true},
  },
  {
    path: '/data',
    name: 'data',
    component: Data,
    meta:{keep:true},
  },
]

const router = new VueRouter({
  routes
})

export default router
