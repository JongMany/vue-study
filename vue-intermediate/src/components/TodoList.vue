<template>
  <!-- Transition을 위한 태그 name은 css class prefix -->
  <transition-group name="list" tag="ul">
    <li
      v-for="(todoItem, index) in this.todoItems"
      v-bind:key="todoItem"
      class="shadow"
    >
      <i
        class="checkBtn fas fa-check"
        v-bind:class="{ checkBtnCompleted: todoItem.completed }"
        @click="toggleComplete(index)"
      />
      <span v-bind:class="{ textCompleted: todoItem.completed }">{{
        todoItem.value
      }}</span>
      <span class="removeBtn" @click="removeTodo(todoItem.id)">
        <i class="fas fa-trash-alt" />
      </span>
    </li>
  </transition-group>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  computed: {
    // ...mapGetters({ todoItems: "storedTodoItems" }),
    ...mapState(["todoItems"]),
  },
  methods: {
    ...mapMutations(["removeItemById", "toggleItemCompleted"]),
    removeTodo(id) {
      this.removeItemById(id);
    },
    toggleComplete(index) {
      this.toggleItemCompleted(index);
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}

/* transition css */
/* 1. declare transition */
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

/* 3. ensure leaving items are taken out of layout flow so that moving
      animations can be calculated correctly. */
.list-leave-active {
  /* position: absolute; */
  transition: all 1s;
}
</style>
