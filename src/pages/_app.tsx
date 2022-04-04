import { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'

const MyApp = ({ Component, pageProps }: AppProps) => {
  globalStyles()
  return <Component {...pageProps} />
}

export default MyApp
