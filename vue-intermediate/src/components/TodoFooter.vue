<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="showModal = true">Clear All</span>
    <!-- Modal -->
    <app-modal v-if="showModal" @close="showModal = false">
      <template #header> <h3>정말로 삭제하시겠습니까?</h3> </template>
      <template #body>
        <p>삭제 후에는 복구가 불가능합니다.</p>
        <div class="modalBtnContainer">
          <span class="cancelBtn" @click="showModal = false">닫기</span>
          <span class="confirmBtn" @click="clearTodo">삭제</span>
        </div>
      </template>
    </app-modal>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import AppModal from "./shared/AppModal.vue";

export default {
  data() {
    return { showModal: false };
  },
  methods: {
    ...mapMutations({ clearTodo: "clearAllTodoItems" }),
  },
  components: {
    AppModal: AppModal,
  },
};
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #e20303;
  display: block;
}

.modalBtnContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 60px;
  height: 40px;
}

.cancelBtn {
  border: none;
  cursor: pointer;
  color: #e20303;
}

.confirmBtn {
  border: none;
  cursor: pointer;
  color: black;
}
</style>
