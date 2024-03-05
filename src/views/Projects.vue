<template>
  <div class="Projects" id="projects-section">
    <div class="wrapper">
      <h1 class="title" style="text-align: right;">
        <span>Explore my</span><br>
        <span>different <span class="highlight">Projects</span></span>
      </h1>
      <div class="container">
        <input type="radio" name="slide" id="c1" checked>
        <label for="c1" class="card">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>EatMore</h4>
              <p>I crafted a project highlighting expertise in WPF, database management, and file handling.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2">
        <label for="c2" class="card">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>Vue Movies - API</h4>
              <p>Engineered a C# console app to gather data from two APIs and store it locally as a JSON file. Created a Vue.js site with a custom API to access and display the stored data efficiently.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3">
        <label for="c3" class="card">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Globalization</h4>
              <p>Help people all over the world</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4">
        <label for="c4" class="card">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>New technologies</h4>
              <p>Space engineering becomes more and more advanced</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
}
</script>

<style scoped>
.Projects {
  background-color: #15131f;
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
}

.title {
  margin-right: 20px;
}
.highlight {
  color: #ffa751;
  text-align: right;
}

body {
    background-color: #eeeeea;
}

.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
}

.card {
    width: 80px;
    border-radius: .75rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
}

.card > .row {
    color: white;
    display: flex;
    width: auto;
    flex-wrap: nowrap;
    background-color: rgba(0, 0, 0, 0.829);
}

.card > .row > .icon {
    background: #223;
    color: white;
    border-radius: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
}

.card > .row > .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 520px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

.description p {
    color: #b0b0ba;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}

input {
    display: none;
}


input:checked + label {
    width: 600px;
}

input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.card[for="c1"] {
    background-image: url('pizzaapp.jpg');
    background-size: cover;
    background-position: center;
}
.card[for="c2"] {
    background-image: url('./img2.jpeg');
    background-size: cover;
    background-position: center;
}
.card[for="c3"] {
    background-image: url('./img3.jpeg');
    background-size: cover;
    background-position: center;
}
.card[for="c4"] {
    background-image: url('c-sharp.png');
    background-size: cover;
    background-position: center;
}

@media only screen and (max-width: 1000px) {
  .wrapper {
    flex-direction: column;
    align-items: center;
  }
  .container {
    flex-wrap: wrap;
  }
  .card {
    width: 100%;
    margin: 10px;
  }
  .card > .row {
    width: 100%;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
  }
}
</style>
