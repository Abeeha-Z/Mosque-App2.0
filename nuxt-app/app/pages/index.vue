<template>


<!-- <UDashboardPanel>
    <template #header>
      <UDashboardNavbar title="Menu">
      <ul class="max-w m-t-4 m-b-4 bg-green-400 ">
        <li class="nav-item"><NuxtLink to="/staff">Post 1</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/classes">Post 2</NuxtLink></li>
        <li class="nav-item"><NuxtLink to="/studio">Sanity Studio</NuxtLink></li>
      </ul>
      </UDashboardNavbar>
    </template>
  </UDashboardPanel> -->

  <div v-if="postObjects" class="post-container bg-green-100 ">
    <div v-for="(postObject) in postObjects" :key="postObject._id">
      <h1>{{ postObject._title }}</h1>
      <img :src="buildURL(postObject.image)" />
      <p class="post-body prose lg:prose-xl">{{ postObject.body }}     </p>
    </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import type { Post, SanityImage} from '../../types'
import imageUrlBuilder from '@sanity/image-url'
import type { NavigationMenuItem } from '@nuxt/ui'



definePageMeta({
      layout: 'dashboard'
})

import {client} from '../../composables/useSanity'

const postObjects = ref<Post[]>([])

async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]{_id, _title, image, body}')
  return posts
  
}
  

 async function showPosts() {
    postObjects.value = await getPosts()
    return postObjects
}

const builder = imageUrlBuilder(client)

function buildURL(source:SanityImage) {
    return builder.image(source).url()

}

onMounted(()=> {
  showPosts()
})



  </script>
<style lang="css">

.nav-item {
  margin: 4;
  width: 20vw;
  height:10vw;
  background-color:white;

}
</style>

