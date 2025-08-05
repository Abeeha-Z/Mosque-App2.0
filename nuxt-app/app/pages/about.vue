<template>

<Timeline :value="events">
     <template #content="slotProps">
        {{ slotProps.item.label }}
    </template>
</Timeline>

</template>

<script setup>
import Timeline from 'primevue/timeline';
const events = ref([
{ year: '2025',
    description:'',
    highlights: [
        {title:'',
        photos:[
            {
                caption:"",
                url:""
            }
        ]
        }
    ]
},

{
    year: '2019',
    description:'',
    highlights: [
        {title:'',
        photos:[
            {
                caption:"",
                url:""
            }
        ]
        }
    ]},
])



</script>