<template>
  <div>
    
    <nav>
    <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/about">About</NuxtLink>
      <NuxtLink to="/staff">Staff</NuxtLink>

    </nav>
    <NuxtPage/>
    <NuxtRouteAnnouncer />
  </div>
</template>

<script>
import { onMounted } from 'vue';


onMounted(()=> console.log("App.vue mounted!"))

</script>
