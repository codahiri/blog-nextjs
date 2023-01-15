import Layout from '../components/leyout.js'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
