import type { NextPage } from 'next'
import Head from 'next/head'

import { ProfileView } from 'views'

import { withAuth } from 'utils/helpers'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Crypto</title>
      </Head>

      <ProfileView />
    </>
  )
}

export default Profile

export const getServerSideProps = withAuth(async () => {
  return {
    props: {}
  }
})
