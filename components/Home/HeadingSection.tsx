import * as React from 'react'
import { css } from '@emotion/react'

import { Text, Container } from '@components/base'

export const HeadingSection = (): React.ReactElement => {
  return (
    <section
      css={css`
        display: flex;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: var(--color-paper);
        color: #ffffff;
      `}
    >
      <Container>
        <div>
          <div>
            <span
              css={css`
                padding: 0.6rem 1rem;
                margin-left: -0.8rem;
                background-color: #111d27;
                border-radius: 100px;
                color: var(--color-primary);
                font-size: var(--font-size-caption);
                user-select: none;
              `}
            >
              Template
            </span>
          </div>
          <Text asTag="h1" size="h3">
            Next + Emotion template
          </Text>
          <div>
            <Text asTag="h2" size="h5" weight="bold">
              Technologies
            </Text>
            <ul>
              <li>NextJS (React)</li>
              <li>Emotion</li>
            </ul>
            <Text asTag="h2" size="h5" weight="bold">
              Tooling
            </Text>
            <ul>
              <li>ESlint</li>
              <li>Prettier</li>
              <li>Stylelint</li>
              <li>Typescript</li>
              <li>Commitlint</li>
            </ul>
            <a
              href="https://github.com/nikolaymuller/starter-next-emotion"
              rel="noreferrer"
              target="_blank"
            >
              GitHub repo →
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
