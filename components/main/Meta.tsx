import * as React from 'react'
import Head from 'next/head'

import config from '../../site.config.json'

interface MetaProps {
  title: string
  description?: string
}

const Meta: React.FC<MetaProps> = ({ title, description, children }) => {
  const metaTitle = `${config.siteName} • ${title}`

  return (
    <Head>
      <title>{metaTitle}</title>
      {description && <meta name="description" content={description} />}
      {children}
    </Head>
  )
}

export default Meta
