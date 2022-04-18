import type { NextPage } from 'next'
import Head from 'next/head'

import { HomeLayout } from 'layouts'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | Crypto</title>
      </Head>

      <HomeLayout />
    </>
  )
}

export default Home
