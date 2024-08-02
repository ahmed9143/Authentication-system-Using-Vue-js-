import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Import Bootstrap styles
import 'bootstrap/dist/css/bootstrap.css';

// Import Font Awesome styles
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App)
  .use(router)
  .mount('#app');
