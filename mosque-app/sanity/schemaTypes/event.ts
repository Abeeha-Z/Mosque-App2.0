import {defineField, defineType} from 'sanity'

export const events = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'date',
        title: 'Date',
        type: 'Date',
      }),
    defineField({
        name: 'description',
        title: 'Description', 
        type: 'string',
    }),
  ],
})