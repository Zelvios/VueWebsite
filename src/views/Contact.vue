<template>
  <div class="contact" id="contact-section">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <div class="content">
     <!-- card -->
      <div class="card" v-for="(card, index) in cards" :key="index">
        <div class="image" v-if="card.type === 'image'">
          <img :src="require(`@/assets/${card.image}`)" :alt="card.title" />
        </div>
        <div class="icon" v-else>
          <i class="material-icons md-36">{{ card.icon }}</i>
        </div>
        <p class="title">{{ card.title }}</p>
        <p class="text">{{ card.text }}</p>
      </div>
      <!-- end card -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { icon: 'article', title: '? Resume ?', text: 'Ready to Propel Your Team Forward? Contact Me for Resume Access.' },
        { icon: 'face', title: 'About me', text: "As an eager learner and programmer, I'm dedicated to expanding my coding expertise and always excited to delve into new realms of knowledge." },
        { icon: 'email', title: 'Contact', text: 'Mail: Jaco296c@outlook.dk' }
      ]
    }
  }
}
</script>

<style scoped>
body {
  width: 100vw;
  background-color: #1D1D1D;
  margin: 0;
  font-family: helvetica;
}

.content {
  max-width: 1024px;
  width: 100%;
  padding: 0 4%;
  padding-top: 250px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 767px) {
  .content {
    padding-top: 300px;
    flex-direction: column;
  }
}

.card {
  width: 100%;
  max-width: 300px;
  min-width: 20px;
  height: 330px;
  background-color: #292929;
  margin: 10px;
  margin-bottom: 100px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  font-size: 16px;
  transition: transform 0.3s ease;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  border-radius: 30px;
}

.card:hover {
  cursor: default;
  transform: translateY(-10px);
}

.card .title {
  width: 100%;
  margin: 0;
  text-align: center;
  margin-top: 30px;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 4px;
}

.card .text {
  width: 80%;
  margin: 0 auto;
  font-size: 13px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-weight: 200;
  letter-spacing: 2px;
  opacity: 0;
  max-height: 0;
  transition: all 0.3s ease;
}

.card:hover .text {
  opacity: 1;
  max-height: 40px;
}

.card .icon {
  margin: 0 auto;
  width: 100%;
  height: 80px;
  max-width: 80px;
  background: linear-gradient(90deg, #d6da24 0%, #FF4848 40%, rgba(0, 0, 0, 0.28) 60%);
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.8s ease;
  background-position: 0px;
  background-size: 200px;
}

.material-icons.md-18 { font-size: 18px; }
.material-icons.md-24 { font-size: 24px; }
.material-icons.md-36 { font-size: 36px; }
.material-icons.md-48 { font-size: 48px; }

.card:hover .icon {
  background-position: -120px;
}

.card:hover .icon i {
  background: linear-gradient(90deg, #f0f328, #FF4848);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: 1;
}
</style>
