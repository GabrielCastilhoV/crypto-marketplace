import Head from 'next/head'

import { HomeView } from 'views'

import { withAuth } from 'utils/helpers'

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

export const getServerSideProps = withAuth(async () => {
  return {
    props: {}
  }
})
