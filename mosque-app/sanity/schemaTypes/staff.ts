import {defineField, defineType} from 'sanity'

export const staff = defineType({
  name: 'staff',
  title: 'Staffs',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
        name: 'Phone_number',
        title: 'Phone Numer',
        type: 'number',
      }),
    defineField({
        name: 'email',
        title: 'email', 
        type: 'string',
    }),
    defineField({
        name: 'subject',
        type: 'string',
    }),
  ],
})