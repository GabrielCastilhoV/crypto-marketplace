import Head from 'next/head'

import { HomeView } from 'views'

const Home = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Home | Crypto</title>
      </Head>

      <HomeView />
    </>
  )
}

export default Home
