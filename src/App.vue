<template>
  <div id="app">
    <Header />
    <Home />
    <div class="spacer"></div>
    <Projects />
    <div class="spacer"></div>
    <Contact />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import { useRouter } from 'vue-router';

export default {
  components: {
    Header,
    Home,
    Projects,
    Contact
  },
  mounted() {
    const router = useRouter();
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute('id');
          router.push({ path: `/${sectionId}` });
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  color: white;
  background-color: #100E17;
}

.spacer {
  margin-bottom: 20px;
}

body, html {
  margin: 0;
  padding: 0;
}
</style>
