import { createApp } from 'vue'
import App from './App.vue'
import './assets/sass/main.scss'
import router from './router'

createApp(App).use(router).mount('#app');
