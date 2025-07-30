<template>
<Studio :config/>

</template>

<script setup>
import { Studio } from 'sanity'
import config from '~~/studio-app/sanity.config'
</script>

<style scoped>
.studio-container {
  height: 100vh;
  width: 100%;
}
</style>