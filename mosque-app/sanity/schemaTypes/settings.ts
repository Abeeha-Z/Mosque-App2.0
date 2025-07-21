import {defineField, defineType} from 'sanity'

export default {
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Site Title',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Site Description',
      type: 'array',
      of: [{ type: 'block' }], //for paragraphs

    },
    {
      name: 'darklight',
      title: 'Toggle Dark/Light Mode',
      type: 'boolean'
    }
  ]
}

