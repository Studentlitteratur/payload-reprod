import type { CollectionConfig } from 'payload'
import { RichTextEditor } from '@/editors/richtext-editor'

export const Editor: CollectionConfig = {
  slug: 'editor',
  fields: [
    {
        name: 'richtextEditor',
        type: 'richText',
        label: false,
        editor: RichTextEditor,
        admin: {
        disableListColumn: true,
        },
    },
  ],
}
