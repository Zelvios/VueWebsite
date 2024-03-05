import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/projects', component: Projects },
  { path: '/contact', component: Contact }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  // Check if the route corresponds to a section with an ID
  if (document.getElementById(to.path.slice(1))) {
    window.scrollTo(0, 0); // Scroll to top if the route corresponds to a section with an ID
  }
  next();
});

export default router;
