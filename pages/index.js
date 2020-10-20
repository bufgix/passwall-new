import React, { useContext } from 'react'
import Head from 'next/head'
import StoreContext from '../store'

import Layout from '../components/layout'
import LeftSide from '../components/leftside'

function HomePage() {
  const store = useContext(StoreContext)

  return (
    <Layout>
      <Head>
        <title>Passwall Web</title>
      </Head>
      <Layout className="contentBody">
        <LeftSide />
        <div>alskdjas</div>
      </Layout>
    </Layout>
  )
}

export default HomePage
