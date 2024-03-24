import { createMemoryHistory, createRouter } from 'vue-router';
import LockView from '../components/LockView.vue'
import StatisticsView from '../components/StatisticsView.vue'
import UserConfigView from '../components/UserConfigView.vue'
import SettingsView from '../components/SettingsView.vue'
import LoginView from '../components/LoginView.vue'
import MainView from '../components/MainView.vue'

const routes = [
  {
    path: '/login',
    component: LoginView,
  },
  {
    path: '/',
    component: MainView,
    meta: { requiresAuth: true },
    children: [
      { path: '', component: LockView, meta: { requiresAuth: true }, },
      { path: '/stats', component: StatisticsView, meta: { requiresAuth: true }, },
      { path: '/config', component: UserConfigView, meta: { requiresAuth: true }, },
      { path: '/settings', component: SettingsView, meta: { requiresAuth: true }, },
    ]
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  console.log('called')
  if (to.meta.requiresAuth) {
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
      // User is authenticated - proceed
      next();
    } else {
      // User is not authenticated
      next('/login');
    }
  } else {
    // Non-protected route, allow access
    next();
  }
});


export default router;