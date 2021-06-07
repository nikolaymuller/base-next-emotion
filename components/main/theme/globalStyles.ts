import { css } from '@emotion/react'

import { colors, fonts, fontSizes } from './tokens'

export const globalStyles = css`
  :root {
    --color-primary: ${colors.primary};
    --color-paper: ${colors.paper};
    --font-primary: ${fonts.primary};
    --font-heading: ${fonts.heading};
    --font-size-tiny: ${fontSizes.tiny};
    --font-size-caption: ${fontSizes.caption};
    --font-size-small: ${fontSizes.small};
    --font-size-body: ${fontSizes.body};
    --font-size-lead: ${fontSizes.lead};
    --font-size-h5: ${fontSizes.h5};
    --font-size-h4: ${fontSizes.h4};
    --font-size-h3: ${fontSizes.h3};
    --font-size-h2: ${fontSizes.h2};
    --font-size-h1: ${fontSizes.h1};
    --font-size-hero: ${fontSizes.hero};
  }

  body {
    margin: 0;
    font-family: var(--font-primary);
    font-size: var(--font-size-body);
  }

  * {
    box-sizing: border-box;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-heading);
    font-weight: bold;
  }

  h1 {
    font-size: var(--font-size-h1);
  }

  h2 {
    font-size: var(--font-size-h2);
  }

  h3 {
    font-size: var(--font-size-h3);
  }

  h4 {
    font-size: var(--font-size-h4);
  }

  h5 {
    font-size: var(--font-size-h5);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
  }

  input,
  button {
    font-family: var(--font-primary);
  }
`
