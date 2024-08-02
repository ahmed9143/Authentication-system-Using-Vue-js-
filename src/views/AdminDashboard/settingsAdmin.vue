<template>
  <div class="settings-admin">
    <h1>Settings for Admin</h1>

    <!-- General Settings -->
    <div class="settings-section">
      <h2>General Settings</h2>
      <div class="setting">
        <label>Site Title:</label>
        <input v-model="siteTitle" />
      </div>
      <div class="setting">
        <label>Logo:</label>
        <input type="file" @change="uploadLogo" />
      </div>
    </div>

    <!-- User Management Settings -->
    <div class="settings-section">
      <h2>User Management Settings</h2>
      <div class="setting">
        <label>Allow User Registration:</label>
        <input type="checkbox" v-model="allowUserRegistration" />
      </div>
      <div class="setting">
        <label>Default Role:</label>
        <select v-model="defaultUserRole">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </div>

    <!-- Project Categories -->
    <div class="settings-section">
      <h2>Project Categories</h2>
      <div class="setting">
        <label>Project Categories:</label>
        <input v-model="projectCategories" placeholder="Enter comma-separated categories" />
      </div>
    </div>

    <!-- Project Status -->
    <div class="settings-section">
      <h2>Project Status</h2>
      <div class="setting">
        <label>Project Status:</label>
        <input v-model="projectStatus" placeholder="Enter comma-separated statuses" />
      </div>
    </div>

    <!-- Deadline Configuration -->
    <div class="settings-section">
      <h2>Deadline Configuration</h2>
      <div class="setting">
        <label>Project Submission Deadline:</label>
        <input type="datetime-local" v-model="submissionDeadline" />
      </div>
    </div>

    <!-- Email Notifications -->
    <div class="settings-section">
      <h2>Email Notifications</h2>
      <div class="setting">
        <label>Send Email Notifications:</label>
        <input type="checkbox" v-model="sendEmailNotifications" />
      </div>
    </div>

    <!-- Permission Settings -->
    <div class="settings-section">
      <h2>Permission Settings</h2>
      <div class="setting">
        <label>Admin Role Permissions:</label>
        <input v-model="adminRolePermissions" placeholder="Enter comma-separated permissions" />
      </div>
    </div>

    <!-- Save Button -->
    <button @click="saveSettings">Save Settings</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      siteTitle: 'My Awesome Site',
      allowUserRegistration: true,
      defaultUserRole: 'user',
      projectCategories: '',
      projectStatus: '',
      submissionDeadline: '',
      sendEmailNotifications: false,
      adminRolePermissions: '',
      // Add more data properties for other settings
    };
  },
  methods: {
    saveSettings() {
      // Implement logic to save settings
      console.log(
        'Settings saved:',
        this.siteTitle,
        this.allowUserRegistration,
        this.defaultUserRole,
        this.projectCategories,
        this.projectStatus,
        this.submissionDeadline,
        this.sendEmailNotifications,
        this.adminRolePermissions
      );
      // You can extend this method to send settings to the backend or perform other actions.
    },
    uploadLogo(event) {
      // Implement logic to handle logo upload
      console.log('Logo uploaded:', event.target.files[0]);
    },
    // Add more methods for handling other settings
  },
};
</script>

<style scoped>
.settings-admin {
  max-width: 100%; /* Take full width of the container */
  margin: 20px; /* Add margin for spacing */
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
}

.settings-section {
  margin-bottom: 20px;
}

.setting {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input,
select,
button {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  margin-top: 5px;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #2980b9;
}
</style>
