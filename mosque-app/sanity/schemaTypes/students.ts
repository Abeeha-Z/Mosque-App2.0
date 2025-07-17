import {defineField, defineType} from 'sanity'

export const students = defineType({
  name: 'students',
  title: 'Students',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'birthday',
        title: 'Date of Birth',
        type: 'date',
      }),
    defineField({
        name: 'class',
        title: 'Class', 
        type: 'string',
    }),
    defineField({
        name: 'emergency_contact',
        title: 'Emergency Contact',
        type: 'number',
    }),

  ],
})