import type { NextPage } from 'next'
import Head from 'next/head'

import { BaseLayout, ProfileLayout } from 'layouts'

const Profile: NextPage = () => {
  return (
    <>
      <Head>
        <title>Profile | Crypto</title>
      </Head>

      <BaseLayout>
        <ProfileLayout />
      </BaseLayout>
    </>
  )
}

export default Profile
