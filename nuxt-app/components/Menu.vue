<template>
      <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />

</template>
<script setup lang="ts">
import type {MenuBar} from '../../types'
import NavigationMenuItem from ''

const items:MenuBar = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Menu',
      type: 'label'
    },
    {
      label: 'Academics',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Curriculum',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house'
        },
        {
          label: 'Teachers',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },
        {
          label: 'Homework',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },

      ]
    },
    {
      label: 'Events',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Curriculum',
          description: 'Fully styled and customizable components for Nuxt.',
          icon: 'i-lucide-house'
        },
        {
          label: 'Teachers',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },
        {
          label: 'Homework',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'i-lucide-cloud-download'
        },

      ]
    }
  ]
  ])
</script>