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
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone_number',
      title: 'Phone Numer',
      type: 'number',
      validation: Rule => Rule.required(),

      }),
    defineField({
      name: 'email',
      title: 'email', 
      type: 'string',
      validation: Rule => Rule.required(),

    }),
    defineField({
      name: 'subject',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'profile',
      type: 'image',
    }),
  ],
})