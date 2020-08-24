import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Fronted/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/Fronted/About.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/Fronted/Products.vue')
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Fronted/Product.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Fronted/Cart.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Dashboard/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('../views/Dashboard/Dashboard.vue'),
    children: [
      {
        path: 'products',
        component: () => import('../views/Dashboard/Products.vue')
      },
      {
        path: 'coupons',
        component: () => import('../views/Dashboard/Coupons.vue')
      },
      {
        path: 'orders',
        component: () => import('../views/Dashboard/Orders.vue')
      },
      {
        path: 'images',
        component: () => import('../views/Dashboard/Images.vue')
      }
    ]
  }

  // {
  //   path: '/admin/products',
  //   component: () => import('../views/Dashboard/Products.vue')
  // },
  // {
  //   path: '/admin/coupons',
  //   component: () => import('../views/Dashboard/Coupons.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
