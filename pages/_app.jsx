import Layout from '../components/Layout'
import NextProgressBar from 'nextjs-progressbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <NextProgressBar
        color="#059669"
        startPosition={0.2}
        stopDelayMs={500}
        height="5"
      />
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
