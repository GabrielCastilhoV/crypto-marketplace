import type { NextPage } from 'next'
import Head from 'next/head'

import { ProfileLayout } from 'layouts'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Crypto</title>
      </Head>

      <ProfileLayout />
    </>
  )
}

export default Profile
