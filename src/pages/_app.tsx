import type { AppProps } from 'next/app'

import { BaseLayout } from 'layouts'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return (
    <BaseLayout>
      <Component {...pageProps} />
    </BaseLayout>
  )
}

export default MyApp
