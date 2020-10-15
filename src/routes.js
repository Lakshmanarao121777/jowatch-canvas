import React from 'react';

//const Breadcrumbs = React.lazy(() => import('./src/Pages/Breadcrumbs'));
const Home = React.lazy(() => import('./Pages/Home.js'));
const details = React.lazy(() => import('./Pages/details.js'));
const trying = React.lazy(() => import('./Pages/trying.js'));

const routes = [
    { path: '/', exact: true, name: 'Home', component: Home },
    { path: '/:watch_slug', exact: true, name: 'About', component: details },
    { path: '/:watch_slug/try', exact: true, name: 'Catalogs', component: trying },
];

export default routes;