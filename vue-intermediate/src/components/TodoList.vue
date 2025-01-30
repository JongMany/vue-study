<template>
  <ul>
    <li v-for="todoItem in todoItems" v-bind:key="todoItem">
      {{ todoItem }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      todoItems: [],
    };
  },
  //create -> mount -> update -> destroy
  created() {
    // local storage로부터 데이터를 가져온다.
    const items = localStorage.getItem("newTodoItem");
    this.todoItems = JSON.parse(items) || [];
  },
};
</script>

<style></style>
