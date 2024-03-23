import { createMemoryHistory, createRouter } from 'vue-router';

import LockView from '../components/LockView.vue'
import StatisticsView from '../components/StatisticsView.vue'
import UserConfigView from '../components/UserConfigView.vue'
import SettingsView from '../components/SettingsView.vue'

const routes = [
  { path: '/', component: LockView },
  { path: '/stats', component: StatisticsView },
  { path: '/config', component: UserConfigView },
  { path: '/settings', component: SettingsView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;