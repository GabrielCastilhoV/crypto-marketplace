import type { NextPage } from 'next'
import Head from 'next/head'

import { ProfileView } from 'views'

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
