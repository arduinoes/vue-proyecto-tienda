import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: 'Home',
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/product/:productId",
      name: 'Product',
      component: () => import("../views/Product.vue")
    },
    {
      path: "/cart",
      name: 'Cart',
      component: () => import("../views/Cart.vue")
    },
    {
      path: "/formulario",
      name: 'Formulario',
      component: () => import("../views/Formulario.vue")
    },
  ]
})

export default router;
