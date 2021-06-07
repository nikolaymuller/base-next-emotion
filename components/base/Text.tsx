import * as React from 'react'

import { fontSizes } from '@components/main/theme/tokens'

export type FontFont = 'primary' | 'heading'

export type TextSize = keyof typeof fontSizes | 'inherit'
export type TextWeight = 'normal' | 'bold' | 'inherit'

export type TextTag = 'h1' | 'h2' | 'h3' | 'h5' | 'h6' | 'span' | 'p'

export interface TextProps {
  font?: FontFont
  size?: TextSize
  weight?: TextWeight
  asTag?: TextTag
}

export const Text: React.FC<TextProps> = ({
  font,
  size,
  weight,
  asTag = 'span',
  children,
  ...props
}) => {
  const Tag = asTag as keyof JSX.IntrinsicElements

  const _font = font ? `var(--font-${font})` : undefined
  const _size = size ? `var(--font-size-${size})` : undefined

  return (
    <Tag
      style={{
        fontFamily: _font,
        fontSize: _size,
        fontWeight: weight,
      }}
      {...props}
    >
      {children}
    </Tag>
  )
}
