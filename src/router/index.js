import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import WorkoutLog from '@/views/WorkoutLog.vue';
import ProgressPage from '@/views/ProgressPage.vue';
import CaloriesPage from '@/views/CaloriesPage.vue';
const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/workout-log', name: 'WorkoutLog', component: WorkoutLog },
  { path: '/progress', name: 'ProgressPage', component: ProgressPage },
  { path: '/calories-calculator', name: 'CaloriesPage', component: CaloriesPage },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
