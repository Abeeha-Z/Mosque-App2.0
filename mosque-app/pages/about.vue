<script setup>
const client = useSanityClient()
const { data } = await client.fetch(`*[_type == "students"]`)
</script>

<template>
  <div>
    <li v-for="item in data" :key="item._id">
      <h1>{{ item.title }}</h1>
    </li>
  </div>
</template>