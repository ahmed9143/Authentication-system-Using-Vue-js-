import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from '@/views/LoginForm.vue';

// Admin Dashboard Components
import DashboardMain from '@/views/AdminDashboard/DashboardMain.vue';
import SettingsAdmin from '@/views/AdminDashboard/settingsAdmin.vue'; // Adjust import
import DataVisualization from '@/views/AdminDashboard/DataVisualization.vue';
import FeedbackSupport from '@/views/AdminDashboard/FeedbackSupport.vue';
import NotificationCenter from '@/views/AdminDashboard/NotificationCenter.vue';
import UserManagement from '@/views/AdminDashboard/UserManagement.vue';



// Other Components
import PageNotFound from '@/views/PageNotFound.vue';

// Vue Router Configuration
const routes = [
  // Redirect to loginForm by default
  {
    path: '/',
    redirect: '/loginForm',
  },
  // Login Form Route
  {
    path: '/loginForm',
    name: 'loginForm',
    component: LoginForm,
  },
// Admin Dashboard Routes
{
  path: '/dashboard/admin',
  component: DashboardMain,
  children: [
    {
      path: '',
      name: 'dashboard-main',
      component: DashboardMain,
    },

    {
      path: 'data-visualization',
      name: 'data-visualization',
      component: DataVisualization,
    },
    {
      path: 'feedback-support',
      name: 'feedback-support',
      component: FeedbackSupport,
    },
    {
      path: 'notification-center',
      name: 'notification-center',
      component: NotificationCenter,
    },
    {
      path: 'user-management',
      name: 'user-management',
      component: UserManagement,
    },
    {
      path: 'setting',
      name: 'setting',
      component: SettingsAdmin,
    },
  ],
},


  // Catch-all route for 404
  {
    path: '/:catchAll(.*)',
    name: 'page-not-found',
    component: PageNotFound,
  },
];

// Create Vue Router
const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Export the router instance
export default router;
