import { defineField, defineType } from 'sanity'

export const businessSettings = defineType({
  name: 'businessSettings',
  title: 'Business Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      initialValue: 'Business Settings',
      readOnly: true,
      hidden: true,
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Day',
              type: 'string',
              options: {
                list: [
                  { title: 'Monday', value: 'Monday' },
                  { title: 'Tuesday', value: 'Tuesday' },
                  { title: 'Wednesday', value: 'Wednesday' },
                  { title: 'Thursday', value: 'Thursday' },
                  { title: 'Friday', value: 'Friday' },
                  { title: 'Saturday', value: 'Saturday' },
                  { title: 'Sunday', value: 'Sunday' },
                ],
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'hours',
              title: 'Hours',
              type: 'string',
              description: 'e.g., "9:00am - 5:00pm" or "Closed"',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'isClosed',
              title: 'Is Closed',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              day: 'day',
              hours: 'hours',
            },
            prepare({ day, hours }) {
              return {
                title: day,
                subtitle: hours,
              }
            },
          },
        },
      ],
      initialValue: [
        { day: 'Monday', hours: 'Closed', isClosed: true },
        { day: 'Tuesday', hours: '9:00am - 5:00pm', isClosed: false },
        { day: 'Wednesday', hours: '9:00am - 5:00pm', isClosed: false },
        { day: 'Thursday', hours: '9:00am - 5:00pm', isClosed: false },
        { day: 'Friday', hours: '9:00am - 5:00pm', isClosed: false },
        { day: 'Saturday', hours: 'Closed', isClosed: true },
        { day: 'Sunday', hours: 'Closed', isClosed: true },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Business Settings',
      }
    },
  },
})
