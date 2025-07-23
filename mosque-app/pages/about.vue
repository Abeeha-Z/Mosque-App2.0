<script setup>
import {useSanityClient} from '#imports'
const client = useSanityClient()

const data = await client.fetch(`*[_type == "students"]`)

</script>

<template>

    <li v-for="(item) in data"  :data="data">
        <h1>{{ item.title }} </h1>
    </li>

</template>