import { defineType, defineField } from 'sanity'

export const promotion = defineType({
  name: 'promotion',
  title: 'Promotion',
  type: 'document',
  icon: () => '🎯',
  fields: [
    defineField({
      name: 'title',
      title: 'Promotion Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Promotion Message',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Promotion Image',
      type: 'image',
      description: 'Optional image to display with the promotion',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for accessibility and SEO',
        }
      ]
    }),
    defineField({
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'type',
      title: 'Promotion Type',
      type: 'string',
      options: {
        list: [
          { title: 'Popup Modal', value: 'popup' },
          { title: 'Top Banner', value: 'banner' },
          { title: 'Bottom Banner', value: 'bottom-banner' },
          { title: 'Corner Notification', value: 'corner' },
        ],
      },
      initialValue: 'popup',
    }),
    defineField({
      name: 'ctaText',
      title: 'Call-to-Action Text',
      type: 'string',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Call-to-Action Link',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'message',
      isActive: 'isActive',
      type: 'type',
    },
    prepare(selection) {
      const { title, subtitle, isActive } = selection
      return {
        title: isActive ? `🟢 ${title}` : `⚫ ${title}`,
        subtitle: subtitle,
      }
    },
  },
})