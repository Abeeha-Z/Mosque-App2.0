import {defineField, defineType} from 'sanity'

export const students = defineType({
  name: 'student',
  title: 'Students',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'birthday',
      title: 'Date of Birth',
      type: 'date',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'class',
      title: 'Class', 
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'emergency_contact',
      title: 'Emergency Contact',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
  ],
})