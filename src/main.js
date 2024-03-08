import { createApp } from 'vue'; // Import createApp from Vue
import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router); // Use Vue Router

app.config.productionTip = false;

app.mount('#app'); // Mount the app to the DOM
