<template>
<NavBar/>
<h1 class="bg-red-500"> Testtesttesttest</h1>
  <div v-if="postObjects" class="post-container bg-blue-50 place-items-center">
    <div v-for="(postObject) in postObjects" :key="postObject._id" class="bg-white flex flex-wrap w-1/4 h-1/4 m-4 p-4 content-center drop-shadow-md drop-shadow-black">
            <h1>{{ postObject._title }}</h1>
    <div v-if="postObject.image" class="w-full">
        <img class="mb-2 rounded w-full h-48 object-cover" :src="buildURL(postObject.image)" />
      </div>                    
      <div>
      <span> <p class="post-body">{{ getRawText(postObject.body) }}     </p></span>
      </div>
    </div>
    </div>
    <Button label="submit"></Button>
</template>

<script setup lang='ts'>
import 'primeicons/primeicons.css'
import NavBar from '../components/NavBar.vue'
import { ref, onMounted } from 'vue'
import type { Post, SanityImage, SanityProse} from '../../types'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '../../composables/useSanity'
import { Button } from 'primevue'

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

function getRawText(body:SanityProse) {
return body
    .filter(block => block._type === 'block')
    .flatMap(block => block.children || [])
    .map(child => child.text)
    .join('');}

onMounted(()=> {
  showPosts()
})

  </script>


