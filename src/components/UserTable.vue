<template>
  <div class="user-table">
    <table>
      <thead>
        <tr>
          <th>User ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.role }}</td>
          <td>
            <button @click="editUser(user.id)">Edit</button>
            <button @click="deleteUser(user.id)">Delete</button>
            <button @click="openUserProfile(user.id)">Profile</button>
          </td>
          <td>
            <input type="checkbox" :value="user.id">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [
        { id: 1, name: 'Admin User', email: 'admin@example.com', role: 'Admin' },
        { id: 2, name: 'Supervisor User', email: 'supervisor@example.com', role: 'Supervisor' },
        { id: 3, name: 'Student User', email: 'student@example.com', role: 'Student' },
      ],
    };
  },
  methods: {
    editUser(userId) {
      // Implement the logic to edit a user
      const userName = prompt('Enter the new name for the user:');
      if (userName) {
        // Update the user's name
        console.log(`Updated name for User ${userId}: ${userName}`);
      }
    },
    deleteUser(userId) {
      // Implement the logic to delete a user
      const confirmDelete = confirm('Are you sure you want to delete this user?');
      if (confirmDelete) {
        // Delete the user
        console.log(`Deleted User ${userId}`);
      }
    },
    openUserProfile(userId) {
      // Implement logic to fetch and display detailed user profile
      console.log(`Open User Profile for User ID: ${userId}`);
    },
  },
};
</script>

<style scoped>
/* Component-specific styles here */
/* Add styles for the user table */
</style>
