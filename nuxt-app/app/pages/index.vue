<template>
    
<UDashboardPanel>
    <template #header>
      <DashboardNavbar>
      <ul>
        <li><NuxtLink to="/staff">Post 1</NuxtLink></li>
        <li><NuxtLink to="/classes">Post 2</NuxtLink></li>
        <li><NuxtLink to="/studio">Sanity Studio</NuxtLink></li>
      </ul>
      </DashboardNavbar>
    </template>
  </UDashboardPanel>

  <!-- <div v-if="postObjects" class="post-container bg-green-100 ">
    <div v-for="(postObject) in postObjects">
      <h1>{{ postObject._title }}</h1>
    </div>
    </div> -->
</template>

<script setup lang='ts'>
definePageMeta({
  layout: 'dashboard'
})
1
import {client} from '../../composables/useSanity'
// import { postType } from '~~/studio-app/schemaTypes/post'

const postObjects = reactive([])

export async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]')
  console.log(posts)

}

// export async function showPosts() {
//     postObjects.value = await getPosts()
//     return postObjects

// }
onMounted(()=> {
  getPosts()
})

</script>

<style lang="css">

</style>