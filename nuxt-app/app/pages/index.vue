<template>
<NavBar />
  <div v-if="postObjects" class="post-container bg-green-100 flex flex-wrap w-full grid-flow-col place-items-center
">
    <div v-for="(postObject) in postObjects" :key="postObject._id" class="bg-white flex flex-wrap size-1/4 h-1/4 m-4 p-4 content-center drop-shadow-md drop-shadow-black">
            <h1>{{ postObject._title }}</h1>
            <div class='box-border w-full p-4 object-cover' >
                    <img :src="buildURL(postObject.image)" />
            </div>
      <div>
      <span> <p class="post-body ">{{ getRawText(postObject.body) }}     </p></span>
      </div>
      
    </div>
    </div>
</template>

<script setup lang='ts'>
import { onMounted } from 'vue'
import NavBar from '~~/components/NavBar.vue'
import type { Post, SanityImage, SanityProse} from '../../types'
import imageUrlBuilder from '@sanity/image-url'
import {client} from '../../composables/useSanity'


const postObjects = ref<Post[]>([])

async function getPosts() {
  const posts = await client.fetch('*[_type == "post"]{_id, _title, image, body}')
  return posts
}

 async function showPosts() {
    postObjects.value = await getPosts()
    console.log(postObjects)
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


