import Vuex from "vuex";

const todoStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem("newTodoItem") || "[]");
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: todoStorage.fetch(),
  },
  
});
