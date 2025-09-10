const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },
  {
    path: '/responsive',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/ResponsiveDesign.vue')}],
  },
  {
    path: '/cards',
    component: () => import('layouts/MainLayout.vue'),
    children: [{path: '', component: () => import('pages/CardList.vue')}],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
