import { createMemoryHistory, createRouter, type RouteLocationNormalized, type NavigationGuardNext, type RouteLocationRaw } from 'vue-router';
import DashboardView from '../components/DashboardView.vue'
import StatisticsView from '../components/StatisticsView.vue'
import UserConfigView from '../components/UserConfigView.vue'
import SettingsView from '../components/SettingsView.vue'
import LoginView from '../components/LoginView.vue'
import MainView from '../components/MainView.vue'
import store from '../store';

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
      { path: '', component: DashboardView, meta: { requiresAuth: true }, },
      { path: '/stats', component: StatisticsView, meta: { requiresAuth: true }, },
      { path: '/config', component: UserConfigView, meta: { requiresAuth: true }, },
      { path: '/settings', component: SettingsView, meta: { requiresAuth: true }, },
    ],
    beforeEnter: async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
      // Fetch the config before entering the route
      await store.dispatch('fetchConfig');
      next();
    },
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const authToken = document.cookie;

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