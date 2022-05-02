import type { AppProps } from 'next/app'
import 'animate.css'

import { useRouter } from 'next/router'

import { HomeProvider, AuthProvider } from 'contexts'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import { AppLayout } from 'components/layouts'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  const router = useRouter()
  const isLogin = router.pathname === '/login'

  const client = useApollo(pageProps.initialApolloState)

  return (
    <AuthProvider>
      <AppLayout hasNavigation={!isLogin}>
        <ApolloProvider client={client}>
          <HomeProvider>
            <Component {...pageProps} />
          </HomeProvider>
        </ApolloProvider>
      </AppLayout>
    </AuthProvider>
  )
}

export default MyApp
