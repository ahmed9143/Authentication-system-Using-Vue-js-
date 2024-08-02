<template>
  <transition name="slide">
    <div class="sidebar" v-show="isOpen">
      <div class="close-btn" @click="closeSidebar">&times;</div>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    isOpen: Boolean,
  },
  methods: {
    closeSidebar() {
      this.$emit('close');
    },
  },
};
</script>

<style scoped>
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
  transition: left 0.3s ease;
  color: #ecf0f1; /* Text color */
}

.slide-enter-active,
.slide-leave-active {
  transition: left 0.3s ease;
}

.slide-enter,
.slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  left: -240px;
}

.close-btn {
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 10px;
  color: #ecf0f1; /* Close button text color */
}

.sidebar-link {
  display: block;
  margin-bottom: 15px;
  text-decoration: none;
  color: #ecf0f1;
  font-size: 16px;
  padding: 8px;
  border-radius: 4px;
  transition: background-color 0.3s, color 0.3s;
}

.sidebar-link:hover {
  background-color: #3498db; /* Hover background color */
  color: #fff; /* Hover text color */
}
</style>
