import * as React from 'react'
import { css } from '@emotion/react'

export const containerStyles = css`
  padding: 0 2rem;
`

export const Container: React.FC = ({ children }) => {
  return (
    <div
      css={css`
        ${containerStyles}
      `}
    >
      {children}
    </div>
  )
}
