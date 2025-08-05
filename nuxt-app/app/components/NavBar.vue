<template>
<Menubar :model="menuItems" >
    <template #start>
        <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-8">
            <path d="..." fill="var(--p-primary-color)" />
            <path d="..." fill="var(--p-text-color)" />
        </svg>
        

    </template>
    
<template v-for="item in menuItems" #item="{ item, props, hasSubmenu, root }">
        <a v-ripple class="flex items-center" v-bind="props.action">
            <span >{{ item.label }}</span>
            <span v-if="item.shortcut" class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1">{{ item.shortcut }}</span>
            <i v-if="hasSubmenu" :class="['pi pi-angle-down ml-auto', { 'pi-angle-down': root, 'pi-angle-right': !root }]">
            <ul v-for="child in item.children">
                <li><NuxtLink to="${{ child.to }}">${{ child.label }}</NuxtLink></li>
            </ul>
            </i>
        </a>
    </template>
</Menubar>


</template>
<script setup lang="ts">
import Menubar from 'primevue/menubar';

const menuItems = [
  {
    label: 'Home',
    icon: 'pi pi-home',
    shortcut: 'Ctrl+H',
    to: '/home',
  },
  {
    label: 'Academics',
    icon: 'pi pi-book',
    to: '/academics',
    children: [
      {
        label: 'Curriculum',
        description: 'Up to date course curriculums by class level.',
        icon: 'pi pi-graduation-cap',
        to: '/academics/curriculum'
      },
      {
        label: 'Homework',
        description: 'Weekly homework assignments by subject and class level.',
        icon: 'pi pi-file-edit',
        to: '/academics/homework'
      },
      {
        label: 'Books & Supply Lists',
        description: 'Essential materials required for each level.',
        icon: 'pi pi-bookmark',
        to: '/academics/books-supply-lists'
      }
    ]
  },
  {
    label: 'Events',
    icon: 'pi pi-calendar',
    to: '/events',
    children: [
      {
        label: 'Calendar',
        description: 'All major events for the school year.',
        icon: 'pi pi-calendar-clock',
        to: '/events/calendar'
      },
      {
        label: 'RSVP/Volunteer Forms',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'pi pi-envelope',
        to: '/events/rsvp-volunteer-forms'
      },
      {
        label: 'Vendors',
        description: 'Sign up to work future events',
        icon: 'pi pi-shop',
        to: '/events/vendors'
      }
    ]
  },
  {
    label: 'Donate',
    icon: 'pi pi-heart',
    to: '/donate',
    children: [
      {
        label: 'Become a Patron',
        description: 'All major events for the school year.',
        icon: 'pi pi-dollar',
        to: '/donate/become-a-patron'
      },
      {
        label: 'One-time Donation',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'pi pi-money-bill',
        to: '/donate/one-time-donation'
      },
      {
        label: 'Donate School Supplies',
        description: 'Learn how to install and configure Nuxt UI in your application.',
        icon: 'pi pi-box',
        to: '/donate/donate-school-supplies'
      }
    ]
  },
  {
    label: 'Tuition & Enrollment',
    icon: 'pi pi-building-columns',
    to: '/tuition-enrollment',
    children: [
      {
        label: 'Enroll your Child',
        description: 'Forms, Emergency Contacts, Books.',
        icon: 'pi pi-id-card',
        to: '/tuition-enrollment/enroll-your-child'
      },
      {
        label: 'Become a volunteer',
        description: 'Teens and Adults can sign up to volunteer.',
        icon: 'pi pi-users',
        to: '/tuition-enrollment/become-a-volunteer'
      },
      {
        label: 'Pay Monthly Tuition',
        description: 'Pay fees online via Paypal, Zelle, and Venmo.',
        icon: 'pi pi-wallet',
        to: '/tuition-enrollment/pay-monthly-tuition'
      }
    ]
  },
  {
    label: 'Stay in Touch',
    icon: 'pi pi-comments',
    to: '/stay-in-touch',
    children: [
      {
        label: 'Monthly Newsletter',
        description: 'Updates and Reminders about Sunday School activities.',
        icon: 'pi pi-envelope',
        to: '/stay-in-touch/monthly-newsletter'
      },
      {
        label: 'Contact Us',
        description: 'Leave questions and gain additional information',
        icon: 'pi pi-phone',
        to: '/stay-in-touch/contact-us'
      }
    ]
  },
  {
    label: 'Staff Portal',
    icon: 'pi pi-user',
    to: '/staff-portal',
    children: [
      {
        label: 'Request Teacher Access',
        description: 'Teachers can post assignments and make announcements to their classes.',
        icon: 'pi pi-user-edit',
        to: '/staff-portal/request-teacher-access'
      },
      {
        label: 'Request Admin Access',
        description: 'For Administration members only.',
        icon: 'pi pi-shield',
        to: '/staff-portal/request-admin-access'
      }
    ]
  },
  {
    label: 'About Us',
    icon: 'pi pi-user', //replace later
    to: '/about',
    
  }
];
</script>