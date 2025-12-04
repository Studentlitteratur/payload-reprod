import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
    },
    {
      name: 'check',
      type: 'checkbox',
      label: 'Checkbox',
      defaultValue: false,
    },
  ],
  upload: true,
}
