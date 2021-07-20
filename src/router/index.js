import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  },
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/products',
    name: 'Products',
    component: () => import('../views/foreground/Products.vue'),
    children: [
      {
        path: '',
        name: 'Products',
        redirect: '/products/all'
      },
      {
        path: 'all',
        name: 'AllBike',
        component: () => import('../views/foreground/productsPage/allBike.vue')
      },
      {
        path: 'city',
        name: 'CityBike',
        component: () => import('../views/foreground/productsPage/cityBike.vue')
      },
      {
        path: 'electric',
        name: 'ElectricBike',
        component: () => import('../views/foreground/productsPage/electricBike.vue')
      },
      {
        path: 'mountain',
        name: 'MountainBike',
        component: () => import('../views/foreground/productsPage/mountainBike.vue')
      },
      {
        path: 'road',
        name: 'RoadBike',
        component: () => import('../views/foreground/productsPage/roadBike.vue')
      }
    ]
  },
  {
    path: '/productPage/:id',
    name: 'ProductPage',
    component: () => import('../views/foreground/ProductPage.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/foreground/Cart.vue')
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: () => import('../views/foreground/Checkout.vue')
  },
  {
    path: '/checkoutPay/:orderId',
    name: 'CheckoutPay',
    component: () => import('../views/foreground/CheckoutPay.vue')
  },
  {
    path: '/checkOrder',
    name: 'CheckOrder',
    component: () => import('../views/foreground/CheckOrder.vue')
  },
  {
    path: '/followPage',
    name: 'FollowPage',
    component: () => import('../views/foreground/FollowPage.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/foreground/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/foreground/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/background/Dashboard.vue'),
    meta: { requiresAuth: true },
    children: [
      {
        path: 'product',
        name: 'Product',
        component: () => import('../views/background/Product.vue')
      },
      {
        path: 'orders',
        name: 'Orders',
        component: () => import('../views/background/Orders.vue')
      },
      {
        path: 'coupons',
        name: 'Coupons',
        component: () => import('../views/background/Coupons.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior (to, from, savedPosition) {
    const pages = to.fullPath
    if (pages.match('/')) {
      return {
        top: 0
      }
    }
  }
})

export default router
