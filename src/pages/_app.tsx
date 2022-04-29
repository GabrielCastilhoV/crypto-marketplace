import type { AppProps } from 'next/app'
import 'animate.css'

import { useRouter } from 'next/router'

import { ApolloProvider } from '@apollo/client'
import { useApollo } from 'utils/apollo'

import { globalStyles } from 'styles/global'
import { AppLayout } from 'components/layouts'
import { HomeProvider } from 'contexts'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()

  const router = useRouter()
  const isLogin = router.pathname === '/login'

  const client = useApollo(pageProps.initialApolloState)

  return (
    <AppLayout hasNavigation={!isLogin}>
      <ApolloProvider client={client}>
        <HomeProvider>
          <Component {...pageProps} />
        </HomeProvider>
      </ApolloProvider>
    </AppLayout>
  )
}

export default MyApp
