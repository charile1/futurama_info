import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Layout } from '../components/layouts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} /> 

      </Layout>
    </div>
  )

}

export default MyApp