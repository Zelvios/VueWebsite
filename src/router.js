import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', component: Home, meta: { title: 'Portfolio' } },
  { path: '/projects', component: Projects, meta: { title: 'Portfolio - Projects' } },
  { path: '/contact', component: Contact, meta: { title: 'Portfolio - Contact' } }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || 'Portfolio'; // Set the title dynamically based on the route meta information
  next();
});

export default router;
