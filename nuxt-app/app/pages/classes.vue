<template>
  <div></div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getLessons, type Lessons } from "~~/composables/getData";
const lessons = ref<Lessons[]>([]);

async function getData() {
  try {
    lessons.value = await getLessons();
  } catch (error) {
    console.log("there has been an error with getting data:", error);
  }
}

onMounted(() => {
  getData();
});
//lessons,
</script>

<style scoped></style>
