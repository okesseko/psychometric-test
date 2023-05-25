<template>
  <div class="image-wrapper"><div class="image-content">content</div></div>
  <p class="description">
    {{ $t(`questions${currentQuestionIndex}`) }}{{ $t("questionEnding") }}
  </p>
  <ul class="answer-list">
    <li v-for="(_, index) in answerStatistics">
      <button class="answer-button" @click="answerClick(index)">
        {{ $t(`answer${currentQuestionIndex}_${index + 1}`) }}
      </button>
    </li>
  </ul>
</template>

<script lang="ts" setup>
const currentQuestionIndex = ref(1);
const answerStatistics = ref([0, 0, 0]);

const answerClick = (index: number) => {
  answerStatistics.value[index]++;
  currentQuestionIndex.value++;
  console.log(answerStatistics.value)
};
</script>

<style scoped>
.image-wrapper {
  display: flex;
  align-items: center;
  place-content: center;
}
.image-content {
  background-color: aqua;
  width: 640px;
  height: 360px;
}
.description {
  margin: 8px;
  text-align: center;
  min-height: 100px;
}
.answer-list {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.answer-button {
  width: 50vw;
  height: 40px;
  border-radius: 10px;
  /* border-color: aqua; */
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
