import '../../styles/globals.css'
import type { AppProps } from 'next/app'
import Favicon from 'ui/src/Favicon'
import Head from 'next/head'
import Navbar from 'src/components/Navbar/Navbar'
import Footer from 'src/components/Footer/Footer'
import Help from 'src/components/Help/Help'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Magic Dot</title>
        <Favicon></Favicon>
      </Head>
      <header>
        <Navbar></Navbar>
      </header>
      <Component {...pageProps}></Component>
      <footer>
        <Help></Help>
        <Footer></Footer>
      </footer>
    </>
  )
}

export default MyApp
