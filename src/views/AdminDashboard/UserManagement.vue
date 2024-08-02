<template>
    <div>
      <h2>User Management</h2>
      <user-table></user-table>
    </div>
  </template>
  
  <script>
  import UserTable from '@/components/UserTable.vue';
  
  export default {
    components: {
      UserTable,
    },
    // Component-specific logic here
  };
  </script>
  