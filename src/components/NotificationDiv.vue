<template>
    <div class="notification-div">
      <button @click="showNotifications">Show Notifications</button>
      <div v-show="isNotificationVisible" class="notification-content">
        <!-- Notification content goes here -->
        <p>Notification 1</p>
        <p>Notification 2</p>
        <!-- Add more notifications as needed -->
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isNotificationVisible: false,
      };
    },
    methods: {
      showNotifications() {
        this.isNotificationVisible = !this.isNotificationVisible;
      },
    },
  };
  </script>
  
  <style scoped>
  /* Component-specific styles here */
  /* Add styles for the notification div */
  </style>
  