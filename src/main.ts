import './assets/main.css'
import { store } from './store/index';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import axios from 'axios';
import LoginView from './components/LoginView.vue'
import MainView from './components/MainView.vue'
import LockView from './components/LockView.vue'
import StatisticsView from './components/StatisticsView.vue'
import UserConfigView from './components/UserConfigView.vue'
import SettingsView from './components/SettingsView.vue'
import MenuView from './components/MenuView.vue'
import CounterControl from './controls/CounterControl.vue'
import CheckboxListControl from './controls/CheckboxListControl.vue'
import InputListControl from './controls/InputListControl.vue'

const app = createApp(App);

app
  .use(store)
  .use(router)
  .use(axios)
  .component('LoginView', LoginView)
  .component('MainView', MainView)
  .component('LockView', LockView)
  .component('StatisticsView', StatisticsView)
  .component('UserConfigView', UserConfigView)
  .component('SettingsView', SettingsView)
  .component('MenuView', MenuView)
  .component('CounterControl', CounterControl)
  .component('CheckboxListControl', CheckboxListControl)
  .component('InputListControl', InputListControl)
  .mount('#app')
