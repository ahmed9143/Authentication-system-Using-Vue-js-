<template>
  <div class="admin-dashboard" :class="{ 'sidebar-open': isSidebarOpen }">
    <button @click="toggleSidebar" class="toggle-button" :class="{ 'rotate-icon': isSidebarOpen }">&#9776;</button>
    
    <!-- Include the Sidebar component -->
    <Sidebar :is-open="isSidebarOpen" @close="closeSidebar">
      <!-- Sidebar content -->
      <router-link to="/dashboard/admin/data-visualization" class="sidebar-link" :class="{ 'active-link': $route.path === '/dashboard/admin/data-visualization' }">Data Visualization</router-link>
      <router-link to="/dashboard/admin/feedback-support" class="sidebar-link" :class="{ 'active-link': $route.path === '/dashboard/admin/feedback-support' }">Feedback Support</router-link>
      <router-link to="/dashboard/admin/notification-center" class="sidebar-link" :class="{ 'active-link': $route.path === '/dashboard/admin/notification-center' }">Notification Center</router-link>
      <router-link to="/dashboard/admin/settings-admin" class="sidebar-link" :class="{ 'active-link': $route.path === '/dashboard/admin/settings-admin' }">Settings Admin</router-link>
      <router-link to="/dashboard/admin/user-management" class="sidebar-link" :class="{ 'active-link': $route.path === '/dashboard/admin/user-management' }">User Management</router-link>
    </Sidebar>

 
    
    <section class="content">
      <!-- Main content of the dashboard -->
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
// Import the Sidebar component
import Sidebar from '@/views/AdminDashboard/SideBar.vue';

export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    closeSidebar() {
      this.isSidebarOpen = false;
    },
  },
  components: {
    Sidebar, 
  },
};
</script>

<style scoped>
.admin-dashboard {
  display: flex;
  font-family: 'Arial', sans-serif;
}

.toggle-button {
  font-size: 24px;
  background: none;
  border: none;
  color: #007BFF;
  cursor: pointer;
  position: fixed;
  top: 20px;
  left: 20px;
  z-index: 2;
  transition: transform 0.3s ease;
}

.rotate-icon {
  transform: rotate(0deg);
}

.sidebar-open .toggle-button {
  transform: translateX(240px);
}

.content {
  flex: 1;
  padding: 20px;
  margin-left: 0;
  transition: margin-left 0.3s ease;
}

.sidebar-open .content {
  margin-left: 240px;
}

.sidebar {
  width: 240px;
  background-color: #2c3e50; /* Dark background color */
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  overflow-y: auto;
  transition: transform 0.3s ease;
  color: #ecf0f1; /* Text color */
  z-index: 1000;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter,
.slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(-240px);
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
  color: #ecf0f1; /* Close button text color */
  text-align: right;
  padding-right: 15px;
}

.sidebar-link {
  display: block;
  padding: 15px 0;
  text-decoration: none;
  color: #ecf0f1;
  font-size: 16px;
  border-bottom: 1px solid #34495e; /* Border color */
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
  background-color: #34495e; /* Hover background color */
  color: #fff; /* Hover text color */
}

.active-link {
  background-color: #3498db; /* Active link background color */
  color: #fff; /* Active link text color */
}
</style>
