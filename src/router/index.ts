import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('../views/IntroductionView.vue'),
    },
    {
      path: '/why-normalization',
      name: 'why-normalization',
      component: () => import('../views/WhyNormalizationView.vue'),
    },
    {
      path: '/first-normal-form',
      name: 'first-normal-form',
      component: () => import('../views/FirstNormalFormView.vue'),
    },
    {
      path: '/second-normal-form',
      name: 'second-normal-form',
      component: () => import('../views/SecondNormalFormView.vue'),
    },
    {
      path: '/third-normal-form',
      name: 'third-normal-form',
      component: () => import('../views/ThirdNormalFormView.vue'),
    },
    {
      path: '/bcnf',
      name: 'bcnf',
      component: () => import('../views/BCNFView.vue'),
    },
    {
      path: '/fourth-normal-form',
      name: 'fourth-normal-form',
      component: () => import('../views/FourthNormalFormView.vue'),
    },
    {
      path: '/fifth-normal-form',
      name: 'fifth-normal-form',
      component: () => import('../views/FifthNormalFormView.vue'),
    },
    {
      path: '/denormalization',
      name: 'denormalization',
      component: () => import('../views/DenormalizationView.vue'),
    },
    {
      path: '/practical-example',
      name: 'practical-example',
      component: () => import('../views/PracticalExampleView.vue'),
    },
    {
      path: '/interactive-demo',
      name: 'interactive-demo',
      component: () => import('../views/InteractiveDemoView.vue'),
    },
    {
      path: '/best-practices',
      name: 'best-practices',
      component: () => import('../views/BestPracticesView.vue'),
    },
  ],
})

export default router
