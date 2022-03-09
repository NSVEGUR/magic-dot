import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Header from 'src/components/Header/Header'
import Auth from 'src/components/Auth/Auth'
import Footer from 'src/components/Footer/Footer'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} className="mt-10"></Component>
      <Header></Header>
      <Auth></Auth>
      <Footer></Footer>
    </>
  )
}

export default MyApp
