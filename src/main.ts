import './assets/main.css'
// import { store, key } from './store/index';
import { store } from './store/index';
import { createApp } from 'vue';
import App from './App.vue';

createApp(App).use(store).mount('#app')
// createApp(App).use(store, key).mount('#app')
