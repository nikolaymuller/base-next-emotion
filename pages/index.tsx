import * as React from 'react'
import { NextPage } from 'next'

import Meta from '@components/main/Meta'
import { HomePage } from '@components/HomePage'

const Page: NextPage = () => {
  return (
    <React.Fragment>
      <Meta title="Home" />
      <HomePage />
    </React.Fragment>
  )
}

export default Page
