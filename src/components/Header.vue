<template>
  <header :class="{ 'header-hidden': headerHidden }" class="header">
    <a class="name-shine">Jacob</a>
    <nav class="header-nav">
      <ul class="nav-list">
        <li :class="{ 'active-route': isRouteActive(['/home']) }">
          <router-link to="/" class="nav-link" @click="scrollToSection('home')">Home</router-link>
        </li>
        <li :class="{ 'active-route': isRouteActive(['/projects']) }">
          <router-link to="/projects" class="nav-link" @click="scrollToSection('projects')">Projects</router-link>
        </li>
        <li :class="{ 'active-route': isRouteActive(['/contact']) }">
          <router-link to="/contact" class="nav-link" @click="scrollToSection('contact')">Contact</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      activeRoute: null // Track the active route
    };
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.scrollY || window.pageYOffset;
      const sections = {
        home: document.getElementById('home-section').offsetTop,
        projects: document.getElementById('projects-section').offsetTop,
        contact: document.getElementById('contact-section').offsetTop
      };

      let closestSection = null;
      let minDistance = Infinity;

      for (const [section, offset] of Object.entries(sections)) {
        const distance = Math.abs(offset - scrollPosition);
        if (distance < minDistance) {
          minDistance = distance;
          closestSection = section;
        }
      }

      this.$router.push('/' + closestSection);
    },
    scrollToSection(section) {
      const sectionId = section + '-section';
      const sectionElement = document.getElementById(sectionId);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    },
    isRouteActive(routes) {
      return routes.some(route => {
        if (route === '/home') {
          return this.$route.path === route || this.$route.path === '/';
        } else {
          return this.$route.path.startsWith(route);
        }
      });
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    // Set initial active route
    this.activeRoute = this.$route.path;
    // Update active route when route changes
    this.$router.afterEach((to, from) => {
      this.activeRoute = to.path;
    });
  }
};
</script>

<style scoped>

.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: transparent;
  backdrop-filter: blur(10px);
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}

.header-title {
  margin: 0;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.header-nav {
  display: flex;
  flex: 1;
  justify-content: center;
}

.nav-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center; 
}

.nav-list li {
  margin-right: 20px;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: bold; 
  position: relative; 
}

/* Style for the line under the link */
.nav-link::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -5px;
  left: 0;
  background-color: #fff;
  visibility: hidden;
  transform: scaleX(0);
  transition: all 0.3s ease-in-out;
}

/* Show line on hover */
.nav-link:hover::before {
  visibility: visible;
  transform: scaleX(1);
}

/* Show line on click */
.nav-link:active::before {
  visibility: visible;
  transform: scaleX(1);
}

/* Hover color change */
.nav-link:hover {
  color: #f8d0a8;
}

/* Click effect */
.nav-link:active {
  transform: translateY(1px);
}

.nav-list li.active-route .nav-link {
  color: #ffa751;
  font-weight: bold; 
}

.name-shine {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translate(-50%,-50%);
  padding: 12px 48px;
  color: #ffffff;
  background: linear-gradient(to right, #4d4d4d 0, #f8d0a8 10%, #4d4d4d 20%);
  background-position: 0;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shine 3s infinite linear;
  animation-fill-mode: forwards;
  -webkit-text-size-adjust: none;
  font-weight: 600;
  font-size: 30px;
  text-decoration: none;
  white-space: nowrap;
}

@keyframes shine {
  0% {
    background-position: 0;
  }
  60% {
    background-position: 180px;
  }
  100% {
    background-position: 180px;
  }
}
</style>