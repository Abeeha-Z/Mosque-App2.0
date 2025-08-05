<template>

<Timeline :value="events" layout="horizontal" align="top">
    <template #opposite="slotProps">
        <img class=""></img>
        <small class="text-surface-500 dark:text-surface-400">{{slotProps.item.date}}</small>
    </template>

     <template #content="slotProps">
        {{ slotProps.item.year }}
    </template>
    <Card class="mt-4">
            <template #title>
                {{ slotProps.item.status }}
            </template>
            <template #subtitle>
                {{ slotProps.item.date }}
            </template>
            <template #content>
                <img v-if="slotProps.item.url" :src="`/images/product/${slotProps.item.image}`" :alt="slotProps.item.name" width="200" class="shadow-sm" />
                <p>{{ slotProps.item.description }}               </p>
                <Button label="Read more" @click='' variant="text"></Button>

            </template>
        </Card>

</Timeline>

</template>

<script setup>
import Timeline from 'primevue/timeline';

const events = ref([
  {
    year: '2025',
    description: 'Celebrating a year of growth and renewed community involvement.',
    highlights: [
      {
        title: 'Spring Fundraiser & Family Day',
        photos: [
          {
            caption: 'Families enjoying the outdoor picnic.',
            url: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
          },
          {
            caption: 'Volunteers setting up donation booths.',
            url: 'https://images.unsplash.com/photo-1588870031324-7f84d0e4e4f3',
          },
          {
            caption: 'Kids participating in craft activities.',
            url: 'https://images.unsplash.com/photo-1610878180933-e3a0fc923c7b',
          }
        ]
      }
    ]
  },
  {
    year: '2024',
    description: 'Focused on education and spiritual development.',
    highlights: [
      {
        title: 'Ramadan Community Iftar',
        photos: [
          {
            caption: 'Sunset prayers before the meal.',
            url: 'https://images.unsplash.com/photo-1626793385815-5fda5160bbee',
          },
          {
            caption: 'Volunteers preparing dates and water.',
            url: 'https://images.unsplash.com/photo-1590502593741-bddf00b0f84c',
          }
        ]
      }
    ]
  },
  {
    year: '2023',
    description: 'Rebuilding momentum after pandemic disruptions.',
    highlights: [
      {
        title: 'Annual Youth Workshop',
        photos: [
          {
            caption: 'Teens presenting group projects.',
            url: 'https://images.unsplash.com/photo-1616587227704-653fbb221ce4',
          },
          {
            caption: 'Mentors leading interactive sessions.',
            url: 'https://images.unsplash.com/photo-1543269865-cbf427effbad',
          }
        ]
      }
    ]
  },
  {
    year: '2022',
    description: 'Slow return to in-person events with caution.',
    highlights: [
      {
        title: 'Outdoor Prayer & Picnic',
        photos: [
          {
            caption: 'Families spaced out on picnic blankets.',
            url: 'https://images.unsplash.com/photo-1621609774694-5a019c93f5d4',
          },
          {
            caption: 'Children playing tag under adult supervision.',
            url: 'https://images.unsplash.com/photo-1502764613149-7f1d229e2300',
          }
        ]
      }
    ]
  },
  {
    year: '2021',
    description: 'Still mostly remote, but efforts to stay connected.',
    highlights: [
      {
        title: 'Virtual Eid Celebration',
        photos: [
          {
            caption: 'Families participating in Zoom calls.',
            url: 'https://images.unsplash.com/photo-1618477462627-3a26f0b64b93',
          },
          {
            caption: 'Virtual crafts session for kids.',
            url: 'https://images.unsplash.com/photo-1584697964403-e3f097bd52b7',
          }
        ]
      }
    ]
  },
  {
    year: '2020',
    description: 'The pandemic changed everything—events shifted online.',
    highlights: [
      {
        title: 'Online Sunday School Launch',
        photos: [
          {
            caption: 'Teacher leading a class from home.',
            url: 'https://images.unsplash.com/photo-1584697964154-3e7856c4d1dc',
          },
          {
            caption: 'Children attending class on tablets.',
            url: 'https://images.unsplash.com/photo-1600195077078-4a70da37e3c0',
          }
        ]
      }
    ]
  },
  {
    year: '2019',
    description: 'A vibrant and active year with many in-person events.',
    highlights: [
      {
        title: 'Back-to-School Carnival',
        photos: [
          {
            caption: 'Bounce house fun in the parking lot.',
            url: 'https://images.unsplash.com/photo-1595526114035-39c13a9a76e0',
          },
          {
            caption: 'Face painting station for kids.',
            url: 'https://images.unsplash.com/photo-1504196606672-aef5c9cefc92',
          },
          {
            caption: 'Volunteers serving cotton candy.',
            url: 'https://images.unsplash.com/photo-1597045566677-82d0f8fe0c8c',
          }
        ]
      }
    ]
  }
]);





</script>