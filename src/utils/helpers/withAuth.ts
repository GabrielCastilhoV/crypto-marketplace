import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult
} from 'next'
import { destroyCookie, parseCookies } from 'nookies'

export function withAuth<P>(fn: GetServerSideProps<P>) {
  return async (
    context: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(context)
    const token = cookies['@nextauth.token'] || cookies['@metamask']

    if (!token) {
      return {
        redirect: {
          destination: '/login',
          permanent: false
        }
      }
    }

    try {
      return await fn(context)
    } catch (err) {
      if (err) {
        console.error(err)

        destroyCookie(context, '@nextauth.token')

        return {
          redirect: {
            destination: '/login',
            permanent: false
          }
        }
      }
    }
  }
}
