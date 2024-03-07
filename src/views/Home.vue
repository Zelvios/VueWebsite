<template>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  <div class="home" id="home-section">
    <div class="content" :class="{ 'show-content': showContent }">
      <div class="image-text-container">
        <div class="socials">
          <a href="https://github.com/Zelvios" target=”_blank”><i class="ri-github-fill"></i></a>
          <a href="https://www.linkedin.com/in/jacob-j%C3%B8rgensen-851430261/" target=”_blank”><i class="ri-linkedin-box-fill"></i></a>
        </div>
          <div class="image">
            <article class="ps-container">
              <section class="ps-photoset">
                <img class="ps-photo" src="/eatmore.jpg" alt="Photo 1">
                <img class="ps-photo" src="/eatmore.jpg" alt="Photo 2">
                <img class="ps-photo" src="/eatmore.jpg" alt="Photo 3">
              </section>
            </article>
        </div>
        <div class="text-section">
          <div class="title-container">
            <h2 class="title"><span class="highlight">Jacob's</span> Showcase:</h2>
            <h2 class="sub-title" ref="subTitle">A Creative Journey</h2>
          </div>
          <p class="typing-demo">Hello, I'm Jacob, presenting my carefully curated coding portfolio.</p>
          <button @click="scrollToProjects" style="--clr:#ffa751"><span>Explore</span><i></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
export default {
  data() {
    return {
      imagePath: 'c-sharp.png',
      showContent: false,
      bReady: false
    }
  },
  methods: {
    scrollToProjects() {
      this.$router.push('/projects');
      setTimeout(() => {
        const projectsSection = document.getElementById('projects-section');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100); // Wait for Vue Router to navigate before scrolling
    }
  },
  mounted() {
    window.scrollTo(0, 0);
    // Set a timeout to gradually show the content after a slight delay
    setTimeout(() => {
      this.showContent = true;
    }, 500);

    // This pauses the re-stacking until the expand animation is finished
    $(".ps-photoset").hover(() => {
      this.bReady = false;
      setTimeout(() => {
        this.bReady = true;
      }, 700);
    });
  }
}
</script>



<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.2.0/remixicon.css");

/* Images */

.image-text-container {
  justify-content: center;
  position: relative;
  display: flex;
  align-items: center;
}
.image {
  justify-content: right;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translateY(-50%);
}

.ps-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-items: center;
  width: 70vw;
  height: 70vh;
}

.ps-photoset {
  width: 60%;
  max-width: 400px;
  position: relative;
  margin: -80px auto 0;
  aspect-ratio: 7 / 5;
}

.ps-photoset:hover .ps-photo {
  transform: rotate(0deg);
}

.ps-photoset:hover .ps-photo:nth-child(1) {
  left: -2vw;
  top: 15vw;
}

.ps-photoset:hover .ps-photo:nth-child(2) {
  left: 20vw;
  top: 5vw;
}

.ps-photoset:hover .ps-photo:nth-child(3) {
  left: 5vw;
  top: -10vw;
}

.ps-photo {
  width: 100%;
  position: absolute;
  top: 0;
  left: 60%;
  border-radius: 1.5vw;
  box-shadow: 3px 4px rgba(0,0,0,0.1);
  transition: 500ms all ease;
}

.ps-photo:nth-child(1) {
  transform: rotate(4deg);
}

.ps-photo:nth-child(2) {
  transform: rotate(3deg);
}

.ps-photo:nth-child(3) {
  transform: rotate(-3deg);
}

.ps-controls {
  position: absolute;
  bottom: 20px;
  left: 20px;
  width: 100vw;
  user-select: none;
  z-index: 2;
  background: rgba(255, 255, 255, 0.67);
  border-radius: 1px;
}

.ps-controls .block {
  margin: 10px;
  display: inline-block;
}

.ps-controls .option-label {
  padding: 12px 10px 10px 0;
}

.ps-controls .option-label:hover {
  cursor: pointer;
}

/* Socials */
.socials {
  z-index: 9;
  display: flex;
  flex-direction: column;
  margin-right: 10px; 
  margin-left: 0; 
}

.socials a {
  margin-bottom: 10px;
  text-decoration: none;
}

.socials i {
  font-size: 60px;
  color: #fff;
  transition: all .50s ease;
}

.socials i:hover {
  color: #ffa751;
  transform: translateY(-5px);
}


/* Text */
.content {
  opacity: 0;
  transition: opacity 0.7s ease-in-out;
}

.show-content {
  opacity: 1;
  background-color: transparent; /* Change to transparent when fully visible */
}
.highlight {
  color: #ffa751;
}
.home {
  display: flex;
  justify-content: left;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.content {
  max-width: 800px;
  width: 100%;
}

.text-section {
  flex: 1;
  text-align: left;
  max-width: calc(100% - 200px); 
  margin-right: 20px; 
  margin-left: 20px; 
}

.text-section .title {
  margin-bottom: 1px;
  margin-top: 0;
  font-size: 3.0em;
  overflow-wrap: break-word;
}

.text-section .sub-title {
  margin-bottom: 30px;
  margin-top: 0;
  margin-left: 0;
  font-size: 2.5em;
  overflow-wrap: break-word;
}

.text-section p {
  font-size: 1.3em;
  margin-bottom: 35px;
  overflow-wrap: break-word;
}


/* Button */
button {
  position: relative;
  background: #444;
  z-index: 999;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 1.2rem;
  padding: 1rem 3rem;
  transition: 0.2s;
}

button:hover {
  cursor: pointer;
  letter-spacing: 0.2rem;
  padding: 1.1rem 3.1rem;
  background: var(--clr);
  color: var(--clr);
  animation: box 3s infinite;
}

button::before {
  content: "";
  position: absolute;
  inset: 2px;
  background: #272822;
}

button span {
  position: relative;
  z-index: 9;
}
button i {
  position: absolute;
  inset: 0;
  display: block;
}

button i::before {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  left: 80%;
  top: -2px;
  border: 2px solid var(--clr);
  background: #272822;
  transition: 0.2s;
}

button:hover i::before {
  width: 15px;
  left: 20%;
  animation: move 3s infinite;
}

button i::after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  left: 20%;
  bottom: -2px;
  border: 2px solid var(--clr);
  background: #272822;
  transition: 0.2s;
}

button:hover i::after {
  width: 15px;
  left: 80%;
  animation: move 3s infinite;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(5px);
  }
  100% {
    transform: translateX(0);
  }
}

@keyframes box {
  0% {
    box-shadow: #27272c;
  }
  50% {
    box-shadow: 0 0 25px var(--clr);
  }
  100% {
    box-shadow: #27272c;
  }
}

.hovercard-text {
  font-size: 1.3em;
  font-weight: normal;
  width: 53ch;
  overflow-wrap: break-word;
}
.typing-demo {
  width: 52ch;
  overflow-wrap: break-word;
  animation: typing 2s steps(22), blink .5s step-end infinite alternate;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-size: 2em;
  animation-delay: 1s;
}

@keyframes typing {
  from {
    width: 0
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}
</style>
