import {defineField, defineType} from 'sanity'
export const eventType = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'event',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'location',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'upload',
      type: 'file',
    }),
    defineField({
    name: 'status',
    type: 'string',
    options: {
        list: [
        {title: 'Published', value: 'publish'},
        {title: 'Draft', value: 'draft'},
        {title: 'Archived', value: 'archived'},
        ],
        layout: 'radio', 
    },
    })
  ],
})