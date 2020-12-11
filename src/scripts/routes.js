const routes = [
  {
    path: '/',
    action: import('./views/pages/home'),
    component: 'home-page',
  },
  {
    path: '/home',
    action: import('./views/pages/home'),
    component: 'home-page',
  },
  {
    path: '/favorite',
    action: import('./views/pages/favorite'),
    component: 'favorite-page',
  },
  {
    path: '/detail/:id',
    action: import('./views/pages/detail'),
    component: 'detail-page',
  },
  {
    path: '/not-found',
    action: import('./views/pages/not-found'),
    component: 'notfound-page',
  },
];

export default routes;
