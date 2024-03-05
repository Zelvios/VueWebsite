<template>
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
  <div class="home" id="home-section">
    <div class="content" :class="{ 'show-content': showContent }">
      <div class="image-text-container">
        <div class="image">
          <img :src="imagePath" alt="Portfolio Image">
        </div>
        <div class="text-section">
          <div class="title-container">
            <h2 class="title"><span class="highlight">Jacob's</span> Showcase:</h2>
            <h2 class="sub-title">A Creative Journey</h2>
          </div>
          <p class="typing-demo">Hello, I'm Jacob, presenting my carefully curated coding portfolio.</p>
          <h3 class="hovercard-text">Please feel welcome to hover over the <span class="highlight">card</span> below to access my social media profiles.</h3>
          <button @click="scrollToProjects" style="--clr:#ffa751"><span>Explore</span><i></i></button>
        </div>
      </div>
      <div class="frame">
	<div class="card">
		<div class="flip hvr-outline-in">
			
			<div class="front">
				<h1>Jacob</h1>
				<div class="line line-1"></div>
				<div class="line line-2"></div>
				<i class="fa fa-heart"></i>
			</div>
			
			<div class="back">
				<i class="fa fa-heart"></i>
				<h3>Jacob</h3>
				<div class="line line-3"></div>
				<h2>Programmer</h2>
				<div class="social">
          <a class="no-style" href="https://www.linkedin.com/in/jacob-j%C3%B8rgensen-851430261/">
            <i class="fab fa-linkedin-in"></i>
          </a>
					<a class="no-style" href="https://github.com/Zelvios">
            <i class="fab fa-github"></i>
          </a>
				</div>
			</div>
		</div>
	</div>
</div>

    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      imagePath: 'c-sharp.png',
      showContent: false // Initially set to false to hide the content
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
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito|Satisfy');
.no-style {
  text-decoration: none;
  color: inherit;
}

.content {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
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
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}

.content {
  max-width: 800px;
  width: 100%;
}

.image-text-container {
  display: flex;
  align-items: center;
}

.image {
  flex: 0 0 30%;
  margin-right: 30px; 
}

.image img {
  max-width: 100%; 
  height: auto;
}

.text-section {
  flex: 1;
  text-align: left; 
}

.text-section .title {
  margin-bottom: 1px; 
  margin-top: 0;
  font-size: 2.5em; 
}

.text-section .sub-title {
  margin-bottom: 25px; 
  margin-top: 0;
  margin-left: 25px;
  font-size: 2.0em;
}

.text-section p {
  margin-top: 2px; 
  font-size: 1.2em;
}

button {
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  border: none;
  letter-spacing: 0.1rem;
  font-size: 1rem;
  padding: 1rem 3rem;
  transition: 0.2s;
}

button:hover {
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
  z-index: 1;
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
.frame {
  position: absolute;
  background-color: transparent;
  top: 90%;
  left: 50%;
  width: 600px;
  height: 400px;
  border-radius: 2px;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transform: translate(-50%, -50%);
}

.frame,
.card {
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  width: 80%;
  height: 40%;
  padding: 1rem;
  background: linear-gradient(178deg, #FF4848, #f0f328, #f0f328, #FF4848);
  background-size: 600% 600%;
  animation: background 7s ease infinite;
  perspective: 800px;
}

.front h1 {
  font-family: Satisfy, cursive;
  font-size: 8rem;
  margin: 1rem 5rem;
  text-shadow: .2rem .2rem .5rem fade-out(black, .8);
}

h1,
h2,
.fa-heart {
  background: linear-gradient(178deg, #FF4848, #f0f328, #f0f328, #FF4848);
  background-size: 600% 600%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: background 7s ease infinite;
}

@keyframes background {
  0%, 100% {
    background-position: 0% 13%;
  }

  50% {
    background-position: 100% 88%;
  }
}

.frame p {
  position: absolute;
  top: 60%;
  left: 15%;
  color: fade-out(white, .8);
  padding: .8rem 0 .2rem .5rem;
}

p:nth-of-type(2) {
  opacity: 0;
  transform: translate(-2rem);
}

.line {
  width: 2rem;
  height: 2px;
  background: fade-out(#fff, .6);
  position: absolute;
}

.line-1 {
  top: 85%;
}

.line-2 {
  top: 13%;
}

.line-1,
.line-2 {
  left: 82.5%;
  transform: rotate(-90deg);
  background: #f0f328;
  width: 3rem;
}

.line-3 {
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.social {
  font-size: 1.3rem;
  color: fade-out(#fff, .6);
}

.social i {
  padding: 0 .5rem;
}

.social i:hover {
  color: fade-out(#fff, .3);
  cursor: pointer;
}

.hvr-outline-in {
  position: relative;
}

.hvr-outline-in:before {
  content: '';
  position: absolute;
  border: 1px solid #f0f328;
  top: -16px;
  right: -16px;
  bottom: -16px;
  left: -16px;
  opacity: 0;
}

.hvr-outline-in:hover:before,
.hvr-outline-in:focus:before,
.hvr-outline-in:active:before {
  top: -8px;
  right: -8px;
  bottom: -8px;
  left: -8px;
  opacity: 1;
  transform: rotate(135deg) scale(3);
  transition: .3s;
}

.card:hover .flip {
  transform: rotateX(180deg) translate3d(0, 0, 0);
  box-shadow: 8px -10px 15px 0 rgba(0, 0, 0, 0.5);
}

.flip {
  transform-style: preserve-3d;
  transition: all .7s ease-in-out;
  perspective: 1000px;
}

.front,
.back {
  backface-visibility: hidden;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: #201c29;
}

.card .back {
  transform: rotateX(-180deg);
  position: absolute;
  top: 0;
  left: 0;
}

.back {
  letter-spacing: 2px;
  text-align: center;
}

.back h2 {
  font-size: 2.3rem;
  margin: .5rem;
}

.back h3 {
  color: fade-out(#fff, .3);
  font-family: satisfy, cursive;
  font-weight: 300;
  font-size: 1.9rem;
  margin: 1.8rem;
}

.front i,
.back .fa-heart {
  position: absolute;
  font-size: 2rem;
}

.front i {
  bottom: 0;
  left: 0;
  transform: rotate(45deg);
}

.back .fa-heart {
  top: 0;
  left: 0;
  transform: rotate(135deg);
}
</style>
