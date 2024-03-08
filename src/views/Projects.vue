<template>
  <div class="projects" id="projects-section">
  <section class="dark">
    <div class="container py-4">
      <h1 class="title">Projects</h1>
      <p class="underTitle">Here are several of my projects. </p>
      <p class="underTitle">Please feel free to click on their <spam class="highlight">titles</spam> or <spam class="highlight">GitHub</spam> links to access their <spam class="highlight">repositories</spam>.</p>

      <!-- swap color -->
      <div>
      </div>

      <article v-for="(project, index) in filteredProjects" :key="index" :class="[getPostcardClass(index), project.color]">
        <a class="postcard__img_link" :href="project.link">
          <template v-if="project.imgUrl && project.imgUrl !== 'no image'">
            <img class="postcard__img" :src="project.imgUrl" :alt="project.title" />
          </template>
          <template v-else>
            <div class="postcard__img-placeholder">No Image</div>
          </template>
        </a>
        <div class="postcard__text">
          <h1 :class="titleClass[index]"><a :href="project.github" target="_blank">{{ project.title }}</a></h1>
          <div class="postcard__subtitle small">
            <time :datetime="project.date">
              <i class="fas fa-calendar-alt mr-2"></i> {{ project.date }}
            </time>
          </div>
          <div class="postcard__bar" :class="project.color"></div>
          <div class="postcard__preview-txt">{{ project.description }}</div>
          <ul class="postcard__tagbox">
            <li class="tag__item"><i class="fas fa-tag mr-2"></i> {{ project.category }}</li>
            <li class="tag__item"><i class="fas fa-clock mr-2"></i> {{ project.time }}</li>
            <li class="tag__item" :class="project.color">
              <a :href="project.github" target="_blank"><i class="fas fa-play mr-2"></i> Github</a>
            </li>
          </ul>
        </div>
      </article>
    </div>
  </section>
</div>
</template>


<script>
export default {
  data() {
    return {
      projects: [],
      filteredProjects: [],
      searchQuery: '',
      titleClass: []
    };
  },
  created() {
    this.fetchProjects();
  },
  methods: {
    fetchProjects() {
      const projectsData = [
        { id: 1, title: "EatMore", description: "I crafted a project highlighting expertise in WPF, database management, and file handling.",
          date: "Nov 3, 2022", category: "C#, WPF", time: "?",
          imgUrl: "/eatmore.jpg", github: "https://github.com/Zelvios/EatMore"},

        { id: 2, title: "Vue Movies - API",  description: "Engineered a C# console app to gather data from two APIs and store it locally as a JSON file. Created a Vue.js site with a custom API to access and display the stored data efficiently.", 
          date: "???? ???", category: "C#, VUE, JSON, API",
          imgUrl: "/eatmore.jpg", github: "https://github.com/Zelvios"},
      ];
      
      this.projects = projectsData;
      this.filteredProjects = this.projects; // Initialize filteredProjects with all projects
      const colors = ['blue', 'red', 'green', 'yellow'];
      for (let i = 0; i < this.projects.length; i++) {
        this.titleClass.push(`postcard__title ${colors[i % colors.length]}`);
        // Assign color class to each project for styling the postcard__bar
        if (this.projects[i].category === 'Action' || this.projects[i].category === 'Adventure') {
          this.projects[i].color = 'green';
        } else {
          this.projects[i].color = colors[i % colors.length];
        }
      }
    },
    getPostcardClass(index) {
      const colors = ['dark blue', 'dark red', 'dark green', 'dark yellow'];
      return 'postcard ' + colors[index % colors.length];
    }
  }
}
</script>




<style scoped>
@import url('https://fonts.googleapis.com/css?family=Inconsolata:700');


/* Title */
.highlight {
  color: #ffa751;
}

.title {
  margin-top: 0;
  margin-left: auto;
  margin-right: auto; 
  font-size: 2.5em;
  overflow-wrap: break-word;
  text-align: center;
}

.underTitle {
  margin-top: 0;
  margin-bottom: 5px;
  margin-left: auto;
  margin-right: auto; 
  font-size: 1.5em;
  overflow-wrap: break-word;
  text-align: center;
}



/* CARDS */
.postcard__img-placeholder {
  background-color: #ccc; 
  width: 700px; 
  height: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
}


body {
  font-family: "Baloo 2", cursive;
  font-size: 16px;
  color: #ffffff;
  text-rendering: optimizeLegibility;
  font-weight: initial;
}
    
.dark {
  background: #110f16;
}

.light {
  background: #f3f5f7;
}

a, a:hover {
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

#pageHeaderTitle {
  margin: 2rem 0;
  text-transform: uppercase;
  text-align: center;
  font-size: 2.5rem;
}

/* Cards */
.postcard {
  flex-wrap: wrap;
  display: flex;
  box-shadow: 0 4px 21px -12px rgba(0, 0, 0, 0.66);
  border-radius: 10px;
  margin: 2rem 0rem 2rem 0rem;
  overflow: hidden;
  position: relative;
  color: #ffffff;

  &.dark {
    background-color: #18151f;
  }
  &.light {
    background-color: #e1e5ea;
  }
  
  .t-dark {
    color: #18151f;
  }
  
  a {
    color: inherit;
  }
  
  h1, .h1 {
    margin-bottom: 0.5rem;
    font-weight: 500;
    line-height: 1.2;
  }
  
  .small {
    font-size: 80%;
  }

  .postcard__title {
    font-size: 1.75rem;
  }

  .postcard__img {
    max-height: 180px;
    width: 100%;
    object-fit: cover;
    position: relative;
    margin: 0;
  }

  .postcard__img_link {
    display: contents;
  }

  .postcard__bar {
    width: 50px;
    height: 10px;
    margin: 10px 0;
    border-radius: 5px;
    background-color: #424242;
    transition: width 0.2s ease;
  }

  .postcard__text {
    padding: 1.5rem;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .postcard__preview-txt {
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: justify;
    height: 100%;
  }

  .postcard__tagbox {
    display: flex;
    flex-flow: row wrap;
    font-size: 14px;
    margin: 20px 0 0 0;
    padding: 0;
    justify-content: center;

    .tag__item {
      display: inline-block;
      background: rgba(83, 83, 83, 0.4);
      border-radius: 3px;
      padding: 2.5px 10px;
      margin: 0 5px 5px 0;
      cursor: default;
      user-select: none;
      transition: background-color 0.3s;

      &:hover {
        background: rgba(83, 83, 83, 0.8);
      }
    }
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(-70deg, #424242, transparent 50%);
    opacity: 1;
    border-radius: 10px;
  }

  &:hover .postcard__bar {
    width: 100px;
  }
}

@media screen and (min-width: 1024px) {
  .postcard {
    flex-wrap: inherit;
    margin: 2rem 10rem 2rem 10rem;

    .postcard__title {
      font-size: 2rem;
    }

    .postcard__tagbox {
      justify-content: start;
    }

    .postcard__img {
      max-width: 400px;
      max-height: 100%;
      transition: transform 0.3s ease;
      margin: 0;
    }

    .postcard__text {
      padding: 3rem;
      width: 100%;
    }

    .media.postcard__text:before {
      content: "";
      position: absolute;
      display: block;
      background: #18151f;
      top: -20%;
      height: 130%;
      width: 55px;
    }

    &:hover .postcard__img {
      transform: scale(1.1);
    }

    &:nth-child(2n+1) {
      flex-direction: row;
    }

    &:nth-child(2n+0) {
      flex-direction: row-reverse;
    }

    &:nth-child(2n+1) .postcard__text::before {
      left: -12px !important;
      transform: rotate(4deg);
    }

    &:nth-child(2n+0) .postcard__text::before {
      right: -12px !important;
      transform: rotate(-4deg);
    }
  }
}

@media screen and (min-width: 1054px){
  .postcard__text {
    padding: 2rem 3.5rem;
  }
  
  .postcard__text:before {
    content: "";
    position: absolute;
    display: block;
    
    top: -20%;
    height: 130%;
    width: 55px;
  }
  
  .postcard.dark {
    .postcard__text:before {
      background: #18151f;
    }
  }
  .postcard.light {
    .postcard__text:before {
      background: #e1e5ea;
    }
  }
}
/* COLORS */
.postcard .tag__item.blue:hover{
  background: #0076bd !important;
  color: black !important;
}
.blue .postcard__title:hover {
  color: #0076bd;
}
.blue .postcard__bar {
  background-color: #0076bd;
}
.blue::before {
  background-image: linear-gradient(
    -30deg,
    rgba(0, 60, 255, 0.1),
    transparent 50%
  ) !important;
}

.postcard .tag__item.red:hover  {
  background: #bd150b !important;
  color: black !important;
}
.red .postcard__title:hover {
  color: #bd150b;
}
.red .postcard__bar {
  background-color: #bd150b !important;
}
.red::before {
  background-image: linear-gradient(
    30deg,
    rgba(187, 16, 16, 0.356),
    transparent 50%
  ) !important;
}

.postcard .tag__item.green:hover {
background: #79dd09 !important;
color: black !important;
}
.green .postcard__title:hover {
  color: #79dd09;
}
.green .postcard__bar {
  background-color: #79dd09;
}
.green::before {
  background-image: linear-gradient(
    -30deg,
    rgba(136, 255, 0, 0.1),
    transparent 50%
  ) !important;
}
  

.postcard .tag__item.yellow:hover {
  background: #bdbb49 !important;
  color: black !important;
}
.yellow .postcard__title:hover {
  color: #bdbb49;
}
.yellow .postcard__bar {
  background-color: #bdbb49;
}
.yellow::before {
  background-image: linear-gradient(
    -30deg,
    rgba(251, 255, 0, 0.1),
    transparent 50%
  ) !important;
}
  

  /* Additional styling for the postcard__bar */
  .postcard .postcard__bar.blue {
    background-color: #0076bd;
  }
  .postcard .postcard__bar.red {
    background-color: #bd150b;
  }
  .postcard .postcard__bar.green {
    background-color: #79dd09;
  }
  .postcard .postcard__bar.yellow {
    background-color: #bdbb49;
  }

  .blue .postcard__bar,
  .red .postcard__bar,
  .yellow .postcard__bar {
    background-color: inherit;
  }

  .blue::before {
    background-image: linear-gradient(-30deg, rgba(0, 118, 189, 0.1), transparent 50%);
  }
  .blue:nth-child(2n)::before {
    background-image: linear-gradient(30deg, rgba(0, 118, 189, 0.1), transparent 50%);
  }

  .red::before {
    background-image: linear-gradient(-30deg, rgba(255, 13, 0, 0.1), transparent 50%);
  }
  .red:nth-child(2n)::before {
    background-image: linear-gradient(30deg, rgba(189, 21, 11, 0.1), transparent 50%);
  }

  .yellow::before {
    background-image: linear-gradient(
      -30deg,
      rgba(189, 187, 73, 0.1),
      transparent 50%
    );
  }
  .yellow:nth-child(2n)::before {
    background-image: linear-gradient(
      30deg,
      rgba(189, 187, 73, 0.1),
      transparent 50%
    );
  }

@media screen and (min-width: 769px) {
  .green::before {
    background-image: linear-gradient(-80deg, #79dd09, transparent 50%);
  }
  .green:nth-child(2n)::before {
    background-image: linear-gradient(80deg, #79dd09, transparent 50%);
  }

  .blue::before {
    background-image: linear-gradient(-80deg, #0076bd, transparent 50%);
  }
  .blue:nth-child(2n)::before {
    background-image: linear-gradient(80deg, #0076bd, transparent 50%);
  }

  .red::before {
    background-image: linear-gradient(-80deg, #bd150b, transparent 50%);
  }
  .red:nth-child(2n)::before {
    background-image: linear-gradient(80deg, #bd150b, transparent 50%);
  }
  
  .yellow::before {
    background-image: linear-gradient(-80deg, #bdbb49, transparent 50%);
  }
  .yellow:nth-child(2n)::before {
    background-image: linear-gradient(80deg, #bdbb49, transparent 50%);
  }
}
</style>
