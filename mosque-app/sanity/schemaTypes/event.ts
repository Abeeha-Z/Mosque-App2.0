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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description', 
      type: 'array', //for paragraphs
      of: [{ type: 'block' }], //for paragraphs
   }),
   defineField({
      name: 'rsvp',
      title: 'RSVP', 
      type: 'file',
   }),

  ],
})