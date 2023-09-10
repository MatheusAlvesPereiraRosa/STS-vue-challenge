import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductsByName from '../views/ProductsByName.vue'
import DefaultLayout from '../components/DefaultLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/by-name/:name?',
          name: 'byName',
          component: ProductsByName
        },
        {
          path: '/about',
          name: 'about',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

export default router
