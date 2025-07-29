<template>
  <div>{{}}</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getStaff, type Staff } from "~~/composables/getData";

const staffs = ref<Staff[]>([]);

async function getData() {
  try {
    staffs.value = await getStaff();
  } catch (error) {
    console.log("there is error:", error);
  }
}

onMounted(() => {
  getData();
});
</script>

<style scoped></style>
