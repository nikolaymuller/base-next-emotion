import * as React from 'react'
import type { AppProps } from 'next/app'

import { WithTheme } from '@components/main/theme'

// This script set global variables before render
const beforeRenderScript = `
  try {
    var isClient = typeof window !== 'undefined'
    
    if (isClient) {
      var ua = navigator.userAgent
      var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(ua)

      window.isClient = isClient
      window.device = isMobile ? 'mobile' : 'desktop'
    }
  } catch (e) {}
`

const App = ({ Component, pageProps }: AppProps): React.ReactElement => {
  return (
    <React.Fragment>
      <script dangerouslySetInnerHTML={{ __html: beforeRenderScript }} />
      <WithTheme>
        <Component {...pageProps} />
      </WithTheme>
    </React.Fragment>
  )
}

export default App
