<template>
  <div v-if="currentQuestionIndex < 8">
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
  </div>
  <div v-else>
    <h1>{{ $t(`${result}`) }}</h1>
    <p>{{ $t(`${result}Description`) }}</p>
    <button @click="reset">重新測試</button>
  </div>
</template>

<script lang="ts" setup>
const currentQuestionIndex = ref(1);
const answerStatistics = ref([0, 0, 0]);
const result = ref("");

const answerClick = (index: number) => {
  answerStatistics.value[index]++;
  currentQuestionIndex.value++;
  if (currentQuestionIndex.value === 8) {
    analysisResult();
  }
};

const analysisResult = () => {
  const answerA = answerStatistics.value[0];
  const answerB = answerStatistics.value[1];
  const answerC = answerStatistics.value[2];
  if (answerA >= answerB + answerC) {
    result.value = "protector";
  } else if (answerB >= answerA + answerC) {
    result.value = "resolute";
  } else if (answerA === 3 && answerB === 3) {
    result.value = "analyst";
  } else if (answerC === 3 && answerB === 3) {
    result.value = "pragmatist";
  } else {
    result.value = "adventurer";
  }
};

const reset = () => {
  currentQuestionIndex.value = 1;
  answerStatistics.value = [0, 0, 0];
  result.value = "";
  console.log(currentQuestionIndex.value)
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
