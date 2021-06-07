import * as React from 'react'
import Head from 'next/head'
import { Global, CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

import { globalStyles } from './globalStyles'

export const WithTheme: React.FC = ({ children }) => {
  const myCache = createCache({
    key: 'my-prefix-key',
  })

  return (
    <React.Fragment>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open:wght@800&family=Nunito+Sans:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>

      <CacheProvider value={myCache}>
        <Global styles={globalStyles} />
        {children}
      </CacheProvider>
    </React.Fragment>
  )
}
