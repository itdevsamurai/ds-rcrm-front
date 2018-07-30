import React from 'react';
import Loadable from 'react-loadable'

import DefaultLayout from './containers/DefaultLayout';

function Loading() {
  return <div>Loading...</div>;
}


const Dashboard = Loadable({
  loader: () => import('./views/Dashboard'),
  loading: Loading,
});


const Category = Loadable({
  loader: () => import('./views/Pages/Category/Category.js'),
  loading: Loading,
});



// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home', component: DefaultLayout },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/category', exact: true,  name: 'Categories', component: Category },
];

export default routes;
