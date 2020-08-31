
import Home from '../pages/home.vue';
import Tests from '../pages/tests.vue';
import More from '../pages/more.vue';

import AboutDasLab from '../pages/about/about-daslab.vue';
import AboutTests from '../pages/about/about-tests.vue';
import AppointmentsView from '../pages/appointments/view.vue';

import Book1 from '../pages/book/step1.vue';
import Book2 from '../pages/book/step2.vue';
import Book3 from '../pages/book/step3.vue';
import Book4 from '../pages/book/step4.vue';
import Book5 from '../pages/book/step5.vue';
import Book6 from '../pages/book/step6.vue';

import NotFoundPage from '../pages/404.vue';

var routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/tests',
    component: Tests,
  },
  {
    path: '/more',
    component: More,
  },
  {
    path: '/about/daslab',
    component: AboutDasLab,
  },
  {
    path: '/about/tests',
    component: AboutTests,
  },
  {
    path: '/book/step1',
    component: Book1,
  },
  {
    path: '/book/step2',
    component: Book2,
  }, {
    path: '/book/step3',
    component: Book3,
  }, {
    path: '/book/step4',
    component: Book4,
  }
  , {
    path: '/book/step5',
    component: Book5,
  }, {
    path: '/book/step6',
    component: Book6,
  }, {
    path: '/appointments/:id',
    component: AppointmentsView,
  }, {
    path: '(.*)',
    component: NotFoundPage,
  },
];

export default routes;
