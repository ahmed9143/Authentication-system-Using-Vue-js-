<!-- src/components/NotFound.vue -->
<template>
  <div class="not-found-container">
    <img src="@/assets/OIP.jpeg" alt="404 Not Found" class="not-found-image" />
    <div class="not-found-content">
      <h1 class="not-found-title">Oops! Page not found</h1>
      <p class="not-found-text">The page you are looking for might be in another galaxy.</p>
      <button class="back-link" @click="goBack">Go back to the Previous Page</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNotFound',
  methods: {
    goBack() {
      this.$router.go(-1); // Go back to the previous page
    }
  }
}
</script>

<style scoped>
.not-found-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f8f9fa; /* Light background color */
  font-family: 'Roboto', sans-serif; /* Use a suitable font family */
}

.not-found-image {
  width: 300px;
  margin-right: 30px;
  border-radius: 10px;
}

.not-found-content {
  text-align: left;
  max-width: 500px;
}

.not-found-title {
  font-size: 2.5em;
  color: #343a40; /* Dark title color */
  margin-bottom: 10px;
}

.not-found-text {
  color: #495057; /* Dark text color */
  font-size: 1.2em;
  margin-bottom: 20px;
  line-height: 1.5;
}

.back-link {
  padding: 10px 20px;
  background-color: #007bff; /* Primary button color */
  color: #fff; /* Button text color */
  text-decoration: none;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
}

.back-link:hover {
  background-color: #0056b3; /* Adjust hover color to your preference */
}
</style>
