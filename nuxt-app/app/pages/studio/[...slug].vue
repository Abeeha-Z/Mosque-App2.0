<template>
  <div ref="studioContainer" class="studio-container" />
</template>

<script setup>
const studioContainer = ref()

onMounted(async () => {
  if (import.meta.client) {
    try {
      // Add a small delay to ensure DOM is ready
      await new Promise(resolve => setTimeout(resolve, 100))
      
      const { renderStudio } = await import('sanity')
      const { default: config } = await import('../../../studio-app/sanity.config')
      
      // Validate config exists and has required properties
      if (!config || !config.projectId) {
        throw new Error('Sanity config is invalid or missing projectId')
      }
      
      console.log('Loading Sanity Studio with config:', {
        projectId: config.projectId,
        dataset: config.dataset,
        basePath: config.basePath
      })
      
      // Ensure container exists
      if (!studioContainer.value) {
        throw new Error('Studio container not found')
      }
      
      // Use renderStudio with the config
      renderStudio(studioContainer.value, config)
      
    } catch (error) {
      console.error('Failed to load Sanity Studio:', error)
      // Show error message in the container
      if (studioContainer.value) {
        studioContainer.value.innerHTML = `
          <div style="padding: 20px; color: red;">
            <h3>Failed to load Sanity Studio</h3>
            <p>${error.message}</p>
          </div>
        `
      }
    }
  }
})

// Optional: Set page meta
definePageMeta({
  layout: false // You might want a clean layout for the Studio
})
</script>

<style scoped>
.studio-container {
  height: 100vh;
  width: 100%;
}
</style>