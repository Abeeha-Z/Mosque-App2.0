import {defineField, defineType} from 'sanity'
export const lessonType = defineType({
  name: 'lesson',
  title: 'lessonType',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'level',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
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