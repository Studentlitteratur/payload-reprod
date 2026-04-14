'use client'

import type React from 'react'
import type { LexicalBlockClientProps } from '@payloadcms/richtext-lexical'
import { BlockEditButton, BlockRemoveButton} from '@payloadcms/richtext-lexical/client'
import { useFormFields } from '@payloadcms/ui'

export const TextBlockPreview: React.FC<LexicalBlockClientProps> = () => {
  const textField = useFormFields(([fields]) => fields?.text)


  return (
    <div
      style={{
        border: '1px solid var(--theme-elevation-200)',
        borderRadius: 6,
        padding: '0.75rem',
        marginBottom: '0.5rem',
        position: 'relative',
        background: 'var(--theme-elevation-50)',
      }}
    >
      <div style={{ position: 'absolute', top: 6, right: 6, display: 'flex', gap: 4 }}>
        <BlockEditButton />
        <BlockRemoveButton />
      </div>

      {textField.value ? (
        JSON.stringify(textField.value)
      ) : (
        <p
          style={{
            margin: 0,
            fontSize: '0.875rem',
            color: 'var(--theme-elevation-400)',
            paddingRight: '6rem',
          }}
        >
          Ingen text ännu…
        </p>
      )}
    </div>
  )
}
