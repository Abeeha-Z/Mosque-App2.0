<template>
  <ul>
    <li><NuxtLink to="/staff">Post 1</NuxtLink></li>
    <li><NuxtLink to="/classes">Post 2</NuxtLink></li>
    <li><NuxtLink to="/studio">Sanity Studio</NuxtLink></li>
  </ul>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { getPosts } from "../../composables/getData";
import type { Posts } from "../../composables/getData";

// definePageMeta({
//   layout: "dashboard",
// });

// import { postType } from '~~/studio-app/schemaTypes/post'
const postObjects = ref<Posts[]>([]);

async function getData() {
  try {
    postObjects.value = await getPosts();
  } catch (error) {
    console.error("Error fetching posts:", error);
  }
}

onMounted(async () => {
  getData();
});
</script>

<style lang="css"></style>
