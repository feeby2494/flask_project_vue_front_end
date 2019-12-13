import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Product from '../views/Product.vue'
import Registration from '../views/Registration.vue'
import Shop from '../views/Shop.vue'
import DeviceRepair from '../views/DeviceRepair.vue'
import Electronics from '../views/Electronics.vue'

Vue.use(VueRouter)

const flask_home = { template: '<div>flask_home</div>'}

const routes = [
  {
    path: '/vue',
    name: 'home',
    component: Home
  },
  {
    path: '/shop',
    name: 'shop',
    component: Shop
  },
  {
    path: '/products/:id',
    name: 'product',
    component: Product
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/signup',
    name: 'registration',
    component: Registration
  },
  {
    path: '/device_repair',
    name: 'deviceRepair',
    component: DeviceRepair
  },
  {
    path: '/electronics',
    name: 'electronics',
    component: Electronics
  },
  {
    path: '/flask_home',
    beforeEnter() {location.href = '/'},
    component: flask_home
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
