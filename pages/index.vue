<template>
  <div class="image-wrapper"><div class="image-content">content</div></div>
  <ul class="answer-list">
    <li  v-for="i in answerList">
      <button class="answer-button">{{ i }}</button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const answerList = ref([11, 22, 33]);
</script>

<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  place-content: center;
}
.image-content {
  background-color: aqua;
  width: 40rem;
  height: 30rem;
}
.answer-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:16px ;
}
.answer-button{
  width: 50vw;
  height: 40px;
  border-radius: 10px;
  border-color: aqua;
  outline: none;
}
</style>
