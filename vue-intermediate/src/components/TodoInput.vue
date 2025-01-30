<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo" />
    <span class="addContainer" v-on:click="addTodo">
      <i class="fas fa-plus addBtn" />
    </span>

    <app-modal v-if="showModal" @close="showModal = false">
      <template #header>
        <h3>
          경고!
          <i class="closeModalBtn fas fa-times" @click="showModal = false" />
        </h3>
      </template>

      <template #body>
        <p>아무것도 입력하지 않으셨습니다.</p>
      </template>
    </app-modal>
  </div>
</template>

<script>
import AppModal from "./shared/AppModal.vue";

export default {
  data: () => {
    return {
      newTodoItem: "",
      showModal: false,
    };
  },
  methods: {
    addTodo: function () {
      if (this.newTodoItem === "") {
        this.showModal = true;
        return;
      }
      // 저장 이벤트 발생
      const text = this.newTodoItem.trim();
      this.$store.commit("addTodoItem", text);
      // 초기화
      this.clearInput();
    },
    clearInput: function () {
      this.newTodoItem = "";
    },
  },
  components: {
    AppModal: AppModal,
  },
};
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478fb, #8763fb);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}

.closeModalBtn {
  color: #42b983;
}
</style>
