import {defineField, defineType} from 'sanity'

export const lessons = defineType({
  name: 'lessons',
  title: 'Lesson',
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
        type: 'date',
      }),
    defineField({
        name: 'description',
        title: 'Description', 
        type: 'string',
    }),
    defineField({
        name: 'link',
        title: 'Link',
        type: 'url',
    }),

  ],
})