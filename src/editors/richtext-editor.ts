import { lexicalEditor, BlocksFeature, ParagraphFeature } from '@payloadcms/richtext-lexical'
import { Block } from 'payload'

const TextBlock: Block = {
  slug: 'textBlock',
  admin: {
    components: {
      Block: 'src/components/TextBlockPreview#TextBlockPreview',
    },
    disableBlockName: true,
  },
  fields: [
    {
      name: 'text',
      type: 'richText',
      required: true,
      editor: lexicalEditor({
        features: () => [ParagraphFeature()],
      }),
    },
  ],
}

export const RichTextEditor = lexicalEditor({
  features: () => [
    BlocksFeature({
      blocks: [TextBlock],
    }),
  ],
})