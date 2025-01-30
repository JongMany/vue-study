<template>
  <div id="id">
    <todo-header />
    <todo-input v-on:addTodoItem="addTodoState" />
    <todo-list
      v-bind:todoItems="todoItems"
      v-on:removeTodoItem="removeTodoState"
      v-on:toggleTodoItem="toggleCompleteState"
    />
    <todo-footer v-on:clearTodoItem="clearTodoState" />
  </div>
</template>

<script>
import { store } from "./store/store.js";
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoFooter from "./components/TodoFooter.vue";

export default {
  components: {
    TodoHeader,
    TodoInput,
    TodoList,
    TodoFooter,
  },
  data() {
    return {
      todoItems: [],
    };
  },
  created() {
    // local storage로부터 데이터를 가져온다.
    const items = localStorage.getItem("newTodoItem");
    this.todoItems = JSON.parse(items) || [];
  },
  methods: {
    addTodoState: function (todoValue) {
      // 상태 변경
      this.todoItems = [
        ...this.todoItems,
        {
          id: Date.now(),
          value: todoValue,
          completed: false,
        },
      ];

      // 전역 상태 변경
      localStorage.setItem("newTodoItem", JSON.stringify(this.todoItems));
    },
    removeTodoState(id) {
      // 상태 변경
      this.todoItems = this.todoItems.filter((item) => item.id !== id);

      // 전역 상태 변경
      localStorage.setItem("newTodoItem", JSON.stringify(this.todoItems));
    },
    toggleCompleteState(index) {
      this.todoItems[index].completed = !this.todoItems[index].completed;
      localStorage.setItem("newTodoItem", JSON.stringify(this.todoItems));
    },
    clearTodoState() {
      this.todoItems = [];
      localStorage.removeItem("newTodoItem");
    },
  },
  store,
};
</script>

<style>
body {
  text-align: center;
  background-color: #f6f6f6;
}

input {
  border-style: groove;
  width: 200px;
}
button {
  border-style: groove;
}
.shadow {
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>
