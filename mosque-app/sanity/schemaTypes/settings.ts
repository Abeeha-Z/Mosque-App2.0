import {defineField, defineType} from 'sanity'

export const settings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string'
    }),
    defineField ({
      name: 'description',
      title: 'Site Description',
      type: 'array',
      of: [{ type: 'block' }], //for paragraphs

    }),
    defineField({
      name: 'darklight',
      title: 'Toggle Dark/Light Mode',
      type: 'boolean'
    })
  ]
})

