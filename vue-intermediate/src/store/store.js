import Vuex from "vuex";

const todoStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem("newTodoItem") || "[]");
  },
  save(items) {
    localStorage.setItem("newTodoItem", JSON.stringify(items));
  },
};

export const store = new Vuex.Store({
  state: {
    todoItems: todoStorage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems;
    },
  },
  mutations: {
    addTodoItem(state, todoValue) {
      state.todoItems = [
        ...state.todoItems,
        {
          id: Date.now(),
          value: todoValue,
          completed: false,
        },
      ];

      // 전역 상태 변경
      todoStorage.save(state.todoItems);
    },
    removeItemById(state, id) {
      state.todoItems = state.todoItems.filter((item) => item.id !== id);

      todoStorage.save(state.todoItems);
    },
    toggleItemCompleted(state, index) {
      state.todoItems[index].completed = !state.todoItems[index].completed;

      todoStorage.save(state.todoItems);
    },
    clearAllTodoItems(state) {
      state.todoItems = [];

      todoStorage.save(state.todoItems);
    },
  },
});
