<template>
   <!-- -->
  <div class="search-container">
    <input type="text" placeholder="Search..." v-model="searchQuery" class="search-input">
    <div class="search"></div>
  </div>

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

/* SEARCH */
.search-container {
  z-index: 11;
  position: fixed;
  top: 10%;
  right: 10%;
}

.search {
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 80px;
  height: 80px;
  background: #ffa751;
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;
  box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
}

.search:hover {
  cursor: pointer;
}

.search::before {
  content: "";
  position: absolute;
  margin: auto;
  top: 22px;
  right: 0;
  bottom: 0;
  left: 22px;
  width: 12px;
  height: 2px;
  background: white;
  transform: rotate(45deg);
  transition: all .5s;
}

.search::after {
  content: "";
  position: absolute;
  margin: auto;
  top: -5px;
  right: 0;
  bottom: 0;
  left: -5px;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  border: 2px solid white;
  transition: all .5s;
}

.search-container input {
  font-family: 'Inconsolata', monospace;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  outline: none;
  border: none;
  background: #ffa751;
  color: white;
  text-shadow: 0 0 10px #ffa751;
  padding: 0 80px 0 20px;
  border-radius: 30px;
  box-shadow: 0 0 25px 0 #ffa751,
              0 20px 25px 0 rgba(0, 0, 0, 0.2);
  transition: all 1s;
  opacity: 0;
  z-index: 5;
  font-weight: bolder;
  letter-spacing: 0.1em;
}

.search-container input:hover {
  cursor: pointer;
}

.search-container input:focus {
  width: 300px;
  opacity: 1;
  cursor: text;
  left: calc(100% - 250px);
}

.search-container input:focus ~ .search {
  right: -250px;
  background: #151515;
  z-index: 6;
}

.search-container input:focus ~ .search::before {
  top: 0;
  left: 0;
  width: 25px;
}

.search-container input:focus ~ .search::after {
  top: 0;
  left: 0;
  width: 25px;
  height: 2px;
  border: none;
  background: white;
  border-radius: 0%;
  transform: rotate(-45deg);
}

.search-container input::placeholder {
  color: white;
  opacity: 0.5;
  font-weight: bolder;
}


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