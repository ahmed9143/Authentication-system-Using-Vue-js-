<template>
  <div>
    <h2>Projects</h2>
    <table>
      <tr>
        <th>Project Name</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
      <tr v-for="project in projects" :key="project.name">
        <!-- Use a unique key, such as project.name, for each item in the list -->
        <td>{{ project.name }}</td>
        <td>{{ project.description }}</td>
        <td>{{ project.status }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          name: 'Project 1',
          description: 'This is a project description.',
          status: 'In Progress',
        },
        {
          name: 'Project 2',
          description: 'This is another project description.',
          status: 'Completed',
        },
      ],
    };
  },
};
</script>

<style scoped>
table {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 8px;
}
</style>
