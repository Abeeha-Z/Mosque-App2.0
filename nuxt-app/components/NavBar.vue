<template>
      <UNavigationMenu orientation="vertical" :items="items" class="data-[orientation=vertical]:w-48" />
</template>
<script setup lang="ts">

import type { NavigationMenuItem } from '@nuxt/ui'
import { ref } from 'vue'

const items = ref<NavigationMenuItem[][]>([
  [
    {
      label: 'Menu',
      type: 'label',
    },
    {
      label: 'Academics',
      icon: 'i-lucide-book-open',
      children: [
        {
          label: 'Curriculum',
          description: 'Up to date course curriculums by class level.',
          icon: 'fluent:teaching-24-filled'
        },
        
        {
          label: 'Homework',
          description: 'Weekly homework sssignments by suject and class level.',
          icon: 'material-symbols:ink-pen-outline'
        },  
        {       
          label: 'Books & Supply Lists',
          description: 'Essential materials required for each level.',
          icon: 'streamline:interface-content-book-2-library-content-books-book-shelf-stack'
        },
      ]
    },
    {
      label: 'Events',
      icon: 'ph:balloon-fill',
      children: [
        {
          label: 'Calendar',
          description: 'All major events for the school year.',
          icon: 'material-symbols:calendar-month'
        },
        {
          label: 'RSVP/Volunteer Forms',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'bi:envelope-paper-fill'
        },
    {
          label: 'Vendors',
          description: 'Sign up to work future events',
          icon: 'material-symbols:store-rounded'
        },        
        

      ]
    },
    {
      label: 'Donate',
      icon: 'mdi:account-heart',
      children: [
        {
          label: 'Become a Patron',
          description: 'All major events for the school year.',
          icon: 'hugeicons:save-money-dollar'
        },
        {
          label: 'One-time Donation',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'material-symbols-light:money-bag'
        },
        {
          label: 'Donate School Supplies',
          description: 'Learn how to install and configure Nuxt UI in your application.',
          icon: 'fluent-emoji-high-contrast:crayon'
        },

      ]
    },
    {
      label: 'Tuition & Enrollment',
      icon: 'fa6-solid:school',
      children: [
        {
          label: 'Enroll your Child',
          description: 'Forms, Emergency Contacts, Books.',
          icon: 'hugeicons:backpack-01'
        },
        {
          label: 'Become a volunteer',
          description: 'Teens and Adults can sign up to volunteer.',
          icon: 'hugeicons:backpack-01'
        },
        {
          label: 'Pay Monthly Tuition',
          description: 'Pay fees online via Paypal, Zelle, and Venmo.',
          icon: 'solar:wallet-money-line-duotone'
        },
      ]
    },
    {
      label: 'Stay in Touch',
      icon: 'material-symbols:contact-support-outline',
      children: [
        {
          label: 'Monthly Newsletter',
          description: 'Updates and Reminders about Sunday School activities.',
          icon: 'famicons:newspaper-outline'
        },
        {
          label: 'Contact Us',
          description: 'Leave questions and gain additional information',
          icon: 'material-symbols:call-outline '
        },
      ]
    },
    {
      label: 'Staff Portal',
      icon: 'material-symbols:frame-person-outline',
      children: [
        {
          label: 'Request Teacher Access',
          description: 'Teachers can post assignments and make announcements to their classes.',
          icon: 'material-symbols:id-card-outline-rounded'
        },
        {
          label: 'Request Admin Access',
          description: 'For Administration members only.',
          icon: 'material-symbols:admin-panel-settings-outline'
        },
              
      ]
    },
  ]
  ])
  
</script>