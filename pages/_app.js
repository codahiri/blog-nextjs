import Layout from '../components/leyout'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
