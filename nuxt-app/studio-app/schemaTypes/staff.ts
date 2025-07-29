import {defineField, defineType} from 'sanity'

const class_levels = [
  {title: 'Level 1A', value: '1a'},
  {title: 'Level 1B', value: '1b'},
  {title: 'Level 1C', value: '1c'},
  {title: 'Level 2', value: '2'},
  {title: 'Level 3', value: '3'},
  {title: 'Level 4', value: '4'},
  {title: 'Level 5', value: '5'},
]

export const staffType = defineType({
  name: 'staff',
  title: 'Staff',
  type: 'document',
  fields: [
    defineField({
      name: 'staff_name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'staff_name'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),

    defineField({
      name: 'subjects',
      title: 'Subjects',
      type: 'array',
      of: [
        defineField({
          type: 'object',
          name: 'subjectItem',
          title: 'Subject Item',
          fields: [
            defineField({
              name: 'subject',
              title: 'Subject',
              type: 'string',
              options: {
                list: [
                  {title: 'Islamic History', value: 'islamic_history'},
                  {title: 'Islamic Studies', value: 'islamic_studies'},
                  {title: 'Arabic', value: 'arabic'},
                  {title: 'Surahs', value: 'surahs'},
                  {title: 'Salah', value: 'salah'},
                  {title: 'Tafseer', value: 'tafseer'},
                  {title: 'Contemporary Issues', value: 'contemp_issues'},
                ],
              },
              validation: (rule) => rule.required(),
            }),

            defineField({
              name: 'islamic_history_level',
              title: 'Islamic History Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'islamic_history',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),

            defineField({
              name: 'islamic_studies_level',
              title: 'Islamic Studies Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'islamic_studies',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),

            defineField({
              name: 'arabic_level',
              title: 'Arabic Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'arabic',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),

            defineField({
              name: 'surahs_level',
              title: 'Surahs Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'surahs',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),

            defineField({
              name: 'salah_level',
              title: 'Salah Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'salah',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),

            defineField({
              name: 'tafseer_level',
              title: 'Tafseer Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'tafseer',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),

            defineField({
              name: 'contemp_issues_level',
              title: 'Contemporary Issues Level',
              type: 'object',
              hidden: ({parent}) => parent?.subject !== 'contemp_issues',
              fields: [
                defineField({
                  name: 'Classes',
                  type: 'array',
                  of: [{type: 'string'}],
                  options: {list: class_levels},
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
})
